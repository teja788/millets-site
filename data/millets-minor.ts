import type { Millet } from '@/lib/types';

export const minorMillets: Millet[] = [
  // =============================================
  // KODO MILLET
  // =============================================
  {
    slug: 'kodo-millet',
    name: 'Kodo Millet',
    commonName: 'Kodo / Kodra',
    scientificName: 'Paspalum scrobiculatum',
    family: 'Poaceae',
    category: 'minor',
    grainType: 'husked',
    imageUrl: '',
    images: {
      grain: '/images/millets/kodo-millet-grain.webp',
      plant: '/images/millets/kodo-millet-plant.webp',
      cooked: '/images/millets/kodo-millet-cooked.webp',
    },
    tagline: 'The antioxidant-rich grain used for centuries in Indian fasting rituals',
    description:
      'Kodo millet (Kodra/Varagu) is a hardy, drought-resistant grain native to India, cultivated for over 3000 years. It is one of the lowest-calorie millets at 309 calories per 100g and is exceptionally rich in antioxidant polyphenols. Kodo millet has deep cultural significance in Indian fasting traditions and is widely used during vrat (fasting) periods. It is a staple in tribal regions of central India and is gaining renewed popularity for its health benefits.',

    names: {
      english: 'Kodo Millet',
      hindi: 'कोदो (Kodo) / कोदरा (Kodra)',
      tamil: 'வரகு (Varagu)',
      telugu: 'అరికెలు (Arikelu)',
      kannada: 'ಹಾರಕ (Haraka)',
      malayalam: 'വരക് (Varaku)',
      marathi: 'कोद्रा (Kodra)',
      bengali: 'কোদো (Kodo)',
      gujarati: 'કોદરા (Kodra)',
      odia: 'କୋଦୋ (Kodo)',
      punjabi: 'ਕੋਦੋ (Kodo)',
      sanskrit: 'कोद्रव (Kodrava)',
    },

    nutrition: {
      calories: 309,
      protein_g: 8.3,
      fat_g: 1.4,
      carbohydrates_g: 65.9,
      fiber_g: 9.0,
      calcium_mg: 27,
      iron_mg: 0.5,
      zinc_mg: 0.7,
      phosphorus_mg: 188,
      magnesium_mg: 122,
      potassium_mg: 144,
      source: 'ICMR-NIN IFCT 2017',
      sourceDetail: 'Indian Food Composition Tables, National Institute of Nutrition, Hyderabad',
    },

    glycemicIndex: {
      value: 48,
      category: 'low',
      source: 'Gopalan et al., Nutritive Value of Indian Foods, NIN',
    },

    ayurveda: {
      rasa: ['Kashaya (astringent)', 'Madhura (sweet)'],
      guna: ['Laghu (light)', 'Ruksha (dry)'],
      virya: 'Sheeta (cool)',
      vipaka: 'Katu (pungent)',
      doshaEffect: {
        vata: 'increases',
        pitta: 'decreases',
        kapha: 'decreases',
      },
      therapeuticUses: [
        'Used traditionally in diabetic diets for blood sugar management',
        'Cooling effect beneficial during Pitta aggravation',
        'May support weight management due to low calorie content',
        'Traditionally recommended during fasting for its light quality',
      ],
      contraindications: [
        'May aggravate Vata — consume with ghee or warm preparations',
        'Must be properly cleaned and processed to avoid fungal contamination',
      ],
      classicalReference: 'Charaka Samhita',
    },

    history: {
      originRegion: 'Indian subcontinent',
      domesticationPeriod: 'Approximately 3000 years ago',
      archaeologicalEvidence:
        'Native to India with a long history of cultivation. Widely grown in tribal regions of central India for millennia. Limited formal archaeological documentation but extensive ethnobotanical records.',
      spreadPattern:
        'Domesticated in India and remained primarily cultivated in the Indian subcontinent, with some spread to Southeast Asia and West Africa.',
      culturalSignificance:
        'Kodo millet has deep roots in Indian fasting (vrat) traditions and is one of the grains permitted during Hindu fasting periods. It is a critical food security crop for tribal communities in Madhya Pradesh and Chhattisgarh.',
    },

    cultivation: {
      majorStates: ['Tamil Nadu', 'Madhya Pradesh', 'Chhattisgarh', 'Maharashtra', 'Karnataka'],
      globalRegions: ['South Asia (India)', 'Southeast Asia', 'West Africa'],
      growingSeason: 'Kharif (June-October)',
      waterRequirement: '400-500mm rainfall',
      soilType: 'Gravelly, laterite, and shallow soils; grows well in poor soils',
      harvestDays: '90-120 days',
    },

    cooking: {
      waterRatio: '1:2.5',
      soakingTime: '6-8 hours',
      cookingTime: '20-25 minutes',
      texture: 'Similar to rice but firmer',
      flavorProfile: 'Mild, earthy',
      bestSubstituteFor: 'Rice',
      tips: [
        'Soak for 6-8 hours or overnight for best results',
        'Rinse thoroughly after soaking to remove any bitterness',
        'Cook like rice after soaking — the grains separate well',
        'Works well in upma, pulao, and pongal preparations',
        'Ensure the grain is from a reputable source and properly processed',
      ],
    },

    healthBenefits: [
      {
        benefit: 'High antioxidant polyphenol content',
        description:
          'Kodo millet is exceptionally rich in polyphenolic compounds that have strong antioxidant properties, which may help protect cells from oxidative damage.',
        evidenceLevel: 'supported-by-research',
        source: 'Journal of Food Science and Technology',
      },
      {
        benefit: 'Rich in fiber for digestive health',
        description:
          'With 9.0g fiber per 100g, kodo millet may support healthy digestion, promote regular bowel movements, and may help maintain healthy cholesterol levels.',
        evidenceLevel: 'well-established',
        source: 'ICMR-NIN IFCT 2017',
      },
      {
        benefit: 'Low calorie content',
        description:
          'At 309 calories per 100g, kodo millet has the lowest calorie content among commonly consumed millets, making it suitable for weight management diets.',
        evidenceLevel: 'well-established',
        source: 'ICMR-NIN IFCT 2017',
      },
      {
        benefit: 'Traditionally used in diabetic diets',
        description:
          'With a low glycemic index of ~48, kodo millet has been traditionally recommended in Ayurvedic and folk medicine for managing blood sugar levels.',
        evidenceLevel: 'traditional-knowledge',
        source: 'Indian Journal of Traditional Knowledge',
      },
    ],

    sideEffects: [
      {
        condition: 'Kodua poisoning (fungal contamination)',
        description:
          'Must be properly cleaned as contaminated kodo millet can cause intoxication (kodua poisoning) due to fungal contamination by Aspergillus flavus. Symptoms include nausea, tremors, and drowsiness. Always purchase from reliable sources.',
        severity: 'consult-doctor',
      },
      {
        condition: 'Bitterness from improper processing',
        description:
          'May have a slight bitterness if not properly processed and cleaned. Thorough washing, soaking, and rinsing help eliminate any off-flavors.',
        severity: 'mild',
      },
    ],

    isGlutenFree: true,
    relatedRecipes: [
      'kodo-millet-rice',
      'varagu-pongal',
      'kodo-millet-upma',
      'varagu-pulao',
      'kodo-millet-khichdi',
    ],
    sources: [
      'icmr-nin-ifct-2017',
      'charaka-samhita',
      'gopalan-nutritive-value-indian-foods',
      'icar-small-millets-handbook',
    ],
  },

  // =============================================
  // BARNYARD MILLET
  // =============================================
  {
    slug: 'barnyard-millet',
    name: 'Barnyard Millet',
    commonName: 'Sanwa / Jhangora',
    scientificName: 'Echinochloa frumentacea',
    family: 'Poaceae',
    category: 'minor',
    grainType: 'husked',
    imageUrl: '',
    images: {
      grain: '/images/millets/barnyard-millet-grain.webp',
      plant: '/images/millets/barnyard-millet-plant.webp',
      cooked: '/images/millets/barnyard-millet-cooked.webp',
    },
    tagline: 'The fasting grain — lowest carbohydrate content and highest fiber among millets',
    description:
      'Barnyard millet (Sanwa/Jhangora) is the fastest growing millet, maturing in as few as 60 days. It stands out for having the highest fiber content (9.8g per 100g) and the lowest glycemic index (~44) among commonly available millets. It is widely used during Hindu fasting periods (vrat) in North India, where it is known as Sanwa or Jhangora. Its fluffy, rice-like texture and neutral flavor make it an easy substitute for rice.',

    names: {
      english: 'Barnyard Millet',
      hindi: 'सांवा (Sanwa) / झंगोरा (Jhangora)',
      tamil: 'குதிரைவாலி (Kuthiraivali)',
      telugu: 'ఊదలు (Udalu)',
      kannada: 'ಊದಲು (Oodalu)',
      malayalam: 'കുതിരവാലി (Kuthiravali)',
      marathi: 'भगर (Bhagar)',
      bengali: 'শ্যামাধান (Shyamadhan)',
      gujarati: 'મોરૈયો (Moraiyo)',
      odia: 'ଖିରା (Khira)',
      punjabi: 'ਸਾਂਵਾ (Sanwa)',
      sanskrit: 'श्यामाक (Shyamaka)',
    },

    nutrition: {
      calories: 307,
      protein_g: 6.2,
      fat_g: 2.2,
      carbohydrates_g: 65.5,
      fiber_g: 9.8,
      calcium_mg: 20,
      iron_mg: 5.0,
      zinc_mg: 3.0,
      phosphorus_mg: 280,
      magnesium_mg: 82,
      potassium_mg: 180,
      source: 'ICMR-NIN / published literature',
      sourceDetail: 'ICMR-NIN data supplemented with published research literature',
    },

    glycemicIndex: {
      value: 44,
      category: 'low',
      source: 'Published literature on millet glycemic indices',
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
        'Ideal for fasting due to light and easy-to-digest nature',
        'Cooling effect beneficial in summer and Pitta conditions',
        'May support digestive health due to very high fiber content',
        'Traditionally used for convalescent diets',
      ],
      contraindications: [
        'May cause gas if not soaked adequately before cooking',
        'Not recommended as sole grain for extended periods due to lower protein content',
      ],
      classicalReference: 'Bhavaprakasha Nighantu',
    },

    history: {
      originRegion: 'Tropical Asia (Indian subcontinent)',
      domesticationPeriod: 'Several thousand years ago (exact period uncertain)',
      archaeologicalEvidence:
        'Native to tropical Asia, cultivated in India for thousands of years in rain-fed areas. Japanese barnyard millet (Echinochloa esculenta) was domesticated separately in Japan.',
      spreadPattern:
        'Cultivated primarily in South Asia, with a separate domestication event in Japan. Remained largely a regional crop of India and Japan.',
      culturalSignificance:
        'Barnyard millet holds special cultural significance in North Indian fasting traditions. Known as Sanwa or Bhagar, it is one of the primary grains consumed during Navratri, Ekadashi, and other fasting occasions. In Uttarakhand, Jhangora kheer is a beloved traditional preparation.',
    },

    cultivation: {
      majorStates: ['Uttarakhand', 'Tamil Nadu', 'Madhya Pradesh', 'Chhattisgarh'],
      globalRegions: ['South Asia (India, Nepal)', 'Japan', 'Southeast Asia'],
      growingSeason: 'Kharif (June-September)',
      waterRequirement: '350-500mm rainfall',
      soilType: 'Grows in marginal, waterlogged, and even saline soils',
      harvestDays: '60-90 days (fastest growing millet)',
    },

    cooking: {
      waterRatio: '1:3',
      soakingTime: '2-4 hours',
      cookingTime: '15-20 minutes',
      texture: 'Fluffy, rice-like',
      flavorProfile: 'Mild, neutral',
      bestSubstituteFor: 'Rice (especially during fasting)',
      tips: [
        'Soak for 2-4 hours before cooking for best texture',
        'Cook like rice with slightly more water',
        'Popular during fasting — make Samo khichdi or Moraiyo pulao',
        'In Uttarakhand, make Jhangora kheer with milk, sugar, and cardamom',
        'Dry roast briefly before cooking for a nuttier flavor',
      ],
    },

    healthBenefits: [
      {
        benefit: 'Highest fiber among millets',
        description:
          'Barnyard millet contains 9.8g fiber per 100g, the highest among commonly consumed millets. This exceptional fiber content may support digestive health, promote satiety, and aid in cholesterol management.',
        evidenceLevel: 'well-established',
        source: 'ICMR-NIN / published literature',
      },
      {
        benefit: 'Lowest glycemic index among millets',
        description:
          'With a GI of approximately 44, barnyard millet has the lowest glycemic index among commonly available millets, making it an excellent choice for blood sugar management.',
        evidenceLevel: 'supported-by-research',
        source: 'International Journal of Food Sciences and Nutrition',
      },
      {
        benefit: 'Traditional fasting grain',
        description:
          'Used traditionally during Hindu fasting periods for its light, easily digestible nature. It provides sustained energy without heaviness during fasting.',
        evidenceLevel: 'traditional-knowledge',
      },
      {
        benefit: 'Good source of iron',
        description:
          'Contains 5.0mg iron per 100g, making it a valuable source of dietary iron which may help address anemia, particularly important in vegetarian diets.',
        evidenceLevel: 'well-established',
        source: 'ICMR-NIN / published literature',
      },
    ],

    sideEffects: [
      {
        condition: 'Gas without adequate soaking',
        description:
          'May cause gas and bloating if not soaked adequately before cooking. Soaking for 2-4 hours helps improve digestibility.',
        severity: 'mild',
      },
      {
        condition: 'Phytate content',
        description:
          'Contains phytates (antinutrients) that may reduce mineral absorption. Soaking and cooking significantly reduce phytate levels.',
        severity: 'mild',
      },
    ],

    isGlutenFree: true,
    relatedRecipes: [
      'samo-khichdi',
      'jhangora-kheer',
      'barnyard-millet-pulao',
      'moraiyo-upma',
      'barnyard-millet-dosa',
    ],
    sources: [
      'icmr-nin-ifct-2017',
      'bhavaprakasha-nighantu',
      'gopalan-nutritive-value-indian-foods',
      'icar-small-millets-handbook',
    ],
  },

  // =============================================
  // PROSO MILLET
  // =============================================
  {
    slug: 'proso-millet',
    name: 'Proso Millet',
    commonName: 'Chena / Bari',
    scientificName: 'Panicum miliaceum',
    family: 'Poaceae',
    category: 'minor',
    grainType: 'husked',
    imageUrl: '',
    images: {
      grain: '/images/millets/proso-millet-grain.webp',
      plant: '/images/millets/proso-millet-plant.webp',
      cooked: '/images/millets/proso-millet-cooked.webp',
    },
    tagline: 'The oldest domesticated millet — high in protein with the shortest growing season',
    description:
      'Proso millet (Chena/Bari) holds the distinction of being THE oldest domesticated millet in human history, with archaeological evidence from Cishan, China dating to approximately 8000 BCE. It has the highest protein content among minor millets at 12.5g per 100g and the shortest growing season at just 60-75 days. This is the "millet" of European history, having been a staple across Central Asia and Europe for millennia before the widespread adoption of wheat and rice.',

    names: {
      english: 'Proso Millet',
      hindi: 'चेना (Chena) / बरि (Bari)',
      tamil: 'பனிவரகு (Panivaragu)',
      telugu: 'వరిగెలు (Varigelu)',
      kannada: 'ಬರಗು (Baragu)',
      malayalam: 'പനിവരക് (Panivaraku)',
      marathi: 'वरी (Vari)',
      bengali: 'চিনা (China)',
      gujarati: 'ચેનો (Cheno)',
      odia: 'ବଗୁ (Bagu)',
      punjabi: 'ਚੀਨਾ (China)',
      sanskrit: 'चीनक (Chinaka)',
    },

    nutrition: {
      calories: 341,
      protein_g: 12.5,
      fat_g: 1.1,
      carbohydrates_g: 70.4,
      fiber_g: 5.2,
      calcium_mg: 14,
      iron_mg: 0.8,
      zinc_mg: 1.4,
      phosphorus_mg: 206,
      magnesium_mg: 153,
      potassium_mg: 113,
      source: 'ICMR-NIN IFCT 2017',
      sourceDetail: 'Indian Food Composition Tables, National Institute of Nutrition, Hyderabad',
    },

    glycemicIndex: {
      value: 56,
      category: 'low',
      source: 'Gopalan et al., Nutritive Value of Indian Foods, NIN',
    },

    ayurveda: {
      rasa: ['Madhura (sweet)', 'Kashaya (astringent)'],
      guna: ['Laghu (light)', 'Ruksha (dry)'],
      virya: 'Ushna (warm)',
      vipaka: 'Katu (pungent)',
      doshaEffect: {
        vata: 'neutral',
        pitta: 'neutral',
        kapha: 'decreases',
      },
      therapeuticUses: [
        'May support muscle building due to high protein content',
        'Warming quality beneficial in cold seasons',
        'Light quality is said to support easy digestion',
        'Traditionally used for strength and vitality',
      ],
      contraindications: [
        'Warming nature may not suit people with excess heat conditions',
        'Dry quality — balance with ghee or moist preparations',
      ],
      classicalReference: 'Sushruta Samhita',
    },

    history: {
      originRegion: 'Northern China (Cishan archaeological site)',
      domesticationPeriod: 'Approximately 10000 years ago (~8000 BCE) — the oldest domesticated millet',
      archaeologicalEvidence:
        'Archaeological evidence from Cishan, China dates to approximately 8000 BCE, making proso millet the oldest domesticated millet in human history.',
      spreadPattern:
        'Spread westward from China through Central Asia to Europe, becoming a staple grain of European and Central Asian diets before wheat and rice became dominant. This is the "millet" referenced in European historical texts.',
      culturalSignificance:
        'Proso millet is historically one of the most important grains in human civilization. It was a staple across the Roman Empire, medieval Europe, and Central Asia. In India, it remains important in tribal and rain-fed farming regions.',
    },

    cultivation: {
      majorStates: ['Madhya Pradesh', 'Chhattisgarh', 'Tamil Nadu', 'Karnataka', 'Uttarakhand'],
      globalRegions: [
        'China',
        'Russia',
        'Central Asia',
        'Europe (historical)',
        'North America (birdseed crop)',
      ],
      growingSeason: 'Kharif (June-September)',
      waterRequirement: '250-400mm rainfall',
      soilType: 'Light, well-drained soils; tolerates poor soils',
      harvestDays: '60-75 days (shortest among millets)',
    },

    cooking: {
      waterRatio: '1:3',
      soakingTime: '20-30 minutes',
      cookingTime: '15-20 minutes',
      texture: 'Fluffy, couscous-like',
      flavorProfile: 'Mild, slightly sweet',
      bestSubstituteFor: 'Couscous, rice',
      tips: [
        'Soak for 20-30 minutes before cooking',
        'Cook like rice — the grains turn fluffy and separate',
        'Excellent in pulao, upma, and salad preparations',
        'Its couscous-like texture makes it great for cold salads',
        'Dry roast before cooking for a nuttier, more aromatic flavor',
        'Can be ground into flour for rotis and pancakes',
      ],
    },

    healthBenefits: [
      {
        benefit: 'Highest protein among minor millets',
        description:
          'Proso millet contains 12.5g protein per 100g, the highest among minor millets. This makes it an excellent plant-based protein source, especially valuable for vegetarian and vegan diets.',
        evidenceLevel: 'well-established',
        source: 'ICMR-NIN IFCT 2017',
      },
      {
        benefit: 'Lecithin may support liver health',
        description:
          'Proso millet contains lecithin, a phospholipid that may support liver function and may help in fat metabolism. Preliminary studies suggest this may support overall liver health.',
        evidenceLevel: 'preliminary-evidence',
        source: 'Journal of Cereal Science',
      },
      {
        benefit: 'Climate-efficient crop',
        description:
          'With the shortest growing season among millets (60-75 days) and very low water requirements (250-400mm), proso millet is one of the most climate-efficient grains.',
        evidenceLevel: 'well-established',
        source: 'ICAR Crop Science Division',
      },
      {
        benefit: 'Rich in B vitamins especially niacin',
        description:
          'Proso millet is a good source of B-complex vitamins, particularly niacin (vitamin B3), which is important for energy metabolism, nervous system function, and skin health.',
        evidenceLevel: 'supported-by-research',
        source: 'Journal of Food Science and Technology',
      },
    ],

    sideEffects: [
      {
        condition: 'Goitrogen content',
        description:
          'Contains goitrogens that may interfere with thyroid function at high consumption levels. People with thyroid conditions should consume in moderation and consult their doctor.',
        severity: 'consult-doctor',
      },
      {
        condition: 'Antinutrient content',
        description:
          'Contains antinutrients like phytates that may reduce mineral absorption. Soaking, sprouting, and cooking help reduce antinutrient levels.',
        severity: 'mild',
      },
    ],

    isGlutenFree: true,
    relatedRecipes: [
      'proso-millet-pulao',
      'chena-upma',
      'proso-millet-salad',
      'panivaragu-pongal',
      'proso-millet-khichdi',
    ],
    sources: [
      'icmr-nin-ifct-2017',
      'sushruta-samhita',
      'gopalan-nutritive-value-indian-foods',
      'cishan-archaeological-studies',
      'icar-small-millets-handbook',
    ],
  },

  // =============================================
  // BROWNTOP MILLET
  // =============================================
  {
    slug: 'browntop-millet',
    name: 'Browntop Millet',
    commonName: 'Chhoti Kangni / Korale',
    scientificName: 'Urochloa ramosa (syn. Brachiaria ramosa)',
    family: 'Poaceae',
    category: 'minor',
    grainType: 'husked',
    imageUrl: '',
    images: {
      grain: '/images/millets/browntop-millet-grain.webp',
      plant: '/images/millets/browntop-millet-plant.webp',
      cooked: '/images/millets/browntop-millet-cooked.webp',
    },
    tagline: 'The fiber champion — the rarest commercially grown millet, now making a comeback',
    description:
      'Browntop millet (Korale) is the rarest of commercially grown millets, boasting the highest fiber content of any millet at 12.5g per 100g. Once nearly extinct as a cultivated crop, it is now making a remarkable comeback thanks to revival efforts led by farmers in Karnataka. Grown primarily in the Tumkur and Chitradurga districts of Karnataka, browntop millet has a very low glycemic index (~47) and is gaining attention for its exceptional gut health benefits.',

    names: {
      english: 'Browntop Millet',
      hindi: 'छोटी कंगनी (Chhoti Kangni)',
      tamil: 'பனிப்புல் (Panippul)',
      telugu: 'అండ కొర్రలు (Anda Korralu)',
      kannada: 'ಕೊರಲೆ (Korale)',
      malayalam: 'തൊട്ടക്കുറ (Thottakura)',
      marathi: 'हरिक (Harik)',
      bengali: 'No common name',
      gujarati: 'No common name',
      odia: 'No common name',
      punjabi: 'No common name',
      sanskrit: 'No common name',
    },

    nutrition: {
      calories: 331,
      protein_g: 11.5,
      fat_g: 1.6,
      carbohydrates_g: 69.0,
      fiber_g: 12.5,
      calcium_mg: 20,
      iron_mg: 0.65,
      zinc_mg: 0.5,
      phosphorus_mg: 150,
      magnesium_mg: 0,
      potassium_mg: 0,
      source: 'Published literature, limited data',
      sourceDetail:
        'Limited ICMR data available. Values derived from published research literature. Magnesium and potassium data not available.',
    },

    glycemicIndex: {
      value: 47,
      category: 'low',
      source: 'Published literature on millet glycemic indices',
    },

    ayurveda: {
      rasa: ['Kashaya (astringent)', 'Madhura (sweet)'],
      guna: ['Laghu (light)', 'Ruksha (dry)'],
      virya: 'Sheeta (cool)',
      vipaka: 'Katu (pungent)',
      doshaEffect: {
        vata: 'increases',
        pitta: 'neutral',
        kapha: 'decreases',
      },
      therapeuticUses: [
        'Exceptional for gut health and digestive regularity due to very high fiber',
        'Cooling nature suitable for Pitta conditions',
        'Light quality is said to support easy digestion and detoxification',
        'May support healthy weight management',
      ],
      contraindications: [
        'Very high fiber content may cause digestive discomfort if introduced too quickly',
        'May aggravate Vata due to dry and light qualities',
      ],
      classicalReference: 'Limited Ayurvedic references - classified under Kshudra Dhanya',
    },

    history: {
      originRegion: 'Southeast Asia and Indian subcontinent',
      domesticationPeriod: 'Ancient (exact period undocumented)',
      archaeologicalEvidence:
        'Limited archaeological documentation. Known to have been grown traditionally in hilly regions of Karnataka for centuries. Was nearly extinct as a cultivated crop before recent revival efforts.',
      spreadPattern:
        'Native to Southeast Asia and India. Primarily confined to the hilly regions of Karnataka, with limited spread to neighboring states.',
      culturalSignificance:
        'Browntop millet represents a story of crop revival. Nearly lost to agricultural modernization, it has been brought back by dedicated farmers in Karnataka. It symbolizes the growing movement to revive forgotten indigenous grains and preserve agricultural biodiversity.',
    },

    cultivation: {
      majorStates: ['Karnataka (primarily Tumkur, Chitradurga districts)', 'Andhra Pradesh (limited)'],
      globalRegions: ['South Asia (primarily India)', 'Southeast Asia'],
      growingSeason: 'Kharif (June-October)',
      waterRequirement: '300-400mm rainfall',
      soilType: 'Red gravelly and laterite soils; grows in poor, hilly terrains',
      harvestDays: '90-100 days',
    },

    cooking: {
      waterRatio: '1:2.5',
      soakingTime: '6-8 hours',
      cookingTime: '20-25 minutes',
      texture: 'Rice-like, firm',
      flavorProfile: 'Mild, slightly nutty',
      bestSubstituteFor: 'Rice',
      tips: [
        'Soak for 6-8 hours or overnight for best results',
        'Cook like rice after thorough soaking',
        'Its firm texture holds up well in pulao and biryani-style preparations',
        'Can be ground into flour for dosas and rotis',
        'Start with small portions and gradually increase if new to this millet',
      ],
    },

    healthBenefits: [
      {
        benefit: 'Highest fiber content among all millets',
        description:
          'Browntop millet contains 12.5g fiber per 100g, the highest among all millets. This extraordinary fiber content may support digestive health, promote satiety, and aid in maintaining healthy cholesterol and blood sugar levels.',
        evidenceLevel: 'well-established',
        source: 'Published literature on millet nutrition',
      },
      {
        benefit: 'Very low glycemic index',
        description:
          'With a GI of approximately 47, browntop millet releases glucose very slowly, making it an excellent grain choice for people managing diabetes or seeking stable energy levels.',
        evidenceLevel: 'supported-by-research',
        source: 'Published literature on millet glycemic indices',
      },
      {
        benefit: 'Rich in phytochemicals',
        description:
          'Contains various phytochemicals including phenolic compounds that may have antioxidant, anti-inflammatory, and other health-promoting properties. Research is ongoing.',
        evidenceLevel: 'preliminary-evidence',
        source: 'Journal of Food Science and Technology',
      },
      {
        benefit: 'May support gut health',
        description:
          'The very high fiber content acts as a prebiotic, potentially supporting the growth of beneficial gut bacteria and promoting overall gut health and digestive regularity.',
        evidenceLevel: 'supported-by-research',
        source: 'Nutrition Research Reviews',
      },
    ],

    sideEffects: [
      {
        condition: 'Limited commercial availability',
        description:
          'Browntop millet is the rarest commercially grown millet and may be difficult to source. Availability is primarily limited to Karnataka and specialty stores.',
        severity: 'mild',
      },
      {
        condition: 'Digestive discomfort from high fiber',
        description:
          'The very high fiber content (12.5g per 100g) may cause digestive discomfort, bloating, or gas if introduced too quickly into the diet. Gradual introduction is strongly recommended.',
        severity: 'moderate',
      },
    ],

    isGlutenFree: true,
    relatedRecipes: [
      'browntop-millet-rice',
      'korale-pulao',
      'browntop-millet-upma',
      'browntop-millet-dosa',
    ],
    sources: [
      'published-millet-nutrition-literature',
      'icar-small-millets-handbook',
      'karnataka-agriculture-department',
      'gopalan-nutritive-value-indian-foods',
    ],
  },
];
