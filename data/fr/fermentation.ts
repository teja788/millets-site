import type { FermentedProduct } from '@/lib/types';

export const fermentedProducts: FermentedProduct[] = [
  {
    name: 'Ogi',
    region: 'Nigéria, Afrique de l\u2019Ouest (Ghana, Bénin, Togo)',
    millets: ['sorghum', 'pearl-millet'],
    process:
      'Les grains de sorgho ou de mil (Pennisetum glaucum) sont trempés dans l\u2019eau tiède pendant un à trois jours, ce qui amorce une fermentation lactique spontanée. Les grains ramollis sont ensuite broyés par voie humide et tamisés pour séparer le son de la fraction amylacée. Le filtrat obtenu est laissé au repos dans un récipient, permettant la sédimentation de l\u2019amidon et la poursuite de la fermentation. Les micro-organismes dominants sont Lactobacillus plantarum, Corynebacterium et Saccharomyces cerevisiae. L\u2019action combinée de ces bactéries lactiques (LAB) et levures produit de l\u2019acide lactique, abaissant le pH à 3,5-4,0. La bouillie fermentée est ensuite cuite à feu doux avec de l\u2019eau pour obtenir une pâte lisse et homogène appelée « pap », consommée chaude ou tiède.',
    duration: '24 à 72 heures',
    nutritionalBenefit:
      'La fermentation de l\u2019ogi améliore considérablement le profil en acides aminés, notamment la teneur en lysine, un acide aminé habituellement limitant dans les aliments à base de mil. L\u2019acide phytique est réduit de 50 à 60 %, ce qui augmente de manière spectaculaire la biodisponibilité du zinc et du fer. L\u2019acide lactique produit abaisse le pH à 3,5-4,0, créant un milieu défavorable aux entéropathogènes tels qu\u2019Escherichia coli et Salmonella. Des études menées par l\u2019IRD (Institut de Recherche pour le Développement) et le CIRAD ont démontré que la fermentation de l\u2019ogi génère également des vitamines du groupe B, notamment la riboflavine et la niacine, tout en améliorant la digestibilité des protéines de 15 à 25 %.',
    culturalContext:
      'L\u2019ogi est l\u2019aliment de sevrage par excellence dans toute l\u2019Afrique de l\u2019Ouest, introduit dans l\u2019alimentation des nourrissons dès l\u2019âge de quatre à six mois. Chez les Yoruba, il est appelé « ogi » ou « agidi » lorsqu\u2019il est pris en gel ; chez les Haoussa, son équivalent est le « kamu ». C\u2019est un aliment de petit-déjeuner consommé par toutes les tranches d\u2019âge. La recherche sur l\u2019enrichissement de l\u2019ogi par le soja constitue un axe majeur des sciences alimentaires ouest-africaines, avec des travaux menés par les universités d\u2019Ibadan et de Lagos. L\u2019Organisation mondiale de la Santé reconnaît l\u2019ogi comme un modèle de fermentation domestique efficace pour améliorer la sécurité alimentaire infantile.',
  },
  {
    name: 'Fura',
    region: 'Nigéria (nord), Niger, Mali, Guinée',
    millets: ['pearl-millet'],
    process:
      'Le mil à chandelle (Pennisetum glaucum) est pilé en farine fine, mélangé à des épices aromatiques — gingembre, poivre, clous de girofle — puis pétri avec de l\u2019eau chaude pour former une pâte homogène. Cette pâte est façonnée en boules denses d\u2019environ 5 à 8 cm de diamètre, qui sont ensuite partiellement cuites par ébullition brève. Les boules de fura ainsi obtenues sont émiettées et mélangées au « nono », un lait fermenté produit par fermentation spontanée du lait cru de vache pendant 12 à 24 heures. Les bactéries lactiques dominantes dans le nono comprennent Lactobacillus delbrueckii, Streptococcus thermophilus et Lactococcus lactis. Le mélange final, appelé « fura da nono », est remué jusqu\u2019à obtention d\u2019une boisson épaisse et onctueuse.',
    duration: '12 à 24 heures (pour le composant nono)',
    nutritionalBenefit:
      'Le fura da nono est une combinaison nutritionnellement synergique : le mil fournit l\u2019énergie, les fibres alimentaires, le fer et les vitamines du groupe B, tandis que le lait fermenté apporte des protéines de haute qualité, du calcium et des probiotiques vivants. L\u2019acide lactique du nono favorise l\u2019absorption du fer contenu dans le mil. Ensemble, ils délivrent un profil complet en acides aminés qu\u2019aucun des deux composants n\u2019atteint isolément. Une portion fournit environ 150 à 180 kcal avec 6 à 8 g de protéines. Des recherches du CIRAD ont montré que la fermentation du nono réduit l\u2019acide phytique de 35 à 45 %, améliorant significativement la biodisponibilité des minéraux.',
    culturalContext:
      'Le fura da nono est l\u2019aliment emblématique des Peuls (Fulani/Fula), peuple pasteur nomade dont l\u2019histoire est intrinsèquement liée à l\u2019élevage bovin. Il incarne un partenariat nutritionnel séculaire entre les communautés pastorales peules et les agriculteurs sédentaires cultivateurs de mil. Ce sont traditionnellement les femmes peules qui vendent le fura da nono dans des calebasses au bord des routes et sur les marchés à travers toute la bande sahélienne, de la Guinée au Cameroun. Il est célébré comme un symbole d\u2019échange alimentaire interculturel et constitue une source essentielle de protéines pour les populations rurales du Sahel.',
  },
  {
    name: 'Dolo',
    region: 'Burkina Faso, Mali, nord du Ghana, Côte d\u2019Ivoire',
    millets: ['sorghum'],
    process:
      'Le sorgho rouge (Sorghum bicolor) est trempé dans l\u2019eau pendant 12 à 24 heures, puis étalé sur des nattes pour germer pendant trois à cinq jours, produisant le malt de sorgho. Les grains maltés sont séchés au soleil, concassés et mélangés à de l\u2019eau pour former une bouillie épaisse appelée « dèguè ». Ce mélange est porté à ébullition, refroidi, puis filtré à travers des paniers tressés. Le moût sucré obtenu subit une double fermentation : d\u2019abord une acidification lactique par Lactobacillus et Pediococcus, puis une fermentation alcoolique par des levures Saccharomyces cerevisiae naturellement présentes. Le résultat est une bière trouble, rougeâtre, de 2 à 4 % d\u2019alcool par volume, à la saveur aigre-douce caractéristique.',
    duration: '5 à 7 jours (maltage inclus)',
    nutritionalBenefit:
      'Le maltage du sorgho active les enzymes amylases et protéases qui dégradent l\u2019amidon et les protéines, améliorant la digestibilité globale. La fermentation réduit l\u2019acide phytique de 60 à 70 %, ce qui augmente considérablement la biodisponibilité du fer et du zinc. Le dolo contient des vitamines B1, B2, B6 et de la niacine produites par l\u2019activité des levures. Des études menées par l\u2019INRAE et le Centre de Recherches en Sciences Biologiques, Alimentaires et Nutritionnelles (CRSBAN) de Ouagadougou ont montré que le dolo apporte environ 300 à 400 kcal par litre, avec 3 à 5 g de protéines et des quantités significatives de minéraux.',
    culturalContext:
      'Le dolo est bien plus qu\u2019une simple boisson au Burkina Faso : il est le ciment de la vie sociale et communautaire. Les « dolotières » — les femmes brasseuses de dolo — occupent une place centrale dans l\u2019économie rurale et urbaine. Les « cabarets » (débits de dolo) sont des lieux de socialisation où se discutent les affaires du village. Le dolo est indispensable aux cérémonies rituelles, aux funérailles et aux fêtes traditionnelles chez les Mossi, les Bobo et les Lobi. Le brassage du dolo représente une activité économique majeure pour les femmes, et le CIRAD a mené d\u2019importants travaux de recherche sur l\u2019amélioration de ses procédés de fabrication.',
  },
  {
    name: 'Tchoukoutou',
    region: 'Bénin, Togo, nord du Ghana',
    millets: ['sorghum'],
    process:
      'Le sorgho est d\u2019abord trempé puis germé pendant trois à quatre jours pour produire le malt. Les grains maltés sont séchés, concassés et empâtés avec de l\u2019eau. Le moût est soumis à une cuisson prolongée de six à huit heures dans de grandes jarres en terre cuite, un processus qui concentre les sucres et développe les arômes caractéristiques. Après refroidissement, le moût filtré est ensemencé avec un levain naturel issu d\u2019un brassage précédent, contenant principalement des souches de Saccharomyces cerevisiae et des bactéries lactiques. La fermentation alcoolique dure 12 à 24 heures, produisant une bière opaque, brunâtre, de 3 à 5 % d\u2019alcool par volume. Le tchoukoutou est consommé frais, dans les 24 à 48 heures suivant sa fabrication, car il continue à fermenter.',
    duration: '4 à 6 jours (du maltage à la consommation)',
    nutritionalBenefit:
      'Le tchoukoutou conserve une partie importante des nutriments du sorgho grâce à l\u2019absence de filtration fine. La cuisson prolongée favorise la réaction de Maillard, produisant des composés antioxydants. La fermentation génère des vitamines du groupe B (thiamine, riboflavine, acide folique) et réduit les facteurs antinutritionnels tels que les tanins condensés et l\u2019acide phytique. Des recherches menées par l\u2019Université d\u2019Abomey-Calavi au Bénin ont montré que le tchoukoutou contient environ 250 à 350 kcal par litre et constitue une source non négligeable de fer, de zinc et de magnésium pour les populations consommatrices. Les bactéries lactiques résiduelles confèrent des propriétés probiotiques au produit frais.',
    culturalContext:
      'Le tchoukoutou est profondément ancré dans les traditions rituelles et sociales du nord du Bénin et du Togo. Chez les Bariba, les Somba et les Kabyè, il est indissociable des cérémonies funéraires, des rites d\u2019initiation et des fêtes de récolte. Les femmes brasseuses, appelées « tchoukoutières », jouissent d\u2019un statut social respecté et d\u2019une indépendance économique significative. Le brassage du tchoukoutou suit un calendrier rituel précis, et certaines étapes du processus sont accompagnées de prières et d\u2019offrandes aux ancêtres. Des programmes de recherche soutenus par l\u2019IRD et la coopération française ont étudié la microbiologie du tchoukoutou afin d\u2019en améliorer la qualité sanitaire tout en préservant son caractère artisanal.',
  },
  {
    name: 'Boza',
    region: 'Turquie, Balkans (Bulgarie, Albanie, Roumanie, Macédoine du Nord)',
    millets: ['proso-millet'],
    process:
      'Les grains de millet commun (Panicum miliaceum) sont trempés dans l\u2019eau, cuits jusqu\u2019à ce qu\u2019ils soient très tendres, puis écrasés et filtrés. Du sucre et un levain issu d\u2019un lot précédent sont ajoutés à la purée obtenue. Le mélange subit une fermentation mixte impliquant à la fois des bactéries lactiques (Lactobacillus, Leuconostoc) et des levures (Saccharomyces cerevisiae). Cette double fermentation produit une boisson épaisse, légèrement pétillante, à la saveur aigre-douce, avec un taux d\u2019alcool très faible (généralement inférieur à 1 % vol.). La consistance est crémeuse et la couleur varie du jaune pâle au beige selon le type de millet utilisé. La température de fermentation est maintenue entre 25 et 30 °C pour un développement optimal des cultures.',
    duration: '3 à 10 jours',
    nutritionalBenefit:
      'Le boza est riche en vitamines B1, B2 et B6 grâce à l\u2019action combinée des bactéries lactiques et des levures. Le processus de fermentation décompose les glucides complexes en sucres facilement digestibles tout en générant de l\u2019acide lactique qui améliore l\u2019absorption des minéraux. Il contient environ 1 000 UFC/mL de probiotiques vivants et fournit une énergie soutenue grâce à sa matrice glucidique complexe. Des analyses menées par des universités turques et bulgares ont montré que le boza contient des quantités significatives de calcium, de phosphore et de fer. Sa richesse en fibres solubles issues de la fermentation du millet contribue à la régulation du transit intestinal.',
    culturalContext:
      'Le boza possède une histoire remontant à environ 9 000 ans, jusqu\u2019en Mésopotamie, ce qui en fait l\u2019une des plus anciennes boissons fermentées connues de l\u2019humanité. Dans l\u2019Empire ottoman, les vendeurs de boza (bozacı) étaient un spectacle courant en hiver, et la boisson reste associée à la saison froide. Le célèbre établissement Vefa Bozacısı à Istanbul sert du boza depuis 1876 et constitue aujourd\u2019hui une attraction touristique incontournable. En Bulgarie, le boza demeure une boisson hivernale populaire vendue dans les boulangeries et les étals de rue. Le boza a été inscrit au patrimoine culturel immatériel de plusieurs pays balkaniques, témoignant de son importance culturelle transnationale.',
  },
  {
    name: 'Togwa',
    region: 'Tanzanie, Afrique de l\u2019Est (Kenya, Mozambique)',
    millets: ['finger-millet', 'sorghum'],
    process:
      'De la farine d\u2019éleusine (Eleusine coracana) ou de sorgho est cuite en une bouillie légère et refroidie à environ 40 °C. De la farine de mil germé (malt) est ensuite ajoutée comme source d\u2019enzymes amylases et de microflore naturelle. Le mélange fermente à température ambiante, dominé par Lactobacillus brevis et L. plantarum. Les amylases du malt liquéfient l\u2019amidon, réduisant la viscosité tout en augmentant la densité énergétique par unité de volume. Le résultat est une boisson aigre-douce, légèrement effervescente, de couleur brunâtre. La consistance varie de fluide à légèrement épaisse selon la proportion de malt ajoutée et la durée de fermentation.',
    duration: '12 à 24 heures',
    nutritionalBenefit:
      'L\u2019utilisation de grains germés introduit des enzymes amylases qui liquéfient l\u2019amidon, réduisant la viscosité tout en augmentant la densité énergétique par unité de volume — un avantage crucial pour l\u2019alimentation infantile. La fermentation accroît les teneurs en thiamine, riboflavine et niacine. La combinaison de la germination et de la fermentation permet de réduire l\u2019acide phytique jusqu\u2019à 88,3 %, améliorant considérablement la biodisponibilité des minéraux. Des travaux de recherche menés par l\u2019Université de Dar es Salaam et l\u2019IRD ont confirmé que le togwa contient des concentrations élevées de probiotiques vivants (10⁷ à 10⁸ UFC/mL), ce qui en fait un aliment fonctionnel naturel efficace.',
    culturalContext:
      'Le togwa est profondément ancré dans la vie quotidienne tanzanienne. Il est vendu par des femmes dans des récipients en plastique recyclé aux arrêts de bus, sur les marchés et aux portes des écoles à travers tout le pays. Il constitue une boisson nutritive et abordable pour les familles à faibles revenus et est particulièrement prisé pendant la saison chaude comme désaltérant. Le Programme alimentaire mondial a étudié le togwa comme modèle d\u2019aliment probiotique indigène. En milieu rural, la préparation du togwa est un savoir-faire transmis de mère en fille, et chaque famille possède ses propres variantes de recette. Le togwa est également offert aux invités comme geste d\u2019hospitalité dans de nombreuses communautés est-africaines.',
  },
  {
    name: 'Chibuku',
    region: 'Afrique australe (Zimbabwe, Zambie, Malawi, Botswana, Afrique du Sud)',
    millets: ['sorghum', 'pearl-millet'],
    process:
      'Du malt de sorgho ou de mil est mélangé à un adjuvant de maïs ou de sorgho et à de l\u2019eau. Le brassin subit une fermentation en deux étapes : d\u2019abord, une fermentation lactique par des espèces de Lactobacillus acidifie le moût (étape d\u2019aigrissage) ; puis des levures Saccharomyces cerevisiae sont inoculées pour la fermentation alcoolique. Le résultat est une bière opaque, épaisse, de couleur brun rosé et au goût aigre, titrant généralement 3 à 4 % d\u2019alcool par volume. Elle n\u2019est pas filtrée, conservant les particules de grains en suspension. La bière continue à fermenter après sa mise en récipient, ce qui lui confère un caractère vivant et une durée de conservation limitée à quelques jours.',
    duration: '3 à 5 jours',
    nutritionalBenefit:
      'Le chibuku conserve une valeur nutritionnelle significative grâce à l\u2019absence de filtration, préservant les solides du grain, les vitamines du groupe B (notamment la thiamine et la riboflavine) et les protéines résiduelles. La fermentation convertit jusqu\u2019à 70 % de l\u2019acide phytique, augmentant substantiellement la biodisponibilité du fer et du zinc. Une portion typique fournit des quantités appréciables de calories, de protéines et de micronutriments, faisant du chibuku un complément calorique pour les communautés de subsistance. Des recherches menées par l\u2019Université du Zimbabwe ont montré que la bière opaque traditionnelle contribue de manière non négligeable à l\u2019apport en fer des populations rurales.',
    culturalContext:
      'La bière opaque traditionnelle est la boisson alcoolisée la plus largement consommée en Afrique subsaharienne et occupe une place centrale dans les cérémonies sociales, les offrandes ancestrales et les rassemblements communautaires. La marque commerciale « Chibuku » (signifiant « donner au peuple » en shona) a été créée dans les années 1960 et est aujourd\u2019hui produite industriellement en conditionnement carton dans plusieurs pays. Les versions brassées artisanalement demeurent courantes en milieu rural et sont souvent préparées par les femmes en tant qu\u2019activité communautaire. En Afrique du Sud, la bière de sorgho fait partie du patrimoine culturel reconnu et est associée aux cérémonies traditionnelles zouloues et xhosa.',
  },
  {
    name: 'Ben-saalga',
    region: 'Burkina Faso, Afrique de l\u2019Ouest',
    millets: ['pearl-millet'],
    process:
      'Les grains de mil à chandelle (Pennisetum glaucum) sont trempés dans l\u2019eau pendant 12 à 24 heures, puis broyés par voie humide avec un moulin traditionnel ou mécanique. La pâte obtenue est tamisée et diluée dans l\u2019eau. Le filtrat amylacé est laissé à fermenter spontanément pendant 10 à 24 heures à température ambiante (30-35 °C). La microflore dominante est constituée de bactéries lactiques, principalement Lactobacillus fermentum et L. plantarum, accompagnées de levures. L\u2019acide lactique produit abaisse le pH à environ 3,8-4,2. La bouillie fermentée est ensuite cuite à feu doux avec ajout d\u2019eau pour obtenir une consistance fluide adaptée à l\u2019alimentation des nourrissons. Le produit final est une bouillie légèrement acide, de couleur blanchâtre, à la texture lisse.',
    duration: '10 à 24 heures',
    nutritionalBenefit:
      'Les travaux de recherche de l\u2019INRAE (ex-INRA) et de l\u2019IRD, notamment ceux menés au laboratoire Nutripass de Montpellier, ont largement documenté les bénéfices nutritionnels du ben-saalga. La fermentation réduit l\u2019acide phytique de 50 à 65 %, améliorant la biodisponibilité du fer et du zinc — des micronutriments essentiels souvent déficitaires chez les jeunes enfants en Afrique de l\u2019Ouest. Les bactéries lactiques produisent des vitamines du groupe B et des bactériocines à activité antimicrobienne. Cependant, la densité énergétique du ben-saalga traditionnel reste faible (25 à 40 kcal/100 mL), ce qui a conduit les chercheurs à recommander l\u2019ajout de farine de malt pour réduire la viscosité et permettre une concentration supérieure en nutriments.',
    culturalContext:
      'Le ben-saalga est la bouillie de sevrage traditionnelle la plus consommée au Burkina Faso, introduite dans l\u2019alimentation des nourrissons dès l\u2019âge de quatre à six mois. Son nom signifie littéralement « eau de farine de mil » en mooré, la langue des Mossi. Il a fait l\u2019objet de nombreuses études par l\u2019IRD et le CIRAD dans le cadre de programmes visant à améliorer la nutrition infantile en Afrique de l\u2019Ouest. Le projet Nutripass a notamment travaillé sur l\u2019enrichissement du ben-saalga en micronutriments et en énergie. Des programmes de formation destinés aux mères ont été mis en place au Burkina Faso pour optimiser les pratiques de préparation, en intégrant le trempage, la germination et la fermentation comme étapes complémentaires pour maximiser la valeur nutritionnelle de cette bouillie ancestrale.',
  },
];
