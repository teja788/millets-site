import type { FAQItem } from '@/lib/types';

export const faqItems: FAQItem[] = [
  // =====================
  // GÉNÉRAL (5)
  // =====================
  {
    id: 'what-are-millets',
    question: 'Qu\u2019est-ce que les millets ?',
    answer:
      'Les millets sont un groupe de céréales à petites graines appartenant à la famille des Poacées (graminées), cultivées depuis des millénaires. On distingue le mil (Pennisetum glaucum), le sorgho (Sorghum bicolor), l\u2019éleusine ou mil rouge (Eleusine coracana), le millet commun (Panicum miliaceum), le millet des oiseaux (Setaria italica) et plusieurs autres espèces. Ces céréales comptent parmi les plus anciennes plantes cultivées au monde : des traces archéologiques datent de 8 700 avant notre ère en Chine et de 5 000 ans en Afrique de l\u2019Ouest. Riches en fibres, en minéraux et naturellement sans gluten, les millets connaissent un regain d\u2019intérêt en Europe et dans le monde entier pour leur valeur nutritionnelle et leur résilience climatique.',
    category: 'Général',
    relatedMillets: [],
  },
  {
    id: 'millets-gluten-free',
    question: 'Les millets sont-ils sans gluten ?',
    answer:
      'Oui, tous les vrais millets sont naturellement sans gluten. Cela inclut le mil, le sorgho, l\u2019éleusine, le millet commun, le millet des oiseaux, le petit mil, le millet kodo, le millet des rizières et le millet brun. Ils conviennent donc aux personnes atteintes de maladie cœliaque ou d\u2019une sensibilité au gluten non cœliaque. Toutefois, une contamination croisée peut survenir lors de la transformation ou du conditionnement dans des installations qui traitent également du blé. Si vous êtes très sensible, recherchez la mention « certifié sans gluten » ou le logo de l\u2019AFDIAG (Association française des intolérants au gluten) sur l\u2019emballage.',
    category: 'Général',
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
    id: 'difference-mil-millet',
    question: 'Quelle est la différence entre « mil » et « millet » ?',
    answer:
      'En français, les deux termes sont souvent utilisés de manière interchangeable, mais une distinction existe. Le mot « mil » désigne traditionnellement le mil à chandelle (Pennisetum glaucum), céréale majeure en Afrique de l\u2019Ouest et au Sahel. Le terme « millet » est plus générique et englobe l\u2019ensemble des petites céréales à grains : millet commun, millet des oiseaux, millet kodo, etc. Dans l\u2019usage scientifique francophone, « millets » au pluriel désigne le groupe entier. En anglais, « millet » couvre toutes ces espèces sans distinction. Sur ce site, nous utilisons « millets » comme terme générique et « mil » spécifiquement pour le mil à chandelle (pearl millet).',
    category: 'Général',
    relatedMillets: ['pearl-millet'],
  },
  {
    id: 'fonio-is-millet',
    question: 'Le fonio est-il un millet ?',
    answer:
      'Le fonio (Digitaria exilis) est botaniquement apparenté aux millets et fait partie de la même famille des Poacées. Il est souvent classé parmi les millets au sens large, bien qu\u2019il appartienne à un genre différent. Cultivé depuis plus de 5 000 ans en Afrique de l\u2019Ouest — notamment au Mali, en Guinée, au Burkina Faso et au Sénégal — le fonio est surnommé « la graine de l\u2019univers » par le peuple Dogon. C\u2019est une céréale sans gluten, très digeste, à faible indice glycémique et riche en acides aminés soufrés (méthionine et cystéine). Le fonio gagne en popularité en France et se trouve désormais dans les magasins bio et les épiceries africaines.',
    category: 'Général',
    relatedMillets: [],
  },
  {
    id: 'millets-west-africa',
    question: 'Quel est le rôle des millets en Afrique de l\u2019Ouest ?',
    answer:
      'Les millets sont au cœur de l\u2019alimentation et de la culture en Afrique de l\u2019Ouest depuis des millénaires. Le mil à chandelle et le sorgho constituent les céréales de base au Sahel, dans des pays comme le Mali, le Niger, le Sénégal et le Burkina Faso. Ils entrent dans la préparation de plats traditionnels emblématiques : le tô (pâte de mil ou de sorgho), le couscous de mil, la bouillie de mil, le thiéré (couscous sénégalais) ou le dolo (bière de sorgho). Ces céréales sont parfaitement adaptées aux conditions arides et semi-arides de la région. En Afrique subsaharienne, le mil et le sorgho représentent environ 35 % de la production céréalière totale et nourrissent des centaines de millions de personnes.',
    category: 'Général',
    relatedMillets: ['pearl-millet', 'sorghum'],
  },
  {
    id: 'millets-environment',
    question: 'Les millets sont-ils bons pour l\u2019environnement ?',
    answer:
      'Les millets sont parmi les céréales les plus durables sur le plan écologique. Ils nécessitent très peu d\u2019eau : le mil à chandelle, par exemple, pousse avec seulement 300 à 500 mm de précipitations annuelles, contre 1 200 mm pour le riz paddy. Leur cycle de culture est court (60 à 90 jours pour certaines espèces), ce qui réduit l\u2019occupation des sols. Ils s\u2019adaptent aux sols pauvres et marginaux sans nécessiter de grandes quantités d\u2019engrais. Les millets ont une empreinte carbone nettement inférieure à celle du blé et du riz. L\u2019ONU a d\u2019ailleurs déclaré 2023 Année internationale du mil pour promouvoir ces « super-céréales » face au changement climatique.',
    category: 'Général',
    relatedMillets: ['pearl-millet'],
  },

  // =====================
  // NUTRITION (4)
  // =====================
  {
    id: 'nutritional-value',
    question: 'Quelle est la valeur nutritionnelle des millets ?',
    answer:
      'Les millets offrent un profil nutritionnel remarquable. Pour 100 g de grains secs, ils apportent en moyenne 10 à 12 g de protéines, 2 à 5 g de lipides et 60 à 70 g de glucides complexes. Leur teneur en fibres alimentaires (6 à 13 g/100 g) est bien supérieure à celle du riz blanc (0,2 g). Ils sont riches en minéraux essentiels : l\u2019éleusine fournit 344 mg de calcium par 100 g (contre 10 mg pour le riz), le mil à chandelle apporte 8 mg de fer (contre 0,7 mg pour le riz). Les millets contiennent également du magnésium, du phosphore, du zinc et des vitamines du groupe B. Leur indice glycémique bas à modéré (44 à 62) en fait des alliés pour la gestion de la glycémie.',
    category: 'Nutrition',
    relatedMillets: ['finger-millet', 'pearl-millet'],
  },
  {
    id: 'millets-vs-quinoa',
    question: 'Millets ou quinoa : lequel choisir ?',
    answer:
      'Les deux sont d\u2019excellents choix nutritionnels, mais ils présentent des différences notables. Le quinoa est riche en protéines complètes (14 g/100 g) avec tous les acides aminés essentiels, tandis que les millets offrent une plus grande diversité : l\u2019éleusine excelle en calcium, le mil en fer, le millet brun en fibres. Côté prix, les millets sont nettement plus abordables : en France, le millet commun coûte entre 3 et 5 €/kg contre 6 à 10 €/kg pour le quinoa. Sur le plan écologique, les millets nécessitent moins d\u2019eau et poussent en Afrique et en Asie, réduisant les kilomètres alimentaires par rapport au quinoa souvent importé d\u2019Amérique du Sud. L\u2019idéal est de varier les deux dans son alimentation.',
    category: 'Nutrition',
    relatedMillets: ['finger-millet', 'pearl-millet', 'browntop-millet'],
  },
  {
    id: 'most-calcium-millet',
    question: 'Quel millet contient le plus de calcium ?',
    answer:
      'L\u2019éleusine (mil rouge, ou ragi en Inde) détient le record de calcium parmi toutes les céréales couramment consommées, avec environ 344 mg pour 100 g selon les tables de composition alimentaire (ANSES/USDA). C\u2019est plus de 30 fois la teneur du riz blanc (10 mg/100 g) et environ 8 fois celle du blé complet (41 mg/100 g). À titre de comparaison, un verre de lait (200 ml) apporte environ 240 mg de calcium. L\u2019éleusine est donc particulièrement recommandée pour les enfants en croissance, les femmes enceintes, les personnes âgées et celles qui suivent un régime végétalien pour couvrir leurs besoins en calcium.',
    category: 'Nutrition',
    relatedMillets: ['finger-millet'],
  },
  {
    id: 'most-fiber-millet',
    question: 'Quel millet est le plus riche en fibres ?',
    answer:
      'Le millet brun (browntop millet) possède la teneur en fibres alimentaires la plus élevée parmi les millets, avec environ 12,5 g pour 100 g. Il est suivi par le millet des rizières (environ 10 g/100 g) et le millet kodo (environ 9 g/100 g). À titre de comparaison, le riz blanc ne contient que 0,2 g de fibres par 100 g. Ces fibres — à la fois solubles et insolubles — favorisent la satiété, ralentissent l\u2019absorption du glucose, nourrissent le microbiote intestinal et contribuent au maintien d\u2019un taux de cholestérol sain. Intégrer des millets riches en fibres dans son alimentation quotidienne est un moyen simple d\u2019atteindre l\u2019apport journalier recommandé de 25 à 30 g de fibres.',
    category: 'Nutrition',
    relatedMillets: ['browntop-millet', 'barnyard-millet', 'kodo-millet'],
  },

  // =====================
  // CUISINE (4)
  // =====================
  {
    id: 'how-to-cook-millets',
    question: 'Comment cuisiner les millets ?',
    answer:
      'La cuisson des millets est simple et similaire à celle du riz. Commencez par rincer les grains à l\u2019eau froide pour éliminer les impuretés. Pour la plupart des millets, utilisez un ratio de 1 volume de grains pour 2,5 volumes d\u2019eau. Portez à ébullition, puis réduisez le feu, couvrez et laissez mijoter 15 à 20 minutes. Laissez reposer 5 minutes hors du feu avant d\u2019égrener à la fourchette. Pour un goût plus riche, faites griller les grains à sec dans une poêle pendant 2 à 3 minutes avant la cuisson. Le trempage préalable (30 minutes à 2 heures) est recommandé pour le millet kodo, le petit mil et le millet des rizières afin de réduire les anti-nutriments et d\u2019améliorer la digestibilité.',
    category: 'Cuisine',
    relatedMillets: ['kodo-millet', 'little-millet', 'barnyard-millet'],
  },
  {
    id: 'cooking-times',
    question: 'Quels sont les temps de cuisson des différents millets ?',
    answer:
      'Les temps de cuisson varient selon le millet. Le millet commun et le millet des oiseaux cuisent en 15 à 20 minutes avec un ratio eau/grain de 2,5:1. Le petit mil et le millet des rizières nécessitent 20 à 25 minutes avec le même ratio. Le millet kodo demande 25 à 30 minutes avec un ratio de 2,5 à 3:1. Le sorgho en grains entiers est le plus long : 40 à 50 minutes avec un ratio de 3:1 (un trempage de 6 à 8 heures réduit ce temps de moitié). Le mil à chandelle est généralement consommé sous forme de farine (bouillie, galettes) plutôt qu\u2019en grains entiers. Pour tous les millets, la cuisson au cuiseur à riz ou à l\u2019autocuiseur (Instant Pot) simplifie la préparation.',
    category: 'Cuisine',
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
    id: 'french-recipes',
    question: 'Comment intégrer les millets dans la cuisine française ?',
    answer:
      'Les millets s\u2019adaptent merveilleusement à la cuisine française. Utilisez le millet commun en remplacement du boulgour dans un taboulé, ou en garniture à la place du riz pilaf. Le sorgho remplace avantageusement l\u2019orge dans les soupes et les ragoûts d\u2019hiver. La farine de millet commun peut remplacer partiellement la farine de blé (jusqu\u2019à 30 %) dans les crêpes, les galettes bretonnes et les cakes salés. Le millet des oiseaux fait un excellent risotto crémeux. Préparez un gratin dauphinois en ajoutant une couche de millet cuit entre les pommes de terre. Pour le petit-déjeuner, une bouillie de millet au lait avec du miel et des fruits de saison est une alternative délicieuse au porridge d\u2019avoine.',
    category: 'Cuisine',
    relatedMillets: ['proso-millet', 'sorghum', 'foxtail-millet'],
  },
  {
    id: 'reduce-earthy-taste',
    question: 'Comment atténuer le goût terreux des millets ?',
    answer:
      'Certaines personnes perçoivent un goût terreux ou légèrement amer dans les millets, surtout lors des premières dégustations. Plusieurs techniques permettent de l\u2019atténuer. Le trempage de 30 minutes à quelques heures, suivi d\u2019un rinçage abondant, élimine une partie des composés amers. La torréfaction à sec dans une poêle pendant 2 à 3 minutes développe des arômes de noisette agréables. L\u2019ajout d\u2019aromates — ail, oignon, herbes de Provence, laurier — lors de la cuisson masque efficacement le goût terreux. Mélanger les millets avec des légumes, des légumineuses ou les utiliser dans des recettes épicées (curry, tajine) donne d\u2019excellents résultats. Avec le temps, la plupart des gens apprécient la saveur caractéristique des millets.',
    category: 'Cuisine',
    relatedMillets: [],
  },

  // =====================
  // SANTÉ (4)
  // =====================
  {
    id: 'millets-diabetes',
    question: 'Les millets sont-ils bénéfiques pour les personnes diabétiques ?',
    answer:
      'Les millets présentent un indice glycémique (IG) bas à modéré, généralement compris entre 44 et 62, contre environ 73 pour le riz blanc. Leur richesse en fibres ralentit l\u2019absorption du glucose et atténue les pics de glycémie postprandiaux. Plusieurs études publiées dans des revues comme le Journal of Nutritional Science et Frontiers in Nutrition montrent que le remplacement du riz par des millets améliore le contrôle glycémique chez les personnes atteintes de diabète de type 2. Toutefois, les millets ne sont pas un médicament : ils constituent un choix alimentaire plus sain qui doit s\u2019inscrire dans une prise en charge globale. Consultez toujours votre médecin ou votre diététicien pour un conseil personnalisé.',
    category: 'Santé',
    relatedMillets: ['foxtail-millet', 'kodo-millet', 'little-millet'],
  },
  {
    id: 'millets-children',
    question: 'Les millets conviennent-ils aux enfants ?',
    answer:
      'Oui, les millets sont parfaitement adaptés à l\u2019alimentation des enfants et peuvent être introduits à partir de la diversification alimentaire (vers 6 mois), sous forme de bouillie lisse. L\u2019éleusine (mil rouge) est particulièrement recommandée pour les enfants grâce à sa richesse exceptionnelle en calcium (344 mg/100 g), essentiel à la croissance osseuse. Le mil à chandelle apporte du fer (8 mg/100 g), important pour prévenir l\u2019anémie infantile. En Afrique de l\u2019Ouest, les bouillies de mil constituent depuis toujours un aliment de sevrage traditionnel. Les millets étant sans gluten, ils conviennent aussi aux enfants intolérants au gluten. Commencez par de petites quantités et variez les types de millets pour assurer un apport nutritionnel diversifié.',
    category: 'Santé',
    relatedMillets: ['finger-millet', 'pearl-millet'],
  },
  {
    id: 'millets-thyroid',
    question: 'Les millets posent-ils un risque pour la thyroïde ?',
    answer:
      'Certains millets, en particulier le mil à chandelle et l\u2019éleusine, contiennent des goitrogènes — des composés pouvant interférer avec l\u2019absorption de l\u2019iode par la glande thyroïde. Cependant, la cuisson réduit considérablement la teneur en goitrogènes. Une consommation modérée de millets bien cuits est considérée comme sûre pour la grande majorité des personnes. Si vous souffrez d\u2019une affection thyroïdienne, notamment d\u2019hypothyroïdie, il est conseillé de consulter votre endocrinologue avant d\u2019intégrer les millets en grande quantité dans votre alimentation. Veillez également à maintenir un apport suffisant en iode (sel iodé, algues, produits de la mer) pour compenser tout effet potentiel.',
    category: 'Santé',
    relatedMillets: ['pearl-millet', 'finger-millet'],
  },
  {
    id: 'millets-weight-loss',
    question: 'Les millets aident-ils à perdre du poids ?',
    answer:
      'Les millets peuvent être des alliés précieux dans un programme de perte de poids, mais aucun aliment seul ne fait maigrir. Le millet des rizières présente la plus faible teneur calorique parmi les millets (environ 307 kcal/100 g contre 356 kcal pour le riz) et est pauvre en glucides. Le millet brun, avec ses 12,5 g de fibres par 100 g, procure une satiété durable qui aide à réduire l\u2019apport calorique global. Le millet kodo, grâce à son indice glycémique bas, limite les fringales liées aux pics d\u2019insuline. Pour optimiser les résultats, intégrez les millets dans une alimentation équilibrée et variée, associée à une activité physique régulière — c\u2019est l\u2019ensemble du mode de vie qui compte.',
    category: 'Santé',
    relatedMillets: ['barnyard-millet', 'browntop-millet', 'kodo-millet'],
  },

  // =====================
  // ACHAT (3)
  // =====================
  {
    id: 'where-to-buy-france',
    question: 'Où acheter des millets en France ?',
    answer:
      'Les millets sont de plus en plus disponibles en France. Les magasins bio — Biocoop, Naturalia, La Vie Claire, Bio c\u2019 Bon — proposent généralement du millet commun (souvent sous le nom « millet décortiqué ») et parfois du sorgho et du fonio. Les épiceries africaines et asiatiques offrent une gamme plus large : mil à chandelle, éleusine, sorgho et fonio. En ligne, des sites comme Kazidomi, Greenweez et Amazon proposent plusieurs variétés. Le millet commun se trouve aussi au rayon céréales et légumineuses des grandes surfaces (Carrefour, Leclerc, Auchan). Les prix varient de 3 à 6 € le kilo en vrac. Au Québec, recherchez dans les magasins Bulk Barn, Avril Supermarché Santé et les boutiques de produits naturels.',
    category: 'Achat',
    relatedMillets: ['proso-millet', 'sorghum', 'pearl-millet'],
  },
  {
    id: 'storage-millets',
    question: 'Comment conserver les millets ?',
    answer:
      'Les millets en grains entiers se conservent très bien. Stockez-les dans des contenants hermétiques (bocaux en verre, boîtes métalliques ou sachets à fermeture zip) dans un endroit frais, sec et à l\u2019abri de la lumière. Dans ces conditions, les grains entiers se conservent 6 à 12 mois sans perte de qualité. La farine de millet, plus sensible au rancissement en raison des huiles exposées, doit être utilisée dans les 2 à 3 mois ; la conserver au réfrigérateur prolonge sa durée de vie à 4 à 6 mois. Les millets cuits se gardent 3 à 4 jours au réfrigérateur dans un récipient fermé, et jusqu\u2019à 3 mois au congélateur. Vérifiez régulièrement l\u2019absence d\u2019humidité, d\u2019insectes ou d\u2019odeurs anormales.',
    category: 'Achat',
    relatedMillets: [],
  },
  {
    id: 'bio-vs-conventional',
    question: 'Faut-il acheter des millets bio ou conventionnels ?',
    answer:
      'Les millets bio présentent plusieurs avantages. Étant des cultures rustiques, les millets nécessitent naturellement peu de pesticides et d\u2019engrais chimiques, ce qui rend leur version bio particulièrement intéressante en termes de rapport qualité-prix. Les millets bio certifiés (label AB en France, Ecocert, ou label bio européen) garantissent l\u2019absence de résidus de pesticides de synthèse et une culture respectueuse de l\u2019environnement. L\u2019écart de prix entre bio et conventionnel est souvent modeste pour les millets (1 à 2 € de plus par kilo). Les millets conventionnels restent toutefois un bon choix nutritionnel. Si votre budget est limité, privilégiez le bio pour les millets que vous consommez le plus fréquemment et optez pour le conventionnel pour les achats occasionnels.',
    category: 'Achat',
    relatedMillets: [],
  },
];
