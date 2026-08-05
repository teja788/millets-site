import type { SearchableItem } from '@/lib/types';
import { millets } from './millets';
import { recipes } from './recipes';
import { faqItems } from './faq';
import { regionalTraditions } from './regional-traditions';
import { globalMilletRegions } from './global-millets';
import { myths } from './myths';
import { fermentedProducts } from './fermentation';
import { mealPlans } from './meal-plans';

export const searchIndex: SearchableItem[] = [
  // बाजरों को खोज-योग्य आइटम में मैप करें
  ...millets.map(m => ({
    id: m.slug,
    title: m.name,
    description: `${m.commonName} - ${m.tagline}. ${m.scientificName}`,
    type: 'millet' as const,
    url: `/millets/${m.slug}`,
    tags: [m.commonName, m.scientificName, m.names.hindi, m.names.tamil, m.category],
  })),
  // रेसिपी मैप करें
  ...recipes.map(r => ({
    id: r.slug,
    title: r.title,
    description: r.description,
    type: 'recipe' as const,
    url: `/recipes/${r.slug}`,
    tags: [r.category, r.cuisine, r.difficulty, ...r.millets],
  })),
  // अक्सर पूछे जाने वाले प्रश्न मैप करें
  ...faqItems.map(f => ({
    id: f.id,
    title: f.question,
    description: f.answer.substring(0, 200),
    type: 'faq' as const,
    url: '/faq',
    tags: [f.category],
  })),
  // क्षेत्रीय परम्पराएँ मैप करें
  ...regionalTraditions.map(t => ({
    id: `tradition-${t.slug}`,
    title: `${t.state} बाजरा परम्पराएँ`,
    description: t.description.substring(0, 200),
    type: 'tradition' as const,
    url: `/regional-traditions/${t.slug}`,
    tags: [t.state, t.region, ...t.primaryMillets],
  })),
  // वैश्विक बाजरा क्षेत्र मैप करें
  ...globalMilletRegions.map(r => ({
    id: `global-${r.slug}`,
    title: `${r.region} में बाजरे`,
    description: r.description.substring(0, 200),
    type: 'region' as const,
    url: `/global-millets/${r.slug}`,
    tags: [r.region, ...r.countries],
  })),
  // मिथक मैप करें
  ...myths.map(m => ({
    id: m.id,
    title: m.myth,
    description: m.fact.substring(0, 200),
    type: 'page' as const,
    url: '/myths',
    tags: [m.category, 'मिथक', 'तथ्य'],
  })),
  // किण्वित उत्पाद मैप करें
  ...fermentedProducts.map(f => ({
    id: `fermented-${f.name.toLowerCase().replace(/\s+/g, '-')}`,
    title: f.name,
    description: `${f.region} — ${f.culturalContext.substring(0, 150)}`,
    type: 'page' as const,
    url: '/fermentation',
    tags: ['किण्वन', f.region, ...f.millets],
  })),
  // भोजन योजनाएँ मैप करें
  ...mealPlans.map(p => ({
    id: `plan-${p.slug}`,
    title: p.title,
    description: p.description.substring(0, 200),
    type: 'page' as const,
    url: '/meal-plans',
    tags: ['भोजन योजना', p.goal],
  })),
  // स्थैतिक पृष्ठ
  { id: 'about', title: 'बाजरों के बारे में', description: 'बाजरों, उनके वर्गीकरण, और इस वेबसाइट के बारे में जानें', type: 'page' as const, url: '/about', tags: ['परिचय'] },
  { id: 'history', title: 'बाजरों का इतिहास', description: '8000 ईसा पूर्व से वर्तमान तक बाजरा खेती की पुरातात्विक समयरेखा', type: 'page' as const, url: '/history', tags: ['इतिहास', 'पुरातत्व', 'समयरेखा'] },
  { id: 'ayurveda', title: 'आयुर्वेद में बाजरे', description: 'आयुर्वेदिक गुण, दोष मार्गदर्शिका, और मौसमी सिफ़ारिशें', type: 'page' as const, url: '/ayurveda', tags: ['आयुर्वेद', 'दोष', 'पारम्परिक'] },
  { id: 'sustainability', title: 'बाजरे और सततता', description: 'बाजरों के पर्यावरणीय लाभ जिसमें जल दक्षता और जलवायु सहनशीलता शामिल है', type: 'page' as const, url: '/sustainability', tags: ['सततता', 'जलवायु', 'जल'] },
  { id: 'cooking-guide', title: 'पाक मार्गदर्शिका', description: 'बाजरों को कैसे पकाएँ, भिगोएँ, भण्डारित करें, और विकल्प के रूप में इस्तेमाल करें', type: 'page' as const, url: '/cooking-guide', tags: ['खाना बनाना', 'मार्गदर्शिका', 'कैसे करें'] },
  { id: 'glossary', title: 'बाजरा शब्दावली', description: '12 भारतीय भाषाओं में बाजरों के नाम', type: 'page' as const, url: '/glossary', tags: ['शब्दावली', 'भाषाएँ', 'नाम'] },
  { id: 'nutrition', title: 'पोषण तुलना', description: 'सभी 9 बाजरों की पोषण प्रोफ़ाइल की चावल और गेहूँ से तुलना करें', type: 'page' as const, url: '/nutrition', tags: ['पोषण', 'तुलना', 'चार्ट'] },
  // नए स्थैतिक पृष्ठ
  { id: 'regional-traditions', title: 'क्षेत्रीय बाजरा परम्पराएँ', description: 'जानें कि विभिन्न भारतीय राज्य अपने भोजन और संस्कृति में बाजरों का कैसे उपयोग करते हैं', type: 'page' as const, url: '/regional-traditions', tags: ['क्षेत्रीय', 'परम्पराएँ', 'व्यंजन', 'राज्य'] },
  { id: 'global-millets', title: 'दुनिया भर में बाजरे', description: 'जानें कि विभिन्न महाद्वीपों में बाजरे कैसे उगाए और खाए जाते हैं', type: 'page' as const, url: '/global-millets', tags: ['वैश्विक', 'दुनिया', 'अन्तर्राष्ट्रीय'] },
  { id: 'fermentation', title: 'किण्वित बाजरा खाद्य', description: 'दुनिया भर से पारम्परिक किण्वित बाजरा पेय और खाद्य पदार्थ', type: 'page' as const, url: '/fermentation', tags: ['किण्वन', 'किण्वित', 'प्रोबायोटिक', 'पारम्परिक'] },
  { id: 'ancient-references', title: 'बाजरों के प्राचीन सन्दर्भ', description: 'प्राचीन ग्रन्थों में बाजरों के साहित्यिक और पुरातात्विक साक्ष्य', type: 'page' as const, url: '/ancient-references', tags: ['प्राचीन', 'ग्रन्थ', 'वेद', 'इतिहास', 'साहित्य'] },
  { id: 'myths', title: 'बाजरों के मिथक और तथ्य', description: 'बाजरों के बारे में आम भ्रान्तियाँ प्रमाणों के साथ खण्डित', type: 'page' as const, url: '/myths', tags: ['मिथक', 'तथ्य', 'भ्रान्तियाँ'] },
  { id: 'substitution-calculator', title: 'बाजरा विकल्प कैलकुलेटर', description: 'चावल, गेहूँ, और अन्य अनाजों के लिए सही बाजरा विकल्प खोजें', type: 'tool' as const, url: '/tools/substitution-calculator', tags: ['उपकरण', 'विकल्प', 'कैलकुलेटर', 'बदलें'] },
  { id: 'cooking-timer', title: 'बाजरा पकाने का टाइमर', description: 'प्रत्येक बाजरा किस्म के लिए प्रीसेट के साथ टाइमर उपकरण', type: 'tool' as const, url: '/tools/cooking-timer', tags: ['उपकरण', 'टाइमर', 'खाना बनाना'] },
  { id: 'millet-quiz', title: 'बाजरा प्रश्नोत्तरी', description: 'अपनी पसन्द के आधार पर अपना आदर्श बाजरा खोजें', type: 'tool' as const, url: '/tools/millet-quiz', tags: ['उपकरण', 'प्रश्नोत्तरी', 'सिफ़ारिश'] },
  { id: 'meal-plans', title: 'बाजरा भोजन योजनाएँ', description: 'विभिन्न स्वास्थ्य लक्ष्यों के लिए बाजरों से बनी साप्ताहिक भोजन योजनाएँ', type: 'page' as const, url: '/meal-plans', tags: ['भोजन योजना', 'साप्ताहिक', 'आहार'] },
  { id: 'buying-guide', title: 'बाजरा ख़रीद मार्गदर्शिका', description: 'बाजरों को कैसे चुनें, भण्डारित करें, और ख़रीदें', type: 'page' as const, url: '/buying-guide', tags: ['ख़रीदारी', 'शॉपिंग', 'भण्डारण', 'मार्गदर्शिका'] },
];
