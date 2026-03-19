import type { RegionalTradition } from '@/lib/types';

export const regionalTraditions: RegionalTradition[] = [
  // === RAJASTÁN ===
  {
    slug: 'rajasthan',
    state: 'Rajastán',
    region: 'India Occidental',
    tagline:
      'Donde el bajra alimenta el espíritu guerrero del desierto y cada comida invernal comienza con mijo perla.',
    description:
      'Rajastán es el corazón indiscutible del bajra (mijo perla) en la India, donde el grano prospera en los suelos áridos y arenosos del desierto del Thar con tan solo 200-300 mm de precipitación anual. Durante siglos, el bajra ha sido mucho más que un cultivo aquí — es el fundamento de la identidad rajasthaní, tejido en los ritmos diarios de la vida desde el primer roti de la mañana hasta la última comida de la noche. El estado produce casi el 40 % de la producción total de mijo perla de la India, y en las regiones de Marwar y Shekhawati, una comida sin bajra se considera incompleta. Para el público hispanohablante, Rajastán evoca los majestuosos fuertes del desierto y los coloridos turbantes, pero el verdadero tesoro de esta región es su patrimonio cerealero: el bajra es al Rajastán lo que el trigo es a Castilla — el grano que forjó una civilización.',
    primaryMillets: ['pearl-millet', 'sorghum'],
    iconicDishes: [
      {
        name: 'Bajre ki Roti',
        millet: 'Mijo perla',
        description:
          'El pan plano rajasthaní por excelencia, moldeado a mano dando palmadas (no estirado con rodillo, ya que la masa de bajra carece de gluten) en rondas gruesas y rústicas, cocido sobre una plancha o sobre fuego de estiércol. Se sirve tradicionalmente goteando ghee (mantequilla clarificada) y acompañado de lehsun ki chutney (chutney de ajo), ker sangri (judías del desierto) o lashun-mirchi. En invierno, es la piedra angular de cada comida en todo el estado, desde las cocinas reales hasta los campamentos de pastores.',
      },
      {
        name: 'Bajre ki Rabdi',
        millet: 'Mijo perla',
        description:
          'Gachas espesas y reconfortantes preparadas cociendo lentamente harina de bajra molida gruesa en suero de leche o agua, sazonadas con comino, ajo y chiles verdes. Este alimento ancestral reconfortante es especialmente popular en los distritos de Jodhpur y Barmer y se considera ideal para generar calor y resistencia durante los crudos inviernos del desierto. En muchos hogares, la rabdi es el primer alimento que se da para recuperarse de una enfermedad.',
      },
      {
        name: 'Bajre ka Sogra',
        millet: 'Mijo perla',
        description:
          'Una preparación dulce tradicional rajasthaní donde la harina de bajra se tuesta en abundante ghee hasta que desprende un aroma intenso, luego se endulza con jaggery (panela india) y se moldea en ladoos densos y energéticos o tortas planas. El sogra es un dulce invernal de uso cotidiano, a menudo preparado en grandes cantidades después de la cosecha de bajra y almacenado durante semanas. Se ofrece tradicionalmente a las madres recientes y es parte esencial de las celebraciones poscosecha.',
      },
      {
        name: 'Khichiya',
        millet: 'Mijo perla',
        description:
          'Papad ultrafino secado al sol hecho extendiendo una masa fermentada de bajra sobre tela y secándola bajo el férreo sol rajasthaní. Los discos secos se tuestan sobre brasas o se fríen hasta que se hinchan en galletas crujientes y sabrosas. La elaboración del khichiya es una actividad comunitaria, donde las mujeres se reúnen en los patios durante los meses de verano para preparar suficientes reservas para todo el año.',
      },
      {
        name: 'Bajre ki Khichdi',
        millet: 'Mijo perla',
        description:
          'Un plato único sustancioso de bajra cocido con moong dal (lentejas verdes), ghee y especias reconfortantes como comino y asafétida. A diferencia del khichdi de arroz, el de bajra tiene un sabor robusto y terroso con una textura ligeramente masticable. Es una cena habitual en las comunidades agrícolas, a menudo acompañada de una generosa cucharada de mantequilla blanca y un vaso de suero de leche espeso.',
      },
    ],
    festivals: [
      {
        name: 'Festines de Makar Sankranti',
        description:
          'El festival de la cosecha invernal de Makar Sankranti (14 de enero) se celebra en todo Rajastán con elaborados banquetes de bajra. Las familias se reúnen para comer rotis de bajra recién preparados, ladoos de sogra y golosinas de til-bajra (sésamo y mijo). El festival marca la transición del sol a Capricornio y el apogeo de la temporada de bajra.',
        milletConnection:
          'El bajra está en el centro de todos los banquetes de Sankranti en Rajastán. Las preparaciones especiales incluyen ladoos de bajra-til (bolas de mijo perla y sésamo), halwa de bajra y el ritual del primer bajra roti de la nueva cosecha. Ofrecer platos de bajra a los ancianos de la comunidad y a los invitados se considera auspicioso.',
      },
      {
        name: 'Teej',
        description:
          'El festival monzónico de Teej, celebrado por las mujeres para la dicha conyugal y la llegada de las lluvias, incluye alimentos tradicionales con dulces a base de bajra. El festival está profundamente ligado al ciclo agrícola, ya que las lluvias determinan el éxito de la próxima cosecha de bajra.',
        milletConnection:
          'Las mujeres preparan ghevar de bajra y bajre ki meethi roti como ofrendas durante Teej. Las oraciones del festival incluyen deseos de una cosecha abundante de bajra, reconociendo que las lluvias monzónicas son el sustento vital del cultivo de mijo perla en el desierto.',
      },
    ],
    culturalSignificance:
      'En las tradiciones orales de la región de Marwar, el bajra se personifica a menudo como un guerrero resiliente — al igual que los propios reyes rajput — que prospera donde otros perecen. La poeta-santa del siglo XV Meera Bai, nacida en Merta (un distrito importante de cultivo de bajra), habría crecido comiendo bajra rotis, y el grano aparece en las canciones folclóricas de la región como metáfora del sustento y la supervivencia. El dicho «Bajro khave, taakat pave» (Quien come bajra gana fuerza) es una creencia profundamente arraigada en el Rajastán rural, y muchas comunidades consideran el bajra roti superior al trigo tanto en sabor como en valor nutritivo. Históricamente, los ejércitos rajput llevaban harina de bajra como raciones de campaña por su larga vida útil y alta densidad energética — una práctica documentada en relatos medievales de las campañas militares de Marwar. La capacidad del grano de crecer en condiciones arenosas y con escasas lluvias refleja el ethos rajasthaní de resiliencia, y su cultivo ha moldeado los patrones de asentamiento, la gestión del agua y las estructuras sociales a lo largo del Thar durante más de tres milenios.',
    traditionalPractices: [
      'Moldear los bajra rotis dando palmadas en lugar de estirarlos con rodillo — la masa se da forma golpeándola entre las palmas, una habilidad transmitida de madre a hija a lo largo de generaciones.',
      'Almacenar el grano de bajra en graneros tradicionales de barro llamados «kothi» o «bakhri», que utilizan hojas de neem y flores secas de mahua como repelentes naturales de insectos.',
      'Preparar «raab» — unas gachas finas y reconfortantes de bajra con jaggery — como remedio tradicional contra el frío, la fiebre y la debilidad en recién nacidos y ancianos.',
      'Cosecha comunitaria de bajra, donde aldeas enteras se reúnen para cortar y trillar, seguido de comidas celebratorias de bajra roti fresco con mantequilla blanca.',
      'La práctica del «undhiyo» — enterrar paquetes de masa de bajra en arena caliente del desierto o en hoyos de brasas para una cocción lenta durante largos viajes pastorales.',
    ],
    famousQuoteOrSaying:
      '«Bajro khave, taakat pave» — Quien come bajra gana fuerza. (Proverbio rajasthaní)',
    imageFile: '/images/sections/regional-rajasthan.webp',
  },

  // === KARNATAKA ===
  {
    slug: 'karnataka',
    state: 'Karnataka',
    region: 'India del Sur',
    tagline:
      'La capital del ragi en la India, donde la eleusina ha sido venerada en poesía, oración y plato durante cinco siglos.',
    description:
      'Karnataka es el mayor productor de ragi (eleusina) de la India, representando cerca del 58 % de la producción total del país. Los distritos meridionales de Mandya, Hassan, Tumkur, Bangalore Rural y Mysore forman el cinturón del ragi, donde el grano no es solo un alimento básico sino un referente cultural. En la antigua región de Mysore, el ragi mudde (bola de ragi) con saaru (rasam, caldo especiado) es tan fundamental para la identidad como el idioma mismo, y el grano ha sido celebrado en una de las obras literarias más famosas de la literatura en kannada — el poema alegórico del siglo XVI del poeta Kanakadasa sobre la supremacía del ragi sobre el arroz. Para los hispanohablantes, puede imaginarse el ragi mudde como el equivalente indio de las gachas castellanas: un alimento humilde pero profundamente arraigado en la identidad de un pueblo.',
    primaryMillets: ['finger-millet', 'sorghum'],
    iconicDishes: [
      {
        name: 'Ragi Mudde',
        millet: 'Eleusina (Ragi)',
        description:
          'La icónica bola de ragi — una esfera suave y densa de harina de ragi cocida que es el alimento del alma de Karnataka. El ragi mudde se prepara removiendo continuamente harina de ragi en agua hirviendo hasta que forma una masa espesa y sin grumos, luego se moldea en bolas del tamaño de un puño. Se come tradicionalmente partiendo trocitos con los dedos y mojándolos en soppu saaru (caldo de hojas verdes), bas saaru (caldo de carne) o huli (sambar). El arte de hacer un mudde perfectamente suave — sin grumos — se considera una marca de habilidad culinaria.',
      },
      {
        name: 'Ragi Ambali',
        millet: 'Eleusina (Ragi)',
        description:
          'Gachas tradicionales de ragi fermentado que son un desayuno y refrigerio de mediodía habitual en el Karnataka rural. La harina de ragi se cocina en gachas ligeras, se mezcla con suero de leche y se deja fermentar durante la noche. La bebida resultante, ácida y rica en probióticos, se consume fría como refrescante natural durante los calurosos veranos. Los trabajadores agrícolas llevan ambali en vasijas de barro a los campos, donde sirve tanto de alimento como de hidratación.',
      },
      {
        name: 'Ragi Dosa',
        millet: 'Eleusina (Ragi)',
        description:
          'Una crepe oscura y terrosa hecha con una masa fermentada de harina de ragi, a menudo mezclada con una pequeña proporción de arroz y urad dal para lograr textura crujiente. El ragi dosa es más grueso y rústico que su homólogo a base de arroz, con un sabor distintivo a nuez. Se sirve típicamente con chutney de coco y un chutney picante de cebolla y tomate. En el distrito de Mandya, el ragi dosa es un desayuno habitual que nunca ha pasado de moda.',
      },
      {
        name: 'Jolada Rotti',
        millet: 'Sorgo (Jowar)',
        description:
          'El gran pan plano del norte de Karnataka, hecho con harina de jowar (sorgo) y cocido sobre una vasija de barro invertida llamada «kallu». El jolada rotti es más grande y grueso que un chapati típico, con un sabor ligeramente dulce y tostado. En las regiones de Dharwad, Belgaum y Hubli, es el centro de cada comida, servido con ennegai (berenjena rellena), shenga chutney (chutney de cacahuete) y badanekai yennegai. La frase «Jolada rotti, ennegai» es prácticamente el lema de la cocina del norte de Karnataka.',
      },
    ],
    festivals: [
      {
        name: 'Ragi Habba (Festival del Ragi)',
        description:
          'Celebraciones de la cosecha en los distritos cultivadores de ragi del sur de Karnataka donde las primeras espigas de la nueva cosecha de ragi se cortan ceremonialmente y se llevan a casa. Los agricultores ofrecen oraciones a la tierra y a los dioses de la lluvia, y el ragi fresco se usa para preparar platos especiales para la familia y la comunidad.',
        milletConnection:
          'El primer ragi de la temporada se considera sagrado. Los agricultores preparan «hosa ragi mudde» (bolas de ragi nuevo) y las ofrecen a la deidad del hogar antes de que la familia coma. El festival refuerza el profundo vínculo espiritual entre la comunidad agrícola y el cultivo de ragi que la sustenta.',
      },
      {
        name: 'Ugadi',
        description:
          'El festival del Año Nuevo en kannada marca el inicio de un nuevo ciclo agrícola. Los hogares preparan banquetes elaborados que incluyen preparaciones tradicionales de ragi junto con la mezcla característica de bevu-bella (neem y jaggery) que simboliza la naturaleza agridulce de la vida.',
        milletConnection:
          'En las regiones cultivadoras de ragi, las celebraciones de Ugadi incluyen ragi payasa especial (pudín de ragi con jaggery, leche de coco y cardamomo) y rotis de ragi. El festival coincide con la planificación de la nueva temporada de siembra de ragi, y los agricultores consultan el panchanga (almanaque) para encontrar fechas auspiciosas para comenzar la preparación del campo.',
      },
      {
        name: 'Kanakadasa Jayanti',
        description:
          'Celebración anual en honor del poeta-santo del siglo XVI Kanakadasa, cuyo poema alegórico «Ramadhanya Charithre» (La Historia de Ramadhanya) enfrentó al ragi contra el arroz en un tribunal divino — y el ragi ganó. Este festival se observa en todo el estado e incluye actuaciones culturales, debates literarios y banquetes comunitarios de ragi.',
        milletConnection:
          'El poema de Kanakadasa describe un debate entre Ragi y Arroz ante el Señor Rama, donde Ragi argumenta que alimenta al pueblo llano, requiere menos agua, crece en suelo pobre y nutre sin discriminación — ganando finalmente el favor de Rama. El poema es una de las defensas literarias más tempranas y poderosas del cultivo de mijo en cualquier idioma, y el ragi se sirve en todos los eventos de Kanakadasa Jayanti como homenaje.',
      },
    ],
    culturalSignificance:
      'La relación de Karnataka con el ragi es quizás la más profunda de cualquier vínculo estado-mijo en la India, elevada a la inmortalidad literaria por el poeta haridasa del siglo XVI Kanakadasa. Su poema alegórico «Ramadhanya Charithre» (La Historia del Grano Superior) es un hito en la literatura kannada donde el Ragi personificado debate con el Arroz personificado ante la corte del Señor Rama. Ragi argumenta que mientras el Arroz adorna las mesas reales, es Ragi quien alimenta a las masas trabajadoras, crece sin exigir suelo rico ni agua abundante, y proporciona nutrición superior. El Señor Rama falla a favor de Ragi, declarándolo «Ramadhanya» — el grano bendecido por el propio Rama. Este poema de 500 años anticipó la ciencia nutricional moderna por siglos y sigue siendo un referente cultural poderoso. Kanakadasa mismo pertenecía a la comunidad pastoril de casta inferior, y su defensa del ragi — el alimento del pueblo llano — sobre el arroz — el grano de la élite — fue un acto revolucionario de comentario social.',
    traditionalPractices: [
      'El arte del «mudde kaisu» — la técnica específica de giro de muñeca utilizada para moldear bolas de ragi perfectamente suaves, enseñada como habilidad esencial a las jóvenes mujeres en los hogares tradicionales.',
      'Almacenar el grano de ragi en «kanaja» — grandes graneros cilíndricos de bambú y barro elevados sobre plataformas de piedra para protegerlos de la humedad y los roedores, algunos de los cuales almacenan hasta una tonelada de grano.',
      'Preparar malta de ragi (ragi hittu) para lactantes como primer alimento sólido tradicional, haciendo germinar ragi, secándolo al sol y moliéndolo hasta obtener un polvo fino, que se cree fortalece huesos y dientes.',
      'La práctica del «ragi kaalu» — germinar semillas de ragi sobre un paño húmedo extendido sobre hojas de plátano, utilizado en medicina tradicional como digestivo y prescrito durante la convalecencia.',
      'El pilado comunitario de ragi usando morteros de madera (oral) y manos (onake), realizado tradicionalmente por grupos de mujeres cantando canciones de trabajo que sincronizan el ritmo del pilado.',
    ],
    famousQuoteOrSaying:
      '«Raagi mudde tinno, baaLa beLesiro» — Come ragi mudde, cría hijos fuertes. (Proverbio kannada)',
    imageFile: '/images/sections/regional-karnataka.webp',
  },

  // === MAHARASHTRA ===
  {
    slug: 'maharashtra',
    state: 'Maharashtra',
    region: 'India Occidental',
    tagline:
      'La república del jowar, donde el bhakri es rey y las fiestas de hurda convierten el mijo asado en una celebración comunitaria.',
    description:
      'Maharashtra es el mayor productor de jowar (sorgo) de la India, y el grano es la base de la cultura alimentaria rural del estado, particularmente en los distritos de la meseta del Decán: Solapur, Sangli, Satara, Pune y Ahmednagar. La expresión en maratí «Zunka Bhakri» — una combinación sencilla de preparación de harina de garbanzo y pan plano de jowar — se ha convertido en sinónimo del ethos de la clase trabajadora de Maharashtra. La cultura del mijo del estado alcanza su expresión más alegre en la tradición anual de las «Hurda Party», donde las comunidades se reúnen para asar espigas tiernas de jowar verde sobre fuegos abiertos en los campos. Para el público hispanohablante, imaginemos las Hurda Party como las calçotades catalanas del mijo — un ritual agrícola festivo donde se come directamente del campo.',
    primaryMillets: ['sorghum', 'pearl-millet', 'finger-millet'],
    iconicDishes: [
      {
        name: 'Jowar Bhakri',
        millet: 'Sorgo (Jowar)',
        description:
          'El pan plano por antonomasia de Maharashtra — grueso, ligeramente tosco y profundamente satisfactorio. El jowar bhakri se moldea presionando la masa de jowar a mano sobre una superficie enharinada y tostándolo en seco sobre una plancha hasta que desarrolla manchas marrones características. A diferencia de los rotis de trigo, el bhakri es denso y saciante, con una dulzura sutil que combina perfectamente con thecha (chutney de chile verde y ajo), pitla (salsa sazonada de harina de garbanzo) o bharli vangi (berenjena rellena). En el Maharashtra rural, una pila de bhakris calientes con una generosa capa de mantequilla blanca es la definición de una buena comida.',
      },
      {
        name: 'Hurda',
        millet: 'Sorgo (Jowar)',
        description:
          'Espigas tiernas y lechosas de jowar verde asadas directamente sobre fuegos abiertos en los campos — una delicatessen estacional disponible solo durante unas semanas durante la cosecha invernal. Las fiestas de hurda son una querida tradición de Maharashtra donde familias y amigos se reúnen en los campos de jowar, hacen hogueras y asan las espigas jóvenes hasta que se chamuscan por fuera mientras los granos interiores quedan blandos, ahumados y ligeramente dulces. Los granos asados se frotan y se comen calientes con un chorrito de lima y una pizca de sal.',
      },
      {
        name: 'Zunka Bhakri',
        millet: 'Sorgo (Jowar)',
        description:
          'El icónico plato de la clase trabajadora de Maharashtra — harina de garbanzo tostada en seco, temperada con semillas de mostaza, hojas de curry, chiles verdes y cebolla, servida junto a jowar bhakri caliente. El Zunka Bhakri es tan central para la identidad de Maharashtra que ha sido adoptado como símbolo político, concepto de restaurante y referente cultural de comida honesta y sin pretensiones. Las fondas de carretera por toda la meseta del Decán sirven esta combinación como su oferta estrella.',
      },
      {
        name: 'Thalipeeth',
        millet: 'Sorgo (Jowar)',
        description:
          'Una tortita salada multigrano hecha con «bhajani» — una mezcla de harinas pretostadas de jowar, bajra, trigo, arroz y varias legumbres junto con especias como comino y cilantro. El thalipeeth se moldea directamente sobre una plancha caliente y aceitada con los dedos (no se estira con rodillo), creando una tortita gruesa con un agujero en el centro donde se acumula un charco de aceite o ghee. Se sirve tradicionalmente con mantequilla blanca fresca y yogur.',
      },
      {
        name: 'Jawari chi Pej',
        millet: 'Sorgo (Jowar)',
        description:
          'Gachas ligeras de jowar que son el desayuno tradicional de las comunidades agrícolas de las regiones de Vidarbha y Marathwada. La harina de jowar se cocina lentamente en agua o suero de leche hasta una consistencia suave y bebible, sazonada con sal y comino. La pej se considera un alimento refrescante y se consume en grandes cantidades durante los meses calurosos como nutrición e hidratación para los trabajadores del campo.',
      },
    ],
    festivals: [
      {
        name: 'Temporada de Hurda Party',
        description:
          'Aunque no es un festival formal, la temporada anual de hurda (diciembre-enero) se ha convertido en una de las tradiciones culinarias más apreciadas de Maharashtra. Los agricultores invitan a amigos, familia e incluso visitantes urbanos a sus campos de jowar para el asado comunitario de espigas tiernas de sorgo. En décadas recientes, las hurda parties se han convertido en una forma de agroturismo.',
        milletConnection:
          'La hurda solo es posible en una etapa específica del crecimiento del jowar — la etapa «doodh» (leche) — cuando los granos aún están verdes y llenos de líquido lechoso. Esta fugaz ventana convierte a la hurda en un tesoro estacional. La tradición celebra el cultivo de jowar en su momento más tierno y refuerza el vínculo entre el Maharashtra urbano y rural a través del amor compartido por el grano.',
      },
      {
        name: 'Pola (Festival del Toro)',
        description:
          'Pola es un festival de acción de gracias por la cosecha celebrado en todo Maharashtra que honra a los toros que labran los campos. El festival cae en agosto e implica decorar toros, festejar y celebrar la asociación agrícola entre agricultor y animal.',
        milletConnection:
          'Las comidas tradicionales de Pola incluyen jowar bhakri y bajra rotis como plato central. Se preparan dulces especiales a base de jowar como el puran poli hecho con harina de jowar y relleno de dal endulzado. El festival reconoce el papel de los toros en el arado de los campos de jowar y bajra, y la primera comida servida a los toros decorados a menudo incluye grano de jowar.',
      },
    ],
    culturalSignificance:
      'El jowar bhakri está tan profundamente arraigado en la psique cultural de Maharashtra que la expresión «Zunka Bhakri» ha trascendido la comida para convertirse en símbolo de la identidad de la clase trabajadora maharashtriana y de los valores igualitarios. El reformador social Mahatma Jyotirao Phule (1827-1890) defendió la causa de las clases agrarias que subsistían con jowar, y sus escritos frecuentemente hacen referencia al mijo como el verdadero sustentador de las clases productivas de Maharashtra. En el discurso político moderno, «Zunka Bhakri» sigue siendo un poderoso significante de conexión con las bases y antielitismo. La tradición de la hurda party, mientras tanto, representa algo único en la cultura alimentaria de la India — un ritual celebratorio construido en torno a comer un cultivo en su forma inmadura, directamente en el campo donde crece.',
    traditionalPractices: [
      'El arte de moldear el bhakri dando palmadas — dar forma a la masa de jowar presionando con la mano sobre una superficie enharinada en lugar de estirarla con rodillo, produciendo la textura gruesa y ligeramente irregular característica del bhakri auténtico.',
      'Preparar «bhajani» — la mezcla multigrano de harinas tostadas para thalipeeth — tostando individualmente en seco jowar, bajra, arroz, chana dal y especias antes de molerlos, a menudo en grandes cantidades para meses de uso.',
      'La técnica de asado de hurda — construir fuegos bajos con tallos de jowar y estiércol seco de vaca, y girar las espigas jóvenes de jowar sobre las llamas hasta chamuscarlas uniformemente, requiere manos experimentadas para evitar quemarlas.',
      'Almacenar el jowar en «kothya» — graneros elevados de barro y piedra con pequeños orificios de ventilación, protegidos por fumigación con humo de neem para prevenir la infestación de gorgojos durante los meses del monzón.',
      'La práctica del «ukhad» — servir bhakri rompiéndolo en trozos directamente en el plato y vertiendo pitla o amti (dal) sobre ellos, permitiendo que el bhakri absorba los sabores.',
    ],
    famousQuoteOrSaying:
      '«Jowar khaa, jawaan raha» — Come jowar, mantente joven. (Dicho maratí)',
    imageFile: '/images/sections/regional-maharashtra.webp',
  },

  // === TAMIL NADU ===
  {
    slug: 'tamil-nadu',
    state: 'Tamil Nadu',
    region: 'India del Sur',
    tagline:
      'La poesía Sangam ancestral se encuentra con las tradiciones vivas del mijo — donde el kambu koozh ha saciado la sed durante dos milenios.',
    description:
      'Tamil Nadu posee quizás la relación documentada más antigua entre una civilización y sus mijos, remontándose a la era Sangam (siglo III a. C. al siglo III d. C.). El Tolkappiyam, uno de los primeros tratados gramaticales tamiles, estableció el sistema «tinai» — una clasificación de cinco paisajes, cada uno asociado a cultivos, ocupaciones y temas poéticos específicos. Los mijos aparecen prominentemente en este marco, integrados en la gramática misma de la expresión literaria tamil. Hoy, Tamil Nadu cultiva una diversidad extraordinaria de mijos — kambu (mijo perla), varagu (mijo kodo), thinai (mijo de cola de zorro), samai (mijo menor) y kudiraivali (mijo de corral) — y cada uno tiene su propia tradición culinaria, uso estacional y asociación regional. Para los hispanohablantes, Tamil Nadu es al mijo lo que la Rioja es al vino: una tierra donde el cultivo está profundamente entrelazado con la cultura y la literatura.',
    primaryMillets: ['pearl-millet', 'kodo-millet', 'little-millet', 'foxtail-millet'],
    iconicDishes: [
      {
        name: 'Kambu Koozh',
        millet: 'Mijo perla',
        description:
          'Las antiguas gachas fermentadas de Tamil Nadu — harina de kambu (mijo perla) se cocina en gachas espesas, se mezcla con suero de leche y cebolla cruda, y se deja fermentar durante la noche en una vasija de barro. La bebida resultante, ácida y refrescante, se consume al día siguiente como probiótico natural. El koozh ha sido el sustento de agricultores, jornaleros y guerreros tamiles durante milenios, y aparecen referencias en la literatura de la era Sangam. En Chennai, los vendedores de koozh con grandes vasijas de barro son una estampa habitual durante los abrasadores meses de verano.',
      },
      {
        name: 'Thinai Pongal',
        millet: 'Mijo de cola de zorro (Thinai)',
        description:
          'Una versión con mijo del querido plato tamil Pongal, hecho con thinai (mijo de cola de zorro) en lugar de arroz, cocido con moong dal, pimienta negra, comino, hojas de curry y generosas cantidades de ghee. El Thinai Pongal captura la esencia cremosa y reconfortante del Pongal tradicional aportando el sabor terroso y avellanado del mijo de cola de zorro. Es cada vez más popular en los hogares urbanos tamiles preocupados por la salud.',
      },
      {
        name: 'Varagu Upma',
        millet: 'Mijo kodo (Varagu)',
        description:
          'Preparación salada para el desayuno hecha con varagu (mijo kodo), temperada con semillas de mostaza, urad dal, chana dal, hojas de curry y chiles verdes, con verduras como zanahorias, judías verdes y guisantes. La textura suelta y esponjosa del varagu cuando se cocina lo convierte en un sustituto ideal de la sémola en el upma. Este plato es habitual en los distritos cultivadores de mijo de Dindigul y Theni en el oeste de Tamil Nadu.',
      },
      {
        name: 'Samai Payasam',
        millet: 'Mijo menor (Samai)',
        description:
          'Un rico y aromático pudín de postre hecho con samai (mijo menor) cocido lentamente en leche de coco con jaggery, cardamomo y anacardos tostados. El samai payasam tiene una textura delicada y cremosa bastante diferente del payasam de arroz, con una sutil nuez del mijo. Se prepara para los festivales y las ofrendas en templos, especialmente en la región de Kongu Nadu del oeste de Tamil Nadu.',
      },
      {
        name: 'Kambu Dosai',
        millet: 'Mijo perla (Kambu)',
        description:
          'Una crepe oscura y rica en proteínas hecha con masa fermentada de harina de kambu, a veces mezclada con harina de arroz para lograr textura crujiente. El kambu dosai es más grueso y sustancioso que el dosa de arroz, con un sabor profundo y terroso. En los distritos meridionales de Tirunelveli y Thoothukudi, el kambu dosai con chutney de coco y molagai podi (polvo de especias) es un desayuno tradicional que precede al ahora omnipresente dosa de arroz.',
      },
    ],
    festivals: [
      {
        name: 'Thai Pongal',
        description:
          'El gran festival de la cosecha tamil celebrado en enero (el mes tamil de Thai), cuando el grano recién cosechado se cocina ceremonialmente en leche hasta que hierve y rebosa — el momento del «pongu» (desbordamiento) simboliza abundancia y prosperidad.',
        milletConnection:
          'En las regiones cultivadoras de mijo del oeste de Tamil Nadu, las familias preparan «sirudhaniya pongal» (Pongal de mijo) usando thinai, varagu o samai como grano principal. La práctica de ofrecer Pongal de mijo al dios sol se considera especialmente auspiciosa en las comunidades agrícolas que dependen de los cultivos de mijo.',
      },
      {
        name: 'Aadi Perukku',
        description:
          'Un festival del monzón celebrado en el mes tamil de Aadi (julio-agosto) que honra a los ríos, la lluvia y el agua vivificante que sustenta la agricultura. Las comunidades se reúnen cerca de ríos y cuerpos de agua para ofrecer oraciones y compartir comidas festivas.',
        milletConnection:
          'Se preparan platos especiales a base de mijo durante Aadi Perukku como ofrendas a los espíritus del agua. El kambu koozh y el thinai pongal son preparaciones tradicionales de este festival, celebrando la lluvia que alimentará los campos de mijo en los meses venideros.',
      },
    ],
    culturalSignificance:
      'Tamil Nadu posee el legado literario más antiguo del mijo en el mundo. La literatura Sangam (siglo III a. C. – siglo III d. C.) menciona los mijos en cientos de poemas, vinculándolos a paisajes, emociones y estaciones específicas a través del sistema tinai. El tinai «mullai» (bosque/jazmín), asociado con la espera paciente y los paisajes pastorales, menciona los mijos como cultivo principal. Esta integración del mijo en la gramática y la poética de una civilización no tiene paralelo en ninguna otra cultura. La tradición del kambu koozh — gachas fermentadas de mijo perla — se ha transmitido ininterrumpidamente durante más de dos mil años, convirtiéndola en una de las preparaciones culinarias más antiguas del mundo aún en uso cotidiano.',
    traditionalPractices: [
      'La preparación del kambu koozh en vasijas de barro, siguiendo un proceso de fermentación nocturna que desarrolla probióticos naturales — una técnica documentada en textos Sangam hace más de 2 000 años.',
      'El cultivo de múltiples variedades de mijo en parcelas adyacentes, sistema agrícola tradicional que maximiza la biodiversidad y la seguridad alimentaria en las regiones secas del interior de Tamil Nadu.',
      'La práctica del «nel paruppu» — selección manual de semillas de mijo por las mujeres agricultoras, conservando los granos más grandes y sanos para la próxima siembra, garantizando la mejora genética a lo largo de generaciones.',
      'La elaboración de malta de ragi para lactantes como primer alimento sólido, una tradición tamil que la ciencia moderna ha validado por la alta biodisponibilidad del calcio y el hierro en el ragi germinado.',
    ],
    famousQuoteOrSaying:
      '«Kambu kanji kudichaa, kannu theriyu» — Quien bebe gachas de kambu ve con claridad. (Proverbio tamil)',
    imageFile: '/images/sections/regional-tamil-nadu.webp',
  },

  // === ODISHA ===
  {
    slug: 'odisha',
    state: 'Odisha',
    region: 'India Oriental',
    tagline:
      'Tierra tribal donde el mandia (ragi) y el ragi jau (cerveza de mijo) son el alma de la vida comunitaria adivasi.',
    description:
      'Odisha, en la costa oriental de la India, alberga una de las poblaciones tribales (adivasi) más numerosas del país, y son precisamente estas comunidades las guardianas de las tradiciones más antiguas del mijo. En las colinas de Koraput, Malkangiri, Rayagada y Kandhamal, las tribus Kondh, Saora, Bonda y Gadaba cultivan mandia (ragi/eleusina), bajra y pequeños mijos como alimento principal. El mijo no es solo un cultivo para estos pueblos: está en el centro de sus ceremonias religiosas, sus rituales de cosecha y su vida social. La cerveza de mijo (ragi jau o handia) es la bebida sagrada que sella alianzas, celebra nacimientos y honra a los ancestros. Odisha conserva prácticas agrícolas y culinarias del mijo que se han mantenido prácticamente inalteradas durante milenios.',
    primaryMillets: ['finger-millet', 'pearl-millet', 'little-millet'],
    iconicDishes: [
      {
        name: 'Mandia Pej',
        millet: 'Eleusina (Mandia/Ragi)',
        description:
          'Gachas ligeras y nutritivas de harina de mandia (ragi) cocidas en agua hasta obtener una consistencia bebible. El mandia pej es el desayuno y el refrigerio de mediodía por excelencia de las comunidades tribales de las colinas de Odisha. Se consume a temperatura ambiente o frío, a menudo sazonado con sal y un toque de cebolla cruda. Los trabajadores del campo lo llevan en calabazas para hidratarse y alimentarse durante largas jornadas de trabajo.',
      },
      {
        name: 'Ragi Jau (Handia)',
        millet: 'Eleusina (Ragi)',
        description:
          'Cerveza tradicional de mijo fermentado, preparada haciendo germinar el ragi, cocinándolo y dejándolo fermentar con una levadura herbal local llamada «ranu». El resultado es una bebida ligeramente alcohólica, ácida y nutritiva que ocupa un lugar central en la vida social y ceremonial de las comunidades tribales. La handia se ofrece a los invitados como signo de hospitalidad, se bebe en las fiestas de cosecha y se vierte como libación a los ancestros.',
      },
      {
        name: 'Mandia Pitha',
        millet: 'Eleusina (Mandia/Ragi)',
        description:
          'Tortitas o empanadas de harina de mandia, a menudo rellenas de pasta de coco y jaggery endulzado, cocidas al vapor o fritas. El mandia pitha es una preparación festiva que se elabora durante celebraciones especiales y festivales tribales. Su sabor terroso y ligeramente dulce lo convierte en un favorito tanto de las comunidades rurales como de los restaurantes urbanos que redescubren la cocina tribal.',
      },
    ],
    festivals: [
      {
        name: 'Nuakhai',
        description:
          'El festival de la primera comida del nuevo grano, celebrado en el oeste de Odisha para dar gracias por la cosecha. Nuakhai es uno de los festivales agrícolas más importantes de la región, donde la comunidad comparte la primera comida preparada con los cereales recién cosechados.',
        milletConnection:
          'En las regiones tribales, el primer mandia (ragi) de la nueva cosecha se ofrece ceremonialmente a la deidad del pueblo antes de que cualquier persona pueda consumirlo. Las gachas de mandia fresco y la handia preparada con el ragi nuevo son los elementos centrales del banquete de Nuakhai en las comunidades adivasi.',
      },
      {
        name: 'Chaiti Parab',
        description:
          'Festival tribal de primavera celebrado por las comunidades Kondh y Saora para marcar el inicio del nuevo ciclo agrícola. El festival incluye danzas, cantos, sacrificios rituales y la preparación ceremonial de alimentos a base de mijo.',
        milletConnection:
          'Las semillas de mijo para la nueva siembra son bendecidas durante el Chaiti Parab. Los ancianos de la tribu ofrecen las primeras semillas a la diosa de la tierra, pidiendo una buena cosecha. La handia se prepara en grandes cantidades y se comparte entre todos los miembros de la comunidad como símbolo de unidad y esperanza.',
      },
    ],
    culturalSignificance:
      'En las comunidades tribales de Odisha, el mijo trasciende su función alimentaria para convertirse en un elemento sagrado que conecta a los vivos con los ancestros y la tierra. La handia (cerveza de mijo) no es simplemente una bebida: es un sacramento que sella pactos, celebra la vida y honra la muerte. En las ceremonias fúnebres Kondh, se vierte handia sobre la tierra como ofrenda al difunto. En los matrimonios, la pareja comparte un cuenco de handia como símbolo de unión. El mandia (ragi) se considera un regalo de la diosa de la tierra, y su cultivo sigue estando rodeado de rituales de respeto y gratitud. Los sistemas agrícolas tribales de mijo en las colinas de Odisha representan un patrimonio de conocimiento ecológico que la ciencia moderna está empezando a reconocer por su sostenibilidad.',
    traditionalPractices: [
      'El cultivo de mijo en pendientes utilizando el sistema de «podu» (cultivo itinerante), donde los campos se rotan cada pocos años para permitir la regeneración del suelo, técnica ancestral de agricultura sostenible.',
      'La elaboración de la handia siguiendo un proceso de fermentación de tres a cuatro días con levaduras herbales locales (ranu), un saber hacer que se transmite de generación en generación dentro de las familias tribales.',
      'El almacenamiento de semillas de mijo en calabazas selladas con ceniza y hojas aromáticas, método natural de conservación que protege las semillas de insectos y humedad durante meses.',
      'La preparación comunitaria de grandes cantidades de mandia pej para las jornadas de trabajo colectivo en los campos, donde la comunidad entera participa en la siembra o la cosecha.',
    ],
    famousQuoteOrSaying:
      '«Mandia hele jivana, handia hele khusi» — Si hay mandia, hay vida; si hay handia, hay alegría. (Dicho tribal de Odisha)',
    imageFile: '/images/sections/regional-odisha.webp',
  },

  // === NORESTE DE LA INDIA ===
  {
    slug: 'northeast-india',
    state: 'Noreste de la India',
    region: 'India del Noreste',
    tagline:
      'Donde el mijo conecta las culturas del Himalaya oriental con las tradiciones cerveceras ancestrales de los pueblos de las colinas.',
    description:
      'El noreste de la India — que comprende los estados de Nagaland, Meghalaya, Manipur, Mizoram, Tripura, Arunachal Pradesh y Sikkim — alberga una extraordinaria diversidad étnica y cultural, y el mijo desempeña un papel central en la vida de muchas de sus comunidades. A diferencia del resto de la India donde el arroz o el trigo dominan, las comunidades tribales de las colinas del noreste han cultivado mijo de cola de zorro, mijo común y eleusina durante siglos en los sistemas de agricultura de montaña. La cerveza de mijo — conocida como zutho entre los nagas, zu entre los mizos, y chhang en Sikkim — es quizás la tradición cultural más distintiva de la región, compartida con las culturas del Himalaya de Nepal y Bután.',
    primaryMillets: ['finger-millet', 'foxtail-millet', 'proso-millet'],
    iconicDishes: [
      {
        name: 'Zutho',
        millet: 'Eleusina / Mijo común',
        description:
          'Cerveza de mijo tradicional de los nagas, preparada fermentando mijo cocido con una levadura herbal local. El zutho tiene un color blanquecino lechoso, un sabor ligeramente ácido y dulce, y una graduación alcohólica moderada. Es la bebida social por excelencia de las comunidades naga, servida en festivales, ceremonias y como gesto de hospitalidad a los visitantes. Cada tribu naga tiene su propia variante y receta de zutho.',
      },
      {
        name: 'Chhang',
        millet: 'Eleusina',
        description:
          'Cerveza tibia de mijo fermentado del Sikkim y las regiones himalayenses, idéntica al tongba nepalí. El mijo fermentado se coloca en un recipiente de bambú, se vierte agua caliente y se bebe a través de una pajita de bambú filtrante. El chhang es indispensable durante los rigurosos inviernos himalayenses y constituye un elemento central de la hospitalidad de los pueblos Lepcha y Bhutia del Sikkim.',
      },
      {
        name: 'Galho',
        millet: 'Mijo común / Eleusina',
        description:
          'Gachas espesas y nutritivas de mijo preparadas por los pueblos tribales de Nagaland, a menudo enriquecidas con verduras silvestres, hierbas aromáticas y, en ocasiones, carne ahumada. El galho es un plato reconfortante de invierno que proporciona la energía necesaria para las actividades en las frías colinas naga. Su preparación varía según la tribu y la disponibilidad estacional de ingredientes locales.',
      },
    ],
    festivals: [
      {
        name: 'Hornbill Festival (Festival del Cálao)',
        description:
          'El mayor festival cultural de Nagaland, celebrado cada diciembre, reúne a todas las tribus naga para exhibir sus danzas, música, artesanía y gastronomía tradicionales. Es conocido como el «Festival de los Festivales» del noreste de la India.',
        milletConnection:
          'El zutho (cerveza de mijo) fluye abundantemente durante el Hornbill Festival, y los puestos de comida ofrecen diversas preparaciones a base de mijo. El festival es una oportunidad para que las tribus compartan sus variantes únicas de cerveza de mijo y platos tradicionales, celebrando la diversidad culinaria construida en torno a este cereal ancestral.',
      },
      {
        name: 'Moatsu Mong',
        description:
          'Festival de primavera de la tribu Ao de Nagaland que celebra la finalización de la siembra. Durante tres días, la comunidad descansa del trabajo agrícola y se dedica a festejar, cantar y bailar.',
        milletConnection:
          'Tras la siembra del mijo en las laderas, el Moatsu Mong marca el período de espera esperanzada por la cosecha. Se prepara zutho en abundancia y se ofrecen oraciones para que los cultivos de mijo crezcan fuertes y abundantes en las colinas.',
      },
    ],
    culturalSignificance:
      'En las culturas tribales del noreste de la India, la cerveza de mijo ocupa un lugar que va mucho más allá de la simple bebida alcohólica. Es un sacramento social que sella acuerdos, celebra victorias, marca el paso de las estaciones y honra a los difuntos. En las comunidades naga, ofrecer zutho a un visitante es un acto sagrado de hospitalidad, y rechazarlo se considera una grave falta de respeto. Los sistemas agrícolas de mijo en las colinas del noreste — el jhum (cultivo itinerante) — representan una de las formas más antiguas de agricultura tropical de montaña, y el mijo es el cultivo que mejor se adapta a estas condiciones de pendientes pronunciadas y suelos delgados.',
    traditionalPractices: [
      'El cultivo de mijo en el sistema de jhum (cultivo itinerante), donde parcelas de bosque se desbrozan, se cultivan durante dos o tres años con mijo y otros cultivos, y luego se dejan en barbecho para regenerarse durante una década o más.',
      'La elaboración de cerveza de mijo con levaduras herbales locales, proceso que varía de tribu en tribu y que constituye un conocimiento botánico y microbiológico sofisticado transmitido oralmente.',
      'El almacenamiento de mijo en graneros elevados de bambú con techos de paja inclinada, diseñados para proteger el grano de la abundante humedad monzónica de la región.',
      'La práctica de compartir cerveza de mijo desde un mismo recipiente de bambú utilizando pajitas individuales, ritual social que simboliza la unidad y la igualdad dentro de la comunidad.',
    ],
    famousQuoteOrSaying:
      '«Donde hay mijo, hay zutho; donde hay zutho, hay comunidad.» (Dicho naga)',
    imageFile: '/images/sections/regional-northeast-india.webp',
  },

  // === UTTARAKHAND ===
  {
    slug: 'uttarakhand',
    state: 'Uttarakhand',
    region: 'India del Norte (Himalaya)',
    tagline:
      'En las laderas del Himalaya, el mandua (ragi) y el jhangora (mijo de corral) son los cereales sagrados de los pueblos de montaña.',
    description:
      'Uttarakhand, el estado himaláyico del norte de la India, tiene una relación especial con el mijo que se remonta a siglos. En las regiones montañosas de Garhwal y Kumaon, donde las pendientes pronunciadas y los suelos delgados hacen imposible el cultivo de arroz irrigado, el mandua (ragi/eleusina) y el jhangora (mijo de corral/barnyard millet) han sido durante mucho tiempo los cereales de supervivencia y sustento. Estos mijos crecen en las laderas a altitudes de 1 000 a 2 500 metros, adaptados al clima frío y a las lluvias monzónicas de la región. Para los hispanohablantes, Uttarakhand podría compararse con las regiones montañosas del norte de España donde los cereales ancestrales como la escanda asturiana resistieron cuando otros cultivos fracasaban — el mandua es la escanda del Himalaya.',
    primaryMillets: ['finger-millet', 'barnyard-millet'],
    iconicDishes: [
      {
        name: 'Mandua ki Roti',
        millet: 'Eleusina (Mandua)',
        description:
          'Pan plano de harina de mandua (ragi), oscuro y denso, que es el alimento cotidiano en las aldeas montañesas de Uttarakhand. Se cocina sobre una plancha de hierro y se sirve con ghee, dal (lentejas) y verduras de temporada. Su sabor terroso y su textura densa proporcionan la energía necesaria para la vida en las alturas himaláyicas. En los meses de invierno, cuando la nieve cubre las montañas, el mandua ki roti es el sustento principal de las familias.',
      },
      {
        name: 'Jhangora ki Kheer',
        millet: 'Mijo de corral (Jhangora)',
        description:
          'Pudín dulce de jhangora (mijo de corral) cocido lentamente en leche con azúcar, cardamomo y frutos secos. El jhangora ki kheer tiene una textura cremosa y delicada que lo diferencia del kheer de arroz. Es una preparación festiva que se elabora durante celebraciones y ofrendas en los templos de la región de Kumaon. El jhangora, con sus granos pequeños y blanquecinos, se cocina hasta absorber toda la leche, creando un postre reconfortante y nutritivo.',
      },
      {
        name: 'Mandua ka Halwa',
        millet: 'Eleusina (Mandua)',
        description:
          'Halwa (postre denso y aromático) preparado tostando harina de mandua en ghee hasta que oscurece y desprende un intenso aroma a nuez, luego endulzado con jaggery o azúcar y perfumado con cardamomo. El mandua ka halwa es un dulce invernal que se ofrece en los templos y se comparte en las reuniones familiares. Es particularmente apreciado por su capacidad de generar calor corporal durante los fríos meses himaláyicos.',
      },
    ],
    festivals: [
      {
        name: 'Harela',
        description:
          'Festival de la siembra celebrado en los meses de Shravan (julio-agosto) en todo Uttarakhand. Harela marca el inicio de la temporada de siembra y celebra el verdor de la tierra tras la llegada de las lluvias monzónicas. Las familias siembran semillas de cereales en pequeñas macetas como símbolo de fertilidad y prosperidad.',
        milletConnection:
          'Entre las semillas sembradas ceremonialmente durante Harela se encuentran invariablemente el mandua y el jhangora. El crecimiento de estas plantas en miniatura se interpreta como augurio de la cosecha venidera. Platos a base de mandua se preparan como ofrendas, y la comunidad reza por la abundancia de los cultivos de mijo en las laderas.',
      },
      {
        name: 'Ghee Sankranti',
        description:
          'Celebración del solsticio que marca la transición de la estación lluviosa a la cosecha. Las familias preparan platos especiales con ghee fresco y los nuevos granos de la cosecha.',
        milletConnection:
          'El mandua y el jhangora recién cosechados se utilizan para preparar rotis y kheer especiales durante Ghee Sankranti. Es tradición que la primera comida con los granos nuevos se comparta con los vecinos y se ofrezca a los templos locales como agradecimiento por la cosecha.',
      },
    ],
    culturalSignificance:
      'En las montañas de Uttarakhand, el mandua y el jhangora no son solo alimentos — son símbolos de la resiliencia de los pueblos de montaña. En una región donde la agricultura es una lucha constante contra la pendiente, el frío y los suelos pobres, estos mijos representan la capacidad de adaptación humana. La migración masiva de hombres jóvenes hacia las ciudades de las llanuras ha dejado a las mujeres como principales cultivadoras de mijo en las laderas, y su conocimiento agrícola ancestral es el que mantiene vivas estas tradiciones. El movimiento Chipko de los años 1970 — el primer movimiento ecologista importante de la India, donde las mujeres de Uttarakhand abrazaron los árboles para impedir la tala — tiene profundas conexiones con la cultura agrícola del mijo, ya que los bosques protegen las laderas donde crece el mandua.',
    traditionalPractices: [
      'El cultivo en terrazas (siri) del mandua y jhangora en las laderas himaláyicas, un sistema agrícola milenario que previene la erosión y maximiza el uso del agua de lluvia.',
      'El secado del mandua al sol en los techos de las casas de piedra de las aldeas, técnica que aprovecha la intensa radiación solar de la altitud para un secado rápido y natural.',
      'La preparación de «chutkani» — harina de mandua tostada con ghee y sal que se lleva como alimento de viaje por los senderos de montaña, equivalente himaláyico del beso etíope.',
      'El intercambio de semillas de mijo entre aldeas durante las ferias locales, práctica que mantiene la diversidad genética y adapta las variedades a las condiciones microclimáticas de cada valle.',
    ],
    famousQuoteOrSaying:
      '«Mandua khaye, pahad chale» — Quien come mandua, conquista las montañas. (Dicho de Kumaon)',
    imageFile: '/images/sections/regional-uttarakhand.webp',
  },

  // === GUJARAT ===
  {
    slug: 'gujarat',
    state: 'Gujarat',
    region: 'India Occidental',
    tagline:
      'El estado emprendedor de la India, donde el bajra y el jowar alimentan tanto el campo como la innovación alimentaria.',
    description:
      'Gujarat, en la costa occidental de la India, es uno de los principales productores de bajra (mijo perla) y jowar (sorgo) del país. Las regiones semiáridas del norte de Gujarat — Kutch, Banaskantha y Patan — y la península de Saurashtra son el corazón del cultivo de bajra, mientras que el sur del estado produce sorgo en cantidades significativas. Gujarat es también cuna de una vibrante cultura vegetariana, y los mijos se integran naturalmente en su cocina como fuentes de energía y nutrición sin necesidad de carne. El estado es además un líder en innovación alimentaria: las empresas gujaratíes fueron de las primeras en la India en comercializar productos procesados a base de mijo — galletas, snacks y harinas preparadas — contribuyendo a la modernización del consumo de estos cereales ancestrales.',
    primaryMillets: ['pearl-millet', 'sorghum'],
    iconicDishes: [
      {
        name: 'Bajra no Rotlo',
        millet: 'Mijo perla (Bajra)',
        description:
          'El pan plano de bajra gujaratí, grueso y redondo, cocinado sobre una plancha de barro o hierro. El rotlo se sirve caliente con una generosa cantidad de ghee, acompañado de ringna no olo (puré de berenjena ahumada), cebolla cruda y un vaso de suero de leche (chaas). En el norte de Gujarat y en Saurashtra, el bajra no rotlo con ringna no olo es tan emblemático como la paella lo es para Valencia — un plato que define la identidad regional.',
      },
      {
        name: 'Bajra na Dhebra',
        millet: 'Mijo perla (Bajra)',
        description:
          'Tortitas especiadas de harina de bajra mezclada con fenogreco fresco (methi), chile verde, jengibre y especias, cocinadas en una plancha con aceite. Los dhebra son un desayuno o merienda habitual en Gujarat, perfectos para acompañar con encurtido de mango (achaar) y yogur. Son también una excelente comida para llevar, ya que se conservan bien a temperatura ambiente durante horas.',
      },
      {
        name: 'Bajra Khichdi',
        millet: 'Mijo perla (Bajra)',
        description:
          'Una versión gujaratí del khichdi donde el bajra sustituye al arroz, cocido con moong dal, ghee, comino y asafétida. El bajra khichdi gujaratí suele ser más seco que la versión rajasthaní, con los granos de bajra sueltos y esponjosos. Se sirve con kadhi (salsa agria de yogur y harina de garbanzo) como acompañamiento clásico. Es el plato reconfortante por excelencia del invierno gujaratí.',
      },
    ],
    festivals: [
      {
        name: 'Uttarayan (Festival de las Cometas)',
        description:
          'El 14 de enero, Gujarat celebra Uttarayan con uno de los festivales de cometas más espectaculares del mundo. El cielo se llena de miles de cometas coloridas mientras las familias se reúnen en las azoteas para festejar con música, baile y comida.',
        milletConnection:
          'El bajra no rotlo con undhiyu (guiso de verduras mixtas) y til-chikki (crujiente de sésamo) son los platos imprescindibles del festín de Uttarayan. El bajra, como cultivo de invierno que se cosecha poco antes del festival, es el grano de la celebración por excelencia. Las familias gujaratíes consideran que compartir bajra rotlo durante Uttarayan trae buena fortuna para el año entrante.',
      },
      {
        name: 'Navratri',
        description:
          'El festival de nueve noches dedicado a la diosa Durga, celebrado con danzas garba y dandiya raas en toda Gujarat. Es el festival más grande y vibrante del estado.',
        milletConnection:
          'Durante Navratri, muchos devotos observan restricciones alimentarias, y los mijos — particularmente el bajra y la sémola de mijo — son alimentos permitidos durante el ayuno. Las recetas de «farali» (alimentos de ayuno) incluyen bajra khichdi, rotis de mijo y dulces a base de harina de mijo con jaggery.',
      },
    ],
    culturalSignificance:
      'En Gujarat, el bajra encarna el espíritu de resistencia y adaptabilidad que define al estado. La región de Kutch, una de las más áridas de la India, produce bajra de excelente calidad gracias a siglos de selección de variedades adaptadas a la sequía extrema. El dicho gujaratí «Bajra nu rotlo, ghee no locho» (pan de bajra con abundante ghee) evoca una vida simple pero satisfactoria, un ideal que resuena profundamente en la cultura gujaratí. Gujarat es también pionero en la transformación moderna de los mijos: empresas de Ahmedabad y Rajkot lideran el mercado indio de productos de mijo procesados, llevando estos cereales ancestrales a los supermercados urbanos del siglo XXI.',
    traditionalPractices: [
      'El cultivo de bajra en los suelos salinos y arenosos de Kutch, donde las variedades locales toleran condiciones que ningún otro cereal soportaría, demostrando la extraordinaria adaptabilidad del mijo perla.',
      'La preparación del rotlo en hornos de barro tradicionales (chulha), donde el contacto directo con la superficie de arcilla caliente produce una textura crujiente exterior única.',
      'El almacenamiento de bajra en «kothar» — graneros de adobe elevados sobre plataformas, con ventilación natural a través de aberturas estratégicamente situadas para regular la temperatura y la humedad.',
      'La costumbre de ofrecer bajra rotlo con ghee como primera comida a los recién casados, simbolizando el deseo de una vida próspera y saludable para la nueva pareja.',
    ],
    famousQuoteOrSaying:
      '«Bajra nu rotlo, ghee no locho» — Pan de bajra con abundante ghee: la buena vida. (Dicho gujaratí)',
    imageFile: '/images/sections/regional-gujarat.webp',
  },
];

export function getRegionalTraditionBySlug(
  slug: string
): RegionalTradition | undefined {
  return regionalTraditions.find((r) => r.slug === slug);
}
