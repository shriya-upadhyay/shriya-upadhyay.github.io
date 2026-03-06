import Parser from 'rss-parser';
import { writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

const parser = new Parser({
    customFields: {
        item: [['media:content', 'mediaContent']],
    },
});

function extractThumbnail(item) {
    // Try media:content first
    const mediaUrl = item.mediaContent?.['$']?.url;
    if (mediaUrl && !mediaUrl.includes('stat?event=')) return mediaUrl;
    // Fall back to first real <img> in the full HTML content
    const html = item['content:encoded'] || '';
    const matches = [...html.matchAll(/<img[^>]+src="([^"]+)"/g)];
    const realImg = matches.find(m => !m[1].includes('stat?event='));
    return realImg?.[1] || '';
}

function extractExcerpt(item) {
    const html = item['content:encoded'] || '';
    // Strip HTML tags, then clean up photo credits + extra whitespace
    const text = html
        .replace(/<[^>]+>/g, ' ')       // remove tags
        .replace(/&nbsp;/g, ' ')
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/\s+/g, ' ')           // collapse whitespace first
        .replace(/Photo by .+? on Unsplash\.?/gi, '') // then remove photo credits
        .replace(/\s+/g, ' ')           // re-collapse after removal
        .trim();
    return text.slice(0, 200).trim();
}

(async () => {
    try {
        console.log('Fetching Medium posts...');
        const feed = await parser.parseURL('https://medium.com/feed/@shriyau19');

        const posts = feed.items.slice(0, 6).map(item => ({
            title: item.title || '',
            link: item.link || '',
            pubDate: item.pubDate || '',
            thumbnail: extractThumbnail(item),
            excerpt: extractExcerpt(item),
        }));

        const outPath = resolve(__dirname, '../public/medium.json');
        writeFileSync(outPath, JSON.stringify(posts, null, 2));
        console.log(`✓ Saved ${posts.length} posts → public/medium.json`);
    } catch (err) {
        console.error('✗ Failed to fetch Medium posts:', err.message);
        process.exit(1);
    }
})();
