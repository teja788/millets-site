import type { FermentedProduct } from '@/lib/types';

export const fermentedProducts: FermentedProduct[] = [
  {
    name: 'Ogi',
    region: 'Nigeria, oeste de África (Ghana, Benín, Togo)',
    millets: ['sorghum', 'pearl-millet'],
    process:
      'Los granos de sorgo o de mijo perla (Pennisetum glaucum) se remojan en agua tibia durante uno a tres días, lo que inicia una fermentación láctica espontánea. Los granos ablandados se muelen por vía húmeda y se tamizan para separar el salvado de la fracción amilácea. El filtrado obtenido se deja reposar en un recipiente, permitiendo la sedimentación del almidón y la continuación de la fermentación. Los microorganismos dominantes son Lactobacillus plantarum, Corynebacterium y Saccharomyces cerevisiae. La acción combinada de estas bacterias lácticas y levaduras produce ácido láctico, reduciendo el pH a 3,5-4,0. Las gachas fermentadas se cuecen luego a fuego lento con agua para obtener una pasta suave y homogénea llamada "pap", que se consume caliente o tibia.',
    duration: '24 a 72 horas',
    nutritionalBenefit:
      'La fermentación del ogi mejora considerablemente el perfil de aminoácidos, especialmente el contenido de lisina, un aminoácido habitualmente limitante en los alimentos a base de mijo. El ácido fítico se reduce entre un 50 y un 60 %, lo que aumenta de manera espectacular la biodisponibilidad del zinc y el hierro. El ácido láctico producido baja el pH a 3,5-4,0, creando un medio desfavorable para enteropatógenos como Escherichia coli y Salmonella. Estudios han demostrado que la fermentación del ogi genera también vitaminas del grupo B, especialmente riboflavina y niacina, al tiempo que mejora la digestibilidad de las proteínas entre un 15 y un 25 %.',
    culturalContext:
      'El ogi es el alimento de destete por excelencia en todo el oeste de África, introducido en la alimentación de los lactantes desde los cuatro a seis meses de edad. Entre los yoruba se denomina "ogi" o "agidi" cuando se consume en forma de gel; entre los hausa, su equivalente es el "kamu". Es un alimento de desayuno consumido por todas las franjas de edad. La investigación sobre el enriquecimiento del ogi con soja constituye un eje importante de las ciencias alimentarias del oeste de África. La Organización Mundial de la Salud reconoce el ogi como un modelo de fermentación doméstica eficaz para mejorar la seguridad alimentaria infantil.',
  },
  {
    name: 'Fura',
    region: 'Nigeria (norte), Níger, Malí, Guinea',
    millets: ['pearl-millet'],
    process:
      'El mijo perla (Pennisetum glaucum) se muele hasta obtener una harina fina, se mezcla con especias aromáticas — jengibre, pimienta, clavo — y se amasa con agua caliente para formar una pasta homogénea. Esta pasta se moldea en bolas densas de unos 5 a 8 cm de diámetro, que luego se cuecen parcialmente mediante una breve ebullición. Las bolas de fura así obtenidas se desmenuzan y se mezclan con "nono", una leche fermentada producida por fermentación espontánea de leche cruda de vaca durante 12 a 24 horas. Las bacterias lácticas dominantes en el nono incluyen Lactobacillus delbrueckii, Streptococcus thermophilus y Lactococcus lactis. La mezcla final, llamada "fura da nono", se remueve hasta obtener una bebida espesa y cremosa.',
    duration: '12 a 24 horas (para el componente nono)',
    nutritionalBenefit:
      'El fura da nono es una combinación nutricionalmente sinérgica: el mijo aporta la energía, la fibra alimentaria, el hierro y las vitaminas del grupo B, mientras que la leche fermentada proporciona proteínas de alta calidad, calcio y probióticos vivos. El ácido láctico del nono favorece la absorción del hierro contenido en el mijo. Juntos, proporcionan un perfil completo de aminoácidos que ninguno de los dos componentes alcanza por separado. Una porción aporta aproximadamente 150 a 180 kcal con 6 a 8 g de proteínas. Investigaciones han mostrado que la fermentación del nono reduce el ácido fítico entre un 35 y un 45 %, mejorando significativamente la biodisponibilidad de los minerales.',
    culturalContext:
      'El fura da nono es el alimento emblemático de los fulani (peul), pueblo pastor nómada cuya historia está intrínsecamente ligada a la ganadería bovina. Encarna una asociación nutricional secular entre las comunidades pastorales fulani y los agricultores sedentarios cultivadores de mijo. Son tradicionalmente las mujeres fulani quienes venden el fura da nono en calabazas al borde de los caminos y en los mercados a lo largo de toda la franja saheliana, de Guinea a Camerún. Es celebrado como un símbolo de intercambio alimentario intercultural y constituye una fuente esencial de proteínas para las poblaciones rurales del Sahel.',
  },
  {
    name: 'Dolo',
    region: 'Burkina Faso, Malí, norte de Ghana, Costa de Marfil',
    millets: ['sorghum'],
    process:
      'El sorgo rojo (Sorghum bicolor) se remoja en agua durante 12 a 24 horas, luego se extiende sobre esteras para germinar durante tres a cinco días, produciendo la malta de sorgo. Los granos malteados se secan al sol, se trituran y se mezclan con agua para formar unas gachas espesas. Esta mezcla se lleva a ebullición, se enfría y luego se filtra a través de cestas trenzadas. El mosto dulce obtenido sufre una doble fermentación: primero una acidificación láctica por Lactobacillus y Pediococcus, luego una fermentación alcohólica por levaduras Saccharomyces cerevisiae presentes de forma natural. El resultado es una cerveza turbia, rojiza, de 2 a 4 % de alcohol por volumen, con un sabor agridulce característico.',
    duration: '5 a 7 días (malteo incluido)',
    nutritionalBenefit:
      'El malteo del sorgo activa las enzimas amilasas y proteasas que degradan el almidón y las proteínas, mejorando la digestibilidad global. La fermentación reduce el ácido fítico entre un 60 y un 70 %, lo que aumenta considerablemente la biodisponibilidad del hierro y el zinc. El dolo contiene vitaminas B1, B2, B6 y niacina producidas por la actividad de las levaduras. Estudios han mostrado que el dolo aporta aproximadamente 300 a 400 kcal por litro, con 3 a 5 g de proteínas y cantidades significativas de minerales.',
    culturalContext:
      'El dolo es mucho más que una simple bebida en Burkina Faso: es el cemento de la vida social y comunitaria. Las "dolotières" — las mujeres cerveceras de dolo — ocupan un lugar central en la economía rural y urbana. Los "cabarets" (establecimientos de dolo) son lugares de socialización donde se discuten los asuntos del pueblo. El dolo es indispensable en las ceremonias rituales, los funerales y las fiestas tradicionales entre los mossi, los bobo y los lobi. La elaboración del dolo representa una actividad económica fundamental para las mujeres de la región.',
  },
  {
    name: 'Tchoukoutou',
    region: 'Benín, Togo, norte de Ghana',
    millets: ['sorghum'],
    process:
      'El sorgo se remoja y luego se deja germinar durante tres a cuatro días para producir la malta. Los granos malteados se secan, se trituran y se mezclan con agua. El mosto se somete a una cocción prolongada de seis a ocho horas en grandes tinajas de barro, un proceso que concentra los azúcares y desarrolla los aromas característicos. Tras el enfriamiento, el mosto filtrado se inocula con un fermento natural de una elaboración anterior, que contiene principalmente cepas de Saccharomyces cerevisiae y bacterias lácticas. La fermentación alcohólica dura de 12 a 24 horas, produciendo una cerveza opaca, parduzca, de 3 a 5 % de alcohol por volumen. El tchoukoutou se consume fresco, en las 24 a 48 horas siguientes a su elaboración, ya que continúa fermentando.',
    duration: '4 a 6 días (del malteo al consumo)',
    nutritionalBenefit:
      'El tchoukoutou conserva una parte importante de los nutrientes del sorgo gracias a la ausencia de filtración fina. La cocción prolongada favorece la reacción de Maillard, produciendo compuestos antioxidantes. La fermentación genera vitaminas del grupo B (tiamina, riboflavina, ácido fólico) y reduce los factores antinutricionales como los taninos condensados y el ácido fítico. Investigaciones de la Universidad de Abomey-Calavi en Benín han mostrado que el tchoukoutou contiene aproximadamente de 250 a 350 kcal por litro y constituye una fuente apreciable de hierro, zinc y magnesio. Las bacterias lácticas residuales confieren propiedades probióticas al producto fresco.',
    culturalContext:
      'El tchoukoutou está profundamente arraigado en las tradiciones rituales y sociales del norte de Benín y Togo. Entre los bariba, los somba y los kabyè, es inseparable de las ceremonias funerarias, los ritos de iniciación y las fiestas de la cosecha. Las mujeres cerveceras, llamadas "tchoukoutières", gozan de un estatus social respetado y de una independencia económica significativa. La elaboración del tchoukoutou sigue un calendario ritual preciso, y ciertas etapas del proceso van acompañadas de oraciones y ofrendas a los ancestros.',
  },
  {
    name: 'Boza',
    region: 'Turquía, Balcanes (Bulgaria, Albania, Rumanía, Macedonia del Norte)',
    millets: ['proso-millet'],
    process:
      'Los granos de mijo proso (Panicum miliaceum) se remojan en agua, se cuecen hasta que estén muy tiernos, y luego se trituran y filtran. Se añade azúcar y un fermento de un lote anterior a la pasta obtenida. La mezcla sufre una fermentación mixta que involucra tanto bacterias lácticas (Lactobacillus, Leuconostoc) como levaduras (Saccharomyces cerevisiae). Esta doble fermentación produce una bebida espesa, ligeramente efervescente, de sabor agridulce, con un grado alcohólico muy bajo (generalmente inferior al 1 % vol.). La consistencia es cremosa y el color varía del amarillo pálido al beige según el tipo de mijo utilizado. La temperatura de fermentación se mantiene entre 25 y 30 °C para un desarrollo óptimo de los cultivos.',
    duration: '3 a 10 días',
    nutritionalBenefit:
      'El boza es rico en vitaminas B1, B2 y B6 gracias a la acción combinada de las bacterias lácticas y las levaduras. El proceso de fermentación descompone los carbohidratos complejos en azúcares fácilmente digeribles, al tiempo que genera ácido láctico que mejora la absorción de minerales. Contiene aproximadamente 1 000 UFC/mL de probióticos vivos y proporciona una energía sostenida gracias a su matriz glucídica compleja. Análisis realizados por universidades turcas y búlgaras han mostrado que el boza contiene cantidades significativas de calcio, fósforo y hierro. Su riqueza en fibras solubles provenientes de la fermentación del mijo contribuye a la regulación del tránsito intestinal.',
    culturalContext:
      'El boza posee una historia que se remonta a unos 9 000 años, hasta Mesopotamia, lo que lo convierte en una de las bebidas fermentadas más antiguas conocidas por la humanidad. En el Imperio otomano, los vendedores de boza (bozaci) eran una imagen habitual en invierno, y la bebida sigue asociada a la estación fría. El famoso establecimiento Vefa Bozacisi en Estambul sirve boza desde 1876 y constituye hoy una atracción turística imprescindible. En Bulgaria, el boza sigue siendo una bebida invernal popular vendida en panaderías y puestos callejeros. El boza ha sido inscrito en el patrimonio cultural inmaterial de varios países balcánicos, testimoniando su importancia cultural transnacional.',
  },
  {
    name: 'Togwa',
    region: 'Tanzania, este de África (Kenia, Mozambique)',
    millets: ['finger-millet', 'sorghum'],
    process:
      'Harina de eleusine (Eleusine coracana) o de sorgo se cuece formando unas gachas ligeras y se enfría a unos 40 °C. Luego se añade harina de mijo germinado (malta) como fuente de enzimas amilasas y de microflora natural. La mezcla fermenta a temperatura ambiente, dominada por Lactobacillus brevis y L. plantarum. Las amilasas de la malta licúan el almidón, reduciendo la viscosidad al tiempo que aumentan la densidad energética por unidad de volumen. El resultado es una bebida agridulce, ligeramente efervescente, de color parduzco. La consistencia varía de fluida a ligeramente espesa según la proporción de malta añadida y la duración de la fermentación.',
    duration: '12 a 24 horas',
    nutritionalBenefit:
      'El uso de granos germinados introduce enzimas amilasas que licúan el almidón, reduciendo la viscosidad al tiempo que aumentan la densidad energética por unidad de volumen — una ventaja crucial para la alimentación infantil. La fermentación incrementa los niveles de tiamina, riboflavina y niacina. La combinación de la germinación y la fermentación permite reducir el ácido fítico hasta un 88,3 %, mejorando considerablemente la biodisponibilidad de los minerales. Investigaciones de la Universidad de Dar es-Salam han confirmado que el togwa contiene concentraciones elevadas de probióticos vivos (10^7 a 10^8 UFC/mL), lo que lo convierte en un alimento funcional natural eficaz.',
    culturalContext:
      'El togwa está profundamente arraigado en la vida cotidiana tanzana. Se vende por mujeres en recipientes de plástico reciclado en las paradas de autobús, mercados y puertas de escuelas por todo el país. Constituye una bebida nutritiva y asequible para las familias de bajos ingresos y es particularmente apreciada durante la temporada de calor como refrescante. El Programa Mundial de Alimentos ha estudiado el togwa como modelo de alimento probiótico autóctono. En el medio rural, la preparación del togwa es un saber hacer transmitido de madre a hija, y cada familia posee sus propias variantes de receta.',
  },
  {
    name: 'Chibuku',
    region: 'África austral (Zimbabue, Zambia, Malaui, Botsuana, Sudáfrica)',
    millets: ['sorghum', 'pearl-millet'],
    process:
      'Malta de sorgo o de mijo perla se mezcla con un adjunto de maíz o sorgo y agua. El mosto sufre una fermentación en dos etapas: primero, una fermentación láctica por especies de Lactobacillus acidifica el mosto (etapa de agriado); luego se inoculan levaduras Saccharomyces cerevisiae para la fermentación alcohólica. El resultado es una cerveza opaca, espesa, de color marrón rosado y sabor agrio, con un grado alcohólico generalmente de 3 a 4 % por volumen. No se filtra, conservando las partículas de grano en suspensión. La cerveza continúa fermentando después de su envasado, lo que le confiere un carácter vivo y una duración de conservación limitada a unos pocos días.',
    duration: '3 a 5 días',
    nutritionalBenefit:
      'El chibuku conserva un valor nutricional significativo gracias a la ausencia de filtración, preservando los sólidos del grano, las vitaminas del grupo B (especialmente tiamina y riboflavina) y las proteínas residuales. La fermentación convierte hasta el 70 % del ácido fítico, aumentando sustancialmente la biodisponibilidad del hierro y el zinc. Una porción típica aporta cantidades apreciables de calorías, proteínas y micronutrientes, haciendo del chibuku un complemento calórico para las comunidades de subsistencia. Investigaciones de la Universidad de Zimbabue han demostrado que la cerveza opaca tradicional contribuye de manera no despreciable al aporte de hierro de las poblaciones rurales.',
    culturalContext:
      'La cerveza opaca tradicional es la bebida alcohólica más ampliamente consumida en el África subsahariana y ocupa un lugar central en las ceremonias sociales, las ofrendas ancestrales y las reuniones comunitarias. La marca comercial "Chibuku" (que significa "dar al pueblo" en shona) fue creada en la década de 1960 y hoy se produce industrialmente en envases de cartón en varios países. Las versiones artesanales siguen siendo comunes en el medio rural y a menudo son elaboradas por mujeres como actividad comunitaria. En Sudáfrica, la cerveza de sorgo forma parte del patrimonio cultural reconocido y se asocia con las ceremonias tradicionales zulúes y xhosa.',
  },
  {
    name: 'Ben-saalga',
    region: 'Burkina Faso, oeste de África',
    millets: ['pearl-millet'],
    process:
      'Los granos de mijo perla (Pennisetum glaucum) se remojan en agua durante 12 a 24 horas, luego se muelen por vía húmeda con un molino tradicional o mecánico. La pasta obtenida se tamiza y se diluye en agua. El filtrado amiláceo se deja fermentar espontáneamente durante 10 a 24 horas a temperatura ambiente (30-35 °C). La microflora dominante está constituida por bacterias lácticas, principalmente Lactobacillus fermentum y L. plantarum, acompañadas de levaduras. El ácido láctico producido baja el pH a aproximadamente 3,8-4,2. Las gachas fermentadas se cuecen luego a fuego lento con adición de agua para obtener una consistencia fluida adaptada a la alimentación infantil. El producto final es unas gachas ligeramente ácidas, de color blanquecino y textura suave.',
    duration: '10 a 24 horas',
    nutritionalBenefit:
      'Investigaciones del INRAE y del IRD, especialmente las realizadas en el laboratorio Nutripass de Montpellier, han documentado ampliamente los beneficios nutricionales del ben-saalga. La fermentación reduce el ácido fítico entre un 50 y un 65 %, mejorando la biodisponibilidad del hierro y el zinc — micronutrientes esenciales frecuentemente deficitarios en los niños pequeños del oeste de África. Las bacterias lácticas producen vitaminas del grupo B y bacteriocinas con actividad antimicrobiana. Sin embargo, la densidad energética del ben-saalga tradicional sigue siendo baja (25 a 40 kcal/100 mL), lo que ha llevado a los investigadores a recomendar la adición de harina de malta para reducir la viscosidad y permitir una mayor concentración de nutrientes.',
    culturalContext:
      'El ben-saalga es la papilla de destete tradicional más consumida en Burkina Faso, introducida en la alimentación de los lactantes desde los cuatro a seis meses de edad. Su nombre significa literalmente "agua de harina de mijo" en mooré, la lengua de los mossi. Ha sido objeto de numerosos estudios en el marco de programas para mejorar la nutrición infantil en el oeste de África. Programas de formación destinados a las madres se han implementado en Burkina Faso para optimizar las prácticas de preparación, integrando el remojo, la germinación y la fermentación como etapas complementarias para maximizar el valor nutricional de esta papilla ancestral.',
  },
  {
    name: 'Chicha de mijo',
    region: 'América Latina (Bolivia, Perú, Ecuador, Colombia)',
    millets: ['sorghum', 'proso-millet'],
    process:
      'La chicha es una tradición de bebidas fermentadas de cereales y granos profundamente arraigada en América Latina, donde históricamente se elaboraba con maíz. En las comunidades rurales de Bolivia, Perú y otros países andinos, el sorgo y el mijo proso se han incorporado como granos alternativos siguiendo el mismo principio ancestral. Los granos se cuecen hasta obtener una papilla espesa, que se deja enfriar y se mezcla con un fermento natural o con masa de un lote anterior. La fermentación espontánea, dominada por Lactobacillus y levaduras silvestres, se desarrolla durante 2 a 5 días en vasijas de barro o recipientes de plástico alimentario. El resultado es una bebida ligeramente ácida, de baja graduación alcohólica (1 a 3 % vol.) y color claro a ambarino.',
    duration: '2 a 5 días',
    nutritionalBenefit:
      'La fermentación de los granos de mijo y sorgo en la chicha reduce el ácido fítico entre un 40 y un 55 %, mejorando la biodisponibilidad de hierro y zinc. Las bacterias lácticas producen vitaminas del grupo B y ácido láctico que favorece la absorción de minerales. La chicha de mijo aporta energía de liberación sostenida gracias a los carbohidratos parcialmente fermentados. Al igual que otras chichas de grano, contiene probióticos vivos que contribuyen a la salud intestinal. Su bajo contenido alcohólico la hace apta para el consumo familiar en contextos tradicionales.',
    culturalContext:
      'La chicha es una de las bebidas fermentadas más antiguas y emblemáticas de las Américas, con raíces que se remontan a las civilizaciones precolombinas. Aunque tradicionalmente se elabora con maíz, la introducción del sorgo y el mijo a través de la trata transatlántica y los intercambios coloniales ha diversificado las materias primas utilizadas. En comunidades rurales de Bolivia y Perú, la chicha de sorgo se consume en fiestas patronales, ceremonias agrícolas y reuniones comunitarias. Las "chicheras", mujeres encargadas de la elaboración, transmiten el saber hacer de generación en generación. La chicha representa un vínculo vivo entre las tradiciones cerealistas del Viejo y el Nuevo Mundo.',
  },
];
