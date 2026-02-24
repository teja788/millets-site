import type { BuyingGuideItem } from '@/lib/types';

export const buyingGuideItems: BuyingGuideItem[] = [
  // =============================================
  // 1. MIL (MILLET PERLÉ)
  // =============================================
  {
    millet: 'pearl-millet',
    milletName: 'Mil (Millet perlé)',
    formsAvailable: [
      'Grain entier',
      'Farine',
      'Flocons',
      'Semoule',
      'Soufflé',
    ],
    whatToLookFor: [
      'Choisissez des grains ronds, uniformes, de couleur gris-jaune. Évitez les grains ratatinés ou présentant une teinte verdâtre, signe de récolte prématurée.',
      'Pour la farine de mil, la fraîcheur est primordiale — sa teneur élevée en matières grasses la rend vite amère. Achetez en petites quantités et vérifiez que l\'odeur est douce et légèrement sucrée, sans note rance.',
      'Privilégiez les produits portant le label AB (Agriculture Biologique), la feuille verte européenne ou la certification Ecocert pour garantir l\'absence de résidus de pesticides.',
      'Vérifiez la DLUO (Date Limite d\'Utilisation Optimale) et le numéro de lot sur l\'emballage. Préférez les produits conditionnés sous atmosphère protectrice pour une meilleure conservation.',
      'En épicerie africaine, le mil est souvent vendu en vrac sous le nom « mil souna » ou « sanio » — vérifiez que les grains sont bien secs et exempts de poussière.',
    ],
    storageInstructions:
      'Conservez les grains entiers de mil dans un récipient hermétique en verre ou en acier inoxydable, dans un endroit frais, sec et à l\'abri de la lumière directe du soleil. La température idéale de stockage est entre 15 et 20 °C. La farine de mil doit impérativement être réfrigérée dès l\'ouverture du paquet, car sa teneur élevée en lipides favorise le rancissement rapide à température ambiante. En cas de stockage prolongé, vous pouvez congeler la farine dans un sac hermétique pour prolonger sa durée de vie jusqu\'à 8 mois. Pour le vrac, transvasez immédiatement dans un contenant propre et sec après l\'achat.',
    shelfLife:
      'Grains entiers : 10 à 12 mois à température ambiante. Farine : 1 à 2 mois à température ambiante, jusqu\'à 4 mois au réfrigérateur. Flocons : 4 à 6 mois en emballage scellé.',
    priceRange: 'Économique',
    onlineAvailability:
      'Disponible en épiceries africaines (Paris, Lyon, Marseille, Bordeaux, Bruxelles, Montréal) sous le nom « mil » ou « millet perlé ». En ligne sur Greenweez.fr, Amazon.fr et dans certains magasins bio comme Biocoop, Naturalia et La Vie Claire (rayon céréales anciennes). Au Québec, on le trouve chez Bulk Barn, Avril Supermarché Santé et dans les épiceries africaines de Montréal et Ottawa. Prix indicatif : 3 à 6 € le kg en France.',
  },

  // =============================================
  // 2. ÉLEUSINE (MILLET ROUGE)
  // =============================================
  {
    millet: 'finger-millet',
    milletName: 'Éleusine (Millet rouge)',
    formsAvailable: [
      'Grain entier',
      'Farine',
      'Farine germée (malt)',
      'Flocons',
      'Semoule',
    ],
    whatToLookFor: [
      'Recherchez des grains d\'un brun-rouge foncé, uniformes et exempts de cailloux, de débris d\'enveloppe ou de décoloration. L\'éleusine de qualité a une couleur intense et homogène.',
      'Pour la farine d\'éleusine, vérifiez les dates de fabrication et de DLUO — une farine fraîche dégage un arôme terreux doux sans odeur rance ni de moisi.',
      'Privilégiez la farine germée (malt de ragi) pour les bouillies et porridges, car la germination améliore la biodisponibilité des nutriments et la digestibilité.',
      'Recherchez les labels bio (AB, EU Bio, Ecocert) et les certifications sans gluten, particulièrement si vous achetez pour des préparations destinées aux enfants.',
      'Évitez la farine qui présente des grumeaux visibles ou des signes d\'humidité, indiquant un mauvais stockage ou un produit vieilli.',
    ],
    storageInstructions:
      'Conservez les grains entiers d\'éleusine dans un récipient hermétique, propre et sec, dans un endroit frais et sombre, à l\'abri de la lumière directe. Les grains entiers se conservent bien à température ambiante (15-20 °C). La farine doit être stockée dans un contenant hermétique au réfrigérateur pour éviter que les huiles naturelles ne rancissent. En climat humide ou en été, ajoutez un sachet absorbeur d\'humidité dans le récipient. La farine germée (malt) est plus sensible à l\'oxydation et doit être consommée plus rapidement.',
    shelfLife:
      'Grains entiers : 12 à 18 mois à température ambiante. Farine : 2 à 3 mois à température ambiante, jusqu\'à 6 mois au réfrigérateur. Farine germée (malt) : 3 à 4 mois dans un endroit frais et sec. Flocons : 6 à 8 mois en emballage scellé.',
    priceRange: 'Moyen',
    onlineAvailability:
      'Disponible sur Amazon.fr, Greenweez.fr et dans les épiceries indiennes et sri-lankaises sous le nom « ragi flour ». Certains magasins Biocoop et Naturalia proposent la farine d\'éleusine dans leur rayon sans gluten. En ligne, les marques spécialisées comme Markal et Celnat offrent des produits de qualité biologique. Au Québec, disponible dans les épiceries indiennes de Montréal et Toronto, ainsi que sur Amazon.ca. Prix indicatif : 5 à 10 € le kg en France.',
  },

  // =============================================
  // 3. SORGHO
  // =============================================
  {
    millet: 'sorghum',
    milletName: 'Sorgho',
    formsAvailable: [
      'Grain entier',
      'Farine',
      'Flocons',
      'Semoule',
      'Soufflé',
      'Pâtes de sorgho (sans gluten)',
      'Sirop de sorgho',
    ],
    whatToLookFor: [
      'Choisissez des grains ronds, blancs ou crème, bien remplis et exempts de morceaux cassés. Le grain doit être dur et sec au toucher, ni mou ni humide.',
      'La farine de sorgho doit être d\'un blanc lumineux à crème avec une odeur neutre et propre. Une farine jaunâtre ou grisâtre indique un vieillissement ou une qualité inférieure.',
      'Le sorgho est l\'une des céréales anciennes les plus faciles à trouver en France et au Canada, car il est déjà bien intégré dans les rayons sans gluten. Vérifiez la mention « certifié sans gluten » sur l\'emballage.',
      'Pour les pâtes et produits transformés à base de sorgho, vérifiez la liste des ingrédients — certains produits mélangent le sorgho avec d\'autres farines (riz, maïs). Préférez les produits 100 % sorgho.',
      'Le sorgho rouge ou brun contient davantage d\'antioxydants que le sorgho blanc. Il est parfois vendu dans les épiceries africaines sous le nom « gros mil » ou « mil rouge ».',
    ],
    storageInstructions:
      'Conservez le sorgho entier dans un récipient hermétique à température ambiante, dans un endroit sec et bien ventilé. Le sorgho est un grain relativement stable et résistant aux insectes de stockage courants. La farine de sorgho doit être conservée au réfrigérateur dans un contenant hermétique, ou au congélateur pour une conservation prolongée. Les produits transformés (pâtes, flocons) se conservent bien à température ambiante dans leur emballage d\'origine, à condition qu\'il soit bien refermé après ouverture.',
    shelfLife:
      'Grains entiers : 12 à 18 mois à température ambiante. Farine : 2 à 3 mois à température ambiante, jusqu\'à 6 mois au réfrigérateur. Soufflé : 2 à 3 mois en emballage hermétique. Flocons et pâtes : 6 à 10 mois en emballage scellé.',
    priceRange: 'Économique',
    onlineAvailability:
      'Le sorgho est l\'un des millets les plus répandus en Europe et au Canada. Disponible chez Biocoop, Naturalia, La Vie Claire, Bio c\'Bon et dans la plupart des magasins bio. En ligne sur Greenweez.fr, Amazon.fr et les sites de produits sans gluten. Marques françaises : Markal, Celnat, Priméal. Également vendu en épiceries africaines en vrac à prix très compétitif. Au Québec : Bulk Barn, IGA (rayon bio), Rachelle-Béry et Avril Supermarché Santé. Prix indicatif : 3 à 5 € le kg en France.',
  },

  // =============================================
  // 4. MILLET DES OISEAUX (MILLET ITALIEN)
  // =============================================
  {
    millet: 'foxtail-millet',
    milletName: 'Millet des oiseaux (Millet italien)',
    formsAvailable: [
      'Grain entier (non décortiqué)',
      'Grain décortiqué',
      'Semoule',
      'Flocons',
      'Farine',
    ],
    whatToLookFor: [
      'Le millet des oiseaux est disponible en version non décortiquée (brun-doré avec des traces d\'enveloppe) et décortiquée (jaune vif). La version non décortiquée conserve plus de fibres et de nutriments, mais nécessite un temps de cuisson plus long.',
      'Les grains doivent être petits, ronds et d\'un jaune doré uniforme. Évitez les lots contenant beaucoup de grains cassés ou des taches sombres.',
      'Attention : en animalerie, le « millet en grappe » vendu pour les oiseaux est souvent du millet des oiseaux non décortiqué, mais il n\'est pas destiné à la consommation humaine et peut contenir des traitements. Achetez uniquement en magasin alimentaire.',
      'Vérifiez la DLUO — le millet des oiseaux a une teneur modérée en matières grasses et doit idéalement être consommé dans les 6 mois suivant le conditionnement.',
    ],
    storageInstructions:
      'Conservez dans un récipient hermétique en verre ou en acier inoxydable, dans un endroit frais et sec, à l\'abri de la lumière du soleil. Le millet des oiseaux non décortiqué bénéficie d\'une réfrigération en climat humide pour éviter que la couche de son ne rancisse. La version décortiquée se conserve mieux à température ambiante. En été, privilégiez le réfrigérateur, surtout pour la farine et la semoule. Après ouverture d\'un sachet, transvasez toujours le contenu dans un récipient hermétique.',
    shelfLife:
      'Grain entier (non décortiqué) : 8 à 10 mois à température ambiante, jusqu\'à 12 mois au réfrigérateur. Grain décortiqué : 10 à 12 mois à température ambiante. Semoule et flocons : 4 à 6 mois en emballage scellé.',
    priceRange: 'Moyen',
    onlineAvailability:
      'Disponible sur Amazon.fr et Greenweez.fr sous le nom « millet des oiseaux » ou « foxtail millet ». Présent dans certains magasins Biocoop et épiceries bio spécialisées, mais pas toujours en stock courant. On le trouve aussi dans les épiceries indiennes sous le nom « kangni » ou « thinai ». Au Québec, disponible dans les épiceries indiennes et asiatiques, ainsi que chez Bulk Barn dans certains emplacements. Prix indicatif : 5 à 9 € le kg en France.',
  },

  // =============================================
  // 5. PETIT MIL (PANICUM SUMATRENSE)
  // =============================================
  {
    millet: 'little-millet',
    milletName: 'Petit mil (Panicum sumatrense)',
    formsAvailable: [
      'Grain entier (non décortiqué)',
      'Grain décortiqué',
      'Semoule',
    ],
    whatToLookFor: [
      'Les grains de petit mil sont minuscules et de couleur blanc à gris clair une fois décortiqués. Recherchez des grains uniformes, propres, sans poussière, résidus d\'enveloppe ni petites pierres.',
      'Le petit mil non décortiqué est de couleur brun clair avec une texture légèrement rugueuse. Il est plus nutritif mais nécessite un trempage avant la cuisson.',
      'Les grains doivent être parfaitement secs et ne pas coller entre eux lorsqu\'on les presse entre les doigts — toute adhérence indique de l\'humidité et un risque de détérioration.',
      'Ce millet est très difficile à trouver en Europe. Il est principalement importé d\'Inde et vendu sous les noms « samai » ou « kutki » dans les épiceries indiennes spécialisées. Vérifiez systématiquement la date d\'importation et la DLUO.',
    ],
    storageInstructions:
      'Conservez dans un récipient hermétique, dans un endroit frais et sec. Le petit mil est relativement résistant aux insectes grâce à sa petite taille et à sa couche externe dure. Cependant, en climat humide ou en été, la réfrigération est recommandée pour éviter l\'absorption d\'humidité et la moisissure. Transférez immédiatement le contenu des emballages en plastique dans des récipients en verre ou en acier inoxydable après l\'achat pour prolonger la durée de conservation.',
    shelfLife:
      'Grain entier (non décortiqué) : 10 à 12 mois à température ambiante. Grain décortiqué : 8 à 10 mois. Semoule : 4 à 6 mois en emballage scellé. Une fois cuit, consommez dans les 24 heures, car il a tendance à durcir au réfrigérateur.',
    priceRange: 'Premium',
    onlineAvailability:
      'Très rare en magasin physique en France et au Canada. Disponible principalement sur Amazon.fr et Amazon.ca en recherchant « little millet » ou « samai millet ». On peut parfois le trouver dans les épiceries indiennes de Paris (quartier La Chapelle), Londres ou Montréal. Certaines boutiques en ligne spécialisées dans les produits indiens (comme Patel Brothers en Amérique du Nord) proposent des importations. Prix indicatif : 8 à 15 € le kg, souvent en conditionnements de 500 g.',
  },

  // =============================================
  // 6. MILLET KODO
  // =============================================
  {
    millet: 'kodo-millet',
    milletName: 'Millet kodo',
    formsAvailable: [
      'Grain entier (non décortiqué)',
      'Grain décortiqué',
      'Semoule',
    ],
    whatToLookFor: [
      'Le millet kodo décortiqué doit être de couleur gris clair à blanc, tandis que les grains non décortiqués sont plus foncés, tirant sur le brun. Vérifiez l\'uniformité de la taille des grains et leur propreté.',
      'Le millet kodo peut être confondu avec des grains d\'apparence similaire — achetez auprès de marques de confiance ou de magasins spécialisés dans les millets pour garantir l\'authenticité du produit.',
      'Les grains doivent être parfaitement secs et couler librement de la main sans s\'agglutiner. Tout agglutinement ou sensation d\'humidité indique un séchage insuffisant.',
      'Assurez-vous que l\'emballage provient d\'une source fiable et porte des certifications alimentaires reconnues (FSSAI pour les importations indiennes, ou équivalent européen). Un stockage inadéquat du millet kodo peut entraîner des problèmes de contamination fongique.',
      'Ce millet est quasiment introuvable dans le commerce européen classique. Il faut le commander en ligne ou le chercher dans des épiceries indiennes bien approvisionnées.',
    ],
    storageInstructions:
      'Conservez dans un récipient hermétique propre en verre ou en acier inoxydable, dans un endroit frais, sec et bien ventilé. Le millet kodo doit être tenu à l\'écart de l\'humidité en permanence, car des conditions humides peuvent favoriser le développement de moisissures. En été ou en climat humide, conservez-le au réfrigérateur. Si vous achetez en vrac ou en épicerie, faites sécher les grains au four à basse température (60 °C) pendant 20 minutes avant de les stocker pour éliminer toute humidité résiduelle.',
    shelfLife:
      'Grain entier (non décortiqué) : 8 à 10 mois en conditions sèches. Grain décortiqué : 8 à 12 mois. Semoule : 3 à 5 mois en emballage scellé. Inspectez toujours le millet kodo stocké pour détecter toute odeur suspecte ou décoloration avant utilisation.',
    priceRange: 'Premium',
    onlineAvailability:
      'Très rare en France et au Canada dans le commerce classique. Disponible principalement sur Amazon.fr et Amazon.ca en recherchant « kodo millet » ou « varagu rice ». Les épiceries indiennes de grandes villes (Paris, Lyon, Montréal, Toronto) peuvent en stocker de manière ponctuelle. Quelques sites spécialisés dans les produits indiens biologiques proposent des expéditions internationales. Prix indicatif : 8 à 14 € le kg, souvent en conditionnements de 500 g à 1 kg.',
  },

  // =============================================
  // 7. MILLET DES RIZIÈRES (MILLET JAPONAIS)
  // =============================================
  {
    millet: 'barnyard-millet',
    milletName: 'Millet des rizières (Millet japonais)',
    formsAvailable: [
      'Grain entier',
      'Farine',
      'Flocons',
      'Semoule',
    ],
    whatToLookFor: [
      'Les grains de millet des rizières sont petits et blancs, avec une forme ronde caractéristique. Recherchez des grains propres, uniformes, exempts de taches noires, de pierres ou de résidus d\'enveloppe.',
      'Pour la meilleure valeur nutritionnelle, choisissez des grains entiers non décortiqués. La version décortiquée cuit plus rapidement mais perd une partie de sa teneur en fibres.',
      'Vérifiez la fraîcheur — le millet des rizières a une durée de conservation plus courte que les autres millets en raison de sa structure de grain délicate. Il doit avoir une odeur propre et neutre.',
      'En Europe, ce millet est parfois vendu sous le nom de « millet japonais » dans les épiceries bio ou les magasins spécialisés en alimentation japonaise. Attention à ne pas confondre avec le riz japonais.',
    ],
    storageInstructions:
      'Conservez dans un récipient hermétique, dans un endroit frais et sec. Le millet des rizières se conserve mieux dans des récipients en verre ou en acier inoxydable de qualité alimentaire plutôt qu\'en plastique, car le plastique peut retenir l\'humidité. En climat chaud et humide ou en été, réfrigérez les grains. Si vous achetez en grande quantité, divisez en portions plus petites et stockez séparément pour minimiser l\'exposition à l\'air à chaque ouverture du récipient. Consommez en priorité parmi vos réserves de céréales.',
    shelfLife:
      'Grains entiers : 6 à 8 mois à température ambiante, jusqu\'à 10 mois au réfrigérateur. Farine : 1 à 2 mois à température ambiante, jusqu\'à 3 mois au réfrigérateur. Flocons : 3 à 4 mois en emballage scellé. Durée de conservation plus courte que les autres millets, achetez donc en petites quantités.',
    priceRange: 'Moyen',
    onlineAvailability:
      'Disponible sur Amazon.fr et Amazon.ca en recherchant « barnyard millet » ou « millet japonais ». On le trouve occasionnellement dans les épiceries indiennes (sous le nom « sanwa » ou « jhangora ») et dans certaines épiceries japonaises. Quelques sites bio en ligne comme Greenweez.fr peuvent le proposer de manière saisonnière. Au Québec, vérifiez les épiceries asiatiques de Montréal et Toronto. Prix indicatif : 6 à 10 € le kg en France.',
  },

  // =============================================
  // 8. MILLET COMMUN
  // =============================================
  {
    millet: 'proso-millet',
    milletName: 'Millet commun',
    formsAvailable: [
      'Grain entier (non décortiqué)',
      'Grain décortiqué',
      'Farine',
      'Flocons',
      'Semoule',
      'Soufflé',
    ],
    whatToLookFor: [
      'Les grains de millet commun sont ronds, d\'un jaune pâle à crème. Sélectionnez des grains propres, secs et exempts de décoloration ou de taches sombres.',
      'C\'est le millet le plus courant en Europe et en Amérique du Nord — c\'est souvent celui qui est simplement étiqueté « millet » dans les magasins bio, sans autre précision.',
      'Assurez-vous que le grain est correctement décortiqué : le millet commun possède une enveloppe externe relativement dure et non comestible. Un grain bien transformé doit être lisse et uniforme.',
      'Privilégiez le millet commun issu de l\'agriculture biologique européenne (France, Autriche, Ukraine) pour un produit plus frais et avec une empreinte carbone réduite. Les labels AB, EU Bio ou Demeter garantissent la qualité.',
      'La farine de millet commun est excellente pour la boulangerie sans gluten. Vérifiez la mention « garanti sans gluten » si vous êtes cœliaque, car des contaminations croisées sont possibles.',
    ],
    storageInstructions:
      'Conservez dans un récipient hermétique, dans un endroit frais et sec, à l\'abri de la lumière directe du soleil et des sources de chaleur. Le millet commun se conserve raisonnablement bien grâce à sa structure de grain dure. En environnement humide, la réfrigération est recommandée. La farine de millet commun doit être stockée au réfrigérateur ou au congélateur pour préserver sa fraîcheur. Si vous achetez en vrac chez Bulk Barn ou en magasin bio, transvasez dans un contenant propre et hermétique dès votre retour.',
    shelfLife:
      'Grain entier (non décortiqué) : 12 à 18 mois à température ambiante en conditions sèches. Grain décortiqué : 8 à 12 mois. Farine : 2 à 3 mois à température ambiante, 6 mois au réfrigérateur. Flocons : 6 à 8 mois en emballage scellé.',
    priceRange: 'Économique',
    onlineAvailability:
      'Le millet commun est le plus facile à trouver en Europe et au Canada. Disponible chez Biocoop, Naturalia, La Vie Claire, Bio c\'Bon, Carrefour Bio et la plupart des magasins bio. En ligne sur Greenweez.fr, Amazon.fr, et les sites des marques Markal, Celnat et Priméal. Au Québec : Bulk Barn, IGA, Avril Supermarché Santé, Rachelle-Béry. Souvent vendu simplement sous le nom « millet décortiqué » ou « millet doré ». Prix indicatif : 3 à 5 € le kg en France, 4 à 7 CAD le kg au Canada.',
  },

  // =============================================
  // 9. MILLET À ÉPI BRUN (BRACHIARIA RAMOSA)
  // =============================================
  {
    millet: 'browntop-millet',
    milletName: 'Millet à épi brun (Brachiaria ramosa)',
    formsAvailable: [
      'Grain entier (non décortiqué)',
      'Grain décortiqué',
    ],
    whatToLookFor: [
      'Le millet à épi brun est la variété de millet la plus rare et la plus haut de gamme sur le marché mondial. Les grains sont très petits, ronds et de couleur brun clair à crème une fois décortiqués.',
      'En raison d\'une production très limitée (principalement dans le sud de l\'Inde, au Karnataka), vérifiez la source et l\'authenticité du produit. Achetez uniquement auprès de marques reconnues ou directement auprès de coopératives agricoles certifiées.',
      'Le grain doit être propre et exempt d\'impuretés. Compte tenu de son prix élevé, assurez-vous que l\'emballage est scellé et que le produit est dans sa date de DLUO.',
      'Ce millet est parfois commercialisé comme un « super-aliment miraculeux » avec des allégations de santé exagérées — bien qu\'il soit nutritif, restez sceptique face aux produits revendiquant des propriétés thérapeutiques sur l\'emballage.',
    ],
    storageInstructions:
      'Conservez dans un récipient hermétique en verre ou en acier inoxydable, bien fermé, dans un endroit frais et sec. En raison de son prix élevé, prenez un soin particulier pour le stockage afin d\'éviter toute détérioration. En climat humide ou en été, réfrigérez les grains. Le millet à épi brun étant généralement acheté en petites quantités (250 g à 500 g), utilisez-le dans les quelques mois suivant l\'achat pour une saveur et une valeur nutritionnelle optimales.',
    shelfLife:
      'Grain entier (non décortiqué) : 8 à 10 mois à température ambiante. Grain décortiqué : 6 à 8 mois. Achetez en petites quantités (250 g à 500 g) en raison du prix élevé et de la durée de conservation limitée par rapport aux millets plus courants.',
    priceRange: 'Premium',
    onlineAvailability:
      'Extrêmement rare en Europe et au Canada — pratiquement introuvable dans les magasins physiques. Disponible quasi exclusivement sur Amazon.fr et Amazon.ca en recherchant « browntop millet ». Quelques boutiques en ligne spécialisées dans les produits indiens biologiques (comme certaines coopératives du Karnataka) proposent l\'expédition internationale, mais les délais de livraison peuvent être longs. Prix indicatif : 12 à 20 € le kg. La disponibilité est saisonnière et les stocks s\'épuisent rapidement.',
  },
];

export function getBuyingGuideByMillet(slug: string): BuyingGuideItem | undefined {
  return buyingGuideItems.find((b) => b.millet === slug);
}
