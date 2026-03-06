/**
 * One-time script to get a Spotify refresh token.
 *
 * Steps:
 *   1. Add http://127.0.0.1:8888/callback as a Redirect URI in your Spotify
 *      app dashboard → https://developer.spotify.com/dashboard → Edit Settings
 *   2. Run: node scripts/get-spotify-token.js
 *   3. Open the printed URL in your browser and authorize
 *   4. You'll land on a "page can't be reached" page — that's fine.
 *      Copy the full URL from your address bar and paste it here.
 *   5. Copy the refresh token that's printed and add it as
 *      SPOTIFY_REFRESH_TOKEN in GitHub → Settings → Secrets → Actions
 */

import readline from 'readline';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import { readFileSync } from 'fs';

// Load .env manually
const __dirname = dirname(fileURLToPath(import.meta.url));
const envPath = resolve(__dirname, '../.env');
let CLIENT_ID, CLIENT_SECRET;

try {
    const envFile = readFileSync(envPath, 'utf8');
    envFile.split('\n').forEach(line => {
        const [key, ...rest] = line.split('=');
        const val = rest.join('=').trim();
        if (key?.trim() === 'SPOTIFY_CLIENT_ID') CLIENT_ID = val;
        if (key?.trim() === 'SPOTIFY_CLIENT_SECRET') CLIENT_SECRET = val;
    });
} catch {
    console.error('Could not read .env — make sure SPOTIFY_CLIENT_ID and SPOTIFY_CLIENT_SECRET are set.');
    process.exit(1);
}

if (!CLIENT_ID || !CLIENT_SECRET) {
    console.error('SPOTIFY_CLIENT_ID and SPOTIFY_CLIENT_SECRET must be set in .env');
    process.exit(1);
}

const REDIRECT_URI = 'http://127.0.0.1:8888/callback';
const SCOPE = 'user-top-read user-read-recently-played user-read-currently-playing';
const authUrl =
    'https://accounts.spotify.com/authorize?' +
    new URLSearchParams({
        client_id: CLIENT_ID,
        response_type: 'code',
        redirect_uri: REDIRECT_URI,
        scope: SCOPE,
    }).toString();

console.log('\n👉  Open this URL in your browser:\n');
console.log(authUrl);
console.log('\nAfter authorizing, your browser will redirect to localhost and show');
console.log('"page can\'t be reached" — that\'s expected.');
console.log('Copy the full URL from your address bar and paste it below.\n');

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question('Paste the redirect URL here: ', async (redirected) => {
    rl.close();

    let code;
    try {
        const url = new URL(redirected.trim());
        code = url.searchParams.get('code');
        const error = url.searchParams.get('error');
        if (error) throw new Error('Spotify returned error: ' + error);
    } catch (e) {
        console.error('\n✗ Could not parse URL:', e.message);
        process.exit(1);
    }

    if (!code) {
        console.error('\n✗ No code found in URL. Make sure you copied the full redirect URL.');
        process.exit(1);
    }

    // Exchange code for tokens
    const tokenRes = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization: 'Basic ' + Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64'),
        },
        body: new URLSearchParams({
            grant_type: 'authorization_code',
            code,
            redirect_uri: REDIRECT_URI,
        }),
    });

    const tokens = await tokenRes.json();

    if (tokens.error) {
        console.error('\n✗ Token exchange failed:', tokens.error_description);
        process.exit(1);
    }

    console.log('\n✅  Success!\n');
    console.log('Add this as SPOTIFY_REFRESH_TOKEN in GitHub → Settings → Secrets → Actions:\n');
    console.log(tokens.refresh_token);
    console.log('');
});
