import type { Millet } from '@/lib/types';

export const minorMillets: Millet[] = [
  // =============================================
  // MIJO KODO
  // =============================================
  {
    slug: 'kodo-millet',
    name: 'Mijo kodo',
    commonName: 'Kodo / Mijo kodo',
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
    tagline: 'El mijo con menos calorias, rico en antioxidantes y fibra',
    description:
      'El mijo kodo (Paspalum scrobiculatum) es un grano robusto y resistente originario del subcontinente indio, cultivado desde hace mas de 3 000 anos. Con apenas 309 calorias por 100 g, es el mijo con menor aporte calorico, lo que lo convierte en un aliado valioso para el control del peso. Destaca por su riqueza excepcional en polifenoles antioxidantes y su alto contenido en fibra (9,0 g/100 g). Cultivado actualmente en el sur de Asia, el sudeste asiatico y Africa occidental, el mijo kodo despierta un interes creciente en la investigacion nutricional internacional por su bajo perfil glucemico y sus propiedades protectoras. En el mundo hispanohablante, donde las dietas tradicionales valoran los granos integrales, este mijo ofrece una alternativa nutritiva y sostenible.',

    names: {
      english: 'Kodo Millet',
      hindi: 'Kodo / Kodra',
      tamil: 'Varagu',
      telugu: 'Arikelu',
      kannada: 'Haraka',
      malayalam: 'Varaku',
      marathi: 'Kodra',
      bengali: 'Kodo',
      gujarati: 'Kodra',
      odia: 'Kodo',
      punjabi: 'Kodo',
      sanskrit: 'Kodrava',
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
      source: 'BEDCA / USDA FoodData Central',
      sourceDetail: 'Base de Datos Espanola de Composicion de Alimentos (BEDCA) y USDA FoodData Central',
    },

    glycemicIndex: {
      value: 48,
      category: 'low',
      source: 'International Tables of Glycemic Index and Glycemic Load Values, 2021',
    },

    ayurveda: {
      rasa: ['Sabor dulce, ligeramente astringente'],
      guna: ['Ligero', 'Seco'],
      virya: 'Efecto refrescante',
      vipaka: 'Digestion progresiva',
      doshaEffect: {
        vata: 'neutral',
        pitta: 'neutral',
        kapha: 'neutral',
      },
      therapeuticUses: [
        'Ayuda al control de la glucemia gracias a su bajo indice glucemico (IG ~48)',
        'Rico en polifenoles antioxidantes que protegen las celulas contra el estres oxidativo',
        'Favorece el control del peso gracias a su bajo valor calorico (309 kcal/100 g)',
        'Apoya la salud digestiva por su alto contenido en fibra (9,0 g/100 g)',
        'Naturalmente libre de gluten, apto para dietas de exclusion',
      ],
      contraindications: [
        'Debe comprarse a proveedores fiables para evitar contaminacion fungica',
        'Se recomienda un remojo prolongado para mejorar la digestibilidad',
      ],
      classicalReference: 'BEDCA / USDA FoodData Central',
    },

    history: {
      originRegion: 'Subcontinente indio',
      domesticationPeriod: 'Hace aproximadamente 3 000 anos',
      archaeologicalEvidence:
        'El mijo kodo es originario de la India, donde se cultiva desde hace milenios. Se encuentran rastros de su cultivo en las regiones tribales del centro de la India (Madhya Pradesh, Chhattisgarh). Los datos etnobotanicos son abundantes, aunque las evidencias arqueologicas formales siguen siendo limitadas.',
      spreadPattern:
        'Domesticado en la India, el mijo kodo se expandio gradualmente hacia el sudeste asiatico y Africa occidental, donde se cultiva como cereal de subsistencia en zonas aridas.',
      culturalSignificance:
        'El mijo kodo es un alimento esencial para la seguridad alimentaria de las comunidades tribales del centro de la India. Tambien desempena un papel importante en las tradiciones de ayuno hindues (vrat), lo que le confiere una dimension cultural unica. A nivel mundial, atrae la atencion de los investigadores en nutricion por su notable perfil antioxidante.',
    },

    cultivation: {
      majorStates: ['India (centro y sur)', 'Sudeste asiatico', 'Africa occidental'],
      globalRegions: ['Sur de Asia (India)', 'Sudeste asiatico', 'Africa occidental'],
      growingSeason: 'Temporada de lluvias (junio-octubre)',
      waterRequirement: '400-500 mm de lluvia',
      soilType: 'Suelos gravelosos, lateriticos y poco profundos; crece bien en suelos pobres',
      harvestDays: '90-120 dias',
    },

    cooking: {
      waterRatio: '1:2,5',
      soakingTime: '6 a 8 horas',
      cookingTime: '20-25 minutos',
      texture: 'Similar al arroz, pero mas firme',
      flavorProfile: 'Suave, terroso',
      bestSubstituteFor: 'Arroz (como acompanamiento o en ensalada)',
      tips: [
        'Remojar de 6 a 8 horas o toda la noche para un resultado optimo',
        'Enjuagar bien tras el remojo para eliminar cualquier amargor residual',
        'Cocinar en olla como el arroz — los granos se separan bien',
        'Ideal para ensaladas tibias, tabules reinventados y gratinados',
        'Comprar a proveedores certificados para garantizar un buen procesamiento del grano',
      ],
    },

    healthBenefits: [
      {
        benefit: 'Riqueza excepcional en polifenoles antioxidantes',
        description:
          'El mijo kodo es particularmente rico en compuestos polifenolicos con potentes propiedades antioxidantes, que contribuyen a proteger las celulas contra el dano oxidativo y el envejecimiento prematuro.',
        evidenceLevel: 'supported-by-research',
        source: 'Journal of Food Science and Technology',
      },
      {
        benefit: 'Alto contenido en fibra para la salud digestiva',
        description:
          'Con 9,0 g de fibra por 100 g, el mijo kodo favorece un transito intestinal regular, apoya la salud de la microbiota y puede contribuir al mantenimiento de niveles saludables de colesterol.',
        evidenceLevel: 'well-established',
        source: 'BEDCA / USDA FoodData Central',
      },
      {
        benefit: 'Bajo aporte calorico',
        description:
          'Con 309 calorias por 100 g, el mijo kodo presenta el valor energetico mas bajo entre los mijos comunmente consumidos, lo que lo hace especialmente adecuado para dietas de control de peso.',
        evidenceLevel: 'well-established',
        source: 'BEDCA / USDA FoodData Central',
      },
      {
        benefit: 'Indice glucemico bajo favorable para el control de la glucemia',
        description:
          'Con un indice glucemico de aproximadamente 48, el mijo kodo libera la glucosa lentamente en la sangre, lo que lo convierte en una opcion acertada para personas que vigilan su glucemia.',
        evidenceLevel: 'traditional-knowledge',
        source: 'Indian Journal of Traditional Knowledge',
      },
    ],

    sideEffects: [
      {
        condition: 'Riesgo de contaminacion fungica (intoxicacion por kodua)',
        description:
          'El mijo kodo mal almacenado o mal procesado puede estar contaminado por hongos (Aspergillus flavus), provocando nauseas, temblores y somnolencia. Es esencial comprarlo a fuentes fiables y conservarlo en un lugar seco.',
        severity: 'consult-doctor',
      },
      {
        condition: 'Amargor en caso de mala preparacion',
        description:
          'Puede presentar un ligero amargor si el grano no se ha procesado correctamente. Un remojo prolongado seguido de enjuagues cuidadosos permite eliminar los sabores indeseados.',
        severity: 'mild',
      },
    ],

    isGlutenFree: true,
    relatedRecipes: [
      'tortitas-crujientes-de-mijo',
    ],
    sources: [
      'anses-ciqual',
      'usda-fdc',
      'fao-millets-nutrition',
      'ren-millets-polyphenols-2016',
    ],
  },

  // =============================================
  // MIJO DE CORRAL (BARNYARD MILLET)
  // =============================================
  {
    slug: 'barnyard-millet',
    name: 'Mijo de corral',
    commonName: 'Sanwa / Mijo japones',
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
    tagline: 'El mijo mas rico en fibra, con el indice glucemico mas bajo',
    description:
      'El mijo de corral (Echinochloa frumentacea) es el mijo de crecimiento mas rapido, alcanzando la madurez en solo 60 dias. Se distingue por el contenido en fibra mas alto entre los mijos comunes (9,8 g/100 g) y el indice glucemico mas bajo (~44), lo que lo convierte en un aliado destacado para el control de la glucemia. Fue domesticado de forma independiente en Asia tropical (India) y en Japon, de ahi su nombre alternativo de mijo japones. Su textura esponjosa y su sabor neutro lo hacen un excelente sustituto del arroz, facil de integrar en la cocina hispanohablante, desde paellas ligeras hasta ensaladas frescas.',

    names: {
      english: 'Barnyard Millet',
      hindi: 'Sanwa / Jhangora',
      tamil: 'Kuthiraivali',
      telugu: 'Udalu',
      kannada: 'Oodalu',
      malayalam: 'Kuthiravali',
      marathi: 'Bhagar',
      bengali: 'Shyamadhan',
      gujarati: 'Moraiyo',
      odia: 'Khira',
      punjabi: 'Sanwa',
      sanskrit: 'Shyamaka',
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
      source: 'BEDCA / USDA FoodData Central',
      sourceDetail: 'Base de Datos Espanola de Composicion de Alimentos (BEDCA) y USDA FoodData Central',
    },

    glycemicIndex: {
      value: 44,
      category: 'low',
      source: 'Published literature on millet glycemic indices',
    },

    ayurveda: {
      rasa: ['Sabor dulce, ligeramente astringente'],
      guna: ['Ligero'],
      virya: 'Efecto refrescante',
      vipaka: 'Digestion suave',
      doshaEffect: {
        vata: 'neutral',
        pitta: 'neutral',
        kapha: 'neutral',
      },
      therapeuticUses: [
        'Indice glucemico mas bajo entre los mijos (~44), ideal para el control de la glucemia',
        'Contenido en fibra mas alto de los mijos comunes (9,8 g/100 g), beneficioso para la salud intestinal',
        'Buena fuente de hierro (5,0 mg/100 g), contribuye a la prevencion de la anemia',
        'Ligero y facil de digerir, adecuado para periodos de convalecencia',
        'Favorece la saciedad y el control del peso gracias a su riqueza en fibra',
      ],
      contraindications: [
        'Puede provocar hinchazon si el remojo es insuficiente antes de la coccion',
        'Contenido en proteinas mas bajo (6,2 g) — combinar con otras fuentes proteicas',
      ],
      classicalReference: 'BEDCA / USDA FoodData Central',
    },

    history: {
      originRegion: 'Asia tropical (subcontinente indio)',
      domesticationPeriod: 'Varios miles de anos (periodo exacto incierto)',
      archaeologicalEvidence:
        'El mijo de corral es originario de Asia tropical, donde se cultiva desde hace milenios en las zonas de secano de la India. Una domesticacion independiente tuvo lugar en Japon, donde la especie Echinochloa esculenta se cultiva desde la antiguedad.',
      spreadPattern:
        'Se cultiva principalmente en el sur de Asia (India, Nepal) y en Japon. Ha permanecido esencialmente como un cultivo regional, pero despierta un interes creciente en Europa y America Latina por su perfil nutricional excepcional.',
      culturalSignificance:
        'El mijo de corral es un grano de seguridad alimentaria importante en las regiones montanosas de la India (Uttarakhand) y las zonas de secano. En Japon, forma parte del patrimonio agricola ancestral. Su doble domesticacion en India y Japon atestigua la importancia que las civilizaciones antiguas otorgaban a este cereal rustico.',
    },

    cultivation: {
      majorStates: ['India (Uttarakhand)', 'Japon', 'Nepal', 'Sudeste asiatico'],
      globalRegions: ['Sur de Asia (India, Nepal)', 'Japon', 'Sudeste asiatico'],
      growingSeason: 'Temporada de lluvias (junio-septiembre)',
      waterRequirement: '350-500 mm de lluvia',
      soilType: 'Crece en suelos marginales, inundables e incluso salinos',
      harvestDays: '60-90 dias (el mijo de crecimiento mas rapido)',
    },

    cooking: {
      waterRatio: '1:3',
      soakingTime: '2 a 4 horas',
      cookingTime: '15-20 minutos',
      texture: 'Esponjoso, similar al arroz',
      flavorProfile: 'Suave, neutro',
      bestSubstituteFor: 'Arroz (en platos con salsa y ensaladas)',
      tips: [
        'Remojar de 2 a 4 horas antes de cocinar para una textura optima',
        'Cocinar en olla como el arroz, con un poco mas de agua',
        'Excelente como base para paellas ligeras — su textura esponjosa absorbe bien los caldos',
        'Ideal para ensaladas frescas, timbales y acompanamientos en lugar del arroz',
        'Tostar ligeramente en sarten antes de cocinar para un sabor mas avellanado',
      ],
    },

    healthBenefits: [
      {
        benefit: 'Contenido en fibra mas alto entre los mijos comunes',
        description:
          'El mijo de corral contiene 9,8 g de fibra por 100 g, el contenido mas alto entre los mijos comunmente disponibles. Esta riqueza en fibra apoya la salud digestiva, favorece la saciedad y contribuye al mantenimiento de niveles saludables de colesterol.',
        evidenceLevel: 'well-established',
        source: 'USDA FoodData Central / literatura cientifica publicada',
      },
      {
        benefit: 'Indice glucemico mas bajo entre los mijos',
        description:
          'Con un IG de aproximadamente 44, el mijo de corral posee el indice glucemico mas bajo entre los mijos comunmente disponibles, lo que lo convierte en una opcion excelente para el control de la glucemia y la prevencion de la diabetes tipo 2.',
        evidenceLevel: 'supported-by-research',
        source: 'International Journal of Food Sciences and Nutrition',
      },
      {
        benefit: 'Buena fuente de hierro',
        description:
          'Con 5,0 mg de hierro por 100 g, el mijo de corral constituye una fuente vegetal apreciable de hierro, contribuyendo a la prevencion de la anemia, particularmente importante en dietas vegetarianas y veganas.',
        evidenceLevel: 'well-established',
        source: 'USDA FoodData Central / literatura cientifica publicada',
      },
      {
        benefit: 'Cereal ligero y digestible',
        description:
          'Gracias a su ligereza y digestibilidad, el mijo de corral se utiliza tradicionalmente en dietas de convalecencia. Proporciona energia sostenida sin sensacion de pesadez.',
        evidenceLevel: 'traditional-knowledge',
      },
    ],

    sideEffects: [
      {
        condition: 'Hinchazon por remojo insuficiente',
        description:
          'Puede provocar gases e hinchazon si el remojo es insuficiente antes de la coccion. Un remojo de 2 a 4 horas mejora considerablemente la digestibilidad.',
        severity: 'mild',
      },
      {
        condition: 'Contenido en fitatos',
        description:
          'Contiene fitatos (antinutrientes) que pueden reducir la absorcion de ciertos minerales. El remojo y la coccion reducen significativamente los niveles de fitatos.',
        severity: 'mild',
      },
    ],

    isGlutenFree: true,
    relatedRecipes: [
      'risotto-de-mijo',
    ],
    sources: [
      'anses-ciqual',
      'usda-fdc',
      'fao-millets-nutrition',
      'ren-millets-polyphenols-2016',
    ],
  },

  // =============================================
  // MIJO PROSO (PROSO MILLET)
  // =============================================
  {
    slug: 'proso-millet',
    name: 'Mijo proso',
    commonName: 'Chena / Mijo comun',
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
    tagline: 'El mijo domesticado mas antiguo — cereal olvidado del Imperio romano y de la peninsula iberica',
    description:
      'El mijo proso (Panicum miliaceum) es EL mijo de la historia europea e iberica. Primera cereal domesticado de la familia de los mijos, se cultivo desde el 8 000 a. C. en Cishan, China, es decir, hace mas de 10 000 anos. Se expandio luego por Asia central y Europa, donde se convirtio en un alimento basico del Imperio romano, de Hispania y de toda la Europa medieval, mucho antes de que el trigo y el arroz lo sustituyeran. Los romanos lo cultivaron ampliamente en la peninsula iberica, y los pueblos prerromanos ya lo conocian. Con 12,5 g de proteinas por 100 g (el contenido mas alto entre los mijos menores) y una temporada de cultivo de solo 60 a 75 dias, es un cereal que merece ser redescubierto con urgencia en el mundo hispanohablante.',

    names: {
      english: 'Proso Millet',
      hindi: 'Chena / Bari',
      tamil: 'Panivaragu',
      telugu: 'Varigelu',
      kannada: 'Baragu',
      malayalam: 'Panivaraku',
      marathi: 'Vari',
      bengali: 'China',
      gujarati: 'Cheno',
      odia: 'Bagu',
      punjabi: 'China',
      sanskrit: 'Chinaka',
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
      source: 'BEDCA / USDA FoodData Central',
      sourceDetail: 'Base de Datos Espanola de Composicion de Alimentos (BEDCA) y USDA FoodData Central',
    },

    glycemicIndex: {
      value: 56,
      category: 'low',
      source: 'International Tables of Glycemic Index and Glycemic Load Values, 2021',
    },

    ayurveda: {
      rasa: ['Sabor dulce, ligeramente astringente'],
      guna: ['Ligero', 'Seco'],
      virya: 'Efecto calentador',
      vipaka: 'Digestion progresiva',
      doshaEffect: {
        vata: 'neutral',
        pitta: 'neutral',
        kapha: 'neutral',
      },
      therapeuticUses: [
        'Excelente fuente de proteinas vegetales (12,5 g/100 g), apoya la masa muscular',
        'Rico en lecitina, un fosfolipido beneficioso para la salud hepatica',
        'Buena fuente de vitaminas del grupo B, especialmente niacina (B3), esencial para el metabolismo energetico',
        'Rico en magnesio (153 mg/100 g), contribuye a la relajacion muscular y al buen funcionamiento nervioso',
        'Cultivo con muy baja huella hidrica (250-400 mm), ejemplar para la agricultura sostenible',
      ],
      contraindications: [
        'Contiene goitrogenos que pueden afectar la funcion tiroidea en caso de consumo excesivo — se recomienda moderacion en caso de trastornos tiroideos',
        'Contiene fitatos — el remojo y la coccion reducen los antinutrientes',
      ],
      classicalReference: 'BEDCA / USDA FoodData Central',
    },

    history: {
      originRegion: 'Norte de China (sitio arqueologico de Cishan)',
      domesticationPeriod: 'Hace aproximadamente 10 000 anos (~8 000 a. C.) — el mijo domesticado mas antiguo',
      archaeologicalEvidence:
        'Las excavaciones del sitio de Cishan en China han desenterrado restos de mijo proso datados alrededor del 8 000 a. C., lo que lo convierte en el mijo domesticado mas antiguo de la historia de la humanidad y uno de los primeros cereales cultivados del mundo.',
      spreadPattern:
        'Desde China, el mijo proso se expandio hacia el oeste a traves de Asia central hasta Europa, donde se convirtio en un alimento basico fundamental. Los romanos lo cultivaron abundantemente en toda Hispania (la peninsula iberica), y las legiones romanas dependian de el como racion alimentaria. En la Espana medieval, el mijo proso seguia siendo un cultivo comun antes de ser gradualmente desplazado por el trigo y el arroz durante el Renacimiento.',
      culturalSignificance:
        'El mijo proso es historicamente uno de los cereales mas importantes de la civilizacion humana. Es el "mijo" mencionado en los textos historicos europeos, desde Plinio el Viejo hasta las cronicas medievales. Alimentaba a las legiones romanas, a los campesinos ibericos y a las poblaciones de Europa central. En la peninsula iberica, fue un cultivo esencial durante siglos, y su huella persiste en la toponimia y las tradiciones agrarias de diversas regiones espanolas. Hoy es un cereal que merece ser redescubierto en el marco de una alimentacion sostenible.',
    },

    cultivation: {
      majorStates: ['China', 'Rusia', 'Ucrania', 'Estados Unidos', 'India'],
      globalRegions: [
        'China',
        'Rusia',
        'Asia central',
        'Europa (historico)',
        'America del Norte (cultivo para aves)',
      ],
      growingSeason: 'Verano (junio-septiembre); temporada calida',
      waterRequirement: '250-400 mm de lluvia',
      soilType: 'Suelos ligeros y bien drenados; tolera suelos pobres',
      harvestDays: '60-75 dias (la temporada mas corta entre los mijos)',
    },

    cooking: {
      waterRatio: '1:3',
      soakingTime: '20 a 30 minutos',
      cookingTime: '15-20 minutos',
      texture: 'Esponjoso, similar al cuscus',
      flavorProfile: 'Suave, ligeramente dulce',
      bestSubstituteFor: 'Cuscus, bulgur, arroz',
      tips: [
        'Remojar de 20 a 30 minutos antes de cocinar para una textura optima',
        'Cocinar en olla como el arroz — los granos quedan esponjosos y se separan bien',
        'Su textura similar al cuscus lo convierte en un sustituto ideal en ensaladas y tabules',
        'Tostar en seco en una sarten antes de cocinar para un aroma mas avellanado',
        'Se puede moler en harina para preparar tortillas, arepas o espesar sopas',
        'Excelente como base para platos al estilo pilaf o acompanando guisos tradicionales',
      ],
    },

    healthBenefits: [
      {
        benefit: 'Contenido en proteinas mas alto entre los mijos menores',
        description:
          'El mijo proso contiene 12,5 g de proteinas por 100 g, el contenido mas alto entre los mijos menores. Es una excelente fuente de proteinas vegetales, particularmente valiosa en dietas vegetarianas y veganas.',
        evidenceLevel: 'well-established',
        source: 'BEDCA / USDA FoodData Central',
      },
      {
        benefit: 'Lecitina beneficiosa para la salud hepatica',
        description:
          'El mijo proso contiene lecitina, un fosfolipido que apoya la funcion hepatica y puede ayudar al metabolismo de las grasas. Estudios preliminares sugieren un efecto protector sobre el higado.',
        evidenceLevel: 'preliminary-evidence',
        source: 'Journal of Cereal Science',
      },
      {
        benefit: 'Cultivo sostenible con muy baja huella ecologica',
        description:
          'Con la temporada de crecimiento mas corta entre los mijos (60-75 dias) y necesidades de agua muy bajas (250-400 mm), el mijo proso es uno de los cereales mas respetuosos con el clima, una ventaja fundamental en el contexto del cambio climatico.',
        evidenceLevel: 'well-established',
        source: 'FAO / Division de cultivos sostenibles',
      },
      {
        benefit: 'Rico en vitaminas del grupo B, especialmente niacina',
        description:
          'El mijo proso es una buena fuente de vitaminas del complejo B, en particular niacina (vitamina B3), esencial para el metabolismo energetico, el funcionamiento del sistema nervioso y la salud de la piel.',
        evidenceLevel: 'supported-by-research',
        source: 'Journal of Food Science and Technology',
      },
    ],

    sideEffects: [
      {
        condition: 'Contenido en goitrogenos',
        description:
          'Contiene goitrogenos que pueden interferir con la funcion tiroidea en caso de consumo excesivo. Las personas con trastornos tiroideos deben consumir el mijo proso con moderacion y consultar a su medico.',
        severity: 'consult-doctor',
      },
      {
        condition: 'Antinutrientes (fitatos)',
        description:
          'Contiene antinutrientes como los fitatos que pueden reducir la absorcion de ciertos minerales. El remojo, la germinacion y la coccion contribuyen a reducir significativamente los niveles de antinutrientes.',
        severity: 'mild',
      },
    ],

    isGlutenFree: true,
    relatedRecipes: [
      'gachas-de-mijo-proso',
      'bolitas-de-energia-de-mijo',
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
  // MIJO DE CIMA PARDA (BROWNTOP MILLET)
  // =============================================
  {
    slug: 'browntop-millet',
    name: 'Mijo de cima parda',
    commonName: 'Korale / Mijo marron',
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
    tagline: 'Campeon de la fibra — el mijo mas raro en pleno renacimiento',
    description:
      'El mijo de cima parda (Urochloa ramosa) ostenta el record absoluto de contenido en fibra entre todos los mijos: 12,5 g por 100 g. Es tambien el mijo mas raro a nivel comercial, cultivado casi exclusivamente en ciertos distritos de Karnataka en la India. Practicamente desaparecido como cultivo alimentario, experimenta hoy un renacimiento notable gracias a agricultores comprometidos con la preservacion de la biodiversidad agricola. Con un indice glucemico muy bajo (~47) y un contenido apreciable en proteinas (11,5 g/100 g), representa un potencial nutricional excepcional para la alimentacion del futuro. Para el mundo hispanohablante, donde la diversificacion de cereales es cada vez mas valorada, este mijo ofrece una oportunidad unica de enriquecer la dieta con granos ancestrales.',

    names: {
      english: 'Browntop Millet',
      hindi: 'Chhoti Kangni',
      tamil: 'Panippul',
      telugu: 'Anda Korralu',
      kannada: 'Korale',
      malayalam: 'Thottakura',
      marathi: 'Harik',
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
      source: 'BEDCA / USDA FoodData Central',
      sourceDetail:
        'Datos nutricionales limitados. Valores derivados de la literatura cientifica publicada. Datos de magnesio y potasio no disponibles.',
    },

    glycemicIndex: {
      value: 47,
      category: 'low',
      source: 'Published literature on millet glycemic indices',
    },

    ayurveda: {
      rasa: ['Sabor astringente, ligeramente dulce'],
      guna: ['Ligero', 'Seco'],
      virya: 'Efecto refrescante',
      vipaka: 'Digestion progresiva',
      doshaEffect: {
        vata: 'neutral',
        pitta: 'neutral',
        kapha: 'neutral',
      },
      therapeuticUses: [
        'Contenido en fibra mas alto de todos los mijos (12,5 g/100 g), excepcional para la salud intestinal',
        'Efecto prebiotico: favorece el crecimiento de las bacterias intestinales beneficiosas',
        'Indice glucemico muy bajo (~47), beneficioso para el control de la glucemia',
        'Rico en compuestos fenolicos con propiedades antioxidantes y antiinflamatorias',
        'Buen contenido en proteinas (11,5 g/100 g), apoya la masa muscular',
      ],
      contraindications: [
        'El contenido muy alto en fibra puede provocar molestias digestivas si el mijo se introduce demasiado rapidamente — aumentar las porciones de forma gradual',
        'Disponibilidad comercial limitada — asegurarse de la calidad y frescura del producto',
      ],
      classicalReference: 'BEDCA / USDA FoodData Central',
    },

    history: {
      originRegion: 'Sudeste asiatico y subcontinente indio',
      domesticationPeriod: 'Antiguo (periodo exacto no documentado)',
      archaeologicalEvidence:
        'La documentacion arqueologica es limitada. El mijo de cima parda es conocido por haber sido cultivado tradicionalmente en las regiones montanosas de Karnataka desde hace siglos. Estuvo a punto de desaparecer como cultivo alimentario antes de los recientes esfuerzos de revitalizacion.',
      spreadPattern:
        'Originario del sudeste asiatico y la India, el mijo de cima parda ha permanecido confinado a las regiones montanosas de Karnataka, con una difusion limitada hacia los estados vecinos. Es uno de los mijos menos extendidos del mundo.',
      culturalSignificance:
        'El mijo de cima parda encarna una autentica historia de renacimiento agricola. Casi perdido a causa de la modernizacion de la agricultura, ha sido recuperado por agricultores comprometidos de Karnataka. Simboliza el movimiento creciente de revitalizacion de los cereales autoctonos olvidados y de preservacion de la biodiversidad agricola — un desafio crucial a nivel mundial en el contexto del cambio climatico.',
    },

    cultivation: {
      majorStates: ['Karnataka (India)', 'Regiones limitadas del sudeste asiatico'],
      globalRegions: ['Sur de Asia (principalmente India)', 'Sudeste asiatico'],
      growingSeason: 'Temporada de lluvias (junio-octubre)',
      waterRequirement: '300-400 mm de lluvia',
      soilType: 'Suelos rojos gravelosos y lateriticos; crece en terrenos pobres y montanosos',
      harvestDays: '90-100 dias',
    },

    cooking: {
      waterRatio: '1:2,5',
      soakingTime: '6 a 8 horas',
      cookingTime: '20-25 minutos',
      texture: 'Similar al arroz, firme',
      flavorProfile: 'Suave, ligeramente avellanado',
      bestSubstituteFor: 'Arroz (en guisos y gratinados)',
      tips: [
        'Remojar de 6 a 8 horas o toda la noche para un resultado optimo',
        'Cocinar en olla como el arroz tras un buen remojo',
        'Su textura firme lo hace ideal para guisos en cazuela, potajes y gratinados',
        'Se puede moler en harina para preparar tortillas, arepas o galletas',
        'Comenzar con porciones pequenas y aumentar progresivamente si es la primera vez que se consume este mijo',
      ],
    },

    healthBenefits: [
      {
        benefit: 'Contenido en fibra mas alto de todos los mijos',
        description:
          'El mijo de cima parda contiene 12,5 g de fibra por 100 g, el contenido mas alto entre todos los mijos. Esta riqueza excepcional en fibra apoya la salud digestiva, favorece la saciedad y contribuye al mantenimiento de niveles saludables de colesterol y glucemia.',
        evidenceLevel: 'well-established',
        source: 'Published literature on millet nutrition',
      },
      {
        benefit: 'Indice glucemico muy bajo',
        description:
          'Con un IG de aproximadamente 47, el mijo de cima parda libera la glucosa muy lentamente, lo que lo convierte en una opcion cerealista excelente para personas que gestionan su diabetes o buscan niveles de energia estables a lo largo del dia.',
        evidenceLevel: 'supported-by-research',
        source: 'Published literature on millet glycemic indices',
      },
      {
        benefit: 'Riqueza en fitoquimicos',
        description:
          'Contiene diversos compuestos fitoquimicos, especialmente compuestos fenolicos con propiedades antioxidantes y antiinflamatorias. Las investigaciones en curso sugieren un potencial prometedor de proteccion celular.',
        evidenceLevel: 'preliminary-evidence',
        source: 'Journal of Food Science and Technology',
      },
      {
        benefit: 'Apoyo a la salud intestinal',
        description:
          'El contenido muy alto en fibra actua como un prebiotico natural, favoreciendo el crecimiento de las bacterias intestinales beneficiosas y apoyando la salud global de la microbiota y la regularidad digestiva.',
        evidenceLevel: 'supported-by-research',
        source: 'Nutrition Research Reviews',
      },
    ],

    sideEffects: [
      {
        condition: 'Disponibilidad comercial limitada',
        description:
          'El mijo de cima parda es el mijo mas raro a nivel comercial y puede ser dificil de encontrar. Su disponibilidad se limita principalmente a Karnataka (India) y a ciertas tiendas especializadas en linea.',
        severity: 'mild',
      },
      {
        condition: 'Molestias digestivas por alto contenido en fibra',
        description:
          'El contenido muy alto en fibra (12,5 g por 100 g) puede provocar molestias digestivas, hinchazon o gases si este mijo se introduce demasiado rapidamente en la alimentacion. Se recomienda encarecidamente una introduccion progresiva.',
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
