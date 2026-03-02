# German (de) + Spanish (es) Locale Implementation Plan

## Context

The millets website currently supports 4 locales: `en`, `te`, `ar`, `fr`. The French locale set the precedent for cultural adaptation — Indian-specific content (Ayurveda, Indian states, Indian recipes) was replaced with West African/French cultural equivalents.

**German (de)** follows the same approach: replace Indian-specific content with German/Central European (DACH: Deutschland, Austria, Switzerland) cultural context. **Spanish (es)** is planned for future implementation following the same pattern, adapted for Latin American + Iberian culture.

---

## PART 1: German (de) — Immediate Implementation

### Cultural Adaptation Strategy

| English (Indian) | German (DACH) |
|---|---|
| Indian states (Rajasthan, Maharashtra) | German regions (Bayern, Schwaben, Sachsen, Tirol, Graubünden) |
| Ayurveda / Doshas | DGE (Deutsche Gesellschaft für Ernährung) / Modern nutrition science |
| Indian recipes (Ragi Porridge, Upma) | German dishes (Hirsebrei, Hirseauflauf, Hirsebratlinge, Hirseknödel) |
| ICMR-NIN sources | DGE, BfR, EFSA, Max Planck Institute |
| Indian buying guide | Reformhaus, DM, Alnatura, Coop/Migros (Swiss), Billa (Austrian) |
| Kharif season terminology | Mitteleuropäische Anbausaison (April–September) |
| INR prices | EUR / CHF prices |

### German-Exclusive Pages (4 pages, mirroring French pattern)

| Route | Title | Mirrors French |
|---|---|---|
| `/de/hirse-in-der-deutschen-kueche` | Hirse in der deutschen Küche | `/fr/culture-africaine-du-mil` |
| `/de/ernaehrung-und-gesundheit` | Ernährung und Gesundheit | `/fr/nutrition-et-sante` |
| `/de/hirse-vs-quinoa` | Hirse vs Quinoa | `/fr/millet-vs-quinoa` |
| `/de/wo-hirse-kaufen` | Wo Hirse kaufen | `/fr/ou-acheter-du-millet` |

Each page uses `if (lang !== 'de') notFound()` guard and `generateStaticParams` returning `[{ lang: 'de' }]`.

---

### Implementation Phases

#### Phase 1: Foundation (blocks everything)

**Modify** `lib/i18n.ts`:
- Add `import { de } from './translations/de'`
- Change locales to `['en', 'te', 'ar', 'fr', 'de']`
- Add `case 'de': return de;` in `getTranslations()`

**Create** `lib/translations/de.ts` (~606 lines):
- Copy structure from `en.ts`, translate all ~750+ strings to German
- Key sections: `site`, `nav`, `footer`, `breadcrumb`, `search`, `common`, `home`, `milletsPage`, `recipesPage`, `milletDetail`, `recipeDetail`, `quiz`, `notFound`, `comparison`, `doshas`, `mealPlan`, `buyingGuidePage`, `fermentationPage`, `sustainabilityPage`, `ancientRefsPage`, `glossaryPage`, `historyPage`, `ayurvedaPage`, `faqPage`, `mythsPage`, `regionalPage`, `globalPage`, `substitutionPage`, `cookingTimerPage`, `privacyPolicy`, `contactPage`
- Add German-exclusive breadcrumbs: `'hirse-in-der-deutschen-kueche'`, `'ernaehrung-und-gesundheit'`, `'hirse-vs-quinoa'`, `'wo-hirse-kaufen'`

**Modify** `components/ui/LanguageSwitcher.tsx`:
- Add `de: 'Deutsch'` to `localeLabels` Record

#### Phase 2: Core Data Files

**Create** `data/de/` directory with these files:

| File | Source | Cultural Adaptation |
|---|---|---|
| `millets-major.ts` | `data/millets-major.ts` | German descriptions, DACH cultivation regions, German growing seasons, DGE-based health claims |
| `millets-minor.ts` | `data/millets-minor.ts` | Same approach |
| `millets.ts` | `data/fr/millets.ts` | Aggregator — imports major+minor, exports `millets`, `getMilletBySlug()` |
| `recipes.ts` | New content | ~13 German/DACH recipes: Hirsebrei, Hirseauflauf, Hirsebratlinge, Hirse-Gemüsesuppe, Hirseknödel (Austrian), Hirsemus (Swiss), Hirsesalat, Hirse-Kürbis-Eintopf, Hirsepfannkuchen, Hirse-Apfel-Auflauf, Hirsebällchen, Hirserisotto, Hirse-Frühstücksbowl |
| `german-names.ts` | New content | German common names + regional dialect names (Bavarian, Swiss-German, Austrian) |

#### Phase 3: Remaining Data Files

| File | Cultural Adaptation |
|---|---|
| `faq.ts` | German FAQ with DACH-specific questions (where to buy, organic labels, DGE recommendations) |
| `history-timeline.ts` | Emphasize: Bronze Age Central European millet finds, Medieval German Hirsebrei tradition, Hirse in Germanic folklore, Bavarian/Swabian cultivation history, decline after potato introduction, modern Bio-Bewegung revival |
| `myths.ts` | German myth debunking with DGE/BfR citations |
| `ayurveda.ts` | **Reframed as German nutritional science** — same TypeScript interface but content uses DGE recommendations, BfR safety assessments, EFSA health claims. Dosha fields repurposed: Vata→Herzgesundheit, Pitta→Blutzucker-Management, Kapha→Gewichtsmanagement |
| `regional-traditions.ts` | **6-8 German/DACH regions:** Bayern (Hirsebrei, Hirseauflauf), Schwaben (historic millet cultivation), Sachsen/Lausitz (Sorbian millet traditions), Tirol/Vorarlberg (Austrian alpine cuisine), Graubünden/Wallis (Swiss Hirsemus), Rheinland/Hessen (Rhine valley cultivation), Franken (Franconian millet dishes) |
| `global-millets.ts` | Global regions with European emphasis — Central Europe, Eastern Europe, Mediterranean, Africa, Asia |
| `fermentation.ts` | Fermented millet products with German/European context (Hirsebier, Braga, fermented porridges) |
| `buying-guide.ts` | **DACH-specific:** Germany (Reformhaus, DM, Alnatura, Basic Bio, Denn's Biomarkt), Austria (Billa Plus, DM Österreich), Switzerland (Coop, Migros, Reformhaus). Prices in EUR/CHF. Labels: Bio-Siegel, EU-Bio, Demeter |
| `meal-plans.ts` | German-adapted 7-day meal plans with Frühstück, Mittagessen, Snack, Abendessen |
| `substitution-data.ts` | Grain substitution with German cooking context (Grieß→Hirse, Reis→Hirse, Weizen→Hirse) |
| `ancient-references.ts` | European historical references — Pliny the Elder, Columella, Medieval German herbals, archaeological finds at Hallstatt/Heuneburg |
| `sources.ts` | German academic sources: DGE, BfR, Max Planck Institute, Universität Hohenheim, EFSA, Bayerische Landesanstalt für Landwirtschaft |
| `search-index.ts` | German search keywords across all content |

#### Phase 4: Wire Data into i18n System

**Modify** `lib/i18n-data.ts`:
- Add ~16 German imports (following the `fr` import pattern at lines 69-84):
  ```
  import { millets as deMillets, getMilletBySlug as deGetMilletBySlug } from '@/data/de/millets';
  import { recipes as deRecipes } from '@/data/de/recipes';
  // ... etc for all 16 data files
  import { sources as deSources } from '@/data/de/sources';
  ```
- Add `case 'de':` to ALL 19 getter functions (getMillets, getRecipes, getFaqItems, etc.)

#### Phase 5: Navigation Updates

**Modify** `components/layout/Navbar.tsx` (lines 62-74 pattern):
- Add German-specific nav items:
  ```typescript
  ...(locale === 'de' ? [
    { href: localePath(locale, '/ernaehrung-und-gesundheit'), label: 'Ernährung und Gesundheit' },
    { href: localePath(locale, '/hirse-vs-quinoa'), label: 'Hirse vs Quinoa' },
    { href: localePath(locale, '/wo-hirse-kaufen'), label: 'Wo Hirse kaufen' },
  ] : []),
  ```
- Add German culture link (line 73-74 pattern):
  ```typescript
  ...(locale === 'de' ? [{ href: localePath(locale, '/hirse-in-der-deutschen-kueche'), label: 'Hirse in der deutschen Küche' }] : []),
  ```
- Hide Ayurveda for German: update `locale !== 'fr'` to `!['fr', 'de'].includes(locale)`

#### Phase 6: German-Exclusive Pages

**Create** 4 new page files + 1 component:

1. `components/ui/GermanNamesTable.tsx` — Table showing German common names, regional dialect names, scientific names (mirrors `FrenchNamesTable.tsx`)

2. `app/[lang]/hirse-in-der-deutschen-kueche/page.tsx`:
   - Guard: `if (lang !== 'de') notFound()`
   - Content: History of millet in German cuisine, regional traditions, traditional dishes, modern revival
   - Sections: Bavarian Hirsebrei tradition, Swabian cultivation, Alpine cuisine, modern Bio movement
   - Links to: recipes, history, buying guide (all localized to `/de/`)

3. `app/[lang]/ernaehrung-und-gesundheit/page.tsx`:
   - Guard: `if (lang !== 'de') notFound()`
   - Content: Science-based health benefits with DGE/BfR/EFSA citations
   - Replaces Ayurveda for German locale
   - Sections: Herzgesundheit, Blutzucker, Gewichtsmanagement, Glutenfreie Ernährung, Ballaststoffe

4. `app/[lang]/hirse-vs-quinoa/page.tsx`:
   - Guard: `if (lang !== 'de') notFound()`
   - Comparative analysis: Hirse vs Quinoa (price, sustainability, nutrition, local availability)

5. `app/[lang]/wo-hirse-kaufen/page.tsx`:
   - Guard: `if (lang !== 'de') notFound()`
   - DACH buying guide with real store names, prices in EUR/CHF, organic certification info

#### Phase 7: Page-Level Locale Conditionals

Update pages that have hardcoded locale conditionals (following the `fr` pattern):

- `app/[lang]/millets/[slug]/page.tsx` — Import GermanNamesTable, show for `locale === 'de'`
- `app/[lang]/sustainability/page.tsx` — Add `de` ternary branches
- `app/[lang]/cooking-guide/page.tsx` — Add `de` ternary branches
- `app/[lang]/nutrition/page.tsx` — Add `de` ternary branches
- `app/[lang]/history/page.tsx` — Add `de` ternary branches (replace "India" producer section with "Europe" for German)

#### Phase 8: Verification

1. `npm run build` — Verify all static pages generate without errors
2. Test all `/de/` shared routes (home, millets, recipes, faq, etc.)
3. Test all 4 German-exclusive routes
4. Verify German-exclusive pages return 404 for non-de locales
5. Verify language switcher shows "Deutsch" and switches correctly
6. Verify breadcrumbs translate properly
7. Verify search works with German keywords
8. Verify millet detail pages show GermanNamesTable

---

### File Count Summary (German)

| Category | New | Modified |
|---|---|---|
| Translation strings | 1 | 0 |
| Data files | 18 | 0 |
| German-exclusive pages | 4 | 0 |
| Components | 1 | 0 |
| i18n config | 0 | 2 |
| Navigation/UI | 0 | 2 |
| Page conditionals | 0 | ~5 |
| **Total** | **24** | **~9** |

---

## PART 2: Spanish (es) — Future Implementation

### Cultural Adaptation Strategy

| English (Indian) | Spanish (Latin American + Iberian) |
|---|---|
| Indian states | Latin American regions: Oaxaca (Mexico), Altiplano (Bolivia/Peru), Patagonia (Argentina), Andalucía (Spain) |
| Ayurveda / Doshas | Traditional Latin American herbalism + Modern WHO/PAHO nutrition science |
| Indian recipes | Latin dishes: Atole de mijo, Mijo con frijoles, Ensalada de mijo mexicana, Mijo a la española |
| ICMR-NIN sources | OPS/PAHO, AESAN (Spain), COFEPRIS (Mexico), ANMAT (Argentina) |
| Indian buying guide | Mercadona, Carrefour (Spain), tiendas naturistas (Mexico), Jumbo (Argentina) |
| INR prices | EUR (Spain) / MXN / ARS / COP |

### Spanish-Exclusive Pages (4 pages)

| Route | Title | Purpose |
|---|---|---|
| `/es/mijo-en-la-cocina-latina` | El mijo en la cocina latina | Latin American millet food culture |
| `/es/nutricion-y-salud` | Nutrición y salud | Modern nutrition with PAHO/AESAN citations |
| `/es/mijo-vs-quinoa` | Mijo vs Quinoa | Particularly relevant — quinoa is South American |
| `/es/donde-comprar-mijo` | Dónde comprar mijo | Spain + Latin America buying guide |

### Regional Traditions for Spanish

- **Oaxaca, México** — Indigenous millet-like grain traditions (amaranth, teff parallels), milpa system adaptations
- **Andalucía, España** — Historical Moorish-era millet cultivation, modern organic farming
- **Altiplano (Bolivia/Perú)** — High-altitude grain traditions, millet as quinoa alternative
- **Región Pampeana, Argentina** — Modern health food movement, millet in parrilla culture
- **Colombia** — Tropical grain diversity, millet in arepa variations
- **Cataluña, España** — Mediterranean diet integration, Bio markets

### Implementation Scope (Spanish)

Same file structure as German:

| Category | Files |
|---|---|
| `lib/translations/es.ts` | 1 |
| `data/es/*.ts` | 18 |
| Spanish-exclusive pages | 4 |
| `SpanishNamesTable.tsx` component | 1 |
| Config modifications (i18n.ts, i18n-data.ts, LanguageSwitcher, Navbar) | 4 |
| Page conditionals | ~5 |
| **Total** | **~33 files** |

### Spanish-Specific Considerations

1. **Latin American vs Iberian Spanish**: Use neutral/international Spanish as base, with regional notes where needed
2. **Multiple currencies**: EUR (Spain), MXN (Mexico), ARS (Argentina) — buying guide needs multi-country approach
3. **Quinoa comparison page** is especially relevant since quinoa is native to South America
4. **Font**: No special font needed (Latin script), but consider Spanish-specific typographic conventions (¿ ¡)
5. **Add** `es: 'Español'` to LanguageSwitcher localeLabels
6. **Locales array** becomes: `['en', 'te', 'ar', 'fr', 'de', 'es']`

---

## Execution Order (German First, Spanish Later)

### German — Execute Now (8 phases above)

Implementation order optimized for incremental testing:
1. Foundation (i18n.ts + de.ts + LanguageSwitcher) → site builds with empty German
2. Core data (millets + recipes) → millet and recipe pages work
3. Remaining data (14 files) → all shared pages work
4. Wire data (i18n-data.ts) → data actually loads
5. Navigation (Navbar) → German nav items appear
6. German-exclusive pages (4 pages + component) → unique German content
7. Page conditionals → hardcoded strings updated
8. Build + test → verify everything

### Spanish — Execute Later (same 8-phase pattern)

Follow the identical structure, swapping German cultural adaptations for Spanish/Latin American ones.
