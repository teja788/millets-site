# Disclaimer Page, Medical Banners & Claim Softening

**Date:** 2026-04-01
**Status:** Approved

## Problem

The site makes health claims across multiple pages (millet details, FAQ, ayurveda, nutrition) but:
- The footer only has a nutrition data attribution, not a health disclaimer
- The health disclaimer is buried in the Privacy Policy page
- No dedicated disclaimer/editorial policy page exists
- Health claim pages lack visible medical disclaimers

## Solution Overview

Three coordinated changes:

1. **Dedicated Disclaimer page** at `/disclaimer`
2. **Reusable MedicalDisclaimer banner component** placed on health claim pages
3. **Claim language softening** in data files

## 1. Disclaimer Page

**Route:** `app/[lang]/disclaimer/page.tsx`

**Two sections (no source attribution section):**

### Section 1: Health & Medical Disclaimer
- This website provides general nutritional information for educational purposes only
- Not intended as medical advice, diagnosis, or treatment
- Always consult a qualified healthcare professional before making dietary changes
- Individual health conditions vary; what works for one person may not work for another
- Information about specific health conditions (diabetes, bone health, etc.) reflects published research but should not replace professional medical guidance

### Section 2: AI Disclosure
- Content created with the assistance of AI tools
- Based on published research, government databases, and traditional knowledge systems
- While we strive for accuracy, errors may occur
- Users should verify critical health information with qualified professionals

### Integration
- Add "Disclaimer" link to Footer.tsx Resources column (alongside Privacy Policy)
- Add `nav.disclaimer` translation key
- Add `disclaimer` page translation keys to all 7 locale files (en, te, ar, fr, de, hi, es)
- Keep existing footer nutrition attribution text unchanged
- Keep existing `common.disclaimer` / `common.disclaimerText` keys unchanged (still used on Privacy Policy page)

### Page structure
- Breadcrumb
- Page title + last updated date
- Two sections with h2 headings
- Same styling as Privacy Policy page (max-w-3xl, same typography)
- Static metadata with hreflang alternates

## 2. MedicalDisclaimer Banner Component

**File:** `components/ui/MedicalDisclaimer.tsx`

### Props
```typescript
interface MedicalDisclaimerProps {
  locale: Locale;
  context?: 'health' | 'ayurveda';
}
```

### Design
- Subtle earth-toned banner: `bg-earth-100 dark:bg-earth-800/50 border border-earth-200 dark:border-earth-700 rounded-lg`
- Small info icon (SVG inline) + concise text + link to full disclaimer page
- Compact: max 2 lines of text, padding `p-3`
- Text size: `text-xs` or `text-sm`

### Context variants
- `"health"` (default): "The health information below is for educational purposes only and is not medical advice. Consult a healthcare professional before making dietary changes." + [Read full disclaimer]
- `"ayurveda"`: "The traditional knowledge below is presented for cultural and educational interest. These are not clinically validated medical claims." + [Read full disclaimer]

### Translation keys
- Add `medicalDisclaimer.health` and `medicalDisclaimer.ayurveda` keys to all 7 locale files
- Add `medicalDisclaimer.readMore` key for the link text

### Placement (files to modify)
1. `app/[lang]/millets/[slug]/page.tsx` — above the Health Benefits section (`id="health-benefits"`)
2. `app/[lang]/faq/page.tsx` — near the top of the page content
3. `app/[lang]/ayurveda/page.tsx` — near the top, with `context="ayurveda"`
4. `app/[lang]/nutrition/page.tsx` — near the top
5. `app/[lang]/nutrition-et-sante/page.tsx` — near the top (French health page)
6. `app/[lang]/nutricion-y-salud/page.tsx` — near the top (Spanish health page)
7. `app/[lang]/ernaehrung-und-gesundheit/page.tsx` — near the top (German health page)

## 3. Claim Language Softening

### Files to modify
- `data/millets-major.ts`
- `data/millets-minor.ts`

### Rules
- Only soften therapeutic/medical claims, NOT nutritional composition statements
- Leave `well-established` nutritional facts (calorie counts, mineral content, "contains Xmg of Y") untouched
- Soften language for health outcome claims

### Specific changes

**Pearl Millet:**
- "helps combat iron-deficiency anemia" → "may help address iron-deficiency anemia"
- "supports heart health by helping regulate blood pressure" → "may support heart health by helping regulate blood pressure"
- "Good for diabetes management" → "May support blood sugar management"
- "making it suitable for people managing diabetes" → "which may be beneficial for people managing blood sugar levels"

**Finger Millet (Ragi):**
- "invaluable for bone health" → "may support bone health"
- "Supports bone health and osteoporosis prevention" → "May support bone health"
- Any claim about osteoporosis prevention → soften to "may support bone health"

**Sorghum:**
- "aids digestion" → "may aid digestion"

**All millets generally:**
- "helps" → "may help" (for therapeutic claims)
- "supports" → "may support" (for health outcome claims)
- "prevents" / "prevention" → "may support" (for disease prevention claims)
- "good for [condition]" → "may be beneficial for [condition]"
- "combats" → "may help address"

### What NOT to change
- Nutritional composition facts: "contains 8.0mg iron per 100g" — these are data
- Cooking/preparation instructions
- Historical/cultural statements
- Evidence level classifications
- Source citations

## Files Changed Summary

### New files
- `app/[lang]/disclaimer/page.tsx`
- `components/ui/MedicalDisclaimer.tsx`

### Modified files
- `components/layout/Footer.tsx` — add Disclaimer link
- `lib/translations/en.ts` — add disclaimer page + medical banner keys
- `lib/translations/te.ts` — same
- `lib/translations/ar.ts` — same
- `lib/translations/fr.ts` — same
- `lib/translations/de.ts` — same
- `lib/translations/hi.ts` — same
- `lib/translations/es.ts` — same
- `data/millets-major.ts` — soften health claims
- `data/millets-minor.ts` — soften health claims
- `app/[lang]/millets/[slug]/page.tsx` — add MedicalDisclaimer
- `app/[lang]/faq/page.tsx` — add MedicalDisclaimer
- `app/[lang]/ayurveda/page.tsx` — add MedicalDisclaimer
- `app/[lang]/nutrition/page.tsx` — add MedicalDisclaimer
- `app/[lang]/nutrition-et-sante/page.tsx` — add MedicalDisclaimer
- `app/[lang]/nutricion-y-salud/page.tsx` — add MedicalDisclaimer
- `app/[lang]/ernaehrung-und-gesundheit/page.tsx` — add MedicalDisclaimer
