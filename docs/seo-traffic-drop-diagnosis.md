# SEO Traffic Drop — Diagnosis & Recommendations

**Date:** 2026-06-22
**Site:** https://simplymillets.com (Next.js, deployed on Vercel)
**Symptom:** Organic traffic fell from a "decent" level to ~1–2 visits/day.

---

## Bottom line

The site is **not penalized or deindexed** — it is fully indexed and online. The
collapse is a **loss of rankings**, driven mainly by a **canonical-domain switch
done twice in three weeks**, on top of a **young site with heavy AI/translated
content** that does not yet out-rank established competitors. Several fixable
performance regressions made it worse; those have now been fixed in code (see
[Fixes applied](#fixes-applied)).

---

## Findings (with evidence)

### 1. Canonical domain flip-flop split the Google index — most likely trigger 🔴
- **2026-03-12** (`dfef76b`): canonical site URL changed to **`www.simplymillets.com`**.
- **2026-04-02** (`7ebedc0`): changed back to the **apex `simplymillets.com`**.
- **Live proof of damage:** Google currently has **both** versions indexed — e.g.
  `www.simplymillets.com/en/recipes/foxtail-millet-upma` and
  `www.simplymillets.com/en/millets/pearl-millet` alongside apex URLs for everything else.

Every canonical-domain change forces Google to re-evaluate, temporarily drop, and
re-consolidate **every URL**. Doing it twice in ~3 weeks is a textbook cause of a
sudden organic cliff. The `www → apex` redirect works now, but it is a **307
(temporary)**; it should be a **308 (permanent)** so signals consolidate to the apex.

### 2. Young site — indexed but ranking nowhere for its own topics 🔴
Searches for the site's core queries return only competitors, not simplymillets.com:
- *"ragi porridge jowar dosa how to cook"* → Swasthi's, Hebbar's Kitchen, Cook with Kushi, etc.
- *"ragi bajra jowar millets guide"* → all competitors.

The site has pages literally named `ragi-porridge` and `jowar-dosa`, yet does not
appear. **Indexed but invisible** = a new site that got an initial indexing burst
("decent traffic"), which Google normalized once it re-assessed authority. The
domain switch reset that clock.

### 3. Content profile that Google's "helpful content" system demotes 🟠
7 locales × 50+ pages of largely AI-generated/translated content. The most recent
commit is literally *"Humanize English content: remove AI-writing tells"*
(`a35f102`) — an admission the text read as machine-written. Google's
scaled-content / helpful-content systems demote this profile; a drop to 1–2/day is
consistent with a site-wide quality demotion.

### 4. AdSense script was render-blocking 🟠 — already fixed on master
On 2026-04-02 the AdSense script was changed to `strategy="beforeInteractive"`
(`app/layout.tsx`), forcing a heavy third-party ad script to load before the page
was interactive — hurting Core Web Vitals (a ranking signal). This was
independently resolved on `master` by commit `611cdb0`, which moved the ad/GA
scripts into `components/ui/ThirdPartyScripts.tsx` and loads them with
`strategy="lazyOnload"` gated behind cookie consent — strictly better than
`afterInteractive`. No further change needed.

### 5. Every page rendered dynamically — nothing was CDN-cached 🟠 — FIXED
Live headers on `/en`, `/en/millets/finger-millet`, `/en/recipes` all returned
`Cache-Control: no-store` and `x-vercel-cache: MISS`. Cause: the root
`app/layout.tsx` called `await headers()`, which opts the **entire app** out of
static generation. Result: slow TTFB, worse LCP, and Googlebot hitting the origin
on every crawl. Fixed by removing `headers()` from the root layout (see below).

### 6. No analytics installed 🟡 — FIXED (code) / needs dashboard enable
The live HTML had no Google Analytics / gtag / Vercel Analytics
(`NEXT_PUBLIC_GA_ID` unset). The "visits" number is therefore Search Console clicks
or AdSense — confirming this is specifically an *organic search* collapse — and
otherwise the site is flying blind. Added Vercel Analytics + Speed Insights.

---

## What is actually fine (no action needed)
- ✅ `robots.txt` allows everything; sitemap is comprehensive and referenced correctly.
- ✅ No stray `noindex` (only `/search` is noindexed, which is correct).
- ✅ Canonicals + hreflang are correct now (`/de` → `/de`, `/es/recipes` → `/es/recipes`, x-default → `/en`).
- ✅ Site returns 200, is up, and is indexed.

---

## Fixes applied

All in `app/layout.tsx` (verified: `tsc --noEmit` passes; `npm run build` passes
and the route table now shows **all 200+ `[lang]` pages as `● (SSG)` static**,
previously dynamic `ƒ`).

| Fix | Before | After | Effect |
|-----|--------|-------|--------|
| Caching regression | root layout `await headers()` → all pages dynamic, `no-store` | removed `headers()`; static `lang="en"` + client-side `LangSetter` sets per-locale lang/dir | All pages statically prerendered & CDN-cacheable |
| Analytics | none | `@vercel/analytics` + `@vercel/speed-insights` added | Measure traffic + real-user Core Web Vitals recovery |

(The AdSense `beforeInteractive` regression was already fixed on `master` via
`ThirdPartyScripts` + `lazyOnload` — see finding 4 — so no layout change was needed
for it.)

> Note on the caching fix: the root layout sits above the `[lang]` segment and
> cannot read the locale from route params, which is why `headers()` was used. The
> client-side `LangSetter` (already present in `app/[lang]/layout.tsx`) sets the
> correct `lang`/`dir` per locale, and hreflang tags + URL structure carry the
> locale signal for SEO — so static rendering is safe.

---

## Action items (cannot be done from code)

1. **Deploy** these changes so Vercel rebuilds. After deploy, a page header should
   show `x-vercel-cache: HIT` instead of `MISS`.
2. **Enable Vercel Analytics + Speed Insights** in the Vercel dashboard
   (Project → Analytics → Enable). Code is wired; the toggle activates it.
   - *Alternative:* GA is already coded — set `NEXT_PUBLIC_GA_ID` in Vercel env vars.
3. **Make www→apex redirect permanent (308):** Vercel → Settings → Domains → set
   `simplymillets.com` as the **primary** domain and `www.simplymillets.com` to
   **redirect** to it (currently a 307 temporary).
4. **Google Search Console checks (only you can see these):**
   - Confirm the drop date — does it line up with **2026-04-02** (the domain switch)?
   - Indexing → Pages: count "Duplicate, Google chose a different canonical" /
     "Crawled – not indexed" (quantifies the www/apex split).
   - Performance report: did **impressions** drop (= demotion) or did clicks drop
     while impressions held (= lost position)?
   - Manual Actions + Security Issues tabs (rule out a penalty).
   - Ensure a **Domain property** exists (covers both www + apex); submit the sitemap.

---

## Honest expectations

The code fixes address the **technical/performance** contributors and restore
measurement. The **two biggest levers cannot be fixed by code alone**:
- **Domain consolidation** — Google needs weeks to re-merge the www/apex split and
  recover rankings; the 308 redirect speeds this up.
- **Young-site authority + content quality** — the site is indexed but not ranking
  against established competitors. That improves with backlinks, genuinely original
  content, and time — not configuration.

---

## Known unrelated issue
`npm run lint` fails on a **pre-existing** `setState`-in-effect warning in
`components/ui/CookieConsent.tsx` (introduced in the AdSense commit `ff249b2`). It
does not block the build and is unrelated to the traffic drop.
