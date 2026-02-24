import type { GlobalMilletRegion } from '@/lib/types';

export const globalMilletRegions: GlobalMilletRegion[] = [
  // ─── 1. ÉTHIOPIE ET CORNE DE L'AFRIQUE ──────────────────────────────
  {
    slug: 'ethiopia-horn-of-africa',
    region: 'Éthiopie et Corne de l\'Afrique',
    continent: 'Afrique',
    tagline: 'Berceau du teff — la plus petite et la plus résiliente des céréales au monde',
    description:
      'La Corne de l\'Afrique est le berceau évolutif du teff (Eragrostis tef), un grain si minuscule qu\'environ 3 000 graines ne pèsent qu\'un seul gramme. Depuis plus de trois millénaires, les agriculteurs des hauts plateaux éthiopiens cultivent le teff à des altitudes comprises entre 1 700 et 2 400 mètres, produisant l\'injera, cette galette spongieuse et acidulée qui constitue la pierre angulaire de chaque repas éthiopien. L\'éleusine (dagusa) prospère dans les basses terres semi-arides de la région et demeure une culture essentielle pour la sécurité alimentaire des communautés pastorales en Érythrée, en Somalie et au Soudan. En 2006, l\'Éthiopie a adopté un pacte sur la biodiversité restreignant l\'exportation de semences de teff afin de protéger son patrimoine génétique — une interdiction partiellement levée en 2015 pour autoriser une culture commerciale limitée à l\'étranger. Aujourd\'hui, la Corne de l\'Afrique produit plus de 90 % du teff mondial, et l\'injera reste un symbole culturel fort de la communauté, les convives partageant un même plat.',
    countries: ['Éthiopie', 'Érythrée', 'Somalie', 'Soudan'],
    primaryMillets: ['Teff (Eragrostis tef)', 'Éleusine (Eleusine coracana)'],
    iconicFoods: [
      {
        name: 'Injera',
        country: 'Éthiopie',
        millet: 'Teff',
        description:
          'Grande galette spongieuse à base de levain naturel, dotée d\'une saveur acidulée caractéristique produite par une fermentation aux levures sauvages durant deux à trois jours. L\'injera sert à la fois d\'assiette et de couverts : les convives en déchirent des morceaux pour y envelopper les ragoûts épicés (wot). L\'injera pur teff est le plus prisé, bien que les mélanges avec du blé ou du sorgho soient courants en milieu rural.',
      },
      {
        name: 'Tella',
        country: 'Éthiopie',
        millet: 'Teff / Éleusine',
        description:
          'Bière artisanale traditionnelle brassée à partir de teff ou d\'éleusine fermentés, aromatisée avec les feuilles et les tiges de gesho (Rhamnus prinoides). La tella occupe une place centrale lors des rassemblements sociaux et des fêtes religieuses du calendrier orthodoxe éthiopien. Le savoir-faire brassicole se transmet de mère en fille depuis des générations.',
      },
      {
        name: 'Genfo',
        country: 'Éthiopie',
        millet: 'Teff / Éleusine',
        description:
          'Bouillie épaisse à la consistance de pâte, traditionnellement offerte aux jeunes mères pour sa forte teneur en fer et en calcium. Le genfo est façonné en forme de volcan, avec un puits central garni de beurre épicé (niter kibbeh) et de berbéré. Ce plat nourrissant symbolise le soin et la force dans la culture éthiopienne, et sa préparation lors d\'une naissance est un rituel familial incontournable.',
      },
      {
        name: 'Beso',
        country: 'Éthiopie',
        millet: 'Teff',
        description:
          'Farine de teff grillée mélangée à du beurre épicé, constituant un aliment de voyage à haute valeur énergétique historiquement transporté par les guerriers et les marchands itinérants éthiopiens. Le beso reste un en-cas portatif apprécié dans les régions montagneuses, car il se conserve longtemps sans réfrigération et fournit un apport calorique concentré en petites quantités.',
      },
      {
        name: 'Asida',
        country: 'Soudan',
        millet: 'Éleusine',
        description:
          'Bouillie lisse et dense préparée à partir de farine d\'éleusine, cuite jusqu\'à obtenir une consistance ferme, puis servie accompagnée de ragoûts ou de lait. L\'asida est un aliment de base dans les foyers soudanais, particulièrement dans les régions occidentales du Darfour et du Kordofan. Sa texture compacte en fait un accompagnement idéal des sauces relevées à base de viande ou de légumes.',
      },
    ],
    historicalHighlights: [
      {
        title: 'Premières cultures de teff',
        period: 'vers 1000-800 av. J.-C.',
        description:
          'Les preuves archéologiques provenant de la région aksoumite suggèrent que la domestication du teff a commencé il y a entre 4 000 et 3 000 ans dans les hauts plateaux éthiopiens. Des graines de teff ont été identifiées sur des sites pré-aksoumites, faisant de cette céréale l\'un des plus anciens grains cultivés propres à une seule région au monde.',
      },
      {
        title: 'Commerce céréalier de l\'Empire aksoumite',
        period: 'vers 100-940 apr. J.-C.',
        description:
          'L\'Empire aksoumite, l\'une des grandes civilisations du monde antique, dépendait largement de l\'agriculture du teff et de l\'éleusine. Les excédents céréaliers alimentaient des réseaux commerciaux s\'étendant jusqu\'à Rome, la Perse et l\'Inde par le port d\'Adoulis sur la mer Rouge, faisant du teff une monnaie d\'échange dans le commerce international de l\'Antiquité.',
      },
      {
        title: 'Pacte éthiopien de protection de la biodiversité',
        period: '2006',
        description:
          'Face aux craintes que des entreprises étrangères ne brevetent des variétés de teff, le gouvernement éthiopien a promulgué une interdiction d\'exporter les semences et grains de teff destinés à la culture. Ce fut l\'une des premières protections souveraines de la biodiversité portant sur une culture vivrière de base, suscitant un débat international sur les droits des pays d\'origine.',
      },
    ],
    culturalSignificance:
      'Dans la culture éthiopienne, l\'injera dépasse largement la simple fonction nutritive — le geste du « gursha » (nourrir quelqu\'un de sa propre main depuis le plat d\'injera partagé) est une expression profonde d\'amour, de respect et d\'amitié. La culture du teff suit des rythmes saisonniers ancestraux liés aux pluies du kiremt, et la fête des moissons d\'Enkutatash (Nouvel An éthiopien) célèbre l\'abondance agricole. La bière d\'éleusine (tella) fait partie intégrante des célébrations religieuses du calendrier orthodoxe éthiopien, en particulier lors des festivités de Timkat (Épiphanie) et de Meskel (Découverte de la Vraie Croix). Le proverbe « kolo yalew, belo yalew » — « qui possède du grain a voix au chapitre » — illustre le lien profond entre la culture du mil et le statut social dans la société éthiopienne.',
    modernStatus:
      'L\'Éthiopie produit environ 5 millions de tonnes de teff par an, ce qui en fait la première céréale du pays par superficie cultivée (environ 3 millions d\'hectares). Le teff a acquis un statut de super-aliment mondial depuis les années 2010, prisé pour son profil complet en acides aminés, sa forte teneur en fer et son caractère naturellement sans gluten. Cependant, cette demande internationale a engendré des pressions sur les prix intérieurs : le prix du teff a quasiment triplé depuis 2005, rendant l\'injera pur teff de plus en plus inabordable pour les Éthiopiens à faibles revenus. L\'Institut éthiopien de recherche agricole (EIAR) poursuit le développement de variétés de teff à haut rendement, tandis que l\'éleusine demeure essentielle à la sécurité alimentaire dans la région du Gash-Barka en Érythrée et dans les zones d\'agriculture pluviale du Soudan.',
    keyFact:
      'Le teff contient deux à trois fois plus de fer que le blé ou le riz et présente un profil complet en acides aminés, pourtant la biodiversité mono-originelle de l\'Éthiopie signifie qu\'un seul pays produit plus de 90 % de l\'offre mondiale.',
    imageFile: '/images/sections/global-ethiopia-horn-of-africa.webp',
  },

  // ─── 2. AFRIQUE DE L'OUEST ET SAHEL ─────────────────────────────────
  {
    slug: 'west-africa-sahel',
    region: 'Afrique de l\'Ouest et Sahel',
    continent: 'Afrique',
    tagline: 'Là où le fonio est la « graine de l\'univers » et le mil nourrit le Sahel',
    description:
      'L\'Afrique de l\'Ouest est l\'une des grandes civilisations céréalières du monde, où le mil à chandelle (Pennisetum glaucum) et le fonio (Digitaria exilis) nourrissent les populations depuis des millénaires à travers les étendues semi-arides du Sahel. Le mil — domestiqué dans l\'actuel Mali et le Niger il y a environ 4 500 ans — demeure la céréale la plus importante pour plus de 90 millions de personnes dans la région, s\'épanouissant dans des sols sablonneux pauvres avec à peine 200 mm de pluviométrie annuelle. Le fonio, parfois surnommé la « culture du paysan paresseux » car il mûrit en seulement six à huit semaines sur des sols quasi stériles, occupe en réalité une position culturelle bien plus profonde : les Dogons du Mali le considèrent comme la graine primordiale d\'où l\'univers a été créé. Des boissons fermentées de mil perlé des communautés haoussa du Nigéria au thiéré sénégalais, les millets sont tissés dans chaque strate de la culture alimentaire ouest-africaine.',
    countries: ['Nigéria', 'Niger', 'Mali', 'Burkina Faso', 'Sénégal', 'Ghana'],
    primaryMillets: ['Mil à chandelle (Pennisetum glaucum)', 'Sorgho (Sorghum bicolor)', 'Fonio (Digitaria exilis)'],
    iconicFoods: [
      {
        name: 'Thiéré (Couscous de mil)',
        country: 'Sénégal',
        millet: 'Fonio / Mil',
        description:
          'Couscous de mil roulé à la main, cuit à la vapeur et servi avec du lakh (lait fermenté sucré) ou des ragoûts de légumes à la sauce d\'arachide. Le thiéré est le plat céréalier sénégalais traditionnel antérieur au thiéboudienne à base de riz, aujourd\'hui dominant. Il reste au cœur des repas cérémoniels wolof et sérère, notamment lors des baptêmes et des funérailles, où sa préparation rassemble les femmes de la communauté.',
      },
      {
        name: 'Ogi / Kunu',
        country: 'Nigéria',
        millet: 'Mil / Fonio',
        description:
          'L\'ogi est une bouillie de mil fermenté, tandis que le kunu en est la version liquide, épicée au gingembre, au clou de girofle et à la patate douce. Tous deux sont des aliments de base du petit-déjeuner et de sevrage à travers le Nigéria. Le kunu zaki (kunu sucré) est une boisson prisée pour la rupture du jeûne (iftar) pendant le ramadan dans le nord musulman du pays.',
      },
      {
        name: 'Fura da Nono',
        country: 'Nigéria',
        millet: 'Mil à chandelle',
        description:
          'Boulettes de mil épicées (fura) émiettées dans du lait de vache fermenté (nono). Street food incontournable du nord du Nigéria et du Niger, le fura da nono est particulièrement apprécié des communautés haoussa et peule. Le mil est pilé avec du gingembre, du clou de girofle et du poivre avant d\'être façonné en boules puis brièvement bouilli, créant un mariage remarquable entre la douceur du lait et la chaleur des épices.',
      },
      {
        name: 'Tô',
        country: 'Mali / Burkina Faso',
        millet: 'Sorgho / Mil',
        description:
          'Pâte épaisse de mil ou de sorgho servie en accompagnement de sauces variées — sauce gombo, sauce arachide ou sauce feuilles. Le tô est l\'équivalent sahélien du fufu et constitue l\'aliment quotidien dans les campagnes maliennes et burkinabè. Sa préparation requiert un savoir-faire précis pour obtenir la consistance idéale, ni trop liquide ni trop compacte, permettant aux convives d\'en prélever des bouchées à la main.',
      },
      {
        name: 'Dolo',
        country: 'Burkina Faso / Mali',
        millet: 'Sorgho',
        description:
          'Bière traditionnelle de sorgho, boisson emblématique du Burkina Faso et du Mali, brassée selon des méthodes ancestrales transmises par les femmes brassicoles (les « dolotières »). Le dolo est fermenté pendant plusieurs jours et servi dans de grandes calebasses lors des cérémonies, des marchés et des fêtes villageoises. Les dolotières jouissent d\'un statut social élevé et leur commerce constitue souvent la principale source de revenus féminins dans les zones rurales.',
      },
    ],
    historicalHighlights: [
      {
        title: 'Domestication du mil à chandelle au Sahel',
        period: 'vers 2500 av. J.-C.',
        description:
          'Les sites archéologiques de la vallée du Tilemsi dans l\'actuel Mali et la tradition Tichitt en Mauritanie fournissent des preuves de la domestication du mil datant d\'environ 4 500 ans. Cette découverte fait du Sahel l\'un des centres indépendants d\'origine des cultures au monde, au même titre que le Croissant fertile pour le blé et la Chine pour le riz.',
      },
      {
        title: 'Cosmogonie dogon et le fonio',
        period: 'Ère précoloniale',
        description:
          'Dans la mythologie dogon, documentée par les ethnographes Marcel Griaule et Germaine Dieterlen dans les années 1940-50, le fonio (po tolo) est la « graine de l\'univers » — le plus petit grain représentant l\'atome fondamental de la création. Le mot dogon « po » désigne à la fois le fonio et l\'étoile Digitaria (Sirius B), révélant un lien cosmologique fascinant entre agriculture et astronomie.',
      },
      {
        title: 'Renaissance du fonio',
        period: 'Années 2000 à aujourd\'hui',
        description:
          'Portée par le chef sénégalo-américain Pierre Thiam et soutenue par des organismes comme le CIRAD et l\'ICRISAT, une dynamique concertée de relance du fonio en tant que culture commerciale l\'a propulsé sur les marchés mondiaux. Désormais exporté vers l\'Europe et l\'Amérique du Nord comme super-aliment sans gluten, le fonio bénéficie d\'une reconnaissance croissante qui profite aux petits producteurs sahéliens.',
      },
    ],
    culturalSignificance:
      'En Afrique de l\'Ouest, les millets sont indissociables de l\'identité et du rituel. Chez les Dogons du Mali, le fonio est considéré comme trop sacré pour être vendu sur les marchés traditionnels — c\'est le grain des cérémonies, de la divination et des offrandes aux ancêtres. Les fêtes de la moisson du mil, comme le festival Bianou à Agadez au Niger, mêlent traditions islamiques et préislamiques à des festins communautaires de plats à base de mil. Dans la culture haoussa, la capacité à préparer un fura (boulettes de mil) parfait est la marque d\'une cuisinière accomplie, et le fura da nono est offert aux invités en signe d\'hospitalité. Chez les Sérères du Sénégal, la culture du mil suit un calendrier sacré, et les pangool (esprits ancestraux) sont invoqués pour bénir les champs. Le proverbe bambara « yaa foni, yaa foni » — « fonio, fonio, il nourrit là où rien d\'autre ne pousse » — résume le rôle salvateur de ce grain lors des années de sécheresse.',
    modernStatus:
      'L\'Afrique de l\'Ouest produit environ 15 millions de tonnes de mil à chandelle par an, le Nigéria, le Niger et le Mali étant les trois premiers producteurs. Malgré ces volumes, la région est confrontée au « paradoxe du mil » : l\'urbanisation et l\'évolution des préférences alimentaires orientent la consommation vers le riz et le blé importés, alors que le mil reste nutritionnellement supérieur et écologiquement adapté à la pluviométrie de plus en plus capricieuse du Sahel. La production de fonio connaît une renaissance remarquable — les exportations mondiales de fonio ont été multipliées par dix environ depuis 2010, tirées par la demande de consommateurs soucieux de leur santé en Europe et en Amérique du Nord. Le Consortium africain des cultures orphelines séquence le génome du fonio pour développer des variétés améliorées, tandis que les variétés biofortifiées de mil de l\'ICRISAT combattent les carences en micronutriments dans la région.',
    keyFact:
      'Le fonio mûrit en seulement six à huit semaines et pousse dans des sols sablonneux et pauvres en nutriments avec un minimum d\'eau, ce qui en fait l\'une des cultures céréalières les plus rapides et les plus résistantes au changement climatique sur Terre.',
    imageFile: '/images/sections/global-west-africa-sahel.webp',
  },

  // ─── 3. INDE ET ASIE DU SUD ─────────────────────────────────────────
  {
    slug: 'india-south-asia',
    region: 'Inde et Asie du Sud',
    continent: 'Asie',
    tagline: 'Premier producteur mondial de millet — un héritage céréalier de 5 000 ans',
    description:
      'L\'Inde est le plus grand producteur de millets au monde, fournissant environ 40 % de la production mondiale avec plus de 12 millions de tonnes par an. L\'Asie du Sud dans son ensemble possède la diversité la plus riche en espèces de millets cultivés : mil à chandelle (bajra), sorgho (jowar), éleusine (ragi), petit mil (kutki), mil des oiseaux (kangni), millet barnyard (sanwa) et kodo. L\'éleusine, domestiquée dans le sous-continent il y a environ 5 000 ans, reste la céréale traditionnelle du Karnataka et du Tamil Nadu, où le ragi mudde (boule d\'éleusine) et le ragi dosa font partie du quotidien. Le gouvernement indien a fait déclarer 2023 « Année internationale des millets » par les Nations unies, impulsant une campagne mondiale de sensibilisation. Au Népal, le millet est à la base du tongba, une bière fermentée chaude de la région himalayenne, tandis qu\'au Sri Lanka, le kurakkan (éleusine) occupe une place ancestrale dans l\'alimentation villageoise.',
    countries: ['Inde', 'Népal', 'Sri Lanka', 'Myanmar'],
    primaryMillets: ['Mil à chandelle (Bajra)', 'Sorgho (Jowar)', 'Éleusine (Ragi)', 'Petit mil (Kutki)', 'Mil des oiseaux (Kangni)'],
    iconicFoods: [
      {
        name: 'Ragi Mudde',
        country: 'Inde',
        millet: 'Éleusine (Ragi)',
        description:
          'Boule de farine d\'éleusine cuite, dense et légèrement élastique, servie en accompagnement de bouillons épicés de lentilles et de sauces poivrées dans le sud de l\'Inde. Le ragi mudde est pétri à la main jusqu\'à obtenir une consistance lisse et se consomme en morceaux trempés dans la sauce. Riche en calcium et en fer, c\'est un aliment de base apprécié des populations rurales et urbaines du sud de l\'Inde.',
      },
      {
        name: 'Bajra Roti',
        country: 'Inde',
        millet: 'Mil à chandelle (Bajra)',
        description:
          'Pain plat non levé à base de farine de mil à chandelle, traditionnel du nord-ouest de l\'Inde. Le bajra roti est généralement cuit sur une plaque chauffante et servi enduit de beurre clarifié, accompagné de légumes épicés ou de lentilles. Sa saveur légèrement sucrée et sa texture rustique en font un compagnon idéal des repas d\'hiver, saison pendant laquelle le mil à chandelle est réputé réchauffer le corps.',
      },
      {
        name: 'Ragi Porridge (Kanji)',
        country: 'Inde / Sri Lanka',
        millet: 'Éleusine (Ragi)',
        description:
          'Bouillie fluide de farine d\'éleusine, fréquemment donnée aux nourrissons comme premier aliment solide et aux personnes convalescentes. Au Sri Lanka, le kurakkan porridge est enrichi de lait de coco et de jaggery. Sa digestibilité élevée et sa richesse en calcium en font un aliment de sevrage recommandé par les nutritionnistes, perpétuant une tradition alimentaire millénaire adaptée aux besoins des plus fragiles.',
      },
      {
        name: 'Tongba',
        country: 'Népal',
        millet: 'Éleusine',
        description:
          'Boisson alcoolisée tiède préparée à partir d\'éleusine fermentée, traditionnelle des peuples Limbu et Rai de l\'est du Népal et du Sikkim indien. Le mil fermenté est placé dans un récipient en bambou, de l\'eau chaude y est versée, et l\'on boit à travers une paille de bambou filtrante. Le tongba réchauffe lors des hivers rigoureux de l\'Himalaya et constitue un élément central de l\'hospitalité des communautés montagnardes.',
      },
      {
        name: 'Jowar Bhakri',
        country: 'Inde',
        millet: 'Sorgho (Jowar)',
        description:
          'Pain plat épais et sans levain, confectionné à la main à partir de farine de sorgho, aliment quotidien dans le centre de l\'Inde. Le jowar bhakri est façonné entre les paumes et cuit directement sur la flamme, développant une croûte croustillante et un intérieur moelleux. Accompagné de condiment pimenté et de yaourt, il incarne la cuisine rustique et nourrissante du plateau du Deccan.',
      },
    ],
    historicalHighlights: [
      {
        title: 'Domestication de l\'éleusine dans le sous-continent',
        period: 'vers 3000 av. J.-C.',
        description:
          'Des preuves archéobotaniques provenant de sites au Karnataka (Hallur, Tekkalakota) attestent de la culture de l\'éleusine dans le sud de l\'Inde il y a environ 5 000 ans. Ce millet est devenu la base alimentaire des civilisations dravidiennes, et sa culture s\'est progressivement étendue vers l\'Afrique de l\'Est par les réseaux commerciaux maritimes de l\'océan Indien.',
      },
      {
        title: 'Les millets dans les textes ayurvédiques',
        period: 'vers 600 av. J.-C. – 200 apr. J.-C.',
        description:
          'Les textes fondateurs de l\'Ayurveda, notamment la Charaka Samhita et la Sushruta Samhita, classifient les millets selon le système des trois doshas. Le ragi est recommandé pour sa capacité à renforcer les os, tandis que le bajra est prescrit pour sa nature « chauffante » bénéfique en saison froide. Ces prescriptions diététiques continuent d\'influencer les habitudes alimentaires en Asie du Sud.',
      },
      {
        title: 'Année internationale des millets (ONU)',
        period: '2023',
        description:
          'À l\'initiative de l\'Inde et avec le soutien de 72 pays, les Nations unies ont proclamé 2023 « Année internationale des millets ». Cette campagne a mis en lumière le potentiel des millets pour la sécurité alimentaire mondiale, la nutrition et l\'agriculture durable, tout en relançant l\'intérêt des consommateurs urbains indiens pour ces céréales ancestrales longtemps délaissées au profit du riz et du blé.',
      },
    ],
    culturalSignificance:
      'En Inde, les millets sont bien plus que des céréales — ils incarnent un lien vivant entre les pratiques agricoles ancestrales et la spiritualité. Dans les temples du Karnataka, le ragi mudde est offert en prasad (offrande sacrée). Au Rajasthan, les chants folkloriques célèbrent le bajra en tant que « grain des braves » qui nourrit les guerriers du désert du Thar. Les festivals de récolte tels que Pongal au Tamil Nadu et Sankranti en Andhra Pradesh incluent traditionnellement des préparations à base de millets. Au Népal, le tongba ne se limite pas à une boisson : c\'est un rituel social qui scelle les amitiés et marque les grandes étapes de la vie dans les communautés himalayennes. La tradition du « anna prashana » (premier repas solide du nourrisson), souvent à base de ragi, relie chaque nouvelle génération à un patrimoine nutritionnel millénaire. Le proverbe tamoul « ragi irundhaal, roga illai » — « là où il y a du ragi, il n\'y a pas de maladie » — résume la vénération pour cette céréale.',
    modernStatus:
      'L\'Inde produit environ 12 millions de tonnes de millets par an et abrite le plus grand programme gouvernemental de promotion des millets au monde, rebaptisés « Shree Anna » (céréales nobles) par le Premier ministre en 2023. Le Rajasthan, le Maharashtra, le Karnataka et le Tamil Nadu sont les principaux États producteurs. Les startups alimentaires indiennes proposent désormais des pâtes, des biscuits et des céréales de petit-déjeuner à base de millets, ciblant une classe urbaine soucieuse de sa santé. Néanmoins, malgré cette renaissance marketing, les millets ne représentent encore que 6 à 7 % de la production céréalière indienne, contre plus de 40 % dans les années 1960, remplacés par le riz et le blé de la Révolution verte. L\'ICRISAT, basé à Hyderabad, poursuit des programmes de sélection pour améliorer les rendements et la résistance à la sécheresse des variétés locales.',
    keyFact:
      'L\'Inde est le premier producteur mondial de millets et a initié la proclamation par l\'ONU de 2023 comme « Année internationale des millets », relançant l\'intérêt mondial pour ces céréales résilientes face au changement climatique.',
    imageFile: '/images/sections/global-india-south-asia.webp',
  },

  // ─── 4. CHINE ET ASIE DE L'EST ──────────────────────────────────────
  {
    slug: 'china-east-asia',
    region: 'Chine et Asie de l\'Est',
    continent: 'Asie',
    tagline: 'Là où l\'agriculture du millet a commencé il y a plus de 10 000 ans',
    description:
      'La Chine est le berceau de l\'agriculture du millet. Le site archéologique de Cishan, dans la province du Hebei, a livré des preuves de la culture du millet des oiseaux (Setaria italica, connu sous le nom de su ou 谷子) remontant à environ 10 300 ans, ce qui en fait la plus ancienne agriculture milletière confirmée au monde. Le millet commun (Panicum miliaceum, appelé shu ou 黍) a été domestiqué parallèlement dans la région du plateau de lœss du nord de la Chine. Ensemble, ces deux millets ont constitué les fondations de la civilisation chinoise — nourrissant les cultures du fleuve Jaune qui allaient donner naissance aux dynasties Shang et Zhou. Le personnage mythologique Hou Ji (Seigneur du Millet), ancêtre légendaire de la dynastie Zhou, témoigne du rôle central du grain dans l\'identité chinoise. Au Japon, les millets (awa, kibi, hie) étaient les céréales de la période Jomon bien avant l\'arrivée du riz, et en Corée, le japgokbap (riz aux cinq grains) perpétue une philosophie millénaire de diversité alimentaire.',
    countries: ['Chine', 'Japon', 'Corée du Sud'],
    primaryMillets: ['Millet des oiseaux (Setaria italica / 谷子)', 'Millet commun (Panicum miliaceum / 黍)'],
    iconicFoods: [
      {
        name: 'Xiaomi Zhou (小米粥)',
        country: 'Chine',
        millet: 'Millet des oiseaux',
        description:
          'Bouillie dorée et soyeuse qui est le petit-déjeuner et l\'aliment de convalescence par excellence dans le nord de la Chine depuis des millénaires. Mijotée lentement jusqu\'à ce que les amidons créent une consistance crémeuse, elle est considérée en médecine traditionnelle chinoise comme tonifiante pour la rate et le qi de l\'estomac. Les femmes en période post-partum consomment traditionnellement le xiaomi zhou avec du sucre brun et des œufs pour favoriser leur rétablissement.',
      },
      {
        name: 'Kibi Dango (黍団子)',
        country: 'Japon',
        millet: 'Millet commun (Kibi)',
        description:
          'Boulettes sucrées à base de farine de millet commun, célèbres pour leur association avec le héros populaire Momotaro (le Garçon-Pêche), qui les utilisait pour recruter des compagnons animaux dans sa quête contre les oni (démons). Les kibi dango de la préfecture d\'Okayama, berceau de la légende de Momotaro, demeurent une spécialité régionale appréciée et un omiyage (cadeau-souvenir) incontournable.',
      },
      {
        name: 'Japgokbap (잡곡밥)',
        country: 'Corée du Sud',
        millet: 'Millets variés',
        description:
          'Riz aux cinq grains mêlant riz blanc, millet des oiseaux, millet commun, sorgho, haricots noirs et orge. Le japgokbap se déguste traditionnellement lors du Daeboreum (première pleine lune du Nouvel An lunaire) pour assurer une bonne santé tout au long de l\'année. Il constitue également un pilier de la cuisine bouddhiste des temples coréens (sachal eumsik), fondée sur l\'harmonie entre les différentes céréales.',
      },
      {
        name: 'Nouilles de Lajia',
        country: 'Chine',
        millet: 'Millet des oiseaux',
        description:
          'En 2005, des archéologues du site de Lajia dans la province du Qinghai ont découvert un bol de nouilles vieux de 4 000 ans, fabriqué à partir de millet des oiseaux et de millet commun — les plus anciennes nouilles connues au monde. Scellées sous un bol d\'argile renversé par un tremblement de terre antique, elles ont fourni la preuve définitive que la fabrication des nouilles est née en Chine et non dans le bassin méditerranéen.',
      },
      {
        name: 'Vin de millet (黄酒)',
        country: 'Chine',
        millet: 'Millet commun',
        description:
          'Boisson alcoolisée fermentée traditionnelle des provinces du Shanxi et du Shaanxi, brassée à partir de millet commun à l\'aide de qu (un ferment contenant moisissures, levures et bactéries). Le vin de millet est antérieur au vin de riz et fut la principale boisson alcoolisée de la civilisation chinoise primitive, mentionné dans les inscriptions oraculaires sur os de la dynastie Shang, témoignant de plus de 3 000 ans de tradition brassicole.',
      },
    ],
    historicalHighlights: [
      {
        title: 'Cishan : la plus ancienne agriculture milletière au monde',
        period: 'vers 8300 av. J.-C.',
        description:
          'L\'analyse des phytolithes sur le site de Cishan dans la province du Hebei, publiée dans les Proceedings of the National Academy of Sciences (2009), a confirmé la culture du millet des oiseaux remontant à environ 10 300 ans. Les fosses de stockage du site contenaient un volume estimé à 50 tonnes de millet, témoignant d\'une agriculture organisée à grande échelle — la plus ancienne au monde.',
      },
      {
        title: 'Hou Ji (Seigneur du Millet) et la mythologie',
        period: 'vers 1046-771 av. J.-C. (Zhou occidentaux)',
        description:
          'Le Shijing (Livre des Odes), la plus ancienne collection de poésie chinoise, relate la légende de Hou Ji, ancêtre mythologique de la dynastie Zhou qui enseigna à l\'humanité la culture du millet. Son histoire — de la naissance miraculeuse à l\'invention de l\'agriculture — montre à quel point le millet était ancré dans les mythes fondateurs de la civilisation chinoise.',
      },
      {
        title: 'Nouilles de 4 000 ans découvertes à Lajia',
        period: 'vers 2000 av. J.-C. (découvertes en 2005)',
        description:
          'Un bol en terre cuite scellé sur le site archéologique de Lajia dans le Qinghai a préservé les plus anciennes nouilles connues, fabriquées à partir de farine de millet des oiseaux et de millet commun. Publiée dans Nature (2005), cette découverte a tranché le débat sur l\'origine des nouilles — Chine, Moyen-Orient ou Italie — en faveur de la Chine.',
      },
    ],
    culturalSignificance:
      'Le millet est inscrit dans le tissu même de la civilisation chinoise. Le caractère pour « céréale » (谷) désignait originellement le millet, et les textes chinois anciens placent systématiquement le millet en tête des « cinq grains » (wu gu : millet, riz, blé, sorgho et haricots). En médecine traditionnelle chinoise, le millet des oiseaux est classé de saveur douce et salée, de nature fraîche, bénéfique pour les méridiens du rein et de l\'estomac. Au Japon, les millets portent une mémoire culturelle ambivalente : révérés comme les grains ayant nourri la nation pendant des millénaires, mais associés aussi à la pauvreté rurale et aux privations de la Seconde Guerre mondiale. Le mouvement moderne du zakkokumai les réhabilite comme aliments santé. En Corée, le concept de « yak sik dong won » (nourriture et médecine partagent la même origine) sous-tend la tradition de consommer des céréales variées. Le proverbe chinois « xiao mi jia bu liao da jiang » (le millet seul ne peut faire un général) rappelle l\'importance de combiner les ressources.',
    modernStatus:
      'La Chine demeure le premier producteur mondial de millet des oiseaux avec environ 1,5 à 2 millions de tonnes récoltées annuellement, principalement dans les provinces du Heilongjiang, de la Mongolie intérieure, du Hebei et du Shanxi. Cependant, la part du millet dans la production céréalière chinoise est passée de plus de 50 % au début du XXe siècle à moins de 3 % aujourd\'hui, le riz et le blé s\'étant imposés. L\'initiative gouvernementale de « renaissance des céréales complètes » (粗粮复兴) promeut la consommation de millet pour ses bienfaits sur la santé, notamment la gestion du diabète et des maladies cardiovasculaires. Le millet des oiseaux premium du Shanxi atteint des prix élevés en tant qu\'aliment santé. Au Japon, le marché du zakkokumai (riz aux céréales anciennes) connaît une croissance significative, et en Corée du Sud, le japgokbap est servi dans les cantines scolaires dans le cadre de l\'éducation nutritionnelle.',
    keyFact:
      'Le site de Cishan dans la province du Hebei contenait environ 50 tonnes de millet stocké dans des fosses souterraines — preuve d\'une agriculture organisée à grande échelle remontant à 10 300 ans, la plus ancienne confirmée au monde.',
    imageFile: '/images/sections/global-china-east-asia.webp',
  },

  // ─── 5. EUROPE ET MÉDITERRANÉE ──────────────────────────────────────
  {
    slug: 'europe-mediterranean',
    region: 'Europe et Méditerranée',
    continent: 'Europe',
    tagline: 'La céréale oubliée de l\'Europe médiévale — avant le maïs, avant la pomme de terre',
    description:
      'Avant que l\'échange colombien ne transforme l\'agriculture européenne avec le maïs et la pomme de terre venus des Amériques, le millet était l\'une des céréales les plus importantes du continent. Le millet commun (Panicum miliaceum) est arrivé en Europe par les corridors de la Route de la soie vers 2000-1500 av. J.-C. et est rapidement devenu un aliment de base dans le bassin danubien, la péninsule italienne et les plaines d\'Europe de l\'Est. Les auteurs romains, dont Pline l\'Ancien, documentaient sa culture étendue et son rôle dans l\'alimentation des citoyens comme des soldats. En France, le millet a joué un rôle fondamental : les « gaudes » de Franche-Comté et de Bourgogne, le « millas » du Sud-Ouest et les bouillies de millet de la Bresse témoignent d\'un patrimoine céréalier longtemps central dans les campagnes françaises. En Italie médiévale, la polenta de millet nourrissait paysans et ouvriers plusieurs siècles avant que la polenta de maïs ne la remplace après le XVIe siècle.',
    countries: ['France', 'Italie', 'Turquie', 'Roumanie', 'Ukraine'],
    primaryMillets: ['Millet commun (Panicum miliaceum)', 'Sorgho (Sorghum bicolor)'],
    iconicFoods: [
      {
        name: 'Gaudes',
        country: 'France',
        millet: 'Millet commun / Maïs',
        description:
          'Bouillie traditionnelle de Franche-Comté et de Bourgogne, originellement préparée à base de farine de millet grillé avant que le maïs ne le supplante au XVIIIe siècle. Les gaudes de millet, d\'une belle couleur dorée et au goût de noisette, constituaient le repas quotidien des paysans bressans et franc-comtois. Aujourd\'hui, quelques artisans de la région redécouvrent la recette originelle au millet, s\'inscrivant dans un mouvement de revalorisation des céréales anciennes qui connaît un essor en France.',
      },
      {
        name: 'Polenta de millet (Polenta di Miglio)',
        country: 'Italie',
        millet: 'Millet commun',
        description:
          'La polenta originelle italienne, confectionnée à partir de farine de millet bien avant l\'arrivée du maïs des Amériques au XVIe siècle. La polenta de millet nourrissait quotidiennement les paysans du nord de l\'Italie, notamment en Vénétie, en Lombardie et dans le Frioul. Elle se servait molle accompagnée de ragoûts ou refroidie et tranchée pour être grillée. Le mouvement Slow Food italien l\'a inscrite dans son « Arche du Goût » en tant qu\'aliment patrimonial en danger.',
      },
      {
        name: 'Boza',
        country: 'Turquie',
        millet: 'Millet commun',
        description:
          'Boisson épaisse, légèrement visqueuse et faiblement alcoolisée, à base de millet fermenté, dotée d\'une saveur aigre-douce caractéristique, traditionnellement consommée en hiver. Le boza est préparé en faisant bouillir de la farine de millet, en laissant fermenter avec des cultures sauvages de lactobacilles, puis en sucrant. Il se sert accompagné de pois chiches grillés (leblebi) et d\'une pointe de cannelle. Ses origines remonteraient à 8 000-9 000 ans en Anatolie.',
      },
      {
        name: 'Millas',
        country: 'France',
        millet: 'Millet commun / Maïs',
        description:
          'Gâteau ou galette épaisse du Sud-Ouest de la France (Gascogne, Béarn, Languedoc), dont la version ancestrale se préparait à base de farine de millet avant l\'adoption du maïs. Le millas de millet, cuit au four ou à la poêle, offrait un plat consistant et économique. Le mot « millas » dérive directement du latin « milium » (millet), témoignant de l\'ancienneté de cette préparation dans la gastronomie occitane.',
      },
      {
        name: 'Mămăligă de millet',
        country: 'Roumanie',
        millet: 'Millet commun',
        description:
          'Bouillie de millet roumaine apparentée à la mămăligă de maïs plus connue. Avant l\'arrivée du maïs en Valachie et en Moldavie au XVIIe siècle, la mămăligă de millet était l\'aliment de base des paysans des principautés danubiennes. Certains cuisiniers traditionnels de Transylvanie rurale préparent encore la mămăligă de millet pour les repas de fête, perpétuant un savoir-faire culinaire qui remonte à l\'Antiquité tardive dans les Balkans.',
      },
    ],
    historicalHighlights: [
      {
        title: 'Arrivée du millet en Europe à l\'Âge du bronze',
        period: 'vers 2000-1500 av. J.-C.',
        description:
          'Le millet commun est arrivé en Europe par les corridors steppiques reliant l\'Asie centrale au bassin danubien durant l\'Âge du bronze. Les données archéobotaniques de sites en Hongrie, en Roumanie et dans le nord de l\'Italie montrent une culture du millet répandue dès 1500 av. J.-C., en faisant l\'une des premières cultures céréalières de l\'Europe tempérée aux côtés de l\'amidonnier et de l\'orge.',
      },
      {
        title: 'Pline l\'Ancien et la culture du millet',
        period: '77 apr. J.-C.',
        description:
          'Dans son Naturalis Historia (Livre XVIII), Pline l\'Ancien décrit le millet comme une culture « d\'une productivité remarquable » largement cultivée dans l\'Empire romain. Il note que le millet de Campanie produit une excellente bouillie blanche (puls) et que le grain peut être conservé pendant des périodes remarquablement longues sans se détériorer — un avantage crucial pour le ravitaillement militaire.',
      },
      {
        title: 'Le millet dans la France médiévale et moderne',
        period: 'Ve-XVIIIe siècle apr. J.-C.',
        description:
          'Le millet fut une céréale majeure dans la France préindustrielle, particulièrement dans le Sud-Ouest (Gascogne, Béarn), en Bresse et en Franche-Comté. Les baux agricoles médiévaux attestent de redevances payées en millet, et les gaudes constituaient l\'alimentation quotidienne des campagnes. L\'introduction du maïs à partir du XVIIe siècle a progressivement marginalisé le millet, mais les toponymes et le vocabulaire régional conservent sa trace.',
      },
    ],
    culturalSignificance:
      'L\'histoire du millet en Europe est celle d\'une importance capitale suivie d\'un oubli quasi total. Dans la Rome antique, la bouillie de millet (puls) était la nourriture du peuple — le « pain quotidien » avant que le pain levé ne se généralise. Les légionnaires romains transportaient du millet comme rations de campagne, et le grain était associé à la vertu rustique et à l\'autosuffisance. Dans la Venise médiévale, la cité entretenait des réserves stratégiques de millet, tout comme les nations modernes stockent le blé, reconnaissant l\'extraordinaire durée de conservation du grain (le millet commun correctement entreposé peut rester viable pendant plus d\'une décennie). En France, les « gaudes » incarnaient l\'âme nourricière de la Franche-Comté, et le « millas » celle de la Gascogne — ces plats humbles mais nourrissants ont alimenté des générations de paysans français avant de céder la place au maïs. Le proverbe hongrois « aki kölest vet, az aranyat arat » (qui sème le millet récolte de l\'or) reflète la valeur attribuée à cette culture dans les plaines d\'Europe centrale.',
    modernStatus:
      'La relation de l\'Europe avec le millet connaît un timide renouveau. La Russie et l\'Ukraine demeurent les plus grands producteurs du continent, la Russie récoltant environ 300 000 à 500 000 tonnes de millet commun par an. Au sein de l\'UE, le millet est principalement cultivé en Hongrie, en Roumanie et en France, essentiellement comme alimentation pour oiseaux et de plus en plus pour le marché des produits sans gluten. En France, le millet bénéficie d\'un intérêt croissant dans le secteur bio et auprès des consommateurs en quête de céréales anciennes : des marques bio proposent des flocons et farines de millet français. Le mouvement Slow Food italien a inscrit la polenta de millet dans son « Arche du Goût » parmi les aliments patrimoniaux en danger. En Turquie, la tradition du boza connaît une renaissance culturelle au XXIe siècle, avec l\'émergence de producteurs artisanaux à Istanbul, Ankara et Izmir. La stratégie « De la ferme à la table » de l\'UE et l\'intérêt croissant pour les cultures résistantes à la sécheresse placent le millet dans les programmes de recherche agricole pour l\'adaptation climatique.',
    keyFact:
      'Avant l\'arrivée du maïs des Amériques au XVIe siècle, la polenta de millet — et non la polenta de maïs — était l\'aliment quotidien des paysans du nord de l\'Italie depuis plus de mille ans, et les gaudes de millet nourrissaient les campagnes franc-comtoises.',
    imageFile: '/images/sections/global-europe-mediterranean.webp',
  },

  // ─── 6. AMÉRIQUES ───────────────────────────────────────────────────
  {
    slug: 'americas',
    region: 'Amériques',
    continent: 'Amériques',
    tagline: 'Du sorgho des champs à la révolution des super-aliments — les millets conquièrent le Nouveau Monde',
    description:
      'Contrairement aux autres régions du globe, les Amériques n\'ont pas de tradition millénaire de culture du millet — ces céréales y sont arrivées par des voies historiques distinctes. Le sorgho (Sorghum bicolor) a été introduit en Amérique du Nord au XVIIe siècle, probablement via la traite des esclaves d\'Afrique de l\'Ouest, et s\'est imposé comme culture fourragère majeure dans les Grandes Plaines américaines. Aujourd\'hui, les États-Unis sont le premier producteur mondial de sorgho grain, avec environ 9 millions de tonnes par an, essentiellement cultivé au Kansas, au Texas et au Nebraska. Le millet commun (Panicum miliaceum) a suivi des routes migratoires européennes, apporté par les colons. Au Brésil et en Argentine, le sorgho s\'est intégré aux systèmes agricoles à grande échelle comme culture de rotation résistante à la sécheresse. Plus récemment, les millets connaissent une seconde vie remarquable dans le mouvement des aliments santé : céréales sans gluten, bières artisanales au sorgho et farines alternatives répondent à une demande croissante des consommateurs nord-américains soucieux de diversifier leur alimentation.',
    countries: ['États-Unis', 'Brésil', 'Argentine', 'Canada'],
    primaryMillets: ['Sorgho (Sorghum bicolor)', 'Millet commun (Panicum miliaceum)'],
    iconicFoods: [
      {
        name: 'Bière artisanale au sorgho',
        country: 'États-Unis',
        millet: 'Sorgho',
        description:
          'Bière sans gluten brassée à partir de sorgho malté, répondant à la demande croissante du marché des boissons sans gluten en Amérique du Nord. Des brasseries artisanales comme Ghostfish (Seattle), Ground Breaker (Portland) et New Planet (Colorado) ont développé des techniques de brassage spécifiques au sorgho, produisant des bières aux profils aromatiques distinctifs — notes de miel, de fruits tropicaux et de céréales grillées — qui rivalisent avec les bières d\'orge traditionnelles.',
      },
      {
        name: 'Sirop de sorgho',
        country: 'États-Unis',
        millet: 'Sorgho sucré',
        description:
          'Sirop ambré et velouté extrait des tiges de sorgho sucré, spécialité des Appalaches et du sud des États-Unis depuis le XIXe siècle. Le sorgho sucré (Sorghum bicolor var. saccharatum) est pressé pour obtenir un jus qui est ensuite lentement réduit en sirop dans de grands bacs en cuivre. Le sirop de sorgho accompagne les biscuits, les pancakes et le cornbread, et connaît un regain d\'intérêt auprès des chefs prônant une cuisine locale et historique.',
      },
      {
        name: 'Millet Bowl (Bol de millet)',
        country: 'États-Unis / Canada',
        millet: 'Millet commun',
        description:
          'Préparation tendance dans les restaurants santé et les cafés bio nord-américains, le bol de millet consiste en du millet cuit garni de légumes rôtis, d\'avocat, de graines et de sauces variées (tahini, chimichurri, miso). Positionné comme alternative sans gluten au quinoa et au riz, le millet séduit les consommateurs par sa texture légère et sa neutralité gustative qui absorbe les saveurs des accompagnements.',
      },
      {
        name: 'Sorgho en grains (Pipoca de sorgo)',
        country: 'Brésil',
        millet: 'Sorgho',
        description:
          'Le sorgho éclaté (pipoca de sorgo) gagne en popularité au Brésil comme alternative au maïs soufflé, offrant un en-cas plus riche en protéines et en fibres. Les grains de sorgho éclatent de manière similaire au pop-corn mais en plus petits et plus croquants. Cette collation s\'inscrit dans le mouvement brésilien de valorisation des céréales alternatives, soutenu par l\'EMBRAPA (Institut de recherche agronomique brésilien).',
      },
      {
        name: 'Whiskey au sorgho',
        country: 'États-Unis',
        millet: 'Sorgho',
        description:
          'Spiritueux distillé à partir de sorgho fermenté, produit par des micro-distilleries américaines qui explorent les céréales alternatives. Le whiskey au sorgho offre un profil gustatif distinctif — plus doux et plus fruité que le bourbon de maïs — et séduit les amateurs de spiritueux artisanaux en quête de nouveauté. Certaines distilleries du Sud revendiquent un héritage remontant aux premières distillations de sorgho par les communautés afro-américaines au XIXe siècle.',
      },
    ],
    historicalHighlights: [
      {
        title: 'Introduction du sorgho en Amérique du Nord',
        period: 'XVIIe siècle',
        description:
          'Le sorgho est arrivé en Amérique du Nord par deux voies principales : d\'abord avec les esclaves africains qui emportèrent avec eux les semences et les savoirs agricoles d\'Afrique de l\'Ouest, puis par des introductions volontaires au XIXe siècle par le ministère de l\'Agriculture américain pour diversifier les cultures des Grandes Plaines. Benjamin Franklin fut l\'un des premiers Américains à promouvoir le sorgho comme culture utile.',
      },
      {
        title: 'L\'âge d\'or du sirop de sorgho',
        period: 'XIXe siècle',
        description:
          'Pendant la guerre de Sécession (1861-1865) et les décennies suivantes, le sirop de sorgho devint l\'édulcorant principal du sud et du centre des États-Unis, en remplacement du sucre de canne rendu rare par le blocus. Des milliers de petites exploitations familiales des Appalaches et du Midwest possédaient leurs propres presses à sorgho, et la production de sirop était un événement communautaire automnal comparable à la récolte du sirop d\'érable au nord.',
      },
      {
        title: 'Boom des bières sans gluten au sorgho',
        period: 'Années 2010 à aujourd\'hui',
        description:
          'L\'explosion du marché sans gluten en Amérique du Nord a propulsé le sorgho au rang d\'ingrédient de brassage majeur. La valeur du marché américain de la bière sans gluten a dépassé 1 milliard de dollars en 2022, et le sorgho en est la céréale de base dominante. Cette croissance a stimulé la recherche agronomique sur des variétés de sorgho spécifiquement adaptées au brassage, développées en collaboration entre universités et brasseries artisanales.',
      },
    ],
    culturalSignificance:
      'La signification culturelle des millets dans les Amériques est un récit en deux actes. Le premier est un héritage largement invisible : les esclaves africains déportés vers les Amériques ont apporté avec eux non seulement les semences de sorgho et de mil, mais aussi des savoirs agricoles et culinaires qui ont influencé la cuisine du sud des États-Unis et des Caraïbes, bien que cette contribution soit rarement reconnue. Le sirop de sorgho des Appalaches incarne cette mémoire silencieuse — un savoir-faire d\'origine africaine adapté aux collines américaines. Le second acte est contemporain : les millets sont en train de se forger une nouvelle identité culturelle aux Amériques en tant que « super-céréales » du XXIe siècle, portées par les mouvements sans gluten, bio et locavore. Les immigrants sud-asiatiques aux États-Unis et au Canada ont également joué un rôle clé en introduisant le ragi, le bajra et le jowar dans les épiceries et restaurants indiens, créant un pont entre les traditions anciennes et les nouvelles habitudes alimentaires.',
    modernStatus:
      'Les États-Unis sont le premier producteur mondial de sorgho grain avec environ 9 millions de tonnes par an, cultivé principalement dans la « ceinture du sorgho » (Kansas, Texas, Nebraska, Oklahoma). Toutefois, l\'essentiel de cette production est destiné à l\'alimentation animale et à l\'exportation vers la Chine. Le marché du sorgho et du millet alimentaires connaît une croissance rapide : les ventes de produits à base de millet dans la grande distribution nord-américaine ont augmenté de plus de 25 % entre 2019 et 2023. Au Brésil, l\'EMBRAPA développe des variétés de sorgho adaptées au Cerrado pour la rotation avec le soja, tandis que l\'Argentine intègre le sorgho dans les systèmes de culture sans labour. Le Canada explore le millet commun comme culture de couverture et de rotation dans les Prairies, où sa résistance à la sécheresse offre une alternative au blé dans un contexte de changement climatique. Le mouvement de la bière artisanale au sorgho continue de croître, avec plus de 150 brasseries aux États-Unis proposant désormais au moins une bière à base de sorgho.',
    keyFact:
      'Les États-Unis sont le premier producteur mondial de sorgho grain avec environ 9 millions de tonnes par an, mais moins de 5 % de cette production est destinée à l\'alimentation humaine — le reste servant à l\'élevage et à l\'exportation.',
    imageFile: '/images/sections/global-americas.webp',
  },
];

// ─── HELPER ─────────────────────────────────────────────────────────

export function getGlobalMilletRegionBySlug(
  slug: string,
): GlobalMilletRegion | undefined {
  return globalMilletRegions.find((r) => r.slug === slug);
}
