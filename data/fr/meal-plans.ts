import type { MealPlan } from '@/lib/types';

const DISCLAIMER =
  'Ce plan alimentaire est fourni à titre indicatif uniquement. Il ne remplace pas les conseils d\u2019un professionnel de santé. Consultez un diététicien ou votre médecin avant tout changement alimentaire significatif, en particulier en cas de pathologie existante.';

export const mealPlans: MealPlan[] = [
  // =============================================
  // 1. DÉCOUVERTE — Semaine découverte des millets
  // =============================================
  {
    slug: 'decouverte',
    title: 'Semaine découverte des millets',
    description:
      'Une introduction douce et progressive aux millets pour ceux qui n\u2019en ont jamais cuisiné. Ce plan mélange des recettes françaises familières — crêpes, gratins, soupes — avec des préparations ouest-africaines traditionnelles comme la bouillie de mil et le couscous de mil. Chaque jour, un ou deux repas sont remplacés par des plats à base de millet, tandis que les autres restent inchangés. En fin de semaine, vous aurez découvert cinq variétés de millets sans bouleverser vos habitudes.',
    goal: 'Introduction douce aux millets pour les débutants, en mêlant cuisine française et saveurs africaines',
    duration: '7 jours',
    days: [
      {
        day: 'Lundi',
        breakfast: 'Votre petit-déjeuner habituel',
        lunch: 'Taboulé de millet perlé aux herbes fraîches, concombre, tomates cerises et jus de citron',
        snack: 'Galette de millet soufflé au miel et graines de sésame',
        dinner: 'Votre repas habituel',
      },
      {
        day: 'Mardi',
        breakfast: 'Porridge de millet perlé au lait tiède, banane et cannelle',
        lunch: 'Votre repas habituel',
        snack: 'Biscuits sablés à la farine de millet et noisettes',
        dinner: 'Votre repas habituel',
      },
      {
        day: 'Mercredi',
        breakfast: 'Votre petit-déjeuner habituel',
        lunch: 'Risotto de millet aux champignons, parmesan et persil frais',
        snack: 'Bouillie de mil tiède sucrée au lait concentré (recette ouest-africaine)',
        dinner: 'Votre repas habituel',
      },
      {
        day: 'Jeudi',
        breakfast: 'Crêpes de farine de millet garnies de compote de pommes maison',
        lunch: 'Votre repas habituel',
        snack: 'Poignée d\u2019amandes et flocons de millet soufflé',
        dinner: 'Votre repas habituel',
      },
      {
        day: 'Vendredi',
        breakfast: 'Votre petit-déjeuner habituel',
        lunch: 'Couscous de mil aux légumes de saison et pois chiches à la sénégalaise',
        snack: 'Yaourt nature avec granola de millet et fruits rouges',
        dinner: 'Votre repas habituel',
      },
      {
        day: 'Samedi',
        breakfast: 'Bouillie de mil onctueuse au lait, vanille et miel',
        lunch: 'Gratin de sorgho aux légumes d\u2019automne, béchamel légère et gruyère',
        snack: 'Galettes de millet aux fines herbes et fromage frais',
        dinner: 'Soupe de millet perlé aux poireaux, carottes et thym',
      },
      {
        day: 'Dimanche',
        breakfast: 'Crêpes de millet aux myrtilles et sirop d\u2019érable',
        lunch: 'Taboulé de millet à la menthe, grenade et feta',
        snack: 'Fondé sénégalais (boules de millet au lait caillé sucré)',
        dinner: 'Galettes de millet dorées servies avec ratatouille provençale',
      },
    ],
    tips: [
      'Commencez par remplacer un seul repas par jour avec un plat à base de millet la première semaine.',
      'Faites tremper les millets 15 à 30 minutes avant cuisson : ils seront plus digestes et cuiront plus vite.',
      'Mélangez le millet avec votre riz ou semoule habituel (moitié-moitié) si le changement complet vous semble trop brusque.',
      'Le millet perlé (mil) a un goût doux et neutre, idéal pour débuter ; le sorgho est plus corsé et convient aux gratins.',
      'Buvez suffisamment d\u2019eau : les millets sont riches en fibres et votre système digestif a besoin de temps pour s\u2019adapter.',
      'Ne vous inquiétez pas si le goût vous surprend au début — la plupart des gens apprécient les millets après deux ou trois essais.',
    ],
    disclaimer: DISCLAIMER,
  },

  // =============================================
  // 2. SANS GLUTEN — Plan sans gluten aux millets
  // =============================================
  {
    slug: 'sans-gluten',
    title: 'Plan sans gluten aux millets',
    description:
      'Une semaine complète 100 % sans gluten où chaque repas repose sur les millets naturellement exempts de gluten. Ce plan propose des recettes d\u2019inspiration française et méditerranéenne — crêpes, galettes, gratins, risottos — entièrement réalisées avec des farines et grains de millet, sorgho et teff. Fini la monotonie du riz et du maïs : les millets apportent variété, saveur et une densité nutritionnelle remarquable à votre alimentation sans gluten.',
    goal: 'Semaine complète 100 % sans gluten à base de millets, avec des recettes françaises et méditerranéennes',
    duration: '7 jours',
    days: [
      {
        day: 'Lundi',
        breakfast: 'Porridge de millet perlé aux amandes effilées, miel et poire pochée',
        lunch: 'Salade tiède de millet aux lentilles vertes du Puy, noix et vinaigrette au citron',
        snack: 'Crackers de farine de sorgho aux graines de tournesol et romarin',
        dinner: 'Risotto de millet aux courgettes grillées, basilic frais et parmesan',
      },
      {
        day: 'Mardi',
        breakfast: 'Crêpes de farine de millet et sarrasin garnies de fromage de chèvre et miel',
        lunch: 'Gratin de sorgho aux épinards, ricotta et pignons de pin',
        snack: 'Compote de pommes maison avec biscuits de farine de millet',
        dinner: 'Galettes de millet dorées avec salade de roquette, tomates séchées et olives',
      },
      {
        day: 'Mercredi',
        breakfast: 'Muesli maison de flocons de millet, graines de chia, noix de coco râpée et fruits secs',
        lunch: 'Taboulé de millet aux herbes fraîches, poivron grillé et câpres',
        snack: 'Smoothie banane, lait d\u2019amande et farine de millet',
        dinner: 'Soupe veloutée de potimarron avec croûtons de pain de millet grillé',
      },
      {
        day: 'Jeudi',
        breakfast: 'Pain de millet sans gluten toasté avec avocat écrasé, graines de sésame et citron',
        lunch: 'Bowl méditerranéen : millet tiède, pois chiches rôtis, concombre, feta et sauce tahini',
        snack: 'Barres énergétiques maison au millet soufflé, beurre de cacahuète et chocolat noir',
        dinner: 'Gratin de millet aux champignons forestiers, crème fraîche et thym',
      },
      {
        day: 'Vendredi',
        breakfast: 'Porridge de sorgho au lait de coco, mangue fraîche et éclats de pistache',
        lunch: 'Risotto de millet aux asperges vertes, citron confit et menthe',
        snack: 'Galettes de riz soufflé et millet avec houmous maison',
        dinner: 'Salade composée de millet froid, haricots blancs, tomates, basilic et huile d\u2019olive',
      },
      {
        day: 'Samedi',
        breakfast: 'Crêpes de millet aux pommes caramélisées et cannelle',
        lunch: 'Poêlée de millet aux légumes du soleil (aubergine, poivron, courgette) et herbes de Provence',
        snack: 'Yaourt végétal avec granola de millet et coulis de framboise',
        dinner: 'Galettes de sorgho farcies aux champignons, épinards et emmental',
      },
      {
        day: 'Dimanche',
        breakfast: 'Gâteau moelleux à la farine de millet, amandes et zeste d\u2019orange',
        lunch: 'Couscous de millet aux légumes racines, raisins secs et sauce harissa douce',
        snack: 'Fruits frais de saison avec quelques carrés de chocolat noir (sans gluten)',
        dinner: 'Risotto de millet au potiron rôti, sauge croustillante et noix de muscade',
      },
    ],
    tips: [
      'Vérifiez toujours que vos millets portent la mention « sans gluten certifié » : la contamination croisée est possible lors du conditionnement.',
      'La farine de millet peut remplacer la farine de blé dans la plupart des recettes de crêpes et galettes en ajoutant un liant (oeuf, graines de lin moulues).',
      'Le millet perlé et le sorgho sont les plus polyvalents pour la cuisine sans gluten ; le teff apporte une saveur légèrement noisettée aux pains.',
      'Pour obtenir un pain de millet bien levé, combinez la farine de millet avec de la fécule de pomme de terre (ratio 70/30) et de la gomme de guar.',
      'Conservez la farine de millet dans un récipient hermétique au réfrigérateur — elle rancit plus vite que la farine de blé car elle est riche en acides gras insaturés.',
      'Les millets ont un indice glycémique plus bas que le riz blanc et la farine de maïs : ils sont un excellent choix pour stabiliser la glycémie tout en restant sans gluten.',
    ],
    disclaimer: DISCLAIMER,
  },

  // =============================================
  // 3. AFRICAIN — Saveurs d'Afrique aux millets
  // =============================================
  {
    slug: 'africain',
    title: 'Saveurs d\u2019Afrique aux millets',
    description:
      'Un voyage culinaire à travers les traditions africaines du millet, du Sahel à la savane. Ce plan met à l\u2019honneur les préparations ancestrales ouest-africaines — bouillie de mil, thiéré, tô, fura, dégué, fondé — tout en proposant des adaptations accessibles avec les ingrédients disponibles en France et au Québec. Chaque repas raconte une histoire : celle de populations qui cultivent et transforment le mil depuis plus de cinq mille ans.',
    goal: 'Découvrir la richesse culinaire africaine à travers les millets et les préparations traditionnelles du continent',
    duration: '7 jours',
    days: [
      {
        day: 'Lundi',
        breakfast: 'Bouillie de mil onctueuse au lait, sucre et fleur d\u2019oranger (Sénégal)',
        lunch: 'Thiéré aux légumes : couscous de mil vapeur avec sauce de légumes et viande (Sénégal/Mauritanie)',
        snack: 'Fura : boules de mil épicées au gingembre et poivre, servies avec du lait caillé (Nigeria)',
        dinner: 'Soupe de millet aux feuilles de baobab et poisson fumé (inspiration sahélienne)',
      },
      {
        day: 'Mardi',
        breakfast: 'Fondé : boules de millet au lait caillé sucré, vanille et muscade (Sénégal)',
        lunch: 'Tô de mil : pâte de millet fermenté accompagnée de sauce gombo et viande (Mali/Burkina Faso)',
        snack: 'Zoom-koom : boisson rafraîchissante de farine de mil, gingembre, citron et miel (Burkina Faso)',
        dinner: 'Couscous de mil aux légumes-feuilles, arachides pilées et piment doux',
      },
      {
        day: 'Mercredi',
        breakfast: 'Bouillie de mil au pain de singe (baobab) et jus de citron',
        lunch: 'Millet sauté aux oignons caramélisés, poulet grillé et sauce arachide (inspiration guinéenne)',
        snack: 'Dégué : yaourt épais mélangé à des perles de mil grillé, sucre et vanille (Mali)',
        dinner: 'Galettes de mil croustillantes servies avec ragoût d\u2019aubergines et tomates',
      },
      {
        day: 'Jeudi',
        breakfast: 'Porridge de mil au moringa, miel et lait de coco',
        lunch: 'Thiéré au poisson : couscous de mil avec sauce de poisson frais, légumes et tamarin (Sénégal)',
        snack: 'Beignets de mil frits à la banane plantain et cannelle',
        dinner: 'Tô léger de sorgho avec sauce d\u2019oseille de Guinée (bissap) et boeuf mijoté',
      },
      {
        day: 'Vendredi',
        breakfast: 'Bouillie de mil au lait concentré, arachides grillées concassées et miel',
        lunch: 'Riz de mil pilaf aux épices africaines (poivre de Selim, gingembre, muscade) et légumes',
        snack: 'Fura da nono : boules de mil mixées avec du lait fermenté, sucre et gingembre (Nigeria)',
        dinner: 'Couscous de mil royal aux légumes d\u2019hiver et merguez grillées (adaptation franco-africaine)',
      },
      {
        day: 'Samedi',
        breakfast: 'Dégué matinal : perles de mil grillé au yaourt grec, coulis de mangue et menthe',
        lunch: 'Mafé de poulet au beurre de cacahuète servi sur lit de millet cuit vapeur',
        snack: 'Zoom-koom glacé au tamarin et sucre de canne',
        dinner: 'Gratin de mil aux patates douces rôties, oignons confits et fromage fondu (fusion franco-africaine)',
      },
      {
        day: 'Dimanche',
        breakfast: 'Fondé festif au lait de coco, mangue fraîche et noix de cajou grillées',
        lunch: 'Thiéboudiène revisité : couscous de mil (à la place du riz) avec poisson braisé et légumes farcis',
        snack: 'Biscuits croquants au mil, gingembre et sésame noir',
        dinner: 'Soupe de mil au poulet fermier, patate douce, gingembre et coriandre fraîche',
      },
    ],
    tips: [
      'Le mil (millet perlé) est la céréale de base en Afrique de l\u2019Ouest : choisissez-le en grain entier ou en farine dans les épiceries africaines et les boutiques en ligne spécialisées.',
      'Pour réussir le tô, versez la farine de mil en pluie fine dans l\u2019eau bouillante en remuant constamment avec une spatule en bois pour éviter les grumeaux.',
      'La fermentation est clé dans la cuisine africaine du mil : laissez tremper la farine 12 à 24 heures pour développer les saveurs et améliorer la digestibilité.',
      'Le zoom-koom et la bouillie de mil se préparent aussi bien chauds que froids — en été, servez-les glacés pour une boisson nourrissante et rafraîchissante.',
      'L\u2019arachide est le compagnon naturel du mil en Afrique : la pâte d\u2019arachide enrichit les sauces en protéines et en acides gras essentiels.',
      'Si vous ne trouvez pas de farine de mil, vous pouvez moudre du millet perlé entier au blender haute puissance puis tamiser pour obtenir une farine fine.',
    ],
    disclaimer: DISCLAIMER,
  },
];

export function getMealPlanBySlug(slug: string): MealPlan | undefined {
  return mealPlans.find((p) => p.slug === slug);
}
