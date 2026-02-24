import type { Millet } from '@/lib/types';

export const minorMillets: Millet[] = [
  // =============================================
  // MILLET KODO
  // =============================================
  {
    slug: 'kodo-millet',
    name: 'Millet kodo',
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
    tagline: 'Le millet le moins calorique, riche en antioxydants et en fibres',
    description:
      'Le millet kodo (Paspalum scrobiculatum) est une graine robuste et rustique originaire du sous-continent indien, cultivée depuis plus de 3 000 ans. Avec seulement 309 calories pour 100 g, c\'est le millet le moins calorique, ce qui en fait un allié précieux pour la gestion du poids. Il se distingue par sa richesse exceptionnelle en polyphénols antioxydants et sa teneur élevée en fibres (9,0 g/100 g). Aujourd\'hui cultivé en Asie du Sud, en Asie du Sud-Est et en Afrique de l\'Ouest, le millet kodo suscite un intérêt croissant dans la recherche nutritionnelle internationale pour son profil glycémique bas et ses propriétés protectrices.',

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
      source: 'ANSES Table Ciqual / USDA FoodData Central',
      sourceDetail: 'Table Ciqual (ANSES) et USDA FoodData Central',
    },

    glycemicIndex: {
      value: 48,
      category: 'low',
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
        'Aide à la gestion de la glycémie grâce à son indice glycémique bas (IG ~48)',
        'Riche en polyphénols antioxydants qui protègent les cellules contre le stress oxydatif',
        'Favorise la gestion du poids grâce à sa faible valeur calorique (309 kcal/100 g)',
        'Soutient la santé digestive par sa teneur élevée en fibres (9,0 g/100 g)',
        'Naturellement sans gluten, adapté aux régimes d\'exclusion',
      ],
      contraindications: [
        'Doit être acheté auprès de fournisseurs fiables pour éviter toute contamination fongique',
        'Trempage prolongé recommandé pour améliorer la digestibilité',
      ],
      classicalReference: 'ANSES Table Ciqual / USDA FoodData Central',
    },

    history: {
      originRegion: 'Sous-continent indien',
      domesticationPeriod: 'Il y a environ 3 000 ans',
      archaeologicalEvidence:
        'Le millet kodo est originaire de l\'Inde, où il est cultivé depuis des millénaires. On retrouve des traces de sa culture dans les régions tribales du centre de l\'Inde (Madhya Pradesh, Chhattisgarh). Les données ethnobotaniques sont abondantes, même si les preuves archéologiques formelles restent limitées.',
      spreadPattern:
        'Domestique en Inde, le millet kodo s\'est progressivement répandu vers l\'Asie du Sud-Est et l\'Afrique de l\'Ouest, où il est cultivé comme céréale de subsistance dans les zones arides.',
      culturalSignificance:
        'Le millet kodo est un aliment de sécurité alimentaire essentiel pour les communautés tribales du centre de l\'Inde. Il joue également un rôle important dans les traditions de jeune hindoues (vrat), ce qui lui confère une dimension culturelle unique. A l\'échelle mondiale, il attire l\'attention des chercheurs en nutrition pour son profil antioxydant remarquable.',
    },

    cultivation: {
      majorStates: ['Inde (centre et sud)', 'Asie du Sud-Est', 'Afrique de l\'Ouest'],
      globalRegions: ['Asie du Sud (Inde)', 'Asie du Sud-Est', 'Afrique de l\'Ouest'],
      growingSeason: 'Saison des pluies (juin-octobre)',
      waterRequirement: '400-500 mm de pluie',
      soilType: 'Sols graveleux, latéritiques et peu profonds ; pousse bien en sols pauvres',
      harvestDays: '90-120 jours',
    },

    cooking: {
      waterRatio: '1:2,5',
      soakingTime: '6 à 8 heures',
      cookingTime: '20-25 minutes',
      texture: 'Semblable au riz, mais plus ferme',
      flavorProfile: 'Doux, terreux',
      bestSubstituteFor: 'Riz (en accompagnement ou en salade)',
      tips: [
        'Faire tremper 6 à 8 heures ou toute la nuit pour un résultat optimal',
        'Bien rincer après le trempage pour éliminer toute amertume résiduelle',
        'Cuire à la casserole comme du riz — les grains se séparent bien',
        'Se prête parfaitement aux salades tièdes, taboulés revisités et gratins',
        'Acheter auprès de fournisseurs certifiés pour garantir un bon traitement du grain',
      ],
    },

    healthBenefits: [
      {
        benefit: 'Richesse exceptionnelle en polyphénols antioxydants',
        description:
          'Le millet kodo est particulièrement riche en composés polyphénoliques aux propriétés antioxydantes puissantes, contribuant à protéger les cellules contre les dommages oxydatifs et le vieillissement prématuré.',
        evidenceLevel: 'supported-by-research',
        source: 'Journal of Food Science and Technology',
      },
      {
        benefit: 'Teneur élevée en fibres pour la santé digestive',
        description:
          'Avec 9,0 g de fibres pour 100 g, le millet kodo favorise un transit intestinal régulier, soutient la santé du microbiote et peut contribuer au maintien d\'un taux de cholestérol sain.',
        evidenceLevel: 'well-established',
        source: 'ANSES Table Ciqual / USDA FoodData Central',
      },
      {
        benefit: 'Faible apport calorique',
        description:
          'A 309 calories pour 100 g, le millet kodo présente la valeur énergétique la plus basse parmi les millets couramment consommés, ce qui le rend particulièrement adapté aux régimes de gestion du poids.',
        evidenceLevel: 'well-established',
        source: 'ANSES Table Ciqual / USDA FoodData Central',
      },
      {
        benefit: 'Indice glycémique bas favorable au contrôle de la glycémie',
        description:
          'Avec un indice glycémique d\'environ 48, le millet kodo libère le glucose lentement dans le sang, ce qui en fait un choix judicieux pour les personnes surveillant leur glycémie.',
        evidenceLevel: 'traditional-knowledge',
        source: 'Indian Journal of Traditional Knowledge',
      },
    ],

    sideEffects: [
      {
        condition: 'Risque de contamination fongique (intoxication au kodua)',
        description:
          'Le millet kodo mal stocké ou mal transformé peut être contaminé par des champignons (Aspergillus flavus), provoquant nausées, tremblements et somnolence. Il est essentiel de l\'achetér auprès de sources fiables et de le conserver dans un endroit sec.',
        severity: 'consult-doctor',
      },
      {
        condition: 'Amertume en cas de mauvaise préparation',
        description:
          'Peut présenter une légère amertume si le grain n\'est pas correctement traité. Un trempage prolongé suivi de rinçages soigneux permet d\'éliminer les saveurs indésirables.',
        severity: 'mild',
      },
    ],

    isGlutenFree: true,
    relatedRecipes: [
      'galettes-croustillantes-millet',
    ],
    sources: [
      'anses-ciqual',
      'usda-fdc',
      'fao-millets-nutrition',
      'ren-millets-polyphenols-2016',
    ],
  },

  // =============================================
  // MILLET JAPONAIS (BARNYARD MILLET)
  // =============================================
  {
    slug: 'barnyard-millet',
    name: 'Millet japonais',
    commonName: 'Millet des basses-cours / Sanwa',
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
    tagline: 'Le millet le plus riche en fibres, avec l\'indice glycémique le plus bas',
    description:
      'Le millet japonais (Echinochloa frumentacea) est le millet à la croissance la plus rapide, arrivant à maturité en seulement 60 jours. Il se distingue par la teneur en fibres la plus élevée parmi les millets courants (9,8 g/100 g) et l\'indice glycémique le plus bas (~44), ce qui en fait un allié de choix pour la gestion de la glycémie. Il a été domestique indépendamment en Asie tropicale (Inde) et au Japon, d\'ou son nom français. Sa texture floconneuse et son goût neutre en font un excellent substitut du riz, facile à intégrer dans les préparations européennes et africaines.',

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
      source: 'Littérature scientifique publiée',
      sourceDetail: 'Données ANSES/USDA complétées par la littérature de recherche publiée',
    },

    glycemicIndex: {
      value: 44,
      category: 'low',
      source: 'Published literature on millet glycemic indices',
    },

    ayurveda: {
      rasa: ['Saveur douce, légèrement astringente'],
      guna: ['Léger'],
      virya: 'Effet rafraîchissant',
      vipaka: 'Digestion douce',
      doshaEffect: {
        vata: 'neutral',
        pitta: 'neutral',
        kapha: 'neutral',
      },
      therapeuticUses: [
        'Indice glycémique le plus bas parmi les millets (~44), idéal pour le contrôle de la glycémie',
        'Teneur en fibres la plus élevée des millets courants (9,8 g/100 g), bénéfique pour la santé intestinale',
        'Bonne source de fer (5,0 mg/100 g), contribue à la prévention de l\'anémie',
        'Léger et facile à digérer, convient aux périodes de convalescence',
        'Favorise la satiété et la gestion du poids grâce à sa richesse en fibres',
      ],
      contraindications: [
        'Peut provoquer des ballonnements si le trempage est insuffisant avant la cuisson',
        'Teneur en protéines plus faible (6,2 g) — à combiner avec d\'autres sources protéiques',
      ],
      classicalReference: 'ANSES Table Ciqual / USDA FoodData Central',
    },

    history: {
      originRegion: 'Asie tropicale (sous-continent indien)',
      domesticationPeriod: 'Plusieurs milliers d\'années (période exacte incertaine)',
      archaeologicalEvidence:
        'Le millet japonais est originaire d\'Asie tropicale, où il est cultivé depuis des millénaires dans les zones pluviales de l\'Inde. Une domestication indépendante a eu lieu au Japon, ou l\'espèce Echinochloa esculenta est cultivée depuis l\'antiquité.',
      spreadPattern:
        'Cultive principalement en Asie du Sud (Inde, Népal) et au Japon. Il est resté essentiellement une culture régionale, mais suscite un intérêt croissant en Europe et en Afrique pour son profil nutritionnel exceptionnel.',
      culturalSignificance:
        'Le millet japonais est un grain de sécurité alimentaire important dans les régions montagneuses de l\'Inde (Uttarakhand) et les zones pluviales. Au Japon, il fait partie du patrimoine agricole ancestral. Sa double domestication en Inde et au Japon témoigne de l\'importance que les civilisations anciennes accordaient à cette céréale rustique.',
    },

    cultivation: {
      majorStates: ['Inde (Uttarakhand)', 'Japon', 'Népal', 'Asie du Sud-Est'],
      globalRegions: ['Asie du Sud (Inde, Népal)', 'Japon', 'Asie du Sud-Est'],
      growingSeason: 'Saison des pluies (juin-septembre)',
      waterRequirement: '350-500 mm de pluie',
      soilType: 'Pousse dans les sols marginaux, inondables et même salins',
      harvestDays: '60-90 jours (le millet à croissance la plus rapide)',
    },

    cooking: {
      waterRatio: '1:3',
      soakingTime: '2 à 4 heures',
      cookingTime: '15-20 minutes',
      texture: 'Floconneux, semblable au riz',
      flavorProfile: 'Doux, neutre',
      bestSubstituteFor: 'Riz (dans les plats en sauce et les salades)',
      tips: [
        'Faire tremper 2 à 4 heures avant la cuisson pour une texture optimale',
        'Cuire à la casserole comme du riz, avec un peu plus d\'eau',
        'Excellent en risotto végétal — sa texture floconneuse absorbe bien les sauces',
        'Se prête aux gratins, timbales et accompagnements à la place du riz',
        'Torréfier légèrement à la poêle avant la cuisson pour un goût plus noisette',
      ],
    },

    healthBenefits: [
      {
        benefit: 'Teneur en fibres la plus élevée parmi les millets courants',
        description:
          'Le millet japonais contient 9,8 g de fibres pour 100 g, la teneur la plus élevée parmi les millets couramment disponibles. Cette richesse en fibres soutient la santé digestive, favorise la satiété et contribue au maintien d\'un bon taux de cholestérol.',
        evidenceLevel: 'well-established',
        source: 'USDA FoodData Central / littérature scientifique publiée',
      },
      {
        benefit: 'Indice glycémique le plus bas parmi les millets',
        description:
          'Avec un IG d\'environ 44, le millet japonais possède l\'indice glycémique le plus bas parmi les millets couramment disponibles, ce qui en fait un choix excellent pour la gestion de la glycémie et la prévention du diabète de type 2.',
        evidenceLevel: 'supported-by-research',
        source: 'International Journal of Food Sciences and Nutrition',
      },
      {
        benefit: 'Bonne source de fer',
        description:
          'Avec 5,0 mg de fer pour 100 g, le millet japonais constitue une source végétale appréciable de fer, contribuant à la prévention de l\'anémie, particulièrement importante dans les régimes végétariens et végétaliens.',
        evidenceLevel: 'well-established',
        source: 'USDA FoodData Central / littérature scientifique publiée',
      },
      {
        benefit: 'Céréale légère et digestible',
        description:
          'Grâce à sa légèreté et sa digestibilité, le millet japonais est traditionnellement utilisé dans les régimes de convalescence. Il fournit une énergie soutenue sans sensation de lourdeur.',
        evidenceLevel: 'traditional-knowledge',
      },
    ],

    sideEffects: [
      {
        condition: 'Ballonnements en cas de trempage insuffisant',
        description:
          'Peut provoquer des gaz et des ballonnements si le trempage est insuffisant avant la cuisson. Un trempage de 2 à 4 heures améliore considérablement la digestibilité.',
        severity: 'mild',
      },
      {
        condition: 'Teneur en phytates',
        description:
          'Contient des phytates (antinutriments) pouvant réduire l\'absorption de certains minéraux. Le trempage et la cuisson réduisent significativement les niveaux de phytates.',
        severity: 'mild',
      },
    ],

    isGlutenFree: true,
    relatedRecipes: [
      'risotto-de-millet',
    ],
    sources: [
      'anses-ciqual',
      'usda-fdc',
      'fao-millets-nutrition',
      'ren-millets-polyphenols-2016',
    ],
  },

  // =============================================
  // MILLET COMMUN (PROSO MILLET)
  // =============================================
  {
    slug: 'proso-millet',
    name: 'Millet commun',
    commonName: 'Millet des oiseaux / Millet à grappes',
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
    tagline: 'Le plus ancien millet domestique — céréale oubliée de l\'Empire romain et de l\'Europe médiévale',
    description:
      'Le millet commun (Panicum miliaceum) est LE millet de l\'histoire européenne. Première céréale domestiquée de la famille des millets, il a été cultivé des 8 000 av. J.-C. à Cishan en Chine, soit il y a plus de 10 000 ans. Il s\'est ensuite répandu en Asie centrale, puis en Europe, où il est devenu un aliment de base de l\'Empire romain, de la Gaule et de toute l\'Europe médiévale, bien avant que le blé et le riz ne le remplacent. Avec 12,5 g de protéines pour 100 g (la teneur la plus élevée parmi les millets mineurs) et une saison de culture de seulement 60 à 75 jours, c\'est une céréale à redécouvrir d\'urgence.',

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
      source: 'ANSES Table Ciqual / USDA FoodData Central',
      sourceDetail: 'Table Ciqual (ANSES) et USDA FoodData Central',
    },

    glycemicIndex: {
      value: 56,
      category: 'low',
      source: 'International Tables of Glycemic Index and Glycemic Load Values, 2021',
    },

    ayurveda: {
      rasa: ['Saveur douce, légèrement astringente'],
      guna: ['Léger', 'Sec'],
      virya: 'Effet réchauffant',
      vipaka: 'Digestion progressive',
      doshaEffect: {
        vata: 'neutral',
        pitta: 'neutral',
        kapha: 'neutral',
      },
      therapeuticUses: [
        'Excellente source de protéines végétales (12,5 g/100 g), soutient la masse musculaire',
        'Riche en lécithine, un phospholipide bénéfique pour la santé hépatique',
        'Bonne source de vitamines du groupe B, notamment la niacine (B3), essentielle au métabolisme énergétique',
        'Riche en magnésium (153 mg/100 g), contribue à la relaxation musculaire et au bon fonctionnement nerveux',
        'Culture à très faible empreinte hydrique (250-400 mm), exemplaire pour l\'agriculture durable',
      ],
      contraindications: [
        'Contient des goitrogènes qui peuvent affecter la fonction thyroïdienne en cas de consommation excessive — modération recommandée en cas de troubles thyroïdiens',
        'Contient des phytates — le trempage et la cuisson réduisent les antinutriments',
      ],
      classicalReference: 'ANSES Table Ciqual / USDA FoodData Central',
    },

    history: {
      originRegion: 'Nord de la Chine (site archéologique de Cishan)',
      domesticationPeriod: 'Il y a environ 10 000 ans (~8 000 av. J.-C.) — le plus ancien millet domestique',
      archaeologicalEvidence:
        'Les fouilles du site de Cishan en Chine ont mis au jour des restes de millet commun datant d\'environ 8 000 av. J.-C., ce qui en fait le plus ancien millet domestique de l\'histoire de l\'humanité et l\'une des toutes premières céréales cultivées au monde.',
      spreadPattern:
        'Depuis la Chine, le millet commun s\'est répandu vers l\'ouest à travers l\'Asie centrale jusqu\'en Europe, où il est devenu un aliment de base majeur. Les Romains le cultivaient abondamment, et il nourrissait les populations de la Gaule et de toute l\'Europe médiévale. Ce n\'est qu\'avec la diffusion du blé et du riz au cours de la Renaissance que le millet commun a été progressivement marginalisé.',
      culturalSignificance:
        'Le millet commun est historiquement l\'une des céréales les plus importantes de la civilisation humaine. C\'est le « millet » mentionné dans les textes historiques européens — de Pline l\'Ancien aux chroniques médiévales. Il nourrissait les légions romaines, les paysans gaulois et les populations d\'Europe centrale. En France, il est à l\'origine du mot « millet » lui-même. Aujourd\'hui, c\'est une céréale à redécouvrir dans le cadre d\'une alimentation durable.',
    },

    cultivation: {
      majorStates: ['Chine', 'Russie', 'Ukraine', 'États-Unis', 'Inde'],
      globalRegions: [
        'Chine',
        'Russie',
        'Asie centrale',
        'Europe (historique)',
        'Amérique du Nord (culture pour oiseaux)',
      ],
      growingSeason: 'Été (juin-septembre) ; saison chaude',
      waterRequirement: '250-400 mm de pluie',
      soilType: 'Sols légers et bien drainés ; tolère les sols pauvres',
      harvestDays: '60-75 jours (la saison la plus courte parmi les millets)',
    },

    cooking: {
      waterRatio: '1:3',
      soakingTime: '20 à 30 minutes',
      cookingTime: '15-20 minutes',
      texture: 'Floconneux, semblable au couscous',
      flavorProfile: 'Doux, légèrement sucré',
      bestSubstituteFor: 'Couscous, boulgour, riz',
      tips: [
        'Faire tremper 20 à 30 minutes avant la cuisson pour une texture optimale',
        'Cuire à la casserole comme du riz — les grains deviennent floconneux et se séparent bien',
        'Sa texture proche du couscous en fait un substitut idéal dans un taboulé ou une salade composée',
        'Torréfier à sec dans une poêle avant la cuisson pour un arôme plus noisette',
        'Peut être moulu en farine pour préparer des crêpes, des galettes ou épaissir des soupes',
        'Se cuisine au couscoussier à la vapeur pour une texture encore plus légère',
      ],
    },

    healthBenefits: [
      {
        benefit: 'Teneur en protéines la plus élevée parmi les millets mineurs',
        description:
          'Le millet commun contient 12,5 g de protéines pour 100 g, la teneur la plus élevée parmi les millets mineurs. C\'est une excellente source de protéines végétales, particulièrement précieuse dans les régimes végétariens et végétaliens.',
        evidenceLevel: 'well-established',
        source: 'ANSES Table Ciqual / USDA FoodData Central',
      },
      {
        benefit: 'Lécithine bénéfique pour la santé hépatique',
        description:
          'Le millet commun contient de la lécithine, un phospholipide qui soutient la fonction hépatique et peut aider au métabolisme des graisses. Des études préliminaires suggèrent un effet protecteur sur le foie.',
        evidenceLevel: 'preliminary-evidence',
        source: 'Journal of Cereal Science',
      },
      {
        benefit: 'Culture durable à très faible empreinte écologique',
        description:
          'Avec la saison de croissance la plus courte parmi les millets (60-75 jours) et des besoins en eau très faibles (250-400 mm), le millet commun est l\'une des céréales les plus respectueuses du climat, un atout majeur dans le contexte du changement climatique.',
        evidenceLevel: 'well-established',
        source: 'FAO / Division des cultures durables',
      },
      {
        benefit: 'Riche en vitamines du groupe B, notamment la niacine',
        description:
          'Le millet commun est une bonne source de vitamines du complexe B, en particulier la niacine (vitamine B3), essentielle au métabolisme énergétique, au fonctionnement du système nerveux et à la santé de la peau.',
        evidenceLevel: 'supported-by-research',
        source: 'Journal of Food Science and Technology',
      },
    ],

    sideEffects: [
      {
        condition: 'Teneur en goitrogènes',
        description:
          'Contient des goitrogènes qui peuvent interférer avec la fonction thyroïdienne en cas de consommation excessive. Les personnes souffrant de troubles thyroïdiens doivent consommer le millet commun avec modération et consulter leur médecin.',
        severity: 'consult-doctor',
      },
      {
        condition: 'Antinutriments (phytates)',
        description:
          'Contient des antinutriments comme les phytates qui peuvent réduire l\'absorption de certains minéraux. Le trempage, la germination et la cuisson contribuent à réduire significativement les niveaux d\'antinutriments.',
        severity: 'mild',
      },
    ],

    isGlutenFree: true,
    relatedRecipes: [
      'porridge-millet-commun',
      'boules-energie-millet',
    ],
    sources: [
      'anses-ciqual',
      'usda-fdc',
      'saleh-millets-review-2013',
      'lu-cishan-2009',
      'ren-millets-polyphenols-2016',
    ],
  },

  // =============================================
  // MILLET BRUN (BROWNTOP MILLET)
  // =============================================
  {
    slug: 'browntop-millet',
    name: 'Millet brun',
    commonName: 'Millet brun / Korale',
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
    tagline: 'Champion des fibres — le millet le plus rare en pleine renaissance',
    description:
      'Le millet brun (Urochloa ramosa) détient le record absolu de la teneur en fibres parmi tous les millets : 12,5 g pour 100 g. C\'est aussi le millet le plus rare sur le plan commercial, cultivé presque exclusivement dans certains districts du Karnataka en Inde. Presque disparu en tant que culture alimentaire, il connaît aujourd\'hui une renaissance remarquable grâce à des agriculteurs engagés dans la préservation de la biodiversité agricole. Avec un indice glycémique très bas (~47) et une teneur en protéines appréciable (11,5 g/100 g), il représente un potentiel nutritionnel exceptionnel pour l\'alimentation de demain.',

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
      source: 'Littérature scientifique publiée',
      sourceDetail:
        'Données nutritionnelles limitées. Valeurs dérivées de la littérature scientifique publiée. Données de magnésium et potassium non disponibles.',
    },

    glycemicIndex: {
      value: 47,
      category: 'low',
      source: 'Published literature on millet glycemic indices',
    },

    ayurveda: {
      rasa: ['Saveur astringente, légèrement sucrée'],
      guna: ['Léger', 'Sec'],
      virya: 'Effet rafraîchissant',
      vipaka: 'Digestion progressive',
      doshaEffect: {
        vata: 'neutral',
        pitta: 'neutral',
        kapha: 'neutral',
      },
      therapeuticUses: [
        'Teneur en fibres la plus élevée de tous les millets (12,5 g/100 g), exceptionnelle pour la santé intestinale',
        'Effet prébiotique : favorise la croissance des bonnes bactéries intestinales',
        'Indice glycémique très bas (~47), bénéfique pour le contrôle de la glycémie',
        'Riche en composés phénoliques aux propriétés antioxydantes et anti-inflammatoires',
        'Bonne teneur en protéines (11,5 g/100 g), soutient la masse musculaire',
      ],
      contraindications: [
        'La teneur très élevée en fibres peut provoquer des inconforts digestifs si le millet est introduit trop rapidement — augmenter les portions progressivement',
        'Disponibilité commerciale limitée — s\'assurer de la qualité et de la fraîcheur du produit',
      ],
      classicalReference: 'ANSES Table Ciqual / USDA FoodData Central',
    },

    history: {
      originRegion: 'Asie du Sud-Est et sous-continent indien',
      domesticationPeriod: 'Ancien (période exacte non documentée)',
      archaeologicalEvidence:
        'La documentation archéologique est limitée. Le millet brun est connu pour avoir été cultivé traditionnellement dans les régions vallonnées du Karnataka depuis des siècles. Il a failli disparaître en tant que culture alimentaire avant les récents efforts de revitalisation.',
      spreadPattern:
        'Originaire d\'Asie du Sud-Est et d\'Inde, le millet brun est resté confiné aux régions vallonnées du Karnataka, avec une diffusion limitée vers les États voisins. C\'est l\'un des millets les moins répandus au monde.',
      culturalSignificance:
        'Le millet brun incarne une véritable histoire de renaissance agricole. Presque perdu à cause de la modernisation de l\'agriculture, il a été ramené par des agriculteurs engagés du Karnataka. Il symbolise le mouvement croissant de revitalisation des céréales autochtones oubliées et de préservation de la biodiversité agricole — un enjeu crucial à l\'échelle mondiale dans le contexte du changement climatique.',
    },

    cultivation: {
      majorStates: ['Karnataka (Inde)', 'Régions limitées d\'Asie du Sud-Est'],
      globalRegions: ['Asie du Sud (principalement l\'Inde)', 'Asie du Sud-Est'],
      growingSeason: 'Saison des pluies (juin-octobre)',
      waterRequirement: '300-400 mm de pluie',
      soilType: 'Sols rouges graveleux et latéritiques ; pousse en terrains pauvres et vallonnés',
      harvestDays: '90-100 jours',
    },

    cooking: {
      waterRatio: '1:2,5',
      soakingTime: '6 à 8 heures',
      cookingTime: '20-25 minutes',
      texture: 'Semblable au riz, ferme',
      flavorProfile: 'Doux, légèrement noisette',
      bestSubstituteFor: 'Riz (dans les plats mijotés et les gratins)',
      tips: [
        'Faire tremper 6 à 8 heures ou toute la nuit pour un résultat optimal',
        'Cuire à la casserole comme du riz après un bon trempage',
        'Sa texture ferme se prête bien aux plats mijotés en cocotte et aux gratins',
        'Peut être moulu en farine pour des crêpes ou des galettes',
        'Commencer par de petites portions et augmenter progressivement si c\'est votre premier essai avec ce millet',
      ],
    },

    healthBenefits: [
      {
        benefit: 'Teneur en fibres la plus élevée de tous les millets',
        description:
          'Le millet brun contient 12,5 g de fibres pour 100 g, la teneur la plus élevée parmi l\'ensemble des millets. Cette richesse en fibres exceptionnelle soutient la santé digestive, favorise la satiété, et contribue au maintien de taux sains de cholestérol et de glycémie.',
        evidenceLevel: 'well-established',
        source: 'Published literature on millet nutrition',
      },
      {
        benefit: 'Indice glycémique très bas',
        description:
          'Avec un IG d\'environ 47, le millet brun libère le glucose très lentement, ce qui en fait un choix céréalier excellent pour les personnes gérant leur diabète ou recherchant des niveaux d\'énergie stables tout au long de la journée.',
        evidenceLevel: 'supported-by-research',
        source: 'Published literature on millet glycemic indices',
      },
      {
        benefit: 'Richesse en phytochimiques',
        description:
          'Contient divers composés phytochimiques, notamment des composés phénoliques aux propriétés antioxydantes et anti-inflammatoires. Les recherches en cours suggèrent un potentiel de protection cellulaire prometteur.',
        evidenceLevel: 'preliminary-evidence',
        source: 'Journal of Food Science and Technology',
      },
      {
        benefit: 'Soutien à la santé intestinale',
        description:
          'La teneur très élevée en fibres agit comme un prébiotique naturel, favorisant la croissance des bactéries intestinales bénéfiques et soutenant la santé globale du microbiote et la régularité digestive.',
        evidenceLevel: 'supported-by-research',
        source: 'Nutrition Research Reviews',
      },
    ],

    sideEffects: [
      {
        condition: 'Disponibilité commerciale limitée',
        description:
          'Le millet brun est le millet le plus rare sur le plan commercial et peut être difficile à trouver. Sa disponibilité est principalement limitée au Karnataka (Inde) et à certaines boutiques spécialisées en ligne.',
        severity: 'mild',
      },
      {
        condition: 'Inconfort digestif lié à la haute teneur en fibres',
        description:
          'La teneur très élevée en fibres (12,5 g pour 100 g) peut provoquer des inconforts digestifs, des ballonnements ou des gaz si ce millet est introduit trop rapidement dans l\'alimentation. Une introduction progressive est vivement recommandée.',
        severity: 'moderate',
      },
    ],

    isGlutenFree: true,
    relatedRecipes: [],
    sources: [
      'chandrasekara-phenolics-2012',
      'ren-millets-polyphenols-2016',
      'kam-millets-diabetes-2016',
      'usda-fdc',
    ],
  },
];
