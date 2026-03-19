import type { AyurvedaPageData } from '@/lib/types';

export const ayurvedaPageData: AyurvedaPageData = {
  generalClassification:
    'Los mijos constituyen un grupo de cereales ancestrales pertenecientes a la familia de las Poáceas, destacables por su perfil nutricional excepcional y su adaptabilidad agronómica. Desde un punto de vista científico, estos granos se distinguen por varias características nutricionales fundamentales, documentadas por la OMS, el USDA FoodData Central y la EFSA (Autoridad Europea de Seguridad Alimentaria). En primer lugar, los mijos son naturalmente libres de gluten, lo que los convierte en una alternativa segura para las personas con enfermedad celíaca o intolerancia al gluten. En segundo lugar, su contenido en fibra dietética — entre 8 y 12,5 g por 100 g según las variedades — supera ampliamente al del arroz blanco (0,4 g) y rivaliza con el del trigo integral. En tercer lugar, su riqueza en minerales esenciales es notable: el mijo perla aporta hasta 242 mg de magnesio por 100 g, el ragi (eleusina) proporciona 344 mg de calcio, y el sorgo contiene 4,4 mg de hierro. En cuarto lugar, la mayoría de los mijos presentan un índice glucémico bajo a moderado (entre 54 y 68), lo que contribuye a una liberación progresiva de glucosa en la sangre, conforme a las recomendaciones de la OMS para la prevención de la diabetes tipo 2. Finalmente, su perfil en aminoácidos esenciales, en particular la metionina y la cisteína, complementa ventajosamente al de las legumbres. Estas propiedades nutricionales, validadas por numerosos estudios publicados en revistas científicas revisadas por pares, posicionan a los mijos como aliados valiosos para la salud cardiovascular, la gestión del peso y el equilibrio glucémico.',

  doshaGuide: [
    {
      dosha: 'Vata',
      recommended: ['pearl-millet', 'finger-millet'],
      moderate: ['sorghum', 'little-millet'],
      avoid: [],
      description:
        'La salud cardiovascular representa un desafío mayor de salud pública a nivel mundial, donde las enfermedades cardiovasculares constituyen la primera causa de mortalidad. Los mijos ofrecen ventajas nutricionales científicamente documentadas para la protección del corazón y los vasos sanguíneos. El mijo perla (Pennisetum glaucum) se distingue por su contenido excepcional en magnesio (242 mg/100 g según el USDA FoodData Central), un mineral esencial para la regulación del ritmo cardíaco y la relajación de las paredes vasculares. Metaanálisis publicados en el Journal of the American Heart Association han demostrado que un aporte suficiente de magnesio reduce el riesgo de accidente cerebrovascular en un 12 %. La eleusina (Eleusine coracana), por su parte, aporta 344 mg de calcio por 100 g — un aporte superior al de la leche — contribuyendo así a la regulación de la presión arterial. Además, las fibras solubles presentes en estos dos mijos favorecen la disminución del colesterol LDL al reducir su reabsorción intestinal, un mecanismo validado por la EFSA. El potasio abundante en el mijo perla (390 mg/100 g) participa igualmente en el mantenimiento de una tensión arterial normal. Para optimizar estos beneficios, se recomienda consumir estos mijos integrales, en reemplazo parcial de los cereales refinados, a razón de dos a tres porciones por semana.',
    },
    {
      dosha: 'Pitta',
      recommended: [
        'finger-millet',
        'little-millet',
        'barnyard-millet',
        'kodo-millet',
      ],
      moderate: ['sorghum', 'proso-millet'],
      avoid: [],
      description:
        'La gestión de la glucemia y la prevención de la diabetes tipo 2 constituyen un desafío creciente de salud pública. La OMS estima que 422 millones de personas viven con diabetes en el mundo, y los hábitos alimentarios desempeñan un papel determinante en su prevención. Diversas variedades de mijos presentan un índice glucémico (IG) bajo a moderado, documentado por estudios publicados en el British Journal of Nutrition y Diabetes Care. La eleusina (ragi) posee un IG de aproximadamente 54, gracias a su riqueza en fibra (11,5 g/100 g) y en polifenoles que ralentizan la absorción intestinal de glucosa. El mijo menor (Panicum sumatrense, IG ~56) y el mijo de corral (Echinochloa frumentacea, IG ~55) se caracterizan por una liberación glucídica lenta, favoreciendo un pico glucémico postprandial atenuado. El mijo kodo (Paspalum scrobiculatum) contiene compuestos fenólicos y fibras que mejoran la sensibilidad a la insulina. Ensayos clínicos aleatorizados han demostrado que una sustitución regular del arroz blanco por estos mijos conlleva una reducción significativa de la hemoglobina glicosilada (HbA1c) de 0,3 a 0,5 % en tres meses. La OMS recomienda aumentar el consumo de cereales integrales, y estos mijos de bajo IG se ajustan perfectamente a esta recomendación.',
    },
    {
      dosha: 'Kapha',
      recommended: [
        'foxtail-millet',
        'kodo-millet',
        'browntop-millet',
        'proso-millet',
      ],
      moderate: ['barnyard-millet', 'little-millet'],
      avoid: ['pearl-millet'],
      description:
        'La gestión del peso y la optimización del metabolismo son preocupaciones centrales en las sociedades modernas. Según la OMS, más de mil millones de personas en el mundo padecen obesidad, y la alimentación representa la herramienta más eficaz para revertir esta tendencia. Ciertas variedades de mijos resultan particularmente adaptadas a las estrategias de control de peso gracias a su baja densidad calórica combinada con un alto contenido en fibra. El mijo de cola de zorro (Setaria italica) aporta solo 351 kcal por 100 g mientras proporciona 8 g de fibra, lo que favorece una saciedad prolongada y reduce la ingesta calórica total. El mijo kodo (Paspalum scrobiculatum) se distingue por su riqueza en fibras insolubles (9 g/100 g) que aceleran el tránsito intestinal y limitan la absorción de grasas. El mijo browntop (Brachiaria ramosa) y el mijo común (Panicum miliaceum) completan esta selección gracias a su perfil energético moderado y su capacidad para mantener una glucemia estable, evitando así los antojos asociados a los picos de insulina. Estudios publicados en el European Journal of Clinical Nutrition han demostrado que la integración regular de estos mijos en la alimentación, en sustitución de los almidones refinados, contribuye a una reducción del índice de masa corporal y a una mejora del perfil lipídico sanguíneo.',
    },
  ],

  seasonalGuide: [
    {
      season: 'Primavera',
      months: 'Marzo - Mayo',
      recommended: ['foxtail-millet', 'kodo-millet', 'browntop-millet'],
      reasoning:
        'En primavera, el organismo sale del período invernal marcado por una alimentación más rica y una actividad física a menudo reducida. Es el momento ideal para aligerar el plato y apoyar las funciones de eliminación natural del cuerpo. El mijo de cola de zorro, el mijo kodo y el mijo browntop son las variedades más apropiadas para esta estación, debido a su ligereza calórica y su alto contenido en fibras insolubles que estimulan el tránsito intestinal. Estos mijos favorecen la eliminación de toxinas acumuladas y apoyan al hígado en sus funciones de desintoxicación primaveral. Su riqueza en antioxidantes — especialmente polifenoles y flavonoides — contribuye a la protección celular tras los meses de invierno. Privilegie preparaciones ligeras: ensaladas tibias de mijos con verduras de temporada, tabulés o tortitas finas cocinadas con un mínimo de materia grasa.',
    },
    {
      season: 'Verano',
      months: 'Junio - Agosto',
      recommended: ['finger-millet', 'little-millet', 'barnyard-millet'],
      reasoning:
        'Durante los calores estivales, las necesidades de hidratación aumentan y la digestión puede verse ralentizada. La eleusina (ragi) es particularmente adecuada para este período gracias a su riqueza en calcio (344 mg/100 g), un mineral cuyas pérdidas se acentúan con la transpiración. El mijo menor y el mijo de corral, ligeros y fáciles de digerir, no sobrecargan el organismo en clima cálido. Estas variedades pueden prepararse en gachas frías, en bebidas refrescantes fermentadas o en ensaladas veraniegas acompañadas de pepino, menta y limón. La eleusina se presta también a la preparación de batidos nutritivos. El aporte de potasio de estos mijos ayuda a compensar las pérdidas electrolíticas ligadas a la sudoración, mientras que su bajo índice glucémico asegura una energía estable a lo largo de los días calurosos.',
    },
    {
      season: 'Otoño',
      months: 'Septiembre - Noviembre',
      recommended: ['sorghum', 'foxtail-millet', 'proso-millet'],
      reasoning:
        'El otoño marca una transición hacia temperaturas más frescas y días más cortos. Es la estación de las cosechas, propicia para el consumo de cereales reconfortantes y nutritivos. El sorgo, con sus 329 kcal por 100 g y su contenido notable en hierro (4,4 mg/100 g), aporta la energía necesaria para afrontar el descenso de las temperaturas mientras sostiene la inmunidad gracias a sus polifenoles. El mijo de cola de zorro y el mijo común ofrecen un equilibrio entre ligereza y valor nutritivo, ideal para preparar el organismo para el invierno sin sobrecargarlo. Prepare estos mijos en platos calientes: risottos cremosos, sopas espesas con verduras de otoño (calabaza, chirivía, zanahorias), o como acompañamiento de platos estofados. La adición de especias como cúrcuma, jengibre y canela refuerza las propiedades antiinflamatorias de estos cereales.',
    },
    {
      season: 'Invierno',
      months: 'Diciembre - Febrero',
      recommended: ['pearl-millet', 'sorghum', 'finger-millet'],
      reasoning:
        'El invierno exige una alimentación más densa en energía para mantener la temperatura corporal y sostener el sistema inmunitario. El mijo perla es el cereal invernal por excelencia: con 378 kcal por 100 g, un alto contenido en magnesio (242 mg) y zinc (3,1 mg), proporciona energía sostenida y refuerza las defensas naturales. El sorgo, rico en hierro y polifenoles antioxidantes, contribuye a combatir la fatiga invernal y el estrés oxidativo acentuado por la falta de luz. La eleusina completa esta selección gracias a su calcio que sostiene la salud ósea, particularmente importante en invierno cuando la síntesis de vitamina D está reducida. Prepare estos mijos en tortitas calientes, gachas espesas con leche vegetal, gratinados o incorporados en panes caseros para comidas reconfortantes y nutritivas.',
    },
  ],

  disclaimer:
    'La información nutricional y de salud presentada en esta página se proporciona únicamente con fines informativos y procede de datos publicados por la OMS, el USDA FoodData Central, la EFSA y revistas científicas revisadas por pares. En ningún caso constituye un consejo médico, un diagnóstico ni una prescripción dietética personalizada. Dado que cada individuo tiene necesidades nutricionales específicas, se recomienda encarecidamente consultar a un médico, un dietista-nutricionista diplomado o un profesional de la salud cualificado antes de modificar significativamente su alimentación, en particular en caso de diabetes, enfermedades cardiovasculares, alergias alimentarias o cualquier otro trastorno de salud.',
};
