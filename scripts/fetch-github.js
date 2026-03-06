import { writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

const GITHUB_USERNAME = 'shriya-upadhyay';
const TOKEN = process.env.GITHUB_TOKEN;

const FALLBACK = { totalContributions: 0, weeks: [] };

if (!TOKEN) {
    console.warn('⚠️  GITHUB_TOKEN not set — writing empty fallback to public/github.json');
    writeFileSync(
        resolve(__dirname, '../public/github.json'),
        JSON.stringify(FALLBACK, null, 2)
    );
    process.exit(0);
}

const query = `
  query {
    user(login: "${GITHUB_USERNAME}") {
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              date
              contributionCount
              contributionLevel
            }
          }
        }
      }
    }
  }
`;

const LEVEL_MAP = {
    NONE: 0,
    FIRST_QUARTILE: 1,
    SECOND_QUARTILE: 2,
    THIRD_QUARTILE: 3,
    FOURTH_QUARTILE: 4,
};

async function main() {
    const res = await fetch('https://api.github.com/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${TOKEN}`,
        },
        body: JSON.stringify({ query }),
    });

    if (!res.ok) {
        throw new Error(`GitHub API ${res.status}: ${await res.text()}`);
    }

    const { data, errors } = await res.json();
    if (errors) throw new Error(JSON.stringify(errors));

    const cal = data.user.contributionsCollection.contributionCalendar;

    const weeks = cal.weeks.map(w => ({
        days: w.contributionDays.map(d => ({
            date: d.date,
            count: d.contributionCount,
            level: LEVEL_MAP[d.contributionLevel] ?? 0,
        })),
    }));

    const output = { totalContributions: cal.totalContributions, weeks };

    writeFileSync(
        resolve(__dirname, '../public/github.json'),
        JSON.stringify(output, null, 2)
    );

    console.log(`✓ GitHub: ${cal.totalContributions} contributions, ${weeks.length} weeks → public/github.json`);
}

main().catch(err => {
    console.error('fetch-github failed:', err.message);
    process.exit(1);
});
