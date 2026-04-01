# Disclaimer Page, Medical Banners & Claim Softening — Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a dedicated disclaimer page, medical disclaimer banners on health-claim pages, and soften therapeutic language in millet data files.

**Architecture:** New `/disclaimer` route modeled on `/privacy-policy`. New `MedicalDisclaimer` component placed on 7 pages. Data file edits to soften health claims. All 7 locale translation files updated.

**Tech Stack:** Next.js App Router, TypeScript, Tailwind CSS v4, i18n translations

**Spec:** `docs/superpowers/specs/2026-04-01-disclaimer-page-medical-banners-design.md`

---

## File Structure

### New files
| File | Responsibility |
|------|---------------|
| `components/ui/MedicalDisclaimer.tsx` | Reusable banner component with `health` and `ayurveda` context variants |
| `app/[lang]/disclaimer/page.tsx` | Dedicated disclaimer page with medical + AI disclosure sections |

### Modified files
| File | Change |
|------|--------|
| `lib/translations/en.ts` | Add `nav.disclaimer`, `breadcrumb.disclaimer`, `disclaimerPage.*`, `medicalDisclaimer.*` keys |
| `lib/translations/te.ts` | Same keys in Telugu |
| `lib/translations/ar.ts` | Same keys in Arabic |
| `lib/translations/fr.ts` | Same keys in French |
| `lib/translations/de.ts` | Same keys in German |
| `lib/translations/hi.ts` | Same keys in Hindi |
| `lib/translations/es.ts` | Same keys in Spanish |
| `components/layout/Footer.tsx` | Add Disclaimer link to Resources column |
| `data/millets-major.ts` | Soften therapeutic health claim language |
| `data/millets-minor.ts` | Soften therapeutic health claim language |
| `app/[lang]/millets/[slug]/page.tsx` | Add MedicalDisclaimer above health benefits section |
| `app/[lang]/faq/page.tsx` | Add MedicalDisclaimer near top |
| `app/[lang]/ayurveda/page.tsx` | Replace existing AlertTriangle disclaimer with MedicalDisclaimer |
| `app/[lang]/nutrition/page.tsx` | Add MedicalDisclaimer near top |
| `app/[lang]/nutrition-et-sante/page.tsx` | Add MedicalDisclaimer (client component — use `useParams()`) |
| `app/[lang]/nutricion-y-salud/page.tsx` | Add MedicalDisclaimer (client component — use `useParams()`) |
| `app/[lang]/ernaehrung-und-gesundheit/page.tsx` | Add MedicalDisclaimer (client component — use `useParams()`) |

---

## Chunk 1: Translation Keys + MedicalDisclaimer Component

### Task 1: Add English translation keys

**Files:**
- Modify: `lib/translations/en.ts`

- [ ] **Step 1: Add `nav.disclaimer` key**

In `lib/translations/en.ts`, inside the `nav` object (after `privacyPolicy: 'Privacy Policy',` at ~line 36), add:

```typescript
    disclaimer: 'Disclaimer',
```

- [ ] **Step 2: Add `breadcrumb.disclaimer` key**

In the `breadcrumb` object (after `'privacy-policy': 'Privacy Policy',` at ~line 75), add:

```typescript
    disclaimer: 'Disclaimer',
```

- [ ] **Step 3: Add `medicalDisclaimer` key group**

After the `common` block (after line ~146, before `home`), add:

```typescript
  // Medical disclaimer banner
  medicalDisclaimer: {
    health: 'The health information below is for educational purposes only and is not medical advice. Consult a healthcare professional before making dietary changes.',
    ayurveda: 'The traditional knowledge below is presented for cultural and educational interest. These are not clinically validated medical claims.',
    readMore: 'Read full disclaimer',
  },
```

- [ ] **Step 4: Add `disclaimerPage` key group**

After the `privacyPolicy` block (after line ~601), add:

```typescript
  // Disclaimer page
  disclaimerPage: {
    title: 'Disclaimer',
    lastUpdated: 'Last updated: April 2026',
    intro: 'Please read this disclaimer carefully before using the information on this website.',
    healthDisclaimerTitle: 'Health & Medical Disclaimer',
    healthDisclaimerText: 'This website provides general nutritional information about millets and related foods for educational purposes only. The content is not intended as medical advice, diagnosis, or treatment. Always consult a qualified healthcare professional before making dietary changes, especially if you have existing health conditions. Individual health conditions vary, and what works for one person may not work for another. Information about specific health conditions such as diabetes, bone health, or cardiovascular health reflects published research but should not replace professional medical guidance.',
    aiDisclosureTitle: 'AI & Content Disclosure',
    aiDisclosureText: 'Content on this website is created with the assistance of AI tools and is based on published research, government databases (such as ICMR-NIN and USDA), peer-reviewed journals, and traditional knowledge systems. While we strive for accuracy and cite our sources wherever possible, errors may occur. Users should verify critical health information with qualified professionals. The evidence levels displayed alongside health claims reflect our assessment of the supporting research and should not be interpreted as medical endorsements.',
  },
```

- [ ] **Step 5: Commit**

```bash
git add lib/translations/en.ts
git commit -m "feat: add English translation keys for disclaimer page and medical banner"
```

---

### Task 2: Add translation keys to all 6 non-English locale files

**Files:**
- Modify: `lib/translations/te.ts`
- Modify: `lib/translations/ar.ts`
- Modify: `lib/translations/fr.ts`
- Modify: `lib/translations/de.ts`
- Modify: `lib/translations/hi.ts`
- Modify: `lib/translations/es.ts`

For each locale file, add the same 4 key groups (`nav.disclaimer`, `breadcrumb.disclaimer`, `medicalDisclaimer`, `disclaimerPage`) with appropriate translations.

- [ ] **Step 1: Add keys to Telugu (`te.ts`)**

`nav.disclaimer`:
```typescript
    disclaimer: 'నిరాకరణ',
```

`breadcrumb.disclaimer`:
```typescript
    disclaimer: 'నిరాకరణ',
```

`medicalDisclaimer` block:
```typescript
  medicalDisclaimer: {
    health: 'దిగువన ఉన్న ఆరోగ్య సమాచారం విద్యా ప్రయోజనాల కోసం మాత్రమే, ఇది వైద్య సలహా కాదు. ఆహార మార్పులు చేయడానికి ముందు ఆరోగ్య నిపుణులను సంప్రదించండి.',
    ayurveda: 'దిగువన ఉన్న సాంప్రదాయ జ్ఞానం సాంస్కృతిక మరియు విద్యా ఆసక్తి కోసం అందించబడింది. ఇవి వైద్యపరంగా ధృవీకరించబడిన వాదనలు కావు.',
    readMore: 'పూర్తి నిరాకరణ చదవండి',
  },
```

`disclaimerPage` block:
```typescript
  disclaimerPage: {
    title: 'నిరాకరణ',
    lastUpdated: 'చివరిగా నవీకరించబడింది: ఏప్రిల్ 2026',
    intro: 'ఈ వెబ్‌సైట్‌లోని సమాచారాన్ని ఉపయోగించే ముందు దయచేసి ఈ నిరాకరణను జాగ్రత్తగా చదవండి.',
    healthDisclaimerTitle: 'ఆరోగ్య & వైద్య నిరాకరణ',
    healthDisclaimerText: 'ఈ వెబ్‌సైట్ చిరుధాన్యాలు మరియు సంబంధిత ఆహారాల గురించి సాధారణ పోషణ సమాచారాన్ని విద్యా ప్రయోజనాల కోసం మాత్రమే అందిస్తుంది. ఈ కంటెంట్ వైద్య సలహా, రోగ నిర్ధారణ లేదా చికిత్సగా ఉద్దేశించబడలేదు. ఆహార మార్పులు చేయడానికి ముందు ఎల్లప్పుడూ అర్హత కలిగిన ఆరోగ్య నిపుణులను సంప్రదించండి.',
    aiDisclosureTitle: 'AI & కంటెంట్ బహిర్గతం',
    aiDisclosureText: 'ఈ వెబ్‌సైట్‌లోని కంటెంట్ AI సాధనాల సహాయంతో రూపొందించబడింది మరియు ప్రచురించబడిన పరిశోధన, ప్రభుత్వ డేటాబేస్‌లు మరియు సాంప్రదాయ జ్ఞాన వ్యవస్థల ఆధారంగా ఉంటుంది. మేము ఖచ్చితత్వం కోసం ప్రయత్నిస్తున్నప్పటికీ, లోపాలు సంభవించవచ్చు.',
  },
```

- [ ] **Step 2: Add keys to Arabic (`ar.ts`)**

`nav.disclaimer`:
```typescript
    disclaimer: 'إخلاء المسؤولية',
```

`breadcrumb.disclaimer`:
```typescript
    disclaimer: 'إخلاء المسؤولية',
```

`medicalDisclaimer` block:
```typescript
  medicalDisclaimer: {
    health: 'المعلومات الصحية أدناه هي لأغراض تعليمية فقط وليست نصيحة طبية. استشر أخصائي الرعاية الصحية قبل إجراء تغييرات غذائية.',
    ayurveda: 'المعرفة التقليدية أدناه مقدمة للاهتمام الثقافي والتعليمي. هذه ليست ادعاءات طبية مثبتة سريرياً.',
    readMore: 'اقرأ إخلاء المسؤولية الكامل',
  },
```

`disclaimerPage` block:
```typescript
  disclaimerPage: {
    title: 'إخلاء المسؤولية',
    lastUpdated: 'آخر تحديث: أبريل 2026',
    intro: 'يرجى قراءة إخلاء المسؤولية هذا بعناية قبل استخدام المعلومات الموجودة على هذا الموقع.',
    healthDisclaimerTitle: 'إخلاء المسؤولية الصحية والطبية',
    healthDisclaimerText: 'يوفر هذا الموقع معلومات غذائية عامة عن الدخن والأطعمة ذات الصلة لأغراض تعليمية فقط. لا يُقصد من المحتوى أن يكون نصيحة طبية أو تشخيصاً أو علاجاً. استشر دائماً أخصائي رعاية صحية مؤهل قبل إجراء تغييرات غذائية.',
    aiDisclosureTitle: 'إفصاح الذكاء الاصطناعي والمحتوى',
    aiDisclosureText: 'تم إنشاء المحتوى على هذا الموقع بمساعدة أدوات الذكاء الاصطناعي ويستند إلى أبحاث منشورة وقواعد بيانات حكومية وأنظمة المعرفة التقليدية. على الرغم من سعينا للدقة، قد تحدث أخطاء.',
  },
```

- [ ] **Step 3: Add keys to French (`fr.ts`)**

`nav.disclaimer`:
```typescript
    disclaimer: 'Avertissement',
```

`breadcrumb.disclaimer`:
```typescript
    disclaimer: 'Avertissement',
```

`medicalDisclaimer` block:
```typescript
  medicalDisclaimer: {
    health: 'Les informations de santé ci-dessous sont à titre éducatif uniquement et ne constituent pas un avis médical. Consultez un professionnel de santé avant de modifier votre alimentation.',
    ayurveda: 'Les connaissances traditionnelles ci-dessous sont présentées à titre culturel et éducatif. Il ne s\'agit pas d\'allégations médicales cliniquement validées.',
    readMore: 'Lire l\'avertissement complet',
  },
```

`disclaimerPage` block:
```typescript
  disclaimerPage: {
    title: 'Avertissement',
    lastUpdated: 'Dernière mise à jour : avril 2026',
    intro: 'Veuillez lire attentivement cet avertissement avant d\'utiliser les informations de ce site.',
    healthDisclaimerTitle: 'Avertissement santé et médical',
    healthDisclaimerText: 'Ce site fournit des informations nutritionnelles générales sur les millets à des fins éducatives uniquement. Le contenu ne constitue pas un avis médical, un diagnostic ou un traitement. Consultez toujours un professionnel de santé qualifié avant de modifier votre alimentation.',
    aiDisclosureTitle: 'Divulgation IA et contenu',
    aiDisclosureText: 'Le contenu de ce site est créé avec l\'aide d\'outils d\'IA et repose sur des recherches publiées, des bases de données gouvernementales et des systèmes de connaissances traditionnels. Malgré nos efforts de précision, des erreurs peuvent survenir.',
  },
```

- [ ] **Step 4: Add keys to German (`de.ts`)**

`nav.disclaimer`:
```typescript
    disclaimer: 'Haftungsausschluss',
```

`breadcrumb.disclaimer`:
```typescript
    disclaimer: 'Haftungsausschluss',
```

`medicalDisclaimer` block:
```typescript
  medicalDisclaimer: {
    health: 'Die folgenden Gesundheitsinformationen dienen ausschließlich Bildungszwecken und stellen keine medizinische Beratung dar. Konsultieren Sie einen Arzt, bevor Sie Ihre Ernährung umstellen.',
    ayurveda: 'Das folgende traditionelle Wissen wird zu kulturellen und bildungsbezogenen Zwecken präsentiert. Es handelt sich nicht um klinisch validierte medizinische Aussagen.',
    readMore: 'Vollständigen Haftungsausschluss lesen',
  },
```

`disclaimerPage` block:
```typescript
  disclaimerPage: {
    title: 'Haftungsausschluss',
    lastUpdated: 'Zuletzt aktualisiert: April 2026',
    intro: 'Bitte lesen Sie diesen Haftungsausschluss sorgfältig, bevor Sie die Informationen auf dieser Website nutzen.',
    healthDisclaimerTitle: 'Gesundheits- und medizinischer Haftungsausschluss',
    healthDisclaimerText: 'Diese Website bietet allgemeine Ernährungsinformationen über Hirse ausschließlich zu Bildungszwecken. Der Inhalt ist nicht als medizinische Beratung, Diagnose oder Behandlung gedacht. Konsultieren Sie immer einen qualifizierten Arzt, bevor Sie Ihre Ernährung ändern.',
    aiDisclosureTitle: 'KI- und Inhaltsoffenlegung',
    aiDisclosureText: 'Der Inhalt dieser Website wurde mit Hilfe von KI-Tools erstellt und basiert auf veröffentlichten Forschungsergebnissen, staatlichen Datenbanken und traditionellen Wissenssystemen. Trotz unserer Bemühungen um Genauigkeit können Fehler auftreten.',
  },
```

- [ ] **Step 5: Add keys to Hindi (`hi.ts`)**

`nav.disclaimer`:
```typescript
    disclaimer: 'अस्वीकरण',
```

`breadcrumb.disclaimer`:
```typescript
    disclaimer: 'अस्वीकरण',
```

`medicalDisclaimer` block:
```typescript
  medicalDisclaimer: {
    health: 'नीचे दी गई स्वास्थ्य जानकारी केवल शैक्षिक उद्देश्यों के लिए है और यह चिकित्सा सलाह नहीं है। आहार में बदलाव करने से पहले किसी स्वास्थ्य पेशेवर से परामर्श करें।',
    ayurveda: 'नीचे दिया गया पारंपरिक ज्ञान सांस्कृतिक और शैक्षिक रुचि के लिए प्रस्तुत किया गया है। ये चिकित्सकीय रूप से मान्य दावे नहीं हैं।',
    readMore: 'पूरा अस्वीकरण पढ़ें',
  },
```

`disclaimerPage` block:
```typescript
  disclaimerPage: {
    title: 'अस्वीकरण',
    lastUpdated: 'अंतिम अपडेट: अप्रैल 2026',
    intro: 'इस वेबसाइट पर जानकारी का उपयोग करने से पहले कृपया इस अस्वीकरण को ध्यान से पढ़ें।',
    healthDisclaimerTitle: 'स्वास्थ्य और चिकित्सा अस्वीकरण',
    healthDisclaimerText: 'यह वेबसाइट बाजरा और संबंधित खाद्य पदार्थों के बारे में सामान्य पोषण जानकारी केवल शैक्षिक उद्देश्यों के लिए प्रदान करती है। यह सामग्री चिकित्सा सलाह, निदान या उपचार के रूप में अभिप्रेत नहीं है। आहार में बदलाव करने से पहले हमेशा किसी योग्य स्वास्थ्य पेशेवर से परामर्श करें।',
    aiDisclosureTitle: 'AI और सामग्री प्रकटीकरण',
    aiDisclosureText: 'इस वेबसाइट पर सामग्री AI उपकरणों की सहायता से बनाई गई है और प्रकाशित शोध, सरकारी डेटाबेस और पारंपरिक ज्ञान प्रणालियों पर आधारित है। सटीकता के लिए हमारे प्रयासों के बावजूद, त्रुटियां हो सकती हैं।',
  },
```

- [ ] **Step 6: Add keys to Spanish (`es.ts`)**

`nav.disclaimer`:
```typescript
    disclaimer: 'Aviso legal',
```

`breadcrumb.disclaimer`:
```typescript
    disclaimer: 'Aviso legal',
```

`medicalDisclaimer` block:
```typescript
  medicalDisclaimer: {
    health: 'La información de salud a continuación es solo con fines educativos y no constituye consejo médico. Consulte a un profesional de la salud antes de realizar cambios en su dieta.',
    ayurveda: 'El conocimiento tradicional a continuación se presenta con fines culturales y educativos. No se trata de afirmaciones médicas clínicamente validadas.',
    readMore: 'Leer aviso legal completo',
  },
```

`disclaimerPage` block:
```typescript
  disclaimerPage: {
    title: 'Aviso legal',
    lastUpdated: 'Última actualización: abril de 2026',
    intro: 'Por favor, lea este aviso legal detenidamente antes de utilizar la información de este sitio web.',
    healthDisclaimerTitle: 'Aviso legal de salud y médico',
    healthDisclaimerText: 'Este sitio web proporciona información nutricional general sobre mijo y alimentos relacionados solo con fines educativos. El contenido no pretende ser consejo médico, diagnóstico ni tratamiento. Consulte siempre a un profesional de la salud cualificado antes de realizar cambios en su dieta.',
    aiDisclosureTitle: 'Divulgación de IA y contenido',
    aiDisclosureText: 'El contenido de este sitio web se ha creado con la ayuda de herramientas de IA y se basa en investigaciones publicadas, bases de datos gubernamentales y sistemas de conocimiento tradicional. A pesar de nuestros esfuerzos por la precisión, pueden producirse errores.',
  },
```

- [ ] **Step 7: Commit**

```bash
git add lib/translations/te.ts lib/translations/ar.ts lib/translations/fr.ts lib/translations/de.ts lib/translations/hi.ts lib/translations/es.ts
git commit -m "feat: add disclaimer and medical banner translation keys for all non-English locales"
```

---

### Task 3: Create MedicalDisclaimer component

**Files:**
- Create: `components/ui/MedicalDisclaimer.tsx`

- [ ] **Step 1: Create the component**

```tsx
import Link from 'next/link';
import type { Locale } from '@/lib/i18n';
import { localePath, getTranslations } from '@/lib/i18n';

interface MedicalDisclaimerProps {
  locale: Locale;
  context?: 'health' | 'ayurveda';
}

export default function MedicalDisclaimer({
  locale,
  context = 'health',
}: MedicalDisclaimerProps) {
  const t = getTranslations(locale);
  const text = context === 'ayurveda'
    ? t.medicalDisclaimer.ayurveda
    : t.medicalDisclaimer.health;

  return (
    <div className="bg-earth-100 dark:bg-earth-800/50 border border-earth-200 dark:border-earth-700 rounded-lg p-3 mb-6">
      <div className="flex items-start gap-2">
        <svg
          className="w-4 h-4 text-earth-500 dark:text-earth-400 flex-shrink-0 mt-0.5"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
          />
        </svg>
        <p className="text-xs text-earth-600 dark:text-earth-300 leading-relaxed">
          {text}{' '}
          <Link
            href={localePath(locale, '/disclaimer')}
            className="text-forest-700 dark:text-forest-400 underline hover:text-forest-900 dark:hover:text-forest-300"
          >
            {t.medicalDisclaimer.readMore}
          </Link>
        </p>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/ui/MedicalDisclaimer.tsx
git commit -m "feat: create MedicalDisclaimer banner component"
```

---

## Chunk 2: Disclaimer Page + Footer Link

### Task 4: Create the Disclaimer page

**Files:**
- Create: `app/[lang]/disclaimer/page.tsx`

- [ ] **Step 1: Create the page**

Model after `app/[lang]/privacy-policy/page.tsx`. The page is a server component with `generateStaticParams()` and `generateMetadata()`.

```tsx
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import type { Locale } from '@/lib/i18n';
import { getTranslations, isValidLocale, localeParams, hreflangAlternates } from '@/lib/i18n';
import Breadcrumb from '@/components/layout/Breadcrumb';

export function generateStaticParams() {
  return localeParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isValidLocale(lang)) return {};
  const t = getTranslations(lang);

  return {
    title: `${t.disclaimerPage.title} | ${t.site.siteName}`,
    description: t.disclaimerPage.intro,
    alternates: {
      canonical: `/${lang}/disclaimer`,
      languages: hreflangAlternates('/disclaimer'),
    },
  };
}

export default async function DisclaimerPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();

  const locale: Locale = lang;
  const t = getTranslations(locale);
  const d = t.disclaimerPage;

  const sections = [
    { title: d.healthDisclaimerTitle, text: d.healthDisclaimerText },
    { title: d.aiDisclosureTitle, text: d.aiDisclosureText },
  ];

  return (
    <main>
      <Breadcrumb locale={locale} />

      <div className="content-wrapper py-8">
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-earth-800 dark:text-earth-100 mb-4">
          {d.title}
        </h1>
        <p className="text-sm text-earth-500 dark:text-earth-400 mb-10">
          {d.lastUpdated}
        </p>

        <p className="text-lg text-earth-700 dark:text-earth-300 max-w-3xl mb-12 leading-relaxed">
          {d.intro}
        </p>

        <div className="max-w-3xl space-y-10">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="font-heading text-2xl font-bold text-earth-800 dark:text-earth-100 mb-3">
                {section.title}
              </h2>
              <p className="text-earth-700 dark:text-earth-300 leading-relaxed">
                {section.text}
              </p>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add app/\[lang\]/disclaimer/page.tsx
git commit -m "feat: create dedicated disclaimer page"
```

---

### Task 5: Add Disclaimer link to Footer

**Files:**
- Modify: `components/layout/Footer.tsx`

- [ ] **Step 1: Add Disclaimer link to resourceLinks array**

In `components/layout/Footer.tsx`, find the `resourceLinks` array (~line 29-43). Add the Disclaimer link right after the Privacy Policy link (line 37). It should be ungated (no locale condition):

```typescript
    { href: localePath(locale, '/disclaimer'), label: t.nav.disclaimer },
```

Insert it after:
```typescript
    { href: localePath(locale, '/privacy-policy'), label: t.nav.privacyPolicy },
```

- [ ] **Step 2: Commit**

```bash
git add components/layout/Footer.tsx
git commit -m "feat: add Disclaimer link to footer resources column"
```

---

### Task 6: Build and verify disclaimer page + footer link

- [ ] **Step 1: Run the build**

```bash
npm run build
```

Expected: Build succeeds with no errors. The `/disclaimer` route should appear in the build output for all 7 locales.

- [ ] **Step 2: Commit if any fixes needed**

If there are type errors or build issues, fix and commit.

---

## Chunk 3: Place MedicalDisclaimer on Health-Claim Pages

### Task 7: Add MedicalDisclaimer to millet detail page

**Files:**
- Modify: `app/[lang]/millets/[slug]/page.tsx`

- [ ] **Step 1: Import MedicalDisclaimer**

Add at the top imports:

```typescript
import MedicalDisclaimer from '@/components/ui/MedicalDisclaimer';
```

- [ ] **Step 2: Place banner above health benefits section**

Find the Health Benefits section (~line 348-349):
```tsx
          {/* ===== Health Benefits ===== */}
          <section id="health-benefits">
```

Insert the MedicalDisclaimer component right before the `<section id="health-benefits">` tag:

```tsx
          <MedicalDisclaimer locale={locale} />

          {/* ===== Health Benefits ===== */}
          <section id="health-benefits">
```

- [ ] **Step 3: Commit**

```bash
git add app/\[lang\]/millets/\[slug\]/page.tsx
git commit -m "feat: add MedicalDisclaimer to millet detail health benefits section"
```

---

### Task 8: Add MedicalDisclaimer to FAQ page

**Files:**
- Modify: `app/[lang]/faq/page.tsx`

- [ ] **Step 1: Import MedicalDisclaimer**

```typescript
import MedicalDisclaimer from '@/components/ui/MedicalDisclaimer';
```

- [ ] **Step 2: Place banner near the top of page content**

Add `<MedicalDisclaimer locale={locale} />` after the page intro paragraph, before the FAQ accordion sections.

- [ ] **Step 3: Commit**

```bash
git add app/\[lang\]/faq/page.tsx
git commit -m "feat: add MedicalDisclaimer to FAQ page"
```

---

### Task 9: Replace existing disclaimer on Ayurveda page

**Files:**
- Modify: `app/[lang]/ayurveda/page.tsx`

- [ ] **Step 1: Import MedicalDisclaimer and remove AlertTriangle import**

Replace the `AlertTriangle` import from lucide-react (if it's the only lucide import, remove the entire import line; if other icons are imported from lucide-react, just remove `AlertTriangle` from the destructuring).

Add:
```typescript
import MedicalDisclaimer from '@/components/ui/MedicalDisclaimer';
```

- [ ] **Step 2: Replace the existing disclaimer section**

Find the existing disclaimer section (~lines 341-356):
```tsx
        {/* Disclaimer */}
        <section className="mb-12">
          <div className="bg-orange-900\30 border-2 border-orange-700 rounded-xl p-6 md:p-8">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-0.5" />
              ...
            </div>
          </div>
        </section>
```

Replace that entire section with:
```tsx
        <MedicalDisclaimer locale={locale} context="ayurveda" />
```

- [ ] **Step 3: Commit**

```bash
git add app/\[lang\]/ayurveda/page.tsx
git commit -m "feat: replace inline ayurveda disclaimer with MedicalDisclaimer component"
```

---

### Task 10: Add MedicalDisclaimer to Nutrition page

**Files:**
- Modify: `app/[lang]/nutrition/page.tsx`

- [ ] **Step 1: Import and place MedicalDisclaimer**

Import `MedicalDisclaimer` and add `<MedicalDisclaimer locale={locale} />` near the top of the page content, after the intro.

- [ ] **Step 2: Commit**

```bash
git add app/\[lang\]/nutrition/page.tsx
git commit -m "feat: add MedicalDisclaimer to nutrition page"
```

---

### Task 11: Add MedicalDisclaimer to locale-specific health pages (client components)

**Files:**
- Modify: `app/[lang]/nutrition-et-sante/page.tsx` (French — client component)
- Modify: `app/[lang]/nutricion-y-salud/page.tsx` (Spanish — client component)
- Modify: `app/[lang]/ernaehrung-und-gesundheit/page.tsx` (German — client component)

These are `'use client'` components. They already extract locale from `useParams()`. Use the existing locale variable.

- [ ] **Step 1: Add to French health page**

Import `MedicalDisclaimer` and place `<MedicalDisclaimer locale={locale} />` after the page intro, before the health benefit cards. The locale is already extracted via `useParams()` and cast to `Locale`.

- [ ] **Step 2: Add to Spanish health page**

Same pattern as French page.

- [ ] **Step 3: Add to German health page**

Same pattern as German page.

- [ ] **Step 4: Commit**

```bash
git add app/\[lang\]/nutrition-et-sante/page.tsx app/\[lang\]/nutricion-y-salud/page.tsx app/\[lang\]/ernaehrung-und-gesundheit/page.tsx
git commit -m "feat: add MedicalDisclaimer to locale-specific health pages"
```

---

### Task 12: Build and verify all banner placements

- [ ] **Step 1: Run the build**

```bash
npm run build
```

Expected: Build succeeds with no errors.

- [ ] **Step 2: Commit if any fixes needed**

---

## Chunk 4: Claim Language Softening

### Task 13: Soften health claims in millets-major.ts

**Files:**
- Modify: `data/millets-major.ts`

Apply these exact find-and-replace edits. Only change therapeutic/health claims, NOT nutritional composition facts.

- [ ] **Step 1: Soften Pearl Millet claims (~lines 120-148)**

Line 124: `'This helps combat iron-deficiency anemia'` → `'This may help address iron-deficiency anemia'`

Line 131: `'supports heart health by helping regulate blood pressure'` → `'may support heart health by helping regulate blood pressure'`

Line 136: `'Good for diabetes management'` → `'May support blood sugar management'`

Line 138: `'making it suitable for people managing diabetes'` → `'which may be beneficial for people managing blood sugar levels'`

- [ ] **Step 2: Soften Finger Millet (Ragi) claims (~lines 300-333)**

Line 304: `'This makes it invaluable for bone health'` → `'This may support bone health'`

Line 311: `'supports bone density and may help prevent osteoporosis'` → `'may support bone density'`

Benefit title at line ~310-311: If there is a benefit title like `'Supports bone health and osteoporosis prevention'`, change to `'May support bone health'`.

- [ ] **Step 3: Soften Sorghum claims (~lines 488-514)**

Line 490: benefit title `'Very high fiber content aids digestion'` → `'Very high fiber content may aid digestion'`

Line 492: `'This promotes healthy digestion'` → `'This may promote healthy digestion'`
`'supports gut microbiome diversity'` → `'may support gut microbiome diversity'`

- [ ] **Step 4: Soften Foxtail Millet claims (~lines 673-699)**

Line 682: benefit title `'Low glycemic index good for diabetics'` → `'Low glycemic index may benefit blood sugar management'`

- [ ] **Step 5: Soften Little Millet claims (~lines 852-878)**

Line 863: `'supports healthy digestion'` → `'may support healthy digestion'`

- [ ] **Step 6: Scan for any remaining unsoftened therapeutic claims**

Search for remaining instances of `helps`, `supports`, `aids`, `prevents`, `combats`, `good for`, `invaluable` in health benefit descriptions (not nutritional facts). Soften any missed claims.

- [ ] **Step 7: Commit**

```bash
git add data/millets-major.ts
git commit -m "feat: soften therapeutic health claim language in major millets data"
```

---

### Task 14: Soften health claims in millets-minor.ts

**Files:**
- Modify: `data/millets-minor.ts`

- [ ] **Step 1: Soften all therapeutic claims**

Apply the same softening rules. Key lines found:

Line 132: `'supports healthy digestion, promotes regular bowel movements, and may help maintain'` → `'may support healthy digestion, promote regular bowel movements, and help maintain'`

Line 304: `'supports digestive health, promotes satiety, and aids in cholesterol management'` → `'may support digestive health, promote satiety, and aid in cholesterol management'`

Line 496: `'supports liver function and may help in fat metabolism'` → `'may support liver function and help in fat metabolism'`
Also: `'may support overall liver health'` — already softened, leave as-is.

Line 670: `'supports digestive health, promotes satiety, and aids in maintaining'` → `'may support digestive health, promote satiety, and aid in maintaining'`

Lines 432, 620 (ayurvedic properties): `'supports easy digestion'` — this is traditional knowledge text, soften to `'is said to support easy digestion'`

- [ ] **Step 2: Scan for any remaining unsoftened therapeutic claims**

Same search as Task 13, Step 6.

- [ ] **Step 3: Commit**

```bash
git add data/millets-minor.ts
git commit -m "feat: soften therapeutic health claim language in minor millets data"
```

---

### Task 15: Final build verification

- [ ] **Step 1: Run full build**

```bash
npm run build
```

Expected: Build succeeds with no errors.

- [ ] **Step 2: Verify page count**

The build output should show the new `/disclaimer` route generated for all 7 locales (7 new static pages added to the previous 46+).

- [ ] **Step 3: Commit any final fixes if needed**
