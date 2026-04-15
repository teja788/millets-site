# AdSense Readiness Audit & Fix Plan

**Date:** 2026-04-15
**Site:** Simply Millets (Next.js 16 App Router, 7 locales)
**Publisher ID:** `ca-pub-5986156458101759`
**Rejection reason shown in AdSense dashboard:** *"Meet AdSense program policies"* (generic — no specific violation listed)
**Interpretation:** This is Google's standard phrasing for qualitative issues — almost always one of: low value content, site not ready, weak author trust signals, or incomplete site experience.

---

## 1. Executive Summary

The site is in **substantially better shape** than most AdSense rejections. Structural groundwork (privacy policy, disclaimer, footer navigation, schema markup, localization infrastructure, AdSense script injection) is already done. The remaining gaps are concentrated in **two specific surfaces** that reviewers weight heavily:

1. **Author identity / E-E-A-T trust signals** — the About page is generic and has no real author bio, photo, or credentials.
2. **Site completeness across locales** — About and Contact pages return 404 for all non-English locales, creating a broken hreflang experience for 6 of 7 locales.

Fixing these plus a homepage content expansion should unlock approval on the next review.

---

## 2. Detailed Findings

### 2.1 What's already good (do not touch)

| Area | Status | Notes |
|---|---|---|
| Privacy Policy | Substantive | 10 sections, properly localized |
| Disclaimer | Present | Localized, covers health + AI disclosure |
| Footer | Excellent | 3-column layout, 20+ links (About, Contact, Privacy, Disclaimer, all major sections) |
| Millet detail pages | Strong | ~800+ words each; scientific names, 10+ nutrients, Ayurveda, cultivation, health claims with evidence levels |
| Recipe pages | Complete | Ingredients, steps, prep/cook time, nutrition per serving, tips |
| Non-English millet content | Real translations | Telugu/Arabic/etc. verified as actual translated content (not English fallback) |
| Placeholder detection | Clean | No Lorem ipsum / TODO / "Coming soon" strings found |
| AdSense script | Injected correctly | In `app/[lang]/layout.tsx` with correct publisher ID |
| Open Graph / meta | Present | Per-page metadata with hreflang alternates |

### 2.2 Gaps and risks

#### 🔴 P0-1: About page lacks author credibility
- **File:** `app/[lang]/about/page.tsx`
- **Current state:** 522 words of generic mission statement. No author name, photo, credentials, or personal story.
- **Why it matters:** This is the #1 trigger for AdSense "low value content" rejection on niche info sites. Reviewers ask "who is behind this and why should I trust them?" — the current page doesn't answer that.
- **Risk level:** High.

#### 🔴 P0-2: About & Contact return 404 for non-English locales
- **Files:** `app/[lang]/about/page.tsx`, `app/[lang]/contact/page.tsx`
- **Current state:** A guard like `if (lang !== 'en') notFound()` blocks fr/de/es/te/ar/hi.
- **Why it matters:** Hreflang alternates in the `<head>` of every page point to these URLs. When reviewers (and Googlebot) crawl them, 6 of 7 locales return 404 for the trust pages. This reads as "incomplete site."
- **Risk level:** High.

#### 🔴 P0-3: Homepage content too thin
- **File:** `app/[lang]/page.tsx`
- **Current state:** Only ~200 words of original prose. Rest is hero + cards + lazy-loaded UI.
- **Why it matters:** The homepage is the first URL reviewers open. Thin homepage + deep interior pages often registers as "templated" or "low value."
- **Risk level:** Medium-high.

#### 🟡 P1-1: No author byline on millet/recipe detail pages
- **Files:** `app/[lang]/millets/[slug]/page.tsx`, `app/[lang]/recipes/[slug]/page.tsx`
- **Why it matters:** Even a small "Written by [Name]" line linking to /about signals editorial coherence.
- **Risk level:** Medium.

#### 🟡 P1-2: Disclaimer could be more specific
- **File:** `app/[lang]/disclaimer/page.tsx`
- **Current state:** 2 sections (health + AI).
- **Why it matters:** AdSense rewards sites that clearly disclose their limits. Adding "not a substitute for professional advice," "results vary," etc. strengthens trust posture.
- **Risk level:** Low-medium.

#### 🟢 P2-1: Polish items
- "Last updated" dates on evergreen pages.
- Recipe source attribution ("adapted from…") where applicable.
- Verify Open Graph images exist for About, Contact, and top 5 millet pages.

---

## 3. Prioritized Fix Plan

### Phase 1 — Content & identity (blocks resubmission)

**Step 1. Decide author identity** (no code)
- Pick a name (real or consistent pen name)
- Write 2–3 sentences of credentials (can be honest: hobbyist researcher, home cook, food-tradition enthusiast — just has to be real and consistent)
- Decide on image: photo / illustrated avatar / initials mark
- Write a 200–300 word "why I built this site" personal story

**Step 2. Rewrite About page**
- File: `app/[lang]/about/page.tsx`
- Add `<AuthorBio />` component with name, image, credentials
- Add "Our editorial standards" subsection (1 paragraph): sourcing policy, AI-assist disclosure, review cadence
- Keep existing mission content, add personal story above it
- Target: 900–1100 words total

**Step 3. Remove locale guard on About & Contact**
- Files: `app/[lang]/about/page.tsx`, `app/[lang]/contact/page.tsx`
- Delete `if (lang !== 'en') notFound()` (or equivalent)
- Add translations to `data/i18n/` for all 7 locales (or, as fallback for MVP, render the English content inside the non-English shell — better than 404)
- Ensure `generateStaticParams` includes all locales

**Step 4. Expand homepage intro**
- File: `app/[lang]/page.tsx`
- Replace the short "What Are Millets" block with 400–500 words of substantive original prose
- Structure: What millets are (1 para) → Why they matter now (climate/nutrition/heritage angle, 1 para) → What this site offers (1 para) → Where to start (1 para with inline links)

### Phase 2 — Trust signal propagation (boosts approval odds)

**Step 5. Add `<AuthorByline />` component**
- New file: `components/AuthorByline.tsx`
- Props: `author`, `date`, `updatedDate`
- Render small block at top of millet & recipe pages, linking to /about
- Include in `app/[lang]/millets/[slug]/page.tsx` and `app/[lang]/recipes/[slug]/page.tsx`

**Step 6. Expand disclaimer**
- File: `app/[lang]/disclaimer/page.tsx`
- Add sections: "No professional endorsement", "Results vary by individual", "Consult a dietitian before medical decisions", "No affiliate conflicts disclosed elsewhere"

### Phase 3 — Wait & resubmit

**Step 7. Deploy & wait 7–14 days**
- Push changes to production
- Submit fresh sitemap to Google Search Console
- Wait for Google to recrawl (check Coverage report)
- Confirm new About/Contact pages are indexed at all locale URLs

**Step 8. Resubmit**
- AdSense dashboard → tick "I confirm I've read and am meeting AdSense Program Policies" → **Resubmit**
- Typical review time: 2–14 days

---

## 4. Files to touch

| File | Change | Phase |
|---|---|---|
| `app/[lang]/about/page.tsx` | Rewrite with author bio + remove locale guard | P0-1, P0-2 |
| `app/[lang]/contact/page.tsx` | Remove locale guard, add translated strings | P0-2 |
| `app/[lang]/page.tsx` | Expand "What Are Millets" intro to 400–500 words | P0-3 |
| `components/AuthorBio.tsx` (new) | Author identity block reusable component | P0-1 |
| `components/AuthorByline.tsx` (new) | Small byline for detail pages | P1-1 |
| `app/[lang]/millets/[slug]/page.tsx` | Add byline | P1-1 |
| `app/[lang]/recipes/[slug]/page.tsx` | Add byline | P1-1 |
| `app/[lang]/disclaimer/page.tsx` | Expand with 3–4 new sections | P1-2 |
| `data/i18n/about.*` (new, per locale) | Translated About copy | P0-2 |
| `data/i18n/contact.*` (new, per locale) | Translated Contact copy | P0-2 |

---

## 5. Decisions needed from user before coding starts

1. **Author identity:** real name or pen name? Provide preferred name.
2. **Author image:** photo (provide file), illustrated avatar (can generate), or initials-only?
3. **Credentials line:** provide 2–3 sentences of honest background (e.g. "software engineer passionate about traditional Indian grains, researching millets since 2023" — whatever is true).
4. **Personal story hook:** one sentence on why the site was built. This will anchor the About page rewrite.
5. **Locale translation strategy:** full human translations of About/Contact, or English-content fallback inside locale shell for now (ship fast, translate later)?

---

## 6. Success criteria

Before clicking "Resubmit" in AdSense, verify:

- [ ] `/en/about`, `/te/about`, `/fr/about`, `/de/about`, `/es/about`, `/ar/about`, `/hi/about` all return 200 OK with real content
- [ ] Same for `/xx/contact`
- [ ] About page shows a human name, image, and personal story
- [ ] Homepage intro has ≥400 words of original prose before the first card/grid
- [ ] Every millet and recipe page has a visible author byline linking to /about
- [ ] Disclaimer has ≥5 sections
- [ ] Google Search Console shows fresh impressions for the new/updated URLs
- [ ] `sitemap.xml` includes all locale variants of About & Contact
- [ ] No 404s for hreflang alternates (check with Screaming Frog or `curl` sweep)

---

## 7. Risk & fallback

**If approval fails again after these fixes:**
- Likely root cause shifts to **traffic insufficiency** — Google wants to see organic visitors before monetizing a new site.
- Action: wait another 4–8 weeks, publish on socials, get some organic impressions in Search Console (target: 50+ clicks/day), then resubmit.
- Secondary action: review if any single page triggers "Valuable Inventory" policy — check if any page is too short (<300 words), has broken internal links, or loads with layout shift.

**Success probability after Phase 1 + 2 + 2-week wait:** High (the site has strong bones — these are trust-signal fixes, not content rebuilds).
