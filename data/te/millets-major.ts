import type { Millet } from '@/lib/types';

export const majorMillets: Millet[] = [
  // =============================================
  // PEARL MILLET (Sajjalu)
  // =============================================
  {
    slug: 'pearl-millet',
    name: 'సజ్జలు',
    commonName: 'సజ్జలు',
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
    tagline: 'భారతదేశంలో అత్యధికంగా పండించే చిరుధాన్యం, రాజస్థాన్ మరియు గుజరాత్ ప్రధాన ఆహారం',
    description:
      'సజ్జలు (బాజ్రా) భారతదేశంలో అత్యధికంగా పండించే చిరుధాన్యం. ప్రపంచంలో ఆరో అతి ముఖ్యమైన ధాన్యం కూడా ఇదే. రాజస్థాన్, గుజరాత్, మహారాష్ట్ర, హర్యానా లాంటి ఎండ ప్రాంతాల్లో ఇది ప్రధాన ఆహారం. ఎండకు, కరువుకు తట్టుకొని ఇసుక నేలల్లో కూడా బాగా పెరగడం సజ్జల ప్రత్యేకత. ఇనుము, ప్రోటీన్, శక్తి విషయంలో సజ్జలు చాలా గొప్పవి — భారతదేశం, ఆఫ్రికాలో కోట్ల మందికి పోషణ అందిస్తున్నాయి.',

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
        'చాలా సేపు శక్తిని అందిస్తుంది, శరీరానికి పోషణ ఇస్తుంది',
        'కండరాలను, కణజాలాలను బలపరుస్తుంది',
        'చలికాలంలో, చల్లని ప్రాంతాల్లో తినడానికి చాలా మంచిది',
        'పాలిచ్చే తల్లులకు పాల ఉత్పత్తి పెరగడానికి తోడ్పడుతుంది',
      ],
      contraindications: [
        'వాత దోషం ఎక్కువగా ఉన్నవారికి అంత అనుకూలం కాదు',
        'వేసవిలో తక్కువగా తినడం మంచిది',
      ],
      classicalReference: 'Bhavaprakasha Nighantu, Dhanya Varga',
    },

    history: {
      originRegion: 'ఆఫ్రికా సాహెల్ ప్రాంతం',
      domesticationPeriod: 'సుమారు 4500 సంవత్సరాల క్రితం (~2500 BCE)',
      archaeologicalEvidence:
        'గుజరాత్‌లోని సుర్కోతడ, రోజ్డీ పురాతత్వ ప్రదేశాల్లో సుమారు 2000 BCE నాటి ఆధారాలు దొరికాయి — భారత ఉపఖండంలో సజ్జల సాగు చాలా పురాతనమైనదని ఇది రుజువు చేస్తుంది.',
      spreadPattern:
        'పశ్చిమ ఆఫ్రికా సాహెల్ ప్రాంతంలో పుట్టి, అరేబియా సముద్రం మీదుగా పురాతన వాణిజ్య మార్గాల ద్వారా 2000 BCE నాటికి భారతదేశానికి చేరుకుంది.',
      culturalSignificance:
        'రాజస్థాన్, గుజరాత్ ఆహార సంస్కృతిలో సజ్జలు చాలా ముఖ్యమైనవి. నెయ్యి, బెల్లంతో సజ్జ రొట్టె చలికాలంలో అక్కడ సంప్రదాయ ఆహారం. పశ్చిమ భారతదేశంలో పంట కోత పండుగలలో కూడా సజ్జలకు ప్రత్యేక స్థానం ఉంది.',
    },

    cultivation: {
      majorStates: ['Rajasthan', 'Maharashtra', 'Gujarat', 'Uttar Pradesh', 'Haryana'],
      globalRegions: ['West Africa (Sahel)', 'East Africa', 'South Asia'],
      growingSeason: 'ఖరీఫ్ (జూలై-అక్టోబర్)',
      waterRequirement: '350-500mm వర్షపాతం',
      soilType: 'ఇసుక, ఒండ్రుమట్టి నేలలు; పేద, ఎండిన నేలల్లో కూడా పెరుగుతుంది',
      harvestDays: '65-85 రోజులు',
    },

    cooking: {
      waterRatio: '1:3',
      soakingTime: 'నానబెట్టాల్సిన అవసరం లేదు',
      cookingTime: '20-25 నిమిషాలు',
      texture: 'కొంచెం గరుకుగా, వేరుశెనగ రుచి తగిలినట్టు ఉంటుంది',
      flavorProfile: 'తేలికగా, మట్టి వాసన తగిలే రుచి',
      bestSubstituteFor: 'గోధుమ పిండి (రొట్టెలకు)',
      tips: [
        'సజ్జ పిండితో రొట్టె లేదా భాక్రీ చేయడం బాగా కుదురుతుంది',
        'కొత్తగా మొదలు పెడుతుంటే గోధుమ పిండితో సగం సగం (50:50) కలపండి — రుచి తేలికగా ఉంటుంది',
        'సజ్జ రొట్టె వేడిగా ఉన్నప్పుడే నెయ్యి వేసి తింటే రుచి అద్భుతంగా ఉంటుంది',
        'సజ్జ పిండి ఎక్కువ రోజులు నిల్వ ఉండదు — తాజాగా విసిరి వాడండి లేదా ఫ్రిజ్‌లో పెట్టండి',
      ],
    },

    healthBenefits: [
      {
        benefit: 'ఇనుము (ఐరన్) అధికంగా ఉంటుంది',
        description:
          'సజ్జల్లో 100 గ్రాములకు 8.0mg ఇనుము ఉంటుంది — ధాన్యాలలో ఇది అత్యంత మంచి మొక్కల ఆధారిత ఇనుము వనరులలో ఒకటి. భారతదేశంలో చాలామందిలో కనిపించే ఐరన్ లోపం రక్తహీనతను ఎదుర్కోవడంలో ఇది చాలా ఉపయోగం.',
        evidenceLevel: 'well-established',
        source: 'ICMR-NIN IFCT 2017',
      },
      {
        benefit: 'గుండె ఆరోగ్యానికి మంచిది',
        description:
          'సజ్జల్లో ఉండే మెగ్నీషియం, పొటాషియం గుండె ఆరోగ్యానికి తోడ్పడతాయి — రక్తపోటును అదుపులో పెట్టడంలో, గుండె సక్రమంగా కొట్టుకోవడంలో సహాయపడతాయి.',
        evidenceLevel: 'supported-by-research',
        source: 'Journal of Food Science and Technology',
      },
      {
        benefit: 'షుగర్ (మధుమేహం) నియంత్రణకు మంచిది',
        description:
          'సజ్జల గ్లైసెమిక్ ఇండెక్స్ ~55, అంటే రక్తంలోకి గ్లూకోజ్ మెల్లగా విడుదల అవుతుంది. దీంతో షుగర్ వ్యాధి నియంత్రణలో ఉన్నవారికి ఇది అనుకూలం.',
        evidenceLevel: 'supported-by-research',
        source: 'International Journal of Food Sciences and Nutrition',
      },
      {
        benefit: 'అధిక శక్తి ఇచ్చే ధాన్యం',
        description:
          '100 గ్రాములకు 361 కేలరీలు, మంచి ప్రోటీన్ (11.6g), కొవ్వు (5.0g) ఉండటంతో సజ్జలు అద్భుతమైన శక్తి వనరు — ముఖ్యంగా శారీరక శ్రమ ఎక్కువ చేసేవారికి, కూలీలకు చాలా మంచిది.',
        evidenceLevel: 'well-established',
        source: 'ICMR-NIN IFCT 2017',
      },
    ],

    sideEffects: [
      {
        condition: 'జీర్ణ సమస్యలు',
        description:
          'మొదట్లో కొంతమందికి ఉబ్బరం రావచ్చు, ముఖ్యంగా చిరుధాన్యాలు తినడానికి అలవాటు లేనివారికి. మెల్లగా అలవాటు చేసుకోవడం మంచిది.',
        severity: 'mild',
      },
      {
        condition: 'గాయిట్రోజెన్ (థైరాయిడ్‌పై ప్రభావం)',
        description:
          'పచ్చిగా ఉన్నప్పుడు సజ్జల్లో గాయిట్రోజెన్లు ఉంటాయి, ఇవి థైరాయిడ్ పనితీరును ప్రభావితం చేయవచ్చు. వండడం వల్ల ఇది చాలా తగ్గుతుంది, కాబట్టి సాధారణంగా తినడానికి ఏ ఇబ్బంది లేదు.',
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
    name: 'రాగి',
    commonName: 'రాగి',
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
    tagline: 'కాల్షియం చాంపియన్ — పాల తర్వాత అత్యధిక కాల్షియం ఉన్న ధాన్యం',
    description:
      'రాగి అంటే తెలియని తెలుగు వాళ్ళు ఉండరు. రాగి సంగటి, రాగి జావ, రాగి ముద్ద — ఇవన్నీ మన ఆహార సంస్కృతిలో భాగమే. ధాన్యాలన్నింటిలోకీ అత్యధికంగా కాల్షియం (100 గ్రాములకు 344mg) ఉన్న ధాన్యం ఇదే — పాలకంటే ఏమీ తక్కువ కాదు! కర్ణాటక, తమిళనాడులో ప్రధాన ఆహారంగా 3000 సంవత్సరాలకు పైగా సాగు చేస్తున్నారు. పిల్లలకు, ముసలి వారికి, ఎముకల బలానికి రాగి అద్భుతం. రాగి ముద్ద, రాగి మాల్ట్ — ఇవి దక్షిణ భారతదేశపు ఐకానిక్ వంటకాలు.',

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
        'ఎముకలను బలపరచడంలో, కాల్షియం అందించడంలో అద్భుతంగా పనిచేస్తుంది',
        'పెరుగుతున్న పిల్లలకు, వయసు మీరిన వారికి చాలా మంచిది',
        'చల్లని గుణం వల్ల పిత్తం ఎక్కువగా ఉన్న సమస్యలకు తగ్గిస్తుంది',
        'తేలికగా ఉండటం వల్ల బరువు తగ్గడానికి తోడ్పడుతుంది',
        'జబ్బు నుండి కోలుకుంటున్నప్పుడు తినే ఆహారంలో వాడతారు',
      ],
      contraindications: [
        'ఎక్కువగా తింటే Ruksha (పొడి) గుణం వల్ల మలబద్ధకం రావచ్చు',
        'కిడ్నీ రాళ్ళు (కాల్షియం ఆక్సలేట్ రకం) ఉన్నవారు తక్కువగా తినడం మంచిది',
      ],
      classicalReference: 'Charaka Samhita, Sutra Sthana',
    },

    history: {
      originRegion: 'ఇథియోపియా ఎత్తైన ప్రాంతాలు, తూర్పు ఆఫ్రికా',
      domesticationPeriod: 'సుమారు 5000 సంవత్సరాల క్రితం (~3000 BCE)',
      archaeologicalEvidence:
        'కర్ణాటకలోని హల్లూరు పురాతత్వ ప్రదేశంలో సుమారు 1800 BCE నాటి ఆధారాలు దొరికాయి — దక్షిణ భారతదేశంలో రాగి సాగు చాలా పురాతనమైనదని ఇది చెబుతుంది.',
      spreadPattern:
        'ఇథియోపియా ఎత్తైన ప్రాంతాల్లో మొదట పండించి, 3000 BCE నాటికి భారతదేశానికి చేరుకుంది. డెక్కన్ పీఠభూమి, దక్షిణ భారత కొండ ప్రాంతాల్లో ప్రధాన పంటగా స్థిరపడింది.',
      culturalSignificance:
        'కర్ణాటక, తమిళనాడు ఆహార సంస్కృతిలో రాగికి కేంద్ర స్థానం ఉంది. రాగి ముద్ద కర్ణాటక సంప్రదాయ ప్రధాన ఆహారం. రాగి మాల్ట్ (అంబలి/కంజి) భారతదేశంలో పిల్లలకు ఇచ్చే సంప్రదాయ మొదటి ఘన ఆహారం.',
    },

    cultivation: {
      majorStates: ['Karnataka', 'Tamil Nadu', 'Andhra Pradesh', 'Uttarakhand', 'Maharashtra'],
      globalRegions: ['East Africa (Ethiopia, Uganda)', 'South Asia', 'Nepal'],
      growingSeason: 'ఖరీఫ్ (జూన్-అక్టోబర్)',
      waterRequirement: '500-750mm వర్షపాతం',
      soilType: 'ఎర్ర ఒండ్రుమట్టి, లేటరైట్ నేలలు; కొంచెం ఆమ్ల నేలల్లో కూడా పెరుగుతుంది',
      harvestDays: '90-120 రోజులు',
    },

    cooking: {
      waterRatio: '1:3.5',
      soakingTime: 'పిండికి నానబెట్టాల్సిన అవసరం లేదు',
      cookingTime: '15-20 నిమిషాలు (జావ/గంజి)',
      texture: 'జావగా చేస్తే నున్నగా, పిండిగా వాడితే కొంచెం గరుకుగా ఉంటుంది',
      flavorProfile: 'తేలికగా, కొంచెం తీపిగా, మట్టి వాసన తగిలే రుచి',
      bestSubstituteFor: 'గోధుమ పిండి, బియ్యం పిండి',
      tips: [
        'రాగి ముద్ద చేయడానికి మరుగుతున్న నీళ్ళల్లో రాగి పిండి వేసి ఆపకుండా కలపాలి — ముద్దలు రాకుండా జాగ్రత్తగా కలపండి',
        'రాగి జావ చేయడానికి రాగి పిండిని నీళ్ళలో కలిపి చిక్కగా అయ్యేవరకు వండడం',
        'రాగి పిండికి బెల్లం, ఏలకులు కలిపి పోషకమైన జావ చేయవచ్చు',
        'దోసెలు, ఇడ్లీలు, బేకరీ వంటకాల్లో కూడా రాగి పిండి బాగా పనిచేస్తుంది',
        'మొలకెత్తించిన రాగి పిండిలో పోషకాల శోషణ ఎక్కువగా ఉంటుంది',
      ],
    },

    healthBenefits: [
      {
        benefit: 'అసాధారణమైన కాల్షియం వనరు',
        description:
          'రాగిలో 100 గ్రాములకు 344mg కాల్షియం ఉంటుంది — ధాన్యాలన్నింటిలోకీ ఇది అత్యధికం, పాలతో సమానం. ల్యాక్టోస్ జీర్ణం కానివారికి ఎముకల ఆరోగ్యానికి ఇది అమూల్యమైనది.',
        evidenceLevel: 'well-established',
        source: 'ICMR-NIN IFCT 2017',
      },
      {
        benefit: 'ఎముకల ఆరోగ్యం మరియు ఆస్టియోపోరోసిస్ నివారణ',
        description:
          'అధిక కాల్షియం, ఫాస్ఫరస్ ఉండటం వల్ల ఎముకల సాంద్రతకు తోడ్పడుతుంది. ముఖ్యంగా రుతుక్రమం ఆగిన మహిళలు, వయసు మీరిన వారిలో ఆస్టియోపోరోసిస్ నివారణకు ఉపయోగపడవచ్చు.',
        evidenceLevel: 'supported-by-research',
        source: 'Journal of Bone and Mineral Research',
      },
      {
        benefit: 'షుగర్ (మధుమేహం) నియంత్రణకు మంచిది',
        description:
          'రాగిలో రక్తంలో చక్కెరను తగ్గించే అమైనో ఆమ్లాలు ఉన్నాయి. గింజ పైపొర పాలీఫీనాల్స్, పీచు పదార్థాలతో నిండి ఉండి గ్లూకోజ్ శోషణను నెమ్మదిగా చేస్తుంది.',
        evidenceLevel: 'supported-by-research',
        source: 'Journal of Agricultural and Food Chemistry',
      },
      {
        benefit: 'యాంటీఆక్సిడెంట్లు అధికం',
        description:
          'రాగిలో ఫీనాలిక్ ఆమ్లాలు, ఫ్లేవనాయిడ్లు, టానిన్లు ఉన్నాయి — ఇవి శరీరంలో ఆక్సిడేటివ్ ఒత్తిడిని తగ్గించడంలో సహాయపడతాయి.',
        evidenceLevel: 'supported-by-research',
        source: 'Food Chemistry',
      },
      {
        benefit: 'పిల్లలకు, పెద్దవారికి అద్భుతమైన పోషణ',
        description:
          'రాగి మాల్ట్‌ను దక్షిణ భారతదేశంలో పిల్లలకు ఇచ్చే మొదటి ఘన ఆహారంగా తరతరాలుగా వాడుతున్నారు. సులభంగా జీర్ణమవడం, అధిక కాల్షియం ఉండటం వల్ల పెద్దవారి పోషణకు కూడా ఇది అనువైనది.',
        evidenceLevel: 'well-established',
        source: 'Indian Pediatrics',
      },
    ],

    sideEffects: [
      {
        condition: 'ఆక్సలేట్ ఉండటం',
        description:
          'రాగిలో ఆక్సలేట్లు ఉంటాయి — ఇవి కొన్ని సందర్భాలలో కాల్షియం శోషణకు ఆటంకం కలిగించవచ్చు, కిడ్నీ రాళ్ళ ప్రమాదం ఉన్నవారిలో సమస్య కలిగించవచ్చు.',
        severity: 'mild',
      },
      {
        condition: 'మలబద్ధకం ప్రమాదం',
        description:
          'తగినంత నీళ్ళు తాగకుండా ఎక్కువగా తింటే మలబద్ధకం రావచ్చు. రాగి యొక్క Ruksha (పొడి) గుణం వల్ల ఇది జరుగుతుంది.',
        severity: 'mild',
      },
    ],

    isGlutenFree: true,
    relatedRecipes: [
      'ragi-mudde',
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
  // SORGHUM (Jonnalu)
  // =============================================
  {
    slug: 'sorghum',
    name: 'జొన్నలు',
    commonName: 'జొన్నలు',
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
    tagline: 'బహుముఖ శక్తి ధాన్యం — పీచు, యాంటీఆక్సిడెంట్లు అధికం, వంటల్లో ఎంతో వైవిధ్యం',
    description:
      'జొన్న రొట్టె, జొన్న సంగటి — తెలుగు వాళ్ళకు ఇవి కొత్త కాదు. మన తాతయ్యలు, నానమ్మలు రోజూ తిన్న ఆహారం ఇది. ప్రపంచంలో ఐదో అతి ముఖ్యమైన ధాన్యంగా, మహారాష్ట్ర, కర్ణాటక, మధ్యప్రదేశ్‌లో విస్తారంగా పండిస్తారు. 100 గ్రాములకు 9.7 గ్రాముల పీచు పదార్థం — ధాన్యాలన్నింటిలోకీ ఇది చాలా ఎక్కువ. జొన్న రొట్టెలు (భాక్రీ), జావలు, పేలాలు — ఇలా ఎన్నో రకాలుగా తింటారు. ఖరీఫ్, రబీ రెండు సీజన్లలో పండటం ఇంకో ప్రత్యేకత.',

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
        'అధిక పీచు పదార్థం ఉండటం వల్ల జీర్ణ ఆరోగ్యానికి చాలా మంచిది',
        'చల్లని గుణం వల్ల పిత్తం ఎక్కువగా ఉన్నప్పుడు తగ్గిస్తుంది',
        'తేలికగా, పొడిగా ఉండటం వల్ల బరువు తగ్గడానికి తోడ్పడుతుంది',
        'మూత్ర నాళాల ఆరోగ్యానికి ఉపయోగపడుతుంది',
      ],
      contraindications: [
        'వాతం పెరగవచ్చు — నెయ్యి లేదా నూనెతో కలిపి తింటే బ్యాలెన్స్ అవుతుంది',
        'ఎక్కువగా తింటే శరీరంలో పొడితనం పెరగవచ్చు',
      ],
      classicalReference: 'Bhavaprakasha Nighantu',
    },

    history: {
      originRegion: 'ఈశాన్య ఆఫ్రికా (సూడాన్-ఇథియోపియా ప్రాంతం)',
      domesticationPeriod: 'సుమారు 5000-8000 సంవత్సరాల క్రితం',
      archaeologicalEvidence:
        'ఆఫ్రికాలో అతి తొలుత పండించిన ధాన్యాలలో ఒకటి. డెక్కన్ పీఠభూమి పురాతత్వ ప్రదేశాల్లో సుమారు 2000 BCE నాటి ఆధారాలు భారతదేశంలో జొన్నల ఉనికిని నిరూపిస్తాయి.',
      spreadPattern:
        'ఈశాన్య ఆఫ్రికాలో పుట్టి, వాణిజ్య మార్గాల ద్వారా 2000 BCE నాటికి భారతదేశానికి చేరుకుంది, తర్వాత చైనా, ఆగ్నేయ ఆసియాకు వ్యాపించింది.',
      culturalSignificance:
        'జొన్న భాక్రీ (రొట్టె) మహారాష్ట్ర, ఉత్తర కర్ణాటక సాంస్కృతిక ప్రధాన ఆహారం. డెక్కన్ పీఠభూమి ఆహార గుర్తింపులో ఇది అంతర్భాగం — కోట్ల మంది ప్రతిరోజూ తింటారు. తెలుగు నాట కూడా జొన్న సంగటి, జొన్న రొట్టె బాగా ప్రాచుర్యం ఉన్నవే.',
    },

    cultivation: {
      majorStates: ['Maharashtra', 'Karnataka', 'Madhya Pradesh', 'Rajasthan', 'Tamil Nadu'],
      globalRegions: ['Sub-Saharan Africa', 'South Asia', 'Americas', 'Australia'],
      growingSeason: 'ఖరీఫ్ (జూలై-అక్టోబర్) మరియు రబీ (అక్టోబర్-ఫిబ్రవరి) రెండూ',
      waterRequirement: '400-600mm వర్షపాతం',
      soilType: 'నల్ల రేగడి నేలలు (వెర్టిసోల్స్), బంక మట్టి; క్షార నేలల్లో కూడా పెరుగుతుంది',
      harvestDays: '100-120 రోజులు',
    },

    cooking: {
      waterRatio: '1:2.5',
      soakingTime: 'నానబెట్టడం ఐచ్ఛికం — 4-6 గంటలు (మొత్తం గింజలకు)',
      cookingTime: '25-30 నిమిషాలు',
      texture: 'గట్టిగా, కొంచెం నమలగలిగేలా ఉంటుంది',
      flavorProfile: 'తేలికగా, కొంచెం తీపిగా, తటస్థ రుచి',
      bestSubstituteFor: 'బియ్యం, గోధుమలు',
      tips: [
        'జొన్న పిండితో భాక్రీ (రొట్టె) అద్భుతంగా వస్తుంది — పిండి వేడిగా ఉన్నప్పుడే చపాతీలు చేయండి',
        'మొత్తం జొన్న గింజలను నానబెట్టి బియ్యం లాగా వండవచ్చు',
        'జొన్న పేలాలు (పాప్‌కార్న్ లాగా) మహారాష్ట్రలో ప్రసిద్ధ స్నాక్',
        'జొన్న పిండిలో గ్లూటెన్ ఉండదు — బేకింగ్ చేస్తే బైండర్ కలపాలి',
        'కూరగాయలతో కలిపి జొన్న ఉప్మా లేదా కిచిడీ చేస్తే పోషకంగా ఉంటుంది',
      ],
    },

    healthBenefits: [
      {
        benefit: 'చాలా ఎక్కువ పీచు పదార్థం — జీర్ణానికి మంచిది',
        description:
          'జొన్నల్లో 100 గ్రాములకు 9.7g పీచు పదార్థం ఉంటుంది — ధాన్యాలన్నింటిలోకీ ఇది అత్యధికం. ఇది ఆరోగ్యకరమైన జీర్ణక్రియ, క్రమబద్ధమైన మలవిసర్జన, పేగుల్లో మంచి బ్యాక్టీరియా పెరుగుదలకు తోడ్పడుతుంది.',
        evidenceLevel: 'well-established',
        source: 'ICMR-NIN IFCT 2017',
      },
      {
        benefit: 'ఫీనాలిక్ సమ్మేళనాలు, యాంటీఆక్సిడెంట్లు అధికం',
        description:
          'జొన్నల్లో 3-డియాక్సీయాంథోసయనిన్లు, టానిన్లు, ఫీనాలిక్ ఆమ్లాలు ఉన్నాయి — ఇవి శక్తివంతమైన యాంటీఆక్సిడెంట్ లక్షణాలు కలిగి శరీరంలో ఆక్సిడేటివ్ నష్టాన్ని తగ్గించగలవు.',
        evidenceLevel: 'supported-by-research',
        source: 'Journal of Cereal Science',
      },
      {
        benefit: 'క్యాన్సర్ నిరోధక లక్షణాలు ఉండవచ్చు',
        description:
          'జొన్నల్లో ఉండే టానిన్లు, ఫీనాలిక్ సమ్మేళనాలు ప్రాథమిక అధ్యయనాలలో క్యాన్సర్ నిరోధక లక్షణాలు చూపించాయి — ముఖ్యంగా పెద్దపేగు క్యాన్సర్ కణాలపై.',
        evidenceLevel: 'preliminary-evidence',
        source: 'Nutrition and Cancer journal',
      },
      {
        benefit: 'గుండె ఆరోగ్యానికి తోడ్పడుతుంది',
        description:
          'అధిక పీచు, మెగ్నీషియం, జొన్న మైనంలో ఉండే పాలికొసానోల్స్ — ఇవన్నీ కలిసి కొలెస్ట్రాల్ తగ్గించడంలో, హృదయ ఆరోగ్యానికి తోడ్పడతాయి.',
        evidenceLevel: 'supported-by-research',
        source: 'Journal of Agricultural and Food Chemistry',
      },
    ],

    sideEffects: [
      {
        condition: 'టానిన్-ఐరన్ సంఘర్షణ',
        description:
          'జొన్నల్లో ఉండే టానిన్లు ఇతర ఆహారాల నుండి ఇనుము శోషణను తగ్గించవచ్చు. ఐరన్ లోపం ఉన్నవారు జొన్నలను ఇనుము అధికంగా ఉన్న ఆహారాలతో కలిపి తినేటప్పుడు జాగ్రత్తగా ఉండాలి.',
        severity: 'moderate',
      },
      {
        condition: 'మొదట్లో జీర్ణ సమస్యలు',
        description:
          'అధిక పీచు ఆహారాలకు అలవాటు లేనివారికి మొదట్లో గ్యాస్, ఉబ్బరం రావచ్చు. మెల్లగా అలవాటు చేసుకోవడం మంచిది.',
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
  // FOXTAIL MILLET (Korralu)
  // =============================================
  {
    slug: 'foxtail-millet',
    name: 'కొర్రలు',
    commonName: 'కొర్రలు',
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
    tagline: 'అత్యంత పురాతన చిరుధాన్యం — ప్రోటీన్, ఇనుము అధికం, బియ్యానికి బెస్ట్ ప్రత్యామ్నాయం',
    description:
      'కొర్రలు ఆంధ్ర, తెలంగాణలో చాలా ప్రసిద్ధి. మానవ చరిత్రలో అత్యంత పురాతనంగా పండించిన పంటలలో ఒకటి — చైనాలో దాదాపు 9000 సంవత్సరాల క్రితమే సాగు చేసిన ఆధారాలు ఉన్నాయి. ప్రోటీన్ విషయంలో చిరుధాన్యాలలో టాప్‌లో ఉంటుంది (100 గ్రాములకు 12.3g), పీచు పదార్థం కూడా బాగా ఉంటుంది, గ్లైసెమిక్ ఇండెక్స్ తక్కువ (~50). వండితే బియ్యంలాగా పొంగుతుంది, అందుకే బియ్యానికి అద్భుతమైన ప్రత్యామ్నాయం. కరువును తట్టుకునే శక్తి అద్భుతం — 300-400mm వర్షపాతం చాలు.',

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
        'తేలికగా, పొడిగా ఉండటం వల్ల బరువు తగ్గడానికి ఉపయోగపడుతుంది',
        'జీర్ణాగ్ని (Agni) ని పెంచుతుంది',
        'కఫం ఎక్కువగా ఉన్న సమస్యలకు — జలుబు, దగ్గు లాంటివాటికి మంచిది',
        'ప్రసవం తర్వాత కోలుకునే ఆహారంలో సంప్రదాయంగా వాడతారు',
      ],
      contraindications: [
        'వాతం కొంచెం పెరగవచ్చు — నెయ్యి లేదా నూనెతో బ్యాలెన్స్ చేయాలి',
        'చర్మం పొడిగా ఉన్న సమస్యలు ఉంటే ఎక్కువగా తినకూడదు',
      ],
      classicalReference: 'Ashtanga Hridaya',
    },

    history: {
      originRegion: 'ఉత్తర చైనా (సిషాన్ పురాతత్వ ప్రదేశం)',
      domesticationPeriod: 'సుమారు 8700 సంవత్సరాల క్రితం (~6700 BCE)',
      archaeologicalEvidence:
        'ఉత్తర చైనాలోని సిషాన్ పురాతత్వ ప్రదేశంలో సుమారు 8700 సంవత్సరాల నాటి అవశేషాలు దొరికాయి — ఇది ప్రపంచంలో అతి పురాతనంగా పండించిన పంటలలో ఒకటిగా నిరూపించింది.',
      spreadPattern:
        'ఉత్తర చైనాలో పుట్టి, మధ్య ఆసియా వాణిజ్య మార్గాల ద్వారా భారతదేశం, మధ్యప్రాచ్యం, ఐరోపాకు వ్యాపించింది.',
      culturalSignificance:
        'ఆంధ్రప్రదేశ్ (కొర్రలు), తమిళనాడు (తినై) లలో కొర్రలకు ప్రత్యేక సాంస్కృతిక ప్రాముఖ్యం ఉంది. పండుగల వంటకాలలో వాడతారు. ప్రాచీన సంగం తమిళ సాహిత్యంలో కూడా కొర్రల ప్రస్తావన ఉంది. తెలుగు నాట కొర్ర అన్నం, కొర్ర పొంగలి బాగా ప్రాచుర్యం.',
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
      growingSeason: 'ఖరీఫ్ (జూన్-అక్టోబర్)',
      waterRequirement: '300-400mm వర్షపాతం',
      soilType: 'తేలికైన ఇసుక మట్టి నుండి మధ్యస్థ మట్టి నేలలు; కరువును అద్భుతంగా తట్టుకుంటుంది',
      harvestDays: '75-90 రోజులు',
    },

    cooking: {
      waterRatio: '1:2.5',
      soakingTime: '30 నిమిషాలు',
      cookingTime: '15-20 నిమిషాలు',
      texture: 'పొంగుతుంది, బియ్యంలాగా ఉంటుంది',
      flavorProfile: 'వేరుశెనగ రుచి, కొంచెం తీపిగా',
      bestSubstituteFor: 'బియ్యం',
      tips: [
        'బాగా కడిగి 30 నిమిషాలు నానబెట్టి వండితే బాగా వస్తుంది',
        'బియ్యంలాగానే వండండి — అందంగా పొంగుతుంది',
        'ఉప్మా, పులావ్, పొంగలి చేయడానికి అద్భుతంగా పనిచేస్తుంది',
        'పాయసం (ఖీర్) లాంటి తీపి వంటకాల్లో కూడా వాడవచ్చు',
        'వండే ముందు తేలికగా వేయించుకుంటే వేరుశెనగ రుచి ఇంకా ఎక్కువగా వస్తుంది',
      ],
    },

    healthBenefits: [
      {
        benefit: 'అధిక ప్రోటీన్',
        description:
          'కొర్రల్లో 100 గ్రాములకు 12.3g ప్రోటీన్ ఉంటుంది — చిరుధాన్యాలలో ఇది అత్యధికంలో ఒకటి. శాకాహారులు మొక్కల ఆధారిత ప్రోటీన్ వనరులు కోరుకునేవారికి ఇది చాలా మంచిది.',
        evidenceLevel: 'well-established',
        source: 'ICMR-NIN IFCT 2017',
      },
      {
        benefit: 'తక్కువ గ్లైసెమిక్ ఇండెక్స్ — షుగర్ ఉన్నవారికి అనుకూలం',
        description:
          'కొర్రల GI సుమారు 50 — అంటే గ్లూకోజ్ నెమ్మదిగా విడుదల అవుతుంది. షుగర్ వ్యాధి నియంత్రణలో ఉన్నవారికి ఇది తగిన ధాన్యం.',
        evidenceLevel: 'supported-by-research',
        source: 'International Journal of Diabetes in Developing Countries',
      },
      {
        benefit: 'పీచు పదార్థం అధికం',
        description:
          '100 గ్రాములకు 8.0g పీచు ఉంటుంది — జీర్ణ ఆరోగ్యానికి, కడుపు నిండిన భావన ఇవ్వడానికి, ఆరోగ్యకరమైన కొలెస్ట్రాల్ స్థాయులు నిర్వహించడానికి ఇది తోడ్పడుతుంది.',
        evidenceLevel: 'well-established',
        source: 'ICMR-NIN IFCT 2017',
      },
      {
        benefit: 'B విటమిన్లు మంచి వనరు',
        description:
          'కొర్రల్లో థయామిన్, నియాసిన్ వంటి B-కాంప్లెక్స్ విటమిన్లు ఉన్నాయి — ఇవి శక్తి జీవక్రియకు, నరాల వ్యవస్థ పనితీరుకు చాలా అవసరం.',
        evidenceLevel: 'supported-by-research',
        source: 'Journal of Food Science and Technology',
      },
    ],

    sideEffects: [
      {
        condition: 'గాయిట్రోజెన్ (థైరాయిడ్‌పై ప్రభావం)',
        description:
          'చాలా ఎక్కువగా తింటే గాయిట్రోజెనిక్ సమ్మేళనాల వల్ల థైరాయిడ్ సమస్యలు రావచ్చు. థైరాయిడ్ వ్యాధి ఉన్నవారు తక్కువగా తిని, డాక్టర్‌ను సంప్రదించాలి.',
        severity: 'consult-doctor',
      },
      {
        condition: 'ప్రాసెసింగ్ అవసరం',
        description:
          'పొట్టు తీయాల్సిన రకం కాబట్టి వండే ముందు సరిగ్గా ప్రాసెస్ చేయాలి. సరిగ్గా ప్రాసెస్ చేయకపోతే జీర్ణమవడం కష్టం.',
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
  // LITTLE MILLET (Samalu)
  // =============================================
  {
    slug: 'little-millet',
    name: 'సామలు',
    commonName: 'సామలు',
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
    tagline: 'ఇనుము అధికంగా ఉన్న చిన్న గింజ — అధిక పీచుతో బియ్యానికి అత్యంత దగ్గరి ప్రత్యామ్నాయం',
    description:
      'సామలు చిన్న గింజలు, కానీ పోషణలో మాత్రం పెద్దవే. తూర్పు కనుమల ప్రాంతంలో పుట్టిన ఈ భారతీయ చిరుధాన్యంలో ఇనుము చాలా ఎక్కువ (100 గ్రాములకు 9.3mg) — చిరుధాన్యాలన్నింటిలోకీ అత్యధికం. పీచు పదార్థం (7.6g) కూడా బాగానే ఉంటుంది. రుచిలో తటస్థంగా, వండడానికి బియ్యంలాగే ఉండటం వల్ల బియ్యానికి అత్యంత దగ్గరి చిరుధాన్య ప్రత్యామ్నాయం. మధ్య, దక్షిణ భారతదేశంలో గిరిజన ప్రాంతాలలో పురాతన కాలం నుండి పండిస్తున్నారు.',

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
        'అన్ని శరీర తత్వాలకు (దోషాలకు) అనుకూలం — బ్యాలెన్స్‌గా ఉంటుంది',
        'చల్లని గుణం వేసవిలో, పిత్తం ఎక్కువగా ఉన్నప్పుడు మంచిది',
        'Laghu (తేలిక) గుణం వల్ల మృదువుగా జీర్ణమవుతుంది',
        'జబ్బు నుండి కోలుకునేటప్పుడు తినే ఆహారంలో సంప్రదాయంగా వాడతారు',
      ],
      contraindications: [
        'బ్యాలెన్స్‌గా ఉండటం వల్ల వ్యతిరేక ప్రభావాలు చాలా తక్కువ',
        'ఆంటీన్యూట్రియెంట్లు తగ్గడానికి నానబెట్టడం అవసరం కావచ్చు',
      ],
      classicalReference: 'Bhavaprakasha Nighantu, Dhanya Varga',
    },

    history: {
      originRegion: 'తూర్పు కనుమల ప్రాంతం, భారతదేశం',
      domesticationPeriod: 'పురాతన కాలం (ఖచ్చితమైన కాలం తెలియదు)',
      archaeologicalEvidence:
        'భారతదేశానికి స్వంతమైన ధాన్యం, మధ్య మరియు దక్షిణ భారతదేశంలోని గిరిజన ప్రాంతాల్లో చాలా కాలంగా పండిస్తున్నారు. పురాతత్వ ఆధారాలు తక్కువగా ఉన్నా, జాతి వృక్షశాస్త్ర ఆధారాలు పురాతన సాగును నిరూపిస్తాయి.',
      spreadPattern:
        'భారతదేశంలోని తూర్పు కనుమల ప్రాంతంలో పుట్టి, ప్రధానంగా భారతదేశపు పంటగానే ఉండిపోయింది — గిరిజన, వర్షాధార వ్యవసాయ ప్రాంతాల్లో విస్తారంగా పండిస్తారు.',
      culturalSignificance:
        'మధ్య భారతదేశంలో గిరిజన సమాజాలకు సామలు చాలా ముఖ్యమైన పంట. తమిళనాడులో సామై అన్నం ప్రతిరోజూ తినే చిరుధాన్య వంటకం. నవరాత్రి ఉపవాస సంప్రదాయాలలో కూడా కొన్ని ప్రాంతాల్లో సామలు వాడతారు.',
    },

    cultivation: {
      majorStates: ['Madhya Pradesh', 'Chhattisgarh', 'Karnataka', 'Tamil Nadu', 'Odisha'],
      globalRegions: ['South Asia (primarily India)', 'Southeast Asia (Myanmar, Sri Lanka)'],
      growingSeason: 'ఖరీఫ్ (జూన్-అక్టోబర్)',
      waterRequirement: '300-500mm వర్షపాతం',
      soilType: 'ఇసుక మట్టి నుండి ఎర్ర లేటరైట్ నేలలు; నిస్సారమైన నేలల్లో కూడా బాగా పెరుగుతుంది',
      harvestDays: '75-90 రోజులు',
    },

    cooking: {
      waterRatio: '1:2.5',
      soakingTime: '30 నిమిషాలు',
      cookingTime: '15 నిమిషాలు',
      texture: 'బియ్యంలాగానే ఉంటుంది, కొంచెం అంటుకునే గుణం ఉంటుంది',
      flavorProfile: 'తేలికగా, తటస్థ రుచి',
      bestSubstituteFor: 'బియ్యం (చిరుధాన్యాలన్నింటిలోకీ అత్యంత దగ్గరి ప్రత్యామ్నాయం)',
      tips: [
        '30 నిమిషాలు నానబెట్టి, బాగా కడిగి వండడం మొదలు పెట్టండి',
        'బియ్యం లాగానే వండండి — చిరుధాన్యాలకు మారడానికి ఇది అత్యంత సులభమైన మార్గం',
        'నిమ్మకాయ రైస్, పులావ్, బిర్యానీ — ఇవన్నీ సామలతో అద్భుతంగా చేయవచ్చు',
        'ఇడ్లీ, దోశ బ్యాటర్‌లో మినపప్పుతో కలిపి వాడవచ్చు',
        'తటస్థ రుచి ఉండటం వల్ల కారం, తీపి రెండు రకాల వంటకాల్లో బాగా పనికొస్తుంది',
      ],
    },

    healthBenefits: [
      {
        benefit: 'చాలా ఎక్కువ ఇనుము (ఐరన్)',
        description:
          'సామల్లో 100 గ్రాములకు 9.3mg ఇనుము ఉంటుంది — చిరుధాన్యాలు, ధాన్యాలన్నింటిలోకీ ఇది అత్యధికంలో ఒకటి. ఐరన్ లోపం రక్తహీనతను నివారించడంలో, నియంత్రించడంలో ఇది చాలా విలువైనది.',
        evidenceLevel: 'well-established',
        source: 'ICMR-NIN IFCT 2017',
      },
      {
        benefit: 'జీర్ణ ఆరోగ్యానికి మంచి పీచు వనరు',
        description:
          '100 గ్రాములకు 7.6g పీచు ఉండటం వల్ల ఆరోగ్యకరమైన జీర్ణక్రియ, క్రమబద్ధమైన మలవిసర్జన, కొలెస్ట్రాల్ తగ్గడానికి తోడ్పడవచ్చు.',
        evidenceLevel: 'well-established',
        source: 'ICMR-NIN IFCT 2017',
      },
      {
        benefit: 'తక్కువ GI — షుగర్ ఉన్నవారికి అనుకూలం',
        description:
          'గ్లైసెమిక్ ఇండెక్స్ సుమారు 52 ఉండటం వల్ల గ్లూకోజ్ నెమ్మదిగా, స్థిరంగా విడుదల అవుతుంది — షుగర్ వ్యాధి నియంత్రణకు ఇది అనువైనది.',
        evidenceLevel: 'supported-by-research',
        source: 'International Journal of Food Sciences and Nutrition',
      },
      {
        benefit: 'యాంటీఆక్సిడెంట్లు అధికం',
        description:
          'ఫీనాలిక్ సమ్మేళనాలు, ఫ్లేవనాయిడ్లు ఉన్నాయి — ఇవి యాంటీఆక్సిడెంట్ చర్యకు తోడ్పడవచ్చు, అయితే ఈ ప్రయోజనాలను పూర్తిగా నిర్ధారించడానికి మరిన్ని పరిశోధనలు అవసరం.',
        evidenceLevel: 'preliminary-evidence',
        source: 'Journal of Food Science and Technology',
      },
    ],

    sideEffects: [
      {
        condition: 'నానబెట్టకపోతే ఉబ్బరం',
        description:
          'నానబెట్టకుండా వండితే ఉబ్బరం రావచ్చు. కనీసం 30 నిమిషాలు నానబెట్టడం జీర్ణశక్తి పెరగడానికి తోడ్పడుతుంది.',
        severity: 'mild',
      },
      {
        condition: 'ఆంటీన్యూట్రియెంట్ పదార్థాలు',
        description:
          'సామల్లో ఫైటేట్లు (ఆంటీన్యూట్రియెంట్లు) ఉంటాయి — ఇవి ఖనిజాల శోషణను తగ్గించవచ్చు. నానబెట్టడం, మొలకెత్తించడం, పులియబెట్టడం ద్వారా ఫైటేట్ స్థాయులు చాలా తగ్గుతాయి.',
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
