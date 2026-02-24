import type { RegionalTradition } from '@/lib/types';

export const regionalTraditions: RegionalTradition[] = [
  // === SENEGAL ===
  {
    slug: 'senegal',
    state: 'Sénégal',
    region: "Afrique de l'Ouest",
    tagline:
      "Terre du mil par excellence, o\u00f9 chaque repas familial c\u00e9l\u00e8bre le grain sacr\u00e9 de la Teranga.",
    description:
      "Le S\u00e9n\u00e9gal est indissociable du mil (Pennisetum glaucum), c\u00e9r\u00e9ale fondatrice de la civilisation ouest-africaine qui occupe encore aujourd'hui plus de 60 % des superficies c\u00e9r\u00e9ali\u00e8res du pays. Dans les r\u00e9gions de Kaolack, Fatick, Diourbel et Tambacounda, le mil n'est pas seulement une culture vivri\u00e8re : il est le fil conducteur de la vie sociale, spirituelle et festive des communaut\u00e9s wolof, s\u00e9r\u00e8re, peul et diola. Le pays produit en moyenne 800 000 \u00e0 1 million de tonnes de mil par an, ce qui en fait l'un des premiers producteurs mondiaux. Chaque \u00e9tape du cycle agricole \u2014 labour, semis, sarclage, r\u00e9colte \u2014 est ponctu\u00e9e de chants et de rituels communautaires. Le mil p\u00e9n\u00e8tre dans la cuisine s\u00e9n\u00e9galaise sous toutes ses formes : farine, semoule, grain entier, bouillies, couscous et m\u00eame boissons ferment\u00e9es. La teranga \u2014 cette hospitalit\u00e9 l\u00e9gendaire s\u00e9n\u00e9galaise \u2014 se manifeste particuli\u00e8rement dans le partage du bol de thi\u00e9r\u00e9, servi au centre de la natte pour rassembler la famille \u00e9largie. Les greniers \u00e0 mil, ces structures en banco ou en paille tress\u00e9e \u00e9rig\u00e9es dans chaque concession, symbolisent la prosp\u00e9rit\u00e9 et la pr\u00e9voyance du chef de famille. Les vari\u00e9t\u00e9s locales comme le souna (cycle court) et le sanio (cycle long) sont s\u00e9lectionn\u00e9es depuis des si\u00e8cles pour r\u00e9sister aux al\u00e9as du climat sah\u00e9lien.",
    primaryMillets: ['pearl-millet', 'sorghum'],
    iconicDishes: [
      {
        name: 'Thi\u00e9r\u00e9 (Couscous de mil)',
        millet: 'Mil \u00e0 chandelle',
        description:
          "Le thi\u00e9r\u00e9 est le couscous de mil s\u00e9n\u00e9galais, plat national partag\u00e9 en famille autour du grand bol commun. La semoule de mil est roul\u00e9e \u00e0 la main, cuite \u00e0 la vapeur dans un couscoussier traditionnel, puis napp\u00e9e d'une sauce onctueuse \u00e0 base de l\u00e9gumes de saison \u2014 courge, manioc, chou, niebe \u2014 enrichie de poisson s\u00e9ch\u00e9 ou de viande. La pr\u00e9paration du thi\u00e9r\u00e9 est un art transmis de m\u00e8re en fille : le roulage de la semoule demande un geste pr\u00e9cis et r\u00e9gulier pour obtenir des grains a\u00e9r\u00e9s et fondants. Servi traditionnellement le vendredi soir apr\u00e8s la pri\u00e8re, il constitue aussi le repas de choix lors des c\u00e9r\u00e9monies religieuses et familiales.",
      },
      {
        name: 'Thiakry',
        millet: 'Mil \u00e0 chandelle',
        description:
          "Le thiakry est un dessert cr\u00e9meux et rafra\u00eechissant \u00e0 base de semoule de mil roul\u00e9e, m\u00e9lang\u00e9e avec du lait caill\u00e9 sucr\u00e9 (lait ferment\u00e9), de la cr\u00e8me fra\u00eeche, de la muscade et de la vanille. Servi frais, c'est la gourmandise pr\u00e9f\u00e9r\u00e9e des S\u00e9n\u00e9galais pendant le Ramadan, notamment \u00e0 l'heure de la rupture du je\u00fbne. Chaque famille poss\u00e8de sa recette secr\u00e8te : certaines ajoutent des raisins secs, de la noix de coco r\u00e2p\u00e9e ou du bouye (fruit du baobab). Le thiakry est \u00e9galement omnipr\u00e9sent lors des bapt\u00eames et des f\u00eates de mariage, o\u00f9 il est distribu\u00e9 en grandes quantit\u00e9s aux invit\u00e9s.",
      },
      {
        name: 'Lakh',
        millet: 'Mil \u00e0 chandelle',
        description:
          "Le lakh est une bouillie \u00e9paisse et nourrissante de semoule de mil cuite dans du lait caill\u00e9 sucr\u00e9, parfum\u00e9e \u00e0 la fleur d'oranger ou au bouye. Contrairement au thiakry, le lakh est servi chaud ou ti\u00e8de et poss\u00e8de une consistance plus onctueuse, presque cr\u00e9meuse. C'est le petit-d\u00e9jeuner traditionnel des femmes enceintes et allaitantes, consid\u00e9r\u00e9 comme fortifiant et galactog\u00e8ne. Dans la r\u00e9gion de Saint-Louis, le lakh est \u00e9galement servi lors des veill\u00e9es fun\u00e9raires. Sa pr\u00e9paration ritualis\u00e9e fait du lakh un symbole de soin maternel et de g\u00e9n\u00e9rosit\u00e9 communautaire.",
      },
      {
        name: 'Fond\u00e9',
        millet: 'Mil \u00e0 chandelle',
        description:
          "Le fond\u00e9 est une bouillie l\u00e9g\u00e8re de farine de mil, pr\u00e9par\u00e9e avec du lait ou de l'eau, et agr\u00e9ment\u00e9e de sucre, de beurre et parfois de p\u00e2te d'arachide. Repas matinal par excellence dans les foyers peuls et toucouleurs de la vall\u00e9e du fleuve S\u00e9n\u00e9gal, le fond\u00e9 est r\u00e9put\u00e9 pour sa l\u00e9g\u00e8ret\u00e9 et sa digestibilit\u00e9. Les bergers peuls en emportent dans des calebasses lorsqu'ils conduisent les troupeaux en transhumance. La pr\u00e9paration du fond\u00e9 ob\u00e9it \u00e0 un savoir-faire ancestral qui permet d'obtenir une texture lisse et sans grumeaux, signe de ma\u00eetrise culinaire.",
      },
      {
        name: 'Ngalakh',
        millet: 'Mil \u00e0 chandelle',
        description:
          "Le ngalakh est un mets c\u00e9r\u00e9moniel pr\u00e9par\u00e9 sp\u00e9cifiquement pour le Vendredi saint et la f\u00eate de Tamkharit (Achoura) au S\u00e9n\u00e9gal. Il se compose de couscous de mil m\u00e9lang\u00e9 \u00e0 une p\u00e2te onctueuse de pain de singe (bouye), enrichie de p\u00e2te d'arachide, de sucre et de fleur d'oranger. Le ngalakh incarne la sp\u00e9cificit\u00e9 du S\u00e9n\u00e9gal en mati\u00e8re de dialogue interreligieux : pr\u00e9par\u00e9 \u00e0 l'origine par les chr\u00e9tiens pour le Vendredi saint, il est partag\u00e9 avec les voisins musulmans, et inversement lors des f\u00eates musulmanes. Ce plat est devenu un symbole puissant de la cohabitation pacifique entre les communaut\u00e9s religieuses du pays.",
      },
    ],
    festivals: [
      {
        name: 'Korit\u00e9 (A\u00efd el-Fitr)',
        description:
          "La Korit\u00e9 marque la fin du mois sacr\u00e9 du Ramadan et constitue l'une des plus grandes c\u00e9l\u00e9brations du S\u00e9n\u00e9gal. Apr\u00e8s un mois de je\u00fbne, les familles se r\u00e9unissent autour de festins somptueux o\u00f9 le mil occupe une place d'honneur. Les rues s'animent de danses, de chants et de visites entre voisins.",
        milletConnection:
          "Le thiakry est le dessert incontournable de la Korit\u00e9 : pr\u00e9par\u00e9 en grandes quantit\u00e9s, il est partag\u00e9 avec les voisins, les amis et les personnes d\u00e9munies. Le fond\u00e9 et le lakh sont servis au petit-d\u00e9jeuner du jour de f\u00eate. L'ensemble de la c\u00e9l\u00e9bration s'articule autour des pr\u00e9parations \u00e0 base de mil, symbole d'abondance et de gratitude.",
      },
      {
        name: 'Tabaski (A\u00efd el-K\u00e9bir)',
        description:
          "La Tabaski est la f\u00eate du sacrifice, c\u00e9l\u00e9br\u00e9e avec faste dans tout le S\u00e9n\u00e9gal. Chaque famille sacrifie un mouton et pr\u00e9pare des repas copieux rassemblant plusieurs g\u00e9n\u00e9rations. C'est une occasion de solidarit\u00e9 o\u00f9 l'on partage la viande avec les voisins et les plus d\u00e9munis.",
        milletConnection:
          "Le couscous de mil accompagne traditionnellement la viande de mouton grill\u00e9e lors de la Tabaski. Le thi\u00e9r\u00e9 est pr\u00e9par\u00e9 avec la sauce \u00e0 base de viande de mouton et de l\u00e9gumes. En dessert, le thiakry et le ngalakh cl\u00f4turent le festin. Le mil est consid\u00e9r\u00e9 comme la c\u00e9r\u00e9ale la plus digne d'accompagner cette f\u00eate sacr\u00e9e.",
      },
    ],
    culturalSignificance:
      "Au S\u00e9n\u00e9gal, le mil est bien plus qu'un aliment : il est l'\u00e2me de la civilisation agraire. Les griots \u2014 ces gardiens de la m\u00e9moire orale \u2014 chantent le mil dans leurs r\u00e9cits g\u00e9n\u00e9alogiques, et les proverbes wolof regorgent de r\u00e9f\u00e9rences au grain sacr\u00e9. Chez les S\u00e9r\u00e8res, peuple d'agriculteurs par excellence, le mil est au c\u0153ur des c\u00e9r\u00e9monies d'initiation et des rites de passage. Les pr\u00e9mices de la r\u00e9colte sont offertes aux anc\u00eatres avant toute consommation humaine. Le grenier \u00e0 mil repr\u00e9sente la richesse familiale et sa gestion rel\u00e8ve de la responsabilit\u00e9 de l'a\u00een\u00e9. Dans la cosmogonie s\u00e9r\u00e8re, le mil est li\u00e9 \u00e0 la fertilit\u00e9 de la terre et \u00e0 la p\u00e9rennit\u00e9 du lignage. Les femmes, pilier de la transformation du mil, d\u00e9tiennent un savoir culinaire qui constitue un v\u00e9ritable patrimoine immat\u00e9riel. Le pilage du mil au mortier, rythm\u00e9 par des chants cadenc\u00e9s, reste l'un des sons les plus embl\u00e9matiques de la campagne s\u00e9n\u00e9galaise, m\u00eame si les moulins m\u00e9caniques se r\u00e9pandent progressivement.",
    traditionalPractices: [
      "Le roulage manuel de la semoule de mil dans de grandes calebasses, geste ancestral transmis de m\u00e8re en fille qui exige patience et dext\u00e9rit\u00e9 pour obtenir des grains r\u00e9guliers.",
      "La conservation du mil dans des greniers traditionnels en banco surmontant les cases, o\u00f9 la fum\u00e9e du foyer prot\u00e8ge naturellement le grain des insectes ravageurs.",
      "Le pilage collectif du mil au mortier par les femmes du village, accompagn\u00e9 de chants rythm\u00e9s qui synchronisent les coups de pilon et transforment la corv\u00e9e en moment de convivialit\u00e9.",
      "L'offrande des pr\u00e9mices du mil aux anc\u00eatres et aux esprits protecteurs du terroir avant la premi\u00e8re consommation de la nouvelle r\u00e9colte, rite encore pratiqu\u00e9 en pays s\u00e9r\u00e8re.",
      "La pr\u00e9paration du \u00ab soungouf \u00bb, boisson de mil ferment\u00e9 l\u00e9g\u00e8rement alcoolis\u00e9e, servie lors des grandes c\u00e9r\u00e9monies traditionnelles et des f\u00eates de r\u00e9colte en Casamance.",
    ],
    famousQuoteOrSaying:
      "\u00ab Ku am dugub, am na nit. \u00bb \u2014 Celui qui a du mil a des gens. (Proverbe wolof)",
    imageFile: '/images/sections/regional-senegal.webp',
  },

  // === MALI ===
  {
    slug: 'mali',
    state: 'Mali',
    region: "Afrique de l'Ouest",
    tagline:
      "Grenier \u00e0 mil du Sahel, o\u00f9 le t\u00f4 quotidien incarne la r\u00e9silience et la fiert\u00e9 d'un peuple mill\u00e9naire.",
    description:
      "Le Mali figure parmi les cinq plus grands producteurs mondiaux de mil, avec une production annuelle d\u00e9passant r\u00e9guli\u00e8rement 1,5 million de tonnes. Dans ce vaste pays sah\u00e9lien o\u00f9 le d\u00e9sert grignote chaque ann\u00e9e de nouvelles terres, le mil \u00e0 chandelle et le sorgho constituent la base alimentaire de plus de 80 % de la population rurale. Les r\u00e9gions de S\u00e9gou, Sikasso, Mopti et Koulikoro sont le c\u0153ur battant de cette agriculture mill\u00e9naire. Le t\u00f4 \u2014 p\u00e2te \u00e9paisse de farine de mil ou de sorgho \u2014 est consum\u00e9 quotidiennement dans la quasi-totalit\u00e9 des foyers maliens, des huttes de banco de la brousse aux maisons de la capitale Bamako. La culture malienne est profond\u00e9ment li\u00e9e au cycle du mil : le calendrier agricole rythme la vie sociale, les c\u00e9r\u00e9monies d'initiation des jeunes Bambara co\u00efncident avec les p\u00e9riodes de semis et de r\u00e9colte, et les griots mandingues chantent la noblesse du mil dans leurs \u00e9pop\u00e9es. L'empire du Mali, fond\u00e9 par Soundiata Ke\u00efta au XIIIe si\u00e8cle, a b\u00e2ti une partie de sa prosp\u00e9rit\u00e9 sur la ma\u00eetrise de la culture du mil et du sorgho. Aujourd'hui encore, les vari\u00e9t\u00e9s paysannes s\u00e9lectionn\u00e9es au fil des g\u00e9n\u00e9rations repr\u00e9sentent un tr\u00e9sor g\u00e9n\u00e9tique irremplacable, adapt\u00e9 aux conditions climatiques extr\u00eames du Sahel.",
    primaryMillets: ['pearl-millet', 'sorghum'],
    iconicDishes: [
      {
        name: 'T\u00f4',
        millet: 'Mil \u00e0 chandelle / Sorgho',
        description:
          "Le t\u00f4 est le plat national du Mali, une p\u00e2te dense et \u00e9lastique pr\u00e9par\u00e9e en d\u00e9layant de la farine de mil ou de sorgho dans de l'eau bouillante, tout en remuant vigoureusement avec une spatule en bois appel\u00e9e \u00ab fourouni \u00bb. La cuisson demande force et endurance : la p\u00e2te \u00e9paissit progressivement et le brassage doit \u00eatre continu pour \u00e9viter les grumeaux. Le t\u00f4 est servi en portions individuelles ou dans un grand plat commun, accompagn\u00e9 de sauces vari\u00e9es \u2014 sauce gombo, sauce arachide, sauce feuilles de baobab \u2014 qui lui conf\u00e8rent saveur et onctuosit\u00e9. Un Malien consid\u00e8re qu'il n'a pas mang\u00e9 s'il n'a pas consomm\u00e9 de t\u00f4 dans la journ\u00e9e.",
      },
      {
        name: 'D\u00e9gu\u00e9',
        millet: 'Mil \u00e0 chandelle',
        description:
          "Le d\u00e9gu\u00e9 est un dessert raffra\u00eechissant et nutritif compos\u00e9 de petites boulettes de farine de mil cuites \u00e0 la vapeur, m\u00e9lang\u00e9es avec du lait caill\u00e9 sucr\u00e9 ou du yaourt. Les boulettes, roul\u00e9es \u00e0 la main avec une r\u00e9gularit\u00e9 qui t\u00e9moigne de l'habilet\u00e9 de la cuisini\u00e8re, sont l\u00e9g\u00e8rement croquantes \u00e0 l'ext\u00e9rieur et tendres au c\u0153ur. Parfum\u00e9 \u00e0 la vanille, \u00e0 la muscade ou \u00e0 la fleur d'oranger, le d\u00e9gu\u00e9 est servi frais comme go\u00fbter ou dessert, particuli\u00e8rement appr\u00e9ci\u00e9 pendant le Ramadan \u00e0 la rupture du je\u00fbne. C'est \u00e9galement le cadeau gourmand traditionnel offert aux visiteurs et aux nouvelles accouchées.",
      },
      {
        name: 'Couscous de mil malien',
        millet: 'Mil \u00e0 chandelle',
        description:
          "Le couscous de mil \u00e0 la malienne se distingue de son cousin s\u00e9n\u00e9galais par sa pr\u00e9paration et ses accompagnements. La semoule de mil est roul\u00e9e plus grossi\u00e8rement, donnant des grains plus g\u00e9n\u00e9reux, puis cuite \u00e0 la vapeur en plusieurs passes successives. Il est traditionnellement napp\u00e9 d'une sauce riche en feuilles de baobab ou en gombo frais, agr\u00e9ment\u00e9e de poisson fum\u00e9, de viande s\u00e9ch\u00e9e ou de poudre d'arachide. Dans la r\u00e9gion de Mopti, on pr\u00e9pare un couscous de mil sp\u00e9cial pour les grandes c\u00e9r\u00e9monies qui peut nourrir des centaines de convives.",
      },
      {
        name: 'Moni',
        millet: 'Mil \u00e0 chandelle',
        description:
          "Le moni est la bouillie de mil du petit matin, consomm\u00e9e dans la quasi-totalit\u00e9 des foyers maliens d\u00e8s l'aube. La farine de mil est dilu\u00e9e dans de l'eau ou du lait, cuite \u00e0 feu doux et sucr\u00e9e au go\u00fbt. Certaines variantes incorporent de la p\u00e2te d'arachide, du tamarin ou du pain de singe pour un apport nutritionnel suppl\u00e9mentaire. Le moni est particuli\u00e8rement recommand\u00e9 pour les enfants en bas \u00e2ge et constitue souvent le premier aliment de sevrage dans les zones rurales. Les m\u00e8res maliennes consid\u00e8rent le moni de mil comme sup\u00e9rieur \u00e0 toute bouillie industrielle pour la croissance de leurs enfants.",
      },
    ],
    festivals: [
      {
        name: 'F\u00eates de la moisson',
        description:
          "Les f\u00eates de la moisson c\u00e9l\u00e8brent la fin des r\u00e9coltes dans les communaut\u00e9s rurales maliennes. Pendant plusieurs jours, les villages s'animent de danses masqu\u00e9es, de chants de louange et de festins communautaires. Chez les Bambara, les Dogon et les Minianka, ces f\u00eates sont l'occasion de remercier les forces de la nature et les anc\u00eatres pour la g\u00e9n\u00e9rosit\u00e9 de la terre.",
        milletConnection:
          "Le mil nouveau est le protagoniste de ces c\u00e9l\u00e9brations. Les premi\u00e8res gerbes sont pr\u00e9sent\u00e9es au chef du village et aux anc\u00eatres avant toute consommation. Un t\u00f4 pr\u00e9par\u00e9 avec la farine du mil fra\u00eechement r\u00e9colt\u00e9 est partag\u00e9 par l'ensemble de la communaut\u00e9. Du dolo (bi\u00e8re de sorgho) est bras\u00e9 sp\u00e9cialement pour l'occasion, et les meilleurs danseurs re\u00e7oivent des mesures de mil en r\u00e9compense.",
      },
      {
        name: 'Tabaski malienne',
        description:
          "La Tabaski au Mali est une f\u00eate familiale majeure c\u00e9l\u00e9br\u00e9e avec une solennit\u00e9 particuli\u00e8re. Apr\u00e8s la pri\u00e8re collective du matin et le sacrifice du mouton, les familles \u00e9largies se r\u00e9unissent pour des repas copieux qui durent toute la journ\u00e9e. C'est un moment de r\u00e9conciliation et de partage entre g\u00e9n\u00e9rations.",
        milletConnection:
          "Le t\u00f4 de mil ou de sorgho accompagne invariablement la viande de mouton lors de la Tabaski. Le d\u00e9gu\u00e9 est pr\u00e9par\u00e9 en quantit\u00e9s g\u00e9n\u00e9reuses pour le dessert. Les familles les plus ais\u00e9es distribuent du mil aux voisins d\u00e9munis, perp\u00e9tuant la tradition de solidarit\u00e9 qui entoure cette c\u00e9l\u00e9bration sacr\u00e9e.",
      },
    ],
    culturalSignificance:
      "Le mil est inscrit au c\u0153ur m\u00eame de l'identit\u00e9 malienne. L'\u00e9pop\u00e9e de Soundiata Ke\u00efta, r\u00e9cit fondateur de l'empire mandingue transmis par les griots depuis le XIIIe si\u00e8cle, fait r\u00e9f\u00e9rence au mil comme symbole de prosp\u00e9rit\u00e9 et de puissance. Chez les Bambara, le mil est associ\u00e9 au concept de \u00ab faso \u00bb (la patrie) et sa culture collective incarne les valeurs de solidarit\u00e9 et d'entraide. Les Dogon, peuple des falaises de Bandiagara, int\u00e8grent le mil dans leur cosmogonie complexe : selon leurs mythes, le Renard p\u00e2le d\u00e9roba les premi\u00e8res semences de mil au Nommo cr\u00e9ateur, et c'est de ce vol originel que na\u00eet l'agriculture humaine. Le grenier dogon, avec son architecture en banco coiff\u00e9e d'un toit de paille conique, est class\u00e9 au patrimoine mondial de l'UNESCO. La musique malienne elle-m\u00eame \u2014 de la kora aux balafons \u2014 puise son inspiration dans les rythmes du pilage et du vannage du mil, et de nombreuses m\u00e9lodies c\u00e9l\u00e8bres reproduisent la cadence du pilon frappant le mortier.",
    traditionalPractices: [
      "La pr\u00e9paration collective du t\u00f4 dans les grandes marmites familiales, o\u00f9 les femmes se relaient pour remuer la p\u00e2te \u00e9paisse avec le fourouni, car la t\u00e2che exige une force physique consid\u00e9rable.",
      "Le vannage du mil au vent par les femmes, geste gracieux et technique qui consiste \u00e0 lancer le grain en l'air pour s\u00e9parer les balles l\u00e9g\u00e8res du grain lourd.",
      "Le stockage du mil dans les greniers en banco des concessions dogon, \u00e9lev\u00e9s sur des pilotis de pierre pour prot\u00e9ger le grain de l'humidit\u00e9 et des rongeurs.",
      "Le brassage du dolo (bi\u00e8re de sorgho) par les \u00ab doloti\u00e8res \u00bb, femmes sp\u00e9cialis\u00e9es qui ma\u00eetrisent un processus de fermentation de plusieurs jours requi\u00e9rant un savoir-faire ancestral.",
      "L'utilisation de vari\u00e9t\u00e9s pr\u00e9coces de mil (90 jours) dans les zones nord du pays, o\u00f9 la saison des pluies est trop courte pour les vari\u00e9t\u00e9s classiques.",
    ],
    famousQuoteOrSaying:
      "\u00ab Mun\u025b y\u025br\u025b, ny\u0254g\u0254n y\u025br\u025b, duguba y\u025br\u025b. \u00bb \u2014 L\u00e0 o\u00f9 il y a du mil, il y a des hommes, il y a un grand village. (Proverbe bambara)",
    imageFile: '/images/sections/regional-mali.webp',
  },

  // === BURKINA FASO ===
  {
    slug: 'burkina-faso',
    state: 'Burkina Faso',
    region: "Afrique de l'Ouest",
    tagline:
      "Pays des Hommes int\u00e8gres, o\u00f9 le sorgho et le dolo forgent les liens communautaires depuis des mill\u00e9naires.",
    description:
      "Le Burkina Faso, pays enclavé du Sahel, tire son nom de deux langues locales : \u00ab burkina \u00bb (int\u00e9grit\u00e9 en moor\u00e9) et \u00ab faso \u00bb (patrie en dioula). Le sorgho et le mil y sont les piliers de l'alimentation nationale, repr\u00e9sentant ensemble plus de 70 % de la production c\u00e9r\u00e9ali\u00e8re du pays. Le sorgho, en particulier, domine les plateaux centraux et l'ouest du pays, tandis que le mil \u00e0 chandelle pr\u00e9vaut dans les zones nord plus arides. La cuisine burkinab\u00e8 est bâtie autour du t\u00f4 de sorgho, consomm\u00e9 midi et soir par la majorit\u00e9 de la population. Mais c'est le dolo \u2014 bi\u00e8re de sorgho ferment\u00e9e \u2014 qui conf\u00e8re au Burkina sa sp\u00e9cificit\u00e9 culturelle la plus remarquable. Les \u00ab cabarets \u00bb de dolo, ces lieux de rencontre \u00e0 ciel ouvert o\u00f9 l'on boit la bi\u00e8re rouge dans des calebasses, sont le principal espace de sociabilit\u00e9 dans les villages mossi, bobo, gourounsi et lobi. Les Mossi, ethnie majoritaire, organisent toute leur vie sociale autour de la culture du sorgho et du mil : mariages, fun\u00e9railles, intronisations de chefs \u2014 aucun \u00e9v\u00e9nement ne peut se d\u00e9rouler sans t\u00f4 ni dolo. Le pays produit environ 1,8 million de tonnes de sorgho par an, ce qui le place parmi les dix premiers producteurs mondiaux.",
    primaryMillets: ['sorghum', 'pearl-millet'],
    iconicDishes: [
      {
        name: 'T\u00f4 de sorgho',
        millet: 'Sorgho',
        description:
          "Le t\u00f4 de sorgho est le plat quotidien du Burkina Faso, pr\u00e9par\u00e9 avec de la farine de sorgho blanc ou rouge d\u00e9lay\u00e9e dans de l'eau bouillante. La cuisson se fait en deux \u00e9tapes : d'abord une bouillie liquide, puis l'ajout progressif de farine suppl\u00e9mentaire en remuant vigoureusement pour obtenir une p\u00e2te ferme et homog\u00e8ne. Le t\u00f4 burkinab\u00e8 est g\u00e9n\u00e9ralement accompagn\u00e9 de sauce baobab, de sauce oseille ou de sauce gombo fra\u00ees. La qualit\u00e9 du t\u00f4 \u2014 sa fermet\u00e9, sa texture, son absence de grumeaux \u2014 est un crit\u00e8re important dans l'\u00e9valuation des comp\u00e9tences culinaires d'une femme burkinab\u00e8.",
      },
      {
        name: 'Dolo (bi\u00e8re de sorgho)',
        millet: 'Sorgho',
        description:
          "Le dolo est la bi\u00e8re traditionnelle burkinab\u00e8, bras\u00e9e exclusivement \u00e0 partir de sorgho rouge germ\u00e9 et ferment\u00e9. La pr\u00e9paration s'\u00e9tend sur quatre \u00e0 cinq jours : germination du sorgho, concassage, cuisson prolong\u00e9e dans de grandes jarres en terre cuite, puis fermentation naturelle. Le dolo se boit frais, l\u00e9g\u00e8rement acide et petillant, avec un degr\u00e9 d'alcool mod\u00e9r\u00e9 (environ 3-4 %). Bien plus qu'une simple boisson, le dolo est le ciment social du Burkina : les cabarets de dolo sont les lieux o\u00f9 se r\u00e8glent les diff\u00e9rends, se nouent les alliances et se transmettent les nouvelles.",
      },
      {
        name: 'Zoom-koom',
        millet: 'Mil \u00e0 chandelle',
        description:
          "Le zoom-koom est une boisson raffra\u00eechissante et \u00e9nergisante \u00e0 base de farine de mil dilu\u00e9e dans de l'eau froide, sucr\u00e9e et parfum\u00e9e au gingembre, au tamarin ou au citron. Son nom en moor\u00e9 signifie litt\u00e9ralement \u00ab eau de farine \u00bb. Vendu par les femmes dans les march\u00e9s, les gares routi\u00e8res et les rues de Ouagadougou, le zoom-koom est la boisson populaire par excellence pendant les chaleurs intenses de la saison s\u00e8che. Riche en glucides et en min\u00e9raux, il constitue un v\u00e9ritable repas liquide pour les travailleurs qui ne peuvent pas s'arr\u00eater d\u00e9jeuner.",
      },
      {
        name: 'Ben-saalga',
        millet: 'Mil \u00e0 chandelle',
        description:
          "Le ben-saalga est une bouillie ferment\u00e9e de mil, aliment de sevrage traditionnel destin\u00e9 aux nourrissons et aux jeunes enfants. La pr\u00e9paration commence par le trempage et la mouture humide du mil, suivi d'une fermentation naturelle de plusieurs heures qui am\u00e9liore la digestibilit\u00e9 et la valeur nutritionnelle du grain. La bouillie obtenue est l\u00e9g\u00e8rement acide et onctueuse. Des recherches de l'Institut de recherche en sciences de la sant\u00e9 (IRSS) de Ouagadougou ont d\u00e9montr\u00e9 que la fermentation du ben-saalga augmente la biodisponibilit\u00e9 du fer et du zinc, nutriments essentiels pour la croissance des enfants.",
      },
    ],
    festivals: [
      {
        name: 'F\u00eate du Dolo',
        description:
          "La f\u00eate du Dolo est une c\u00e9l\u00e9bration culturelle unique au Burkina Faso qui honore la bi\u00e8re de sorgho et les doloti\u00e8res qui la brassent. Organis\u00e9e dans plusieurs villes et villages, cette f\u00eate r\u00e9unit des brasseuses venues de toutes les r\u00e9gions, des musiciens traditionnels et la communaut\u00e9 tout enti\u00e8re dans une atmosph\u00e8re de partage et de festivit\u00e9.",
        milletConnection:
          "Le sorgho rouge est l'unique ingr\u00e9dient du dolo c\u00e9l\u00e9br\u00e9 lors de cette f\u00eate. Les meilleures doloti\u00e8res pr\u00e9sentent leurs brassin et un jury d\u00e9signe le meilleur dolo de l'ann\u00e9e. La f\u00eate est aussi l'occasion de rendre hommage aux vari\u00e9t\u00e9s de sorgho locales et de sensibiliser la jeunesse \u00e0 la pr\u00e9servation de cette tradition mill\u00e9naire.",
      },
      {
        name: 'SIAO (Salon International de l\'Artisanat de Ouagadougou)',
        description:
          "Le SIAO est un \u00e9v\u00e9nement biennal qui met en valeur l'artisanat et le patrimoine culturel de l'Afrique. Pendant une semaine, Ouagadougou accueille des artisans, des cuisini\u00e8res et des producteurs de toute l'Afrique de l'Ouest dans une grande c\u00e9l\u00e9bration de la cr\u00e9ativit\u00e9 et des savoir-faire traditionnels.",
        milletConnection:
          "Les stands gastronomiques du SIAO proposent une large gamme de pr\u00e9parations \u00e0 base de mil et de sorgho : t\u00f4, dolo, zoom-koom, beignets de mil et g\u00e2teaux de sorgho. Le salon est devenu une vitrine pour les innovations culinaires \u00e0 base de c\u00e9r\u00e9ales locales, contribuant \u00e0 revaloriser ces aliments aupr\u00e8s des nouvelles g\u00e9n\u00e9rations urbaines.",
      },
    ],
    culturalSignificance:
      "Au Burkina Faso, le sorgho et le mil structurent l'ensemble de l'organisation sociale. Chez les Mossi, le sorgho rouge utilis\u00e9 pour le dolo a une dimension quasi sacr\u00e9e : le Mogho Naba (roi des Mossi) ne peut \u00eatre intronisé sans que du dolo soit vers\u00e9 en libation sur la terre des anc\u00eatres. Les fun\u00e9railles, moments cl\u00e9s de la vie communautaire, exigent la distribution de grandes quantit\u00e9s de t\u00f4 et de dolo. La doloti\u00e8re, femme sp\u00e9cialis\u00e9e dans le brassage, occupe un rang social respect\u00e9 et jouit d'une ind\u00e9pendance \u00e9conomique rare dans la soci\u00e9t\u00e9 traditionnelle. Son cabaret est un espace de libert\u00e9 de parole et de r\u00e9solution des conflits. Les masques rituels des Bobo et des Bwa, inscrits au patrimoine immat\u00e9riel de l'humanit\u00e9, dansent lors des c\u00e9r\u00e9monies de r\u00e9colte pour assurer la fertilit\u00e9 des champs de sorgho. Le cycle complet du sorgho \u2014 du semis au dolo \u2014 constitue le socle d'une cosmovision qui lie l'homme \u00e0 la terre, aux anc\u00eatres et aux forces invisibles de la nature.",
    traditionalPractices: [
      "Le brassage du dolo selon un processus ancestral de quatre jours impliquant germination, concassage, ébullition et fermentation dans des jarres en terre cuite transmises de m\u00e8re en fille.",
      "La construction de greniers en banco de forme cylindrique coiff\u00e9s de toits coniques en paille, \u00e9lev\u00e9s sur des socles de pierre, sp\u00e9cifiques \u00e0 chaque groupe ethnique.",
      "L'organisation de journ\u00e9es de travail collectif (\u00ab sossoga \u00bb chez les Mossi) pour le labour et la r\u00e9colte du sorgho, r\u00e9mun\u00e9r\u00e9es par un repas de t\u00f4 et du dolo \u00e0 volont\u00e9.",
      "La s\u00e9lection paysanne de vari\u00e9t\u00e9s de sorgho adapt\u00e9es \u00e0 chaque terroir, conserv\u00e9es et \u00e9chang\u00e9es entre femmes lors des march\u00e9s hebdomadaires.",
      "La pr\u00e9paration du \u00ab banda \u00bb, galettes de sorgho s\u00e9ch\u00e9es au soleil, utilis\u00e9es comme provisions de voyage par les commer\u00e7ants et les bergers transhumants.",
    ],
    famousQuoteOrSaying:
      "\u00ab Ka saan n\u025b ka y\u0268\u0268r\u025b, ba sorgho n\u025b ka pa\u0263a. \u00bb \u2014 La pluie annonce l'espoir, le sorgho annonce le festin. (Proverbe mossi)",
    imageFile: '/images/sections/regional-burkina-faso.webp',
  },

  // === NIGER ===
  {
    slug: 'niger',
    state: 'Niger',
    region: "Afrique de l'Ouest / Sahel",
    tagline:
      "Berceau du mil \u00e0 chandelle, o\u00f9 la c\u00e9r\u00e9ale ancestrale d\u00e9fie le d\u00e9sert et nourrit un peuple courageux.",
    description:
      "Le Niger, vaste pays sah\u00e9lien aux trois quarts d\u00e9sertique, est reconnu par les arch\u00e9ologues et les g\u00e9n\u00e9ticiens comme le berceau probable de la domestication du mil \u00e0 chandelle (Pennisetum glaucum). Des vestiges arch\u00e9ologiques d\u00e9couverts dans les r\u00e9gions de l'A\u00efr et du T\u00e9n\u00e9r\u00e9 attestent d'une culture du mil datant de 3 000 \u00e0 4 000 ans avant notre \u00e8re, faisant du Niger un site fondateur de l'agriculture africaine. Aujourd'hui encore, le mil repr\u00e9sente plus de 65 % de la production c\u00e9r\u00e9ali\u00e8re nationale et constitue la base alimentaire de plus de 20 millions de Nig\u00e9riens. Le pays produit annuellement 3 \u00e0 4 millions de tonnes de mil, ce qui en fait le deuxi\u00e8me producteur mondial apr\u00e8s l'Inde. Dans les r\u00e9gions de Maradi, Zinder, Tahoua et Dosso, chaque parcelle de terre cultivable est consacr\u00e9e au mil, souvent en association avec le ni\u00e9b\u00e9 (haricot). La r\u00e9silience extraordinaire du mil \u2014 capable de produire des grains avec seulement 200 mm de pluie annuelle \u2014 en fait la seule c\u00e9r\u00e9ale viable dans les conditions climatiques extr\u00eames du Sahel nig\u00e9rien. Les vari\u00e9t\u00e9s locales, s\u00e9lectionn\u00e9es sur des mill\u00e9naires, constituent un patrimoine g\u00e9n\u00e9tique d'importance mondiale pour l'adaptation aux changements climatiques.",
    primaryMillets: ['pearl-millet'],
    iconicDishes: [
      {
        name: 'Fura',
        millet: 'Mil \u00e0 chandelle',
        description:
          "Le fura est une pr\u00e9paration embl\u00e9matique du Niger, consistant en de petites boules denses de p\u00e2te de mil cuite et \u00e9pic\u00e9e, que l'on \u00e9miette ensuite dans du lait caill\u00e9 (nono) pour obtenir une boisson nourrissante appel\u00e9e \u00ab fura da nono \u00bb. La p\u00e2te est pr\u00e9par\u00e9e en pilant du mil cuit avec des \u00e9pices \u2014 gingembre, poivre de Guin\u00e9e, clou de girofle \u2014 puis fa\u00e7onn\u00e9e en boules r\u00e9guli\u00e8res. Le fura da nono est le go\u00fbter et la boisson de r\u00e9cup\u00e9ration par excellence des bergers peuls et des travailleurs des champs, v\u00e9ritable concentr\u00e9 d'\u00e9nergie et de prot\u00e9ines.",
      },
      {
        name: 'Tuwo',
        millet: 'Mil \u00e0 chandelle',
        description:
          "Le tuwo est l'\u00e9quivalent nig\u00e9rien du t\u00f4 malien : une p\u00e2te \u00e9paisse et lisse de farine de mil, pr\u00e9par\u00e9e en remuant vigoureusement la farine dans de l'eau bouillante jusqu'\u00e0 obtention d'une consistance ferme. Servi en portions g\u00e9n\u00e9reuses, le tuwo est accompagn\u00e9 de sauces vari\u00e9es : sauce d'oseille (yakuwa), sauce d'arachide (miyar gyada), sauce de gombo ou sauce de feuilles de baobab. Le tuwo de mil est le repas principal du soir dans la quasi-totalit\u00e9 des foyers nig\u00e9riens, et refuser un bol de tuwo offert est consid\u00e9r\u00e9 comme un grave manque de respect.",
      },
      {
        name: 'Foura',
        millet: 'Mil \u00e0 chandelle',
        description:
          "La foura est une variante s\u00e9ch\u00e9e et grill\u00e9e du fura, sous forme de galettes ou de boulettes aplaties cuites sur une plaque chaude, puis s\u00e9ch\u00e9es au soleil pour une conservation prolong\u00e9e. Les voyageurs et les nomades touaregs emportent la foura comme provision de route : l\u00e9g\u00e8re, compacte et \u00e9nerg\u00e9tique, elle se conserve plusieurs semaines et se consomme r\u00e9hydrat\u00e9e dans du lait ou de l'eau. La foura incarne l'adaptation des populations sah\u00e9liennes \u00e0 un environnement o\u00f9 la mobilit\u00e9 est une n\u00e9cessit\u00e9 vitale, et sa recette n'a pratiquement pas chang\u00e9 depuis des si\u00e8cles.",
      },
      {
        name: 'Kilishi et accompagnements de mil',
        millet: 'Mil \u00e0 chandelle',
        description:
          "Le kilishi, viande s\u00e9ch\u00e9e \u00e9pic\u00e9e nig\u00e9rienne comparable au jerky, est traditionnellement consomm\u00e9 avec du tuwo de mil ou des bouillies de mil. Les fines tranches de viande de b\u0153uf sont enrob\u00e9es d'une p\u00e2te d'\u00e9pices et d'arachide puis s\u00e9ch\u00e9es au soleil et l\u00e9g\u00e8rement grill\u00e9es. L'association kilishi-mil illustre la compl\u00e9mentarit\u00e9 entre \u00e9leveurs peuls et cultivateurs haoussa dans la culture alimentaire nig\u00e9rienne. Le mil fournit les glucides et le kilishi les prot\u00e9ines, formant ensemble un repas complet adapt\u00e9 aux conditions de vie du Sahel.",
      },
    ],
    festivals: [
      {
        name: 'Cure Sal\u00e9e',
        description:
          "La Cure Sal\u00e9e est un rassemblement annuel des nomades touaregs et peuls \u00e0 Ingall, dans la r\u00e9gion d'Agadez, \u00e0 la fin de la saison des pluies. Pendant plusieurs jours, des milliers de nomades convergent avec leurs troupeaux pour acc\u00e9der aux p\u00e2turages sal\u00e9s. C'est l'occasion de f\u00eates, de mariages, de concours de beaut\u00e9 et d'\u00e9changes commerciaux.",
        milletConnection:
          "Les \u00e9leveurs nomades profitent de la Cure Sal\u00e9e pour troquer du b\u00e9tail et du lait contre du mil cultiv\u00e9 par les agriculteurs s\u00e9dentaires. Les femmes pr\u00e9parent du fura da nono et des bouillies de mil en quantit\u00e9s consid\u00e9rables pour nourrir les participants. Le mil est la monnaie d'\u00e9change fondamentale entre monde pastoral et monde agricole lors de ce rassemblement ancestral.",
      },
      {
        name: 'F\u00eate de la R\u00e9colte du Mil',
        description:
          "C\u00e9l\u00e9br\u00e9e dans les villages haoussa et djerma apr\u00e8s la moisson, cette f\u00eate marque la fin de la saison de labeur et le d\u00e9but de la p\u00e9riode de repos. Les familles remercient Dieu et les esprits de la terre pour la r\u00e9colte obtenue. Des pri\u00e8res collectives, des danses et des festins ponctuent cette c\u00e9l\u00e9bration qui peut durer plusieurs jours.",
        milletConnection:
          "Le premier tuwo pr\u00e9par\u00e9 avec le mil nouveau est un moment sacr\u00e9. Le chef du village go\u00fbte symboliquement le premier avant que la communaut\u00e9 puisse consommer la r\u00e9colte. Des portions de mil sont offertes aux marabouts et aux n\u00e9cessiteux. La taille de la r\u00e9colte d\u00e9termine l'ampleur des festivit\u00e9s et le niveau de s\u00e9r\u00e9nit\u00e9 de la communaut\u00e9 pour les mois \u00e0 venir.",
      },
    ],
    culturalSignificance:
      "Le Niger porte dans ses sols la m\u00e9moire des premi\u00e8res cultures de mil de l'humanit\u00e9. Les sites arch\u00e9ologiques de Birimi et de l'A\u00efr ont r\u00e9v\u00e9l\u00e9 des grains de mil domestiqu\u00e9 vieux de plus de 4 000 ans, t\u00e9moignant du r\u00f4le pionnier des peuples du Niger dans la r\u00e9volution agricole africaine. Cette anciennet\u00e9 se reflète dans la profondeur des traditions li\u00e9es au mil. Chez les Haoussa, le mil est li\u00e9 aux notions de \u00ab arziki \u00bb (prosp\u00e9rit\u00e9) et de \u00ab baraka \u00bb (b\u00e9n\u00e9diction divine). Le grenier plein de mil est le signe de la r\u00e9ussite du p\u00e8re de famille, et la premi\u00e8re question pos\u00e9e lors des salutations traditionnelles concerne la sant\u00e9 des champs de mil. Les Touaregs, bien que pasteurs nomades, entretiennent des liens \u00e9troits avec le mil \u00e0 travers le commerce transsaharien et la consommation quotidienne de bouillies et de galettes. Le mil nig\u00e9rien a essaim\u00e9 \u00e0 travers toute l'Afrique de l'Ouest et jusqu'en Inde, o\u00f9 les vari\u00e9t\u00e9s d'origine sah\u00e9lienne sont arriv\u00e9es il y a environ 3 000 ans.",
    traditionalPractices: [
      "Le semis du mil en poquets apr\u00e8s les premi\u00e8res pluies, technique ancestrale o\u00f9 cinq \u00e0 sept graines sont d\u00e9pos\u00e9es dans chaque trou, garantissant au moins une lev\u00e9e m\u00eame en cas de s\u00e9cheresse temporaire.",
      "L'association mil-ni\u00e9b\u00e9 dans la m\u00eame parcelle, syst\u00e8me d'agriculture durable o\u00f9 le ni\u00e9b\u00e9 fixe l'azote atmosph\u00e9rique dans le sol au b\u00e9n\u00e9fice du mil.",
      "La construction de greniers sur pilotis en paille tress\u00e9e, sp\u00e9cifiques au Niger, permettant une ventilation naturelle qui pr\u00e9serve le grain pendant plus d'un an.",
      "La pr\u00e9paration du \u00ab dambou \u00bb, semoule de mil cuite \u00e0 la vapeur avec des feuilles de moringa, plat haoussa conjuguant l'\u00e9nergie du mil et les micronutriments du moringa.",
      "Le \u00ab gayya \u00bb, travail collectif d'entraide pour la r\u00e9colte du mil, o\u00f9 des dizaines de villageois moissonnent ensemble le champ d'un m\u00e9nage, r\u00e9compens\u00e9s par un repas communautaire.",
    ],
    famousQuoteOrSaying:
      "\u00ab Gero shi ne rai. \u00bb \u2014 Le mil, c'est la vie. (Proverbe haoussa)",
    imageFile: '/images/sections/regional-niger.webp',
  },

  // === FRANCE ===
  {
    slug: 'france',
    state: 'France',
    region: 'Europe',
    tagline:
      "L'ancienne c\u00e9r\u00e9ale oubli\u00e9e revient en gr\u00e2ce, des gaudes bourguignonnes aux tables bio-gastronomiques.",
    description:
      "La France entretient avec le millet une relation s\u00e9culaire m\u00e9connue. Du N\u00e9olithique jusqu'au XVIIIe si\u00e8cle, le millet commun (Panicum miliaceum) et le millet des oiseaux (Setaria italica) \u00e9taient des cultures majeures dans de nombreuses r\u00e9gions fran\u00e7aises, en particulier la Bourgogne, la Franche-Comt\u00e9, le Sud-Ouest (Gascogne, B\u00e9arn) et la Bresse. Les gaudes \u2014 bouillie de millet grill\u00e9 \u2014 \u00e9taient si r\u00e9pandues en Franche-Comt\u00e9 que les habitants de la r\u00e9gion \u00e9taient surnomm\u00e9s \u00ab les mangeurs de gaudes \u00bb ou \u00ab les ventres jaunes \u00bb. L'arriv\u00e9e du ma\u00efs d'Am\u00e9rique au XVIe si\u00e8cle, puis la g\u00e9n\u00e9ralisation du bl\u00e9 et de la pomme de terre, ont progressivement marginalis\u00e9 le millet dans l'agriculture fran\u00e7aise. Pendant deux si\u00e8cles, il a \u00e9t\u00e9 rel\u00e9gu\u00e9 au rang de nourriture pour oiseaux. Mais depuis les ann\u00e9es 2000, un mouvement de red\u00e9couverte porte le millet sur le devant de la sc\u00e8ne alimentaire fran\u00e7aise. Les magasins biologiques, les boulangeries artisanales et les restaurants gastronomiques int\u00e8grent d\u00e9sormais le millet dans leurs cr\u00e9ations. En 2023, l'Organisation des Nations Unies a d\u00e9clar\u00e9 l'Ann\u00e9e internationale du mil, donnant un \u00e9lan suppl\u00e9mentaire \u00e0 cette renaissance. Des agriculteurs biologiques cultivent \u00e0 nouveau le millet en Bourgogne, en Beauce et dans le Sud-Ouest, renouant avec une tradition agraire vieille de cinq mill\u00e9naires.",
    primaryMillets: ['proso-millet', 'foxtail-millet'],
    iconicDishes: [
      {
        name: 'Gaudes',
        millet: 'Millet commun',
        description:
          "Les gaudes sont l'h\u00e9ritage culinaire le plus embl\u00e9matique du millet en France. Cette bouillie \u00e9paisse, pr\u00e9par\u00e9e \u00e0 partir de farine de millet grill\u00e9 \u00e0 sec puis cuite longuement dans du lait ou de l'eau, \u00e9tait le plat quotidien des paysans de Franche-Comt\u00e9 et de Bresse du Moyen \u00c2ge jusqu'au XIXe si\u00e8cle. La farine, torr\u00e9fi\u00e9e jusqu'\u00e0 une couleur dor\u00e9e, d\u00e9veloppe un ar\u00f4me de noisette grillée incomparable. Les gaudes se mangeaient sal\u00e9es avec du lard ou sucr\u00e9es au miel. Aujourd'hui, des chefs comtois remettent les gaudes au go\u00fbt du jour, les d\u00e9clinant en cr\u00e8mes br\u00fbl\u00e9es, en polenta de millet ou en accompagnement de gibier.",
      },
      {
        name: 'Millas (Milhas)',
        millet: 'Millet commun',
        description:
          "Le millas, aussi appel\u00e9 milhas en gascon, est un g\u00e2teau-galette traditionnel du Sud-Ouest de la France, historiquement pr\u00e9par\u00e9 avec de la farine de millet avant d'\u00eatre adapt\u00e9 au ma\u00efs apr\u00e8s l'introduction de ce dernier. La recette ancestrale consiste \u00e0 cuire la farine de millet dans du lait sucr\u00e9, parfum\u00e9 \u00e0 la fleur d'oranger, puis \u00e0 verser la pr\u00e9paration dans un moule et \u00e0 la cuire au four jusqu'\u00e0 ce qu'une cro\u00fbte dor\u00e9e se forme. Le millas de millet conna\u00eet un regain d'int\u00e9r\u00eat dans le Gers et le B\u00e9arn, o\u00f9 des p\u00e2tissiers artisanaux restituent la version originale \u00e0 base de millet.",
      },
      {
        name: 'Galettes de millet bio',
        millet: 'Millet commun',
        description:
          "Les galettes de millet sont devenues un classique de la cuisine v\u00e9g\u00e9tarienne fran\u00e7aise contemporaine. Le millet est cuit \u00e0 l'eau, m\u00e9lang\u00e9 avec des l\u00e9gumes de saison (courgettes, carottes, oignons), des herbes fra\u00eeches et parfois du fromage de ch\u00e8vre, puis fa\u00e7onn\u00e9 en galettes dor\u00e9es \u00e0 la po\u00eale. Elles sont propos\u00e9es dans la plupart des magasins bio et des restaurants v\u00e9g\u00e9tariens de France. Riches en fibres et sans gluten, ces galettes r\u00e9pondent \u00e0 la demande croissante des consommateurs fran\u00e7ais pour une alimentation saine, locale et respectueuse de l'environnement.",
      },
      {
        name: 'Millet en cuisine gastronomique contemporaine',
        millet: 'Millet commun / Millet des oiseaux',
        description:
          "Les chefs fran\u00e7ais \u00e9toil\u00e9s int\u00e8grent d\u00e9sormais le millet dans leur r\u00e9pertoire culinaire, s\u00e9duits par sa texture fondante et son go\u00fbt d\u00e9licat de noisette. Le millet appara\u00eet en risotto cr\u00e9meux, en taboulé revisit\u00e9, en cro\u00fbte croustillante pour poissons et viandes, ou encore en dessert sous forme de cr\u00e8me au millet et lait d'amande. Thierry Marx, Alain Ducasse et d'autres grands noms de la gastronomie fran\u00e7aise ont contribu\u00e9 \u00e0 repositionner cette c\u00e9r\u00e9ale ancestrale comme un ingr\u00e9dient noble et cr\u00e9atif, digne des plus belles tables.",
      },
    ],
    festivals: [
      {
        name: 'F\u00eate des Gaudes (Franche-Comt\u00e9)',
        description:
          "La F\u00eate des Gaudes, organis\u00e9e dans plusieurs villages de Franche-Comt\u00e9 et de Bresse, c\u00e9l\u00e8bre le patrimoine culinaire r\u00e9gional li\u00e9 au millet et au ma\u00efs. Des d\u00e9gustations de gaudes traditionnelles, des concours de cuisine et des expositions sur l'histoire agricole de la r\u00e9gion attirent des milliers de visiteurs chaque ann\u00e9e.",
        milletConnection:
          "Les gaudes de millet, version originale ant\u00e9rieure \u00e0 celle au ma\u00efs, sont mises \u00e0 l'honneur. Des historiens et des agronomes pr\u00e9sentent l'histoire du millet en Franche-Comt\u00e9, et des producteurs locaux proposent de la farine de millet torr\u00e9fi\u00e9e \u00e0 l'ancienne. Cette f\u00eate contribue \u00e0 la red\u00e9couverte d'un patrimoine culinaire longtemps oublié.",
      },
      {
        name: 'Ann\u00e9e internationale du mil (2023)',
        description:
          "D\u00e9clar\u00e9e par l'Organisation des Nations Unies, l'Ann\u00e9e internationale du mil 2023 a donn\u00e9 lieu \u00e0 de nombreux \u00e9v\u00e9nements en France : colloques, d\u00e9gustations, ateliers de cuisine et publications. Le Salon de l'Agriculture de Paris a consacr\u00e9 un espace au mil et au millet, sensibilisant le grand public \u00e0 leurs qualit\u00e9s nutritionnelles et \u00e9cologiques.",
        milletConnection:
          "Cette ann\u00e9e sp\u00e9ciale a permis de mettre en lumi\u00e8re le pass\u00e9 c\u00e9r\u00e9alier de la France et de promouvoir la relance de la culture du millet dans l'agriculture biologique fran\u00e7aise. Des semences de millet commun adapt\u00e9es au terroir fran\u00e7ais sont d\u00e9sormais disponibles pour les agriculteurs, et la fili\u00e8re millet bio se structure progressivement.",
      },
    ],
    culturalSignificance:
      "Le millet occupe une place singuli\u00e8re dans l'histoire de France. Des fouilles arch\u00e9ologiques attestent de sa culture d\u00e8s le N\u00e9olithique, et les textes m\u00e9di\u00e9vaux le mentionnent comme l'une des c\u00e9r\u00e9ales les plus r\u00e9pandues dans le royaume. Le nom m\u00eame de la c\u00e9r\u00e9ale a donn\u00e9 son nom \u00e0 des lieux-dits, des patronymes et des expressions populaires. En Franche-Comt\u00e9, \u00eatre trait\u00e9 de \u00ab ventre jaune \u00bb (mangeur de gaudes) \u00e9tait \u00e0 la fois une moquerie et une marque d'identit\u00e9 r\u00e9gionale fièrement revendiqu\u00e9e. La d\u00e9couverte du Nouveau Monde et l'introduction du ma\u00efs ont boulevers\u00e9 le paysage c\u00e9r\u00e9alier fran\u00e7ais : en quelques g\u00e9n\u00e9rations, le ma\u00efs a remplac\u00e9 le millet dans les gaudes et le millas. Ce remplacement a \u00e9t\u00e9 si complet que le mot \u00ab millet \u00bb est devenu synonyme de graines pour oiseaux dans l'imaginaire collectif fran\u00e7ais. La renaissance actuelle du millet s'inscrit dans un mouvement plus large de retour aux c\u00e9r\u00e9ales anciennes, aux semences paysannes et \u00e0 une agriculture plus r\u00e9siliente face au changement climatique. Le millet, sobre en eau et r\u00e9sistant \u00e0 la chaleur, est d\u00e9sormais vu comme une culture d'avenir pour une agriculture durable en France.",
    traditionalPractices: [
      "La torr\u00e9faction de la farine de millet dans une po\u00eale en fonte avant cuisson, technique comtoise qui d\u00e9veloppe les ar\u00f4mes de noisette caract\u00e9ristiques des gaudes.",
      "Le s\u00e9chage du millet en gerbes suspendues dans les greniers des fermes bourguignonnes, m\u00e9thode qui permettait une conservation de plusieurs ann\u00e9es.",
      "La culture du millet en rotation avec le seigle et le sarrasin dans les sols pauvres du Massif central, syst\u00e8me agraire adapt\u00e9 aux terroirs difficiles.",
      "L'utilisation de la paille de millet pour le rembourrage des matelas et des oreillers, pratique courante dans les campagnes fran\u00e7aises jusqu'au d\u00e9but du XXe si\u00e8cle.",
    ],
    famousQuoteOrSaying:
      "\u00ab Qui mange gaudes le matin, travaille bien jusqu'au soir. \u00bb (Dicton comtois)",
    imageFile: '/images/sections/regional-france.webp',
  },

  // === QUEBEC ===
  {
    slug: 'quebec',
    state: 'Qu\u00e9bec',
    region: "Am\u00e9rique du Nord",
    tagline:
      "La Belle Province d\u00e9couvre le millet : nouvelle fronti\u00e8re de l'alimentation durable et sant\u00e9.",
    description:
      "Le Qu\u00e9bec, province francophone du Canada, est devenu en quelques ann\u00e9es un terrain fertile pour la d\u00e9couverte et l'adoption des millets. Si la c\u00e9r\u00e9ale n'a pas l'ancrage historique qu'elle poss\u00e8de en Afrique ou en Asie, le mouvement sant\u00e9 naturelle qu\u00e9b\u00e9cois, particuli\u00e8rement dynamique depuis les ann\u00e9es 1990, a fait du millet un pilier de l'alimentation biologique et v\u00e9g\u00e9tarienne. Les coop\u00e9ratives d'alimentation naturelle comme le R\u00e9seau des magasins La Moisson, les \u00e9piceries bio de Montr\u00e9al et les march\u00e9s fermiers de la r\u00e9gion de Qu\u00e9bec proposent du millet sous toutes ses formes : grain entier, flocons, farine et pr\u00e9parations pr\u00eates \u00e0 l'emploi. Le millet commun (Panicum miliaceum) est d\u00e9sormais cultiv\u00e9 par quelques fermes biologiques qu\u00e9b\u00e9coises, bien que la majorit\u00e9 de l'approvisionnement soit encore import\u00e9e. L'int\u00e9r\u00eat pour le millet au Qu\u00e9bec s'inscrit dans un contexte plus large de souverainet\u00e9 alimentaire, de diversification des cultures et d'adaptation aux changements climatiques. Les \u00e9t\u00e9s qu\u00e9b\u00e9cois, courts mais chauds, conviennent bien au millet commun qui a un cycle de culture de seulement 60 \u00e0 90 jours. Des chercheurs de l'Universit\u00e9 Laval et de l'Universit\u00e9 McGill \u00e9tudient le potentiel du millet comme culture compl\u00e9mentaire dans le syst\u00e8me agricole qu\u00e9b\u00e9cois, ouvrant la voie \u00e0 une production locale qui r\u00e9duirait la d\u00e9pendance aux importations.",
    primaryMillets: ['proso-millet', 'foxtail-millet'],
    iconicDishes: [
      {
        name: 'Porridge de millet qu\u00e9b\u00e9cois',
        millet: 'Millet commun',
        description:
          "Le porridge de millet \u00e0 la qu\u00e9b\u00e9coise est devenu un classique des petits-d\u00e9jeuners sant\u00e9 dans la Belle Province. Le millet est cuit lentement dans du lait d'avoine ou de la boisson de soya, agr\u00e9ment\u00e9 de sirop d'\u00e9rable \u2014 l'or blond du Qu\u00e9bec \u2014, de petits fruits sauvages (bleuets, framboises), de noix du pays et de graines de lin. Cette version nordique du porridge de millet allie la tradition asiatique et africaine de la bouillie de mil \u00e0 l'identit\u00e9 culinaire qu\u00e9b\u00e9coise. Servi dans les cafés-bistros de Montr\u00e9al, de Sherbrooke et de Qu\u00e9bec, il incarne la fusion entre alimentation sant\u00e9 et terroir local.",
      },
      {
        name: 'Millet en gratin',
        millet: 'Millet commun',
        description:
          "Le gratin de millet est un plat r\u00e9confortant parfaitement adapt\u00e9 aux longs hivers qu\u00e9b\u00e9cois. Le millet cuit est m\u00e9lang\u00e9 avec des l\u00e9gumes racines du terroir \u2014 panais, rutabaga, topinambour, courge butternut \u2014, recouvert d'une b\u00e9chamel au fromage qu\u00e9b\u00e9cois (Oka, Migneron ou cheddar vieilli) et gratin\u00e9 au four jusqu'\u00e0 ce qu'une cro\u00fbte dor\u00e9e et croquante se forme. Ce gratin figure sur les menus de nombreuses tables ch\u00e8res de Montr\u00e9al et se d\u00e9cline en versions v\u00e9ganes avec du fromage de noix de cajou. Il illustre l'int\u00e9gration r\u00e9ussie du millet dans le r\u00e9pertoire du comfort food qu\u00e9b\u00e9cois.",
      },
      {
        name: 'Millet dans la cuisine sant\u00e9',
        millet: 'Millet commun / Millet des oiseaux',
        description:
          "Le millet s'est impos\u00e9 dans l'\u00e9cosyst\u00e8me sant\u00e9 qu\u00e9b\u00e9cois comme une c\u00e9r\u00e9ale vedette. On le retrouve dans les bols-repas (buddha bowls) garnis de tofu, d'edamames et de l\u00e9gumes ferment\u00e9s ; dans les salades-repas estivales avec des herbes du jardin ; dans les barres \u00e9nerg\u00e9tiques maison pour les amateurs de plein air ; et dans les recettes sans gluten destin\u00e9es aux personnes c\u0153liaques. Les naturopathes et nutritionnistes qu\u00e9b\u00e9cois recommandent le millet pour sa richesse en magn\u00e9sium, son faible indice glyc\u00e9mique et sa propri\u00e9t\u00e9 alcalinisante, en faisant un alli\u00e9 de la sant\u00e9 digestive et de la gestion du poids.",
      },
      {
        name: 'Cr\u00e8me-dessert au millet et sirop d\'\u00e9rable',
        millet: 'Millet commun',
        description:
          "La cr\u00e8me-dessert au millet et sirop d'\u00e9rable est une cr\u00e9ation typiquement qu\u00e9b\u00e9coise qui marie la douceur du millet cuit dans du lait \u00e0 la saveur incomparable du sirop d'\u00e9rable. Le millet est mijot\u00e9 longuement jusqu'\u00e0 une texture onctueuse, puis m\u00e9lang\u00e9 avec du sirop d'\u00e9rable ambré, de la vanille et une pointe de cannelle. Servi frais ou ti\u00e8de, parsem\u00e9 de noix de Grenoble ou de pacanes caramélisées, ce dessert concilie la gourmandise et la nutrition. Il est particuli\u00e8rement populaire lors du temps des sucres, p\u00e9riode printani\u00e8re o\u00f9 les cabanes \u00e0 sucre accueillent les Qu\u00e9b\u00e9cois pour c\u00e9l\u00e9brer l'\u00e9rable.",
      },
    ],
    festivals: [
      {
        name: 'F\u00eate Bio Paysanne',
        description:
          "La F\u00eate Bio Paysanne rassemble chaque ann\u00e9e des agriculteurs biologiques, des artisans et des consommateurs engag\u00e9s dans diverses r\u00e9gions du Qu\u00e9bec. C'est un lieu de rencontre, de d\u00e9gustation et de sensibilisation \u00e0 l'agriculture durable o\u00f9 les producteurs pr\u00e9sentent leurs r\u00e9coltes et partagent leurs pratiques culturales.",
        milletConnection:
          "Les fermiers biologiques qui cultivent du millet au Qu\u00e9bec profitent de ces f\u00eates pour faire d\u00e9couvrir leur production. Des ateliers de cuisine montrent comment int\u00e9grer le millet dans le quotidien, et des d\u00e9gustations comparatives permettent au public de distinguer les diff\u00e9rentes vari\u00e9t\u00e9s. Ces \u00e9v\u00e9nements sont un moteur important de la d\u00e9mocratisation du millet au Qu\u00e9bec.",
      },
      {
        name: 'Temps des sucres',
        description:
          "Le temps des sucres est une tradition qu\u00e9b\u00e9coise incontournable, c\u00e9l\u00e9br\u00e9e chaque printemps lorsque la s\u00e8ve des \u00e9rables coule pour \u00eatre transform\u00e9e en sirop. Les cabanes \u00e0 sucre accueillent des milliers de visiteurs pour des repas copieux, de la tire sur la neige et des festivit\u00e9s en plein air.",
        milletConnection:
          "Des cabanes \u00e0 sucre innovantes int\u00e8grent d\u00e9sormais le millet dans leurs menus printaniers : porridge de millet au sirop d'\u00e9rable, cr\u00eapes de farine de millet napp\u00e9es de sirop ambré, et pouding au millet et \u00e0 l'\u00e9rable. Cette association entre le millet et le sirop d'\u00e9rable cr\u00e9e une identit\u00e9 culinaire proprement qu\u00e9b\u00e9coise autour de cette c\u00e9r\u00e9ale red\u00e9couverte.",
      },
    ],
    culturalSignificance:
      "L'engouement du Qu\u00e9bec pour le millet s'inscrit dans un mouvement culturel plus large de retour aux aliments entiers, locaux et durables. La soci\u00e9t\u00e9 qu\u00e9b\u00e9coise, marqu\u00e9e par la R\u00e9volution tranquille des ann\u00e9es 1960 et un fort sentiment d'identit\u00e9 culturelle distincte, a toujours valoris\u00e9 l'autosuffisance et la souverainet\u00e9 alimentaire. Le millet s'int\u00e8gre naturellement dans cette vision : c'est une c\u00e9r\u00e9ale sans gluten, cultivable localement, \u00e9cologiquement responsable et nutritionnellement riche. Les nutritionnistes qu\u00e9b\u00e9cois, influenc\u00e9s tant par la naturopathie nord-am\u00e9ricaine que par les traditions culinaires africaines et asiatiques apport\u00e9es par l'immigration, ont fait du millet un pilier de l'alimentation alternative. La diversit\u00e9 culturelle de Montr\u00e9al, o\u00f9 cohabitent des diasporas ouest-africaines, nord-africaines et asiatiques, a permis au millet de voyager entre les cuisines et de s'enrichir de nouvelles pr\u00e9parations. Le Qu\u00e9bec repr\u00e9sente ainsi un laboratoire unique o\u00f9 traditions ancestrales africaines et asiatiques du mil rencontrent l'innovation alimentaire nord-am\u00e9ricaine.",
    traditionalPractices: [
      "La culture exp\u00e9rimentale du millet commun dans les fermes biologiques des Cantons-de-l'Est et de la Montérégie, avec des semis en juin et une r\u00e9colte en septembre adapt\u00e9e au court \u00e9t\u00e9 qu\u00e9b\u00e9cois.",
      "Le trempage du millet pendant 8 heures avant cuisson, pratique recommand\u00e9e par les naturopathes qu\u00e9b\u00e9cois pour r\u00e9duire l'acide phytique et am\u00e9liorer l'absorption des min\u00e9raux.",
      "L'int\u00e9gration du millet dans les programmes de repas scolaires sant\u00e9, initiative port\u00e9e par plusieurs commissions scolaires qu\u00e9b\u00e9coises pour diversifier les c\u00e9r\u00e9ales propos\u00e9es aux enfants.",
      "La collaboration entre fermes qu\u00e9b\u00e9coises et communaut\u00e9s immigr\u00e9es d'Afrique de l'Ouest pour adapter les techniques de culture du mil au climat nordique.",
    ],
    famousQuoteOrSaying:
      "\u00ab On ne conna\u00eet pas le millet, mais le millet nous conna\u00eet depuis longtemps. \u00bb (Dicton du mouvement bio qu\u00e9b\u00e9cois)",
    imageFile: '/images/sections/regional-quebec.webp',
  },
];

export function getRegionalTraditionBySlug(
  slug: string
): RegionalTradition | undefined {
  return regionalTraditions.find((r) => r.slug === slug);
}
