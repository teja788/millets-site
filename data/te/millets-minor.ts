import type { Millet } from '@/lib/types';

export const minorMillets: Millet[] = [
  // =============================================
  // KODO MILLET (అరికెలు)
  // =============================================
  {
    slug: 'kodo-millet',
    name: 'అరికెలు',
    commonName: 'అరికెలు',
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
    tagline: 'యాంటీఆక్సిడెంట్లు పుష్కలంగా ఉన్న ధాన్యం — శతాబ్దాలుగా వ్రత సంప్రదాయాల్లో వాడుతున్నారు',
    description:
      'అరికెలు (కోడో / వరగు) అనేది భారతదేశంలో 3000 సంవత్సరాలకు పైగా సాగు చేస్తున్న కరువును తట్టుకునే గట్టి ధాన్యం. ఇది అన్ని చిరుధాన్యాల్లో అతి తక్కువ కేలరీలు ఉన్నది — 100 గ్రాముల్లో కేవలం 309 కేలరీలు. యాంటీఆక్సిడెంట్ పాలీఫీనాల్స్ చాలా ఎక్కువగా ఉంటాయి. భారతీయ వ్రత సంప్రదాయాల్లో అరికెలుకు చాలా ప్రత్యేక స్థానం ఉంది — ఉపవాస సమయాల్లో ఎక్కువగా వాడతారు. మధ్య భారతదేశంలోని గిరిజన ప్రాంతాల్లో ఇది ప్రధాన ఆహారం. ఇప్పుడు దీని ఆరోగ్య ప్రయోజనాల వల్ల మళ్ళీ బాగా ప్రాచుర్యం పొందుతోంది.',

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
        'షుగర్ వ్యాధి ఉన్నవాళ్ళ ఆహారంలో పురాతన కాలం నుండి వాడుతున్నారు — బ్లడ్ షుగర్ నియంత్రణకు బాగా పని చేస్తుంది',
        'చల్లని గుణం ఉంటుంది — పిత్తం ఎక్కువైనప్పుడు చాలా మంచిది',
        'తక్కువ కేలరీలు ఉండటం వల్ల బరువు తగ్గాలనుకునే వాళ్ళకు బాగా సరిపోతుంది',
        'తేలికగా అరిగే గుణం ఉంటుంది కాబట్టి ఉపవాసాల్లో తినడానికి సిఫారసు చేస్తారు',
      ],
      contraindications: [
        'వాతం పెరగవచ్చు — నెయ్యితో లేదా వేడి పదార్థాలతో కలిపి తినాలి',
        'సరిగ్గా శుభ్రం చేయకపోతే పూతి (ఫంగస్) సోకే అవకాశం ఉంది — బాగా కడిగి వాడాలి',
      ],
      classicalReference: 'Charaka Samhita',
    },

    history: {
      originRegion: 'Indian subcontinent',
      domesticationPeriod: 'Approximately 3000 years ago',
      archaeologicalEvidence:
        'భారతదేశానికి స్వంతమైన ధాన్యం — వేల సంవత్సరాలుగా ఇక్కడే సాగు చేస్తున్నారు. మధ్య భారతదేశంలోని గిరిజన ప్రాంతాల్లో వేల ఏళ్ళుగా పండిస్తున్నారు. పెద్దగా పురావస్తు ఆధారాలు దొరకలేదు గానీ, జానపద మరియు వృక్షశాస్త్ర సంబంధ రికార్డులు బోలెడు ఉన్నాయి.',
      spreadPattern:
        'భారతదేశంలోనే మొదట సాగు చేయడం మొదలుపెట్టారు. ఎక్కువగా భారత ఉపఖండంలోనే ఉంది, కొంచెం ఆగ్నేయ ఆసియా మరియు పశ్చిమ ఆఫ్రికాకు కూడా వ్యాపించింది.',
      culturalSignificance:
        'భారతీయ వ్రత (ఉపవాస) సంప్రదాయాల్లో అరికెలుకు చాలా లోతైన సంబంధం ఉంది. హిందూ ఉపవాస సమయాల్లో తినడానికి అనుమతించిన ధాన్యాల్లో ఇది ఒకటి. మధ్యప్రదేశ్ మరియు ఛత్తీస్‌గఢ్‌లోని గిరిజన సమాజాలకు ఇది చాలా ముఖ్యమైన ఆహార భద్రత పంట.',
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
      texture: 'అన్నం లాగే ఉంటుంది కానీ కొంచెం గట్టిగా',
      flavorProfile: 'తేలికైన మట్టి వాసన, మైల్డ్ రుచి',
      bestSubstituteFor: 'Rice',
      tips: [
        '6-8 గంటలు లేదా రాత్రంతా నానబెట్టండి — అప్పుడు బాగా వస్తుంది',
        'నానబెట్టిన తర్వాత బాగా కడగాలి — చేదు రుచి పోతుంది',
        'నానబెట్టిన తర్వాత అన్నం వండినట్లే వండుకోవచ్చు — గింజలు బాగా విడిపోతాయి',
        'ఉప్మా, పులావ్, పొంగల్ చేయడానికి చాలా బాగుంటుంది',
        'మంచి సోర్స్ నుండి కొనాలి — సరిగ్గా ప్రాసెస్ చేసిన గింజలు వాడాలి',
      ],
    },

    healthBenefits: [
      {
        benefit: 'యాంటీఆక్సిడెంట్ పాలీఫీనాల్స్ భారీగా ఉంటాయి',
        description:
          'అరికెలులో పాలీఫీనాలిక్ సమ్మేళనాలు చాలా ఎక్కువ. ఇవి బలమైన యాంటీఆక్సిడెంట్ గుణాలు కలిగి ఉంటాయి — శరీరంలోని కణాలను ఆక్సిడేటివ్ నష్టం నుండి కాపాడతాయి.',
        evidenceLevel: 'supported-by-research',
        source: 'Journal of Food Science and Technology',
      },
      {
        benefit: 'ఫైబర్ ఎక్కువ — జీర్ణ ఆరోగ్యానికి మంచిది',
        description:
          '100 గ్రాముల్లో 9.0 గ్రాముల ఫైబర్ ఉంటుంది. దీని వల్ల అరుగుదల బాగా జరుగుతుంది, మలబద్ధకం రాదు, కొలెస్ట్రాల్ కూడా అదుపులో ఉంటుంది.',
        evidenceLevel: 'well-established',
        source: 'ICMR-NIN IFCT 2017',
      },
      {
        benefit: 'తక్కువ కేలరీలు',
        description:
          '100 గ్రాముల్లో కేవలం 309 కేలరీలు — సాధారణంగా తినే చిరుధాన్యాల్లో ఇదే అతి తక్కువ. బరువు తగ్గాలనుకునే వాళ్ళకు ఇది చాలా మంచి ఎంపిక.',
        evidenceLevel: 'well-established',
        source: 'ICMR-NIN IFCT 2017',
      },
      {
        benefit: 'షుగర్ వ్యాధిలో సంప్రదాయంగా వాడతారు',
        description:
          'గ్లైసెమిక్ ఇండెక్స్ సుమారు 48 — చాలా తక్కువ. ఆయుర్వేదంలో మరియు జానపద వైద్యంలో బ్లడ్ షుగర్ నియంత్రణకు ఎప్పటి నుండో సిఫారసు చేస్తున్నారు.',
        evidenceLevel: 'traditional-knowledge',
        source: 'Indian Journal of Traditional Knowledge',
      },
    ],

    sideEffects: [
      {
        condition: 'కోడుయా విషం (ఫంగస్ వల్ల కలుషితం)',
        description:
          'సరిగ్గా శుభ్రం చేయకపోతే అరికెలులో Aspergillus flavus అనే ఫంగస్ వల్ల విషం ఏర్పడవచ్చు (కోడుయా పాయిజనింగ్). వాంతులు, వణుకు, మత్తు రావచ్చు. ఎప్పుడూ నమ్మకమైన దుకాణం నుండి కొనాలి.',
        severity: 'consult-doctor',
      },
      {
        condition: 'సరిగ్గా ప్రాసెస్ చేయకపోతే చేదు రుచి',
        description:
          'సరిగ్గా ప్రాసెస్ చేయకపోతే కొంచెం చేదుగా ఉంటుంది. బాగా కడిగి, నానబెట్టి, మళ్ళీ కడిగితే ఆ రుచి పూర్తిగా పోతుంది.',
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
  // BARNYARD MILLET (ఊదలు)
  // =============================================
  {
    slug: 'barnyard-millet',
    name: 'ఊదలు',
    commonName: 'ఊదలు',
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
    tagline: 'ఉపవాస ధాన్యం — అన్ని చిరుధాన్యాల్లో అతి తక్కువ కార్బ్స్ మరియు అత్యధిక ఫైబర్',
    description:
      'ఊదలు (సంవా / జంగోరా) అన్ని చిరుధాన్యాల్లో అతి వేగంగా పెరిగే ధాన్యం — కేవలం 60 రోజుల్లో పంట వస్తుంది. ఇందులో అత్యధిక ఫైబర్ (100 గ్రాముల్లో 9.8 గ్రాములు) మరియు అతి తక్కువ గ్లైసెమిక్ ఇండెక్స్ (సుమారు 44) ఉంటాయి. ఉత్తర భారతదేశంలో హిందూ ఉపవాస కాలాల్లో ఇది చాలా ఎక్కువగా వాడతారు — సంవా లేదా జంగోరా పేరుతో పిలుస్తారు. అన్నం లాగా పొంగే టెక్చర్ మరియు తేలికైన రుచి వల్ల అన్నానికి బదులుగా వాడటం చాలా సులభం.',

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
        'తేలికగా అరుగుతుంది కాబట్టి ఉపవాసాలకు చాలా బాగుంటుంది',
        'చల్లని గుణం ఉంది — వేసవిలో మరియు పిత్తం ఎక్కువైనప్పుడు తినడం మంచిది',
        'ఫైబర్ చాలా ఎక్కువగా ఉండటం వల్ల అరుగుదల మంచిగా జరుగుతుంది',
        'జబ్బు నుండి కోలుకుంటున్నప్పుడు తినే ఆహారంలో సంప్రదాయంగా వాడతారు',
      ],
      contraindications: [
        'వండే ముందు సరిగ్గా నానబెట్టకపోతే గ్యాస్ రావచ్చు',
        'ప్రోటీన్ కొంచెం తక్కువ — చాలా కాలం ఇదే ధాన్యంగా తినడం మంచిది కాదు',
      ],
      classicalReference: 'Bhavaprakasha Nighantu',
    },

    history: {
      originRegion: 'Tropical Asia (Indian subcontinent)',
      domesticationPeriod: 'Several thousand years ago (exact period uncertain)',
      archaeologicalEvidence:
        'ఉష్ణమండల ఆసియాకు చెందిన ధాన్యం. భారతదేశంలో వేల సంవత్సరాలుగా వర్షాధార ప్రాంతాల్లో పండిస్తున్నారు. జపాన్‌లో బార్న్‌యార్డ్ మిల్లెట్ (Echinochloa esculenta) విడిగా మచ్చిక చేయబడింది.',
      spreadPattern:
        'ప్రధానంగా దక్షిణ ఆసియాలో సాగు చేస్తారు. జపాన్‌లో విడిగా మచ్చిక అయింది. ఎక్కువగా భారతదేశం మరియు జపాన్‌కు పరిమితమైన పంట.',
      culturalSignificance:
        'ఉత్తర భారత ఉపవాస సంప్రదాయాల్లో ఊదలుకు చాలా ప్రత్యేక స్థానం ఉంది. సంవా లేదా భగర్ పేరుతో, నవరాత్రులు, ఏకాదశి మరియు ఇతర ఉపవాస సందర్భాల్లో ఇది ప్రధానంగా తినే ధాన్యాల్లో ఒకటి. ఉత్తరాఖండ్‌లో జంగోరా ఖీర్ అనేది చాలా ఇష్టమైన సంప్రదాయ వంటకం.',
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
      texture: 'పొంగుతుంది, అన్నం లాగా ఉంటుంది',
      flavorProfile: 'తేలికైన, సున్నితమైన రుచి',
      bestSubstituteFor: 'Rice (especially during fasting)',
      tips: [
        'వండే ముందు 2-4 గంటలు నానబెట్టండి — టెక్చర్ బాగా వస్తుంది',
        'అన్నం వండినట్లే కొంచెం ఎక్కువ నీళ్ళు వేసి వండుకోండి',
        'ఉపవాసాల్లో చాలా బాగుంటుంది — సమో ఖిచ్డీ లేదా మొరైయో పులావ్ చేయవచ్చు',
        'ఉత్తరాఖండ్‌లో జంగోరా ఖీర్ పేరుతో పాలు, చక్కెర, ఏలకులు వేసి చేస్తారు — అద్భుతంగా ఉంటుంది',
        'వండే ముందు కొంచెం పొడిగా వేయించి వండితే నట్టీ ఫ్లేవర్ వస్తుంది',
      ],
    },

    healthBenefits: [
      {
        benefit: 'అన్ని చిరుధాన్యాల్లో అత్యధిక ఫైబర్',
        description:
          '100 గ్రాముల్లో 9.8 గ్రాముల ఫైబర్ — సాధారణంగా దొరికే చిరుధాన్యాల్లో ఇదే అత్యధికం. ఈ అసాధారణ ఫైబర్ వల్ల అరుగుదల బాగా జరుగుతుంది, కడుపు నిండుగా ఉంటుంది, కొలెస్ట్రాల్ కూడా తగ్గుతుంది.',
        evidenceLevel: 'well-established',
        source: 'ICMR-NIN / published literature',
      },
      {
        benefit: 'అన్ని చిరుధాన్యాల్లో అతి తక్కువ గ్లైసెమిక్ ఇండెక్స్',
        description:
          'GI సుమారు 44 — సాధారణంగా దొరికే చిరుధాన్యాల్లో ఇదే అతి తక్కువ. బ్లడ్ షుగర్ అదుపులో ఉంచాలంటే ఇది చాలా మంచి ఎంపిక.',
        evidenceLevel: 'supported-by-research',
        source: 'International Journal of Food Sciences and Nutrition',
      },
      {
        benefit: 'సంప్రదాయ ఉపవాస ధాన్యం',
        description:
          'హిందూ ఉపవాస సమయాల్లో తేలికగా అరిగే మరియు సున్నితమైన గుణం వల్ల సంప్రదాయంగా వాడతారు. ఉపవాసంలో బరువు లేకుండా నిలకడగా శక్తినిస్తుంది.',
        evidenceLevel: 'traditional-knowledge',
      },
      {
        benefit: 'ఇనుము (ఐరన్) మంచిగా ఉంటుంది',
        description:
          '100 గ్రాముల్లో 5.0 mg ఐరన్ ఉంటుంది. రక్తహీనత రాకుండా చాలా మంచిది — ముఖ్యంగా శాకాహారుల్లో ఐరన్ కొరత రాకుండా చూడటానికి బాగా పని చేస్తుంది.',
        evidenceLevel: 'well-established',
        source: 'ICMR-NIN / published literature',
      },
    ],

    sideEffects: [
      {
        condition: 'సరిగ్గా నానబెట్టకపోతే గ్యాస్ వస్తుంది',
        description:
          'వండే ముందు సరిగ్గా నానబెట్టకపోతే గ్యాస్ మరియు ఉబ్బరం వస్తుంది. 2-4 గంటలు నానబెట్టితే అరుగుదల బాగా జరుగుతుంది.',
        severity: 'mild',
      },
      {
        condition: 'ఫైటేట్ (యాంటీన్యూట్రియెంట్) ఉంటుంది',
        description:
          'ఫైటేట్లు (యాంటీన్యూట్రియెంట్లు) ఉంటాయి — ఇవి ఖనిజాల శోషణను తగ్గించవచ్చు. నానబెట్టడం మరియు వండడం వల్ల ఫైటేట్ స్థాయిలు బాగా తగ్గుతాయి.',
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
  // PROSO MILLET (వరిగెలు)
  // =============================================
  {
    slug: 'proso-millet',
    name: 'వరిగెలు',
    commonName: 'వరిగెలు',
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
    tagline: 'అతి పురాతన మచ్చిక ధాన్యం — ఎక్కువ ప్రోటీన్, అతి తక్కువ పంట కాలం',
    description:
      'వరిగెలు (చేనా / బరి) మానవ చరిత్రలో అతి పురాతనంగా మచ్చిక చేయబడిన చిరుధాన్యం — చైనాలోని సిషన్ పురావస్తు ప్రదేశంలో సుమారు 8000 BCE నాటి ఆధారాలు దొరికాయి. చిన్న చిరుధాన్యాల్లో ఇందులో అత్యధిక ప్రోటీన్ ఉంటుంది — 100 గ్రాముల్లో 12.5 గ్రాములు. పంట కాలం కూడా అతి తక్కువ — కేవలం 60-75 రోజులు. యూరోపియన్ చరిత్రలో "మిల్లెట్" అంటే ఇదే — గోధుమ మరియు బియ్యం రాకముందు మధ్య ఆసియా మరియు యూరప్ అంతటా ఇది ప్రధాన ఆహారంగా ఉండేది.',

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
        'ప్రోటీన్ ఎక్కువగా ఉంటుంది కాబట్టి కండరాల బలానికి మంచిది',
        'వేడి గుణం ఉంటుంది — చలికాలంలో తినడం చాలా మంచిది',
        'తేలికగా అరుగుతుంది — జీర్ణక్రియకు సహాయం చేస్తుంది',
        'బలం మరియు జీవశక్తి కోసం సంప్రదాయంగా వాడేవారు',
      ],
      contraindications: [
        'వేడి గుణం ఉంటుంది — శరీరంలో ఎక్కువ వేడి ఉన్నవాళ్ళకు సరిపడకపోవచ్చు',
        'పొడి గుణం ఉంటుంది — నెయ్యి లేదా తేమ ఉన్న వంటకాలతో బ్యాలన్స్ చేయాలి',
      ],
      classicalReference: 'Sushruta Samhita',
    },

    history: {
      originRegion: 'Northern China (Cishan archaeological site)',
      domesticationPeriod: 'Approximately 10000 years ago (~8000 BCE) — the oldest domesticated millet',
      archaeologicalEvidence:
        'చైనాలోని సిషన్ పురావస్తు ప్రదేశంలో సుమారు 8000 BCE నాటి ఆధారాలు దొరికాయి — మానవ చరిత్రలో అతి పురాతనంగా మచ్చిక చేయబడిన చిరుధాన్యం ఇదే.',
      spreadPattern:
        'చైనా నుండి మధ్య ఆసియా మీదుగా యూరప్ వరకు వ్యాపించింది. గోధుమ మరియు బియ్యం ప్రధానం కాకముందు యూరోపియన్ మరియు మధ్య ఆసియా ఆహారాల్లో ఇది ప్రధాన ధాన్యంగా ఉండేది. యూరోపియన్ చరిత్ర పుస్తకాల్లో "మిల్లెట్" అంటే ఇదే.',
      culturalSignificance:
        'మానవ నాగరికత చరిత్రలో వరిగెలు అతి ముఖ్యమైన ధాన్యాల్లో ఒకటి. రోమన్ సామ్రాజ్యం, మధ్యయుగ యూరప్, మరియు మధ్య ఆసియాలో ఇది ప్రధాన ఆహారంగా ఉండేది. భారతదేశంలో గిరిజన మరియు వర్షాధార వ్యవసాయ ప్రాంతాల్లో ఇప్పటికీ ముఖ్యమైన ధాన్యం.',
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
      texture: 'పొంగుతుంది, కస్కస్ లాగా ఉంటుంది',
      flavorProfile: 'తేలికైన, కొంచెం తీపి రుచి',
      bestSubstituteFor: 'Couscous, rice',
      tips: [
        'వండే ముందు 20-30 నిమిషాలు నానబెట్టండి',
        'అన్నం వండినట్లే వండుకోండి — గింజలు పొంగి విడిపోతాయి',
        'పులావ్, ఉప్మా, సలాడ్‌లలో చాలా బాగుంటుంది',
        'కస్కస్ లాంటి టెక్చర్ వల్ల చల్లని సలాడ్‌లకు అద్భుతంగా సరిపోతుంది',
        'వండే ముందు పొడిగా వేయిస్తే మరింత సువాసన మరియు నట్టీ రుచి వస్తుంది',
        'పిండిగా చేసి రోటీలు, దోసెలు కూడా చేయవచ్చు',
      ],
    },

    healthBenefits: [
      {
        benefit: 'చిన్న చిరుధాన్యాల్లో అత్యధిక ప్రోటీన్',
        description:
          '100 గ్రాముల్లో 12.5 గ్రాముల ప్రోటీన్ — చిన్న చిరుధాన్యాల్లో ఇదే అత్యధికం. శాకాహారులకు మరియు వీగన్ ఆహారం తినేవాళ్ళకు ఇది అద్భుతమైన మొక్కల ఆధారిత ప్రోటీన్ మూలం.',
        evidenceLevel: 'well-established',
        source: 'ICMR-NIN IFCT 2017',
      },
      {
        benefit: 'లెసిథిన్ కాలేయ ఆరోగ్యానికి మంచిది',
        description:
          'వరిగెలులో లెసిథిన్ అనే ఫాస్ఫోలిపిడ్ ఉంటుంది — ఇది కాలేయ పనితీరుకు మంచిది, కొవ్వు జీవక్రియలో సహాయం చేస్తుంది. ప్రాథమిక అధ్యయనాలు కాలేయ ఆరోగ్యానికి మంచిదని సూచిస్తున్నాయి.',
        evidenceLevel: 'preliminary-evidence',
        source: 'Journal of Cereal Science',
      },
      {
        benefit: 'వాతావరణానికి అనుకూలమైన పంట',
        description:
          'అన్ని చిరుధాన్యాల్లో అతి తక్కువ పంట కాలం (60-75 రోజులు) మరియు చాలా తక్కువ నీరు (250-400mm) సరిపోతుంది — వాతావరణ మార్పులకు అనుకూలమైన అత్యంత సమర్థవంతమైన ధాన్యం.',
        evidenceLevel: 'well-established',
        source: 'ICAR Crop Science Division',
      },
      {
        benefit: 'B విటమిన్లు, ముఖ్యంగా నియాసిన్ పుష్కలం',
        description:
          'వరిగెలులో B-కాంప్లెక్స్ విటమిన్లు, ముఖ్యంగా నియాసిన్ (విటమిన్ B3) బాగా ఉంటుంది. ఇది శక్తి జీవక్రియ, నరాల వ్యవస్థ పనితీరు మరియు చర్మ ఆరోగ్యానికి చాలా ముఖ్యం.',
        evidenceLevel: 'supported-by-research',
        source: 'Journal of Food Science and Technology',
      },
    ],

    sideEffects: [
      {
        condition: 'గాయిట్రోజెన్ (థైరాయిడ్‌ను ప్రభావితం చేసే పదార్థం) ఉంటుంది',
        description:
          'ఎక్కువగా తింటే థైరాయిడ్ పనితీరును ప్రభావితం చేసే గాయిట్రోజెన్లు ఉంటాయి. థైరాయిడ్ సమస్యలు ఉన్నవాళ్ళు తగినంతగానే తినాలి, డాక్టర్‌ని సంప్రదించాలి.',
        severity: 'consult-doctor',
      },
      {
        condition: 'యాంటీన్యూట్రియెంట్లు ఉంటాయి',
        description:
          'ఫైటేట్ల వంటి యాంటీన్యూట్రియెంట్లు ఉంటాయి — ఇవి ఖనిజాల శోషణను తగ్గించవచ్చు. నానబెట్టడం, మొలకెత్తించడం మరియు వండడం వల్ల ఇవి బాగా తగ్గుతాయి.',
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
  // BROWNTOP MILLET (అండ కొర్రలు)
  // =============================================
  {
    slug: 'browntop-millet',
    name: 'అండ కొర్రలు',
    commonName: 'అండ కొర్రలు',
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
    tagline: 'ఫైబర్ చాంపియన్ — అత్యంత అరుదైన వాణిజ్య చిరుధాన్యం, ఇప్పుడు బలంగా తిరిగి వస్తోంది',
    description:
      'అండ కొర్రలు (కొరలే) వాణిజ్యపరంగా పండించే చిరుధాన్యాల్లో అత్యంత అరుదైనది. అన్ని చిరుధాన్యాల్లో అత్యధిక ఫైబర్ — 100 గ్రాముల్లో 12.5 గ్రాములు. ఒకప్పుడు దాదాపు అంతరించిపోయిన ఈ పంట, కర్ణాటకలోని రైతుల కృషి వల్ల అద్భుతంగా తిరిగి వస్తోంది. ప్రధానంగా కర్ణాటకలోని తుమకూరు మరియు చిత్రదుర్గ జిల్లాల్లో పండిస్తారు. గ్లైసెమిక్ ఇండెక్స్ చాలా తక్కువ (సుమారు 47) — గట్ హెల్త్‌కు అద్భుతమైన ప్రయోజనాలు ఉన్నాయని ఇప్పుడు అందరి దృష్టి ఈ ధాన్యం మీద పడుతోంది.',

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
        'ఫైబర్ చాలా ఎక్కువగా ఉంటుంది కాబట్టి గట్ హెల్త్‌కు మరియు మలబద్ధకం రాకుండా ఉండటానికి అద్భుతంగా పని చేస్తుంది',
        'చల్లని గుణం ఉంది — పిత్తం ఎక్కువైన సమయాల్లో మంచిది',
        'తేలికగా అరుగుతుంది — జీర్ణక్రియ మరియు డిటాక్సిఫికేషన్‌కు సహాయం చేస్తుంది',
        'బరువు నియంత్రణకు మంచిదని చెప్తారు',
      ],
      contraindications: [
        'ఫైబర్ చాలా ఎక్కువగా ఉంటుంది కాబట్టి ఒక్కసారిగా ఎక్కువ తింటే అరుగుదలలో ఇబ్బంది రావచ్చు',
        'పొడి మరియు తేలికైన గుణాల వల్ల వాతం పెరగవచ్చు',
      ],
      classicalReference: 'Limited Ayurvedic references - classified under Kshudra Dhanya',
    },

    history: {
      originRegion: 'Southeast Asia and Indian subcontinent',
      domesticationPeriod: 'Ancient (exact period undocumented)',
      archaeologicalEvidence:
        'పురావస్తు ఆధారాలు పరిమితంగా ఉన్నాయి. కర్ణాటకలోని కొండ ప్రాంతాల్లో శతాబ్దాలుగా సంప్రదాయంగా పండిస్తున్నారని తెలుసు. ఇటీవలి పునరుద్ధరణ కృషి ముందు దాదాపు అంతరించిపోయే స్థితిలో ఉండేది.',
      spreadPattern:
        'ఆగ్నేయ ఆసియా మరియు భారతదేశానికి స్వంతమైనది. ప్రధానంగా కర్ణాటకలోని కొండ ప్రాంతాలకు పరిమితం, పక్క రాష్ట్రాలకు కొంచెం వ్యాపించింది.',
      culturalSignificance:
        'అండ కొర్రలు పంట పునరుద్ధరణకు గొప్ప ఉదాహరణ. ఆధునిక వ్యవసాయం వల్ల దాదాపు కనుమరుగైపోయిన ఈ ధాన్యాన్ని కర్ణాటకలోని అంకితమైన రైతులు మళ్ళీ బతికించారు. మర్చిపోయిన దేశీయ ధాన్యాలను పునరుద్ధరించి, వ్యవసాయ జీవవైవిధ్యాన్ని కాపాడే ఉద్యమానికి ఇది ప్రతీక.',
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
      texture: 'అన్నం లాగా ఉంటుంది, గట్టిగా',
      flavorProfile: 'తేలికైన, కొంచెం నట్టీ రుచి',
      bestSubstituteFor: 'Rice',
      tips: [
        '6-8 గంటలు లేదా రాత్రంతా నానబెట్టండి — అప్పుడు బాగా వస్తుంది',
        'బాగా నానబెట్టిన తర్వాత అన్నం వండినట్లే వండుకోండి',
        'గట్టి టెక్చర్ ఉంటుంది కాబట్టి పులావ్ మరియు బిర్యానీ స్టైల్ వంటకాలకు చాలా బాగుంటుంది',
        'పిండిగా చేసి దోసెలు, రోటీలు కూడా చేయవచ్చు',
        'మొదటిసారి తింటుంటే కొంచెంగా మొదలుపెట్టి మెల్లగా పెంచండి',
      ],
    },

    healthBenefits: [
      {
        benefit: 'అన్ని చిరుధాన్యాల్లో అత్యధిక ఫైబర్',
        description:
          '100 గ్రాముల్లో 12.5 గ్రాముల ఫైబర్ — అన్ని చిరుధాన్యాల్లో ఇదే అత్యధికం. ఈ అసాధారణమైన ఫైబర్ వల్ల అరుగుదల బాగా జరుగుతుంది, కడుపు నిండుగా ఉంటుంది, కొలెస్ట్రాల్ మరియు బ్లడ్ షుగర్ కూడా అదుపులో ఉంటాయి.',
        evidenceLevel: 'well-established',
        source: 'Published literature on millet nutrition',
      },
      {
        benefit: 'చాలా తక్కువ గ్లైసెమిక్ ఇండెక్స్',
        description:
          'GI సుమారు 47 — గ్లూకోజ్ చాలా నెమ్మదిగా విడుదల అవుతుంది. షుగర్ వ్యాధి నిర్వహణలో మరియు స్థిరమైన శక్తి కావాలనుకునే వాళ్ళకు ఇది అద్భుతమైన ఎంపిక.',
        evidenceLevel: 'supported-by-research',
        source: 'Published literature on millet glycemic indices',
      },
      {
        benefit: 'ఫైటోకెమికల్స్ పుష్కలం',
        description:
          'ఫీనాలిక్ సమ్మేళనాలతో సహా వివిధ ఫైటోకెమికల్స్ ఉన్నాయి — ఇవి యాంటీఆక్సిడెంట్, యాంటీ-ఇన్‌ఫ్లమేటరీ మరియు ఇతర ఆరోగ్య ప్రయోజనాలు కలిగి ఉంటాయి. పరిశోధన ఇంకా జరుగుతోంది.',
        evidenceLevel: 'preliminary-evidence',
        source: 'Journal of Food Science and Technology',
      },
      {
        benefit: 'గట్ హెల్త్‌కు చాలా మంచిది',
        description:
          'చాలా ఎక్కువ ఫైబర్ ప్రీబయోటిక్‌గా పని చేస్తుంది — పేగుల్లో మంచి బ్యాక్టీరియా పెరగడానికి సహాయం చేస్తుంది. మొత్తం గట్ హెల్త్ మరియు క్రమబద్ధమైన అరుగుదలకు చాలా మంచిది.',
        evidenceLevel: 'supported-by-research',
        source: 'Nutrition Research Reviews',
      },
    ],

    sideEffects: [
      {
        condition: 'వాణిజ్యపరంగా దొరకడం కష్టం',
        description:
          'వాణిజ్యపరంగా పండించే చిరుధాన్యాల్లో అండ కొర్రలు అత్యంత అరుదు — కొనడం కష్టంగా ఉంటుంది. ప్రధానంగా కర్ణాటక మరియు కొన్ని స్పెషాలిటీ దుకాణాల్లో మాత్రమే దొరుకుతాయి.',
        severity: 'mild',
      },
      {
        condition: 'ఎక్కువ ఫైబర్ వల్ల అరుగుదల ఇబ్బంది',
        description:
          'ఫైబర్ చాలా ఎక్కువ (100 గ్రాముల్లో 12.5 గ్రాములు) — ఒక్కసారిగా ఎక్కువ తింటే అరుగుదలలో ఇబ్బంది, ఉబ్బరం లేదా గ్యాస్ రావచ్చు. మెల్లగా ఆహారంలో చేర్చుకోవడం మంచిది.',
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
