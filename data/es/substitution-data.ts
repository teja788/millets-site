import type { SubstitutionEntry } from '@/lib/types';

export const substitutionEntries: SubstitutionEntry[] = [
  // =============================================
  // 1. ARROZ BLANCO
  // =============================================
  {
    conventionalGrain: 'Arroz blanco',
    milletSubstitutes: [
      {
        millet: 'foxtail-millet',
        milletName: 'Mijo cola de zorro',
        ratio: '1:1',
        notes:
          'El mijo cola de zorro es el sustituto más cercano al arroz blanco, tanto en apariencia como en método de cocción. Utilice el mismo volumen de agua que para el arroz (proporción 1:2 mijo/agua) y cocine a fuego lento hasta que se absorba por completo. El grano cocido presenta un sabor delicadamente avellanado y una textura ligeramente más firme que el arroz. Enjuague los granos con agua fría antes de la cocción para eliminar el exceso de almidón y obtener granos bien sueltos. Es ideal para preparar paellas ligeras, arroz a la mexicana o como acompañamiento para frijoles.',
        bestFor: ['paella', 'pilaf', 'tabulé', 'arroz con verduras'],
        difficulty: 'easy',
      },
      {
        millet: 'little-millet',
        milletName: 'Mijo menor',
        ratio: '1:1',
        notes:
          'El mijo menor se cocina rápidamente y ofrece una textura ligera y esponjosa muy similar a la del arroz redondo. Absorbe notablemente bien los sabores y constituye un reemplazo directo en los platos a base de arroz. Remoje los granos durante 15 a 20 minutos antes de la cocción para obtener una textura más suave. Este mijo combina perfectamente con salsas, guisos y caldos aromáticos. Resulta excelente en arroces caldosos, sopas de arroz y como relleno para pimientos o empanadas.',
        bestFor: ['arroz caldoso', 'pilaf', 'sopa', 'rellenos'],
        difficulty: 'easy',
      },
      {
        millet: 'barnyard-millet',
        milletName: 'Mijo de corral',
        ratio: '1:1',
        notes:
          'El mijo de corral posee un índice glucémico muy bajo y un aporte calórico reducido, lo que lo convierte en una excelente alternativa al arroz para el control de peso. Se cocina en aproximadamente 15 minutos y presenta una textura ligeramente más firme y masticable que el arroz. Su sabor neutro le permite absorber los aromas de las especias, hierbas y fondos de salsa. Utilice una proporción de 1:2 (mijo/agua) y cocine tapado a fuego lento. Funciona muy bien en platos como arroz con pollo, burritos o como base para un poke bowl.',
        bestFor: ['pilaf', 'sopa', 'gachas', 'bowls'],
        difficulty: 'easy',
      },
      {
        millet: 'kodo-millet',
        milletName: 'Mijo kodo',
        ratio: '1:1',
        notes:
          'El mijo kodo tiene un sabor suave y ligeramente terroso. Conserva perfectamente su forma después de la cocción, lo que lo hace ideal para platos donde se desean granos bien diferenciados. Utilice un poco menos de agua que para el arroz (proporción 1:1,75 mijo/agua) para evitar una textura demasiado blanda. El grano queda ligero y esponjoso cuando se cocina correctamente. Rico en fibra alimentaria, acompaña a la perfección guisos, estofados y platos en salsa. Ideal para tortillas de arroz o como base de ensaladas templadas.',
        bestFor: ['pilaf', 'ensalada templada', 'tabulé', 'gratín'],
        difficulty: 'easy',
      },
    ],
  },

  // =============================================
  // 2. HARINA DE TRIGO
  // =============================================
  {
    conventionalGrain: 'Harina de trigo',
    milletSubstitutes: [
      {
        millet: 'finger-millet',
        milletName: 'Harina de ragi (eleusine)',
        ratio: '3:4',
        notes:
          'Sustituya 3 partes de harina de trigo por 4 partes de harina de ragi, ya que esta es más densa y absorbe más humedad. La harina de ragi aporta un sabor característico a malta y un color marrón oscuro a las masas. Al carecer de gluten, combínela con un aglutinante como goma guar o harina de linaza para pasteles y galletas. Es particularmente adecuada para recetas que aprovechan una miga densa y húmeda, como brownies o bizcochos de chocolate. En la cocina latinoamericana, funciona bien para tortillas gruesas tipo gorditas y empanadas horneadas.',
        bestFor: ['tortillas', 'empanadas', 'bizcochos', 'pan'],
        difficulty: 'moderate',
      },
      {
        millet: 'sorghum',
        milletName: 'Harina de sorgo',
        ratio: '1:1',
        notes:
          'La harina de sorgo es una de las harinas de mijo más versátiles para sustituir la harina de trigo. Posee un sabor neutro, ligeramente dulce, y un color claro que imita bien la harina blanca. Su textura fina la hace adaptable tanto a preparaciones dulces como saladas. Añada una cucharadita de psilio o goma xantana por cada 150 g de harina para mejorar la cohesión de las masas de bizcocho y pan. Tamice dos veces para un resultado más aireado. Excelente para preparar tortillas de harina sin gluten, arepas y masa de empanadas.',
        bestFor: ['tortillas', 'arepas', 'pan', 'bizcochos'],
        difficulty: 'easy',
      },
      {
        millet: 'proso-millet',
        milletName: 'Harina de mijo proso',
        ratio: '1:1',
        notes:
          'La harina de mijo proso, también llamado mijo común o mijo blanco, ofrece un sabor suave y un toque sutil de avellana que se integra fácilmente en la repostería. Es naturalmente sin gluten y da una textura fina y desmenuzable a las galletas y las bases de tarta. Para masas leudadas, combínela al 50 % con harina de sorgo para obtener mejor elasticidad. Consérvela en el refrigerador ya que se enrancia más rápido que la harina de trigo. Resulta ideal para churros sin gluten, polvorones y masas de hojaldre rústicas.',
        bestFor: ['galletas', 'bizcochos', 'churros', 'pan'],
        difficulty: 'moderate',
      },
    ],
  },

  // =============================================
  // 3. BULGUR
  // =============================================
  {
    conventionalGrain: 'Bulgur',
    milletSubstitutes: [
      {
        millet: 'foxtail-millet',
        milletName: 'Mijo cola de zorro triturado',
        ratio: '1:1',
        notes:
          'El mijo cola de zorro triturado reproduce fielmente la textura granulosa del bulgur y se utiliza de la misma manera en ensaladas frías y platos calientes. Cocínelo en un volumen y medio de agua hirviendo con sal durante 12 a 15 minutos, luego escúrralo y deje enfriar antes de incorporarlo a sus preparaciones. Absorbe muy bien las vinagretas a base de aceite de oliva, limón y hierbas frescas. Su sabor avellanado aporta una dimensión adicional al tabulé y a las ensaladas mediterráneas. Funciona de maravilla en rellenos para pimientos, calabacines o berenjenas.',
        bestFor: ['tabulé', 'pilaf', 'sopa', 'rellenos'],
        difficulty: 'easy',
      },
      {
        millet: 'sorghum',
        milletName: 'Sorgo triturado',
        ratio: '1:1',
        notes:
          'El sorgo triturado ofrece una textura más crujiente y rústica que el bulgur, lo que lo convierte en una excelente opción para ensaladas compuestas y gratines. Remójelo una hora en agua fría antes de la cocción para reducir el tiempo de preparación a unos 20 minutos. La cocción se realiza en dos volúmenes de agua a fuego lento, tapado. Su sabor neutro y ligeramente dulce combina bien con tomates secos, menta fresca, perejil y piñones tostados típicos de la cocina mediterránea. Úselo también como base para albóndigas vegetales o kibbeh sin gluten.',
        bestFor: ['tabulé', 'gratín', 'sopa', 'albóndigas'],
        difficulty: 'moderate',
      },
    ],
  },

  // =============================================
  // 4. QUINOA
  // =============================================
  {
    conventionalGrain: 'Quinoa',
    milletSubstitutes: [
      {
        millet: 'foxtail-millet',
        milletName: 'Mijo cola de zorro',
        ratio: '1:1',
        notes:
          'El mijo cola de zorro comparte con la quinoa un tamaño de grano similar y una cocción rápida, lo que lo convierte en un sustituto muy natural en ensaladas, bowls y acompañamientos. Cocínelo en una proporción de 1:2 (mijo/agua) durante 12 a 15 minutos tapado, luego deje reposar 5 minutos fuera del fuego antes de esponjar con un tenedor. A diferencia de la quinoa, no necesita enjuagarse para eliminar las saponinas. Su sabor avellanado es más pronunciado que el de la quinoa, lo que enriquece las vinagretas y los bowls compuestos. Perfecto para ensaladas estilo mexicano con frijoles, maíz y aguacate.',
        bestFor: ['tabulé', 'pilaf', 'bowls', 'ensaladas'],
        difficulty: 'easy',
      },
      {
        millet: 'proso-millet',
        milletName: 'Mijo proso',
        ratio: '1:1',
        notes:
          'El mijo proso (o mijo blanco) es el sustituto de quinoa más extendido en Europa gracias a su cultivo local y su disponibilidad en tiendas ecológicas. Sus granos redondos y dorados se cocinan en 15 minutos en dos volúmenes de agua y desarrollan una textura a la vez tierna y ligeramente crujiente. Para obtener granos bien separados, saltee el mijo en seco en una sartén durante 2 minutos antes de agregar el agua hirviendo. Es rico en magnesio y vitaminas del grupo B, y acompaña perfectamente las verduras asadas y los quesos frescos. Ideal para burritos bowls y ensaladas proteicas.',
        bestFor: ['tabulé', 'pilaf', 'bowls', 'sopa'],
        difficulty: 'easy',
      },
      {
        millet: 'kodo-millet',
        milletName: 'Mijo kodo',
        ratio: '1:1',
        notes:
          'El mijo kodo constituye una alternativa interesante a la quinoa para las personas que buscan un grano de bajo índice glucémico. Su textura firme y sus granos que permanecen bien individualizados tras la cocción lo hacen ideal para ensaladas compuestas y buddha bowls. Cocínelo en una proporción de 1:1,75 (mijo/agua) a fuego lento durante aproximadamente 18 minutos. Su perfil nutricional es comparable al de la quinoa, con un alto contenido en fibra y antioxidantes. Aderécelo con aceite de oliva virgen extra y vinagre de Jerez para un resultado sabroso y auténticamente español.',
        bestFor: ['tabulé', 'gratín', 'pilaf', 'ensaladas'],
        difficulty: 'moderate',
      },
    ],
  },

  // =============================================
  // 5. SÉMOLA DE TRIGO (CUSCÚS)
  // =============================================
  {
    conventionalGrain: 'Sémola de trigo (cuscús)',
    milletSubstitutes: [
      {
        millet: 'pearl-millet',
        milletName: 'Sémola de mijo perla',
        ratio: '1:1',
        notes:
          'La sémola de mijo perla (bajra) se utiliza desde hace siglos en el oeste de África para preparar platos similares al cuscús. Ofrece un sabor ligeramente más robusto y terroso que la sémola de trigo clásica. Para prepararla, vierta un volumen de agua hirviendo con sal sobre la sémola, tape y deje hinchar 5 minutos, luego esponje con un tenedor añadiendo un chorrito de aceite de oliva. Combina perfectamente con guisos de verduras, estofados especiados y caldos aromáticos. Excelente como acompañamiento para platos de influencia norteafricana como el cuscús marroquí o junto a un buen pisto manchego.',
        bestFor: ['cuscús', 'tabulé', 'sopa', 'gachas'],
        difficulty: 'easy',
      },
      {
        millet: 'sorghum',
        milletName: 'Sémola de sorgo',
        ratio: '1:1',
        notes:
          'La sémola de sorgo es una alternativa sin gluten a la sémola de trigo que gana popularidad en la cocina contemporánea. Posee un sabor suave y neutro que se adapta tanto a preparaciones saladas como dulces. La cocción es ligeramente más larga que la del cuscús de trigo: cuente aproximadamente de 8 a 10 minutos al vapor o 5 minutos de hidratación con agua hirviendo. Añada mantequilla o aceite de oliva al final de la cocción para una textura más sedosa. Absorbe maravillosamente los jugos de cocción de carnes estofadas. Ideal para servir junto a un cordero al chilindrón o un pollo al ajillo.',
        bestFor: ['cuscús', 'gratín', 'tabulé', 'tortas'],
        difficulty: 'easy',
      },
      {
        millet: 'foxtail-millet',
        milletName: 'Mijo cola de zorro en grano',
        ratio: '1:1',
        notes:
          'Los granos enteros de mijo cola de zorro pueden sustituir la sémola de cuscús para una versión más rústica y nutritiva del plato. Los granos son más grandes que la sémola tradicional, lo que da una textura más pronunciada y satisfactoria en boca. Cocine los granos al vapor en una cuscusera durante 20 minutos en dos pasadas, desgranándolos entre cada cocción con un poco de aceite de oliva y sal. El resultado es un cuscús de granos dorados, perfumados y bien sueltos, rico en fibra y proteínas vegetales. Una forma creativa de preparar un cuscús sin gluten para acompañar un buen gazpacho o unas albóndigas en salsa de tomate.',
        bestFor: ['cuscús', 'pilaf', 'tabulé', 'sopa'],
        difficulty: 'advanced',
      },
    ],
  },
];
