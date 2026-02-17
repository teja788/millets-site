# Website Blueprint: From Idea to Live Production

A complete step-by-step process for building, deploying, and optimizing a modern website. Based on real production experience.

---

## Phase 1: Planning & Setup

### 1.1 Define the Project
- Pick your niche/topic
- Decide on the core pages and content structure
- Choose a domain name (short, memorable, relevant)

### 1.2 Choose Your Stack
| Layer | Recommendation | Why |
|-------|---------------|-----|
| Framework | Next.js (App Router) | SSG, SSR, SEO-friendly, file-based routing |
| Language | TypeScript | Catches bugs early, better DX |
| Styling | Tailwind CSS v4 | Utility-first, fast iteration |
| Animations | Framer Motion | Declarative, performant |
| Hosting | Vercel | Zero-config for Next.js, free tier, auto-deploy |
| Domain | Any registrar (Namecheap, GoDaddy, Cloudflare) | Point nameservers to Vercel |

### 1.3 Initialize the Project
```bash
npx create-next-app@latest my-site --typescript --tailwind --app --eslint
cd my-site
npm install framer-motion lucide-react
```

> **Note:** If your directory name has capital letters, `create-next-app` may fail. Use `npm init` manually and install packages individually.

### 1.4 Set Up Version Control
```bash
git init
git add .
git commit -m "Initial project setup"
```

Create a repo on GitHub and push:
```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git branch -M master
git push -u origin master
```

---

## Phase 2: Design & Development

### 2.1 Define Your Theme
- Pick a color palette (2 primary color ranges + neutrals)
- Choose fonts (1 heading + 1 body font via `next/font/google`)
- Define the colors in your CSS using Tailwind v4's `@theme` directive

### 2.2 Build the Layout Shell
Create these first — everything else fits inside:
1. `app/layout.tsx` — Root layout with fonts, metadata, providers
2. Navbar component — Navigation with links
3. Footer component — Site-wide footer
4. Theme provider — If supporting dark mode

### 2.3 Build Pages Incrementally
- Start with the homepage
- Add static pages one at a time
- Create data files (`.ts`) for structured content
- Add dynamic routes (`[slug]`) with `generateStaticParams` for SSG
- Use `next/image` with WebP format for all images

### 2.4 Optimize Images
- Convert all images to WebP format (use `sharp` — it comes with Next.js)
- Use `next/image` component for lazy loading and optimization
- Keep images in `public/` directory

```javascript
// Quick conversion script using sharp (already in node_modules via Next.js)
const sharp = require('sharp');
await sharp('input.png').webp({ quality: 85 }).toFile('output.webp');
```

### 2.5 Commit Regularly
```bash
git add <specific-files>
git commit -m "Add feature: description of what and why"
git push origin master
```

---

## Phase 3: SEO Foundations

### 3.1 Metadata on Every Page
Every page should export metadata:
```tsx
export const metadata: Metadata = {
  title: 'Page Title',
  description: 'A clear 150-160 character description.',
  keywords: ['relevant', 'keywords'],
};
```

### 3.2 Create `sitemap.ts`
Place in `app/sitemap.ts`. Next.js auto-generates `/sitemap.xml` from this:
```tsx
import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const BASE_URL = 'https://yourdomain.com';

  const staticPages = ['', '/about', '/contact'].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  // Add dynamic pages from your data files
  const dynamicPages = yourData.map((item) => ({
    url: `${BASE_URL}/items/${item.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  return [...staticPages, ...dynamicPages];
}
```

### 3.3 Create `robots.ts`
Place in `app/robots.ts`:
```tsx
import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://yourdomain.com/sitemap.xml',
  };
}
```

### 3.4 Structured Data (Optional but Recommended)
Add JSON-LD schema markup for rich search results (recipes, articles, FAQ, etc.)

---

## Phase 4: PWA (Progressive Web App)

Makes your site work offline — great for content-heavy sites.

### 4.1 Install Serwist
```bash
npm install @serwist/next serwist
```

### 4.2 Create Service Worker (`app/sw.ts`)
```tsx
import { defaultCache } from "@serwist/next/worker";
import type { PrecacheEntry, SerwistGlobalConfig } from "serwist";
import { Serwist } from "serwist";

declare global {
  interface WorkerGlobalScope extends SerwistGlobalConfig {
    __SW_MANIFEST: (PrecacheEntry | string)[] | undefined;
  }
}

declare const self: ServiceWorkerGlobalScope;

const serwist = new Serwist({
  precacheEntries: self.__SW_MANIFEST,
  skipWaiting: true,
  clientsClaim: true,
  navigationPreload: true,
  runtimeCaching: defaultCache,
});

serwist.addEventListeners();
```

### 4.3 Update `next.config.mjs`
```javascript
import withSerwistInit from '@serwist/next';

const withSerwist = withSerwistInit({
  swSrc: 'app/sw.ts',
  swDest: 'public/sw.js',
  disable: process.env.NODE_ENV === 'development',
});

export default withSerwist(yourExistingConfig);
```

### 4.4 Update `tsconfig.json`
Add to `compilerOptions`:
```json
{
  "lib": ["dom", "dom.iterable", "esnext", "webworker"],
  "types": ["@serwist/next/typings"]
}
```
Add to `exclude`:
```json
{
  "exclude": ["node_modules", "public/sw.js"]
}
```

### 4.5 Create `public/manifest.json`
```json
{
  "name": "Your Site Name",
  "short_name": "Short Name",
  "description": "Brief description",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#FFFFFF",
  "theme_color": "#000000",
  "icons": [
    { "src": "/icons/icon-192x192.webp", "sizes": "192x192", "type": "image/webp", "purpose": "any" },
    { "src": "/icons/icon-512x512.webp", "sizes": "512x512", "type": "image/webp", "purpose": "any" },
    { "src": "/icons/icon-maskable-192x192.webp", "sizes": "192x192", "type": "image/webp", "purpose": "maskable" },
    { "src": "/icons/icon-maskable-512x512.webp", "sizes": "512x512", "type": "image/webp", "purpose": "maskable" }
  ]
}
```

### 4.6 Add PWA Meta to `layout.tsx`
```tsx
export const metadata: Metadata = {
  // ...existing metadata
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Your App Name',
  },
};

export const viewport: Viewport = {
  themeColor: '#000000',
};
```

> **Important:** In Next.js 14+, `themeColor` must go in a `viewport` export, NOT in `metadata`.

### 4.7 Generate PWA Icons
Use sharp (already available via Next.js) to generate 192x192 and 512x512 icons in both regular and maskable variants. Place them in `public/icons/`.

---

## Phase 5: Hosting & Domain

### 5.1 Deploy to Vercel
1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click **"Add New Project"**
3. Import your GitHub repository
4. Vercel auto-detects Next.js — click **Deploy**
5. Every future `git push` triggers auto-deployment

### 5.2 Connect Your Custom Domain
1. Buy a domain from any registrar
2. In your registrar's settings, change **nameservers** to:
   - `ns1.vercel-dns.com`
   - `ns2.vercel-dns.com`
3. In Vercel: Project → **Settings** → **Domains** → Add your domain
4. Vercel auto-configures SSL (HTTPS) — wait a few minutes

### 5.3 Set Environment Variables on Vercel
1. Project → **Settings** → **Environment Variables**
2. Add any `NEXT_PUBLIC_*` variables your site needs
3. Redeploy after adding new variables

---

## Phase 6: Google Analytics

### 6.1 Create GA4 Property
1. Go to [analytics.google.com](https://analytics.google.com)
2. **Admin** → **Create Property**
3. Enter your site name and URL
4. Create a **Web** data stream
5. Copy the **Measurement ID** (starts with `G-`)

### 6.2 Add to Your Site
In `.env.local` (local development):
```
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

In `layout.tsx`:
```tsx
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

// Inside <html>, before <body>:
{GA_ID && (
  <>
    <Script
      src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
      strategy="afterInteractive"
    />
    <Script id="google-analytics" strategy="afterInteractive">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GA_ID}');
      `}
    </Script>
  </>
)}
```

### 6.3 Add to Vercel
1. Vercel → Project → **Settings** → **Environment Variables**
2. Add: `NEXT_PUBLIC_GA_ID` = `G-XXXXXXXXXX`
3. Redeploy

### 6.4 Verify
- Visit your live site
- Go to GA → **Reports** → **Realtime**
- You should see 1 active user (yourself)
- The "Data collection not active" warning takes 24-48 hours to clear

> **Note:** `NEXT_PUBLIC_` variables are exposed to the browser. GA Measurement IDs are **designed to be public** — this is safe.

---

## Phase 7: Google Search Console

### 7.1 Add Your Property
1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Click **"Add Property"**
3. Choose **"Domain"** and enter your domain
4. It will ask you to verify via DNS TXT record

### 7.2 Verify Domain Ownership
1. Copy the `google-site-verification=XXXX` TXT record
2. Go to Vercel → Project → **Settings** → **Domains** → your domain
3. Add a DNS record:
   - **Type:** TXT
   - **Name:** `@` (or leave blank)
   - **Value:** paste the full verification string
4. Go back to Search Console → click **Verify**
5. DNS propagation can take a few minutes to a few hours

### 7.3 Submit Your Sitemap
1. In Search Console → **Sitemaps** (left sidebar)
2. Enter: `https://yourdomain.com/sitemap.xml`
3. Click **Submit**
4. Google will start crawling and indexing your pages

### 7.4 Verify robots.txt
- Visit `https://yourdomain.com/robots.txt` in a browser
- Should show `User-agent: *`, `Allow: /`, and your sitemap URL
- This tells Google it's welcome to crawl everything

---

## Phase 8: Post-Launch Checklist

### Performance
- [ ] Run Lighthouse audit (Chrome DevTools → Lighthouse)
- [ ] All images in WebP format
- [ ] `next/image` used for all images
- [ ] Fonts loaded with `next/font` (no layout shift)

### SEO
- [ ] Every page has unique `title` and `description`
- [ ] `sitemap.xml` accessible and lists all pages
- [ ] `robots.txt` allows crawling
- [ ] Google Search Console verified and sitemap submitted
- [ ] Structured data added where applicable

### Analytics
- [ ] GA4 tracking verified in Realtime report
- [ ] Environment variable set on Vercel

### PWA
- [ ] `manifest.json` accessible at `/manifest.json`
- [ ] Service worker registers on production build
- [ ] Site works offline after first visit
- [ ] "Add to Home Screen" works on mobile

### Security
- [ ] `.env.local` is gitignored (never commit secrets)
- [ ] HTTPS enabled (automatic with Vercel)
- [ ] No API keys or secrets in client-side code

---

## Quick Reference: Common Commands

```bash
# Development
npm run dev                  # Start dev server
npm run build                # Production build
npm run start                # Start production server

# Git workflow
git add <files>              # Stage specific files
git commit -m "message"      # Commit
git push origin master       # Push to GitHub (triggers Vercel deploy)

# Vercel CLI (if auto-deploy isn't working)
npx vercel --prod            # Manual production deploy

# Check GitHub CLI
gh api repos/USER/REPO/commits?per_page=3 --jq ".[].commit.message"
```

---

## File Structure Reference

```
my-site/
├── app/
│   ├── layout.tsx           # Root layout (fonts, GA, metadata, PWA)
│   ├── page.tsx             # Homepage
│   ├── sitemap.ts           # Auto-generated sitemap.xml
│   ├── robots.ts            # Auto-generated robots.txt
│   ├── sw.ts                # Service worker (PWA)
│   ├── about/page.tsx       # Static page example
│   └── items/[slug]/page.tsx # Dynamic page example
├── components/
│   ├── layout/              # Navbar, Footer, etc.
│   ├── ui/                  # Reusable UI components
│   └── sections/            # Page-specific sections
├── data/                    # Structured content (.ts files)
├── lib/                     # Utils, types, helpers
├── public/
│   ├── icons/               # PWA icons (webp)
│   ├── images/              # Site images (webp)
│   └── manifest.json        # PWA manifest
├── styles/
│   └── globals.css          # Tailwind + custom theme
├── .env.local               # Environment variables (gitignored)
├── next.config.mjs          # Next.js + Serwist config
├── tsconfig.json            # TypeScript config
└── package.json
```

---

*This blueprint covers the full journey from `npm init` to a live, indexed, analytics-tracked PWA. Adapt the specifics to your stack and content — the process stays the same.*
