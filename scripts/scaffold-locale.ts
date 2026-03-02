#!/usr/bin/env npx tsx
/**
 * Scaffold a new locale for the millets website.
 *
 * Usage:
 *   npx tsx scripts/scaffold-locale.ts <locale-code> "<Language Name>"
 *
 * Example:
 *   npx tsx scripts/scaffold-locale.ts es "Spanish"
 *
 * What it does:
 *   1. Creates data/<locale>/ with 17 skeleton files copied from English
 *   2. Creates lib/translations/<locale>.ts from en.ts with TODO markers
 *   3. Prints a checklist of manual steps still needed
 */

import * as fs from 'node:fs';
import * as path from 'node:path';

/* ------------------------------------------------------------------ */
/*  Parse args                                                         */
/* ------------------------------------------------------------------ */

const [, , localeCode, languageName] = process.argv;

if (!localeCode || !languageName) {
  console.error('Usage: npx tsx scripts/scaffold-locale.ts <locale-code> "<Language Name>"');
  console.error('Example: npx tsx scripts/scaffold-locale.ts es "Spanish"');
  process.exit(1);
}

if (!/^[a-z]{2,3}$/.test(localeCode)) {
  console.error(`Invalid locale code "${localeCode}". Use a 2-3 letter lowercase code (e.g. es, pt, ja).`);
  process.exit(1);
}

const ROOT = path.resolve(import.meta.dirname, '..');
const DATA_EN = path.join(ROOT, 'data');
const DATA_NEW = path.join(ROOT, 'data', localeCode);
const TRANSLATIONS_DIR = path.join(ROOT, 'lib', 'translations');

/* ------------------------------------------------------------------ */
/*  Guard: don't overwrite existing locale                             */
/* ------------------------------------------------------------------ */

if (fs.existsSync(DATA_NEW)) {
  console.error(`data/${localeCode}/ already exists. Aborting to avoid overwriting.`);
  process.exit(1);
}

if (fs.existsSync(path.join(TRANSLATIONS_DIR, `${localeCode}.ts`))) {
  console.error(`lib/translations/${localeCode}.ts already exists. Aborting.`);
  process.exit(1);
}

/* ------------------------------------------------------------------ */
/*  Step 1: Copy English data files as skeletons                       */
/* ------------------------------------------------------------------ */

// These are the files every locale data directory needs.
// They map 1:1 to what i18n-data.ts imports for each locale.
const dataFiles = [
  'millets-major.ts',
  'millets-minor.ts',
  'millets.ts',
  'recipes.ts',
  'faq.ts',
  'history-timeline.ts',
  'myths.ts',
  'ayurveda.ts',
  'regional-traditions.ts',
  'global-millets.ts',
  'fermentation.ts',
  'buying-guide.ts',
  'meal-plans.ts',
  'substitution-data.ts',
  'ancient-references.ts',
  'search-index.ts',
  'sources.ts',
];

console.log(`\nScaffolding locale: ${localeCode} (${languageName})\n`);

fs.mkdirSync(DATA_NEW, { recursive: true });
console.log(`  Created data/${localeCode}/`);

let copiedCount = 0;
for (const file of dataFiles) {
  const src = path.join(DATA_EN, file);
  const dest = path.join(DATA_NEW, file);

  if (!fs.existsSync(src)) {
    console.warn(`  WARNING: data/${file} not found, skipping`);
    continue;
  }

  let content = fs.readFileSync(src, 'utf-8');

  // Add a TODO banner at the top
  const banner = `// TODO: Translate all strings in this file to ${languageName} (${localeCode})\n// Scaffolded from English — do not change export names or types\n\n`;
  content = banner + content;

  fs.writeFileSync(dest, content, 'utf-8');
  copiedCount++;
}
console.log(`  Copied ${copiedCount} data files with TODO markers`);

/* ------------------------------------------------------------------ */
/*  Step 2: Create translation file                                    */
/* ------------------------------------------------------------------ */

const enTranslationPath = path.join(TRANSLATIONS_DIR, 'en.ts');
const newTranslationPath = path.join(TRANSLATIONS_DIR, `${localeCode}.ts`);

if (fs.existsSync(enTranslationPath)) {
  let content = fs.readFileSync(enTranslationPath, 'utf-8');

  // Replace "export const en" with "export const <locale>"
  content = content.replace(/export const en\b/, `export const ${localeCode}`);

  // Add TODO banner
  const banner = `// TODO: Translate all strings to ${languageName}\n// Scaffolded from English — preserve all keys, only change values\n\n`;
  content = banner + content;

  fs.writeFileSync(newTranslationPath, content, 'utf-8');
  console.log(`  Created lib/translations/${localeCode}.ts`);
} else {
  console.warn('  WARNING: lib/translations/en.ts not found, skipping translation scaffold');
}

/* ------------------------------------------------------------------ */
/*  Step 3: Print checklist                                            */
/* ------------------------------------------------------------------ */

console.log(`
${'='.repeat(60)}
  SCAFFOLD COMPLETE — Manual steps remaining:
${'='.repeat(60)}

  1. Add '${localeCode}' to the locales tuple in lib/i18n.ts:
     export const locales = ['en', 'te', 'ar', 'fr', 'de', '${localeCode}'] as const;

  2. Add import block + registry entry in lib/i18n-data.ts:
     // Copy the pattern from any existing locale block

  3. Add translation import in lib/i18n.ts:
     import { ${localeCode} } from './translations/${localeCode}';
     // Add to translationMap: ${localeCode},

  4. Add locale config in lib/locale-config.ts:
     ${localeCode}: {
       hasAyurveda: true,
       healthPageRedirect: null,
       namesTable: null,
       isRTL: false,
       exclusiveNavItems: [],
     },

  5. Add '${localeCode}: "${languageName}"' to localeLabels in:
     components/ui/LanguageSwitcher.tsx

  6. Add ${localeCode} entries to MilletQuiz.tsx (9 millets × Record<Locale>)

  7. Translate all files:
     - data/${localeCode}/*.ts (${copiedCount} files)
     - lib/translations/${localeCode}.ts

  8. (Optional) If your locale needs a custom names table
     (like french-names.ts or german-names.ts), create it in
     data/${localeCode}/ and update locale-config.ts namesTable.

  9. Run: npm run build
     Verify all ${localeCode} routes render correctly.
${'='.repeat(60)}
`);
