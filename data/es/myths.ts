import type { Myth } from '@/lib/types';

export const myths: Myth[] = [
  {
    id: 'comida-de-pajaros',
    myth: 'Los millets son comida para pájaros',
    fact: 'Si bien el mijo en racimos (Setaria italica) se vende efectivamente en tiendas de mascotas, reducir los millets a comida para aves equivale a considerar el maíz como un simple alimento para pollos. Los millets son en realidad una familia de cereales cultivados desde hace más de 10 000 años para la alimentación humana. El mijo perla (bajra) alimenta diariamente a más de 90 millones de personas en África Occidental; el fonio, apodado «semilla del universo» por el pueblo dogón, está conquistando la alta cocina internacional. En la propia Península Ibérica, los romanos cultivaban mijo común (Panicum miliaceum) extensivamente en Hispania, y el mijo fue un cereal de base en la alimentación peninsular hasta el siglo XVIII. En 2023, la ONU proclamó el Año Internacional del Mijo, respaldado por 72 países. La AESAN reconoce los millets como cereales integrales ricos en fibra, magnesio y hierro. Es hora de redescubrir estos cereales ancestrales por lo que realmente son: alimentos excepcionales para el ser humano.',
    category: 'general',
    sources: [
      'Resolución A/RES/75/263 de la Asamblea General de las Naciones Unidas — Año Internacional del Mijo 2023',
      'AESAN, Agencia Española de Seguridad Alimentaria y Nutrición — Recomendaciones sobre cereales integrales',
      'National Research Council, "Lost Crops of Africa: Volume I — Grains," National Academies Press (1996)',
    ],
  },
  {
    id: 'cereales-inferiores',
    myth: 'Los millets son cereales inferiores y poco refinados',
    fact: 'La etiqueta de «cereal inferior» es un legado colonial que no tiene fundamento nutricional alguno. El término designaba simplemente la textura del grano antes de la molienda, no su calidad alimentaria. Los análisis de la base de datos BEDCA y la USDA demuestran que los millets superan al arroz blanco y al trigo refinado en numerosos parámetros: el mijo perla (bajra) proporciona 11,6 g de proteínas y 11,5 mg de hierro por 100 g, frente a 6,8 g de proteínas y 0,8 mg de hierro del arroz blanco pulido. El ragi (mijo dedo) ostenta un récord entre los cereales con 344 mg de calcio por 100 g, más del triple que la leche. Los millets contienen además de 8 a 12,5 g de fibra por 100 g, frente a 0,2 g del arroz pulido. La Autoridad Europea de Seguridad Alimentaria (EFSA) clasifica los millets entre los cereales integrales beneficiosos para la salud cardiovascular. En la India, el gobierno rebautizó oficialmente los millets como «Nutri-Cereales» en 2018, pasando la página del término peyorativo.',
    category: 'general',
    sources: [
      'BEDCA, Base Española de Datos de Composición de Alimentos — Tablas de composición nutricional',
      'EFSA, "Scientific Opinion on Dietary Reference Values for carbohydrates and dietary fibre," EFSA Journal (2010)',
      'Gaceta Oficial del Gobierno de la India, abril 2018 — Reclasificación como Nutri-Cereales',
    ],
  },
  {
    id: 'calculos-renales',
    myth: 'Los millets provocan cálculos renales',
    fact: 'Esta creencia no resiste el análisis científico. La mayoría de los millets presentan un contenido en oxalatos bajo a moderado, claramente inferior al de alimentos consumidos sin preocupación como las espinacas (750-970 mg/100 g), el chocolate negro (117 mg/100 g) o las almendras (469 mg/100 g). El ragi (mijo dedo) contiene solo unos 20 mg de oxalatos por 100 g, cuarenta veces menos que las espinacas. Más notable aún, un estudio publicado en el Journal of Food Science and Technology (2019) demostró que el extracto de mijo perla inhibe la cristalización del oxalato de calcio en un 26-34 % in vitro, sugiriendo un efecto protector en lugar de perjudicial. Además, la riqueza de los millets en magnesio (unos 114 mg/100 g en el mijo perla) contribuye a la prevención de cálculos, ya que el magnesio forma complejos solubles con el oxalato. Las personas con antecedentes de litiasis urinaria deben consultar a su médico, pero nada justifica excluir los millets de la alimentación.',
    category: 'health',
    sources: [
      'Sade, A. et al., "In vitro inhibition of calcium oxalate crystallization by pearl millet extract," Journal of Food Science and Technology (2019)',
      'BEDCA — Contenidos en oxalatos de alimentos comunes',
      'Revista Española de Nutrición Humana y Dietética, "Magnesio y litiasis urinaria: mecanismos protectores" (2017)',
    ],
  },
  {
    id: 'problemas-tiroides',
    myth: 'Los millets causan problemas de tiroides',
    fact: 'Algunos millets, especialmente el mijo perla (bajra) y el ragi, contienen C-glicosil flavonas capaces de inhibir la enzima tiroperoxidasa (TPO) en condiciones de laboratorio, lo que ha generado inquietud. Sin embargo, una revisión sistemática publicada en Critical Reviews in Food Science and Nutrition (2024) concluyó que las evidencias de un efecto bociógeno en humanos con una alimentación variada son «insuficientemente convincentes» para justificar la exclusión de los millets. El efecto bociógeno solo se observó en estudios con animales donde el mijo constituía la única fuente alimentaria, un escenario sin relación con los hábitos alimentarios humanos. La cocción y los procesos de transformación (remojo, fermentación, germinación) reducen significativamente el contenido de flavonoides, y un aporte adecuado de yodo neutraliza por completo el potencial efecto antitiroideo. En España, donde la sal de mesa es generalmente yodada y la alimentación es diversificada, el riesgo se considera insignificante. Las personas con hipotiroidismo pueden consumir millets con moderación en el marco de una dieta equilibrada, consultando a su endocrinólogo.',
    category: 'health',
    sources: [
      'Sharma, N. et al., "Effect of millets on thyroid function: a systematic review," Critical Reviews in Food Science and Nutrition (2024)',
      'Gaitan, E., "Goitrogens in food and water," Annual Review of Nutrition (1990)',
      'AESAN, "Informe sobre el consumo de yodo en la población española" (2019)',
    ],
  },
  {
    id: 'dificiles-de-cocinar',
    myth: 'Los millets son difíciles de cocinar',
    fact: 'La mayoría de los millets se cocinan con la misma facilidad que el arroz, un gesto familiar en cualquier cocina hispana. El mijo común (Panicum miliaceum) se cocina en 15 minutos a fuego lento con una proporción de 1 volumen de granos por 2 volúmenes de agua, exactamente igual que el arroz. El mijo menor y el mijo italiano se cocinan en 12 a 15 minutos. El fonio, el cereal más pequeño del mundo, se cocina en solo 5 minutos y se prepara al vapor como un cuscús. La harina de ragi se transforma en una papilla cremosa en menos de 10 minutos. Para el mijo perla y el sorgo, cuyos granos son más duros, basta con un remojo de 30 a 60 minutos antes de una cocción de 20 a 25 minutos. Los millets se adaptan a todos los equipos: cacerola, olla arrocera, olla de presión e incluso microondas. La dificultad percibida proviene más del desconocimiento que de una complejidad real. Una vez probados, los millets encuentran naturalmente su lugar en la cocina cotidiana.',
    category: 'cooking',
    sources: [
      'Cruz, J.-F. et al., "Fonio, an African cereal," CIRAD, Éditions Quae (2016)',
      'ICAR-Indian Institute of Millets Research, "Millet Cooking Guide" (2022)',
    ],
  },
  {
    id: 'sin-sabor',
    myth: 'Los millets no tienen sabor',
    fact: 'Cada millet posee un perfil aromático distinto y apreciado cuando se prepara correctamente. El mijo común ofrece un sabor suave y ligeramente avellanado, similar al del bulgur. El mijo perla (bajra) desarrolla un gusto terroso y robusto, apreciado en las gachas tradicionales del Sahel. El ragi revela notas malteadas y tostadas que lo convierten en un ingrediente notable para repostería y cervezas artesanales. El fonio tiene un sabor delicado, sutilmente avellanado, que ha conquistado a chefs de renombre como Pierre Thiam. El sorgo (jowar), con su gusto neutro y ligeramente dulce, sustituye ventajosamente a la sémola de trigo en ensaladas y tabulés. La percepción de insipidez proviene a menudo de un condimentado insuficiente o del desconocimiento de las técnicas de preparación. El tostado en seco antes de la cocción, la fermentación y la germinación son métodos tradicionales que multiplican la riqueza aromática de los millets.',
    category: 'cooking',
    sources: [
      'Saleh, A.S.M. et al., "Millet grains: nutritional quality, processing, and potential health benefits," Comprehensive Reviews in Food Science and Food Safety (2013)',
      'Thiam, P., "The Fonio Cookbook: An Ancient Grain Rediscovered," Lake Isle Press (2019)',
      'Mouquet-Rivier, C. et al., "Influence of processing on the flavour compounds of millet-based foods," CIRAD / IRD (2015)',
    ],
  },
  {
    id: 'pobres-en-proteinas',
    myth: 'Los millets carecen de proteínas',
    fact: 'Contrariamente a esta creencia, los millets ofrecen un contenido proteico muy respetable para ser cereales, y superior al del arroz blanco. El mijo perla (bajra) proporciona 11,6 g de proteínas por 100 g, el mijo común 11,0 g, el mijo italiano (foxtail millet) 12,3 g, y el fonio aproximadamente 9 g, frente a los 6,8 g del arroz blanco y los 10,3 g del trigo integral. El ragi, con 7,3 g de proteínas, se distingue por su riqueza en metionina, un aminoácido esencial deficiente en la mayoría de los demás cereales. Estudios del CIRAD han demostrado que la combinación millets-legumbres, practicada tradicionalmente en África Occidental y similar a la combinación arroz-frijoles de Latinoamérica, produce un perfil de aminoácidos completo comparable al de las proteínas animales. Los millets constituyen una fuente proteica vegetal de calidad, especialmente relevante en el contexto de la transición alimentaria.',
    category: 'nutrition',
    sources: [
      'Saleh, A.S.M. et al., "Millet grains: nutritional quality, processing, and potential health benefits," Comprehensive Reviews in Food Science and Food Safety (2013)',
      'CIRAD, "Complementariedad proteica de cereales y leguminosas africanas" (2018)',
      'BEDCA — Contenidos en proteínas de los cereales',
    ],
  },
  {
    id: 'no-son-hispanicos',
    myth: 'Los millets no forman parte de la cocina hispana',
    fact: 'Nada más lejos de la realidad. El mijo común (Panicum miliaceum) fue uno de los cereales más cultivados en la Península Ibérica desde la Antigüedad. Los romanos cultivaron mijo extensivamente en Hispania, y se han encontrado granos de mijo en yacimientos arqueológicos ibéricos que datan del primer milenio a. C. En Andalucía y Castilla, las «gachas» —preparación a base de harinas de cereales cocidas en agua o leche— se elaboraban tradicionalmente con mijo antes de que el maíz americano lo desplazara a partir del siglo XVI. En Galicia y el norte de España, el mijo (llamado «millo miúdo» en gallego) también fue un cereal básico durante siglos. El sorgo se cultiva hoy ampliamente en España, Argentina, México y Brasil. En Latinoamérica, los pueblos originarios de México consumían variedades locales de gramíneas de grano pequeño. El mijo declinó en el mundo hispano únicamente por la presión del trigo y el maíz americano, no por falta de calidad. Hoy, investigadores del CSIC y del INIA en España estudian la reintroducción del mijo como cultivo resiliente al cambio climático.',
    category: 'general',
    sources: [
      'Buxó, R., "Arqueología de las plantas: agricultura y alimentación en la Península Ibérica," Ediciones Bellaterra (1997)',
      'Morales Muñiz, A. et al., "Cereales y alimentación en la Hispania romana," Revista de Arqueología (2005)',
      'CSIC/INIA, "Cultivos resilientes frente al cambio climático: el potencial de los millets en la Península Ibérica" (2022)',
    ],
  },
  {
    id: 'solo-en-africa',
    myth: 'Los millets solo se comen en África',
    fact: 'Los millets se consumen en todos los continentes y en tradiciones culinarias extremadamente variadas. En la India, el mijo perla (bajra) es la base de los panes planos del noroeste, mientras que el ragi compone las gachas y tortitas del sur, alimentando a cientos de millones de personas. En China, el xiaomi (mijo italiano) se cultiva desde hace 8 000 años y la papilla de xiaomi zhou se sirve a diario en el norte del país. En Japón, el kibi (mijo común) forma parte del mochi tradicional. En Corea, los millets integran los «cinco granos» (ogokbap) consumidos ritualmente. En Rusia y Europa del Este, el mijo sigue siendo un ingrediente habitual de gachas y rellenos. En América del Norte, el fonio y el sorgo experimentan un auge en tiendas orgánicas y restaurantes. Dentro de la propia África, la diversidad es inmensa: tô en Mali, thiéré en Senegal, ogi en Nigeria, injera en Etiopía. Los millets son verdaderamente cereales globales, arraigados en gastronomías milenarias.',
    category: 'general',
    sources: [
      'National Research Council, "Lost Crops of Africa: Volume I — Grains," National Academies Press (1996)',
      'Lu, H. et al., "Earliest domestication of common millet in East Asia," Proceedings of the National Academy of Sciences (2009)',
      'FAO, "Millets in the Global Food System" (2023)',
    ],
  },
  {
    id: 'no-aptos-para-ninos',
    myth: 'Los millets no son adecuados para niños',
    fact: 'No solo los millets son aptos para niños, sino que constituyen el alimento de destete por excelencia en muchas culturas. En África Occidental, el ogi —papilla fermentada a base de mijo o sorgo— es la primera comida sólida que se da a los lactantes en Nigeria, Benín y Togo, alimentando a decenas de millones de niños cada año. En Burkina Faso, el ben-saalga (papilla de mijo fermentada y enriquecida) es objeto de programas nutricionales apoyados por el IRD y UNICEF. La fermentación aumenta la biodisponibilidad del hierro y el zinc, reduce los factores antinutricionales (fitatos, taninos) y mejora la digestibilidad, cualidades esenciales para los niños pequeños. En la India, la papilla de ragi se recomienda desde los 6 meses por los pediatras debido a su excepcional contenido en calcio (344 mg/100 g), indispensable para el crecimiento óseo. El ragi es naturalmente libre de gluten, lo que lo hace apto para niños celíacos. Estudios del CIRAD y del IRD han demostrado que las papillas de millets fermentados presentan una densidad nutricional superior a las papillas de arroz o maíz para la primera infancia.',
    category: 'health',
    sources: [
      'Mouquet-Rivier, C. et al., "Nutritional quality of traditional gruels from fermented millet for infants," IRD / CIRAD (2008)',
      'UNICEF / Burkina Faso, "Programa de mejora de las papillas complementarias a base de mijo" (2016)',
      'Devi, P.B. et al., "Health benefits of finger millet polyphenols and dietary fiber: a review," Food Chemistry (2014)',
    ],
  },
  {
    id: 'quinoa-es-mejor',
    myth: 'La quinoa es más nutritiva que los millets',
    fact: 'La quinoa goza de una excelente imagen, especialmente en Latinoamérica y Europa, pero los millets la igualan e incluso la superan en numerosos criterios nutricionales. En proteínas, el mijo italiano (12,3 g/100 g) y el mijo perla (11,6 g/100 g) se comparan favorablemente con la quinoa (14,1 g/100 g). En hierro, el mijo perla (11,5 mg/100 g) supera ampliamente a la quinoa (4,6 mg/100 g). En calcio, el ragi (344 mg/100 g) supera a la quinoa (47 mg/100 g) por un factor de siete. El índice glucémico de los millets es generalmente similar o más bajo: 54 para el mijo italiano frente a 53 de la quinoa. La quinoa presenta la ventaja de un perfil completo de aminoácidos esenciales, pero esta carencia de los millets se compensa fácilmente con la combinación tradicional con legumbres, algo muy común en la cocina latinoamericana (frijoles, lentejas, garbanzos). Desde el punto de vista económico, los millets son significativamente más baratos, especialmente en países donde la quinoa es importada. Desde el punto de vista ecológico, el sorgo y el mijo se cultivan localmente en muchos países hispanohablantes, con una huella de carbono menor. Lo ideal es disfrutar de ambos.',
    category: 'nutrition',
    sources: [
      'BEDCA — Comparación nutricional de cereales y pseudocereales',
      'USDA FoodData Central — Nutrient database, quinoa vs. millets',
      'EFSA, "Sustainable diets and biodiversity," European Food Safety Authority (2021)',
    ],
  },
  {
    id: 'millets-y-diabetes',
    myth: 'Los diabéticos deben evitar los millets',
    fact: 'Es exactamente al contrario: los millets figuran entre los cereales más recomendados para personas con diabetes tipo 2. Un metaanálisis de 2021 publicado en Frontiers in Nutrition, que abarcó 65 estudios y 1 000 participantes, demostró que el consumo regular de millets reduce la glucemia en ayunas un 12 % en promedio y la hemoglobina glicosilada (HbA1c) en 0,5 puntos respecto a dietas basadas en arroz o trigo. El índice glucémico de los millets es significativamente más bajo que el del arroz blanco (73) y el pan blanco (75): 54 para el mijo italiano, 55 para el fonio, 62 para el mijo perla y 52 para el mijo menor. Esta acción beneficiosa se explica por el alto contenido en fibra soluble, almidones lentos y polifenoles que ralentizan la absorción de glucosa. El fonio, en particular, presenta un índice glucémico notablemente bajo y es tradicionalmente recomendado a los diabéticos en África Occidental. La EFSA reconoce que los cereales integrales, incluidos los millets, contribuyen al mantenimiento de una glucemia normal. La OMS y la AESAN también promueven los cereales integrales como parte de la prevención de la diabetes tipo 2.',
    category: 'health',
    sources: [
      'Anitha, S. et al., "A systematic review and meta-analysis of the potential of millets for managing and reducing the risk of developing diabetes mellitus," Frontiers in Nutrition (2021)',
      'EFSA, "Scientific Opinion on the substantiation of health claims related to whole grain," EFSA Journal (2010)',
      'OMS, "Directrices sobre la ingesta de cereales integrales para la prevención de enfermedades no transmisibles" (2023)',
    ],
  },
];
