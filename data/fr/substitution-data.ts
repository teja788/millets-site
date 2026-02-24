import type { SubstitutionEntry } from '@/lib/types';

export const substitutionEntries: SubstitutionEntry[] = [
  // =============================================
  // 1. RIZ BLANC
  // =============================================
  {
    conventionalGrain: 'Riz blanc',
    milletSubstitutes: [
      {
        millet: 'foxtail-millet',
        milletName: 'Millet des oiseaux',
        ratio: '1:1',
        notes:
          'Le millet des oiseaux est le substitut le plus proche du riz blanc, tant par son apparence que par sa méthode de cuisson. Utilisez le même volume d\'eau que pour le riz (ratio 1:2 millet/eau) et faites cuire à feu doux jusqu\'à absorption complète. Le grain cuit présente une saveur délicatement noisettée et une texture légèrement plus ferme que le riz. Rincez les grains à l\'eau froide avant cuisson pour éliminer l\'excès d\'amidon et obtenir des grains bien détachés.',
        bestFor: ['pilaf', 'risotto', 'taboulé', 'gratin'],
        difficulty: 'easy',
      },
      {
        millet: 'little-millet',
        milletName: 'Petit mil',
        ratio: '1:1',
        notes:
          'Le petit mil cuit rapidement et offre une texture légère et aérée très semblable à celle du riz rond. Il absorbe remarquablement bien les saveurs et constitue un remplacement direct dans les plats à base de riz. Faites tremper les grains pendant 15 à 20 minutes avant la cuisson pour obtenir une texture plus moelleuse. Ce millet se marie parfaitement avec les sauces, les légumes braisés et les bouillons aromatiques typiques de la cuisine française.',
        bestFor: ['risotto', 'pilaf', 'soupe', 'gratin'],
        difficulty: 'easy',
      },
      {
        millet: 'barnyard-millet',
        milletName: 'Millet des rizières',
        ratio: '1:1',
        notes:
          'Le millet des rizières possède un index glycémique très bas et un apport calorique réduit, ce qui en fait une excellente alternative au riz pour le contrôle du poids. Il cuit en environ 15 minutes et présente une texture légèrement plus ferme et plus mâchée que le riz. Son goût neutre lui permet d\'absorber les arômes des épices, des herbes de Provence et des fonds de sauce. Utilisez un ratio de 1:2 (millet/eau) et cuisez à couvert à feu doux.',
        bestFor: ['pilaf', 'soupe', 'porridge', 'gratin'],
        difficulty: 'easy',
      },
      {
        millet: 'kodo-millet',
        milletName: 'Millet kodo',
        ratio: '1:1',
        notes:
          'Le millet kodo a une saveur douce et légèrement terreuse. Il conserve parfaitement sa forme après cuisson, ce qui le rend idéal pour les plats où l\'on souhaite des grains bien distincts. Utilisez un peu moins d\'eau que pour le riz (ratio 1:1,75 millet/eau) afin d\'éviter une texture trop molle. Le grain devient léger et aéré lorsqu\'il est correctement cuit. Riche en fibres alimentaires, il accompagne à merveille les ragoûts et les plats en sauce.',
        bestFor: ['pilaf', 'risotto', 'taboulé', 'gratin'],
        difficulty: 'easy',
      },
    ],
  },

  // =============================================
  // 2. FARINE DE BLÉ (T55/T65)
  // =============================================
  {
    conventionalGrain: 'Farine de blé (T55/T65)',
    milletSubstitutes: [
      {
        millet: 'finger-millet',
        milletName: 'Farine d\'éleusine',
        ratio: '3:4',
        notes:
          'Remplacez 3 parts de farine de blé par 4 parts de farine d\'éleusine, car celle-ci est plus dense et absorbe davantage d\'humidité. La farine d\'éleusine apporte une saveur caractéristique de malt et une couleur brun foncé aux pâtisseries. Étant dépourvue de gluten, associez-la à un liant comme la gomme de guar ou la farine de lin pour les gâteaux et les biscuits. Elle convient particulièrement aux recettes qui tirent parti d\'une mie dense et moelleuse, comme les fondants au chocolat.',
        bestFor: ['crêpes', 'galettes', 'gâteaux', 'pain'],
        difficulty: 'moderate',
      },
      {
        millet: 'sorghum',
        milletName: 'Farine de sorgho',
        ratio: '1:1',
        notes:
          'La farine de sorgho est l\'une des farines de millet les plus polyvalentes pour remplacer la farine de blé. Elle possède une saveur neutre, légèrement sucrée, et une couleur claire qui imite bien la farine blanche. Sa texture fine la rend adaptée aux préparations sucrées comme salées. Ajoutez une cuillère à café de psyllium ou de gomme xanthane par 150 g de farine pour améliorer la tenue des pâtes à gâteaux et à pain. Tamisez deux fois pour un résultat plus aéré.',
        bestFor: ['crêpes', 'galettes', 'pain', 'gâteaux'],
        difficulty: 'easy',
      },
      {
        millet: 'proso-millet',
        milletName: 'Farine de millet commun',
        ratio: '1:1',
        notes:
          'La farine de millet commun, aussi appelé millet blanc ou millet à grappes, offre une saveur douce et un goût subtil de noisette qui s\'intègre facilement dans la pâtisserie française. Elle est naturellement sans gluten et donne une texture fine et friable aux biscuits sablés et aux fonds de tarte. Pour les pâtes levées, combinez-la à 50 % avec de la farine de sorgho afin d\'obtenir une meilleure élasticité. Conservez-la au réfrigérateur car elle rancit plus vite que la farine de blé.',
        bestFor: ['galettes', 'gâteaux', 'crêpes', 'pain'],
        difficulty: 'moderate',
      },
    ],
  },

  // =============================================
  // 3. BOULGOUR
  // =============================================
  {
    conventionalGrain: 'Boulgour',
    milletSubstitutes: [
      {
        millet: 'foxtail-millet',
        milletName: 'Millet des oiseaux concassé',
        ratio: '1:1',
        notes:
          'Le millet des oiseaux concassé reproduit fidèlement la texture granuleuse du boulgour et s\'utilise de la même manière dans les salades froides et les plats chauds. Faites-le cuire dans un volume et demi d\'eau bouillante salée pendant 12 à 15 minutes, puis égouttez et laissez refroidir avant de l\'incorporer à vos préparations. Il absorbe très bien les vinaigrettes à base d\'huile d\'olive, de citron et d\'herbes fraîches. Sa saveur noisettée apporte une dimension supplémentaire au taboulé libanais revisité.',
        bestFor: ['taboulé', 'pilaf', 'soupe', 'gratin'],
        difficulty: 'easy',
      },
      {
        millet: 'sorghum',
        milletName: 'Sorgho concassé',
        ratio: '1:1',
        notes:
          'Le sorgho concassé offre une texture plus croquante et plus rustique que le boulgour, ce qui en fait un excellent choix pour les salades composées et les gratins. Faites-le tremper une heure dans l\'eau froide avant cuisson pour réduire le temps de préparation à environ 20 minutes. La cuisson se fait dans deux volumes d\'eau à feu doux, à couvert. Son goût neutre et légèrement sucré se marie bien avec les tomates séchées, la menthe fraîche, le persil plat et les pignons de pin grillés typiques de la cuisine méditerranéenne.',
        bestFor: ['taboulé', 'gratin', 'soupe', 'pilaf'],
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
        milletName: 'Millet des oiseaux',
        ratio: '1:1',
        notes:
          'Le millet des oiseaux partage avec le quinoa une taille de grain similaire et une cuisson rapide, ce qui en fait un substitut très naturel dans les salades, les bowls et les accompagnements. Cuisez-le dans un ratio de 1:2 (millet/eau) pendant 12 à 15 minutes à couvert, puis laissez reposer 5 minutes hors du feu avant d\'égrener à la fourchette. Contrairement au quinoa, il n\'a pas besoin d\'être rincé pour éliminer les saponines. Sa saveur noisettée est plus prononcée que celle du quinoa, ce qui enrichit les vinaigrettes et les bowls composés.',
        bestFor: ['taboulé', 'pilaf', 'porridge', 'gratin'],
        difficulty: 'easy',
      },
      {
        millet: 'proso-millet',
        milletName: 'Millet commun',
        ratio: '1:1',
        notes:
          'Le millet commun (ou millet blanc) est le substitut de quinoa le plus répandu en Europe grâce à sa culture locale et sa disponibilité dans les magasins bio. Ses grains ronds et dorés cuisent en 15 minutes dans deux volumes d\'eau et développent une texture à la fois tendre et légèrement croquante. Pour obtenir des grains bien séparés, faites revenir le millet à sec dans une poêle pendant 2 minutes avant d\'ajouter l\'eau bouillante. Il est riche en magnésium et en vitamines B, et accompagne parfaitement les légumes rôtis et les fromages de chèvre.',
        bestFor: ['taboulé', 'pilaf', 'gratin', 'soupe'],
        difficulty: 'easy',
      },
      {
        millet: 'kodo-millet',
        milletName: 'Millet kodo',
        ratio: '1:1',
        notes:
          'Le millet kodo constitue une alternative intéressante au quinoa pour les personnes cherchant un grain à index glycémique bas. Sa texture ferme et ses grains qui restent bien individualisés après cuisson le rendent idéal pour les salades composées et les buddha bowls. Cuisez-le dans un ratio de 1:1,75 (millet/eau) à feu doux pendant environ 18 minutes. Son profil nutritionnel est comparable à celui du quinoa, avec une teneur élevée en fibres et en antioxydants. Assaisonnez avec de l\'huile de noix et du vinaigre de cidre pour un résultat savoureux.',
        bestFor: ['taboulé', 'gratin', 'pilaf', 'soupe'],
        difficulty: 'moderate',
      },
    ],
  },

  // =============================================
  // 5. SEMOULE DE BLÉ (COUSCOUS)
  // =============================================
  {
    conventionalGrain: 'Semoule de blé (couscous)',
    milletSubstitutes: [
      {
        millet: 'pearl-millet',
        milletName: 'Semoule de mil',
        ratio: '1:1',
        notes:
          'La semoule de mil (bajra) est utilisée depuis des siècles en Afrique de l\'Ouest pour préparer des plats semblables au couscous. Elle offre une saveur légèrement plus robuste et terreuse que la semoule de blé classique. Pour la préparer, versez un volume d\'eau bouillante salée sur la semoule, couvrez et laissez gonfler 5 minutes, puis égrainez à la fourchette en ajoutant un filet d\'huile d\'olive. Elle se marie parfaitement avec les ragoûts de légumes, les tajines et les bouillons épicés de la cuisine nord-africaine.',
        bestFor: ['couscous', 'taboulé', 'soupe', 'porridge'],
        difficulty: 'easy',
      },
      {
        millet: 'sorghum',
        milletName: 'Semoule de sorgho',
        ratio: '1:1',
        notes:
          'La semoule de sorgho est une alternative sans gluten à la semoule de blé qui gagne en popularité dans la cuisine française contemporaine. Elle possède une saveur douce et neutre qui s\'adapte aussi bien aux préparations salées que sucrées. La cuisson est légèrement plus longue que celle du couscous de blé : comptez environ 8 à 10 minutes à la vapeur ou 5 minutes d\'hydratation à l\'eau bouillante. Ajoutez du beurre ou de l\'huile d\'argan en fin de cuisson pour une texture plus soyeuse. Elle absorbe merveilleusement bien les jus de cuisson des viandes braisées.',
        bestFor: ['couscous', 'gratin', 'taboulé', 'galettes'],
        difficulty: 'easy',
      },
      {
        millet: 'foxtail-millet',
        milletName: 'Millet des oiseaux en grains',
        ratio: '1:1',
        notes:
          'Les grains entiers de millet des oiseaux peuvent remplacer la semoule de couscous pour une version plus rustique et nutritive du plat. Les grains sont plus gros que la semoule traditionnelle, ce qui donne une texture plus prononcée et plus satisfaisante en bouche. Faites cuire les grains à la vapeur dans un couscoussier pendant 20 minutes en deux passes, en les égrenant entre chaque cuisson avec un peu d\'huile d\'olive et de sel. Le résultat est un couscous aux grains dorés, parfumés et bien individualisés, riche en fibres et en protéines végétales.',
        bestFor: ['couscous', 'pilaf', 'taboulé', 'soupe'],
        difficulty: 'advanced',
      },
    ],
  },
];
