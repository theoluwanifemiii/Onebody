# Onebody Church — Website

The official website for Onebody Church, Lagos. Built with Next.js 15 App Router, deployed on Vercel.

## Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Animations | GSAP 3 |
| Deployment | Vercel |

---

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home |
| `/about` | About the church |
| `/services` | Service schedule |
| `/sermons` | Sermon archive + YouTube live + Mixlr audio |
| `/giving` | Giving / donation details |
| `/academy` | Onebody Academy application |
| `/charity` | Charity & outreach |
| `/lords-table` | Lord's Table schedule |
| `/blog` | Blog index |
| `/posts/[slug]` | Individual blog post |

---

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Content management

### Sermons
Edit [`public/data/sermons.json`](public/data/sermons.json). Each entry:

```json
{
  "title": "Sermon title",
  "speaker": "Speaker name",
  "date": "Month DD, YYYY",
  "series": "Series name",
  "youtubeId": "https://www.youtube.com/watch?v=VIDEO_ID"
}
```

The first entry in the array is automatically used as the featured sermon.

### Blog posts
Edit [`public/data/posts.json`](public/data/posts.json) for the post index. Post content lives in [`public/posts/`](public/posts/) as HTML files.

### Site-wide config
[`src/lib/site-data.ts`](src/lib/site-data.ts) holds all central constants — church address, YouTube URLs, service schedule, and the YouTube channel ID for the live player.

---

## YouTube live stream

The live player on `/sermons` uses YouTube's channel embed URL — no API key or server logic needed. When the channel is live, the stream appears automatically. When offline, YouTube shows its own offline screen.

**One-time setup:** open [`src/lib/site-data.ts`](src/lib/site-data.ts) and set `YOUTUBE_CHANNEL_ID` to your channel's `UC…` ID. Find it in **YouTube Studio → Settings → Channel → Basic info**.

```ts
export const YOUTUBE_CHANNEL_ID = 'UCxxxxxxxxxxxxxxxxxxxxxxxx';
```

---

## Flash ads

Promotional banners are driven by [`public/ads/`](public/ads/). Each ad is a standalone HTML file. The `FlashAd` component loads them in rotation.

---

## Image tooling

[`tools/image-manager.mjs`](tools/image-manager.mjs) is a local dev script for batch-resizing and optimising images before committing. Original (uncompressed) images live in `dev-originals/` (git-ignored). Run it once when adding new photos:

```bash
node tools/image-manager.mjs
```

---

## Deployment

Pushes to `main` deploy automatically via Vercel. No environment variables are required for production.
