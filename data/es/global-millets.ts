import type { GlobalMilletRegion } from '@/lib/types';

export const globalMilletRegions: GlobalMilletRegion[] = [
  // ─── 1. ETIOPÍA Y EL CUERNO DE ÁFRICA ──────────────────────────────
  {
    slug: 'ethiopia-horn-of-africa',
    region: 'Etiopía y el Cuerno de África',
    continent: 'África',
    tagline: 'Cuna del teff — el cereal más pequeño y resiliente del mundo',
    description:
      'El Cuerno de África es la cuna evolutiva del teff (Eragrostis tef), un grano tan diminuto que aproximadamente 3 000 semillas pesan apenas un gramo. Desde hace más de tres milenios, los agricultores de las tierras altas etíopes cultivan el teff a altitudes comprendidas entre 1 700 y 2 400 metros, produciendo la injera, esa torta esponjosa y ácida que constituye la piedra angular de cada comida etíope. La eleusina (dagusa) prospera en las tierras bajas semiáridas de la región y sigue siendo un cultivo esencial para la seguridad alimentaria de las comunidades pastorales en Eritrea, Somalia y Sudán. En 2006, Etiopía adoptó un pacto sobre biodiversidad restringiendo la exportación de semillas de teff para proteger su patrimonio genético — una prohibición parcialmente levantada en 2015 para autorizar un cultivo comercial limitado en el extranjero. Hoy, el Cuerno de África produce más del 90 % del teff mundial, y la injera sigue siendo un símbolo cultural fuerte de comunidad, donde los comensales comparten un mismo plato.',
    countries: ['Etiopía', 'Eritrea', 'Somalia', 'Sudán'],
    primaryMillets: ['Teff (Eragrostis tef)', 'Eleusina (Eleusine coracana)'],
    iconicFoods: [
      {
        name: 'Injera',
        country: 'Etiopía',
        millet: 'Teff',
        description:
          'Gran torta esponjosa a base de masa madre natural, con un sabor ácido característico producido por una fermentación con levaduras silvestres durante dos a tres días. La injera sirve a la vez de plato y de cubiertos: los comensales arrancan trozos para envolver los guisos picantes (wot). La injera de teff puro es la más apreciada, aunque las mezclas con trigo o sorgo son comunes en el medio rural.',
      },
      {
        name: 'Tella',
        country: 'Etiopía',
        millet: 'Teff / Eleusina',
        description:
          'Cerveza artesanal tradicional elaborada a partir de teff o eleusina fermentados, aromatizada con hojas y tallos de gesho (Rhamnus prinoides). La tella ocupa un lugar central en las reuniones sociales y las fiestas religiosas del calendario ortodoxo etíope. El saber hacer cervecero se transmite de madre a hija desde generaciones.',
      },
      {
        name: 'Genfo',
        country: 'Etiopía',
        millet: 'Teff / Eleusina',
        description:
          'Gachas espesas con consistencia de pasta, tradicionalmente ofrecidas a las madres recientes por su alto contenido en hierro y calcio. El genfo se moldea en forma de volcán, con un pozo central relleno de mantequilla especiada (niter kibbeh) y berbéré. Este plato nutritivo simboliza el cuidado y la fuerza en la cultura etíope, y su preparación durante un nacimiento es un ritual familiar ineludible.',
      },
      {
        name: 'Beso',
        country: 'Etiopía',
        millet: 'Teff',
        description:
          'Harina de teff tostada mezclada con mantequilla especiada, constituyendo un alimento de viaje de alto valor energético históricamente transportado por los guerreros y comerciantes itinerantes etíopes. El beso sigue siendo un tentempié portátil apreciado en las regiones montañosas, ya que se conserva mucho tiempo sin refrigeración y proporciona un aporte calórico concentrado en pequeñas cantidades.',
      },
      {
        name: 'Asida',
        country: 'Sudán',
        millet: 'Eleusina',
        description:
          'Gachas lisas y densas preparadas a partir de harina de eleusina, cocidas hasta obtener una consistencia firme, y luego servidas acompañadas de guisos o leche. La asida es un alimento básico en los hogares sudaneses, particularmente en las regiones occidentales de Darfur y Kordofán. Su textura compacta la convierte en un acompañamiento ideal de las salsas condimentadas a base de carne o verduras.',
      },
    ],
    historicalHighlights: [
      {
        title: 'Primeros cultivos de teff',
        period: 'hacia 1000-800 a. C.',
        description:
          'Las pruebas arqueológicas provenientes de la región aksumita sugieren que la domesticación del teff comenzó hace entre 4 000 y 3 000 años en las tierras altas etíopes. Semillas de teff han sido identificadas en sitios preaksumitas, haciendo de este cereal uno de los granos cultivados más antiguos propios de una sola región en el mundo.',
      },
      {
        title: 'Comercio cerealero del Imperio aksumita',
        period: 'hacia 100-940 d. C.',
        description:
          'El Imperio aksumita, una de las grandes civilizaciones del mundo antiguo, dependía en gran medida de la agricultura del teff y la eleusina. Los excedentes cerealeros alimentaban redes comerciales que se extendían hasta Roma, Persia y la India a través del puerto de Adulis en el mar Rojo, haciendo del teff una moneda de cambio en el comercio internacional de la Antigüedad.',
      },
      {
        title: 'Pacto etíope de protección de la biodiversidad',
        period: '2006',
        description:
          'Ante el temor de que empresas extranjeras patentaran variedades de teff, el gobierno etíope promulgó una prohibición de exportar semillas y granos de teff destinados al cultivo. Fue una de las primeras protecciones soberanas de la biodiversidad sobre un cultivo alimentario básico, suscitando un debate internacional sobre los derechos de los países de origen.',
      },
    ],
    culturalSignificance:
      'En la cultura etíope, la injera trasciende ampliamente la simple función nutritiva — el gesto del «gursha» (alimentar a alguien con la propia mano desde el plato de injera compartido) es una expresión profunda de amor, respeto y amistad. El cultivo del teff sigue ritmos estacionales ancestrales ligados a las lluvias del kiremt, y la fiesta de la cosecha de Enkutatash (Año Nuevo etíope) celebra la abundancia agrícola. La cerveza de eleusina (tella) forma parte integral de las celebraciones religiosas del calendario ortodoxo etíope, especialmente durante las festividades de Timkat (Epifanía) y Meskel (Descubrimiento de la Vera Cruz). El proverbio «kolo yalew, belo yalew» — «quien posee grano tiene voz» — ilustra el vínculo profundo entre el cultivo del mijo y el estatus social en la sociedad etíope.',
    modernStatus:
      'Etiopía produce aproximadamente 5 millones de toneladas de teff al año, lo que lo convierte en el primer cereal del país por superficie cultivada (alrededor de 3 millones de hectáreas). El teff ha adquirido un estatus de superalimento mundial desde los años 2010, apreciado por su perfil completo en aminoácidos, su alto contenido en hierro y su carácter naturalmente sin gluten. Sin embargo, esta demanda internacional ha generado presiones sobre los precios internos: el precio del teff se ha casi triplicado desde 2005, haciendo la injera de teff puro cada vez más inaccesible para los etíopes de bajos ingresos. El Instituto Etíope de Investigación Agrícola (EIAR) prosigue el desarrollo de variedades de teff de alto rendimiento, mientras que la eleusina sigue siendo esencial para la seguridad alimentaria en la región de Gash-Barka en Eritrea y en las zonas de agricultura de secano de Sudán.',
    keyFact:
      'El teff contiene dos a tres veces más hierro que el trigo o el arroz y presenta un perfil completo en aminoácidos, sin embargo la biodiversidad monoorigenal de Etiopía significa que un solo país produce más del 90 % de la oferta mundial.',
    imageFile: '/images/sections/global-ethiopia-horn-of-africa.webp',
  },

  // ─── 2. ÁFRICA OCCIDENTAL Y SAHEL ─────────────────────────────────
  {
    slug: 'west-africa-sahel',
    region: 'África Occidental y Sahel',
    continent: 'África',
    tagline: 'Donde el fonio es la «semilla del universo» y el mijo alimenta el Sahel',
    description:
      'África Occidental es una de las grandes civilizaciones cerealeras del mundo, donde el mijo perla (Pennisetum glaucum) y el fonio (Digitaria exilis) alimentan a las poblaciones desde hace milenios a través de las extensiones semiáridas del Sahel. El mijo — domesticado en el actual Malí y Níger hace aproximadamente 4 500 años — sigue siendo el cereal más importante para más de 90 millones de personas en la región, prosperando en suelos arenosos pobres con apenas 200 mm de precipitación anual. El fonio, a veces apodado el «cultivo del campesino perezoso» porque madura en solo seis a ocho semanas en suelos casi estériles, ocupa en realidad una posición cultural mucho más profunda: los dogones de Malí lo consideran la semilla primordial de la que el universo fue creado. Desde las bebidas fermentadas de mijo perla de las comunidades hausa de Nigeria hasta el thiéré senegalés, los mijos están tejidos en cada estrato de la cultura alimentaria del África occidental.',
    countries: ['Nigeria', 'Níger', 'Malí', 'Burkina Faso', 'Senegal', 'Ghana'],
    primaryMillets: ['Mijo perla (Pennisetum glaucum)', 'Sorgo (Sorghum bicolor)', 'Fonio (Digitaria exilis)'],
    iconicFoods: [
      {
        name: 'Thiéré (Cuscús de mijo)',
        country: 'Senegal',
        millet: 'Fonio / Mijo',
        description:
          'Cuscús de mijo enrollado a mano, cocido al vapor y servido con lakh (leche fermentada azucarada) o guisos de verduras con salsa de cacahuete. El thiéré es el plato cerealero senegalés tradicional anterior al thiéboudienne a base de arroz, hoy dominante. Sigue en el centro de las comidas ceremoniales wolof y sérère, especialmente durante bautizos y funerales, donde su preparación reúne a las mujeres de la comunidad.',
      },
      {
        name: 'Ogi / Kunu',
        country: 'Nigeria',
        millet: 'Mijo / Fonio',
        description:
          'El ogi es unas gachas de mijo fermentado, mientras que el kunu es su versión líquida, especiada con jengibre, clavo y boniato. Ambos son alimentos básicos del desayuno y del destete en toda Nigeria. El kunu zaki (kunu dulce) es una bebida apreciada para la ruptura del ayuno (iftar) durante el Ramadán en el norte musulmán del país.',
      },
      {
        name: 'Fura da Nono',
        country: 'Nigeria',
        millet: 'Mijo perla',
        description:
          'Bolitas de mijo especiadas (fura) desmenuzadas en leche de vaca fermentada (nono). Comida callejera imprescindible del norte de Nigeria y Níger, el fura da nono es especialmente apreciado por las comunidades hausa y fulani. El mijo se pila con jengibre, clavo y pimienta antes de ser moldeado en bolas y brevemente hervido, creando un maridaje notable entre la dulzura de la leche y el calor de las especias.',
      },
      {
        name: 'Tô',
        country: 'Malí / Burkina Faso',
        millet: 'Sorgo / Mijo',
        description:
          'Pasta espesa de mijo o sorgo servida como acompañamiento de salsas variadas — salsa de okra, salsa de cacahuete o salsa de hojas. El tô es el equivalente saheliano del fufu y constituye el alimento diario en las zonas rurales de Malí y Burkina Faso. Su preparación requiere un saber hacer preciso para obtener la consistencia ideal, ni demasiado líquida ni demasiado compacta, permitiendo a los comensales tomar bocados con la mano.',
      },
      {
        name: 'Dolo',
        country: 'Burkina Faso / Malí',
        millet: 'Sorgo',
        description:
          'Cerveza tradicional de sorgo, bebida emblemática de Burkina Faso y Malí, elaborada según métodos ancestrales transmitidos por las mujeres cerveceras (las «dolotières»). El dolo se fermenta durante varios días y se sirve en grandes calabazas durante ceremonias, mercados y fiestas aldeanas. Las dolotières gozan de un estatus social elevado y su comercio constituye a menudo la principal fuente de ingresos femeninos en las zonas rurales.',
      },
    ],
    historicalHighlights: [
      {
        title: 'Domesticación del mijo perla en el Sahel',
        period: 'hacia 2500 a. C.',
        description:
          'Los sitios arqueológicos del valle de Tilemsi en el actual Malí y la tradición Tichitt en Mauritania proporcionan pruebas de la domesticación del mijo datadas de hace aproximadamente 4 500 años. Este descubrimiento hace del Sahel uno de los centros independientes de origen de los cultivos en el mundo, al mismo nivel que el Creciente Fértil para el trigo y China para el arroz.',
      },
      {
        title: 'Cosmogonía dogón y el fonio',
        period: 'Era precolonial',
        description:
          'En la mitología dogón, documentada por los etnógrafos Marcel Griaule y Germaine Dieterlen en los años 1940-50, el fonio (po tolo) es la «semilla del universo» — el grano más pequeño que representa el átomo fundamental de la creación. La palabra dogón «po» designa a la vez el fonio y la estrella Digitaria (Sirio B), revelando un vínculo cosmológico fascinante entre agricultura y astronomía.',
      },
      {
        title: 'Renacimiento del fonio',
        period: 'Años 2000 hasta hoy',
        description:
          'Impulsada por el chef senegalo-americano Pierre Thiam y apoyada por organismos como el CIRAD y el ICRISAT, una dinámica concertada de relanzamiento del fonio como cultivo comercial lo ha propulsado en los mercados mundiales. Ahora exportado hacia Europa y Norteamérica como superalimento sin gluten, el fonio se beneficia de un reconocimiento creciente que favorece a los pequeños productores sahelianos.',
      },
    ],
    culturalSignificance:
      'En África Occidental, los mijos son inseparables de la identidad y el ritual. Entre los dogones de Malí, el fonio se considera demasiado sagrado para ser vendido en los mercados tradicionales — es el grano de las ceremonias, la adivinación y las ofrendas a los ancestros. Las fiestas de la cosecha del mijo, como el festival Bianou en Agadez (Níger), mezclan tradiciones islámicas y preislámicas con festines comunitarios de platos a base de mijo. En la cultura hausa, la capacidad de preparar un fura (bolitas de mijo) perfecto es la marca de una cocinera consumada, y el fura da nono se ofrece a los invitados como signo de hospitalidad. Entre los sérères de Senegal, el cultivo del mijo sigue un calendario sagrado, y los pangool (espíritus ancestrales) son invocados para bendecir los campos. El proverbio bambara «yaa foni, yaa foni» — «fonio, fonio, alimenta donde nada más crece» — resume el papel salvador de este grano en los años de sequía.',
    modernStatus:
      'África Occidental produce aproximadamente 15 millones de toneladas de mijo perla al año, siendo Nigeria, Níger y Malí los tres primeros productores. A pesar de estos volúmenes, la región enfrenta la «paradoja del mijo»: la urbanización y la evolución de las preferencias alimentarias orientan el consumo hacia el arroz y el trigo importados, aunque el mijo sigue siendo nutricionalmente superior y ecológicamente adaptado a la pluviometría cada vez más caprichosa del Sahel. La producción de fonio conoce un renacimiento notable — las exportaciones mundiales de fonio se han multiplicado por diez aproximadamente desde 2010, impulsadas por la demanda de consumidores preocupados por su salud en Europa y Norteamérica. El Consorcio Africano de Cultivos Huérfanos está secuenciando el genoma del fonio para desarrollar variedades mejoradas, mientras que las variedades biofortificadas de mijo del ICRISAT combaten las carencias de micronutrientes en la región.',
    keyFact:
      'El fonio madura en solo seis a ocho semanas y crece en suelos arenosos y pobres en nutrientes con un mínimo de agua, lo que lo convierte en uno de los cultivos cerealeros más rápidos y más resistentes al cambio climático de la Tierra.',
    imageFile: '/images/sections/global-west-africa-sahel.webp',
  },

  // ─── 3. INDIA Y ASIA DEL SUR ──────────────────────────────────────
  {
    slug: 'india-south-asia',
    region: 'India y Asia del Sur',
    continent: 'Asia',
    tagline: 'Primer productor mundial de mijo — un patrimonio cerealero de 5 000 años',
    description:
      'India es el mayor productor de mijos del mundo, aportando aproximadamente el 40 % de la producción mundial con más de 12 millones de toneladas al año. Asia del Sur en su conjunto posee la diversidad más rica en especies de mijos cultivados: mijo perla (bajra), sorgo (jowar), eleusina (ragi), mijo menor (kutki), mijo de cola de zorro (kangni), mijo de corral (sanwa) y kodo. La eleusina, domesticada en el subcontinente hace aproximadamente 5 000 años, sigue siendo el cereal tradicional de Karnataka y Tamil Nadu, donde el ragi mudde (bola de eleusina) y el ragi dosa forman parte del día a día. El gobierno indio promovió la declaración del 2023 como «Año Internacional de los Mijos» por las Naciones Unidas, impulsando una campaña mundial de sensibilización. En Nepal, el mijo es la base del tongba, una cerveza fermentada caliente de la región himalaya, mientras que en Sri Lanka, el kurakkan (eleusina) ocupa un lugar ancestral en la alimentación aldeana.',
    countries: ['India', 'Nepal', 'Sri Lanka', 'Myanmar'],
    primaryMillets: ['Mijo perla (Bajra)', 'Sorgo (Jowar)', 'Eleusina (Ragi)', 'Mijo menor (Kutki)', 'Mijo de cola de zorro (Kangni)'],
    iconicFoods: [
      {
        name: 'Ragi Mudde',
        country: 'India',
        millet: 'Eleusina (Ragi)',
        description:
          'Bola de harina de eleusina cocida, densa y ligeramente elástica, servida como acompañamiento de caldos especiados de lentejas y salsas picantes en el sur de la India. El ragi mudde se amasa a mano hasta obtener una consistencia suave y se consume en trozos mojados en la salsa. Rico en calcio y hierro, es un alimento básico apreciado por las poblaciones rurales y urbanas del sur de la India.',
      },
      {
        name: 'Bajra Roti',
        country: 'India',
        millet: 'Mijo perla (Bajra)',
        description:
          'Pan plano sin levadura a base de harina de mijo perla, tradicional del noroeste de la India. El bajra roti se cocina generalmente en una plancha caliente y se sirve untado con mantequilla clarificada, acompañado de verduras especiadas o lentejas. Su sabor ligeramente dulce y su textura rústica lo convierten en un compañero ideal de las comidas de invierno, estación durante la cual el mijo perla tiene reputación de calentar el cuerpo.',
      },
      {
        name: 'Ragi Porridge (Kanji)',
        country: 'India / Sri Lanka',
        millet: 'Eleusina (Ragi)',
        description:
          'Gachas fluidas de harina de eleusina, frecuentemente dadas a los lactantes como primer alimento sólido y a las personas convalecientes. En Sri Lanka, el kurakkan porridge se enriquece con leche de coco y jaggery. Su alta digestibilidad y riqueza en calcio lo convierten en un alimento de destete recomendado por los nutricionistas, perpetuando una tradición alimentaria milenaria adaptada a las necesidades de los más frágiles.',
      },
      {
        name: 'Tongba',
        country: 'Nepal',
        millet: 'Eleusina',
        description:
          'Bebida alcohólica tibia preparada a partir de eleusina fermentada, tradicional de los pueblos Limbu y Rai del este de Nepal y del Sikkim indio. El mijo fermentado se coloca en un recipiente de bambú, se vierte agua caliente, y se bebe a través de una pajita de bambú filtrante. El tongba calienta durante los rigurosos inviernos del Himalaya y constituye un elemento central de la hospitalidad de las comunidades montañesas.',
      },
      {
        name: 'Jowar Bhakri',
        country: 'India',
        millet: 'Sorgo (Jowar)',
        description:
          'Pan plano grueso y sin levadura, elaborado a mano a partir de harina de sorgo, alimento diario en el centro de la India. El jowar bhakri se moldea entre las palmas y se cocina directamente sobre la llama, desarrollando una corteza crujiente y un interior suave. Acompañado de condimento picante y yogur, encarna la cocina rústica y nutritiva de la meseta del Decán.',
      },
    ],
    historicalHighlights: [
      {
        title: 'Domesticación de la eleusina en el subcontinente',
        period: 'hacia 3000 a. C.',
        description:
          'Pruebas arqueobotánicas provenientes de sitios en Karnataka (Hallur, Tekkalakota) atestiguan el cultivo de la eleusina en el sur de la India hace aproximadamente 5 000 años. Este mijo se convirtió en la base alimentaria de las civilizaciones dravídicas, y su cultivo se extendió progresivamente hacia África Oriental a través de las redes comerciales marítimas del océano Índico.',
      },
      {
        title: 'Los mijos en los textos ayurvédicos',
        period: 'hacia 600 a. C. – 200 d. C.',
        description:
          'Los textos fundadores del Ayurveda, en particular la Charaka Samhita y la Sushruta Samhita, clasifican los mijos según el sistema de los tres doshas. El ragi se recomienda por su capacidad de fortalecer los huesos, mientras que el bajra se prescribe por su naturaleza «calentadora» beneficiosa en estación fría. Estas prescripciones dietéticas continúan influyendo en los hábitos alimentarios en Asia del Sur.',
      },
      {
        title: 'Año Internacional de los Mijos (ONU)',
        period: '2023',
        description:
          'A iniciativa de India y con el apoyo de 72 países, las Naciones Unidas proclamaron 2023 «Año Internacional de los Mijos». Esta campaña puso de relieve el potencial de los mijos para la seguridad alimentaria mundial, la nutrición y la agricultura sostenible, al tiempo que relanzó el interés de los consumidores urbanos indios por estos cereales ancestrales largamente abandonados en favor del arroz y el trigo.',
      },
    ],
    culturalSignificance:
      'En India, los mijos son mucho más que cereales — encarnan un vínculo vivo entre las prácticas agrícolas ancestrales y la espiritualidad. En los templos de Karnataka, el ragi mudde se ofrece como prasad (ofrenda sagrada). En Rajastán, los cantos folclóricos celebran el bajra como el «grano de los valientes» que alimenta a los guerreros del desierto del Thar. Los festivales de cosecha como Pongal en Tamil Nadu y Sankranti en Andhra Pradesh incluyen tradicionalmente preparaciones a base de mijos. En Nepal, el tongba no se limita a una bebida: es un ritual social que sella las amistades y marca las grandes etapas de la vida en las comunidades himalayenses. La tradición del «anna prashana» (primera comida sólida del lactante), a menudo a base de ragi, conecta a cada nueva generación con un patrimonio nutricional milenario. El proverbio tamil «ragi irundhaal, roga illai» — «donde hay ragi, no hay enfermedad» — resume la veneración por este cereal.',
    modernStatus:
      'India produce aproximadamente 12 millones de toneladas de mijos al año y alberga el mayor programa gubernamental de promoción de los mijos del mundo, rebautizados «Shree Anna» (cereales nobles) por el Primer Ministro en 2023. Rajastán, Maharashtra, Karnataka y Tamil Nadu son los principales estados productores. Las startups alimentarias indias ofrecen ahora pastas, galletas y cereales de desayuno a base de mijos, dirigidos a una clase urbana preocupada por su salud. Sin embargo, a pesar de este renacimiento comercial, los mijos representan aún solo el 6-7 % de la producción cerealera india, frente a más del 40 % en los años 1960, reemplazados por el arroz y el trigo de la Revolución Verde. El ICRISAT, con sede en Hyderabad, prosigue programas de selección para mejorar los rendimientos y la resistencia a la sequía de las variedades locales.',
    keyFact:
      'India es el primer productor mundial de mijos e inició la proclamación por la ONU del 2023 como «Año Internacional de los Mijos», relanzando el interés mundial por estos cereales resilientes frente al cambio climático.',
    imageFile: '/images/sections/global-india-south-asia.webp',
  },

  // ─── 4. CHINA Y ASIA ORIENTAL ─────────────────────────────────────
  {
    slug: 'china-east-asia',
    region: 'China y Asia Oriental',
    continent: 'Asia',
    tagline: 'Donde la agricultura del mijo comenzó hace más de 10 000 años',
    description:
      'China es la cuna de la agricultura del mijo. El sitio arqueológico de Cishan, en la provincia de Hebei, ha proporcionado pruebas del cultivo del mijo de cola de zorro (Setaria italica, conocido como su o 谷子) que se remonta a unos 10 300 años, lo que lo convierte en la agricultura milletera más antigua confirmada del mundo. El mijo común (Panicum miliaceum, llamado shu o 黍) fue domesticado paralelamente en la región de la meseta de loess del norte de China. Juntos, estos dos mijos constituyeron los cimientos de la civilización china — alimentando las culturas del río Amarillo que darían lugar a las dinastías Shang y Zhou. El personaje mitológico Hou Ji (Señor del Mijo), ancestro legendario de la dinastía Zhou, atestigua el papel central del grano en la identidad china. En Japón, los mijos (awa, kibi, hie) eran los cereales del período Jomon mucho antes de la llegada del arroz, y en Corea, el japgokbap (arroz con cinco granos) perpetúa una filosofía milenaria de diversidad alimentaria.',
    countries: ['China', 'Japón', 'Corea del Sur'],
    primaryMillets: ['Mijo de cola de zorro (Setaria italica / 谷子)', 'Mijo común (Panicum miliaceum / 黍)'],
    iconicFoods: [
      {
        name: 'Xiaomi Zhou (小米粥)',
        country: 'China',
        millet: 'Mijo de cola de zorro',
        description:
          'Gachas doradas y sedosas que son el desayuno y el alimento de convalecencia por excelencia en el norte de China desde hace milenios. Cocidas lentamente hasta que los almidones crean una consistencia cremosa, se consideran en medicina tradicional china como tonificantes para el bazo y el qi del estómago. Las mujeres en período posparto consumen tradicionalmente el xiaomi zhou con azúcar moreno y huevos para favorecer su recuperación.',
      },
      {
        name: 'Kibi Dango (黍団子)',
        country: 'Japón',
        millet: 'Mijo común (Kibi)',
        description:
          'Bolitas dulces a base de harina de mijo común, famosas por su asociación con el héroe popular Momotaro (el Niño Melocotón), que las utilizaba para reclutar compañeros animales en su búsqueda contra los oni (demonios). Los kibi dango de la prefectura de Okayama, cuna de la leyenda de Momotaro, siguen siendo una especialidad regional apreciada y un omiyage (regalo-recuerdo) imprescindible.',
      },
      {
        name: 'Japgokbap (잡곡밥)',
        country: 'Corea del Sur',
        millet: 'Mijos variados',
        description:
          'Arroz con cinco granos que mezcla arroz blanco, mijo de cola de zorro, mijo común, sorgo, alubias negras y cebada. El japgokbap se degusta tradicionalmente durante el Daeboreum (primera luna llena del Año Nuevo lunar) para asegurar buena salud durante todo el año. Constituye también un pilar de la cocina budista de los templos coreanos (sachal eumsik), basada en la armonía entre los diferentes cereales.',
      },
      {
        name: 'Fideos de Lajia',
        country: 'China',
        millet: 'Mijo de cola de zorro',
        description:
          'En 2005, arqueólogos del sitio de Lajia en la provincia de Qinghai descubrieron un cuenco de fideos de 4 000 años de antigüedad, fabricados a partir de mijo de cola de zorro y mijo común — los fideos más antiguos conocidos del mundo. Sellados bajo un cuenco de arcilla volcado por un terremoto antiguo, proporcionaron la prueba definitiva de que la fabricación de fideos nació en China y no en la cuenca mediterránea.',
      },
      {
        name: 'Vino de mijo (黄酒)',
        country: 'China',
        millet: 'Mijo común',
        description:
          'Bebida alcohólica fermentada tradicional de las provincias de Shanxi y Shaanxi, elaborada a partir de mijo común con ayuda de qu (un fermento que contiene mohos, levaduras y bacterias). El vino de mijo es anterior al vino de arroz y fue la principal bebida alcohólica de la civilización china primitiva, mencionado en las inscripciones oraculares sobre hueso de la dinastía Shang, testimoniando más de 3 000 años de tradición cervecera.',
      },
    ],
    historicalHighlights: [
      {
        title: 'Cishan: la agricultura milletera más antigua del mundo',
        period: 'hacia 8300 a. C.',
        description:
          'El análisis de fitolitos en el sitio de Cishan en la provincia de Hebei, publicado en los Proceedings of the National Academy of Sciences (2009), confirmó el cultivo de mijo de cola de zorro que se remonta a unos 10 300 años. Las fosas de almacenamiento del sitio contenían un volumen estimado en 50 toneladas de mijo, testimoniando una agricultura organizada a gran escala — la más antigua del mundo.',
      },
      {
        title: 'Hou Ji (Señor del Mijo) y la mitología',
        period: 'hacia 1046-771 a. C. (Zhou occidentales)',
        description:
          'El Shijing (Libro de las Odas), la colección de poesía más antigua de China, relata la leyenda de Hou Ji, ancestro mitológico de la dinastía Zhou que enseñó a la humanidad el cultivo del mijo. Su historia — del nacimiento milagroso a la invención de la agricultura — muestra hasta qué punto el mijo estaba anclado en los mitos fundadores de la civilización china.',
      },
      {
        title: 'Fideos de 4 000 años descubiertos en Lajia',
        period: 'hacia 2000 a. C. (descubiertos en 2005)',
        description:
          'Un cuenco de arcilla sellado en el sitio arqueológico de Lajia en Qinghai preservó los fideos más antiguos conocidos, fabricados a partir de harina de mijo de cola de zorro y mijo común. Publicado en Nature (2005), este descubrimiento zanjó el debate sobre el origen de los fideos — China, Oriente Medio o Italia — a favor de China.',
      },
    ],
    culturalSignificance:
      'El mijo está inscrito en el tejido mismo de la civilización china. El carácter para «cereal» (谷) designaba originalmente el mijo, y los textos chinos antiguos colocan sistemáticamente el mijo a la cabeza de los «cinco granos» (wu gu: mijo, arroz, trigo, sorgo y alubias). En medicina tradicional china, el mijo de cola de zorro se clasifica de sabor dulce y salado, de naturaleza fresca, beneficioso para los meridianos del riñón y del estómago. En Japón, los mijos portan una memoria cultural ambivalente: reverenciados como los granos que alimentaron la nación durante milenios, pero asociados también a la pobreza rural y las privaciones de la Segunda Guerra Mundial. El movimiento moderno del zakkokumai los rehabilita como alimentos saludables. En Corea, el concepto de «yak sik dong won» (alimento y medicina comparten el mismo origen) sustenta la tradición de consumir cereales variados. El proverbio chino «xiao mi jia bu liao da jiang» (el mijo solo no puede hacer un general) recuerda la importancia de combinar los recursos.',
    modernStatus:
      'China sigue siendo el primer productor mundial de mijo de cola de zorro con aproximadamente 1,5 a 2 millones de toneladas cosechadas anualmente, principalmente en las provincias de Heilongjiang, Mongolia Interior, Hebei y Shanxi. Sin embargo, la proporción del mijo en la producción cerealera china ha pasado de más del 50 % a principios del siglo XX a menos del 3 % actualmente, al imponerse el arroz y el trigo. La iniciativa gubernamental de «renacimiento de los cereales integrales» (粗粮复兴) promueve el consumo de mijo por sus beneficios para la salud, en particular la gestión de la diabetes y las enfermedades cardiovasculares. El mijo de cola de zorro premium de Shanxi alcanza precios elevados como alimento saludable. En Japón, el mercado del zakkokumai (arroz con cereales ancestrales) conoce un crecimiento significativo, y en Corea del Sur, el japgokbap se sirve en los comedores escolares como parte de la educación nutricional.',
    keyFact:
      'El sitio de Cishan en la provincia de Hebei contenía aproximadamente 50 toneladas de mijo almacenado en fosas subterráneas — prueba de una agricultura organizada a gran escala que se remonta a 10 300 años, la más antigua confirmada del mundo.',
    imageFile: '/images/sections/global-china-east-asia.webp',
  },

  // ─── 5. EUROPA Y MEDITERRÁNEO ─────────────────────────────────────
  {
    slug: 'europe-mediterranean',
    region: 'Europa y Mediterráneo',
    continent: 'Europa',
    tagline: 'El cereal olvidado de la Europa medieval — antes del maíz, antes de la patata',
    description:
      'Antes de que el intercambio colombino transformara la agricultura europea con el maíz y la patata venidos de las Américas, el mijo era uno de los cereales más importantes del continente. El mijo común (Panicum miliaceum) llegó a Europa por los corredores de la Ruta de la Seda hacia 2000-1500 a. C. y se convirtió rápidamente en un alimento básico en la cuenca del Danubio, la península itálica y las llanuras de Europa Oriental. Los autores romanos, entre ellos Plinio el Viejo, documentaban su cultivo extenso y su papel en la alimentación tanto de ciudadanos como de soldados. En la península ibérica, el mijo desempeñó un papel fundamental: Estrabón y Columela documentan su cultivo en Hispania, y los hallazgos arqueológicos en Numancia y otros yacimientos ibéricos confirman su presencia milenaria. En la España medieval, el mijo se cultivaba en Castilla, Galicia y el valle del Ebro como cereal complementario. En Italia medieval, la polenta de mijo alimentaba a campesinos y obreros varios siglos antes de que la polenta de maíz la sustituyera tras el siglo XVI.',
    countries: ['España', 'Italia', 'Turquía', 'Rumanía', 'Ucrania'],
    primaryMillets: ['Mijo común (Panicum miliaceum)', 'Sorgo (Sorghum bicolor)'],
    iconicFoods: [
      {
        name: 'Gachas de mijo ibéricas',
        country: 'España',
        millet: 'Mijo común',
        description:
          'Las gachas de mijo fueron un alimento cotidiano en la España rural desde la Antigüedad hasta la Edad Moderna. Preparadas con harina de mijo cocida en agua o leche, constituían el sustento principal de campesinos, pastores y soldados en las mesetas castellanas y las montañas del norte. En Galicia y Asturias, las gachas de mijo (papas de millo) persistieron hasta bien entrado el siglo XVIII, cuando el maíz americano las desplazó progresivamente. Hoy, algunos restaurantes de cocina histórica y chefs comprometidos con la recuperación de los cereales ancestrales han empezado a rescatar estas preparaciones.',
      },
      {
        name: 'Polenta de mijo (Polenta di Miglio)',
        country: 'Italia',
        millet: 'Mijo común',
        description:
          'La polenta original italiana, elaborada a partir de harina de mijo mucho antes de la llegada del maíz de las Américas en el siglo XVI. La polenta de mijo alimentaba diariamente a los campesinos del norte de Italia, especialmente en Véneto, Lombardía y Friuli. Se servía blanda acompañando guisos o enfriada y cortada para asarla. El movimiento Slow Food italiano la ha inscrito en su «Arca del Gusto» como alimento patrimonial en peligro.',
      },
      {
        name: 'Boza',
        country: 'Turquía',
        millet: 'Mijo común',
        description:
          'Bebida espesa, ligeramente viscosa y de baja graduación alcohólica, a base de mijo fermentado, con un sabor agridulce característico, tradicionalmente consumida en invierno. El boza se prepara hirviendo harina de mijo, dejándola fermentar con cultivos silvestres de lactobacilos, y luego endulzándola. Se sirve acompañada de garbanzos tostados (leblebi) y un toque de canela. Sus orígenes se remontarían a 8 000-9 000 años en Anatolia.',
      },
      {
        name: 'Millas',
        country: 'Francia',
        millet: 'Mijo común / Maíz',
        description:
          'Pastel o tortita gruesa del suroeste de Francia (Gascuña, Bearn, Languedoc), cuya versión ancestral se preparaba con harina de mijo antes de la adopción del maíz. El millas de mijo, cocido al horno o en sartén, ofrecía un plato consistente y económico. La palabra «millas» deriva directamente del latín «milium» (mijo), testimoniando la antigüedad de esta preparación en la gastronomía occitana.',
      },
      {
        name: 'Mămăligă de mijo',
        country: 'Rumanía',
        millet: 'Mijo común',
        description:
          'Gachas de mijo rumanas emparentadas con la mămăligă de maíz más conocida. Antes de la llegada del maíz a Valaquia y Moldavia en el siglo XVII, la mămăligă de mijo era el alimento básico de los campesinos de los principados danubianos. Algunos cocineros tradicionales de la Transilvania rural preparan todavía la mămăligă de mijo para las comidas festivas, perpetuando un saber hacer culinario que se remonta a la Antigüedad tardía en los Balcanes.',
      },
    ],
    historicalHighlights: [
      {
        title: 'Llegada del mijo a Europa en la Edad del Bronce',
        period: 'hacia 2000-1500 a. C.',
        description:
          'El mijo común llegó a Europa por los corredores estépicos que conectan Asia Central con la cuenca del Danubio durante la Edad del Bronce. Los datos arqueobotánicos de sitios en Hungría, Rumanía y el norte de Italia muestran un cultivo del mijo extendido ya en 1500 a. C., convirtiéndolo en uno de los primeros cultivos cerealeros de la Europa templada junto al escanda y la cebada.',
      },
      {
        title: 'Plinio el Viejo y el cultivo del mijo en Hispania',
        period: '77 d. C.',
        description:
          'En su Naturalis Historia (Libro XVIII), Plinio el Viejo describe el mijo como un cultivo «de productividad notable» ampliamente cultivado en el Imperio romano, incluida Hispania. Documenta que el mijo de Campania produce unas gachas blancas excelentes (puls) y que el grano puede conservarse durante períodos notablemente largos sin deteriorarse — una ventaja crucial para el aprovisionamiento militar. Estrabón y Columela, este último nacido en Gades (actual Cádiz), confirman el cultivo del mijo en las tierras secas del interior de la península ibérica.',
      },
      {
        title: 'El mijo en la Europa medieval y moderna',
        period: 'Siglos V-XVIII d. C.',
        description:
          'El mijo fue un cereal mayor en la Europa preindustrial, particularmente en el suroeste de Francia (Gascuña, Bearn), en la España rural (Castilla, Galicia, valle del Ebro), en Bresse y en Franche-Comté. Los contratos agrícolas medievales atestiguan pagos de rentas en mijo, y las gachas constituían la alimentación cotidiana del campo. La introducción del maíz a partir del siglo XVII marginalizó progresivamente el mijo, pero los topónimos y el vocabulario regional conservan su huella en toda Europa.',
      },
    ],
    culturalSignificance:
      'La historia del mijo en Europa es la de una importancia capital seguida de un olvido casi total. En la Roma antigua, las gachas de mijo (puls) eran el alimento del pueblo — el «pan de cada día» antes de que se generalizara el pan leudado. Los legionarios romanos transportaban mijo como raciones de campaña, y el grano estaba asociado a la virtud rústica y la autosuficiencia. En la Venecia medieval, la ciudad mantenía reservas estratégicas de mijo, al igual que las naciones modernas almacenan trigo, reconociendo la extraordinaria duración de conservación del grano (el mijo común correctamente almacenado puede seguir siendo viable durante más de una década). En España, las gachas de mijo alimentaron generaciones de campesinos castellanos y pastores trashumantes antes de ceder su lugar al maíz. El proverbio húngaro «aki kölest vet, az aranyat arat» (quien siembra mijo cosecha oro) refleja el valor atribuido a este cultivo en las llanuras de Europa central.',
    modernStatus:
      'La relación de Europa con el mijo conoce un tímido renacimiento. Rusia y Ucrania siguen siendo los mayores productores del continente, con Rusia cosechando aproximadamente 300 000 a 500 000 toneladas de mijo común al año. Dentro de la UE, el mijo se cultiva principalmente en Hungría, Rumanía y Francia, esencialmente como alimentación para pájaros y cada vez más para el mercado de productos sin gluten. En España, el mijo se beneficia de un interés creciente en el sector ecológico y entre los consumidores que buscan cereales ancestrales: herbolarios y tiendas ecológicas ofrecen copos y harinas de mijo. El movimiento Slow Food italiano ha inscrito la polenta de mijo en su «Arca del Gusto» entre los alimentos patrimoniales en peligro. En Turquía, la tradición del boza conoce un renacimiento cultural en el siglo XXI, con la emergencia de productores artesanales en Estambul, Ankara e Izmir. La estrategia «De la granja a la mesa» de la UE y el interés creciente por los cultivos resistentes a la sequía sitúan al mijo en los programas de investigación agrícola para la adaptación climática.',
    keyFact:
      'Antes de la llegada del maíz de las Américas en el siglo XVI, la polenta de mijo — y no la polenta de maíz — era el alimento diario de los campesinos del norte de Italia durante más de mil años, y las gachas de mijo alimentaban los campos de Castilla y Franche-Comté.',
    imageFile: '/images/sections/global-europe-mediterranean.webp',
  },

  // ─── 6. AMÉRICAS ──────────────────────────────────────────────────
  {
    slug: 'americas',
    region: 'Américas',
    continent: 'Américas',
    tagline: 'Del sorgo en los campos a la revolución de los superalimentos — los mijos conquistan el Nuevo Mundo',
    description:
      'A diferencia de otras regiones del globo, las Américas no tienen una tradición milenaria de cultivo del mijo — estos cereales llegaron por vías históricas distintas. El sorgo (Sorghum bicolor) fue introducido en América del Norte en el siglo XVII, probablemente a través de la trata de esclavos de África Occidental, y se impuso como cultivo forrajero mayor en las Grandes Llanuras estadounidenses. Hoy, Estados Unidos es el primer productor mundial de sorgo grano, con aproximadamente 9 millones de toneladas al año, cultivado esencialmente en Kansas, Texas y Nebraska. El mijo común (Panicum miliaceum) siguió rutas migratorias europeas, traído por los colonos. En Brasil y Argentina, el sorgo se ha integrado en los sistemas agrícolas a gran escala como cultivo de rotación resistente a la sequía. En los países hispanohablantes de América Latina, el sorgo tiene presencia como cultivo conocido — México, Colombia y Argentina lo cultivan a escala significativa. Más recientemente, los mijos conocen una segunda vida notable en el movimiento de alimentos saludables: cereales sin gluten, cervezas artesanales de sorgo y harinas alternativas responden a una demanda creciente de los consumidores americanos deseosos de diversificar su alimentación.',
    countries: ['Estados Unidos', 'Brasil', 'Argentina', 'México', 'Colombia'],
    primaryMillets: ['Sorgo (Sorghum bicolor)', 'Mijo común (Panicum miliaceum)'],
    iconicFoods: [
      {
        name: 'Cerveza artesanal de sorgo',
        country: 'Estados Unidos',
        millet: 'Sorgo',
        description:
          'Cerveza sin gluten elaborada a partir de sorgo malteado, respondiendo a la demanda creciente del mercado de bebidas sin gluten en América del Norte. Cervecerías artesanales como Ghostfish (Seattle), Ground Breaker (Portland) y New Planet (Colorado) han desarrollado técnicas de elaboración específicas para el sorgo, produciendo cervezas con perfiles aromáticos distintivos — notas de miel, frutas tropicales y cereales tostados — que rivalizan con las cervezas de cebada tradicionales.',
      },
      {
        name: 'Jarabe de sorgo',
        country: 'Estados Unidos',
        millet: 'Sorgo dulce',
        description:
          'Jarabe ámbar y aterciopelado extraído de los tallos de sorgo dulce, especialidad de los Apalaches y el sur de Estados Unidos desde el siglo XIX. El sorgo dulce (Sorghum bicolor var. saccharatum) se prensa para obtener un jugo que luego se reduce lentamente en jarabe en grandes recipientes de cobre. El jarabe de sorgo acompaña los biscuits, los pancakes y el cornbread, y conoce un resurgimiento de interés entre los chefs que promueven una cocina local e histórica.',
      },
      {
        name: 'Bowl de mijo',
        country: 'Estados Unidos / Canadá',
        millet: 'Mijo común',
        description:
          'Preparación tendencia en los restaurantes saludables y cafés ecológicos norteamericanos, el bowl de mijo consiste en mijo cocido guarnecido con verduras asadas, aguacate, semillas y salsas variadas (tahini, chimichurri, miso). Posicionado como alternativa sin gluten a la quinua y al arroz, el mijo seduce a los consumidores por su textura ligera y su neutralidad gustativa que absorbe los sabores de los acompañamientos.',
      },
      {
        name: 'Sorgo en granos (Pipoca de sorgo)',
        country: 'Brasil',
        millet: 'Sorgo',
        description:
          'El sorgo reventado (pipoca de sorgo) gana en popularidad en Brasil como alternativa a las palomitas de maíz, ofreciendo un tentempié más rico en proteínas y fibra. Los granos de sorgo revientan de manera similar al pochoclo pero más pequeños y crujientes. Esta colación se inscribe en el movimiento brasileño de valorización de los cereales alternativos, apoyado por EMBRAPA (Instituto de Investigación Agronómica Brasileño). En México y Argentina, el sorgo reventado empieza también a aparecer en tiendas de productos naturales.',
      },
      {
        name: 'Whiskey de sorgo',
        country: 'Estados Unidos',
        millet: 'Sorgo',
        description:
          'Destilado elaborado a partir de sorgo fermentado, producido por microdestilerías estadounidenses que exploran los cereales alternativos. El whiskey de sorgo ofrece un perfil gustativo distintivo — más dulce y afrutado que el bourbon de maíz — y seduce a los amantes de los destilados artesanales en busca de novedad. Algunas destilerías del Sur reivindican una herencia que se remonta a las primeras destilaciones de sorgo por las comunidades afroamericanas en el siglo XIX.',
      },
    ],
    historicalHighlights: [
      {
        title: 'Introducción del sorgo en América del Norte',
        period: 'Siglo XVII',
        description:
          'El sorgo llegó a América del Norte por dos vías principales: primero con los esclavos africanos que trajeron consigo las semillas y los conocimientos agrícolas de África Occidental, luego por introducciones voluntarias en el siglo XIX por el Ministerio de Agricultura estadounidense para diversificar los cultivos de las Grandes Llanuras. Benjamin Franklin fue uno de los primeros estadounidenses en promover el sorgo como cultivo útil.',
      },
      {
        title: 'La edad de oro del jarabe de sorgo',
        period: 'Siglo XIX',
        description:
          'Durante la Guerra Civil estadounidense (1861-1865) y las décadas siguientes, el jarabe de sorgo se convirtió en el edulcorante principal del sur y centro de Estados Unidos, en sustitución del azúcar de caña hecho escaso por el bloqueo. Miles de pequeñas explotaciones familiares de los Apalaches y el Medio Oeste poseían sus propias prensas de sorgo, y la producción de jarabe era un evento comunitario otoñal comparable a la cosecha del jarabe de arce en el norte.',
      },
      {
        title: 'Auge de las cervezas sin gluten de sorgo',
        period: 'Años 2010 hasta hoy',
        description:
          'La explosión del mercado sin gluten en América del Norte ha propulsado al sorgo al rango de ingrediente de elaboración cervecera mayor. El valor del mercado estadounidense de cerveza sin gluten superó los 1 000 millones de dólares en 2022, y el sorgo es su cereal base dominante. Este crecimiento ha estimulado la investigación agronómica sobre variedades de sorgo específicamente adaptadas a la elaboración cervecera, desarrolladas en colaboración entre universidades y cervecerías artesanales.',
      },
    ],
    culturalSignificance:
      'La significación cultural de los mijos en las Américas es un relato en dos actos. El primero es un legado en gran parte invisible: los esclavos africanos deportados hacia las Américas trajeron consigo no solo las semillas de sorgo y mijo, sino también conocimientos agrícolas y culinarios que influyeron en la cocina del sur de Estados Unidos y del Caribe, aunque esta contribución rara vez es reconocida. El jarabe de sorgo de los Apalaches encarna esta memoria silenciosa — un saber hacer de origen africano adaptado a las colinas estadounidenses. El segundo acto es contemporáneo: los mijos están forjándose una nueva identidad cultural en las Américas como «supercereales» del siglo XXI, impulsados por los movimientos sin gluten, ecológico y locávoro. Los inmigrantes sudasiáticos en Estados Unidos y Canadá también han desempeñado un papel clave al introducir el ragi, el bajra y el jowar en las tiendas y restaurantes indios, creando un puente entre las tradiciones ancestrales y los nuevos hábitos alimentarios. En los países hispanohablantes de América Latina, la conexión con el sorgo es más directa: México produce más de 5 millones de toneladas al año, aunque principalmente destinadas a la alimentación animal, y existe un creciente interés por su uso culinario humano.',
    modernStatus:
      'Estados Unidos es el primer productor mundial de sorgo grano con aproximadamente 9 millones de toneladas al año, cultivado principalmente en el «cinturón del sorgo» (Kansas, Texas, Nebraska, Oklahoma). Sin embargo, lo esencial de esta producción se destina a la alimentación animal y la exportación hacia China. México es el cuarto productor mundial de sorgo (más de 5 millones de toneladas anuales), cultivado principalmente en Tamaulipas, Guanajuato y Sinaloa, aunque la mayor parte también se destina a la ganadería. Argentina integra el sorgo en los sistemas de cultivo sin laboreo. El mercado del sorgo y el mijo alimentarios conoce un crecimiento rápido: las ventas de productos a base de mijo en la gran distribución norteamericana aumentaron más del 25 % entre 2019 y 2023. En Brasil, EMBRAPA desarrolla variedades de sorgo adaptadas al Cerrado para la rotación con la soja. Canadá explora el mijo común como cultivo de cobertura y rotación en las Praderas, donde su resistencia a la sequía ofrece una alternativa al trigo en un contexto de cambio climático. El movimiento de la cerveza artesanal de sorgo sigue creciendo, con más de 150 cervecerías en Estados Unidos que ofrecen al menos una cerveza a base de sorgo.',
    keyFact:
      'Estados Unidos es el primer productor mundial de sorgo grano con aproximadamente 9 millones de toneladas al año, pero menos del 5 % de esta producción se destina a la alimentación humana — el resto sirve para la ganadería y la exportación. México, con más de 5 millones de toneladas, es otro productor mayor del continente.',
    imageFile: '/images/sections/global-americas.webp',
  },
];

// ─── HELPER ─────────────────────────────────────────────────────────

export function getGlobalMilletRegionBySlug(
  slug: string,
): GlobalMilletRegion | undefined {
  return globalMilletRegions.find((r) => r.slug === slug);
}
