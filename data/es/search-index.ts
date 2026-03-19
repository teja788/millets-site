import type { SearchableItem } from '@/lib/types';

export const searchIndex: SearchableItem[] = [
  // ===========================
  // MILLETS (9 entries)
  // ===========================
  {
    id: 'pearl-millet',
    title: 'Mijo perla',
    description: 'Bajra / Mijo perla — el mijo ms cultivado del mundo, rico en hierro y zinc. Pennisetum glaucum.',
    type: 'millet' as const,
    url: '/es/millets/pearl-millet',
    tags: ['mijo perla', 'bajra', 'Pennisetum glaucum', 'mijo mayor', 'kambu', 'sajje'],
  },
  {
    id: 'finger-millet',
    title: 'Eleusine',
    description: 'Ragi / Eleusine — extraordinariamente rico en calcio, ideal para huesos fuertes. Eleusine coracana.',
    type: 'millet' as const,
    url: '/es/millets/finger-millet',
    tags: ['eleusine', 'ragi', 'Eleusine coracana', 'mijo mayor', 'nachni', 'mandua'],
  },
  {
    id: 'sorghum',
    title: 'Sorgo',
    description: 'Jowar / Sorgo — cereal sin gluten con alto contenido de antioxidantes. Sorghum bicolor.',
    type: 'millet' as const,
    url: '/es/millets/sorghum',
    tags: ['sorgo', 'jowar', 'Sorghum bicolor', 'mijo mayor', 'cholam', 'jonna'],
  },
  {
    id: 'foxtail-millet',
    title: 'Mijo cola de zorro',
    description: 'Kangni / Mijo cola de zorro — rico en fibra diettica y hierro, ideal para diabticos. Setaria italica.',
    type: 'millet' as const,
    url: '/es/millets/foxtail-millet',
    tags: ['mijo cola de zorro', 'kangni', 'Setaria italica', 'mijo menor', 'kakum', 'thinai'],
  },
  {
    id: 'little-millet',
    title: 'Mijo menor',
    description: 'Kutki / Mijo menor — grano diminuto con gran poder nutritivo, bajo ndice glucmico. Panicum sumatrense.',
    type: 'millet' as const,
    url: '/es/millets/little-millet',
    tags: ['mijo menor', 'kutki', 'Panicum sumatrense', 'mijo menor', 'samai', 'sama'],
  },
  {
    id: 'kodo-millet',
    title: 'Mijo kodo',
    description: 'Kodo / Mijo kodo — rico en polifenoles y antioxidantes, fcil de digerir. Paspalum scrobiculatum.',
    type: 'millet' as const,
    url: '/es/millets/kodo-millet',
    tags: ['mijo kodo', 'kodra', 'Paspalum scrobiculatum', 'mijo menor', 'varagu', 'arikelu'],
  },
  {
    id: 'barnyard-millet',
    title: 'Mijo de corral',
    description: 'Sanwa / Mijo de corral — el mijo con menos caloras, perfecto para control de peso. Echinochloa frumentacea.',
    type: 'millet' as const,
    url: '/es/millets/barnyard-millet',
    tags: ['mijo de corral', 'sanwa', 'Echinochloa frumentacea', 'mijo menor', 'jhangora', 'kuthiraivali'],
  },
  {
    id: 'proso-millet',
    title: 'Mijo proso',
    description: 'Chena / Mijo proso — alto contenido proteico y tiempo de coccin rpido. Panicum miliaceum.',
    type: 'millet' as const,
    url: '/es/millets/proso-millet',
    tags: ['mijo proso', 'chena', 'Panicum miliaceum', 'mijo menor', 'barri', 'pani varagu'],
  },
  {
    id: 'browntop-millet',
    title: 'Mijo de cima parda',
    description: 'Korale / Mijo de cima parda — el mijo ms rico en fibra, excelente para la salud digestiva. Brachiaria ramosa.',
    type: 'millet' as const,
    url: '/es/millets/browntop-millet',
    tags: ['mijo de cima parda', 'korale', 'Brachiaria ramosa', 'mijo menor', 'andu korralu'],
  },

  // ===========================
  // RECIPES — Spanish-origin (12 entries)
  // ===========================
  {
    id: 'gachas-de-mijo',
    title: 'Gachas de mijo',
    description: 'Gachas cremosas de mijo con canela y miel, desayuno tradicional reconfortante',
    type: 'recipe' as const,
    url: '/es/recipes/gachas-de-mijo',
    tags: ['mijo proso', 'desayuno', 'gachas', 'canela', 'miel', 'espaola'],
  },
  {
    id: 'mijo-con-chorizo-y-garbanzos',
    title: 'Mijo con chorizo y garbanzos',
    description: 'Guiso sustancioso de mijo con chorizo espaol y garbanzos, plato nico completo',
    type: 'recipe' as const,
    url: '/es/recipes/mijo-con-chorizo-y-garbanzos',
    tags: ['mijo proso', 'chorizo', 'garbanzos', 'guiso', 'espaola', 'almuerzo'],
  },
  {
    id: 'ensalada-de-mijo-mediterranea',
    title: 'Ensalada de mijo mediterrnea',
    description: 'Ensalada fresca con mijo, tomates, aceitunas, pepino y aderezo de limn',
    type: 'recipe' as const,
    url: '/es/recipes/ensalada-de-mijo-mediterranea',
    tags: ['mijo cola de zorro', 'ensalada', 'mediterrnea', 'vegetariana', 'verano'],
  },
  {
    id: 'atole-de-mijo',
    title: 'Atole de mijo',
    description: 'Bebida caliente tradicional mexicana preparada con harina de mijo y piloncillo',
    type: 'recipe' as const,
    url: '/es/recipes/atole-de-mijo',
    tags: ['mijo perla', 'bebida', 'mexicana', 'atole', 'piloncillo', 'desayuno'],
  },
  {
    id: 'tortillas-de-mijo',
    title: 'Tortillas de mijo',
    description: 'Tortillas suaves hechas con harina de mijo, sin gluten y nutritivas',
    type: 'recipe' as const,
    url: '/es/recipes/tortillas-de-mijo',
    tags: ['mijo perla', 'tortilla', 'mexicana', 'sin gluten', 'acompaamiento'],
  },
  {
    id: 'pupusas-de-mijo',
    title: 'Pupusas de mijo',
    description: 'Pupusas salvadoreas con masa de mijo rellenas de queso y frijoles',
    type: 'recipe' as const,
    url: '/es/recipes/pupusas-de-mijo',
    tags: ['mijo perla', 'pupusa', 'salvadorea', 'centroamericana', 'queso', 'frijoles'],
  },
  {
    id: 'mijo-con-frijoles-negros',
    title: 'Mijo con frijoles negros',
    description: 'Plato completo de mijo con frijoles negros, pimientos y especias latinoamericanas',
    type: 'recipe' as const,
    url: '/es/recipes/mijo-con-frijoles-negros',
    tags: ['mijo proso', 'frijoles negros', 'latinoamericana', 'vegana', 'cena'],
  },
  {
    id: 'sopa-de-mijo',
    title: 'Sopa de mijo',
    description: 'Sopa reconfortante de mijo con verduras de temporada y hierbas frescas',
    type: 'recipe' as const,
    url: '/es/recipes/sopa-de-mijo',
    tags: ['mijo proso', 'sopa', 'verduras', 'espaola', 'invierno', 'reconfortante'],
  },
  {
    id: 'mijo-al-estilo-pilaf',
    title: 'Mijo al estilo pilaf',
    description: 'Pilaf de mijo aromtico con cebolla caramelizada, pasas y almendras tostadas',
    type: 'recipe' as const,
    url: '/es/recipes/mijo-al-estilo-pilaf',
    tags: ['mijo cola de zorro', 'pilaf', 'almendras', 'pasas', 'acompaamiento'],
  },
  {
    id: 'paella-de-mijo',
    title: 'Paella de mijo',
    description: 'Paella espaola reinventada con mijo en lugar de arroz, con mariscos y azafrn',
    type: 'recipe' as const,
    url: '/es/recipes/paella-de-mijo',
    tags: ['mijo cola de zorro', 'paella', 'espaola', 'mariscos', 'azafrn', 'cena'],
  },
  {
    id: 'empanadas-de-mijo-y-verduras',
    title: 'Empanadas de mijo y verduras',
    description: 'Empanadas horneadas rellenas de mijo salteado con verduras y queso',
    type: 'recipe' as const,
    url: '/es/recipes/empanadas-de-mijo-y-verduras',
    tags: ['mijo proso', 'empanada', 'argentina', 'verduras', 'horneado', 'merienda'],
  },
  {
    id: 'budin-de-mijo-con-canela',
    title: 'Budn de mijo con canela',
    description: 'Postre cremoso de mijo con leche, canela y vainilla al estilo arroz con leche',
    type: 'recipe' as const,
    url: '/es/recipes/budin-de-mijo-con-canela',
    tags: ['mijo proso', 'postre', 'budn', 'canela', 'vainilla', 'espaola'],
  },

  // ===========================
  // RECIPES — Indian (11 entries)
  // ===========================
  {
    id: 'ragi-dosa',
    title: 'Ragi Dosa',
    description: 'Crepe crujiente del sur de la India hecha con harina de ragi fermentada, rica en calcio',
    type: 'recipe' as const,
    url: '/es/recipes/ragi-dosa',
    tags: ['eleusine', 'ragi', 'dosa', 'india del sur', 'desayuno', 'fermentado', 'sin gluten'],
  },
  {
    id: 'bajra-roti',
    title: 'Bajra Roti',
    description: 'Pan plano de mijo perla tpico de Rajastn, acompaado tradicionalmente con ghee',
    type: 'recipe' as const,
    url: '/es/recipes/bajra-roti',
    tags: ['mijo perla', 'bajra', 'roti', 'rajastn', 'pan', 'india', 'cena'],
  },
  {
    id: 'ragi-porridge',
    title: 'Gachas de Ragi',
    description: 'Papilla nutritiva de ragi ideal para bebs y nios, rica en calcio y hierro',
    type: 'recipe' as const,
    url: '/es/recipes/ragi-porridge',
    tags: ['eleusine', 'ragi', 'gachas', 'papilla', 'bebs', 'desayuno', 'india'],
  },
  {
    id: 'jowar-bhakri',
    title: 'Jowar Bhakri',
    description: 'Pan plano crujiente de sorgo de Maharashtra, base de la alimentacin tradicional marathi',
    type: 'recipe' as const,
    url: '/es/recipes/jowar-bhakri',
    tags: ['sorgo', 'jowar', 'bhakri', 'maharashtra', 'pan', 'india', 'sin gluten'],
  },
  {
    id: 'bajra-khichdi',
    title: 'Bajra Khichdi',
    description: 'Guiso reconfortante de mijo perla con lentejas y especias, comida de un solo plato',
    type: 'recipe' as const,
    url: '/es/recipes/bajra-khichdi',
    tags: ['mijo perla', 'bajra', 'khichdi', 'lentejas', 'guiso', 'india', 'cena'],
  },
  {
    id: 'ragi-mudde',
    title: 'Ragi Mudde',
    description: 'Bola de masa de ragi de Karnataka, alimento bsico servido con sambar o curry',
    type: 'recipe' as const,
    url: '/es/recipes/ragi-mudde',
    tags: ['eleusine', 'ragi', 'mudde', 'karnataka', 'india del sur', 'almuerzo'],
  },
  {
    id: 'kangni-pulao',
    title: 'Kangni Pulao',
    description: 'Arroz pilaf aromtico hecho con mijo cola de zorro, verduras y especias enteras',
    type: 'recipe' as const,
    url: '/es/recipes/kangni-pulao',
    tags: ['mijo cola de zorro', 'kangni', 'pulao', 'pilaf', 'india', 'almuerzo'],
  },
  {
    id: 'jowar-dosa',
    title: 'Jowar Dosa',
    description: 'Crepe crujiente de sorgo, alternativa sin gluten al dosa tradicional de arroz',
    type: 'recipe' as const,
    url: '/es/recipes/jowar-dosa',
    tags: ['sorgo', 'jowar', 'dosa', 'india del sur', 'desayuno', 'sin gluten'],
  },
  {
    id: 'ragi-laddu',
    title: 'Ragi Laddu',
    description: 'Dulce energtico de ragi con jaggery y frutos secos, merienda saludable india',
    type: 'recipe' as const,
    url: '/es/recipes/ragi-laddu',
    tags: ['eleusine', 'ragi', 'laddu', 'dulce', 'jaggery', 'merienda', 'india'],
  },
  {
    id: 'bajra-raab',
    title: 'Bajra Raab',
    description: 'Bebida caliente de harina de bajra con jaggery y ghee, remedio tradicional de Rajastn',
    type: 'recipe' as const,
    url: '/es/recipes/bajra-raab',
    tags: ['mijo perla', 'bajra', 'raab', 'bebida', 'rajastn', 'india', 'invierno'],
  },
  {
    id: 'sama-kheer',
    title: 'Sama Kheer',
    description: 'Postre lcteo de mijo de corral con cardamomo, consumido durante festivales y ayunos',
    type: 'recipe' as const,
    url: '/es/recipes/sama-kheer',
    tags: ['mijo de corral', 'sanwa', 'kheer', 'postre', 'festival', 'ayuno', 'india'],
  },

  // ===========================
  // STATIC PAGES (16 entries)
  // ===========================
  { id: 'millets', title: 'Los mijos', description: 'Explore todos los mijos y sus beneficios nutricionales extraordinarios', type: 'page' as const, url: '/es/millets', tags: ['mijos', 'cereales', 'granos'] },
  { id: 'recipes', title: 'Recetas con mijo', description: 'Recetas tradicionales y modernas con mijo de Espaa, Latinoamrica y la India', type: 'page' as const, url: '/es/recipes', tags: ['recetas', 'cocina', 'mijo'] },
  { id: 'about', title: 'Sobre nosotros', description: 'Informacin sobre el proyecto de mijos y su misin de promover cereales antiguos', type: 'page' as const, url: '/es/about', tags: ['sobre', 'misin', 'proyecto'] },
  { id: 'faq', title: 'Preguntas frecuentes', description: 'Respuestas a las preguntas ms comunes sobre los mijos', type: 'page' as const, url: '/es/faq', tags: ['faq', 'preguntas', 'respuestas'] },
  { id: 'history', title: 'Historia de los mijos', description: 'Cronologa arqueolgica del cultivo de mijos desde 8000 a.C. hasta la actualidad', type: 'page' as const, url: '/es/history', tags: ['historia', 'arqueologa', 'cronologa'] },
  { id: 'sustainability', title: 'Sostenibilidad y mijos', description: 'Ventajas ambientales de los mijos: eficiencia hdrica, resiliencia climtica y huella de carbono baja', type: 'page' as const, url: '/es/sustainability', tags: ['sostenibilidad', 'medio ambiente', 'clima', 'agua'] },
  { id: 'cooking-guide', title: 'Gua de coccin', description: 'Cmo cocinar, remojar, conservar y sustituir los mijos en sus recetas favoritas', type: 'page' as const, url: '/es/cooking-guide', tags: ['coccin', 'gua', 'cocina', 'tcnicas'] },
  { id: 'ayurveda', title: 'Mijos y nutricin tradicional', description: 'Propiedades nutricionales tradicionales de los mijos en la medicina ayurvdica', type: 'page' as const, url: '/es/ayurveda', tags: ['nutricin', 'ayurveda', 'salud', 'tradicional'] },
  { id: 'glossary', title: 'Glosario de mijos', description: 'Nombres de los mijos en diferentes idiomas del mundo', type: 'page' as const, url: '/es/glossary', tags: ['glosario', 'idiomas', 'nombres', 'traduccin'] },
  { id: 'nutrition', title: 'Comparacin nutricional', description: 'Compare los perfiles nutricionales de los 9 mijos con el arroz y el trigo', type: 'page' as const, url: '/es/nutrition', tags: ['nutricin', 'comparacin', 'minerales', 'vitaminas'] },
  { id: 'regional-traditions', title: 'Tradiciones regionales del mijo', description: 'Tradiciones culinarias del mijo en la India, frica y el mundo hispano', type: 'page' as const, url: '/es/regional-traditions', tags: ['regional', 'tradiciones', 'India', 'frica'] },
  { id: 'global-millets', title: 'Mijos en el mundo', description: 'Cmo se cultivan y consumen los mijos en todos los continentes', type: 'page' as const, url: '/es/global-millets', tags: ['mundial', 'internacional', 'continentes'] },
  { id: 'fermentation', title: 'Alimentos fermentados de mijo', description: 'Bebidas y alimentos fermentados tradicionales a base de mijo en todo el mundo', type: 'page' as const, url: '/es/fermentation', tags: ['fermentacin', 'probitico', 'bebidas'] },
  { id: 'myths', title: 'Mitos y realidades sobre los mijos', description: 'Las ideas equivocadas ms comunes sobre los mijos refutadas por la ciencia', type: 'page' as const, url: '/es/myths', tags: ['mitos', 'realidades', 'ciencia'] },
  { id: 'buying-guide', title: 'Gua de compra de mijos', description: 'Cmo elegir, conservar y comprar mijos de calidad', type: 'page' as const, url: '/es/buying-guide', tags: ['compra', 'conservacin', 'gua', 'tienda'] },
  { id: 'meal-plans', title: 'Planes de comidas con mijo', description: 'Planes de comidas semanales con mijo para diferentes objetivos de salud', type: 'page' as const, url: '/es/meal-plans', tags: ['plan de comidas', 'semanal', 'salud'] },

  // ===========================
  // SPANISH-EXCLUSIVE PAGES (4 entries)
  // ===========================
  { id: 'nutricion-y-salud', title: 'Nutricin y salud de los mijos', description: 'Beneficios nutricionales de los mijos respaldados por la ciencia: salud cardiovascular, control de diabetes, riqueza en minerales', type: 'page' as const, url: '/es/nutricion-y-salud', tags: ['nutricin', 'salud', 'ciencia', 'diabetes', 'cardiovascular'] },
  { id: 'mijo-vs-quinoa', title: 'Mijo vs Quinoa', description: 'Comparacin nutricional, ecolgica, econmica y culinaria entre los mijos y la quinoa', type: 'page' as const, url: '/es/mijo-vs-quinoa', tags: ['quinoa', 'comparacin', 'medio ambiente', 'precio', 'nutricin'] },
  { id: 'donde-comprar-mijo', title: 'Dnde comprar mijo', description: 'Gua completa para comprar mijo en Espaa, Mxico, Argentina y tiendas en lnea', type: 'page' as const, url: '/es/donde-comprar-mijo', tags: ['compra', 'Espaa', 'Mxico', 'Argentina', 'tienda', 'en lnea'] },
  { id: 'mijo-en-la-cocina-hispanica', title: 'El mijo en la cocina hispnica', description: 'Historia y uso del mijo en la gastronoma espaola y latinoamericana: desde las gachas medievales hasta la cocina moderna', type: 'page' as const, url: '/es/mijo-en-la-cocina-hispanica', tags: ['cocina hispnica', 'Espaa', 'Latinoamrica', 'gastronoma', 'historia', 'tradiciones'] },

  // ===========================
  // FAQ ENTRIES (8 entries)
  // ===========================
  {
    id: 'faq-que-es-mijo',
    title: 'Qu es el mijo?',
    description: 'El mijo es un grupo de cereales de grano pequeo cultivados desde hace miles de aos. Son sin gluten, ricos en nutrientes y resistentes a la sequa.',
    type: 'faq' as const,
    url: '/es/faq#que-es-mijo',
    tags: ['mijo', 'definicin', 'cereal', 'grano'],
  },
  {
    id: 'faq-mijo-sin-gluten',
    title: 'Es el mijo sin gluten?',
    description: 'S, todos los mijos son naturalmente sin gluten, lo que los hace seguros para personas con enfermedad celaca o sensibilidad al gluten.',
    type: 'faq' as const,
    url: '/es/faq#mijo-sin-gluten',
    tags: ['sin gluten', 'celaco', 'alergia', 'seguro'],
  },
  {
    id: 'faq-como-cocinar-mijo',
    title: 'Cmo se cocina el mijo?',
    description: 'La mayora de los mijos se cocinan con una proporcin de 1:2.5 de mijo a agua. Enjuague, hierva y cocine a fuego lento durante 15-20 minutos.',
    type: 'faq' as const,
    url: '/es/faq#como-cocinar-mijo',
    tags: ['coccin', 'preparacin', 'agua', 'instrucciones'],
  },
  {
    id: 'faq-beneficios-mijo',
    title: 'Cules son los beneficios del mijo para la salud?',
    description: 'Los mijos son ricos en fibra, hierro, calcio y antioxidantes. Ayudan a controlar la diabetes, mejoran la digestin y fortalecen los huesos.',
    type: 'faq' as const,
    url: '/es/faq#beneficios-mijo',
    tags: ['beneficios', 'salud', 'nutricin', 'diabetes', 'calcio'],
  },
  {
    id: 'faq-mijo-vs-arroz',
    title: 'Es el mijo mejor que el arroz?',
    description: 'Los mijos tienen mayor contenido de fibra, hierro y calcio que el arroz blanco. Tienen un ndice glucmico ms bajo, lo que los hace mejores para diabticos.',
    type: 'faq' as const,
    url: '/es/faq#mijo-vs-arroz',
    tags: ['arroz', 'comparacin', 'ndice glucmico', 'fibra'],
  },
  {
    id: 'faq-conservar-mijo',
    title: 'Cmo se conserva el mijo?',
    description: 'Guarde los mijos en un recipiente hermtico en un lugar fresco y seco. Los granos enteros duran hasta 2 aos; la harina de mijo, 2-3 meses.',
    type: 'faq' as const,
    url: '/es/faq#conservar-mijo',
    tags: ['conservacin', 'almacenamiento', 'duracin', 'frescura'],
  },
  {
    id: 'faq-mijo-bebes',
    title: 'Pueden los bebs comer mijo?',
    description: 'S, los mijos son excelentes para bebs a partir de los 6 meses. El ragi (eleusine) es especialmente recomendado por su alto contenido en calcio.',
    type: 'faq' as const,
    url: '/es/faq#mijo-bebes',
    tags: ['bebs', 'nios', 'alimentacin infantil', 'ragi', 'calcio'],
  },
  {
    id: 'faq-tiroides-mijo',
    title: 'Afecta el mijo a la tiroides?',
    description: 'Algunos mijos contienen compuestos bociognicos que pueden afectar la funcin tiroidea si se consumen en exceso. Un consumo moderado y variado es seguro.',
    type: 'faq' as const,
    url: '/es/faq#tiroides-mijo',
    tags: ['tiroides', 'bociognicos', 'precaucin', 'moderacin'],
  },

  // ===========================
  // REGIONAL TRADITIONS (4 entries)
  // ===========================
  {
    id: 'tradition-rajasthan',
    title: 'Tradiciones de mijo en Rajastn',
    description: 'La bajra roti con ghee y gur es el alimento bsico del desierto de Rajastn. Los pastores raika dependen del mijo perla para sobrevivir.',
    type: 'tradition' as const,
    url: '/es/regional-traditions/rajasthan',
    tags: ['Rajastn', 'India', 'bajra', 'desierto', 'roti'],
  },
  {
    id: 'tradition-karnataka',
    title: 'Tradiciones de mijo en Karnataka',
    description: 'El ragi mudde es el alimento bsico del sur de Karnataka. La regin de Mandya es conocida como la capital del ragi en la India.',
    type: 'tradition' as const,
    url: '/es/regional-traditions/karnataka',
    tags: ['Karnataka', 'India', 'ragi', 'mudde', 'India del sur'],
  },
  {
    id: 'tradition-maharashtra',
    title: 'Tradiciones de mijo en Maharashtra',
    description: 'El jowar bhakri con thecha picante es la comida emblemtica de Maharashtra. El sorgo domina la meseta del Decn.',
    type: 'tradition' as const,
    url: '/es/regional-traditions/maharashtra',
    tags: ['Maharashtra', 'India', 'jowar', 'bhakri', 'Decn'],
  },
  {
    id: 'tradition-africa-occidental',
    title: 'Tradiciones de mijo en frica Occidental',
    description: 'El mijo perla es esencial en el Sahel: fonio en Guinea, thiakry en Senegal y tuwo en Nigeria forman la base alimentaria de millones.',
    type: 'tradition' as const,
    url: '/es/regional-traditions/west-africa',
    tags: ['frica', 'Sahel', 'Senegal', 'Nigeria', 'fonio', 'thiakry'],
  },

  // ===========================
  // GLOBAL REGIONS (3 entries)
  // ===========================
  {
    id: 'global-asia-sur',
    title: 'Mijos en Asia del Sur',
    description: 'India es el mayor productor mundial de mijo, con Rajastn, Maharashtra y Karnataka como principales regiones de cultivo.',
    type: 'region' as const,
    url: '/es/global-millets/south-asia',
    tags: ['Asia del Sur', 'India', 'produccin', 'cultivo'],
  },
  {
    id: 'global-africa',
    title: 'Mijos en frica',
    description: 'frica produce casi un tercio del mijo mundial. Niger, Nigeria, Mali y Senegal son los principales productores del continente.',
    type: 'region' as const,
    url: '/es/global-millets/africa',
    tags: ['frica', 'Niger', 'Nigeria', 'Mali', 'Sahel'],
  },
  {
    id: 'global-americas',
    title: 'Mijos en las Amricas',
    description: 'El cultivo de mijo crece en EE.UU. como forraje y alimento sin gluten. En Latinoamrica gana popularidad como superalimento.',
    type: 'region' as const,
    url: '/es/global-millets/americas',
    tags: ['Amricas', 'Estados Unidos', 'Latinoamrica', 'superalimento'],
  },

  // ===========================
  // MYTHS (3 entries)
  // ===========================
  {
    id: 'myth-mijo-comida-pobres',
    title: 'Mito: El mijo es comida de pobres',
    description: 'Los mijos fueron la base alimentaria de grandes civilizaciones. Son superalimentos nutritivos adoptados por chefs de todo el mundo.',
    type: 'page' as const,
    url: '/es/myths#mijo-comida-pobres',
    tags: ['mito', 'realidad', 'prejuicio', 'superalimento'],
  },
  {
    id: 'myth-mijo-sin-sabor',
    title: 'Mito: El mijo no tiene sabor',
    description: 'Cada mijo tiene un perfil de sabor nico: la eleusine es terrosa, el sorgo es dulce y el mijo cola de zorro es alimonado.',
    type: 'page' as const,
    url: '/es/myths#mijo-sin-sabor',
    tags: ['mito', 'sabor', 'perfil gustativo', 'cocina'],
  },
  {
    id: 'myth-mijo-dificil-cocinar',
    title: 'Mito: El mijo es difcil de cocinar',
    description: 'La mayora de los mijos se cocinan en 15-20 minutos, ms rpido que el arroz integral. Son verstiles y fciles de preparar.',
    type: 'page' as const,
    url: '/es/myths#mijo-dificil-cocinar',
    tags: ['mito', 'coccin', 'fcil', 'rpido'],
  },

  // ===========================
  // FERMENTED PRODUCTS (3 entries)
  // ===========================
  {
    id: 'fermented-ambali',
    title: 'Ambali',
    description: 'India — Bebida fermentada de ragi del sur de India, rica en probiticos y consumida desde hace siglos.',
    type: 'page' as const,
    url: '/es/fermentation',
    tags: ['fermentacin', 'India', 'ragi', 'probitico', 'ambali'],
  },
  {
    id: 'fermented-ogi',
    title: 'Ogi',
    description: 'Nigeria — Papilla fermentada de mijo perla o sorgo, alimento bsico del desayuno en frica Occidental.',
    type: 'page' as const,
    url: '/es/fermentation',
    tags: ['fermentacin', 'Nigeria', 'frica', 'mijo perla', 'ogi'],
  },
  {
    id: 'fermented-boza',
    title: 'Boza',
    description: 'Turqua y Balcanes — Bebida fermentada ligeramente alcohlica de mijo proso, popular en invierno.',
    type: 'page' as const,
    url: '/es/fermentation',
    tags: ['fermentacin', 'Turqua', 'Balcanes', 'mijo proso', 'boza'],
  },

  // ===========================
  // MEAL PLANS (3 entries)
  // ===========================
  {
    id: 'plan-control-diabetes',
    title: 'Plan de comidas para control de diabetes',
    description: 'Plan semanal con mijos de bajo ndice glucmico para ayudar a controlar los niveles de azcar en sangre.',
    type: 'page' as const,
    url: '/es/meal-plans',
    tags: ['plan de comidas', 'diabetes', 'ndice glucmico', 'salud'],
  },
  {
    id: 'plan-perdida-peso',
    title: 'Plan de comidas para prdida de peso',
    description: 'Plan semanal con mijos bajos en caloras y ricos en fibra para un control de peso saludable.',
    type: 'page' as const,
    url: '/es/meal-plans',
    tags: ['plan de comidas', 'peso', 'caloras', 'fibra'],
  },
  {
    id: 'plan-huesos-fuertes',
    title: 'Plan de comidas para huesos fuertes',
    description: 'Plan semanal rico en calcio y fsforo con ragi y otros mijos para fortalecer los huesos.',
    type: 'page' as const,
    url: '/es/meal-plans',
    tags: ['plan de comidas', 'huesos', 'calcio', 'fsforo', 'ragi'],
  },

  // ===========================
  // ANCIENT REFERENCES (1 entry)
  // ===========================
  {
    id: 'ancient-references',
    title: 'Referencias antiguas a los mijos',
    description: 'Evidencias literarias y arqueolgicas de los mijos: Plinio, Herdoto, textos vdicos y tradiciones orales africanas',
    type: 'page' as const,
    url: '/es/ancient-references',
    tags: ['antiguo', 'textos', 'historia', 'arqueologa', 'Plinio', 'Herdoto'],
  },
];
