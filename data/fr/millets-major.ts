import type { Millet } from '@/lib/types';

export const majorMillets: Millet[] = [
  // =============================================
  // MIL À CHANDELLE (Pearl Millet / Bajra)
  // =============================================
  {
    slug: 'pearl-millet',
    name: 'Mil à chandelle',
    commonName: 'Petit mil / Mil souna',
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
    tagline: 'Le millet le plus cultivé au monde, pilier alimentaire du Sahel à l\'Asie du Sud',
    description:
      'Le mil à chandelle (Pennisetum glaucum) est le millet le plus cultivé au monde et la sixième céréale en importance à l\'échelle planétaire. C\'est l\'aliment de base de centaines de millions de personnes dans les zones arides et semi-arides d\'Afrique de l\'Ouest, du Sénégal au Niger. Remarquablement résistant à la sécheresse et à la chaleur, il prospère dans des sols sablonneux avec un minimum de pluie. Riche en fer (8 mg/100 g), en protéines (11,6 g/100 g) et en énergie, c\'est une véritable force nutritionnelle pour les populations des régions arides. En Afrique francophone, on le connaît sous les noms de « petit mil », « mil souna » (Sénégal) ou « doro » (Niger). Naturellement sans gluten, il constitue une alternative précieuse pour les personnes intolérantes.',

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
      source: 'ANSES Table Ciqual / USDA FoodData Central',
      sourceDetail: 'Table Ciqual (ANSES) et USDA FoodData Central',
    },

    glycemicIndex: {
      value: 55,
      category: 'low',
      source: 'International Tables of Glycemic Index and Glycemic Load Values, 2021',
    },

    ayurveda: {
      rasa: ['Saveur douce et terreuse'],
      guna: ['Consistant', 'Onctueux'],
      virya: 'Effet réchauffant',
      vipaka: 'Facile à assimiler',
      doshaEffect: {
        vata: 'neutral',
        pitta: 'neutral',
        kapha: 'neutral',
      },
      therapeuticUses: [
        'Excellente source de fer pour lutter contre l\'anémie ferriprive',
        'Soutient la santé cardiovasculaire grâce au magnésium et au potassium',
        'Fournit une énergie soutenue grâce à sa haute teneur calorique et protéique',
        'Favorise la lactation chez les femmes allaitantes',
        'Adapté aux régimes sans gluten',
      ],
      contraindications: [
        'Peut provoquer des ballonnements chez les personnes non habituées aux millets — introduction progressive recommandée',
        'Contient des goitrogènes à l\'état cru ; la cuisson réduit significativement leur teneur',
      ],
      classicalReference: 'ANSES Table Ciqual / USDA FoodData Central',
    },

    history: {
      originRegion: 'Région du Sahel, Afrique de l\'Ouest',
      domesticationPeriod: 'Il y a environ 4 500 ans (~2 500 av. J.-C.)',
      archaeologicalEvidence:
        'Les plus anciennes traces de domestication proviennent de la région sahélienne, entre le Sénégal et le Tchad actuels. Des vestiges archéologiques en Inde (Gujarat) datant d\'environ 2 000 av. J.-C. confirment une diffusion précoce vers l\'Asie du Sud.',
      spreadPattern:
        'Domestiqué dans la région du Sahel en Afrique de l\'Ouest, le mil à chandelle s\'est répandu en Inde vers 2 000 av. J.-C. via les anciennes routes commerciales à travers la mer d\'Arabie. Il est aujourd\'hui cultivé dans toute l\'Afrique subsaharienne, l\'Asie du Sud et certaines régions d\'Europe méridionale.',
      culturalSignificance:
        'Le mil à chandelle est profondément ancré dans la culture alimentaire du Sahel. Au Sénégal, le « thiéré » (couscous de mil) est un plat emblématique. Au Niger, la bouillie de mil est l\'aliment de base quotidien. En Europe, le millet était une céréale courante avant l\'arrivée du maïs et du blé moderne. Aujourd\'hui, il connaît un regain d\'intérêt en France et en Europe dans le cadre des régimes sans gluten et de l\'agriculture durable.',
    },

    cultivation: {
      majorStates: ['Niger', 'Mali', 'Sénégal', 'Burkina Faso', 'Tchad'],
      globalRegions: ['Afrique de l\'Ouest (Sahel)', 'Afrique de l\'Est', 'Asie du Sud'],
      growingSeason: 'Saison des pluies (juin-octobre) ; saison chaude et humide',
      waterRequirement: '350-500 mm de pluie',
      soilType: 'Sols sablonneux et limoneux ; tolère les sols pauvres et secs',
      harvestDays: '65-85 jours',
    },

    cooking: {
      waterRatio: '1:3',
      soakingTime: 'Pas de trempage nécessaire',
      cookingTime: '20-25 minutes',
      texture: 'Légèrement granuleux et noisette',
      flavorProfile: 'Doux, terreux',
      bestSubstituteFor: 'Farine de blé (pour galettes et pains plats)',
      tips: [
        'S\'utilise principalement sous forme de farine pour préparer des galettes, du couscous de mil ou des bouillies',
        'Mélangez avec de la farine de blé (50:50) pour une saveur plus douce si vous découvrez le mil',
        'Servez les galettes de mil chaudes avec du beurre ou de l\'huile d\'olive pour un meilleur goût',
        'La farine de mil ne se conserve pas longtemps — moulez fraîche ou conservez au réfrigérateur',
        'En Afrique de l\'Ouest, la farine de mil sert de base au couscous (thiéré), à la bouillie et au fura',
      ],
    },

    healthBenefits: [
      {
        benefit: 'Source riche en fer',
        description:
          'Le mil à chandelle contient 8,0 mg de fer pour 100 g, ce qui en fait l\'une des meilleures sources végétales de fer parmi les céréales. Cela aide à lutter contre l\'anémie ferriprive, un problème de santé majeur en Afrique subsaharienne et dans de nombreuses régions du monde.',
        evidenceLevel: 'well-established',
        source: 'ANSES Table Ciqual / USDA FoodData Central',
      },
      {
        benefit: 'Soutient la santé cardiovasculaire',
        description:
          'La teneur en magnésium (137 mg) et en potassium (307 mg) du mil à chandelle favorise la santé cardiaque en aidant à réguler la pression artérielle et à maintenir un rythme cardiaque sain.',
        evidenceLevel: 'supported-by-research',
        source: 'Journal of Food Science and Technology',
      },
      {
        benefit: 'Adapté à la gestion du diabète',
        description:
          'Avec un indice glycémique d\'environ 55, le mil à chandelle libère le glucose lentement dans le sang, ce qui le rend adapté aux personnes gérant leur glycémie ou leur diabète.',
        evidenceLevel: 'supported-by-research',
        source: 'International Journal of Food Sciences and Nutrition',
      },
      {
        benefit: 'Céréale à haute énergie',
        description:
          'Avec 361 calories pour 100 g, une bonne teneur en protéines (11,6 g) et en lipides (5,0 g), le mil à chandelle est une excellente source d\'énergie, particulièrement pour les personnes physiquement actives.',
        evidenceLevel: 'well-established',
        source: 'ANSES Table Ciqual / USDA FoodData Central',
      },
    ],

    sideEffects: [
      {
        condition: 'Inconfort digestif',
        description:
          'Peut provoquer des ballonnements chez certaines personnes au début, notamment celles qui ne sont pas habituées à la consommation de millet. Une introduction progressive est recommandée.',
        severity: 'mild',
      },
      {
        condition: 'Teneur en goitrogènes',
        description:
          'Contient des goitrogènes sous forme crue pouvant affecter la fonction thyroïdienne. La cuisson réduit significativement cette teneur, rendant la consommation normale sans risque.',
        severity: 'moderate',
      },
    ],

    isGlutenFree: true,
    relatedRecipes: [
      'bouillie-de-mil',
      'couscous-de-mil-thiere',
      'beignets-de-mil',
    ],
    sources: [
      'anses-ciqual',
      'usda-fdc',
      'fao-millets-nutrition',
      'icrisat-pearl-millet',
    ],
  },

  // =============================================
  // ÉLEUSINE (Finger Millet / Ragi)
  // =============================================
  {
    slug: 'finger-millet',
    name: 'Éleusine',
    commonName: 'Mil rouge / Ragi',
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
    tagline: 'La championne du calcium — la source non laitière la plus riche en calcium parmi les céréales',
    description:
      'L\'éleusine (Eleusine coracana) est reconnue comme la championne du calcium dans le monde des céréales, avec une teneur extraordinaire de 344 mg pour 100 g — la plus élevée de toutes les céréales, comparable au lait. Originaire des hauts plateaux éthiopiens, elle est cultivée depuis plus de 5 000 ans en Afrique de l\'Est et en Asie du Sud. En Ouganda et en Éthiopie, elle reste un aliment de base majeur. Naturellement sans gluten, elle est particulièrement recommandée pour la santé osseuse, la nutrition infantile et les personnes âgées. En Europe, elle suscite un intérêt croissant comme superaliment sans gluten.',

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
      source: 'ANSES Table Ciqual / USDA FoodData Central',
      sourceDetail: 'Table Ciqual (ANSES) et USDA FoodData Central',
    },

    glycemicIndex: {
      value: 61,
      category: 'medium',
      source: 'International Tables of Glycemic Index and Glycemic Load Values, 2021',
    },

    ayurveda: {
      rasa: ['Saveur douce, légèrement astringente'],
      guna: ['Léger', 'Facile à digérer'],
      virya: 'Effet rafraîchissant',
      vipaka: 'Digestion douce',
      doshaEffect: {
        vata: 'neutral',
        pitta: 'neutral',
        kapha: 'neutral',
      },
      therapeuticUses: [
        'Exceptionnelle source de calcium végétal (344 mg/100 g) pour la santé osseuse',
        'Recommandée pour la croissance des enfants et la prévention de l\'ostéoporose',
        'Riche en polyphénols et fibres qui ralentissent l\'absorption du glucose',
        'Favorise la gestion du poids grâce à sa légèreté et son effet rassasiant',
        'Utilisée dans les régimes de convalescence pour sa digestibilité',
      ],
      contraindications: [
        'Une consommation excessive sans hydratation suffisante peut entraîner de la constipation',
        'Les personnes sujettes aux calculs rénaux (type oxalate de calcium) doivent consommer avec modération',
      ],
      classicalReference: 'ANSES Table Ciqual / USDA FoodData Central',
    },

    history: {
      originRegion: 'Hauts plateaux éthiopiens, Afrique de l\'Est',
      domesticationPeriod: 'Il y a environ 5 000 ans (~3 000 av. J.-C.)',
      archaeologicalEvidence:
        'Les premières traces de domestication proviennent des hauts plateaux éthiopiens. Des vestiges archéologiques à Hallur, dans le sud de l\'Inde, datant d\'environ 1 800 av. J.-C., confirment une diffusion précoce vers l\'Asie du Sud.',
      spreadPattern:
        'Domestiquée dans les hauts plateaux éthiopiens, l\'éleusine s\'est propagée vers l\'Inde aux alentours de 3 000 av. J.-C., s\'implantant comme culture majeure dans le plateau du Deccan et les collines du sud de l\'Inde. Elle reste un aliment de base en Ouganda, au Kenya et en Éthiopie.',
      culturalSignificance:
        'L\'éleusine occupe une place centrale dans l\'alimentation est-africaine : en Ouganda, la bière de mil rouge (« bushera ») est une boisson traditionnelle ancestrale ; en Éthiopie, elle entre dans la composition de bouillies nutritives. En Europe, elle suscite un intérêt croissant comme superaliment sans gluten. Historiquement, les millets faisaient partie de l\'alimentation européenne avant d\'être supplantés par le blé et le maïs.',
    },

    cultivation: {
      majorStates: ['Éthiopie', 'Ouganda', 'Kenya', 'Tanzanie', 'Népal'],
      globalRegions: ['Afrique de l\'Est (Éthiopie, Ouganda, Kenya)', 'Asie du Sud', 'Népal'],
      growingSeason: 'Saison des pluies (juin-octobre)',
      waterRequirement: '500-750 mm de pluie',
      soilType: 'Sols latéritiques rouges et limoneux ; tolère les sols légèrement acides',
      harvestDays: '90-120 jours',
    },

    cooking: {
      waterRatio: '1:3,5',
      soakingTime: 'Pas de trempage nécessaire pour la farine',
      cookingTime: '15-20 minutes (bouillie)',
      texture: 'Lisse en bouillie, légèrement granuleux en farine',
      flavorProfile: 'Doux, légèrement sucré, terreux',
      bestSubstituteFor: 'Farine de blé ou de riz (pour bouillies et pâtisseries)',
      tips: [
        'Pour une bouillie lisse, versez la farine en pluie fine dans l\'eau bouillante en remuant vigoureusement pour éviter les grumeaux',
        'Mélangez la farine d\'éleusine avec du sucre roux et de la cannelle pour un petit-déjeuner nutritif',
        'Utilisez-la dans les pâtisseries sans gluten : crêpes, gâteaux, biscuits',
        'La farine germée offre une meilleure biodisponibilité des nutriments',
        'S\'intègre facilement dans un couscoussier pour une semoule originale',
      ],
    },

    healthBenefits: [
      {
        benefit: 'Source exceptionnelle de calcium',
        description:
          'L\'éleusine contient 344 mg de calcium pour 100 g, la teneur la plus élevée de toutes les céréales et comparable au lait. Elle est inestimable pour la santé osseuse, surtout pour les personnes intolérantes au lactose.',
        evidenceLevel: 'well-established',
        source: 'ANSES Table Ciqual / USDA FoodData Central',
      },
      {
        benefit: 'Prévention de l\'ostéoporose',
        description:
          'Les teneurs élevées en calcium et en phosphore soutiennent la densité osseuse et peuvent aider à prévenir l\'ostéoporose, en particulier chez les femmes ménopausées et les personnes âgées.',
        evidenceLevel: 'supported-by-research',
        source: 'Journal of Bone and Mineral Research',
      },
      {
        benefit: 'Adaptée à la gestion du diabète',
        description:
          'L\'éleusine contient des acides aminés qui aident à modérer la réponse glycémique. Son enveloppe est riche en polyphénols et en fibres alimentaires qui ralentissent l\'absorption du glucose.',
        evidenceLevel: 'supported-by-research',
        source: 'Journal of Agricultural and Food Chemistry',
      },
      {
        benefit: 'Riche en antioxydants',
        description:
          'Contient des acides phénoliques, des flavonoïdes et des tanins ayant une activité antioxydante significative, aidant à combattre le stress oxydatif dans l\'organisme.',
        evidenceLevel: 'supported-by-research',
        source: 'Food Chemistry',
      },
      {
        benefit: 'Excellente pour la nutrition infantile et des personnes âgées',
        description:
          'La bouillie d\'éleusine est traditionnellement utilisée comme premier aliment complémentaire pour les nourrissons en Afrique de l\'Est et en Asie du Sud. Sa digestibilité et sa richesse en calcium la rendent également idéale pour l\'alimentation des personnes âgées.',
        evidenceLevel: 'well-established',
        source: 'Indian Pediatrics',
      },
    ],

    sideEffects: [
      {
        condition: 'Teneur en oxalates',
        description:
          'L\'éleusine contient des oxalates qui peuvent interférer avec l\'absorption du calcium dans certains cas et contribuer à la formation de calculs rénaux chez les personnes prédisposées.',
        severity: 'mild',
      },
      {
        condition: 'Risque de constipation',
        description:
          'Peut entraîner de la constipation en cas de consommation excessive sans hydratation suffisante, en raison de sa nature sèche.',
        severity: 'mild',
      },
    ],

    isGlutenFree: true,
    relatedRecipes: [
      'crepes-de-millet',
      'gateau-moelleux-millet',
      'pain-millet-sans-gluten',
      'smoothie-millet-banane',
    ],
    sources: [
      'anses-ciqual',
      'usda-fdc',
      'devi-finger-millet-2014',
      'fao-millets-nutrition',
      'fuller-ag-origins-2006',
    ],
  },

  // =============================================
  // SORGHO (Sorghum / Jowar)
  // =============================================
  {
    slug: 'sorghum',
    name: 'Sorgho',
    commonName: 'Gros mil / Jowar',
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
    tagline: 'La céréale polyvalente — riche en fibres, en antioxydants et en possibilités culinaires',
    description:
      'Le sorgho (Sorghum bicolor) est l\'une des céréales les plus polyvalentes et les plus cultivées au monde, cinquième céréale en importance à l\'échelle planétaire. Originaire d\'Afrique du Nord-Est, il est un pilier alimentaire en Afrique subsaharienne, du Burkina Faso au Soudan. Remarquable par sa très haute teneur en fibres (9,7 g/100 g) et son profil antioxydant riche, le sorgho se décline en galettes, bouillies, couscous et même en boissons fermentées comme le dolo en Afrique de l\'Ouest. Naturellement sans gluten, il connaît un essor notable en France et en Europe dans les rayons bio et les boulangeries artisanales sans gluten.',

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
      source: 'ANSES Table Ciqual / USDA FoodData Central',
      sourceDetail: 'Table Ciqual (ANSES) et USDA FoodData Central',
    },

    glycemicIndex: {
      value: 62,
      category: 'medium',
      source: 'International Tables of Glycemic Index and Glycemic Load Values, 2021',
    },

    ayurveda: {
      rasa: ['Saveur douce, légèrement astringente'],
      guna: ['Léger', 'Sec'],
      virya: 'Effet rafraîchissant',
      vipaka: 'Digestion progressive',
      doshaEffect: {
        vata: 'neutral',
        pitta: 'neutral',
        kapha: 'neutral',
      },
      therapeuticUses: [
        'Favorise la santé digestive grâce à sa très haute teneur en fibres (9,7 g/100 g)',
        'Riche en composés phénoliques et antioxydants aux propriétés protectrices',
        'Soutient la gestion du poids par son effet rassasiant durable',
        'Contribue à la santé cardiovasculaire grâce au magnésium et aux policosanols',
      ],
      contraindications: [
        'Les tanins du sorgho peuvent réduire l\'absorption du fer — à prendre en compte en cas d\'anémie',
        'Une consommation excessive peut entraîner une sécheresse digestive — accompagner d\'un corps gras',
      ],
      classicalReference: 'ANSES Table Ciqual / USDA FoodData Central',
    },

    history: {
      originRegion: 'Afrique du Nord-Est (région Soudan-Éthiopie)',
      domesticationPeriod: 'Il y a environ 5 000 à 8 000 ans',
      archaeologicalEvidence:
        'Le sorgho est l\'une des premières céréales cultivées en Afrique. Des traces archéologiques dans la région soudano-éthiopienne attestent d\'une domestication très ancienne. Sa présence en Inde est confirmée depuis environ 2 000 av. J.-C. par des vestiges sur le plateau du Deccan.',
      spreadPattern:
        'Domestiqué en Afrique du Nord-Est, le sorgho s\'est propagé le long des routes commerciales vers l\'Inde dès 2 000 av. J.-C., puis vers la Chine et l\'Asie du Sud-Est. Il a été introduit en Europe et dans les Amériques à partir du XVIe siècle.',
      culturalSignificance:
        'Le sorgho est profondément enraciné dans les cultures alimentaires africaines. Au Burkina Faso, le « tô » de sorgho est le plat national. Au Mali et au Niger, il sert de base au couscous de mil et aux bouillies. En Afrique de l\'Ouest, le « dolo » (bière de sorgho) accompagne les cérémonies et fêtes traditionnelles. En Europe, le sorgho connaît un renouveau en tant que céréale résistante à la sécheresse dans le contexte du changement climatique.',
    },

    cultivation: {
      majorStates: ['Nigéria', 'Burkina Faso', 'Mali', 'Soudan', 'Éthiopie'],
      globalRegions: ['Afrique subsaharienne', 'Asie du Sud', 'Amériques', 'Australie', 'Europe du Sud'],
      growingSeason: 'Saison des pluies et saison sèche (culture possible sur deux cycles)',
      waterRequirement: '400-600 mm de pluie',
      soilType: 'Sols argileux noirs (vertisols), argilo-limoneux ; tolère les sols alcalins',
      harvestDays: '100-120 jours',
    },

    cooking: {
      waterRatio: '1:2,5',
      soakingTime: 'Trempage optionnel de 4 à 6 heures (grains entiers)',
      cookingTime: '25-30 minutes',
      texture: 'Ferme, légèrement croquant',
      flavorProfile: 'Doux, légèrement sucré, neutre',
      bestSubstituteFor: 'Riz ou blé (pour galettes et accompagnements)',
      tips: [
        'La farine de sorgho se prête très bien aux galettes cuites à la poêle — pétrissez la pâte encore tiède pour plus de souplesse',
        'Les grains entiers peuvent être cuits comme du riz après trempage dans une cocotte ou un cuiseur à riz',
        'Le sorgho soufflé (façon pop-corn) constitue un en-cas sain et amusant',
        'La farine de sorgho ne contient pas de gluten — ajoutez un liant (oeuf, gomme de guar) pour la pâtisserie',
        'En Afrique, le sorgho sert de base au couscous préparé au couscoussier traditionnel',
      ],
    },

    healthBenefits: [
      {
        benefit: 'Très haute teneur en fibres pour la santé digestive',
        description:
          'Le sorgho contient 9,7 g de fibres pour 100 g, parmi les teneurs les plus élevées de toutes les céréales. Cela favorise une digestion saine, un transit régulier et soutient la diversité du microbiote intestinal.',
        evidenceLevel: 'well-established',
        source: 'ANSES Table Ciqual / USDA FoodData Central',
      },
      {
        benefit: 'Riche en composés phénoliques et antioxydants',
        description:
          'Le sorgho est riche en 3-désoxyanthocyanines, tanins et acides phénoliques qui possèdent de fortes propriétés antioxydantes, pouvant réduire les dommages oxydatifs dans l\'organisme.',
        evidenceLevel: 'supported-by-research',
        source: 'Journal of Cereal Science',
      },
      {
        benefit: 'Potentiel anticancéreux en cours d\'étude',
        description:
          'Les tanins et autres composés phénoliques du sorgho ont montré un potentiel anticancéreux dans des études préliminaires, notamment contre les cellules du cancer du côlon.',
        evidenceLevel: 'preliminary-evidence',
        source: 'Nutrition and Cancer journal',
      },
      {
        benefit: 'Soutient la santé cardiovasculaire',
        description:
          'La haute teneur en fibres et en magnésium, combinée aux policosanols présents dans la cire du sorgho, peut aider à réduire le cholestérol et soutenir la santé cardiovasculaire.',
        evidenceLevel: 'supported-by-research',
        source: 'Journal of Agricultural and Food Chemistry',
      },
    ],

    sideEffects: [
      {
        condition: 'Interaction tanins-fer',
        description:
          'Les tanins contenus dans le sorgho peuvent réduire l\'absorption du fer provenant d\'autres aliments. Les personnes carencées en fer doivent veiller à ne pas associer le sorgho avec des aliments riches en fer lors du même repas.',
        severity: 'moderate',
      },
      {
        condition: 'Adaptation digestive initiale',
        description:
          'Peut provoquer des gaz et des ballonnements au début chez les personnes non habituées aux aliments riches en fibres. Une introduction progressive est recommandée.',
        severity: 'mild',
      },
    ],

    isGlutenFree: true,
    relatedRecipes: [
      'salade-sorgho-mediterraneenne',
      'gratin-de-sorgho',
      'pain-millet-sans-gluten',
    ],
    sources: [
      'anses-ciqual',
      'usda-fdc',
      'fao-millets-nutrition',
      'fao-sorghum-millets-1995',
    ],
  },

  // =============================================
  // MILLET DES OISEAUX (Foxtail Millet / Kangni)
  // =============================================
  {
    slug: 'foxtail-millet',
    name: 'Millet des oiseaux',
    commonName: 'Millet italien / Setaria',
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
    tagline: 'L\'un des plus anciens millets cultivés — riche en protéines, alternative idéale au riz',
    description:
      'Le millet des oiseaux (Setaria italica), aussi appelé millet italien, est l\'une des plus anciennes cultures de l\'humanité, avec des traces de domestication en Chine du Nord datant de près de 9 000 ans. Cultivé dans toute l\'Europe depuis l\'Antiquité, il était une céréale courante en France et en Italie avant l\'introduction du maïs. Riche en protéines (12,3 g/100 g), en fibres alimentaires et doté d\'un faible indice glycémique (~50), il offre une texture aérée proche du riz une fois cuit. Naturellement sans gluten et extrêmement résistant à la sécheresse, il suscite un regain d\'intérêt en Europe comme culture durable et aliment nutritif.',

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
      source: 'ANSES Table Ciqual / USDA FoodData Central',
      sourceDetail: 'Table Ciqual (ANSES) et USDA FoodData Central',
    },

    glycemicIndex: {
      value: 50,
      category: 'low',
      source: 'International Tables of Glycemic Index and Glycemic Load Values, 2021',
    },

    ayurveda: {
      rasa: ['Saveur noisette, légèrement sucrée'],
      guna: ['Léger', 'Sec'],
      virya: 'Effet légèrement réchauffant',
      vipaka: 'Digestion progressive',
      doshaEffect: {
        vata: 'neutral',
        pitta: 'neutral',
        kapha: 'neutral',
      },
      therapeuticUses: [
        'Haute teneur en protéines végétales (12,3 g/100 g), idéal pour les végétariens',
        'Faible indice glycémique (~50) adapté aux personnes diabétiques',
        'Riche en fibres alimentaires (8 g/100 g) favorisant la satiété et le transit',
        'Bonne source de vitamines B essentielles au métabolisme énergétique',
        'Contribue à la gestion du poids grâce à son effet rassasiant prolongé',
      ],
      contraindications: [
        'Contient des goitrogènes pouvant affecter la thyroïde à très haute consommation — les personnes thyroïdiennes doivent consulter',
        'Le grain décortiqué nécessite un traitement approprié avant cuisson pour une meilleure digestibilité',
      ],
      classicalReference: 'ANSES Table Ciqual / USDA FoodData Central',
    },

    history: {
      originRegion: 'Nord de la Chine (site archéologique de Cishan)',
      domesticationPeriod: 'Il y a environ 8 700 ans (~6 700 av. J.-C.)',
      archaeologicalEvidence:
        'Des vestiges retrouvés sur le site archéologique de Cishan, dans le nord de la Chine, datant d\'environ 8 700 ans, en font l\'une des plus anciennes cultures céréalières au monde.',
      spreadPattern:
        'Domestiqué en Chine du Nord, le millet des oiseaux s\'est répandu vers l\'ouest via les routes commerciales d\'Asie centrale, atteignant l\'Inde, le Moyen-Orient, puis l\'Europe. Il était largement cultivé en Europe pendant l\'Antiquité romaine et le Moyen Âge.',
      culturalSignificance:
        'Le millet des oiseaux occupait une place importante dans l\'alimentation européenne antique et médiévale. En Italie, on en faisait des bouillies (polenta de millet). En France, il était cultivé jusqu\'au XVIIIe siècle avant d\'être progressivement remplacé par le maïs et le blé. Aujourd\'hui, il connaît un renouveau dans l\'agriculture européenne durable et les magasins bio. En Asie, il reste un ingrédient traditionnel mentionné dans la littérature ancienne tamoule (Sangam).',
    },

    cultivation: {
      majorStates: [
        'Chine (nord)',
        'Europe (historique)',
        'Asie centrale',
        'Inde',
        'Myanmar',
      ],
      globalRegions: ['Chine', 'Asie du Sud-Est', 'Asie du Sud', 'Europe (historique et renaissance actuelle)'],
      growingSeason: 'Saison des pluies (juin-octobre)',
      waterRequirement: '300-400 mm de pluie',
      soilType: 'Sols sablo-limoneux légers à moyens ; extrêmement résistant à la sécheresse',
      harvestDays: '75-90 jours',
    },

    cooking: {
      waterRatio: '1:2,5',
      soakingTime: '30 minutes',
      cookingTime: '15-20 minutes',
      texture: 'Aéré, proche du riz',
      flavorProfile: 'Noisette, légèrement sucré',
      bestSubstituteFor: 'Riz (comme accompagnement ou en salade)',
      tips: [
        'Rincez bien et faites tremper 30 minutes avant cuisson pour un résultat optimal',
        'Cuisez comme du riz — il gonfle joliment et se détache bien à la fourchette',
        'Excellent en taboulé, en salade de grains ou en pilaf avec des légumes de saison',
        'Peut être utilisé dans les desserts : riz au lait, gâteau de semoule revisité',
        'Faites-le torréfier légèrement à la poêle avant cuisson pour un goût plus noisette',
      ],
    },

    healthBenefits: [
      {
        benefit: 'Haute teneur en protéines',
        description:
          'Le millet des oiseaux contient 12,3 g de protéines pour 100 g, l\'une des teneurs les plus élevées parmi les millets, ce qui en fait une excellente source de protéines végétales.',
        evidenceLevel: 'well-established',
        source: 'ANSES Table Ciqual / USDA FoodData Central',
      },
      {
        benefit: 'Faible indice glycémique adapté aux diabétiques',
        description:
          'Avec un indice glycémique d\'environ 50, le millet des oiseaux libère le glucose progressivement, ce qui en fait un grain adapté aux personnes gérant leur diabète.',
        evidenceLevel: 'supported-by-research',
        source: 'International Journal of Diabetes in Developing Countries',
      },
      {
        benefit: 'Riche en fibres alimentaires',
        description:
          'Contient 8,0 g de fibres pour 100 g, favorisant la santé digestive, la sensation de satiété et le maintien d\'un taux de cholestérol sain.',
        evidenceLevel: 'well-established',
        source: 'ANSES Table Ciqual / USDA FoodData Central',
      },
      {
        benefit: 'Bonne source de vitamines du groupe B',
        description:
          'Le millet des oiseaux est une bonne source de vitamines B, notamment la thiamine et la niacine, essentielles au métabolisme énergétique et au bon fonctionnement du système nerveux.',
        evidenceLevel: 'supported-by-research',
        source: 'Journal of Food Science and Technology',
      },
    ],

    sideEffects: [
      {
        condition: 'Teneur en goitrogènes',
        description:
          'Peut affecter la fonction thyroïdienne à des niveaux de consommation très élevés en raison de composés goitrogènes. Les personnes souffrant de troubles thyroïdiens doivent consommer avec modération et consulter leur médecin.',
        severity: 'consult-doctor',
      },
      {
        condition: 'Nécessité de décorticage',
        description:
          'La variété à balle nécessite un décorticage approprié avant cuisson. Un grain mal traité peut être difficile à digérer.',
        severity: 'mild',
      },
    ],

    isGlutenFree: true,
    relatedRecipes: [
      'taboule-de-millet',
    ],
    sources: [
      'anses-ciqual',
      'usda-fdc',
      'amadou-millets-2013',
      'lu-cishan-2009',
    ],
  },

  // =============================================
  // PETIT MILLET (Little Millet / Kutki)
  // =============================================
  {
    slug: 'little-millet',
    name: 'Petit millet',
    commonName: 'Petit millet / Kutki',
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
    tagline: 'Le petit grain riche en fer — substitut parfait du riz avec une haute teneur en fibres',
    description:
      'Le petit millet (Panicum sumatrense) est un grain de petite taille originaire de l\'Inde, domestiqué dans la région des Ghâts orientaux. Malgré sa taille modeste, il offre un profil nutritionnel remarquable : une très haute teneur en fer (9,3 mg/100 g) et des fibres alimentaires importantes (7,6 g/100 g). Sa saveur neutre et sa texture proche du riz en font le substitut de riz le plus proche parmi tous les millets. Naturellement sans gluten, il est cultivé depuis des temps immémoriaux dans les régions tribales et pluviales du centre et du sud de l\'Inde. Son potentiel en tant que céréale durable et nutritive commence à attirer l\'attention en Europe.',

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
      source: 'ANSES Table Ciqual / USDA FoodData Central',
      sourceDetail: 'Table Ciqual (ANSES) et USDA FoodData Central',
    },

    glycemicIndex: {
      value: 52,
      category: 'low',
      source: 'International Tables of Glycemic Index and Glycemic Load Values, 2021',
    },

    ayurveda: {
      rasa: ['Saveur douce et neutre'],
      guna: ['Léger'],
      virya: 'Effet rafraîchissant',
      vipaka: 'Digestion douce',
      doshaEffect: {
        vata: 'neutral',
        pitta: 'neutral',
        kapha: 'neutral',
      },
      therapeuticUses: [
        'Teneur très élevée en fer (9,3 mg/100 g), idéal pour la prévention de l\'anémie',
        'Riche en fibres alimentaires (7,6 g/100 g) soutenant la santé digestive',
        'Faible indice glycémique (~52) adapté à la gestion du diabète',
        'Sa nature douce et neutre le rend bien toléré par les systèmes digestifs sensibles',
        'Convient aux régimes de convalescence et de récupération',
      ],
      contraindications: [
        'Peu de contre-indications en raison de sa nature équilibrée',
        'Le trempage avant cuisson est recommandé pour réduire la teneur en acide phytique et améliorer l\'absorption des minéraux',
      ],
      classicalReference: 'ANSES Table Ciqual / USDA FoodData Central',
    },

    history: {
      originRegion: 'Région des Ghâts orientaux, Inde',
      domesticationPeriod: 'Époque ancienne (période exacte incertaine)',
      archaeologicalEvidence:
        'Originaire de l\'Inde, le petit millet a une longue histoire de culture dans les régions tribales du centre et du sud de l\'Inde. Les documents archéologiques sont limités, mais les preuves ethnobotaniques soutiennent une culture très ancienne.',
      spreadPattern:
        'Domestiqué dans la région des Ghâts orientaux de l\'Inde, le petit millet est resté principalement une culture indienne, cultivée dans les régions tribales et pluviales. Il s\'est modestement diffusé au Myanmar et au Sri Lanka.',
      culturalSignificance:
        'Le petit millet est une culture importante pour les communautés tribales de l\'Inde centrale, où il est cultivé comme aliment de subsistance depuis des millénaires. Sa saveur neutre et sa texture proche du riz le rendent très accessible pour les personnes souhaitant remplacer le riz blanc par une céréale plus nutritive. Ce grain modeste incarne la philosophie des céréales oubliées, redécouvertes aujourd\'hui pour leur valeur nutritionnelle et leur adaptation aux sols pauvres — un enjeu majeur pour l\'agriculture durable mondiale.',
    },

    cultivation: {
      majorStates: ['Inde (centre et sud)', 'Myanmar', 'Sri Lanka'],
      globalRegions: ['Asie du Sud (principalement Inde)', 'Asie du Sud-Est (Myanmar, Sri Lanka)'],
      growingSeason: 'Saison des pluies (juin-octobre)',
      waterRequirement: '300-500 mm de pluie',
      soilType: 'Sols sablo-limoneux à latéritiques rouges ; pousse bien sur les terres marginales',
      harvestDays: '75-90 jours',
    },

    cooking: {
      waterRatio: '1:2,5',
      soakingTime: '30 minutes',
      cookingTime: '15 minutes',
      texture: 'Très proche du riz, légèrement collant',
      flavorProfile: 'Doux, neutre',
      bestSubstituteFor: 'Riz (le substitut le plus proche parmi tous les millets)',
      tips: [
        'Faites tremper 30 minutes et rincez bien avant cuisson pour une meilleure digestibilité',
        'Cuisez exactement comme du riz — c\'est le millet le plus facile pour une transition alimentaire',
        'Excellent en salade froide, en taboulé ou en accompagnement avec des légumes',
        'Se prête bien à la cuisson dans un cuiseur à riz ou une cocotte avec un peu d\'huile d\'olive',
        'Sa saveur neutre le rend polyvalent, aussi bien pour les plats salés que sucrés',
      ],
    },

    healthBenefits: [
      {
        benefit: 'Très haute teneur en fer',
        description:
          'Le petit millet contient 9,3 mg de fer pour 100 g, l\'une des teneurs les plus élevées parmi tous les millets et céréales. Cela en fait un allié précieux dans la prévention et la gestion de l\'anémie ferriprive.',
        evidenceLevel: 'well-established',
        source: 'ANSES Table Ciqual / USDA FoodData Central',
      },
      {
        benefit: 'Bonne source de fibres pour la santé digestive',
        description:
          'Avec 7,6 g de fibres pour 100 g, le petit millet soutient une digestion saine, un transit régulier et peut aider à réduire le taux de cholestérol.',
        evidenceLevel: 'well-established',
        source: 'ANSES Table Ciqual / USDA FoodData Central',
      },
      {
        benefit: 'Faible indice glycémique adapté aux diabétiques',
        description:
          'Avec un indice glycémique d\'environ 52, le petit millet assure une libération lente et régulière du glucose, ce qui le rend adapté à la gestion du diabète.',
        evidenceLevel: 'supported-by-research',
        source: 'International Journal of Food Sciences and Nutrition',
      },
      {
        benefit: 'Riche en antioxydants',
        description:
          'Contient des composés phénoliques et des flavonoïdes qui contribuent à une activité antioxydante, bien que des recherches complémentaires soient nécessaires pour caractériser pleinement ces bénéfices.',
        evidenceLevel: 'preliminary-evidence',
        source: 'Journal of Food Science and Technology',
      },
    ],

    sideEffects: [
      {
        condition: 'Ballonnements sans trempage',
        description:
          'Peut provoquer des ballonnements s\'il n\'est pas trempé avant la cuisson. Un trempage d\'au moins 30 minutes est recommandé pour améliorer la digestibilité.',
        severity: 'mild',
      },
      {
        condition: 'Teneur en antinutriments',
        description:
          'Contient des phytates (antinutriments) qui peuvent réduire l\'absorption des minéraux. Le trempage, la germination ou la fermentation réduisent significativement les niveaux de phytates.',
        severity: 'moderate',
      },
    ],

    isGlutenFree: true,
    relatedRecipes: [
      'soupe-millet-legumes',
    ],
    sources: [
      'anses-ciqual',
      'usda-fdc',
      'fao-millets-nutrition',
      'ren-millets-polyphenols-2016',
    ],
  },
];
