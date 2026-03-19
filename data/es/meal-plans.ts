import type { MealPlan } from '@/lib/types';

const DISCLAIMER =
  'Este plan alimentario se proporciona únicamente a título orientativo. No sustituye los consejos de un profesional de la salud. Consulte a un dietista-nutricionista o a su médico antes de cualquier cambio alimentario significativo, especialmente en caso de patología existente.';

export const mealPlans: MealPlan[] = [
  // =============================================
  // 1. DESCUBRIMIENTO — Semana de descubrimiento de los mijos
  // =============================================
  {
    slug: 'descubrimiento',
    title: 'Semana de descubrimiento de los mijos',
    description:
      'Una introducción suave y progresiva a los mijos para quienes nunca los han cocinado. Este plan mezcla recetas españolas y latinoamericanas familiares — tortillas, ensaladas, sopas, gachas — con preparaciones tradicionales de la India como el ragi porridge y la bajra roti. Cada día, una o dos comidas se sustituyen por platos a base de mijo, mientras que las demás permanecen sin cambios. Al final de la semana, habrá descubierto cinco variedades de mijos sin alterar sus hábitos.',
    goal: 'Introducción suave a los mijos para principiantes, combinando cocina española, latinoamericana e india',
    duration: '7 días',
    days: [
      {
        day: 'Lunes',
        breakfast: 'Su desayuno habitual',
        lunch: 'Ensalada tibia de mijo perla con hierbas frescas, pepino, tomates cherry y zumo de limón',
        snack: 'Tortita de mijo inflado con miel y semillas de sésamo',
        dinner: 'Su cena habitual',
      },
      {
        day: 'Martes',
        breakfast: 'Gachas de mijo perla con leche tibia, plátano y canela',
        lunch: 'Su almuerzo habitual',
        snack: 'Galletas de harina de mijo con almendras',
        dinner: 'Su cena habitual',
      },
      {
        day: 'Miércoles',
        breakfast: 'Su desayuno habitual',
        lunch: 'Risotto de mijo con champiñones, parmesano y perejil fresco',
        snack: 'Gachas tibias de mijo endulzadas con leche condensada (inspiración india)',
        dinner: 'Su cena habitual',
      },
      {
        day: 'Jueves',
        breakfast: 'Tortitas de harina de mijo con compota de manzana casera',
        lunch: 'Su almuerzo habitual',
        snack: 'Puñado de almendras y copos de mijo inflado',
        dinner: 'Su cena habitual',
      },
      {
        day: 'Viernes',
        breakfast: 'Su desayuno habitual',
        lunch: 'Ensalada de mijo con garbanzos, pimiento asado, aceitunas y aliño de limón',
        snack: 'Yogur natural con granola de mijo y frutos rojos',
        dinner: 'Su cena habitual',
      },
      {
        day: 'Sábado',
        breakfast: 'Gachas cremosas de mijo con leche, vainilla y miel',
        lunch: 'Gratinado de sorgo con verduras de temporada, bechamel ligera y queso manchego',
        snack: 'Tortitas de mijo con hierbas finas y queso fresco',
        dinner: 'Sopa de mijo perla con puerros, zanahorias y tomillo',
      },
      {
        day: 'Domingo',
        breakfast: 'Tortitas de mijo con arándanos y sirope de agave',
        lunch: 'Tabulé de mijo a la menta, granada y queso feta',
        snack: 'Bolitas de mijo con leche cuajada azucarada (inspiración senegalesa)',
        dinner: 'Tortitas de mijo doradas servidas con pisto manchego',
      },
    ],
    tips: [
      'Comience sustituyendo una sola comida al día con un plato a base de mijo durante la primera semana.',
      'Remoje los mijos 15 a 30 minutos antes de la cocción: serán más digestibles y se cocinarán más rápido.',
      'Mezcle el mijo con su arroz o cuscús habitual (mitad y mitad) si el cambio completo le parece demasiado brusco.',
      'El mijo perla (bajra) tiene un sabor suave y neutro, ideal para empezar; el sorgo es más intenso y se adapta bien a los gratinados.',
      'Beba suficiente agua: los mijos son ricos en fibra y su sistema digestivo necesita tiempo para adaptarse.',
      'No se preocupe si el sabor le sorprende al principio — la mayoría de las personas aprecian los mijos después de dos o tres intentos.',
    ],
    disclaimer: DISCLAIMER,
  },

  // =============================================
  // 2. SIN GLUTEN — Plan sin gluten con mijos
  // =============================================
  {
    slug: 'sin-gluten',
    title: 'Plan sin gluten con mijos',
    description:
      'Una semana completa 100 % sin gluten donde cada comida se basa en mijos naturalmente libres de gluten. Este plan propone recetas de inspiración española, mediterránea y latinoamericana — tortillas, tortitas, gratinados, risottos — realizadas íntegramente con harinas y granos de mijo, sorgo y teff. Se acabó la monotonía del arroz y el maíz: los mijos aportan variedad, sabor y una densidad nutricional notable a su alimentación sin gluten.',
    goal: 'Semana completa 100 % sin gluten a base de mijos, con recetas españolas, mediterráneas y latinoamericanas',
    duration: '7 días',
    days: [
      {
        day: 'Lunes',
        breakfast: 'Gachas de mijo perla con almendras laminadas, miel y pera pochada',
        lunch: 'Ensalada tibia de mijo con lentejas, nueces y vinagreta de limón',
        snack: 'Crackers de harina de sorgo con semillas de girasol y romero',
        dinner: 'Risotto de mijo con calabacines a la plancha, albahaca fresca y parmesano',
      },
      {
        day: 'Martes',
        breakfast: 'Tortitas de harina de mijo y trigo sarraceno con queso de cabra y miel',
        lunch: 'Gratinado de sorgo con espinacas, ricota y piñones',
        snack: 'Compota de manzana casera con galletas de harina de mijo',
        dinner: 'Tortitas de mijo doradas con ensalada de rúcula, tomates secos y aceitunas',
      },
      {
        day: 'Miércoles',
        breakfast: 'Muesli casero de copos de mijo, semillas de chía, coco rallado y frutos secos',
        lunch: 'Tabulé de mijo con hierbas frescas, pimiento asado y alcaparras',
        snack: 'Batido de plátano, leche de almendras y harina de mijo',
        dinner: 'Crema de calabaza con picatostes de pan de mijo tostado',
      },
      {
        day: 'Jueves',
        breakfast: 'Pan de mijo sin gluten tostado con aguacate aplastado, semillas de sésamo y limón',
        lunch: 'Bowl mediterráneo: mijo tibio, garbanzos asados, pepino, feta y salsa tahini',
        snack: 'Barritas energéticas caseras de mijo inflado, crema de cacahuete y chocolate negro',
        dinner: 'Gratinado de mijo con champiñones silvestres, nata y tomillo',
      },
      {
        day: 'Viernes',
        breakfast: 'Gachas de sorgo con leche de coco, mango fresco y trocitos de pistacho',
        lunch: 'Risotto de mijo con espárragos verdes, limón confitado y menta',
        snack: 'Tortitas de arroz inflado y mijo con hummus casero',
        dinner: 'Ensalada de mijo frío, alubias blancas, tomates, albahaca y aceite de oliva',
      },
      {
        day: 'Sábado',
        breakfast: 'Tortitas de mijo con manzanas caramelizadas y canela',
        lunch: 'Salteado de mijo con verduras del sol (berenjena, pimiento, calabacín) y hierbas provenzales',
        snack: 'Yogur vegetal con granola de mijo y coulis de frambuesa',
        dinner: 'Tortitas de sorgo rellenas de champiñones, espinacas y emmental',
      },
      {
        day: 'Domingo',
        breakfast: 'Bizcocho esponjoso de harina de mijo, almendras y ralladura de naranja',
        lunch: 'Cuscús de mijo con verduras de raíz, pasas y salsa harissa suave',
        snack: 'Frutas frescas de temporada con algunos cuadraditos de chocolate negro (sin gluten)',
        dinner: 'Risotto de mijo con calabaza asada, salvia crujiente y nuez moscada',
      },
    ],
    tips: [
      'Verifique siempre que sus mijos lleven la mención «sin gluten certificado»: la contaminación cruzada es posible durante el envasado.',
      'La harina de mijo puede sustituir a la harina de trigo en la mayoría de las recetas de tortitas y tortillas añadiendo un ligante (huevo, semillas de lino molidas).',
      'El mijo perla y el sorgo son los más versátiles para la cocina sin gluten; el teff aporta un sabor ligeramente avellanado a los panes.',
      'Para obtener un pan de mijo bien levado, combine la harina de mijo con fécula de patata (proporción 70/30) y goma guar.',
      'Conserve la harina de mijo en un recipiente hermético en el refrigerador — se enrancia más rápido que la harina de trigo por su riqueza en ácidos grasos insaturados.',
      'Los mijos tienen un índice glucémico más bajo que el arroz blanco y la harina de maíz: son una excelente opción para estabilizar la glucemia manteniéndose sin gluten.',
    ],
    disclaimer: DISCLAIMER,
  },

  // =============================================
  // 3. ESPAÑOL — Sabores hispanos con mijos
  // =============================================
  {
    slug: 'hispano',
    title: 'Sabores hispanos con mijos',
    description:
      'Un viaje culinario a través de las tradiciones culinarias del mundo hispanohablante integradas con mijos. Este plan combina platos familiares de España — gazpacho, tortilla, pisto, paella — y de Latinoamérica — arepas, empanadas, tamales — adaptados con mijos como base cerealera. Cada comida reimagina clásicos de la cocina hispana con la riqueza nutricional de los mijos, demostrando que estos cereales ancestrales se adaptan perfectamente a nuestros sabores.',
    goal: 'Descubrir cómo los mijos se integran en la cocina española y latinoamericana de forma natural y deliciosa',
    duration: '7 días',
    days: [
      {
        day: 'Lunes',
        breakfast: 'Gachas de mijo con leche, canela y miel (evocación de las gachas castellanas tradicionales)',
        lunch: 'Ensalada de mijo estilo tabulé con tomate, pepino, cebolla roja, perejil y aceite de oliva virgen extra',
        snack: 'Tortitas de mijo con queso manchego y membrillo',
        dinner: 'Sopa castellana de mijo con ajo, pimentón y huevo pochado',
      },
      {
        day: 'Martes',
        breakfast: 'Tostada de pan de mijo con tomate rallado y aceite de oliva (pan con tomate)',
        lunch: 'Mijo guisado con verduras estilo pisto manchego',
        snack: 'Batido de mijo con plátano, cacao y leche de avena',
        dinner: 'Croquetas de mijo y jamón serrano con ensalada verde',
      },
      {
        day: 'Miércoles',
        breakfast: 'Porridge de ragi (eleusina) con leche de almendras, higos secos y nueces',
        lunch: 'Paella de mijo con verduras de temporada, azafrán y guisantes',
        snack: 'Hummus casero con palitos de pan de mijo crujientes',
        dinner: 'Empanadas de mijo rellenas de espinacas, pasas y piñones',
      },
      {
        day: 'Jueves',
        breakfast: 'Gachas de mijo perla con dulce de leche y nueces pecanas',
        lunch: 'Bowl de mijo estilo mexicano: mijo tibio, frijoles negros, aguacate, maíz y salsa de cilantro-limón',
        snack: 'Galletas de harina de mijo con trocitos de chocolate',
        dinner: 'Gratinado de sorgo con pimientos del piquillo, cebolla confitada y queso de cabra',
      },
      {
        day: 'Viernes',
        breakfast: 'Tortilla de mijo con hierbas frescas (estilo tortilla española, sustituyendo la patata por mijo cocido)',
        lunch: 'Ensalada de mijo con atún, aceitunas, huevo duro y vinagreta de jerez',
        snack: 'Yogur natural con granola de mijo, coco rallado y miel',
        dinner: 'Albóndigas de mijo y lentejas en salsa de tomate casera con arroz integral',
      },
      {
        day: 'Sábado',
        breakfast: 'Churros de harina de mijo con chocolate caliente espeso',
        lunch: 'Cazuela de mijo con chorizo, pimientos y patatas (cocido con mijo)',
        snack: 'Arepas de mijo rellenas de queso fresco y aguacate',
        dinner: 'Risotto de mijo al azafrán con gambas y espárragos trigueros',
      },
      {
        day: 'Domingo',
        breakfast: 'Bizcocho de harina de mijo con naranja y aceite de oliva',
        lunch: 'Mijo a la mexicana: mijo salteado con tomate, chile, cebolla y cilantro, acompañado de frijoles refritos',
        snack: 'Frutas de temporada con trozos de turrón de mijo y almendra',
        dinner: 'Crema de zanahoria y jengibre con picatostes de mijo crujientes y un chorrito de aceite de oliva',
      },
    ],
    tips: [
      'El mijo cocido tiene una textura similar al cuscús y absorbe maravillosamente los sabores del aceite de oliva, el ajo y el pimentón, haciéndolo perfecto para la cocina española.',
      'Para las recetas que normalmente llevan arroz (paella, arroz con verduras), sustituya la mitad del arroz por mijo para una transición suave.',
      'El sorgo tiene un sabor más intenso que el mijo común — combínelo con ingredientes de carácter como el chorizo, el pimentón o el queso curado.',
      'Las harinas de mijo son excelentes para hacer arepas, tortitas y empanadas sin gluten, manteniendo una buena estructura.',
      'Remoje siempre el mijo 15-30 minutos antes de cocinar para mejorar la digestibilidad y acortar el tiempo de cocción.',
      'Los mijos se conservan mejor en recipientes herméticos de vidrio. Compre en tiendas ecológicas o herbolarios para garantizar la calidad.',
    ],
    disclaimer: DISCLAIMER,
  },
];

export function getMealPlanBySlug(slug: string): MealPlan | undefined {
  return mealPlans.find((p) => p.slug === slug);
}
