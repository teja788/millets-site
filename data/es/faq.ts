import type { FAQItem } from '@/lib/types';

export const faqItems: FAQItem[] = [
  // =====================
  // GENERAL (6)
  // =====================
  {
    id: 'what-are-millets',
    question: '¿Qué son los millets (mijos)?',
    answer:
      'Los millets, conocidos en español como mijos, son un grupo de cereales de grano pequeño pertenecientes a la familia de las gramíneas (Poaceae), cultivados desde hace milenios. Entre ellos se encuentran el mijo perla o bajra (Pennisetum glaucum), el sorgo o jowar (Sorghum bicolor), el ragi o mijo dedo (Eleusine coracana), el mijo común (Panicum miliaceum), el mijo italiano (Setaria italica) y varias especies más. Estos cereales figuran entre las plantas cultivadas más antiguas del mundo: hay evidencias arqueológicas que datan de 8 700 a. C. en China y de 5 000 años en África Occidental. Ricos en fibra, minerales y naturalmente sin gluten, los millets están ganando un renovado interés a nivel mundial por su valor nutricional y su resiliencia frente al cambio climático. La ONU declaró 2023 como el Año Internacional del Mijo.',
    category: 'General',
    relatedMillets: [],
  },
  {
    id: 'millets-gluten-free',
    question: '¿Los millets son libres de gluten?',
    answer:
      'Sí, todos los millets auténticos son naturalmente libres de gluten. Esto incluye el mijo perla (bajra), el sorgo (jowar), el ragi (mijo dedo), el mijo común, el mijo italiano, el mijo menor, el mijo kodo, el mijo de corral y el mijo browntop. Son aptos para personas con enfermedad celíaca o sensibilidad al gluten no celíaca. Sin embargo, puede producirse contaminación cruzada durante el procesamiento o envasado en instalaciones que también manejan trigo. Si eres muy sensible, busca productos con el sello «certificado sin gluten» o el logotipo de la FACE (Federación de Asociaciones de Celíacos de España) en el envase. En Latinoamérica, verifica las certificaciones locales correspondientes.',
    category: 'General',
    relatedMillets: [
      'pearl-millet',
      'finger-millet',
      'foxtail-millet',
      'little-millet',
      'kodo-millet',
      'barnyard-millet',
      'proso-millet',
      'browntop-millet',
      'sorghum',
    ],
  },
  {
    id: 'terminologia-mijo-millet',
    question: '¿Por qué se usa el término «millet» y no solo «mijo»?',
    answer:
      'En español, la palabra «mijo» se refiere tradicionalmente al mijo común (Panicum miliaceum) o, en algunos países latinoamericanos, al sorgo. Sin embargo, el término inglés «millet» abarca un grupo mucho más amplio de cereales de grano pequeño que incluye al menos nueve especies diferentes: mijo perla, ragi, mijo italiano, mijo menor, mijo kodo, mijo de corral, mijo browntop, mijo común y sorgo. En la literatura científica en español se emplea frecuentemente «millets» como término genérico para referirse a todo este grupo, similar a como se usa en inglés. En la India, cada especie tiene nombres propios muy conocidos: bajra (mijo perla), ragi (mijo dedo), jowar (sorgo). En este sitio utilizamos «millets» como término colectivo y los nombres específicos en español e hindi para cada especie.',
    category: 'General',
    relatedMillets: ['pearl-millet'],
  },
  {
    id: 'fonio-is-millet',
    question: '¿El fonio es un millet?',
    answer:
      'El fonio (Digitaria exilis) está botánicamente emparentado con los millets y pertenece a la misma familia de las gramíneas (Poaceae). Suele clasificarse entre los millets en sentido amplio, aunque pertenece a un género diferente. Cultivado desde hace más de 5 000 años en África Occidental —especialmente en Mali, Guinea, Burkina Faso y Senegal—, el fonio es apodado «la semilla del universo» por el pueblo dogón. Es un cereal sin gluten, muy digestible, de bajo índice glucémico y rico en aminoácidos azufrados (metionina y cisteína). El fonio está ganando popularidad en Europa y América, disponible cada vez más en tiendas de productos ecológicos y tiendas africanas especializadas.',
    category: 'General',
    relatedMillets: [],
  },
  {
    id: 'millets-in-the-world',
    question: '¿En qué partes del mundo se consumen los millets?',
    answer:
      'Los millets se consumen en todos los continentes y forman parte de tradiciones culinarias muy diversas. En la India, el mijo perla (bajra) es la base de los panes planos del noroeste, mientras que el ragi compone las gachas y tortitas del sur, alimentando a cientos de millones de personas. En China, el xiaomi (mijo italiano) se cultiva desde hace 8 000 años y se sirve como gachas a diario en el norte del país. En África Occidental, el mijo perla y el sorgo constituyen la base alimentaria del Sahel, presentes en platos como el tô (pasta de mijo o sorgo), el thiéré (cuscús senegalés) y el ogi nigeriano. En Japón, el kibi (mijo común) forma parte del mochi tradicional. En Europa, el mijo fue un cereal fundamental desde el Neolítico hasta el siglo XVIII, y en Rusia y Europa del Este las gachas de mijo siguen siendo un plato cotidiano. Los millets son verdaderamente cereales globales.',
    category: 'General',
    relatedMillets: ['pearl-millet', 'sorghum', 'foxtail-millet'],
  },
  {
    id: 'millets-environment',
    question: '¿Los millets son beneficiosos para el medio ambiente?',
    answer:
      'Los millets están entre los cereales más sostenibles ecológicamente. Requieren muy poca agua: el mijo perla, por ejemplo, crece con solo 300 a 500 mm de precipitación anual, frente a los 1 200 mm del arroz inundado. Su ciclo de cultivo es corto (60 a 90 días para algunas especies), lo que reduce la ocupación del suelo. Se adaptan a suelos pobres y marginales sin necesitar grandes cantidades de fertilizantes. Los millets tienen una huella de carbono significativamente menor que la del trigo y el arroz. La ONU declaró 2023 como el Año Internacional del Mijo, respaldado por 72 países, para promover estos «supercereales» frente al cambio climático. La FAO y la OMS destacan su papel clave en la seguridad alimentaria sostenible.',
    category: 'General',
    relatedMillets: ['pearl-millet'],
  },

  // =====================
  // NUTRICION (4)
  // =====================
  {
    id: 'nutritional-value',
    question: '¿Cuál es el valor nutricional de los millets?',
    answer:
      'Los millets ofrecen un perfil nutricional excepcional. Por cada 100 g de grano seco, aportan en promedio de 10 a 12 g de proteínas, de 2 a 5 g de lípidos y de 60 a 70 g de carbohidratos complejos. Su contenido en fibra dietética (6 a 13 g/100 g) es muy superior al del arroz blanco (0,2 g). Son ricos en minerales esenciales: el ragi (mijo dedo) proporciona 344 mg de calcio por 100 g (frente a 10 mg del arroz), y el mijo perla (bajra) aporta 8 mg de hierro (frente a 0,7 mg del arroz). Los millets también contienen magnesio, fósforo, zinc y vitaminas del grupo B. Su índice glucémico bajo a moderado (44 a 62) los convierte en aliados para el control de la glucemia. Según la base de datos BEDCA (Base Española de Datos de Composición de Alimentos) y la USDA, estos valores los posicionan como cereales altamente nutritivos.',
    category: 'Nutrición',
    relatedMillets: ['finger-millet', 'pearl-millet'],
  },
  {
    id: 'millets-vs-quinoa',
    question: '¿Millets o quinoa: cuál elegir?',
    answer:
      'Ambos son excelentes opciones nutricionales, pero presentan diferencias notables. La quinoa es rica en proteínas completas (14 g/100 g) con todos los aminoácidos esenciales, mientras que los millets ofrecen mayor diversidad: el ragi destaca en calcio, el mijo perla en hierro, el mijo browntop en fibra. En cuanto al precio, los millets son sensiblemente más asequibles: en España, el mijo común cuesta entre 2 y 4 EUR/kg frente a 6-10 EUR/kg de la quinoa; en México y América Latina, donde la quinoa puede ser importada y cara, los millets representan una alternativa mucho más económica. Desde el punto de vista ecológico, los millets requieren menos agua y pueden cultivarse localmente, reduciendo la huella de carbono respecto a la quinoa frecuentemente importada de los Andes. Lo ideal es alternar ambos cereales en la alimentación. Para el público latinoamericano, los millets son una opción accesible que complementa perfectamente a la quinoa.',
    category: 'Nutrición',
    relatedMillets: ['finger-millet', 'pearl-millet', 'browntop-millet'],
  },
  {
    id: 'most-calcium-millet',
    question: '¿Qué millet contiene más calcio?',
    answer:
      'El ragi (mijo dedo o Eleusine coracana) ostenta el récord de calcio entre todos los cereales comúnmente consumidos, con aproximadamente 344 mg por 100 g según las tablas de composición alimentaria (USDA/BEDCA). Esto es más de 30 veces el contenido del arroz blanco (10 mg/100 g) y unas 8 veces el del trigo integral (41 mg/100 g). A modo de comparación, un vaso de leche (200 ml) aporta unos 240 mg de calcio. El ragi es por tanto especialmente recomendable para niños en crecimiento, mujeres embarazadas, personas mayores y quienes siguen una dieta vegana para cubrir sus necesidades de calcio. La AESAN (Agencia Española de Seguridad Alimentaria y Nutrición) recomienda una ingesta diaria de 800-1 000 mg de calcio para adultos.',
    category: 'Nutrición',
    relatedMillets: ['finger-millet'],
  },
  {
    id: 'most-fiber-millet',
    question: '¿Qué millet es el más rico en fibra?',
    answer:
      'El mijo browntop (browntop millet) posee el mayor contenido de fibra dietética entre los millets, con aproximadamente 12,5 g por 100 g. Le siguen el mijo de corral (barnyard millet, unos 10 g/100 g) y el mijo kodo (unos 9 g/100 g). Para comparar, el arroz blanco contiene apenas 0,2 g de fibra por 100 g. Estas fibras —tanto solubles como insolubles— favorecen la saciedad, ralentizan la absorción de glucosa, nutren la microbiota intestinal y contribuyen a mantener niveles saludables de colesterol. Integrar millets ricos en fibra en la alimentación diaria es una forma sencilla de alcanzar la ingesta recomendada de 25 a 30 g diarios de fibra, según la OMS y la AESAN.',
    category: 'Nutrición',
    relatedMillets: ['browntop-millet', 'barnyard-millet', 'kodo-millet'],
  },

  // =====================
  // COCINA (4)
  // =====================
  {
    id: 'how-to-cook-millets',
    question: '¿Cómo se cocinan los millets?',
    answer:
      'La cocción de los millets es sencilla y similar a la del arroz. Comienza por enjuagar los granos con agua fría para eliminar impurezas. Para la mayoría de los millets, utiliza una proporción de 1 volumen de granos por 2,5 volúmenes de agua. Lleva a ebullición, luego reduce el fuego, tapa y deja cocinar a fuego lento de 15 a 20 minutos. Deja reposar 5 minutos fuera del fuego antes de esponjar con un tenedor. Para un sabor más rico, tuesta los granos en seco en una sartén durante 2 a 3 minutos antes de la cocción. El remojo previo (de 30 minutos a 2 horas) es recomendable para el mijo kodo, el mijo menor y el mijo de corral, ya que reduce los antinutrientes y mejora la digestibilidad. Los millets funcionan perfectamente en ollas arroceras y ollas de presión.',
    category: 'Cocina',
    relatedMillets: ['kodo-millet', 'little-millet', 'barnyard-millet'],
  },
  {
    id: 'cooking-times',
    question: '¿Cuáles son los tiempos de cocción de los diferentes millets?',
    answer:
      'Los tiempos de cocción varían según el millet. El mijo común y el mijo italiano se cocinan en 15 a 20 minutos con una proporción agua/grano de 2,5:1. El mijo menor y el mijo de corral necesitan de 20 a 25 minutos con la misma proporción. El mijo kodo requiere de 25 a 30 minutos con una proporción de 2,5 a 3:1. El sorgo (jowar) en grano entero es el que más tarda: de 40 a 50 minutos con una proporción de 3:1 (un remojo de 6 a 8 horas reduce este tiempo a la mitad). El mijo perla (bajra) generalmente se consume en forma de harina (gachas, tortitas) en lugar de en grano entero. Para todos los millets, la cocción en olla arrocera o en olla de presión simplifica enormemente la preparación.',
    category: 'Cocina',
    relatedMillets: [
      'proso-millet',
      'foxtail-millet',
      'little-millet',
      'barnyard-millet',
      'kodo-millet',
      'sorghum',
      'pearl-millet',
    ],
  },
  {
    id: 'spanish-latam-recipes',
    question: '¿Cómo integrar los millets en la cocina española y latinoamericana?',
    answer:
      'Los millets se adaptan maravillosamente a la gastronomía hispanohablante. En España, el mijo común puede sustituir al arroz en una paella de verduras o en un arroz caldoso, aportando un toque diferente y más nutritivo. El sorgo (jowar) es excelente para preparar gachas, una tradición arraigada en Andalucía y Castilla. La harina de mijo puede reemplazar parcialmente la harina de trigo (hasta un 30 %) en tortillas de trigo mexicanas, empanadas argentinas y arepas venezolanas. El mijo italiano funciona muy bien como base de un risotto cremoso o una ensalada tibia mediterránea. En México y Centroamérica, el sorgo ya se cultiva ampliamente y puede incorporarse en atoles, tamales y pozole. La harina de ragi prepara unas tortitas de desayuno espectaculares. Para el desayuno, unas gachas de mijo con leche, canela y frutas son una alternativa deliciosa a la avena, muy en línea con la tradición española de gachas dulces.',
    category: 'Cocina',
    relatedMillets: ['proso-millet', 'sorghum', 'foxtail-millet'],
  },
  {
    id: 'reduce-earthy-taste',
    question: '¿Cómo atenuar el sabor terroso de los millets?',
    answer:
      'Algunas personas perciben un sabor terroso o ligeramente amargo en los millets, especialmente al probarlos por primera vez. Existen varias técnicas para atenuarlo. El remojo de 30 minutos a unas horas, seguido de un enjuague abundante, elimina parte de los compuestos amargos. Tostar los granos en seco en una sartén durante 2 a 3 minutos desarrolla agradables aromas de fruto seco. Añadir aromáticos como ajo, cebolla, comino, pimentón, orégano o laurel durante la cocción enmascara eficazmente el sabor terroso. Mezclar los millets con verduras, legumbres o utilizarlos en recetas con especias —un curry, un mole, un sofrito con pimientos— da excelentes resultados. Con el tiempo, la mayoría de las personas aprende a apreciar el sabor característico de los millets e incluso lo prefiere.',
    category: 'Cocina',
    relatedMillets: [],
  },

  // =====================
  // SALUD (4)
  // =====================
  {
    id: 'millets-diabetes',
    question: '¿Los millets son beneficiosos para personas con diabetes?',
    answer:
      'Los millets presentan un índice glucémico (IG) bajo a moderado, generalmente entre 44 y 62, frente a aproximadamente 73 del arroz blanco. Su riqueza en fibra ralentiza la absorción de glucosa y atenúa los picos de glucemia posprandiales. Varios estudios publicados en revistas como el Journal of Nutritional Science y Frontiers in Nutrition demuestran que sustituir el arroz por millets mejora el control glucémico en personas con diabetes tipo 2. Una metaanálisis de 2021 (Frontiers in Nutrition), que analizó 65 estudios con 1 000 participantes, mostró que el consumo regular de millets reduce la glucemia en ayunas un 12 % en promedio. No obstante, los millets no son un medicamento: constituyen una opción alimentaria más saludable que debe inscribirse en un manejo integral. Consulta siempre a tu médico o nutricionista para un consejo personalizado.',
    category: 'Salud',
    relatedMillets: ['foxtail-millet', 'kodo-millet', 'little-millet'],
  },
  {
    id: 'millets-children',
    question: '¿Los millets son adecuados para niños?',
    answer:
      'Sí, los millets son perfectamente aptos para la alimentación infantil y pueden introducirse a partir de la alimentación complementaria (hacia los 6 meses), en forma de papilla suave. El ragi (mijo dedo) es especialmente recomendable para niños gracias a su excepcional riqueza en calcio (344 mg/100 g), esencial para el crecimiento óseo. El mijo perla (bajra) aporta hierro (8 mg/100 g), importante para prevenir la anemia infantil. En África Occidental, las papillas de mijo constituyen desde siempre un alimento tradicional de destete. En la India, la papilla de ragi es recomendada por los pediatras desde los 6 meses. Al ser los millets libres de gluten, también son aptos para niños con intolerancia al gluten. Comienza con pequeñas cantidades y varía los tipos de millet para asegurar un aporte nutricional diversificado.',
    category: 'Salud',
    relatedMillets: ['finger-millet', 'pearl-millet'],
  },
  {
    id: 'millets-thyroid',
    question: '¿Los millets representan un riesgo para la tiroides?',
    answer:
      'Algunos millets, en particular el mijo perla (bajra) y el ragi, contienen goitrógenos —compuestos que pueden interferir con la absorción de yodo por la glándula tiroides—. Sin embargo, la cocción reduce considerablemente el contenido de goitrógenos. Un consumo moderado de millets bien cocidos es considerado seguro para la gran mayoría de las personas. Una revisión sistemática publicada en Critical Reviews in Food Science and Nutrition (2024) concluyó que las evidencias de un efecto bociógeno en humanos con una alimentación variada son «insuficientemente convincentes» para justificar la exclusión de los millets. Si padeces una afección tiroidea, especialmente hipotiroidismo, es aconsejable consultar con tu endocrinólogo antes de incorporar los millets en grandes cantidades. Asegúrate también de mantener un aporte suficiente de yodo (sal yodada, algas, mariscos) para compensar cualquier efecto potencial.',
    category: 'Salud',
    relatedMillets: ['pearl-millet', 'finger-millet'],
  },
  {
    id: 'millets-weight-loss',
    question: '¿Los millets ayudan a perder peso?',
    answer:
      'Los millets pueden ser aliados valiosos en un programa de pérdida de peso, aunque ningún alimento por sí solo hace adelgazar. El mijo de corral (barnyard millet) presenta el menor contenido calórico entre los millets (unas 307 kcal/100 g frente a 356 kcal del arroz) y es bajo en carbohidratos. El mijo browntop, con sus 12,5 g de fibra por 100 g, proporciona una saciedad duradera que ayuda a reducir la ingesta calórica total. El mijo kodo, gracias a su bajo índice glucémico, limita los antojos ligados a los picos de insulina. Para optimizar resultados, integra los millets en una alimentación equilibrada y variada, asociada a actividad física regular. Según la OMS, es el conjunto del estilo de vida lo que cuenta, no un alimento individual.',
    category: 'Salud',
    relatedMillets: ['barnyard-millet', 'browntop-millet', 'kodo-millet'],
  },

  // =====================
  // COMPRA (4)
  // =====================
  {
    id: 'where-to-buy-spain',
    question: '¿Dónde comprar millets en España?',
    answer:
      'Los millets son cada vez más accesibles en España. Los herbolarios y tiendas ecológicas —Veritas, Herbolario Navarro, La Grana— suelen ofrecer mijo común (a menudo etiquetado como «mijo decorticado» o «mijo pelado») y a veces sorgo. Grandes superficies como Carrefour Bio, Alcampo y Mercadona están incorporando mijo y sorgo en sus secciones de cereales y productos ecológicos. Las tiendas de alimentación africana e india ofrecen una gama más amplia: mijo perla (bajra), ragi, sorgo y fonio. En línea, plataformas como Amazon, Planeta Huerto y tiendas especializadas en alimentación ecológica disponen de varias variedades. Los precios oscilan entre 2 y 5 EUR el kilo a granel. Para variedades indias específicas como ragi o bajra en harina, las tiendas indias de barrios como Lavapiés (Madrid) o el Raval (Barcelona) son excelentes opciones.',
    category: 'Compra',
    relatedMillets: ['proso-millet', 'sorghum', 'pearl-millet'],
  },
  {
    id: 'where-to-buy-latam',
    question: '¿Dónde comprar millets en México y Latinoamérica?',
    answer:
      'En México, el sorgo (jowar) es ampliamente cultivado y disponible, a menudo utilizado en la industria alimentaria y como forraje, pero cada vez más presente en tiendas de productos naturales. En mercados orgánicos y tiendas como Superama/Walmart Selecto, City Market y tiendas de productos saludables se encuentra mijo común. En Argentina, Brasil y Chile, el mijo se encuentra en dietéticas (tiendas de productos naturales) y en cadenas como Dietética Santa Fe, Mundo Natural o tiendas Tottus con sección orgánica. Las tiendas en línea como Mercado Libre ofrecen diversas variedades. El fonio puede encontrarse en tiendas africanas de Ciudad de México, Buenos Aires o São Paulo. Para variedades indias (ragi, bajra), busca en tiendas indias especializadas en las principales ciudades. El sorgo es generalmente la opción más accesible y económica en toda Latinoamérica, dado que la región es un gran productor mundial.',
    category: 'Compra',
    relatedMillets: ['sorghum', 'proso-millet', 'pearl-millet'],
  },
  {
    id: 'storage-millets',
    question: '¿Cómo conservar los millets?',
    answer:
      'Los millets en grano entero se conservan muy bien. Almacénalos en recipientes herméticos (frascos de vidrio, cajas metálicas o bolsas con cierre zip) en un lugar fresco, seco y protegido de la luz. En estas condiciones, los granos enteros se conservan de 6 a 12 meses sin pérdida de calidad. La harina de millet, más sensible al enranciamiento por los aceites expuestos, debe utilizarse en 2 a 3 meses; conservarla en el refrigerador prolonga su vida útil a 4-6 meses. Los millets cocidos se mantienen de 3 a 4 días en el refrigerador en un recipiente cerrado, y hasta 3 meses en el congelador. Revisa periódicamente que no haya humedad, insectos u olores anormales. En climas tropicales de Latinoamérica, es especialmente importante mantenerlos en lugares frescos y secos.',
    category: 'Compra',
    relatedMillets: [],
  },
  {
    id: 'bio-vs-conventional',
    question: '¿Conviene comprar millets ecológicos o convencionales?',
    answer:
      'Los millets ecológicos presentan varias ventajas. Al ser cultivos rústicos, los millets necesitan naturalmente pocos pesticidas y fertilizantes químicos, lo que hace que su versión ecológica sea particularmente interesante en términos de relación calidad-precio. Los millets ecológicos certificados (sello de la UE, USDA Organic o equivalentes locales) garantizan la ausencia de residuos de pesticidas sintéticos y un cultivo respetuoso con el medio ambiente. La diferencia de precio entre ecológico y convencional suele ser modesta para los millets (1 a 2 EUR más por kilo). Los millets convencionales siguen siendo una buena opción nutricional. Si tu presupuesto es limitado, prioriza lo ecológico para los millets que consumas con mayor frecuencia y opta por lo convencional para compras ocasionales. En Latinoamérica, busca certificaciones como SAGARPA Orgánico (México) o sellos locales equivalentes.',
    category: 'Compra',
    relatedMillets: [],
  },
];
