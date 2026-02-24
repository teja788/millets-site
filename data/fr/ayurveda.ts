import type { AyurvedaPageData } from '@/lib/types';

export const ayurvedaPageData: AyurvedaPageData = {
  generalClassification:
    'Les millets constituent un groupe de céréales anciennes appartenant à la famille des Poacées, remarquables par leur profil nutritionnel exceptionnel et leur adaptabilité agronomique. D\'un point de vue scientifique, ces grains se distinguent par plusieurs caractéristiques nutritionnelles majeures, documentées par l\'ANSES (Agence nationale de sécurité sanitaire de l\'alimentation), l\'USDA FoodData Central et les recommandations de l\'OMS. Premièrement, les millets sont naturellement sans gluten, ce qui en fait une alternative sûre pour les personnes atteintes de maladie coeliaque ou d\'intolérance au gluten. Deuxièmement, leur teneur en fibres alimentaires — entre 8 et 12,5 g pour 100 g selon les variétés — dépasse largement celle du riz blanc (0,4 g) et rivalise avec celle du blé complet. Troisièmement, leur richesse en minéraux essentiels est remarquable : le mil perlé apporte jusqu\'à 242 mg de magnésium pour 100 g, l\'éleusine (ragi) fournit 344 mg de calcium, et le sorgho contient 4,4 mg de fer. Quatrièmement, la plupart des millets présentent un indice glycémique bas à modéré (entre 54 et 68), ce qui contribue à une libération progressive du glucose dans le sang, conformément aux recommandations de l\'OMS pour la prévention du diabète de type 2. Enfin, leur profil en acides aminés essentiels, notamment la méthionine et la cystéine, complète avantageusement celui des légumineuses. Ces propriétés nutritionnelles, validées par de nombreuses études publiées dans des revues à comité de lecture, positionnent les millets comme des alliés précieux pour la santé cardiovasculaire, la gestion du poids et l\'équilibre glycémique.',

  doshaGuide: [
    {
      dosha: 'Vata',
      recommended: ['pearl-millet', 'finger-millet'],
      moderate: ['sorghum', 'little-millet'],
      avoid: [],
      description:
        'La santé cardiovasculaire représente un enjeu majeur de santé publique en France, où les maladies cardio-vasculaires constituent la deuxième cause de mortalité. Les millets offrent des atouts nutritionnels scientifiquement documentés pour la protection du cœur et des vaisseaux. Le mil perlé (Pennisetum glaucum) se distingue par sa teneur exceptionnelle en magnésium (242 mg/100 g selon l\'USDA FoodData Central), un minéral essentiel à la régulation du rythme cardiaque et à la relaxation des parois vasculaires. Des méta-analyses publiées dans le Journal of the American Heart Association ont démontré qu\'un apport suffisant en magnésium réduit le risque d\'accident vasculaire cérébral de 12 %. L\'éleusine (Eleusine coracana), quant à elle, apporte 344 mg de calcium pour 100 g — un apport supérieur à celui du lait — contribuant ainsi à la régulation de la pression artérielle. Par ailleurs, les fibres solubles présentes dans ces deux millets favorisent la diminution du cholestérol LDL en réduisant sa réabsorption intestinale, un mécanisme validé par l\'EFSA (Autorité européenne de sécurité des aliments). Le potassium abondant dans le mil perlé (390 mg/100 g) participe également au maintien d\'une tension artérielle normale. Pour optimiser ces bienfaits, il est recommandé de consommer ces millets complets, en remplacement partiel des céréales raffinées, à raison de deux à trois portions par semaine.',
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
        'La gestion de la glycémie et la prévention du diabète de type 2 constituent un défi de santé publique croissant. L\'OMS estime que 422 millions de personnes vivent avec le diabète dans le monde, et les habitudes alimentaires jouent un rôle déterminant dans sa prévention. Plusieurs variétés de millets présentent un indice glycémique (IG) bas à modéré, documenté par des études publiées dans le British Journal of Nutrition et Diabetes Care. L\'éleusine (ragi) possède un IG d\'environ 54, grâce à sa richesse en fibres (11,5 g/100 g) et en polyphénols qui ralentissent l\'absorption intestinale du glucose. Le petit mil (Panicum sumatrense, IG ~56) et le millet des oiseaux (Echinochloa frumentacea, IG ~55) se caractérisent par une libération glucidique lente, favorisant un pic glycémique postprandial atténué. Le millet kodo (Paspalum scrobiculatum) contient des composés phénoliques et des fibres qui améliorent la sensibilité à l\'insuline. Des essais cliniques randomisés ont montré qu\'une substitution régulière du riz blanc par ces millets entraîne une réduction significative de l\'hémoglobine glyquée (HbA1c) de 0,3 à 0,5 % sur trois mois. L\'ANSES recommande d\'augmenter la consommation de céréales complètes, et ces millets à faible IG s\'inscrivent parfaitement dans cette préconisation.',
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
        'La gestion du poids et l\'optimisation du métabolisme sont des préoccupations centrales dans les sociétés modernes. Selon l\'ANSES, un Français sur deux est en surpoids ou obèse, et l\'alimentation représente le levier le plus efficace pour inverser cette tendance. Certaines variétés de millets se révèlent particulièrement adaptées aux stratégies de gestion pondérale grâce à leur faible densité calorique combinée à une haute teneur en fibres. Le millet des Indes (Setaria italica) n\'apporte que 351 kcal pour 100 g tout en fournissant 8 g de fibres, ce qui favorise une satiété prolongée et réduit les apports caloriques totaux. Le millet kodo (Paspalum scrobiculatum) se distingue par sa richesse en fibres insolubles (9 g/100 g) qui accélèrent le transit intestinal et limitent l\'absorption des graisses. Le millet brun (Brachiaria ramosa) et le millet commun (Panicum miliaceum) complètent cette sélection grâce à leur profil énergétique modéré et leur capacité à maintenir une glycémie stable, évitant ainsi les fringales liées aux pics d\'insuline. Des études publiées dans le European Journal of Clinical Nutrition ont démontré que l\'intégration régulière de ces millets dans l\'alimentation, en remplacement des féculents raffinés, contribue à une réduction de l\'indice de masse corporelle et à une amélioration du profil lipidique sanguin.',
    },
  ],

  seasonalGuide: [
    {
      season: 'Printemps',
      months: 'Mars - Mai',
      recommended: ['foxtail-millet', 'kodo-millet', 'browntop-millet'],
      reasoning:
        'Au printemps, l\'organisme sort de la période hivernale marquée par une alimentation plus riche et une activité physique souvent réduite. C\'est le moment idéal pour alléger son assiette et soutenir les fonctions d\'élimination naturelle du corps. Le millet des Indes, le millet kodo et le millet brun sont les variétés les plus appropriées pour cette saison, en raison de leur légèreté calorique et de leur haute teneur en fibres insolubles qui stimulent le transit intestinal. Ces millets favorisent l\'élimination des toxines accumulées et soutiennent le foie dans ses fonctions de détoxification printanière. Leur richesse en antioxydants — notamment les polyphénols et les flavonoïdes — contribue à la protection cellulaire après les mois d\'hiver. Privilégiez des préparations légères : salades tièdes de millets avec des légumes verts de saison, taboulés ou galettes fines cuites avec un minimum de matière grasse.',
    },
    {
      season: 'Été',
      months: 'Juin - Août',
      recommended: ['finger-millet', 'little-millet', 'barnyard-millet'],
      reasoning:
        'Pendant les chaleurs estivales, les besoins en hydratation augmentent et la digestion peut se trouver ralentie. L\'éleusine (ragi) est particulièrement adaptée à cette période grâce à sa richesse en calcium (344 mg/100 g), un minéral dont les pertes s\'accentuent avec la transpiration. Le petit mil et le millet des oiseaux, légers et faciles à digérer, n\'alourdissent pas l\'organisme par temps chaud. Ces variétés peuvent être préparées en porridges froids, en boissons rafraîchissantes fermentées ou en salades estivales accompagnées de concombre, menthe et citron. L\'éleusine se prête également à la préparation de smoothies nutritifs. L\'apport en potassium de ces millets aide à compenser les pertes électrolytiques liées à la sudation, tandis que leur indice glycémique bas assure une énergie stable tout au long des journées chaudes.',
    },
    {
      season: 'Automne',
      months: 'Septembre - Novembre',
      recommended: ['sorghum', 'foxtail-millet', 'proso-millet'],
      reasoning:
        'L\'automne marque une transition vers des températures plus fraîches et des journées plus courtes. C\'est la saison des récoltes, propice à la consommation de céréales réconfortantes et nourrissantes. Le sorgho, avec ses 329 kcal pour 100 g et sa teneur notable en fer (4,4 mg/100 g), apporte l\'énergie nécessaire pour affronter la baisse des températures tout en soutenant l\'immunité grâce à ses polyphénols. Le millet des Indes et le millet commun offrent un équilibre entre légèreté et valeur nutritive, idéal pour préparer l\'organisme à l\'hiver sans le surcharger. Préparez ces millets en plats chauds : risottos crémeux, soupes épaisses avec des légumes d\'automne (courge, panais, carottes), ou en accompagnement de plats mijotés. L\'ajout d\'épices comme le curcuma, le gingembre et la cannelle renforce les propriétés anti-inflammatoires de ces céréales.',
    },
    {
      season: 'Hiver',
      months: 'Décembre - Février',
      recommended: ['pearl-millet', 'sorghum', 'finger-millet'],
      reasoning:
        'L\'hiver exige une alimentation plus dense en énergie pour maintenir la température corporelle et soutenir le système immunitaire. Le mil perlé est la céréale hivernale par excellence : avec 378 kcal pour 100 g, une teneur élevée en magnésium (242 mg) et en zinc (3,1 mg), il fournit une énergie soutenue et renforce les défenses naturelles. Le sorgho, riche en fer et en polyphénols antioxydants, contribue à lutter contre la fatigue hivernale et le stress oxydatif accentué par le manque de lumière. L\'éleusine complète cette sélection grâce à son calcium qui soutient la santé osseuse, particulièrement importante en hiver lorsque la synthèse de vitamine D est réduite. Préparez ces millets en galettes chaudes, en porridges épais au lait végétal, en gratins ou incorporés dans des pains maison pour des repas réconfortants et nutritifs.',
    },
  ],

  disclaimer:
    'Les informations nutritionnelles et de santé présentées sur cette page sont fournies à titre informatif uniquement et sont issues de données publiées par l\'ANSES, l\'USDA FoodData Central, l\'OMS et des revues scientifiques à comité de lecture. Elles ne constituent en aucun cas un avis médical, un diagnostic ou une prescription diététique personnalisée. Chaque individu ayant des besoins nutritionnels spécifiques, il est vivement recommandé de consulter un médecin, un diététicien-nutritionniste diplômé ou un professionnel de santé qualifié avant de modifier significativement son alimentation, en particulier en cas de diabète, de maladies cardiovasculaires, d\'allergies alimentaires ou de tout autre trouble de santé.',
};
