import type { Myth } from '@/lib/types';

export const myths: Myth[] = [
  {
    id: 'nourriture-oiseaux',
    myth: 'Les millets, c\'est de la nourriture pour oiseaux',
    fact: 'Si le millet en grappes (Setaria italica) est effectivement vendu en animalerie, réduire les millets à de la nourriture pour oiseaux revient à considérer le maïs comme un simple aliment pour volailles. Les millets regroupent en réalité une famille de céréales cultivées depuis plus de 10 000 ans pour l\'alimentation humaine. Le mil à chandelle (Pennisetum glaucum) nourrit quotidiennement plus de 90 millions de personnes en Afrique de l\'Ouest ; le fonio (Digitaria exilis), surnommé « graine de l\'univers » par le peuple dogon, connaît un essor remarquable dans la gastronomie parisienne. En 2023, l\'ONU a proclamé l\'Année internationale du mil, soutenue par 72 pays, pour valoriser leur potentiel nutritionnel et agronomique. L\'ANSES reconnaît les millets comme des céréales complètes riches en fibres, en magnésium et en fer. En France même, le millet commun (Panicum miliaceum) était une céréale de base jusqu\'au XVIIIe siècle, avant d\'être marginalisé par le blé et le maïs. Il est temps de redécouvrir ces céréales ancestrales pour ce qu\'elles sont : des aliments d\'exception pour l\'être humain.',
    category: 'general',
    sources: [
      'Résolution A/RES/75/263 de l\'Assemblée générale des Nations unies — Année internationale du mil 2023',
      'ANSES, Table de composition nutritionnelle Ciqual (2020)',
      'National Research Council, "Lost Crops of Africa: Volume I — Grains," National Academies Press (1996)',
    ],
  },
  {
    id: 'cereales-inferieures',
    myth: 'Les millets sont des céréales grossières et inférieures',
    fact: 'L\'étiquette de « céréale grossière » est un héritage colonial qui ne repose sur aucune réalité nutritionnelle. Le terme désignait simplement la texture du grain avant mouture, non sa qualité alimentaire. Or, les analyses de la base Ciqual (ANSES) et de l\'USDA montrent que les millets surpassent le riz blanc et le blé raffiné sur de nombreux paramètres : le mil à chandelle fournit 11,6 g de protéines et 11,5 mg de fer pour 100 g, contre 6,8 g de protéines et 0,8 mg de fer pour le riz blanc poli. L\'éleusine (finger millet) détient un record parmi les céréales avec 344 mg de calcium pour 100 g, soit trois fois plus que le lait selon la table Ciqual. Les millets contiennent également 8 à 12,5 g de fibres pour 100 g, contre 0,2 g pour le riz poli. L\'Autorité européenne de sécurité des aliments (EFSA) classe les millets parmi les céréales complètes bénéfiques pour la santé cardiovasculaire. En Inde, le gouvernement a officiellement rebaptisé les millets « Nutri-Céréales » en 2018, tournant définitivement la page du terme péjoratif.',
    category: 'general',
    sources: [
      'ANSES, Table Ciqual — Données de composition nutritionnelle des aliments (2020)',
      'EFSA, "Scientific Opinion on Dietary Reference Values for carbohydrates and dietary fibre," EFSA Journal (2010)',
      'Gazette officielle du gouvernement indien, avril 2018 — Reclassification en Nutri-Céréales',
    ],
  },
  {
    id: 'calculs-renaux',
    myth: 'Les millets provoquent des calculs rénaux',
    fact: 'Cette idée reçue ne résiste pas à l\'examen scientifique. La plupart des millets présentent une teneur en oxalates faible à modérée — nettement inférieure à celle d\'aliments consommés sans inquiétude en France comme les épinards (750-970 mg/100 g), le chocolat noir (117 mg/100 g) ou les amandes (469 mg/100 g). L\'éleusine (finger millet) ne contient qu\'environ 20 mg d\'oxalates pour 100 g, soit quarante fois moins que les épinards. Plus remarquable encore, une étude publiée dans le Journal of Food Science and Technology (2019) a démontré que l\'extrait de mil à chandelle inhibe la cristallisation de l\'oxalate de calcium de 26 à 34 % in vitro, suggérant un effet protecteur plutôt que néfaste. Par ailleurs, la richesse des millets en magnésium (environ 114 mg/100 g pour le mil à chandelle) contribue à la prévention des calculs, le magnésium formant des complexes solubles avec l\'oxalate. La confusion provient probablement d\'une amalgame avec les légumes-feuilles riches en oxalates. Les personnes ayant des antécédents de lithiase urinaire doivent consulter leur médecin, mais rien ne justifie d\'écarter les millets de l\'alimentation.',
    category: 'health',
    sources: [
      'Sade, A. et al., "In vitro inhibition of calcium oxalate crystallization by pearl millet extract," Journal of Food Science and Technology (2019)',
      'ANSES, Table Ciqual — Teneurs en oxalates des aliments courants',
      'Nouvelles Archives de médecine, "Magnésium et lithiase urinaire : mécanismes protecteurs" (2017)',
    ],
  },
  {
    id: 'problemes-thyroide',
    myth: 'Les millets causent des problèmes de thyroïde',
    fact: 'Certains millets, notamment le mil à chandelle et l\'éleusine, contiennent des C-glycosyl flavones capables d\'inhiber l\'enzyme thyroïde peroxydase (TPO) en conditions de laboratoire, ce qui a suscité des inquiétudes. Toutefois, une revue systématique publiée dans Critical Reviews in Food Science and Nutrition (2024) a conclu que les preuves d\'un effet goitrogène chez l\'humain consommant une alimentation variée sont « insuffisamment convaincantes » pour justifier l\'éviction des millets. L\'effet goitrogène n\'a été observé que dans des études animales où le millet constituait la seule source alimentaire — un scénario sans rapport avec les habitudes alimentaires humaines. La cuisson et les procédés de transformation (trempage, fermentation, germination) réduisent significativement la teneur en flavonoïdes, et un apport adéquat en iode neutralise entièrement l\'effet anti-thyroïdien potentiel. En France, où le sel de table est généralement iodé et où l\'alimentation est diversifiée, le risque est considéré comme négligeable par les nutritionnistes. Les personnes souffrant d\'hypothyroïdie avérée peuvent consommer les millets avec modération dans le cadre d\'un régime équilibré, en consultant leur endocrinologue.',
    category: 'health',
    sources: [
      'Sharma, N. et al., "Effect of millets on thyroid function: a systematic review," Critical Reviews in Food Science and Nutrition (2024)',
      'Gaitan, E., "Goitrogens in food and water," Annual Review of Nutrition (1990)',
      'ANSES, "Avis relatif à l\'apport en iode de la population française" (2019)',
    ],
  },
  {
    id: 'difficiles-a-cuisiner',
    myth: 'Les millets sont difficiles à cuisiner',
    fact: 'La plupart des millets se cuisinent aussi simplement que le riz ou la semoule de couscous — un geste familier dans toute cuisine française. Le millet commun (Panicum miliaceum) cuit en 15 minutes à feu doux avec un ratio de 1 volume de graines pour 2 volumes d\'eau, exactement comme le riz pilaf. Le petit mil et le millet des oiseaux cuisent en 12 à 15 minutes. Le fonio, la plus petite céréale du monde, cuit en seulement 5 minutes et se prépare à la vapeur comme un couscous, méthode bien maîtrisée en Afrique de l\'Ouest sous le nom de « thiéré ». La farine d\'éleusine se transforme en bouillie onctueuse en moins de 10 minutes. Pour le mil à chandelle et le sorgho, dont les grains sont plus durs, un trempage de 30 à 60 minutes suffit avant une cuisson de 20 à 25 minutes. Les millets s\'adaptent à tous les équipements : casserole, cuiseur à riz, autocuiseur ou même micro-ondes. La difficulté perçue relève davantage de la méconnaissance que d\'une complexité réelle. Une fois essayés, les millets trouvent naturellement leur place dans le quotidien culinaire.',
    category: 'cooking',
    sources: [
      'Cruz, J.-F. et al., "Fonio, an African cereal," CIRAD, Éditions Quae (2016)',
      'ICAR-Indian Institute of Millets Research, "Millet Cooking Guide" (2022)',
    ],
  },
  {
    id: 'mauvais-gout',
    myth: 'Les millets n\'ont pas de goût',
    fact: 'Chaque millet possède un profil aromatique distinct et apprécié lorsqu\'il est correctement préparé. Le millet commun offre une saveur douce et légèrement noisettée, proche de celle du boulgour. Le mil à chandelle développe un goût terreux et robuste, prisé dans les bouillies traditionnelles du Sahel. L\'éleusine révèle des notes maltées et torréfiées qui en font un ingrédient remarquable pour les pâtisseries et les bières artisanales — la « bière de mil » est d\'ailleurs un breuvage ancestral en Afrique de l\'Ouest. Le fonio a une saveur délicate, subtilement noisetée, qui a conquis des chefs étoilés comme Pierre Thiam, qui l\'utilise dans sa cuisine afro-fusion à Paris et New York. Le sorgho, avec son goût neutre et légèrement sucré, remplace avantageusement la semoule de blé dans les taboulés et les salades. La perception de fadeur provient souvent d\'un assaisonnement insuffisant ou d\'une méconnaissance des techniques de préparation. Le grillage à sec avant cuisson, la fermentation et la germination sont autant de méthodes traditionnelles qui décuplent la richesse aromatique des millets.',
    category: 'cooking',
    sources: [
      'Saleh, A.S.M. et al., "Millet grains: nutritional quality, processing, and potential health benefits," Comprehensive Reviews in Food Science and Food Safety (2013)',
      'Thiam, P., "The Fonio Cookbook: An Ancient Grain Rediscovered," Lake Isle Press (2019)',
      'Mouquet-Rivier, C. et al., "Influence of processing on the flavour compounds of millet-based foods," CIRAD / IRD (2015)',
    ],
  },
  {
    id: 'pauvres-en-proteines',
    myth: 'Les millets manquent de protéines',
    fact: 'Contrairement à cette idée reçue, les millets offrent une teneur protéique tout à fait honorable pour des céréales, et supérieure à celle du riz blanc. Le mil à chandelle fournit 11,6 g de protéines pour 100 g, le millet commun 11,0 g, le millet des oiseaux (foxtail millet) 12,3 g, et le fonio environ 9 g — à comparer aux 6,8 g du riz blanc et aux 10,3 g du blé complet. L\'éleusine, avec 7,3 g de protéines, se distingue par sa richesse en méthionine, un acide aminé essentiel déficient dans la plupart des autres céréales. Des travaux de l\'INRAE et du CIRAD ont montré que la combinaison millets-légumineuses, pratiquée traditionnellement en Afrique de l\'Ouest (fonio avec niébé, mil avec arachide), produit un profil d\'acides aminés complet, comparable à celui des protéines animales. La digestibilité protéique des millets est par ailleurs améliorée par la fermentation, une technique ancestrale utilisée pour préparer l\'ogi (bouillie de mil fermentée au Nigeria) ou le ben-saalga au Burkina Faso. Les millets constituent donc une source protéique végétale de qualité, particulièrement pertinente dans le contexte de la transition alimentaire européenne.',
    category: 'nutrition',
    sources: [
      'Saleh, A.S.M. et al., "Millet grains: nutritional quality, processing, and potential health benefits," Comprehensive Reviews in Food Science and Food Safety (2013)',
      'INRAE / CIRAD, "Complémentarité protéique des céréales et légumineuses africaines" (2018)',
      'ANSES, Table Ciqual — Teneurs en protéines des céréales (2020)',
    ],
  },
  {
    id: 'pas-pour-europe',
    myth: 'Les millets ne font pas partie de la cuisine européenne',
    fact: 'Rien n\'est plus faux. Le millet commun (Panicum miliaceum) était l\'une des céréales les plus cultivées en Europe depuis le Néolithique, bien avant l\'arrivée du blé. Des grains de millet ont été retrouvés dans des sites archéologiques datant de 5 000 ans avant notre ère en Europe centrale. En France, le millet est resté une céréale de premier plan jusqu\'au XVIIIe siècle. En Bourgogne et en Franche-Comté, les « gaudes » — une bouillie épaisse de farine de millet (puis de maïs) grillée — constituaient le repas quotidien des paysans et sont aujourd\'hui redécouvertes comme patrimoine gastronomique régional. En Vénétie italienne, la polenta était à l\'origine préparée avec de la farine de millet. Dans les pays baltes et en Europe de l\'Est, les bouillies de millet (kasha en russe) n\'ont jamais quitté la table familiale. Le millet a décliné en Europe occidentale uniquement sous la pression du blé et du maïs importé des Amériques, non par manque de qualité. Aujourd\'hui, l\'INRAE mène des programmes de recherche pour réintroduire la culture du millet en France dans le cadre de l\'adaptation au changement climatique, le millet nécessitant 70 % moins d\'eau que le riz.',
    category: 'general',
    sources: [
      'Marinval, P., "L\'alimentation végétale en France du Mésolithique jusqu\'à l\'Âge du Fer," CNRS Éditions (1999)',
      'Motuzaite-Matuzeviciute, G. et al., "The early chronology of broomcorn millet in Europe," Antiquity (2013)',
      'INRAE, "Cultures résilientes face au changement climatique : le potentiel des millets en France" (2022)',
    ],
  },
  {
    id: 'seulement-afrique',
    myth: 'Les millets ne se mangent qu\'en Afrique',
    fact: 'Les millets sont consommés sur tous les continents et dans des traditions culinaires extrêmement variées. En Inde, le mil à chandelle est la base des pains plats du nord-ouest du pays, tandis que l\'éleusine compose les bouillies et galettes du sud, nourrissant des centaines de millions de personnes. En Chine, le xiaomi (millet des oiseaux) est cultivé depuis 8 000 ans et donne la bouillie xiaomi zhou, servie quotidiennement dans le nord du pays. Au Japon, le kibi (millet commun) entre dans la composition du mochi traditionnel. En Corée, les millets font partie des « cinq grains » (ogokbap) consommés rituellement. En Russie et en Europe de l\'Est, le millet reste un ingrédient courant des porridges et des farces. En Amérique du Nord, le fonio et le sorgho connaissent un essor fulgurant dans les épiceries bio et les restaurants. Au sein même de l\'Afrique, la diversité est immense : tô au Mali, thiéré au Sénégal, ogi au Nigeria, injera en Éthiopie (à base de teff, un millet). Les millets sont véritablement des céréales mondiales, ancrées dans des gastronomies millénaires.',
    category: 'general',
    sources: [
      'National Research Council, "Lost Crops of Africa: Volume I — Grains," National Academies Press (1996)',
      'Lu, H. et al., "Earliest domestication of common millet in East Asia," Proceedings of the National Academy of Sciences (2009)',
      'FAO, "Millets in the Global Food System" (2023)',
    ],
  },
  {
    id: 'pas-pour-enfants',
    myth: 'Les millets ne conviennent pas aux enfants',
    fact: 'Non seulement les millets conviennent aux enfants, mais ils constituent l\'aliment de sevrage par excellence dans de nombreuses cultures. En Afrique de l\'Ouest, l\'ogi — une bouillie fermentée à base de mil ou de sorgho — est la première nourriture solide donnée aux nourrissons au Nigeria, au Bénin et au Togo, nourrissant des dizaines de millions d\'enfants chaque année. Au Burkina Faso, le ben-saalga (bouillie de mil fermentée et enrichie) fait l\'objet de programmes nutritionnels soutenus par l\'IRD et l\'UNICEF. La fermentation augmente la biodisponibilité du fer et du zinc, réduit les facteurs antinutritionnels (phytates, tanins) et améliore la digestibilité — des qualités essentielles pour les jeunes enfants. En Inde, la bouillie de ragi (éleusine) est recommandée dès 6 mois par les pédiatres en raison de sa teneur exceptionnelle en calcium (344 mg/100 g), indispensable à la croissance osseuse. L\'éleusine est naturellement sans gluten, ce qui la rend adaptée aux enfants cœliaques ou sensibles au gluten. Des études du CIRAD et de l\'IRD ont montré que les bouillies de millets fermentés présentent une densité nutritionnelle supérieure aux bouillies de riz ou de maïs pour la petite enfance.',
    category: 'health',
    sources: [
      'Mouquet-Rivier, C. et al., "Nutritional quality of traditional gruels from fermented millet for infants," IRD / CIRAD (2008)',
      'UNICEF / Burkina Faso, "Programme d\'amélioration des bouillies de complément à base de mil" (2016)',
      'Devi, P.B. et al., "Health benefits of finger millet polyphenols and dietary fiber: a review," Food Chemistry (2014)',
    ],
  },
  {
    id: 'moins-nutritifs-quinoa',
    myth: 'Le quinoa est plus nutritif que les millets',
    fact: 'Le quinoa jouit d\'une excellente image en Europe, mais les millets l\'égalent voire le surpassent sur de nombreux critères nutritionnels. En protéines, le millet des oiseaux (12,3 g/100 g) et le mil à chandelle (11,6 g/100 g) se comparent favorablement au quinoa (14,1 g/100 g). En fer, le mil à chandelle (11,5 mg/100 g) dépasse largement le quinoa (4,6 mg/100 g). En calcium, l\'éleusine (344 mg/100 g) écrase le quinoa (47 mg/100 g) par un facteur de sept. L\'indice glycémique des millets est généralement plus bas : 54 pour le millet des oiseaux contre 53 pour le quinoa — des valeurs comparables. En revanche, le quinoa présente l\'avantage d\'un profil complet en acides aminés essentiels, mais cette lacune des millets est facilement comblée par l\'association traditionnelle avec des légumineuses. D\'un point de vue environnemental et économique, les millets présentent un avantage décisif : ils poussent en France et en Europe, tandis que le quinoa parcourt en moyenne 10 000 km depuis les Andes. Le bilan carbone des millets est donc incomparablement meilleur, un argument de poids dans le contexte de la souveraineté alimentaire européenne.',
    category: 'nutrition',
    sources: [
      'ANSES, Table Ciqual — Comparaison nutritionnelle céréales et pseudo-céréales (2020)',
      'USDA FoodData Central — Nutrient database, quinoa vs. millets',
      'EFSA, "Sustainable diets and biodiversity," European Food Safety Authority (2021)',
    ],
  },
  {
    id: 'millets-et-diabete',
    myth: 'Les diabétiques doivent éviter les millets',
    fact: 'C\'est exactement l\'inverse : les millets figurent parmi les céréales les plus recommandées pour les personnes atteintes de diabète de type 2. Une méta-analyse de 2021 publiée dans Frontiers in Nutrition, portant sur 65 études et 1 000 participants, a démontré que la consommation régulière de millets réduit la glycémie à jeun de 12 % en moyenne et l\'hémoglobine glyquée (HbA1c) de 0,5 point par rapport aux régimes à base de riz ou de blé. L\'indice glycémique des millets est significativement plus bas que celui du riz blanc (73) et du pain blanc (75) : 54 pour le millet des oiseaux, 55 pour le fonio, 62 pour le mil à chandelle et 52 pour le petit mil. Cette action bénéfique s\'explique par la teneur élevée en fibres solubles, en amidons lents et en polyphénols qui ralentissent l\'absorption du glucose. Le fonio, en particulier, présente un indice glycémique remarquablement bas et est traditionnellement recommandé aux diabétiques en Afrique de l\'Ouest. L\'Autorité européenne de sécurité des aliments (EFSA) reconnaît que les céréales complètes, dont les millets, contribuent au maintien d\'une glycémie normale.',
    category: 'health',
    sources: [
      'Anitha, S. et al., "A systematic review and meta-analysis of the potential of millets for managing and reducing the risk of developing diabetes mellitus," Frontiers in Nutrition (2021)',
      'EFSA, "Scientific Opinion on the substantiation of health claims related to whole grain," EFSA Journal (2010)',
      'Cruz, J.-F. et al., "Fonio, an African cereal: nutritional quality and glycaemic index," CIRAD / Éditions Quae (2016)',
    ],
  },
];
