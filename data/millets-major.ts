import type { Millet } from '@/lib/types';

export const majorMillets: Millet[] = [
  // =============================================
  // PEARL MILLET (Bajra)
  // =============================================
  {
    slug: 'pearl-millet',
    name: 'Pearl Millet',
    commonName: 'Bajra',
    scientificName: 'Pennisetum glaucum',
    family: 'Poaceae',
    category: 'major',
    grainType: 'husked',
    imageUrl: '',
    images: {
      grain: '/images/millets/pearl-millet-grain.webp',
      plant: '/images/millets/pearl-millet-plant.webp',
      cooked: '/images/millets/pearl-millet-cooked.webp',
    },
    tagline: "India's most widely grown millet, a staple of Rajasthan and Gujarat",
    description:
      'Pearl millet (Bajra) is the most widely grown millet in India and the sixth most important cereal globally. It is a staple food in the arid and semi-arid regions of Rajasthan, Gujarat, Maharashtra, and Haryana. Known for its exceptional heat and drought tolerance, pearl millet thrives in sandy soils with minimal rainfall. It is rich in iron, protein, and energy, making it a nutritional powerhouse for millions of people across India and Africa.',

    names: {
      english: 'Pearl Millet',
      hindi: 'बाजरा (Bajra)',
      tamil: 'கம்பு (Kambu)',
      telugu: 'సజ్జలు (Sajjalu)',
      kannada: 'ಸಜ್ಜೆ (Sajje)',
      malayalam: 'കമ്പം (Kambam)',
      marathi: 'बाजरी (Bajri)',
      bengali: 'বাজরা (Bajra)',
      gujarati: 'બાજરી (Bajri)',
      odia: 'ବାଜରା (Bajra)',
      punjabi: 'ਬਾਜਰਾ (Bajra)',
      sanskrit: 'वज्रान्न (Vajranna)',
    },

    nutrition: {
      calories: 361,
      protein_g: 11.6,
      fat_g: 5.0,
      carbohydrates_g: 67.5,
      fiber_g: 1.2,
      calcium_mg: 42,
      iron_mg: 8.0,
      zinc_mg: 3.1,
      phosphorus_mg: 296,
      magnesium_mg: 137,
      potassium_mg: 307,
      source: 'ICMR-NIN IFCT 2017',
      sourceDetail: 'Indian Food Composition Tables, National Institute of Nutrition, Hyderabad',
    },

    glycemicIndex: {
      value: 55,
      category: 'low',
      source: 'Gopalan et al., Nutritive Value of Indian Foods, NIN',
    },

    ayurveda: {
      rasa: ['Madhura (sweet)'],
      guna: ['Guru (heavy)', 'Snigdha (unctuous)'],
      virya: 'Ushna (hot)',
      vipaka: 'Madhura',
      doshaEffect: {
        vata: 'increases',
        pitta: 'neutral',
        kapha: 'decreases',
      },
      therapeuticUses: [
        'Provides sustained energy and nourishment',
        'Strengthens muscles and tissues',
        'Useful in cold climates and winter season',
        'Supports lactation in nursing mothers',
      ],
      contraindications: [
        'Not ideal for individuals with high Vata imbalance',
        'Should be consumed in moderation during summer',
      ],
      classicalReference: 'Bhavaprakasha Nighantu, Dhanya Varga',
    },

    history: {
      originRegion: 'Sahel region of Africa',
      domesticationPeriod: 'Approximately 4500 years ago (~2500 BCE)',
      archaeologicalEvidence:
        'Archaeological evidence from Surkotada and Rojdi in Gujarat dating to approximately 2000 BCE confirms early cultivation in the Indian subcontinent.',
      spreadPattern:
        'Originated in the Sahel region of West Africa and spread to India around 2000 BCE, likely through ancient trade routes across the Arabian Sea.',
      culturalSignificance:
        'Pearl millet is deeply embedded in the food culture of Rajasthan and Gujarat. Bajra roti with ghee and jaggery is a traditional winter staple. It is also central to harvest festivals in western India.',
    },

    cultivation: {
      majorStates: ['Rajasthan', 'Maharashtra', 'Gujarat', 'Uttar Pradesh', 'Haryana'],
      globalRegions: ['West Africa (Sahel)', 'East Africa', 'South Asia'],
      growingSeason: 'Kharif (July-October)',
      waterRequirement: '350-500mm rainfall',
      soilType: 'Sandy and loamy soils; tolerates poor, dry soils',
      harvestDays: '65-85 days',
    },

    cooking: {
      waterRatio: '1:3',
      soakingTime: 'No soaking needed',
      cookingTime: '20-25 minutes',
      texture: 'Slightly coarse and nutty',
      flavorProfile: 'Mild, earthy',
      bestSubstituteFor: 'Wheat flour (for rotis)',
      tips: [
        'Best used as flour for making bajra roti or bhakri',
        'Mix with wheat flour (50:50) if new to bajra for a milder taste',
        'Serve bajra roti hot with ghee for best flavor and texture',
        'Pearl millet flour does not keep long — grind fresh or refrigerate',
      ],
    },

    healthBenefits: [
      {
        benefit: 'Rich iron source',
        description:
          'Pearl millet contains 8.0mg iron per 100g, making it one of the best plant-based iron sources among cereals. This helps combat iron-deficiency anemia, which is prevalent in India.',
        evidenceLevel: 'well-established',
        source: 'ICMR-NIN IFCT 2017',
      },
      {
        benefit: 'Supports cardiovascular health',
        description:
          'The magnesium and potassium content in pearl millet supports heart health by helping regulate blood pressure and maintaining healthy heart rhythm.',
        evidenceLevel: 'supported-by-research',
        source: 'Journal of Food Science and Technology',
      },
      {
        benefit: 'Good for diabetes management',
        description:
          'With a glycemic index of ~55, pearl millet releases glucose slowly into the bloodstream, making it suitable for people managing diabetes.',
        evidenceLevel: 'supported-by-research',
        source: 'International Journal of Food Sciences and Nutrition',
      },
      {
        benefit: 'High energy grain',
        description:
          'At 361 calories per 100g with good protein (11.6g) and fat (5.0g) content, pearl millet is an excellent energy source, especially for physically active people and laborers.',
        evidenceLevel: 'well-established',
        source: 'ICMR-NIN IFCT 2017',
      },
    ],

    sideEffects: [
      {
        condition: 'Digestive discomfort',
        description:
          'May cause bloating in some people initially, especially those not accustomed to millet consumption. Gradual introduction is recommended.',
        severity: 'mild',
      },
      {
        condition: 'Goitrogen content',
        description:
          'Contains goitrogens in raw form that may affect thyroid function. Cooking reduces this significantly, making it safe for normal consumption.',
        severity: 'moderate',
      },
    ],

    isGlutenFree: true,
    relatedRecipes: [
      'bajra-roti',
      'bajra-khichdi',
      'pearl-millet-porridge',
      'bajra-bhakri',
      'bajra-raab',
    ],
    sources: [
      'icmr-nin-ifct-2017',
      'bhavaprakasha-nighantu',
      'gopalan-nutritive-value-indian-foods',
      'icar-pearl-millet-handbook',
    ],
  },

  // =============================================
  // FINGER MILLET (Ragi)
  // =============================================
  {
    slug: 'finger-millet',
    name: 'Finger Millet',
    commonName: 'Ragi',
    scientificName: 'Eleusine coracana',
    family: 'Poaceae',
    category: 'major',
    grainType: 'naked',
    imageUrl: '',
    images: {
      grain: '/images/millets/finger-millet-grain.webp',
      plant: '/images/millets/finger-millet-plant.webp',
      cooked: '/images/millets/finger-millet-cooked.webp',
    },
    tagline: "The calcium champion — nature's richest non-dairy calcium source among cereals",
    description:
      'Finger millet (Ragi) is renowned as the calcium champion of the cereal world, containing an extraordinary 344mg of calcium per 100g — the highest among all cereals. A staple of Karnataka and Tamil Nadu, ragi has been cultivated in India for over 3000 years. It is especially valued for infant nutrition, bone health, and as a dietary staple for the elderly. Ragi mudde (ragi ball) and ragi malt are iconic South Indian preparations.',

    names: {
      english: 'Finger Millet',
      hindi: 'रागी (Ragi) / मंडुआ (Mandua)',
      tamil: 'கேழ்வரகு (Kezhvaragu)',
      telugu: 'రాగి (Ragi)',
      kannada: 'ರಾಗಿ (Ragi)',
      malayalam: 'മുത്താറി (Mutthari)',
      marathi: 'नाचणी (Nachni)',
      bengali: 'মড়ুয়া (Marua)',
      gujarati: 'નાગલી (Nagli)',
      odia: 'ମାଣ୍ଡିଆ (Mandia)',
      punjabi: 'ਮੰਡੂਆ (Mandua)',
      sanskrit: 'मधूलिका (Madhulika)',
    },

    nutrition: {
      calories: 328,
      protein_g: 7.3,
      fat_g: 1.3,
      carbohydrates_g: 72.0,
      fiber_g: 3.6,
      calcium_mg: 344,
      iron_mg: 3.9,
      zinc_mg: 2.3,
      phosphorus_mg: 283,
      magnesium_mg: 137,
      potassium_mg: 408,
      source: 'ICMR-NIN IFCT 2017',
      sourceDetail: 'Indian Food Composition Tables, National Institute of Nutrition, Hyderabad',
    },

    glycemicIndex: {
      value: 61,
      category: 'medium',
      source: 'Gopalan et al., Nutritive Value of Indian Foods, NIN',
    },

    ayurveda: {
      rasa: ['Madhura (sweet)', 'Kashaya (astringent)'],
      guna: ['Laghu (light)', 'Ruksha (dry)'],
      virya: 'Sheeta (cool)',
      vipaka: 'Madhura',
      doshaEffect: {
        vata: 'neutral',
        pitta: 'decreases',
        kapha: 'decreases',
      },
      therapeuticUses: [
        'Excellent for bone strengthening and calcium supplementation',
        'Recommended for growing children and elderly',
        'Cooling effect beneficial in Pitta conditions',
        'Supports weight management due to light quality',
        'Used in convalescence and recovery diets',
      ],
      contraindications: [
        'Excessive consumption may lead to constipation due to Ruksha (dry) quality',
        'Those with kidney stones (calcium oxalate type) should consume in moderation',
      ],
      classicalReference: 'Charaka Samhita, Sutra Sthana',
    },

    history: {
      originRegion: 'Ethiopian highlands, East Africa',
      domesticationPeriod: 'Approximately 5000 years ago (~3000 BCE)',
      archaeologicalEvidence:
        'Archaeological evidence from Hallur in Karnataka dating to approximately 1800 BCE shows early cultivation in South India.',
      spreadPattern:
        'Domesticated in the Ethiopian highlands and reached India around 3000 BCE, establishing itself as a major crop in the Deccan Plateau and South Indian hills.',
      culturalSignificance:
        'Ragi is central to the food culture of Karnataka and Tamil Nadu. Ragi mudde (ragi ball) is the traditional staple of Karnataka. Ragi malt (ambli/kanji) is the traditional first food for Indian infants.',
    },

    cultivation: {
      majorStates: ['Karnataka', 'Tamil Nadu', 'Andhra Pradesh', 'Uttarakhand', 'Maharashtra'],
      globalRegions: ['East Africa (Ethiopia, Uganda)', 'South Asia', 'Nepal'],
      growingSeason: 'Kharif (June-October)',
      waterRequirement: '500-750mm rainfall',
      soilType: 'Red loamy and laterite soils; tolerates slightly acidic soils',
      harvestDays: '90-120 days',
    },

    cooking: {
      waterRatio: '1:3.5',
      soakingTime: 'No soaking needed for flour',
      cookingTime: '15-20 minutes (porridge)',
      texture: 'Smooth when cooked as porridge, slightly gritty as flour',
      flavorProfile: 'Mild, slightly sweet, earthy',
      bestSubstituteFor: 'Wheat flour, rice flour',
      tips: [
        'For ragi mudde, add ragi flour to boiling water and stir continuously to avoid lumps',
        'Ragi malt can be made by mixing ragi flour with water and cooking until thick',
        'Combine ragi flour with jaggery and cardamom for a nutritious porridge',
        'Ragi flour works well in dosas, idlis, and baked goods',
        'Sprouted ragi flour has enhanced nutrient bioavailability',
      ],
    },

    healthBenefits: [
      {
        benefit: 'Exceptional calcium source',
        description:
          'Finger millet contains 344mg calcium per 100g, the highest among all cereals and comparable to milk. This makes it invaluable for bone health, especially for those who are lactose intolerant.',
        evidenceLevel: 'well-established',
        source: 'ICMR-NIN IFCT 2017',
      },
      {
        benefit: 'Supports bone health and osteoporosis prevention',
        description:
          'The high calcium and phosphorus content supports bone density and may help prevent osteoporosis, particularly in postmenopausal women and the elderly.',
        evidenceLevel: 'supported-by-research',
        source: 'Journal of Bone and Mineral Research',
      },
      {
        benefit: 'Good for diabetes management',
        description:
          'Finger millet contains amino acids that help lower blood sugar response. Its seed coat is rich in polyphenols and dietary fiber that slow glucose absorption.',
        evidenceLevel: 'supported-by-research',
        source: 'Journal of Agricultural and Food Chemistry',
      },
      {
        benefit: 'Rich in antioxidants',
        description:
          'Contains phenolic acids, flavonoids, and tannins that have significant antioxidant activity, helping combat oxidative stress in the body.',
        evidenceLevel: 'supported-by-research',
        source: 'Food Chemistry',
      },
      {
        benefit: 'Excellent for infant and elderly nutrition',
        description:
          'Ragi malt has been traditionally used as the first complementary food for infants in South India. Its easy digestibility and rich calcium content also make it ideal for elderly nutrition.',
        evidenceLevel: 'well-established',
        source: 'Indian Pediatrics',
      },
    ],

    sideEffects: [
      {
        condition: 'Oxalate content',
        description:
          'Finger millet contains oxalates that may interfere with calcium absorption in some cases and could contribute to kidney stone formation in susceptible individuals.',
        severity: 'mild',
      },
      {
        condition: 'Constipation risk',
        description:
          'May cause constipation if consumed excessively without adequate water intake, due to its dry (Ruksha) quality.',
        severity: 'mild',
      },
    ],

    isGlutenFree: true,
    relatedRecipes: [
      'ragi-mudde',
      'ragi-malt',
      'ragi-dosa',
      'ragi-porridge',
      'ragi-ladoo',
      'ragi-idli',
    ],
    sources: [
      'icmr-nin-ifct-2017',
      'charaka-samhita',
      'gopalan-nutritive-value-indian-foods',
      'icar-finger-millet-handbook',
      'hallur-archaeological-report',
    ],
  },

  // =============================================
  // SORGHUM (Jowar)
  // =============================================
  {
    slug: 'sorghum',
    name: 'Sorghum',
    commonName: 'Jowar',
    scientificName: 'Sorghum bicolor',
    family: 'Poaceae',
    category: 'major',
    grainType: 'naked',
    imageUrl: '',
    images: {
      grain: '/images/millets/sorghum-grain.webp',
      plant: '/images/millets/sorghum-plant.webp',
      cooked: '/images/millets/sorghum-cooked.webp',
    },
    tagline: 'The versatile powerhouse — high in fiber, antioxidants, and culinary adaptability',
    description:
      'Sorghum (Jowar) is one of the most versatile and widely cultivated millets, grown across Maharashtra, Karnataka, and Madhya Pradesh. It is the fifth most important cereal globally. Known for its remarkably high fiber content (9.7g per 100g) and rich antioxidant profile, jowar is consumed as rotis (bhakri), in porridges, and even fermented into beverages. It grows in both Kharif and Rabi seasons, making it a year-round staple.',

    names: {
      english: 'Sorghum',
      hindi: 'ज्वार (Jowar)',
      tamil: 'சோளம் (Cholam)',
      telugu: 'జొన్నలు (Jonnalu)',
      kannada: 'ಜೋಳ (Jola)',
      malayalam: 'ചോളം (Cholam)',
      marathi: 'ज्वारी (Jwari)',
      bengali: 'জোয়ার (Jowar)',
      gujarati: 'જુવાર (Juvar)',
      odia: 'ଜୁଆର (Juara)',
      punjabi: 'ਜਵਾਰ (Jawar)',
      sanskrit: 'यवनाल (Yavanala)',
    },

    nutrition: {
      calories: 349,
      protein_g: 10.4,
      fat_g: 1.9,
      carbohydrates_g: 72.6,
      fiber_g: 9.7,
      calcium_mg: 25,
      iron_mg: 4.1,
      zinc_mg: 1.6,
      phosphorus_mg: 222,
      magnesium_mg: 171,
      potassium_mg: 340,
      source: 'ICMR-NIN IFCT 2017',
      sourceDetail: 'Indian Food Composition Tables, National Institute of Nutrition, Hyderabad',
    },

    glycemicIndex: {
      value: 62,
      category: 'medium',
      source: 'Gopalan et al., Nutritive Value of Indian Foods, NIN',
    },

    ayurveda: {
      rasa: ['Madhura (sweet)', 'Kashaya (astringent)'],
      guna: ['Ruksha (dry)', 'Laghu (light)'],
      virya: 'Sheeta (cool)',
      vipaka: 'Katu (pungent)',
      doshaEffect: {
        vata: 'increases',
        pitta: 'decreases',
        kapha: 'decreases',
      },
      therapeuticUses: [
        'Promotes digestive health due to high fiber content',
        'Cooling effect beneficial in Pitta-dominant conditions',
        'Supports weight management due to light and dry qualities',
        'Useful for urinary tract health',
      ],
      contraindications: [
        'May aggravate Vata — best consumed with ghee or oil to balance',
        'Excessive consumption may cause dryness in the body',
      ],
      classicalReference: 'Bhavaprakasha Nighantu',
    },

    history: {
      originRegion: 'Northeastern Africa (Sudan-Ethiopia region)',
      domesticationPeriod: 'Approximately 5000-8000 years ago',
      archaeologicalEvidence:
        'One of the earliest cultivated cereals in Africa. Evidence from Deccan Plateau archaeological sites confirms its presence in India by approximately 2000 BCE.',
      spreadPattern:
        'Domesticated in northeastern Africa and spread along trade routes to India by 2000 BCE, then to China and Southeast Asia.',
      culturalSignificance:
        'Jowar bhakri (flatbread) is a cultural staple of Maharashtra and northern Karnataka. It is integral to the food identity of the Deccan Plateau region and is consumed daily by millions.',
    },

    cultivation: {
      majorStates: ['Maharashtra', 'Karnataka', 'Madhya Pradesh', 'Rajasthan', 'Tamil Nadu'],
      globalRegions: ['Sub-Saharan Africa', 'South Asia', 'Americas', 'Australia'],
      growingSeason: 'Both Kharif (July-October) and Rabi (October-February)',
      waterRequirement: '400-600mm rainfall',
      soilType: 'Black cotton soils (vertisols), clay loam; tolerates alkaline soils',
      harvestDays: '100-120 days',
    },

    cooking: {
      waterRatio: '1:2.5',
      soakingTime: 'Optional soaking 4-6 hours (for whole grain)',
      cookingTime: '25-30 minutes',
      texture: 'Firm, slightly chewy',
      flavorProfile: 'Mild, slightly sweet, neutral',
      bestSubstituteFor: 'Rice, wheat',
      tips: [
        'Jowar flour makes excellent bhakri — pat the dough while warm for pliable rotis',
        'Whole jowar grains can be cooked like rice after soaking',
        'Popped jowar (like popcorn) is a popular snack in Maharashtra',
        'Jowar flour does not have gluten — add a binder when baking',
        'Combine with vegetables for a nutritious jowar upma or khichdi',
      ],
    },

    healthBenefits: [
      {
        benefit: 'Very high fiber content aids digestion',
        description:
          'Sorghum contains 9.7g fiber per 100g, among the highest of all cereals. This promotes healthy digestion, regular bowel movements, and supports gut microbiome diversity.',
        evidenceLevel: 'well-established',
        source: 'ICMR-NIN IFCT 2017',
      },
      {
        benefit: 'Rich in phenolic compounds and antioxidants',
        description:
          'Sorghum is rich in 3-deoxyanthocyanins, tannins, and phenolic acids that exhibit strong antioxidant properties, potentially reducing oxidative damage in the body.',
        evidenceLevel: 'supported-by-research',
        source: 'Journal of Cereal Science',
      },
      {
        benefit: 'Potential anti-cancer properties',
        description:
          'Contains tannins and other phenolic compounds that have shown potential anti-cancer properties in preliminary studies, particularly against colon cancer cells.',
        evidenceLevel: 'preliminary-evidence',
        source: 'Nutrition and Cancer journal',
      },
      {
        benefit: 'Supports heart health',
        description:
          'The high fiber and magnesium content, along with policosanols found in sorghum wax, may help lower cholesterol and support cardiovascular health.',
        evidenceLevel: 'supported-by-research',
        source: 'Journal of Agricultural and Food Chemistry',
      },
    ],

    sideEffects: [
      {
        condition: 'Tannin-iron interaction',
        description:
          'Tannin content in sorghum may reduce iron absorption from other foods. People with iron deficiency should be mindful of consuming sorghum with iron-rich foods.',
        severity: 'moderate',
      },
      {
        condition: 'Initial digestive adjustment',
        description:
          'May cause gas and bloating initially in people not accustomed to high-fiber foods. Gradual introduction is recommended.',
        severity: 'mild',
      },
    ],

    isGlutenFree: true,
    relatedRecipes: [
      'jowar-bhakri',
      'jowar-upma',
      'jowar-dosa',
      'jowar-khichdi',
      'popped-jowar',
    ],
    sources: [
      'icmr-nin-ifct-2017',
      'bhavaprakasha-nighantu',
      'gopalan-nutritive-value-indian-foods',
      'icar-sorghum-handbook',
    ],
  },

  // =============================================
  // FOXTAIL MILLET (Kangni / Thinai)
  // =============================================
  {
    slug: 'foxtail-millet',
    name: 'Foxtail Millet',
    commonName: 'Kangni / Thinai',
    scientificName: 'Setaria italica',
    family: 'Poaceae',
    category: 'minor',
    grainType: 'husked',
    imageUrl: '',
    images: {
      grain: '/images/millets/foxtail-millet-grain.webp',
      plant: '/images/millets/foxtail-millet-plant.webp',
      cooked: '/images/millets/foxtail-millet-cooked.webp',
    },
    tagline: 'One of the oldest cultivated millets — rich in protein and iron, a rice alternative',
    description:
      'Foxtail millet (Kangni/Thinai) is one of the oldest cultivated crops in human history, with evidence of domestication in northern China dating back nearly 9000 years. It is high in protein (12.3g per 100g), rich in dietary fiber, and has a low glycemic index of ~50. Its fluffy, rice-like texture when cooked makes it an excellent substitute for rice. It is extremely drought tolerant, requiring only 300-400mm of rainfall.',

    names: {
      english: 'Foxtail Millet',
      hindi: 'कंगनी (Kangni)',
      tamil: 'தினை (Thinai)',
      telugu: 'కొర్రలు (Korralu)',
      kannada: 'ನವಣೆ (Navane)',
      malayalam: 'തിന (Thina)',
      marathi: 'काँग / राळा (Kang / Rala)',
      bengali: 'কাওন (Kaon)',
      gujarati: 'કાંગ (Kang)',
      odia: 'କଙ୍ଗୁ (Kangu)',
      punjabi: 'ਕੰਗਣੀ (Kangni)',
      sanskrit: 'प्रियंगु (Priyangu)',
    },

    nutrition: {
      calories: 331,
      protein_g: 12.3,
      fat_g: 4.3,
      carbohydrates_g: 60.9,
      fiber_g: 8.0,
      calcium_mg: 31,
      iron_mg: 2.8,
      zinc_mg: 2.4,
      phosphorus_mg: 290,
      magnesium_mg: 81,
      potassium_mg: 250,
      source: 'ICMR-NIN IFCT 2017',
      sourceDetail: 'Indian Food Composition Tables, National Institute of Nutrition, Hyderabad',
    },

    glycemicIndex: {
      value: 50,
      category: 'low',
      source: 'Gopalan et al., Nutritive Value of Indian Foods, NIN',
    },

    ayurveda: {
      rasa: ['Kashaya (astringent)', 'Madhura (sweet)'],
      guna: ['Laghu (light)', 'Ruksha (dry)'],
      virya: 'Ushna (warm)',
      vipaka: 'Katu (pungent)',
      doshaEffect: {
        vata: 'increases',
        pitta: 'neutral',
        kapha: 'decreases',
      },
      therapeuticUses: [
        'Useful for weight management due to light and dry qualities',
        'Supports digestive fire (Agni)',
        'Beneficial for Kapha-related conditions like congestion',
        'Traditionally used in postpartum recovery diets',
      ],
      contraindications: [
        'May slightly increase Vata — balance with ghee or oil',
        'Not recommended in excess for individuals with dry skin conditions',
      ],
      classicalReference: 'Ashtanga Hridaya',
    },

    history: {
      originRegion: 'Northern China (Cishan archaeological site)',
      domesticationPeriod: 'Approximately 8700 years ago (~6700 BCE)',
      archaeologicalEvidence:
        'Remains found at the Cishan archaeological site in northern China, dating to approximately 8700 years ago, making it one of the oldest cultivated crops globally.',
      spreadPattern:
        'Domesticated in northern China and spread westward via Central Asian trade routes to India, the Middle East, and Europe.',
      culturalSignificance:
        'Foxtail millet holds cultural importance in South Indian cuisine, particularly in Tamil Nadu (Thinai) and Andhra Pradesh (Korralu). It is used in traditional festival preparations and is mentioned in ancient Sangam Tamil literature.',
    },

    cultivation: {
      majorStates: [
        'Andhra Pradesh',
        'Karnataka',
        'Tamil Nadu',
        'Rajasthan',
        'Madhya Pradesh',
      ],
      globalRegions: ['China', 'Southeast Asia', 'South Asia', 'Europe (historical)'],
      growingSeason: 'Kharif (June-October)',
      waterRequirement: '300-400mm rainfall',
      soilType: 'Light sandy loam to medium loam soils; extremely drought tolerant',
      harvestDays: '75-90 days',
    },

    cooking: {
      waterRatio: '1:2.5',
      soakingTime: '30 minutes',
      cookingTime: '15-20 minutes',
      texture: 'Fluffy, rice-like',
      flavorProfile: 'Nutty, slightly sweet',
      bestSubstituteFor: 'Rice',
      tips: [
        'Rinse well and soak for 30 minutes before cooking for best results',
        'Cook like rice — it fluffs up beautifully',
        'Makes excellent upma, pulao, and pongal',
        'Can be used in sweet dishes like payasam (kheer)',
        'Dry roast lightly before cooking for a nuttier flavor',
      ],
    },

    healthBenefits: [
      {
        benefit: 'High protein content',
        description:
          'Foxtail millet contains 12.3g protein per 100g, one of the highest among millets, making it excellent for vegetarians seeking plant-based protein sources.',
        evidenceLevel: 'well-established',
        source: 'ICMR-NIN IFCT 2017',
      },
      {
        benefit: 'Low glycemic index good for diabetics',
        description:
          'With a GI of approximately 50, foxtail millet has a slow glucose release, making it a suitable grain for people managing diabetes.',
        evidenceLevel: 'supported-by-research',
        source: 'International Journal of Diabetes in Developing Countries',
      },
      {
        benefit: 'Rich in dietary fiber',
        description:
          'Contains 8.0g fiber per 100g, supporting digestive health, promoting satiety, and helping maintain healthy cholesterol levels.',
        evidenceLevel: 'well-established',
        source: 'ICMR-NIN IFCT 2017',
      },
      {
        benefit: 'Good source of B vitamins',
        description:
          'Foxtail millet is a good source of B-complex vitamins including thiamine and niacin, which are essential for energy metabolism and nervous system function.',
        evidenceLevel: 'supported-by-research',
        source: 'Journal of Food Science and Technology',
      },
    ],

    sideEffects: [
      {
        condition: 'Goitrogen content',
        description:
          'May cause thyroid issues at very high consumption levels due to goitrogenic compounds. People with thyroid conditions should consume in moderation and consult their doctor.',
        severity: 'consult-doctor',
      },
      {
        condition: 'Processing requirement',
        description:
          'Husked variety needs proper dehusking/processing before cooking. Improperly processed grain may be hard to digest.',
        severity: 'mild',
      },
    ],

    isGlutenFree: true,
    relatedRecipes: [
      'foxtail-millet-upma',
      'foxtail-millet-pulao',
      'thinai-pongal',
      'foxtail-millet-kheer',
      'foxtail-millet-dosa',
    ],
    sources: [
      'icmr-nin-ifct-2017',
      'ashtanga-hridaya',
      'gopalan-nutritive-value-indian-foods',
      'cishan-archaeological-studies',
    ],
  },

  // =============================================
  // LITTLE MILLET (Kutki / Samai)
  // =============================================
  {
    slug: 'little-millet',
    name: 'Little Millet',
    commonName: 'Kutki / Samai',
    scientificName: 'Panicum sumatrense',
    family: 'Poaceae',
    category: 'minor',
    grainType: 'husked',
    imageUrl: '',
    images: {
      grain: '/images/millets/little-millet-grain.webp',
      plant: '/images/millets/little-millet-plant.webp',
      cooked: '/images/millets/little-millet-cooked.webp',
    },
    tagline: 'The iron-rich tiny grain — a perfect rice substitute with high fiber content',
    description:
      'Little millet (Kutki/Samai) is a small-grained millet native to India, domesticated in the Eastern Ghats region. Despite its tiny size, it packs a powerful nutritional punch with very high iron content (9.3mg per 100g) and significant fiber (7.6g per 100g). Its neutral flavor and rice-like texture make it the closest millet substitute for rice. It has been grown since ancient times in tribal areas of central and southern India.',

    names: {
      english: 'Little Millet',
      hindi: 'कुटकी (Kutki)',
      tamil: 'சாமை (Samai)',
      telugu: 'సామలు (Samalu)',
      kannada: 'ಸಾಮೆ (Same)',
      malayalam: 'ചാമ (Chama)',
      marathi: 'वरी (Vari) / साव (Sav)',
      bengali: 'সামা (Sama)',
      gujarati: 'ગજરો (Gajro) / મોરૈયો (Moraiyo)',
      odia: 'ସୁଆଁ (Suan)',
      punjabi: 'ਸਵਾਂਕ (Swank)',
      sanskrit: 'श्यामाक (Shyamaka)',
    },

    nutrition: {
      calories: 341,
      protein_g: 7.7,
      fat_g: 4.7,
      carbohydrates_g: 67.0,
      fiber_g: 7.6,
      calcium_mg: 17,
      iron_mg: 9.3,
      zinc_mg: 3.7,
      phosphorus_mg: 220,
      magnesium_mg: 133,
      potassium_mg: 129,
      source: 'ICMR-NIN IFCT 2017',
      sourceDetail: 'Indian Food Composition Tables, National Institute of Nutrition, Hyderabad',
    },

    glycemicIndex: {
      value: 52,
      category: 'low',
      source: 'Gopalan et al., Nutritive Value of Indian Foods, NIN',
    },

    ayurveda: {
      rasa: ['Madhura (sweet)', 'Kashaya (astringent)'],
      guna: ['Laghu (light)'],
      virya: 'Sheeta (cool)',
      vipaka: 'Madhura',
      doshaEffect: {
        vata: 'neutral',
        pitta: 'decreases',
        kapha: 'neutral',
      },
      therapeuticUses: [
        'Suitable for all body types due to balanced dosha effect',
        'Cooling nature beneficial in summer and Pitta conditions',
        'Supports gentle digestion due to Laghu (light) quality',
        'Traditionally used in diets for convalescence',
      ],
      contraindications: [
        'Minimal contraindications due to balanced nature',
        'May need soaking to reduce antinutrient content',
      ],
      classicalReference: 'Bhavaprakasha Nighantu, Dhanya Varga',
    },

    history: {
      originRegion: 'Eastern Ghats region, India',
      domesticationPeriod: 'Ancient times (exact period uncertain)',
      archaeologicalEvidence:
        'Native to India with long history of cultivation in tribal areas of central and southern India. Limited archaeological records but ethnobotanical evidence supports ancient cultivation.',
      spreadPattern:
        'Domesticated in the Eastern Ghats region of India and remained primarily an Indian crop, grown extensively in tribal and rain-fed farming regions.',
      culturalSignificance:
        'Little millet is an important crop for tribal communities in central India. In Tamil Nadu, Samai rice is a popular everyday millet preparation. It is also significant in Navratri fasting traditions in some regions.',
    },

    cultivation: {
      majorStates: ['Madhya Pradesh', 'Chhattisgarh', 'Karnataka', 'Tamil Nadu', 'Odisha'],
      globalRegions: ['South Asia (primarily India)', 'Southeast Asia (Myanmar, Sri Lanka)'],
      growingSeason: 'Kharif (June-October)',
      waterRequirement: '300-500mm rainfall',
      soilType: 'Sandy loam to red laterite soils; grows well in marginal lands',
      harvestDays: '75-90 days',
    },

    cooking: {
      waterRatio: '1:2.5',
      soakingTime: '30 minutes',
      cookingTime: '15 minutes',
      texture: 'Very similar to rice, slightly sticky',
      flavorProfile: 'Mild, neutral',
      bestSubstituteFor: 'Rice (closest substitute among millets)',
      tips: [
        'Soak for 30 minutes and rinse well before cooking',
        'Cook exactly like rice — it is the easiest millet to transition to',
        'Makes excellent lemon rice, pulao, and biryani substitutes',
        'Can be used for idli and dosa batter mixed with urad dal',
        'Its neutral taste makes it versatile for both savory and sweet dishes',
      ],
    },

    healthBenefits: [
      {
        benefit: 'Very high iron content',
        description:
          'Little millet contains 9.3mg iron per 100g, one of the highest among all millets and cereals. This makes it valuable for preventing and managing iron-deficiency anemia.',
        evidenceLevel: 'well-established',
        source: 'ICMR-NIN IFCT 2017',
      },
      {
        benefit: 'Good fiber source for digestive health',
        description:
          'With 7.6g fiber per 100g, little millet supports healthy digestion, regular bowel movements, and may help lower cholesterol levels.',
        evidenceLevel: 'well-established',
        source: 'ICMR-NIN IFCT 2017',
      },
      {
        benefit: 'Low GI suitable for diabetics',
        description:
          'With a glycemic index of approximately 52, little millet provides slow and steady glucose release, making it suitable for diabetes management.',
        evidenceLevel: 'supported-by-research',
        source: 'International Journal of Food Sciences and Nutrition',
      },
      {
        benefit: 'Rich in antioxidants',
        description:
          'Contains phenolic compounds and flavonoids that may contribute to antioxidant activity, though more research is needed to fully characterize these benefits.',
        evidenceLevel: 'preliminary-evidence',
        source: 'Journal of Food Science and Technology',
      },
    ],

    sideEffects: [
      {
        condition: 'Bloating without soaking',
        description:
          'May cause bloating if not soaked before cooking. Soaking for at least 30 minutes is recommended to improve digestibility.',
        severity: 'mild',
      },
      {
        condition: 'Antinutrient content',
        description:
          'Contains phytates (antinutrients) that may reduce mineral absorption. Soaking, sprouting, or fermenting significantly reduces phytate levels.',
        severity: 'moderate',
      },
    ],

    isGlutenFree: true,
    relatedRecipes: [
      'little-millet-rice',
      'samai-pulao',
      'little-millet-pongal',
      'samai-upma',
      'little-millet-payasam',
    ],
    sources: [
      'icmr-nin-ifct-2017',
      'bhavaprakasha-nighantu',
      'gopalan-nutritive-value-indian-foods',
      'icar-small-millets-handbook',
    ],
  },
];
