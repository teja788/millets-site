import type { Millet } from '@/lib/types';

export const majorMillets: Millet[] = [
  // =============================================
  // MIJO PERLA (Pearl Millet / Bajra)
  // =============================================
  {
    slug: 'pearl-millet',
    name: 'Mijo perla',
    commonName: 'Bajra / Mijo perla',
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
    tagline: 'El mijo mas cultivado del mundo, pilar alimentario del Sahel a Asia del Sur',
    description:
      'El mijo perla (Pennisetum glaucum) es el mijo mas cultivado del mundo y el sexto cereal en importancia a escala global. Es el alimento basico de cientos de millones de personas en las zonas aridas y semiaridas de Africa occidental, desde Senegal hasta Niger. Extraordinariamente resistente a la sequia y al calor, prospera en suelos arenosos con un minimo de lluvia. Rico en hierro (8 mg/100 g), proteinas (11,6 g/100 g) y energia, constituye una verdadera potencia nutricional para las poblaciones de regiones aridas. En America Latina y Espana, el mijo perla esta ganando reconocimiento como cereal nutritivo y sin gluten, ideal para dietas saludables y sostenibles. Naturalmente libre de gluten, es una alternativa valiosa para personas con intolerancia.',

    names: {
      english: 'Pearl Millet',
      hindi: 'Bajra',
      tamil: 'Kambu',
      telugu: 'Sajjalu',
      kannada: 'Sajje',
      malayalam: 'Kambam',
      marathi: 'Bajri',
      bengali: 'Bajra',
      gujarati: 'Bajri',
      odia: 'Bajra',
      punjabi: 'Bajra',
      sanskrit: 'Vajranna',
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
      source: 'BEDCA / USDA FoodData Central',
      sourceDetail: 'Base de Datos Espanola de Composicion de Alimentos (BEDCA) y USDA FoodData Central',
    },

    glycemicIndex: {
      value: 55,
      category: 'low',
      source: 'International Tables of Glycemic Index and Glycemic Load Values, 2021',
    },

    ayurveda: {
      rasa: ['Sabor dulce y terroso'],
      guna: ['Consistente', 'Untuoso'],
      virya: 'Efecto calentador',
      vipaka: 'Facil de asimilar',
      doshaEffect: {
        vata: 'neutral',
        pitta: 'neutral',
        kapha: 'neutral',
      },
      therapeuticUses: [
        'Excelente fuente de hierro para combatir la anemia ferropenica',
        'Favorece la salud cardiovascular gracias al magnesio y al potasio',
        'Proporciona energia sostenida por su alto contenido calorico y proteico',
        'Favorece la lactancia en mujeres en periodo de amamantamiento',
        'Apto para dietas sin gluten',
      ],
      contraindications: [
        'Puede provocar hinchazon abdominal en personas no habituadas a los mijos — se recomienda una introduccion gradual',
        'Contiene goitrogenos en estado crudo; la coccion reduce significativamente su contenido',
      ],
      classicalReference: 'BEDCA / USDA FoodData Central',
    },

    history: {
      originRegion: 'Region del Sahel, Africa occidental',
      domesticationPeriod: 'Hace aproximadamente 4 500 anos (~2 500 a. C.)',
      archaeologicalEvidence:
        'Los vestigios mas antiguos de domesticacion provienen de la region saheliana, entre el actual Senegal y Chad. Restos arqueologicos en la India (Gujarat) datados alrededor del 2 000 a. C. confirman una difusion temprana hacia Asia del Sur.',
      spreadPattern:
        'Domesticado en la region del Sahel en Africa occidental, el mijo perla se extendio hacia la India alrededor del 2 000 a. C. a traves de las antiguas rutas comerciales por el mar Arabigo. Hoy se cultiva en toda Africa subsahariana, Asia del Sur y algunas regiones de Europa meridional y America Latina.',
      culturalSignificance:
        'El mijo perla esta profundamente arraigado en la cultura alimentaria del Sahel. En Senegal, el "thiere" (cuscus de mijo) es un plato emblematico. En Niger, la papilla de mijo es el alimento basico diario. En el mundo hispanohablante, el mijo esta experimentando un resurgimiento como parte de las dietas sin gluten y la agricultura sostenible. En Mexico y America Central, donde la diversidad de granos tiene una larga tradicion, el mijo complementa la rica herencia cerealista de maiz y amaranto.',
    },

    cultivation: {
      majorStates: ['Niger', 'Mali', 'Senegal', 'Burkina Faso', 'Chad'],
      globalRegions: ['Africa occidental (Sahel)', 'Africa oriental', 'Asia del Sur'],
      growingSeason: 'Temporada de lluvias (junio-octubre); temporada calida y humeda',
      waterRequirement: '350-500 mm de lluvia',
      soilType: 'Suelos arenosos y limosos; tolera suelos pobres y secos',
      harvestDays: '65-85 dias',
    },

    cooking: {
      waterRatio: '1:3',
      soakingTime: 'No requiere remojo',
      cookingTime: '20-25 minutos',
      texture: 'Ligeramente granuloso y con sabor a nuez',
      flavorProfile: 'Dulce, terroso',
      bestSubstituteFor: 'Harina de trigo (para tortillas y panes planos)',
      tips: [
        'Se utiliza principalmente en forma de harina para preparar tortillas, cuscus de mijo o papillas',
        'Mezcle con harina de trigo (50:50) para un sabor mas suave si esta descubriendo el mijo',
        'Sirva las tortillas de mijo calientes con mantequilla o aceite de oliva para un mejor sabor',
        'La harina de mijo no se conserva mucho tiempo — muela fresca o conserve en el refrigerador',
        'En la cocina latinoamericana, la harina de mijo puede sustituir parcialmente la harina de maiz en arepas y pupusas para mayor valor nutricional',
      ],
    },

    healthBenefits: [
      {
        benefit: 'Fuente rica en hierro',
        description:
          'El mijo perla contiene 8,0 mg de hierro por 100 g, lo que lo convierte en una de las mejores fuentes vegetales de hierro entre los cereales. Esto ayuda a combatir la anemia ferropenica, un problema de salud importante en muchas regiones del mundo.',
        evidenceLevel: 'well-established',
        source: 'BEDCA / USDA FoodData Central',
      },
      {
        benefit: 'Favorece la salud cardiovascular',
        description:
          'El contenido de magnesio (137 mg) y potasio (307 mg) del mijo perla favorece la salud cardiaca al ayudar a regular la presion arterial y mantener un ritmo cardiaco saludable.',
        evidenceLevel: 'supported-by-research',
        source: 'Journal of Food Science and Technology',
      },
      {
        benefit: 'Apto para el manejo de la diabetes',
        description:
          'Con un indice glucemico de aproximadamente 55, el mijo perla libera la glucosa lentamente en la sangre, lo que lo hace adecuado para personas que gestionan su glucemia o diabetes.',
        evidenceLevel: 'supported-by-research',
        source: 'International Journal of Food Sciences and Nutrition',
      },
      {
        benefit: 'Cereal de alta energia',
        description:
          'Con 361 calorias por 100 g, un buen contenido de proteinas (11,6 g) y lipidos (5,0 g), el mijo perla es una excelente fuente de energia, particularmente para personas fisicamente activas.',
        evidenceLevel: 'well-established',
        source: 'BEDCA / USDA FoodData Central',
      },
    ],

    sideEffects: [
      {
        condition: 'Malestar digestivo',
        description:
          'Puede provocar hinchazon en algunas personas al principio, especialmente en quienes no estan habituados al consumo de mijo. Se recomienda una introduccion gradual.',
        severity: 'mild',
      },
      {
        condition: 'Contenido de goitrogenos',
        description:
          'Contiene goitrogenos en forma cruda que pueden afectar la funcion tiroidea. La coccion reduce significativamente su contenido, haciendo que el consumo normal sea seguro.',
        severity: 'moderate',
      },
    ],

    isGlutenFree: true,
    relatedRecipes: [
      'gachas-de-mijo',
      'ensalada-de-mijo-mediterranea',
      'mijo-con-chorizo-y-garbanzos',
    ],
    sources: [
      'anses-ciqual',
      'usda-fdc',
      'fao-millets-nutrition',
      'icrisat-pearl-millet',
    ],
  },

  // =============================================
  // ELEUSINE / RAGI (Finger Millet / Ragi)
  // =============================================
  {
    slug: 'finger-millet',
    name: 'Eleusine / Ragi',
    commonName: 'Ragi / Mijo dedo',
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
    tagline: 'La campeona del calcio — la fuente no lactea mas rica en calcio entre los cereales',
    description:
      'La eleusine (Eleusine coracana) es reconocida como la campeona del calcio en el mundo de los cereales, con un contenido extraordinario de 344 mg por 100 g — el mas alto de todos los cereales, comparable a la leche. Originaria de las tierras altas de Etiopia, se cultiva desde hace mas de 5 000 anos en Africa oriental y Asia del Sur. En Uganda y Etiopia sigue siendo un alimento basico fundamental. Naturalmente libre de gluten, es especialmente recomendada para la salud osea, la nutricion infantil y las personas mayores. En el mundo hispanohablante, esta ganando interes como superalimento sin gluten y fuente excepcional de calcio vegetal.',

    names: {
      english: 'Finger Millet',
      hindi: 'Ragi / Mandua',
      tamil: 'Kezhvaragu',
      telugu: 'Ragi',
      kannada: 'Ragi',
      malayalam: 'Mutthari',
      marathi: 'Nachni',
      bengali: 'Marua',
      gujarati: 'Nagli',
      odia: 'Mandia',
      punjabi: 'Mandua',
      sanskrit: 'Madhulika',
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
      source: 'BEDCA / USDA FoodData Central',
      sourceDetail: 'Base de Datos Espanola de Composicion de Alimentos (BEDCA) y USDA FoodData Central',
    },

    glycemicIndex: {
      value: 61,
      category: 'medium',
      source: 'International Tables of Glycemic Index and Glycemic Load Values, 2021',
    },

    ayurveda: {
      rasa: ['Sabor dulce, ligeramente astringente'],
      guna: ['Ligero', 'Facil de digerir'],
      virya: 'Efecto refrescante',
      vipaka: 'Digestion suave',
      doshaEffect: {
        vata: 'neutral',
        pitta: 'neutral',
        kapha: 'neutral',
      },
      therapeuticUses: [
        'Excepcional fuente de calcio vegetal (344 mg/100 g) para la salud osea',
        'Recomendada para el crecimiento infantil y la prevencion de la osteoporosis',
        'Rica en polifenoles y fibra que ralentizan la absorcion de glucosa',
        'Favorece el control del peso gracias a su ligereza y efecto saciante',
        'Utilizada en dietas de convalecencia por su digestibilidad',
      ],
      contraindications: [
        'Un consumo excesivo sin hidratacion suficiente puede provocar estrenimiento',
        'Las personas propensas a calculos renales (tipo oxalato de calcio) deben consumir con moderacion',
      ],
      classicalReference: 'BEDCA / USDA FoodData Central',
    },

    history: {
      originRegion: 'Tierras altas de Etiopia, Africa oriental',
      domesticationPeriod: 'Hace aproximadamente 5 000 anos (~3 000 a. C.)',
      archaeologicalEvidence:
        'Las primeras evidencias de domesticacion provienen de las tierras altas de Etiopia. Restos arqueologicos en Hallur, en el sur de la India, datados alrededor del 1 800 a. C., confirman una difusion temprana hacia Asia del Sur.',
      spreadPattern:
        'Domesticada en las tierras altas de Etiopia, la eleusine se propago hacia la India alrededor del 3 000 a. C., estableciendose como cultivo importante en la meseta del Deccan y las colinas del sur de la India. Sigue siendo un alimento basico en Uganda, Kenia y Etiopia.',
      culturalSignificance:
        'La eleusine ocupa un lugar central en la alimentacion de Africa oriental: en Uganda, la cerveza de mijo rojo ("bushera") es una bebida tradicional ancestral; en Etiopia, forma parte de papillas nutritivas. En el mundo hispanohablante, los mijos estan siendo redescubiertos como superalimentos sin gluten. La rica tradicion de granos antiguos en America Latina — quinoa, amaranto, chia — facilita la acogida de la eleusine como otro cereal ancestral con propiedades nutricionales excepcionales.',
    },

    cultivation: {
      majorStates: ['Etiopia', 'Uganda', 'Kenia', 'Tanzania', 'Nepal'],
      globalRegions: ['Africa oriental (Etiopia, Uganda, Kenia)', 'Asia del Sur', 'Nepal'],
      growingSeason: 'Temporada de lluvias (junio-octubre)',
      waterRequirement: '500-750 mm de lluvia',
      soilType: 'Suelos lateriticos rojos y limosos; tolera suelos ligeramente acidos',
      harvestDays: '90-120 dias',
    },

    cooking: {
      waterRatio: '1:3,5',
      soakingTime: 'No requiere remojo para la harina',
      cookingTime: '15-20 minutos (papilla)',
      texture: 'Suave en papilla, ligeramente granuloso en harina',
      flavorProfile: 'Dulce, ligeramente azucarado, terroso',
      bestSubstituteFor: 'Harina de trigo o de arroz (para papillas y reposteria)',
      tips: [
        'Para una papilla suave, vierta la harina en forma de lluvia fina en el agua hirviendo removiendo vigorosamente para evitar grumos',
        'Mezcle la harina de eleusine con azucar moreno y canela para un desayuno nutritivo',
        'Utilicela en reposteria sin gluten: crepes, bizcochos, galletas',
        'La harina germinada ofrece una mejor biodisponibilidad de nutrientes',
        'En la cocina hispanica, puede incorporarse a atoles y bebidas calientes tradicionales como alternativa nutritiva',
      ],
    },

    healthBenefits: [
      {
        benefit: 'Fuente excepcional de calcio',
        description:
          'La eleusine contiene 344 mg de calcio por 100 g, el contenido mas alto de todos los cereales y comparable a la leche. Es invaluable para la salud osea, especialmente para personas con intolerancia a la lactosa.',
        evidenceLevel: 'well-established',
        source: 'BEDCA / USDA FoodData Central',
      },
      {
        benefit: 'Prevencion de la osteoporosis',
        description:
          'Los altos contenidos de calcio y fosforo favorecen la densidad osea y pueden ayudar a prevenir la osteoporosis, especialmente en mujeres posmenopausicas y personas mayores.',
        evidenceLevel: 'supported-by-research',
        source: 'Journal of Bone and Mineral Research',
      },
      {
        benefit: 'Apta para el manejo de la diabetes',
        description:
          'La eleusine contiene aminoacidos que ayudan a moderar la respuesta glucemica. Su cubierta es rica en polifenoles y fibra alimentaria que ralentizan la absorcion de glucosa.',
        evidenceLevel: 'supported-by-research',
        source: 'Journal of Agricultural and Food Chemistry',
      },
      {
        benefit: 'Rica en antioxidantes',
        description:
          'Contiene acidos fenolicos, flavonoides y taninos con actividad antioxidante significativa, que ayudan a combatir el estres oxidativo en el organismo.',
        evidenceLevel: 'supported-by-research',
        source: 'Food Chemistry',
      },
      {
        benefit: 'Excelente para la nutricion infantil y de personas mayores',
        description:
          'La papilla de eleusine se utiliza tradicionalmente como primer alimento complementario para lactantes en Africa oriental y Asia del Sur. Su digestibilidad y riqueza en calcio la hacen ideal tambien para la alimentacion de personas mayores.',
        evidenceLevel: 'well-established',
        source: 'Indian Pediatrics',
      },
    ],

    sideEffects: [
      {
        condition: 'Contenido de oxalatos',
        description:
          'La eleusine contiene oxalatos que pueden interferir con la absorcion de calcio en algunos casos y contribuir a la formacion de calculos renales en personas predispuestas.',
        severity: 'mild',
      },
      {
        condition: 'Riesgo de estrenimiento',
        description:
          'Puede provocar estrenimiento en caso de consumo excesivo sin hidratacion suficiente, debido a su naturaleza seca.',
        severity: 'mild',
      },
    ],

    isGlutenFree: true,
    relatedRecipes: [
      'galletas-de-ragi',
      'papilla-de-ragi-con-canela',
      'bizcocho-de-mijo-sin-gluten',
      'batido-de-ragi-y-platano',
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
  // SORGO (Sorghum / Jowar)
  // =============================================
  {
    slug: 'sorghum',
    name: 'Sorgo',
    commonName: 'Jowar / Sorgo',
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
    tagline: 'El cereal versatil — rico en fibra, antioxidantes y posibilidades culinarias',
    description:
      'El sorgo (Sorghum bicolor) es uno de los cereales mas versatiles y cultivados del mundo, quinto cereal en importancia a escala global. Originario del noreste de Africa, es un pilar alimentario en Africa subsahariana, desde Burkina Faso hasta Sudan. Destaca por su altisimo contenido en fibra (9,7 g/100 g) y su rico perfil antioxidante. El sorgo se prepara en forma de tortillas, papillas, cuscus e incluso bebidas fermentadas como el dolo en Africa occidental. Naturalmente libre de gluten, esta experimentando un notable auge en Espana y America Latina en los mercados de productos organicos y las panaderias artesanales sin gluten.',

    names: {
      english: 'Sorghum',
      hindi: 'Jowar',
      tamil: 'Cholam',
      telugu: 'Jonnalu',
      kannada: 'Jola',
      malayalam: 'Cholam',
      marathi: 'Jwari',
      bengali: 'Jowar',
      gujarati: 'Juvar',
      odia: 'Juara',
      punjabi: 'Jawar',
      sanskrit: 'Yavanala',
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
      source: 'BEDCA / USDA FoodData Central',
      sourceDetail: 'Base de Datos Espanola de Composicion de Alimentos (BEDCA) y USDA FoodData Central',
    },

    glycemicIndex: {
      value: 62,
      category: 'medium',
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
        'Favorece la salud digestiva gracias a su altisimo contenido en fibra (9,7 g/100 g)',
        'Rico en compuestos fenolicos y antioxidantes con propiedades protectoras',
        'Favorece el control del peso por su efecto saciante duradero',
        'Contribuye a la salud cardiovascular gracias al magnesio y los policosanoles',
      ],
      contraindications: [
        'Los taninos del sorgo pueden reducir la absorcion de hierro — a tener en cuenta en caso de anemia',
        'Un consumo excesivo puede provocar sequedad digestiva — acompanar de una grasa saludable',
      ],
      classicalReference: 'BEDCA / USDA FoodData Central',
    },

    history: {
      originRegion: 'Noreste de Africa (region Sudan-Etiopia)',
      domesticationPeriod: 'Hace aproximadamente 5 000 a 8 000 anos',
      archaeologicalEvidence:
        'El sorgo es uno de los primeros cereales cultivados en Africa. Restos arqueologicos en la region sudano-etiope atestiguan una domesticacion muy antigua. Su presencia en la India esta confirmada desde aproximadamente el 2 000 a. C. por vestigios en la meseta del Deccan.',
      spreadPattern:
        'Domesticado en el noreste de Africa, el sorgo se propago a lo largo de las rutas comerciales hacia la India desde el 2 000 a. C., y luego hacia China y el sudeste asiatico. Fue introducido en Europa y las Americas a partir del siglo XVI.',
      culturalSignificance:
        'El sorgo esta profundamente arraigado en las culturas alimentarias africanas. En Burkina Faso, el "to" de sorgo es el plato nacional. En Mali y Niger, sirve de base para cuscus y papillas. En las Americas, el sorgo llego con la colonizacion y se ha convertido en un cultivo importante en Argentina, Mexico y Estados Unidos. En la gastronomia hispanohablante actual, la harina de sorgo esta ganando presencia en la elaboracion de panes artesanales, tortillas y reposteria sin gluten, conectandose con la creciente tendencia de alimentacion consciente y sostenible.',
    },

    cultivation: {
      majorStates: ['Nigeria', 'Burkina Faso', 'Mali', 'Sudan', 'Etiopia'],
      globalRegions: ['Africa subsahariana', 'Asia del Sur', 'Americas', 'Australia', 'Europa meridional'],
      growingSeason: 'Temporada de lluvias y temporada seca (posible cultivo en dos ciclos)',
      waterRequirement: '400-600 mm de lluvia',
      soilType: 'Suelos arcillosos negros (vertisoles), arcillo-limosos; tolera suelos alcalinos',
      harvestDays: '100-120 dias',
    },

    cooking: {
      waterRatio: '1:2,5',
      soakingTime: 'Remojo opcional de 4 a 6 horas (granos enteros)',
      cookingTime: '25-30 minutos',
      texture: 'Firme, ligeramente crujiente',
      flavorProfile: 'Dulce, ligeramente azucarado, neutro',
      bestSubstituteFor: 'Arroz o trigo (para tortillas y guarniciones)',
      tips: [
        'La harina de sorgo es excelente para tortillas cocidas a la plancha — amase la masa aun tibia para mayor flexibilidad',
        'Los granos enteros pueden cocinarse como arroz despues de remojarlos en una olla o arrocera',
        'El sorgo inflado (tipo palomitas) es un aperitivo saludable y divertido',
        'La harina de sorgo no contiene gluten — anada un aglutinante (huevo, goma guar) para reposteria',
        'En la cocina latinoamericana, la harina de sorgo puede mezclarse con harina de maiz para tortillas y arepas con mayor valor nutricional',
      ],
    },

    healthBenefits: [
      {
        benefit: 'Altisimo contenido en fibra para la salud digestiva',
        description:
          'El sorgo contiene 9,7 g de fibra por 100 g, entre los contenidos mas altos de todos los cereales. Esto favorece una digestion saludable, un transito regular y la diversidad de la microbiota intestinal.',
        evidenceLevel: 'well-established',
        source: 'BEDCA / USDA FoodData Central',
      },
      {
        benefit: 'Rico en compuestos fenolicos y antioxidantes',
        description:
          'El sorgo es rico en 3-desoxiantocianinas, taninos y acidos fenolicos que poseen fuertes propiedades antioxidantes, pudiendo reducir los danos oxidativos en el organismo.',
        evidenceLevel: 'supported-by-research',
        source: 'Journal of Cereal Science',
      },
      {
        benefit: 'Potencial anticancerigeno en estudio',
        description:
          'Los taninos y otros compuestos fenolicos del sorgo han mostrado potencial anticancerigeno en estudios preliminares, especialmente contra las celulas del cancer de colon.',
        evidenceLevel: 'preliminary-evidence',
        source: 'Nutrition and Cancer journal',
      },
      {
        benefit: 'Favorece la salud cardiovascular',
        description:
          'El alto contenido en fibra y magnesio, combinado con los policosanoles presentes en la cera del sorgo, puede ayudar a reducir el colesterol y favorecer la salud cardiovascular.',
        evidenceLevel: 'supported-by-research',
        source: 'Journal of Agricultural and Food Chemistry',
      },
    ],

    sideEffects: [
      {
        condition: 'Interaccion taninos-hierro',
        description:
          'Los taninos contenidos en el sorgo pueden reducir la absorcion del hierro proveniente de otros alimentos. Las personas con deficiencia de hierro deben evitar asociar el sorgo con alimentos ricos en hierro en la misma comida.',
        severity: 'moderate',
      },
      {
        condition: 'Adaptacion digestiva inicial',
        description:
          'Puede provocar gases e hinchazon al principio en personas no habituadas a alimentos ricos en fibra. Se recomienda una introduccion gradual.',
        severity: 'mild',
      },
    ],

    isGlutenFree: true,
    relatedRecipes: [
      'ensalada-de-sorgo-mediterranea',
      'gratin-de-sorgo-con-verduras',
      'pan-de-mijo-sin-gluten',
    ],
    sources: [
      'anses-ciqual',
      'usda-fdc',
      'fao-millets-nutrition',
      'fao-sorghum-millets-1995',
    ],
  },

  // =============================================
  // MIJO COLA DE ZORRO (Foxtail Millet / Kangni)
  // =============================================
  {
    slug: 'foxtail-millet',
    name: 'Mijo cola de zorro',
    commonName: 'Kangni / Mijo italiano',
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
    tagline: 'Uno de los mijos mas antiguos cultivados — rico en proteinas, alternativa ideal al arroz',
    description:
      'El mijo cola de zorro (Setaria italica), tambien llamado mijo italiano, es uno de los cultivos mas antiguos de la humanidad, con evidencias de domesticacion en el norte de China que datan de cerca de 9 000 anos. Cultivado en toda Europa desde la Antiguedad, era un cereal comun en Espana e Italia antes de la introduccion del maiz. Rico en proteinas (12,3 g/100 g), en fibra alimentaria y con un bajo indice glucemico (~50), ofrece una textura aireada similar al arroz una vez cocido. Naturalmente libre de gluten y extremadamente resistente a la sequia, esta despertando un renovado interes en Europa y America Latina como cultivo sostenible y alimento nutritivo.',

    names: {
      english: 'Foxtail Millet',
      hindi: 'Kangni',
      tamil: 'Thinai',
      telugu: 'Korralu',
      kannada: 'Navane',
      malayalam: 'Thina',
      marathi: 'Kang / Rala',
      bengali: 'Kaon',
      gujarati: 'Kang',
      odia: 'Kangu',
      punjabi: 'Kangni',
      sanskrit: 'Priyangu',
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
      source: 'BEDCA / USDA FoodData Central',
      sourceDetail: 'Base de Datos Espanola de Composicion de Alimentos (BEDCA) y USDA FoodData Central',
    },

    glycemicIndex: {
      value: 50,
      category: 'low',
      source: 'International Tables of Glycemic Index and Glycemic Load Values, 2021',
    },

    ayurveda: {
      rasa: ['Sabor a nuez, ligeramente dulce'],
      guna: ['Ligero', 'Seco'],
      virya: 'Efecto ligeramente calentador',
      vipaka: 'Digestion progresiva',
      doshaEffect: {
        vata: 'neutral',
        pitta: 'neutral',
        kapha: 'neutral',
      },
      therapeuticUses: [
        'Alto contenido en proteinas vegetales (12,3 g/100 g), ideal para vegetarianos',
        'Bajo indice glucemico (~50) apto para personas diabeticas',
        'Rico en fibra alimentaria (8 g/100 g) que favorece la saciedad y el transito',
        'Buena fuente de vitaminas del grupo B esenciales para el metabolismo energetico',
        'Contribuye al control del peso gracias a su efecto saciante prolongado',
      ],
      contraindications: [
        'Contiene goitrogenos que pueden afectar la tiroides con un consumo muy elevado — las personas con trastornos tiroideos deben consultar',
        'El grano con cascara necesita un procesado adecuado antes de la coccion para una mejor digestibilidad',
      ],
      classicalReference: 'BEDCA / USDA FoodData Central',
    },

    history: {
      originRegion: 'Norte de China (sitio arqueologico de Cishan)',
      domesticationPeriod: 'Hace aproximadamente 8 700 anos (~6 700 a. C.)',
      archaeologicalEvidence:
        'Restos hallados en el sitio arqueologico de Cishan, en el norte de China, datados en aproximadamente 8 700 anos, lo convierten en uno de los cultivos cerealistas mas antiguos del mundo.',
      spreadPattern:
        'Domesticado en el norte de China, el mijo cola de zorro se extendio hacia el oeste a traves de las rutas comerciales de Asia central, llegando a la India, Oriente Medio y luego a Europa. Fue ampliamente cultivado en Europa durante la Antiguedad romana y la Edad Media.',
      culturalSignificance:
        'El mijo cola de zorro ocupo un lugar importante en la alimentacion europea antigua y medieval. En Italia se preparaban papillas con el (polenta de mijo). En la peninsula iberica fue cultivado hasta el siglo XVIII, antes de ser reemplazado gradualmente por el maiz y el trigo. Hoy experimenta un resurgimiento en la agricultura europea sostenible y los mercados de productos organicos. En America Latina, su perfil nutricional y su bajo requerimiento hidrico lo posicionan como un cultivo prometedor frente al cambio climatico.',
    },

    cultivation: {
      majorStates: [
        'China (norte)',
        'Europa (historico)',
        'Asia central',
        'India',
        'Myanmar',
      ],
      globalRegions: ['China', 'Sudeste asiatico', 'Asia del Sur', 'Europa (historico y resurgimiento actual)'],
      growingSeason: 'Temporada de lluvias (junio-octubre)',
      waterRequirement: '300-400 mm de lluvia',
      soilType: 'Suelos areno-limosos ligeros a medios; extremadamente resistente a la sequia',
      harvestDays: '75-90 dias',
    },

    cooking: {
      waterRatio: '1:2,5',
      soakingTime: '30 minutos',
      cookingTime: '15-20 minutos',
      texture: 'Aireado, similar al arroz',
      flavorProfile: 'A nuez, ligeramente dulce',
      bestSubstituteFor: 'Arroz (como guarnicion o en ensalada)',
      tips: [
        'Enjuague bien y remoje 30 minutos antes de la coccion para un resultado optimo',
        'Cocine como arroz — se hincha con elegancia y se separa bien con el tenedor',
        'Excelente en tabule, ensalada de granos o pilaf con verduras de temporada',
        'Puede utilizarse en postres: arroz con leche, flan de semola reinventado',
        'Tuestelo ligeramente en una sarten antes de cocinar para un sabor mas intenso a nuez',
      ],
    },

    healthBenefits: [
      {
        benefit: 'Alto contenido en proteinas',
        description:
          'El mijo cola de zorro contiene 12,3 g de proteinas por 100 g, uno de los contenidos mas altos entre los mijos, lo que lo convierte en una excelente fuente de proteinas vegetales.',
        evidenceLevel: 'well-established',
        source: 'BEDCA / USDA FoodData Central',
      },
      {
        benefit: 'Bajo indice glucemico apto para diabeticos',
        description:
          'Con un indice glucemico de aproximadamente 50, el mijo cola de zorro libera la glucosa de forma progresiva, lo que lo hace un grano adecuado para personas que gestionan su diabetes.',
        evidenceLevel: 'supported-by-research',
        source: 'International Journal of Diabetes in Developing Countries',
      },
      {
        benefit: 'Rico en fibra alimentaria',
        description:
          'Contiene 8,0 g de fibra por 100 g, favoreciendo la salud digestiva, la sensacion de saciedad y el mantenimiento de un nivel saludable de colesterol.',
        evidenceLevel: 'well-established',
        source: 'BEDCA / USDA FoodData Central',
      },
      {
        benefit: 'Buena fuente de vitaminas del grupo B',
        description:
          'El mijo cola de zorro es una buena fuente de vitaminas B, especialmente tiamina y niacina, esenciales para el metabolismo energetico y el correcto funcionamiento del sistema nervioso.',
        evidenceLevel: 'supported-by-research',
        source: 'Journal of Food Science and Technology',
      },
    ],

    sideEffects: [
      {
        condition: 'Contenido de goitrogenos',
        description:
          'Puede afectar la funcion tiroidea con niveles de consumo muy elevados debido a compuestos goitrogenicos. Las personas con trastornos tiroideos deben consumir con moderacion y consultar a su medico.',
        severity: 'consult-doctor',
      },
      {
        condition: 'Necesidad de descascarillado',
        description:
          'La variedad con cascara necesita un descascarillado adecuado antes de la coccion. Un grano mal procesado puede ser dificil de digerir.',
        severity: 'mild',
      },
    ],

    isGlutenFree: true,
    relatedRecipes: [
      'tabule-de-mijo',
    ],
    sources: [
      'anses-ciqual',
      'usda-fdc',
      'amadou-millets-2013',
      'lu-cishan-2009',
    ],
  },

  // =============================================
  // MIJO MENOR (Little Millet / Kutki)
  // =============================================
  {
    slug: 'little-millet',
    name: 'Mijo menor',
    commonName: 'Kutki / Mijo menor',
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
    tagline: 'El pequeno grano rico en hierro — sustituto perfecto del arroz con alto contenido en fibra',
    description:
      'El mijo menor (Panicum sumatrense) es un grano de pequeno tamano originario de la India, domesticado en la region de los Ghats orientales. A pesar de su modesto tamano, ofrece un perfil nutricional destacable: un altisimo contenido en hierro (9,3 mg/100 g) y una importante cantidad de fibra alimentaria (7,6 g/100 g). Su sabor neutro y su textura similar al arroz lo convierten en el sustituto de arroz mas cercano entre todos los mijos. Naturalmente libre de gluten, se cultiva desde tiempos inmemoriales en las regiones tribales y de secano del centro y sur de la India. Su potencial como cereal sostenible y nutritivo esta comenzando a atraer la atencion en el mundo hispanohablante.',

    names: {
      english: 'Little Millet',
      hindi: 'Kutki',
      tamil: 'Samai',
      telugu: 'Samalu',
      kannada: 'Same',
      malayalam: 'Chama',
      marathi: 'Vari / Sav',
      bengali: 'Sama',
      gujarati: 'Gajro / Moraiyo',
      odia: 'Suan',
      punjabi: 'Swank',
      sanskrit: 'Shyamaka',
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
      source: 'BEDCA / USDA FoodData Central',
      sourceDetail: 'Base de Datos Espanola de Composicion de Alimentos (BEDCA) y USDA FoodData Central',
    },

    glycemicIndex: {
      value: 52,
      category: 'low',
      source: 'International Tables of Glycemic Index and Glycemic Load Values, 2021',
    },

    ayurveda: {
      rasa: ['Sabor dulce y neutro'],
      guna: ['Ligero'],
      virya: 'Efecto refrescante',
      vipaka: 'Digestion suave',
      doshaEffect: {
        vata: 'neutral',
        pitta: 'neutral',
        kapha: 'neutral',
      },
      therapeuticUses: [
        'Contenido muy elevado en hierro (9,3 mg/100 g), ideal para la prevencion de la anemia',
        'Rico en fibra alimentaria (7,6 g/100 g) que favorece la salud digestiva',
        'Bajo indice glucemico (~52) apto para el manejo de la diabetes',
        'Su naturaleza suave y neutra lo hace bien tolerado por los sistemas digestivos sensibles',
        'Adecuado para dietas de convalecencia y recuperacion',
      ],
      contraindications: [
        'Pocas contraindicaciones debido a su naturaleza equilibrada',
        'Se recomienda el remojo antes de la coccion para reducir el contenido de acido fitico y mejorar la absorcion de minerales',
      ],
      classicalReference: 'BEDCA / USDA FoodData Central',
    },

    history: {
      originRegion: 'Region de los Ghats orientales, India',
      domesticationPeriod: 'Epoca antigua (periodo exacto incierto)',
      archaeologicalEvidence:
        'Originario de la India, el mijo menor tiene una larga historia de cultivo en las regiones tribales del centro y sur de la India. Los registros arqueologicos son limitados, pero las evidencias etnobotanicas respaldan un cultivo muy antiguo.',
      spreadPattern:
        'Domesticado en la region de los Ghats orientales de la India, el mijo menor ha permanecido principalmente como un cultivo indio, cultivado en regiones tribales y de secano. Se ha difundido modestamente hacia Myanmar y Sri Lanka.',
      culturalSignificance:
        'El mijo menor es un cultivo importante para las comunidades tribales de la India central, donde se cultiva como alimento de subsistencia desde hace milenios. Su sabor neutro y su textura similar al arroz lo hacen muy accesible para quienes desean sustituir el arroz blanco por un cereal mas nutritivo. Este modesto grano encarna la filosofia de los cereales olvidados, redescubiertos hoy por su valor nutricional y su adaptacion a suelos pobres — un tema de gran relevancia para la agricultura sostenible global y que resuena con la tradicion latinoamericana de recuperar granos ancestrales como la quinoa y el amaranto.',
    },

    cultivation: {
      majorStates: ['India (centro y sur)', 'Myanmar', 'Sri Lanka'],
      globalRegions: ['Asia del Sur (principalmente India)', 'Sudeste asiatico (Myanmar, Sri Lanka)'],
      growingSeason: 'Temporada de lluvias (junio-octubre)',
      waterRequirement: '300-500 mm de lluvia',
      soilType: 'Suelos areno-limosos a lateriticos rojos; crece bien en tierras marginales',
      harvestDays: '75-90 dias',
    },

    cooking: {
      waterRatio: '1:2,5',
      soakingTime: '30 minutos',
      cookingTime: '15 minutos',
      texture: 'Muy similar al arroz, ligeramente pegajoso',
      flavorProfile: 'Dulce, neutro',
      bestSubstituteFor: 'Arroz (el sustituto mas cercano entre todos los mijos)',
      tips: [
        'Remoje 30 minutos y enjuague bien antes de cocinar para una mejor digestibilidad',
        'Cocine exactamente como arroz — es el mijo mas facil para una transicion alimentaria',
        'Excelente en ensalada fria, tabule o como guarnicion con verduras',
        'Se presta bien a la coccion en una arrocera u olla con un poco de aceite de oliva',
        'Su sabor neutro lo hace versatil, tanto para platos salados como dulces — puede usarse en arroz con leche, sopas o como base para bowls nutritivos',
      ],
    },

    healthBenefits: [
      {
        benefit: 'Altisimo contenido en hierro',
        description:
          'El mijo menor contiene 9,3 mg de hierro por 100 g, uno de los contenidos mas altos entre todos los mijos y cereales. Esto lo convierte en un aliado valioso en la prevencion y el manejo de la anemia ferropenica.',
        evidenceLevel: 'well-established',
        source: 'BEDCA / USDA FoodData Central',
      },
      {
        benefit: 'Buena fuente de fibra para la salud digestiva',
        description:
          'Con 7,6 g de fibra por 100 g, el mijo menor favorece una digestion saludable, un transito regular y puede ayudar a reducir el nivel de colesterol.',
        evidenceLevel: 'well-established',
        source: 'BEDCA / USDA FoodData Central',
      },
      {
        benefit: 'Bajo indice glucemico apto para diabeticos',
        description:
          'Con un indice glucemico de aproximadamente 52, el mijo menor asegura una liberacion lenta y regular de la glucosa, lo que lo hace adecuado para el manejo de la diabetes.',
        evidenceLevel: 'supported-by-research',
        source: 'International Journal of Food Sciences and Nutrition',
      },
      {
        benefit: 'Rico en antioxidantes',
        description:
          'Contiene compuestos fenolicos y flavonoides que contribuyen a una actividad antioxidante, aunque se necesitan investigaciones complementarias para caracterizar completamente estos beneficios.',
        evidenceLevel: 'preliminary-evidence',
        source: 'Journal of Food Science and Technology',
      },
    ],

    sideEffects: [
      {
        condition: 'Hinchazon sin remojo',
        description:
          'Puede provocar hinchazon si no se remoja antes de la coccion. Se recomienda un remojo de al menos 30 minutos para mejorar la digestibilidad.',
        severity: 'mild',
      },
      {
        condition: 'Contenido de antinutrientes',
        description:
          'Contiene fitatos (antinutrientes) que pueden reducir la absorcion de minerales. El remojo, la germinacion o la fermentacion reducen significativamente los niveles de fitatos.',
        severity: 'moderate',
      },
    ],

    isGlutenFree: true,
    relatedRecipes: [
      'sopa-de-mijo-con-verduras',
    ],
    sources: [
      'anses-ciqual',
      'usda-fdc',
      'fao-millets-nutrition',
      'ren-millets-polyphenols-2016',
    ],
  },
];
