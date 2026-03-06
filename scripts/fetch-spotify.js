import { writeFileSync, readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Optionally load .env for local development (CI sets env vars directly)
try {
    const envFile = readFileSync(resolve(__dirname, '../.env'), 'utf8');
    envFile.split('\n').forEach(line => {
        const [key, ...rest] = line.split('=');
        const val = rest.join('=').trim();
        if (key?.trim() && val && !process.env[key.trim()]) {
            process.env[key.trim()] = val;
        }
    });
} catch { /* no .env file — fine in CI */ }

const CLIENT_ID     = process.env.SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;
const REFRESH_TOKEN = process.env.SPOTIFY_REFRESH_TOKEN;

const FALLBACK = [];

if (!CLIENT_ID || !CLIENT_SECRET || !REFRESH_TOKEN) {
    console.warn('⚠️  Spotify env vars not set — writing empty fallback to public/spotify.json');
    writeFileSync(
        resolve(__dirname, '../public/spotify.json'),
        JSON.stringify(FALLBACK, null, 2)
    );
    process.exit(0);
}

async function getAccessToken() {
    const res = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization: 'Basic ' + Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64'),
        },
        body: new URLSearchParams({
            grant_type: 'refresh_token',
            refresh_token: REFRESH_TOKEN,
        }),
    });

    if (!res.ok) throw new Error(`Token refresh failed: ${res.status} ${await res.text()}`);
    const data = await res.json();
    return data.access_token;
}


async function main() {
    const accessToken = await getAccessToken();

    const topRes = await fetch(
        'https://api.spotify.com/v1/me/top/tracks?limit=6&time_range=short_term',
        { headers: { Authorization: `Bearer ${accessToken}` } }
    );

    if (!topRes.ok) {
        const errorText = await topRes.text();
        throw new Error(`Top tracks failed: ${topRes.status} ${errorText}`);
    }

    const { items } = await topRes.json();

    if (!items?.length) {
        throw new Error("No top tracks returned.");
    }

    const output = items.map(track => ({
        title: track.name,
        artist: track.artists.map(a => a.name).join(', '),
        album: track.album.name,
        albumArt: track.album.images[1]?.url || track.album.images[0]?.url || '',
        url: track.external_urls.spotify,
    }));

    writeFileSync(
        resolve(__dirname, '../public/spotify.json'),
        JSON.stringify(output, null, 2)
    );

    console.log(`✓ Spotify: ${output.length} top tracks written`);
}

main().catch(err => {
    console.error('fetch-spotify failed:', err.message);
    
    process.exit(1);
});
