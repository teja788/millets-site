import type { RegionalTradition } from '@/lib/types';

export const regionalTraditions: RegionalTradition[] = [
  // ═══════════════════════════════════════════════════════
  // 1. BAYERN (BAVARIA)
  // ═══════════════════════════════════════════════════════
  {
    slug: 'bayern',
    state: 'Bayern',
    region: 'Süddeutschland',
    tagline:
      'Wo der Hirsebrei seit Jahrhunderten die Bauernküchen wärmt und die Klosterköche die Hirse zur Kunst erhoben.',
    description:
      'Bayern blickt auf eine über tausendjährige Hirsetradition zurück, die tief in der bäuerlichen Kultur und der Klosterküche verwurzelt ist. In den fruchtbaren Ebenen zwischen Donau und Alpenvorland wurde die Rispenhirse (Panicum miliaceum) bereits im Frühmittelalter als wichtigstes Getreide angebaut, lange bevor Weizen und Kartoffeln den Speiseplan dominierten. Benediktinerklöster wie Tegernsee, Benediktbeuern und Wessobrunn kultivierten Hirse systematisch und entwickelten verfeinerte Rezepturen für Hirsebrei, Hirsesuppen und Hirseaufläufe, die in den klösterlichen Kochbüchern des 15. Jahrhunderts dokumentiert sind. In der traditionellen bayerischen Bauernküche galt der goldene Hirsebrei als Symbol für Wohlstand und wurde zu Neujahr als Glücksspeise gereicht. Heute erlebt die Hirse in Bayern eine Renaissance durch biologische Landwirtschaft und die wachsende Nachfrage nach glutenfreien, regionalen Lebensmitteln.',
    primaryMillets: ['proso-millet', 'foxtail-millet'],
    iconicDishes: [
      {
        name: 'Bayerischer Hirsebrei',
        millet: 'Rispenhirse',
        description:
          'Der klassische goldgelbe Hirsebrei, langsam in Milch gekocht und mit Butter, Zimt und einem Löffel Honig serviert. In bayerischen Bauernhäusern wurde er traditionell im gusseisernen Topf über dem Holzherd zubereitet und galt als Grundnahrungsmittel vom Herbst bis zum Frühjahr. Zur Neujahrsfeier wurde dem Brei ein Goldstück beigelegt — wer es fand, dem war Glück im neuen Jahr beschieden.',
      },
      {
        name: 'Hirseauflauf mit Äpfeln',
        millet: 'Rispenhirse',
        description:
          'Ein herzhaft-süßer Auflauf aus vorgekochter Hirse, geschichteten Apfelscheiben, Rosinen und einer Eiermilch-Gussmasse, im Ofen goldbraun gebacken. Dieses Gericht verbindet die bayerische Apfeltradition mit der Hirse und wird besonders im Herbst nach der Apfelernte zubereitet. In Klosterküchen wurde der Auflauf mit Mohn und Honig verfeinert.',
      },
      {
        name: 'Hirsesuppe',
        millet: 'Rispenhirse',
        description:
          'Eine sättigende Suppe aus Hirsegrütze, Wurzelgemüse, Lauch und Speck, die in der kalten Jahreszeit als wärmende Vorspeise oder als eigenständige Mahlzeit dient. In der oberbayerischen Variante wird die Suppe mit Sahne verfeinert und mit frischer Petersilie bestreut.',
      },
      {
        name: 'Hirseküchlein',
        millet: 'Rispenhirse',
        description:
          'Kleine, in Butterschmalz gebratene Bratlinge aus gekochter Hirse, Ei, Mehl und fein gehackten Kräutern. Sie werden als Beilage zu Braten oder als eigenständiges Gericht mit Salat serviert. In Niederbayern kennt man eine süße Variante mit Quark und Zucker, die auf Jahrmärkten verkauft wird.',
      },
      {
        name: 'Kloster-Hirsepfanne',
        millet: 'Rispenhirse',
        description:
          'Ein rustikales Pfannengericht aus der Klostertradition: Hirse wird mit Waldpilzen, Zwiebeln und frischen Kräutern in Butter geschwenkt und mit geriebenem Bergkäse überbacken. Dieses Gericht stammt aus der benediktinischen Fastenküche, in der Hirse als Fleischersatz diente.',
      },
    ],
    festivals: [
      {
        name: 'Erntedankfest',
        description:
          'Das bayerische Erntedankfest wird am ersten Sonntag im Oktober mit feierlichen Prozessionen, geschmückten Erntekronen und einem gemeinsamen Festmahl in der Dorfgemeinschaft begangen. In vielen Gemeinden werden die Erntekronen aus verschiedenen Getreidesorten einschließlich Hirse geflochten.',
        milletConnection:
          'In historischen Erntedankfeiern spielte die Hirse eine zentrale Rolle. Die letzte Hirsegarbe wurde feierlich eingeholt und als „Hirsemutter" im Herrgottswinkel aufbewahrt. Zum Festessen wurde Hirsebrei gereicht, und die Bäuerinnen wetteiferten um den schmackhaftesten Hirseauflauf. In einigen oberbayerischen Gemeinden wird diese Tradition seit einigen Jahren wiederbelebt.',
      },
      {
        name: 'Lichtmess (2. Februar)',
        description:
          'Das Fest Mariä Lichtmess markierte traditionell das Ende der Winterpause auf dem Bauernhof. An diesem Tag wechselten die Dienstboten ihren Hof, und es wurde ein festliches Mahl zubereitet.',
        milletConnection:
          'Zu Lichtmess wurde in vielen bayerischen Bauernfamilien ein besonderer Hirsebrei mit Safran und Mandeln gekocht — eine der letzten Mahlzeiten aus den Wintervorräten, bevor die neue Anbausaison begann. Der goldene Brei symbolisierte die Rückkehr des Lichts und längerer Tage.',
      },
    ],
    culturalSignificance:
      'In der bayerischen Volkskultur galt die Hirse als „Gold des Bauern" — ein Getreide, das zuverlässig gedieh und die Familie durch den Winter brachte. Das Sprichwort „Wer Hirse hat, hat Glück" spiegelt die tiefe Wertschätzung wider, die dem Korn über Jahrhunderte entgegengebracht wurde. In bayerischen Bauernkalendern des 18. Jahrhunderts wurde der optimale Zeitpunkt für Hirseaussaat und -ernte genau dokumentiert, und der „Hirsetag" (meist Mitte Mai) war ein fester Termin im bäuerlichen Jahreslauf. Die Klöster trugen entscheidend zur Veredelung der Hirseküche bei: Im Benediktinerkloster Andechs soll im 16. Jahrhundert ein Hirsebier gebraut worden sein, und die Augustiner-Chorherren in Polling entwickelten ein Hirsebrot-Rezept, das bis heute überliefert ist. Mit der Verbreitung der Kartoffel im 18. Jahrhundert geriet die Hirse in Bayern zunächst in Vergessenheit, doch seit den 2000er Jahren erleben Bio-Bauern in Oberbayern und der Hallertau eine Wiederentdeckung des traditionellen Getreides.',
    traditionalPractices: [
      'Der Neujahrshirsebrei: Am Neujahrstag wird Hirsebrei gegessen, um Wohlstand und Glück für das kommende Jahr zu sichern — eine Tradition, die in bayerischen Bauernfamilien seit dem Mittelalter gepflegt wird.',
      'Aufbewahrung in Holztruhen: Hirsekörner wurden in speziellen Holztruhen (Troadkästen) gelagert, die mit Kräutern wie Lavendel und Beifuß ausgelegt waren, um Schädlinge fernzuhalten.',
      'Klösterliche Fastenküche: Während der Fastenzeit vor Ostern diente Hirse in bayerischen Klöstern als Grundlage für fleischlose Gerichte — Hirsesuppe, Hirsepuffer und Hirsebrei mit Dörrobst.',
      'Kindbettbrei: Frisch entbundenen Müttern wurde ein besonders nahrhafter Hirsebrei mit Butter und Honig zubereitet, der als kräftigend und milchfördernd galt.',
      'Hirsestroh als Heilmittel: In der bayerischen Volksmedizin wurde Hirsestroh für wärmende Kissen verwendet, die bei Gelenkschmerzen und Rheuma helfen sollten.',
    ],
    famousQuoteOrSaying:
      '„Wer Hirse hat, hat Glück" — Bayerisches Sprichwort',
    imageFile: '/images/sections/regional-bayern.webp',
  },

  // ═══════════════════════════════════════════════════════
  // 2. SCHWABEN (SWABIA)
  // ═══════════════════════════════════════════════════════
  {
    slug: 'schwaben',
    state: 'Schwaben',
    region: 'Süddeutschland',
    tagline:
      'Schwäbische Sparsamkeit trifft auf Hirsekunst — wo aus wenig viel Geschmack gemacht wird.',
    description:
      'Das Schwabenland, das sich von der Schwäbischen Alb über das Allgäu bis zum Bodensee erstreckt, war historisch eine der bedeutendsten Hirseanbauregionen Mitteleuropas. Die sprichwörtliche schwäbische Sparsamkeit spiegelt sich in einer Küche wider, die aus einfachen Zutaten wie Hirse, Mehl und Eiern nahrhafte und schmackhafte Gerichte zaubert. In mittelalterlichen Urkunden der Reichsstädte Ulm, Augsburg und Reutlingen wird die Hirse als „gemeines Korn" erwähnt, das auf den Wochenmärkten gehandelt wurde. Die schwäbische Hirsetradition ist eng mit der Handwerkerkultur verbunden: Hirseknöpfle und Hirsespätzle waren die schnellen, sättigenden Mahlzeiten der Tuchmacher, Gerber und Schmiede. Der Grundsatz „Schaffe, schaffe, Häusle baue" — arbeiten, arbeiten, ein Haus bauen — beschreibt die schwäbische Lebensphilosophie, und die Hirse war das Getreide, das diese arbeitsreiche Lebensweise ermöglichte.',
    primaryMillets: ['proso-millet', 'foxtail-millet', 'finger-millet'],
    iconicDishes: [
      {
        name: 'Hirseküchlein',
        millet: 'Rispenhirse',
        description:
          'Goldbraun gebratene Bratlinge aus gekochter Hirse mit Quark, Ei und einer Prise Muskatnuss. In der schwäbischen Variante werden sie mit Apfelmus und einem Klecks Sauerrahm serviert. Die Küchlein waren ein beliebtes Fastenessen und wurden auf Kirchweihfesten als süße Variante mit Zucker und Zimt angeboten.',
      },
      {
        name: 'Hirseknöpfle',
        millet: 'Rispenhirse',
        description:
          'Eine regionale Abwandlung der berühmten Spätzle: Hirsemehl wird mit Eiern und Wasser zu einem geschmeidigen Teig verrührt und durch den Spätzlehobel in siedendes Wasser geschabt. Die Hirseknöpfle haben eine etwas festere Konsistenz als Weizenspätzle und werden mit geschmälzten Zwiebeln und Bergkäse überbacken.',
      },
      {
        name: 'Schwäbische Hirsesuppe',
        millet: 'Rispenhirse',
        description:
          'Eine samtige Suppe aus feiner Hirsegrütze, die mit Gemüsebrühe, einem Schuss Weißwein und frischer Muskatnuss zubereitet wird. In der deftigen Variante kommen geräucherte Würstchen hinzu, während die Fastenversion mit Kräutern und einem Löffel Leinöl verfeinert wird.',
      },
      {
        name: 'Hirsefladen mit Kräutern',
        millet: 'Rispenhirse',
        description:
          'Dünne, knusprige Fladen aus Hirseteig mit frischen Gartenkräutern, die auf dem heißen Stein oder in der Pfanne gebacken werden. Sie dienen als Brotzeit-Alternative und werden mit Kräuterquark oder Obatzda bestrichen.',
      },
    ],
    festivals: [
      {
        name: 'Schwäbische Kirchweih',
        description:
          'Die Kirchweih (Kirbe) ist das traditionelle Dorffest im Herbst, das den Jahrestag der Kirchenweihe feiert. Mit Musik, Tanz, Festumzug und üppigem Essen ist die Kirchweih ein Höhepunkt des schwäbischen Jahreskalenders.',
        milletConnection:
          'Zur Kirchweih wurden traditionell Hirseküchlein und Hirsekuchen als Festgebäck zubereitet. Die „Kirbehirse" — ein besonders feiner Hirsebrei mit Safran und Mandeln — war das Festmahl, das nur an diesem Tag serviert wurde. In einigen Dörfern auf der Schwäbischen Alb wird diese Tradition im Rahmen regionaler Ernährungsinitiativen wiederbelebt.',
      },
      {
        name: 'Schäferlauf in Markgröningen',
        description:
          'Der historische Schäferlauf in Markgröningen bei Stuttgart ist eines der ältesten Volksfeste in Württemberg und feiert die Schäfertradition der Region seit dem 15. Jahrhundert.',
        milletConnection:
          'Die Schäfer der Schwäbischen Alb trugen auf ihren Wanderungen mit den Herden geröstete Hirsekörner als Proviant bei sich. Beim Schäferlauf-Festessen war Hirsebrei mit Schafsmilch ein traditionelles Gericht, das die Verbindung zwischen Weidewirtschaft und Ackerbau symbolisierte.',
      },
    ],
    culturalSignificance:
      'In der schwäbischen Kultur verkörpert die Hirse die Tugenden der Genügsamkeit und des Fleißes. Das schwäbische Motto „Schaffe, schaffe, Häusle baue" — arbeite, arbeite, baue ein Haus — beschreibt eine Lebensweise, in der einfache, nahrhafte Kost wie Hirsebrei die Grundlage für harte Arbeit bildete. In den Handwerkerstädten des Mittelalters war Hirse das Brotgetreide der einfachen Leute, während Weizen den wohlhabenden Bürgern vorbehalten war. Schwäbische Hausfrauen waren für ihre Fähigkeit berühmt, aus Hirse, Eiern und Gemüse eine Vielfalt von Gerichten zu schaffen — eine Kunst, die in den handgeschriebenen Kochbüchern schwäbischer Familien über Generationen weitergegeben wurde. Die Redewendung „Des isch koi Hexerei" — das ist keine Hexerei — beschreibt die schwäbische Überzeugung, dass gutes Essen keine teuren Zutaten braucht, sondern Können und Sorgfalt.',
    traditionalPractices: [
      'Hirsevorräte im „Gültkasten": Die schwäbischen Bauern lagerten ihre Hirsevorräte in speziellen Vorratskammern, den Gültkästen, die im kühlen Erdgeschoss der Fachwerkhäuser eingerichtet waren.',
      'Gemeinschaftliches Hirsedreschen: Nach der Ernte kamen die Nachbarn zum gemeinsamen Dreschen zusammen — eine Arbeit, die mit Gesang und anschließendem Hirsebrei-Essen belohnt wurde.',
      'Hirsemehl als Tauschware: In der schwäbischen Tauschwirtschaft des Mittelalters diente Hirsemehl als informelle Währung unter Handwerkern und Bauern.',
      'Schwäbische Hausapotheke: Hirsebrei mit Kamille und Honig galt in der schwäbischen Volksmedizin als bewährtes Mittel gegen Magenbeschwerden und Erschöpfung.',
    ],
    famousQuoteOrSaying:
      '„Schaffe, schaffe, Häusle baue — und Hirsebrei net vergesse!" — Schwäbische Bauernweisheit',
    imageFile: '/images/sections/regional-schwaben.webp',
  },

  // ═══════════════════════════════════════════════════════
  // 3. SACHSEN-LAUSITZ
  // ═══════════════════════════════════════════════════════
  {
    slug: 'sachsen-lausitz',
    state: 'Sachsen-Lausitz',
    region: 'Ostdeutschland',
    tagline:
      'Sorbische Hirsetraditionen — wo slawisches Erbe und deutsche Küche sich vereinen.',
    description:
      'Die Lausitz, die sich über Teile Sachsens und Brandenburgs erstreckt, ist die Heimat der Sorben — einer westslawischen Minderheit, die seit über 1.500 Jahren in dieser Region lebt und eine eigenständige Kultur, Sprache und Küche bewahrt hat. In der sorbischen Tradition nimmt die Hirse (sorbisch: jatšmeń/proso) eine herausragende Stellung ein: Sie ist Grundnahrungsmittel, Festspeise und Symbol für Fruchtbarkeit und Wohlstand zugleich. Die sandigen, nährstoffarmen Böden der Lausitz waren ideal für den Hirseanbau, und bis ins 19. Jahrhundert war die Region einer der wichtigsten Hirseproduzenten Mitteldeutschlands. Die sorbische Hirseküche zeichnet sich durch eine einzigartige Verbindung slawischer und deutscher Kochtechniken aus — Klöße, Grützgerichte und süße Aufläufe zeigen den Reichtum dieser kulinarischen Kreuzung.',
    primaryMillets: ['proso-millet', 'foxtail-millet'],
    iconicDishes: [
      {
        name: 'Sorbische Hirseklöße',
        millet: 'Rispenhirse',
        description:
          'Runde, goldgelbe Klöße aus gekochter Hirse, Ei und etwas Mehl, die in Salzwasser gegart und mit einer reichhaltigen Pilzsoße oder Zwiebelschmalz serviert werden. Die Klöße sind ein Festessen der sorbischen Küche und werden besonders zu Familienfeiern und kirchlichen Festen zubereitet. Jede sorbische Großmutter hat ihr eigenes Geheimrezept für die perfekte Konsistenz.',
      },
      {
        name: 'Hirsemus (Prosowa kaša)',
        millet: 'Rispenhirse',
        description:
          'Ein cremiger, süßer Hirsebrei, der in der sorbischen Küche mit Milch, Butter, Zucker und Zimt zubereitet und oft mit eingekochtem Obst — Pflaumen, Kirschen oder Birnen — serviert wird. Hirsemus war die traditionelle Sonntagsspeise in sorbischen Familien und wird bis heute bei Taufen und Hochzeiten als Glücksbringer gereicht.',
      },
      {
        name: 'Lausitzer Hirseauflauf',
        millet: 'Rispenhirse',
        description:
          'Ein herzhafter Auflauf aus Hirse, Quark, Eiern und Speckwürfeln, der im Holzofen goldbraun gebacken wird. Der Auflauf vereint sorbische und sächsische Kochtraditionen und ist ein typisches Alltagsgericht der Lausitzer Landbevölkerung. In der süßen Variante werden Rosinen und geriebene Zitronenschale hinzugefügt.',
      },
      {
        name: 'Hirseplinsen',
        millet: 'Rispenhirse',
        description:
          'Dünne Pfannkuchen aus Hirsemehl, Eiern und Buttermilch, die in Butter goldbraun gebacken werden. In der sorbischen Tradition werden sie zu Fastnacht (Zapust) in großen Mengen gebacken und mit Pflaumenmus oder Leinöl bestrichen an Nachbarn und Freunde verteilt.',
      },
    ],
    festivals: [
      {
        name: 'Vogelhochzeit (Ptači kwas)',
        description:
          'Am 25. Januar feiern die Sorben die Vogelhochzeit — ein Brauch, bei dem Kinder am Vorabend Teller auf die Fensterbank stellen und am Morgen von den „Vögeln" Süßigkeiten und Gebäck vorfinden. Der Brauch feiert die Hoffnung auf den kommenden Frühling.',
        milletConnection:
          'Traditionell gehörten Hirsekörner zu den Gaben der Vogelhochzeit — als Symbol für Fruchtbarkeit und reiche Ernte. In sorbischen Familien werden bis heute kleine Hirseküchlein in Vogelform gebacken und als Festgebäck serviert. Der Brauch erinnert daran, dass Hirse auch Nahrung für die Vögel ist, die im Frühjahr auf die Felder zurückkehren.',
      },
      {
        name: 'Zapust (Sorbische Fastnacht)',
        description:
          'Die sorbische Fastnacht wird mit farbenprächtigen Umzügen, traditioneller Musik und ausgelassenem Feiern begangen. Die Feierlichkeiten erstrecken sich über mehrere Tage und bilden den Höhepunkt des sorbischen Winterbrauchtums.',
        milletConnection:
          'Zu Zapust werden traditionell Hirseplinsen (Pfannkuchen aus Hirsemehl) in großen Mengen gebacken und an die Gemeinschaft verteilt. Der Brauch des „Hirseplinsenbackens" ist ein Gemeinschaftsereignis, bei dem die Frauen der Nachbarschaft zusammenkommen und gemeinsam backen. Die Plinsen symbolisieren die Sonne und den nahenden Frühling.',
      },
    ],
    culturalSignificance:
      'In der sorbischen Volkskultur ist die Hirse weit mehr als ein Nahrungsmittel — sie ist ein Symbol für Fruchtbarkeit, Wohlstand und Zusammenhalt der Gemeinschaft. Bei sorbischen Hochzeiten wurde dem Brautpaar traditionell Hirse über die Köpfe gestreut, ähnlich dem Reis-Werfen, als Segenswunsch für eine kinderreiche Ehe. Die sorbische Redewendung „Hdźež proso rosće, tam zbožo kćěje" — Wo Hirse wächst, blüht das Glück — drückt die tiefe Verbundenheit zwischen Hirseanbau und Lebensglück aus. In der Lausitzer Landschaftsmalerei des 19. Jahrhunderts sind Hirsefelder ein wiederkehrendes Motiv, und sorbische Volkslieder besingen die Hirseernte als Zeit der Freude und Gemeinschaft. Heute engagieren sich sorbische Kulturvereine für die Wiederbelebung des Hirseanbaus in der Lausitz und verbinden damit den Erhalt einer einzigartigen kulturellen Identität.',
    traditionalPractices: [
      'Hirsestreuen bei Hochzeiten: Dem Brautpaar werden Hirsekörner als Symbol für Fruchtbarkeit und Reichtum über die Köpfe gestreut — ein sorbischer Brauch, der älter ist als das Reis-Werfen.',
      'Hirseopfer zu Erntebeginn: Vor der ersten Aussaat wurden Hirsekörner an Feldrainen ausgelegt als Opfergabe für eine gute Ernte — ein vorchristlicher slawischer Brauch, der in ländlichen Gebieten der Lausitz bis ins 20. Jahrhundert überliefert wurde.',
      'Gemeinschaftliches Hirseklopfen: Nach der Ernte trafen sich die Dorfbewohner zum gemeinsamen Enthülsen der Hirsekörner mit hölzernen Mörsern — ein arbeitsintensiver, aber geselliger Prozess.',
      'Hirsebrei zur Taufe: In sorbischen Familien ist es Brauch, zur Taufe eines Kindes einen besonderen Hirsebrei mit Sahne und Honig zuzubereiten, der dem Kind Gesundheit und Wohlstand bringen soll.',
    ],
    famousQuoteOrSaying:
      '„Hdźež proso rosće, tam zbožo kćěje" — Wo Hirse wächst, blüht das Glück. (Sorbisches Sprichwort)',
    imageFile: '/images/sections/regional-sachsen-lausitz.webp',
  },

  // ═══════════════════════════════════════════════════════
  // 4. TIROL-VORARLBERG
  // ═══════════════════════════════════════════════════════
  {
    slug: 'tirol-vorarlberg',
    state: 'Tirol-Vorarlberg',
    region: 'Österreich (Alpenregion)',
    tagline:
      'Alpine Hirseküche — nahrhaft, wärmend und seit Jahrhunderten auf Bergbauernhöfen bewährt.',
    description:
      'In den Tälern Tirols und Vorarlbergs war die Hirse über Jahrhunderte ein unverzichtbares Grundnahrungsmittel der Bergbauern. Auf Höhen zwischen 500 und 1.200 Metern gedieh die Rispenhirse (in Tirol „Brein" genannt) auf den kargen, aber sonnigen Südhängen und ermöglichte eine Selbstversorgung, die in den langen, schneereichen Wintern überlebenswichtig war. Die Tiroler Hirseküche ist geprägt von kräftigen, wärmenden Gerichten — Knödel, Suppen und Breie —, die den enormen Energiebedarf der Bergbauern und Almbewohner deckten. Besonders im Wipptal, Stubai und Ötztal hat sich eine eigenständige Hirsetradition entwickelt, die mit der österreichischen Bio-Bewegung der letzten Jahrzehnte eine bemerkenswerte Wiederbelebung erfährt. In Vorarlberg, dem westlichsten Bundesland Österreichs, verbinden sich alpine und alemannische Einflüsse zu einer einzigartigen Hirseküche.',
    primaryMillets: ['proso-millet', 'foxtail-millet'],
    iconicDishes: [
      {
        name: 'Tiroler Hirseknödel',
        millet: 'Rispenhirse (Brein)',
        description:
          'Feste, herzhafte Knödel aus gekochter Hirse, altbackenem Brot, Speck, Ei und Petersilie, die in Salzwasser gegart und mit zerlassener Butter und Sauerkraut serviert werden. Die Hirseknödel sind ein traditionelles Hauptgericht der Tiroler Bauernküche und werden in vielen Almhütten bis heute nach überlieferten Familienrezepten zubereitet.',
      },
      {
        name: 'Tiroler Hirsesuppe',
        millet: 'Rispenhirse (Brein)',
        description:
          'Eine wärmende, sämige Suppe aus Hirse, Wurzelgemüse, Zwiebeln und Rinderbrühe, die mit einem Schuss Rahm und frischem Schnittlauch verfeinert wird. In der traditionellen Variante wird die Suppe mit Speckgrieben (Grammeln) gekrönt und als Wintermittagessen serviert.',
      },
      {
        name: 'Vorarlberger Hirsefladen',
        millet: 'Rispenhirse',
        description:
          'Dünne, knusprige Fladen aus Hirseteig, die auf heißem Stein gebacken und mit Vorarlberger Bergkäse und Kräuterbutter belegt werden. In der alemannischen Tradition Vorarlbergs sind diese Fladen ein beliebtes „Jausenbrot" — die alpine Zwischenmahlzeit am Nachmittag.',
      },
      {
        name: 'Hirsereis (Breinreis)',
        millet: 'Rispenhirse (Brein)',
        description:
          'Ein süßer Brei aus Hirse und Milch, ähnlich dem Milchreis, der mit Zucker, Zimt und Preiselbeeren serviert wird. Der Breinreis war die klassische Fastenspeise in Tiroler Klöstern und Bauernhäusern und wird heute in modernisierter Form in alpinen Gasthöfen angeboten.',
      },
    ],
    festivals: [
      {
        name: 'Almabtrieb (Viehscheid)',
        description:
          'Der Almabtrieb im September markiert die festliche Rückkehr der Kühe von den Sommeralmen ins Tal. Die Tiere werden mit Blumen und Glocken geschmückt, und in den Dörfern wird mit Musik, Tanz und Festessen gefeiert.',
        milletConnection:
          'Zum Almabtrieb-Fest gehörte traditionell ein großer Hirsebrei, der auf dem Dorfplatz in einem Kupferkessel zubereitet und an die Gemeinschaft verteilt wurde. Die Hirse symbolisierte den Übergang von der Almsaison zur Wintersaison, in der die schweren Hirsebreie und Knödel die Hauptnahrung bildeten. In einigen Tiroler Tälern wird bei Bio-Almabtrieben wieder Hirse serviert.',
      },
      {
        name: 'Herz-Jesu-Feuer',
        description:
          'Im Juni entzünden Tiroler Bergdörfer die Herz-Jesu-Feuer auf den umliegenden Gipfeln — ein Brauch, der auf den Tiroler Volksaufstand von 1796 zurückgeht und den Zusammenhalt der Tiroler Bevölkerung feiert.',
        milletConnection:
          'Bei den Herz-Jesu-Feiern in den Tälern wurde traditionell Hirsesuppe und Hirsebrei als einfaches, gemeinschaftliches Mahl gereicht. Die Hirse repräsentierte die Bodenständigkeit und Genügsamkeit der Tiroler Bergbauern.',
      },
    ],
    culturalSignificance:
      'In der alpinen Kultur Tirols und Vorarlbergs verkörpert die Hirse das Prinzip der Selbstversorgung und Genügsamkeit, das das Leben der Bergbauern über Jahrhunderte bestimmte. Das Tiroler Wort „Brein" für Hirse ist etymologisch mit dem althochdeutschen „brîn" verwandt und deutet auf eine Kultiviertradition hin, die bis in die Völkerwanderungszeit zurückreicht. Archäologische Funde aus dem Inntal belegen Hirseanbau bereits in der Bronzezeit. In der Tiroler Volksmedizin galt Hirsebrei als kräftigende Speise für Kranke und Wöchnerinnen, und Hirsekissen wurden als natürliches Heilmittel gegen Nackenschmerzen und Schlaflosigkeit verwendet — eine Anwendung, die heute in alpinen Wellnesshotels wiederentdeckt wird. Die Verbindung von traditioneller Hirsekultur und moderner Bio-Landwirtschaft macht Tirol zu einem Vorreiter der alpinen Hirserenaissance.',
    traditionalPractices: [
      'Brein-Kochen im Kupferkessel: In Tiroler Bauernhäusern wurde der Hirsebrei traditionell im schweren Kupferkessel über dem offenen Herdfeuer gekocht — eine Technik, die eine gleichmäßige Wärmeverteilung gewährleistet.',
      'Hirsekissen als Heilmittel: Kissen, gefüllt mit getrockneten Hirsekörnern, werden in der Tiroler Volksmedizin seit Jahrhunderten als natürliche Wärmetherapie bei Nackenverspannungen und Gelenkschmerzen verwendet.',
      'Almwirtschaftliche Hirseversorgung: Senner und Sennerinnen nahmen Hirsevorräte mit auf die Alm, da Hirsebrei mit frischer Almmilch ein nahrhaftes und leicht zuzubereitendes Gericht für die Sommermonate war.',
      'Wintervorratshaltung: Im Herbst wurde genügend Hirse eingelagert, um die Familie durch den langen Alpenwinter zu bringen — ein Vorgang, der in Tiroler Hausbüchern des 17. Jahrhunderts genau dokumentiert ist.',
    ],
    famousQuoteOrSaying:
      '„A guater Brein is besser als a schlechts Fleisch" — Ein guter Hirsebrei ist besser als schlechtes Fleisch. (Tiroler Bauernweisheit)',
    imageFile: '/images/sections/regional-tirol-vorarlberg.webp',
  },

  // ═══════════════════════════════════════════════════════
  // 5. GRAUBÜNDEN-WALLIS
  // ═══════════════════════════════════════════════════════
  {
    slug: 'graubuenden-wallis',
    state: 'Graubünden-Wallis',
    region: 'Schweiz (Alpenregion)',
    tagline:
      'Schweizer Bergkost mit Hirse — von den Bündner Tälern bis zu den Walliser Hochalmen.',
    description:
      'In den abgelegenen Tälern Graubündens und des Wallis spielte die Hirse eine wichtige Rolle in der alpinen Selbstversorgungswirtschaft. Die Rispenhirse (im Bündner Dialekt „Hirse" oder „Hirschi") gedieh auf den sonnigen, trockenen Südhängen des Rhonetals und der Bündner Herrschaft, wo die Föhnwinde ein überraschend mildes Mikroklima schaffen. In der rätoromanischen Kultur Graubündens ist die Hirse in Legenden und Bräuchen verankert, und der Kanton beherbergt einige der ältesten dokumentierten Hirseanbaugebiete der Schweiz. Im Wallis verbinden sich französische und deutsche Kochtraditionen zu einer einzigartigen alpinen Küche, in der Hirsebrei und Hirsemus als wärmende Wintergerichte geschätzt werden. Die moderne Schweizer Bio-Bewegung hat den Hirseanbau in beiden Kantonen wiederbelebt, und Schweizer Hirse findet sich heute in Reformhäusern und Bio-Läden im ganzen Land.',
    primaryMillets: ['proso-millet', 'foxtail-millet'],
    iconicDishes: [
      {
        name: 'Bündner Hirsebrei',
        millet: 'Rispenhirse',
        description:
          'Ein cremiger Brei aus Hirse und frischer Bergmilch, langsam gekocht und mit Alpbutter, braunem Zucker und einem Hauch Zimt serviert. Der Bündner Hirsebrei zeichnet sich durch seine besonders feine Konsistenz aus, die durch langes Rühren entsteht. In den Bündner Tälern wird er als Abendessen oder als süße Nachspeise gereicht.',
      },
      {
        name: 'Hirsemus mit Zwetschgen',
        millet: 'Rispenhirse',
        description:
          'Ein süßer Hirsepudding, der mit eingekochten Zwetschgen, Vanille und einem Schuss Kirsch (Kirschbrand) verfeinert wird. Dieses Dessert verbindet die schweizerische Obstbautradition mit der Hirsekultur und ist besonders im Herbst beliebt, wenn die Zwetschgenernte eingebracht wird.',
      },
      {
        name: 'Walliser Hirsesuppe',
        millet: 'Rispenhirse',
        description:
          'Eine kräftige Suppe aus Hirse, Lauch, Kartoffeln und Walliser Trockenfleisch (Bündnerfleisch), die mit Alpkäse überstreut und im Ofen gratiniert wird. Diese gehaltvolle Suppe war die traditionelle Abendmahlzeit der Walliser Bergbauern während der langen Wintermonate.',
      },
      {
        name: 'Hirsotto',
        millet: 'Rispenhirse',
        description:
          'Eine moderne Schweizer Kreation, die Hirse nach der Risotto-Methode mit Gemüsebrühe, Weißwein, Safran und Gruyère-Käse zubereitet. Das Hirsotto ist ein Beispiel für die kreative Verbindung von Tradition und Innovation in der zeitgenössischen Schweizer Küche.',
      },
    ],
    festivals: [
      {
        name: 'Chalandamarz',
        description:
          'Am 1. März feiern die Kinder in Graubünden den Chalandamarz — den Beginn des Frühlings. Mit großen Kuhglocken und lauten Gesängen ziehen sie durch die Dörfer, um den Winter zu vertreiben. Der Brauch ist besonders im Engadin und im Surselva-Tal lebendig.',
        milletConnection:
          'Nach dem Chalandamarz-Umzug wird traditionell ein Hirsebrei zubereitet, der den Übergang vom Winter zum Frühling markiert. Die goldene Farbe der Hirse symbolisiert die wiederkehrende Sonne und das neue Wachstum auf den Feldern. In rätoromanischen Familien wird der Chalandamarz-Hirsebrei mit Safran gefärbt, um die Sonnensymbolik zu verstärken.',
      },
      {
        name: 'Alpaufzug (Alpfahrt)',
        description:
          'Im Juni werden die Kühe festlich geschmückt auf die Sommeralpen getrieben. Das Fest markiert den Beginn der Alpsaison und wird in vielen Bündner und Walliser Gemeinden mit Festessen und Musik gefeiert.',
        milletConnection:
          'Zum Abschiedsessen vor dem Alpaufzug wurde in einigen Bündner Tälern ein Hirseknödel-Eintopf zubereitet, der den Sennen als kräftige Mahlzeit für den Aufstieg diente. Die Hirse war zudem ein beliebter Proviant für die erste Woche auf der Alp, bevor die Milchwirtschaft den Speiseplan dominierte.',
      },
    ],
    culturalSignificance:
      'In der rätoromanischen Kultur Graubündens ist die Hirse tief im Brauchtum verankert. Das rätoromanische Wort „megl" für Hirse findet sich in Ortsnamen und Flurbezeichnungen im ganzen Kanton, was auf eine weitverbreitete historische Kultivierung hindeutet. Im Wallis erzählen alte Legenden von Berggeistern, die den Bauern die Hirseaussaat lehrten, und in den Gemeindearchiven von Zernez und Scuol sind Hirseabgaben als Zehnt aus dem 13. Jahrhundert dokumentiert. Die Schweizer Hirsetradition unterscheidet sich von der deutschen durch den Einfluss der romanischen Küche: Safran, Nüsse und Trockenfrüchte spielen eine größere Rolle, und die Zubereitungsweise ist oft verfeinert und subtil. Heute ist die Schweiz ein Vorreiter in der europäischen Bio-Hirseproduktion, und Schweizer Demeter-Hirse genießt höchstes Ansehen in der Naturkostszene.',
    traditionalPractices: [
      'Hirseanbau auf Sonnenterrassen: In den steilen Tälern Graubündens wurde Hirse auf terrassierten Feldern an sonnigen Südhängen angebaut — ähnlich dem Weinbau im Rheintal.',
      'Hirsemühlen an Bergbächen: Kleine, wassergetriebene Mühlen an Gebirgsbächen wurden zum Mahlen von Hirsekorn verwendet. Einige dieser historischen Mühlen sind in Freilichtmuseen erhalten.',
      'Vorratshaltung in Strickbauten: Die typischen Bündner Strickbauten (Holzhäuser) hatten spezielle Vorratsräume, in denen Hirse in Holztruhen trocken und kühl gelagert wurde.',
      'Hirsestroh-Matratzen: In den kargen Bergbauernhäusern des Wallis dienten Matratzen aus Hirsestroh als Schlafunterlage — eine Praxis, die bis in die 1930er Jahre dokumentiert ist.',
    ],
    famousQuoteOrSaying:
      '„Hirse macht warm und stark — was braucht der Bergler mehr?" — Bündner Bauernweisheit',
    imageFile: '/images/sections/regional-graubuenden-wallis.webp',
  },

  // ═══════════════════════════════════════════════════════
  // 6. FRANKEN (FRANCONIA)
  // ═══════════════════════════════════════════════════════
  {
    slug: 'franken',
    state: 'Franken',
    region: 'Nordbayern',
    tagline:
      'Fränkische Hirsetradition — wo Weinberge und Hirsefelder Seite an Seite gedeihen.',
    description:
      'Franken, die nördliche Region des Freistaats Bayern, ist eine der ältesten Kulturlandschaften Deutschlands und war historisch eines der bedeutendsten Hirseanbaugebiete. Die fruchtbaren Lössböden des Maindreiecks und die milden Temperaturen des fränkischen Weinanbaugebiets boten ideale Bedingungen für den Hirseanbau, und in mittelalterlichen Zollregistern der Reichsstädte Nürnberg, Bamberg und Würzburg wird „Hirsch" (die fränkische Bezeichnung für Hirse) als wichtiges Handelsgut aufgeführt. Die fränkische Hirseküche ist bodenständig und geschmacklich kräftig: Hirsesuppen mit Dörrobst, Hirsebreie mit fränkischem Speck und Hirseklöße mit Pilzsoße zeugen von einer Kochtradition, die das Beste aus dem zusammenfügt, was die Region hervorbringt. Die enge Nachbarschaft von Weinbau und Ackerbau hat zu einzigartigen Kombinationen geführt — Hirse mit Weintrauben, Hirsebrei mit Wein und Hirsefladen zum Weinschoppen.',
    primaryMillets: ['proso-millet', 'foxtail-millet', 'finger-millet'],
    iconicDishes: [
      {
        name: 'Fränkische Hirsesuppe',
        millet: 'Rispenhirse',
        description:
          'Eine herzhafte, sämige Suppe aus feiner Hirsegrütze, Karotten, Sellerie, Lauch und geräuchertem Bauchspeck, die mit Liebstöckel und einem Hauch Muskat gewürzt wird. In der fränkischen Tradition wird die Suppe in tiefen Steinguttellern serviert und mit knusprigen Brotwürfeln gekrönt.',
      },
      {
        name: 'Hirsebrei mit Backobst',
        millet: 'Rispenhirse',
        description:
          'Goldgelber Hirsebrei, der mit eingeweichten Dörrpflaumen, Aprikosen und Birnen langsam gekocht und mit Zimt und braunem Zucker verfeinert wird. Dieses Gericht stammt aus der fränkischen Obsttrocknungstradition und war ein beliebtes Winterfrühstück auf dem Land, das Wärme und Energie für den Arbeitstag lieferte.',
      },
      {
        name: 'Fränkische Hirseklöße',
        millet: 'Rispenhirse',
        description:
          'Herzhafte Klöße aus Hirse, altbackenem Bauernbrot, Zwiebeln und frischer Petersilie, die in Fleischbrühe gegart und als Beilage zu fränkischem Schäufele (Schweineschulter) oder Sauerbraten serviert werden. Die Hirseklöße sind eine nährstoffreiche Alternative zu den berühmten fränkischen Kartoffelklößen.',
      },
      {
        name: 'Hirsefladen zum Brotzeit',
        millet: 'Rispenhirse',
        description:
          'Knusprige, flache Brote aus Hirsemehl und Kümmel, die auf dem Backstein gebacken und zur fränkischen Brotzeit mit Obatzda (Camembert-Aufstrich), Rettich und einem Schoppen Frankenwein gereicht werden.',
      },
      {
        name: 'Nürnberger Hirsekrapfen',
        millet: 'Rispenhirse',
        description:
          'Süße, in Schmalz ausgebackene Krapfen aus Hirseteig mit Mohn- oder Pflaumenfüllung, die in Nürnberg seit dem Mittelalter auf Jahrmärkten und zur Fastnacht verkauft wurden. Die Rezeptur findet sich bereits in einem Nürnberger Kochbuch aus dem 15. Jahrhundert.',
      },
    ],
    festivals: [
      {
        name: 'Fränkisches Erntedankfest',
        description:
          'Das Erntedankfest wird in fränkischen Dörfern mit geschmückten Erntewagen, Festgottesdiensten und gemeinsamen Mahlzeiten gefeiert. Besonders in den Weinbauregionen entlang des Mains verbindet sich die Erntedanktradition mit dem Weinfest.',
        milletConnection:
          'In historischen fränkischen Erntedankfeiern wurde die Hirsegarbe als „Hirsemännlein" verkleidet und im Festumzug mitgeführt. Zum Erntedankessen gab es Hirsesuppe als Vorspeise und Hirsebrei mit Backobst als Nachspeise. In der Fränkischen Schweiz werden diese Bräuche heute von Heimatvereinen und Slow-Food-Initiativen wiederbelebt.',
      },
    ],
    culturalSignificance:
      'In der fränkischen Kultur verbindet sich die Hirsetradition eng mit der Handelsgeschichte der Region. Die Reichsstadt Nürnberg war im Mittelalter ein bedeutender Umschlagplatz für Hirse, und fränkische Kaufleute handelten das Getreide entlang der Main-Handelsroute bis nach Frankfurt und Köln. In den Fachwerkhäusern der fränkischen Altstädte finden sich noch heute Getreidespeicher, die einst Hirse beherbergten. Die fränkische Hirseküche unterscheidet sich von der oberbayerischen durch den stärkeren Einsatz von Dörrobst, Kräutern und Wein — ein Ergebnis der vielfältigen Landwirtschaft, die Obstbau, Weinbau und Getreidewirtschaft vereint. Das Nürnberger Germanische Nationalmuseum bewahrt mittelalterliche Kochbücher auf, in denen Hirserezepte einen prominenten Platz einnehmen, und die Bamberger Gärtnertradition zeigt, wie Hirse als Zwischenfrucht im intensiven städtischen Gartenbau genutzt wurde.',
    traditionalPractices: [
      'Hirsemarkt in Nürnberg: Bis ins 18. Jahrhundert war der Nürnberger Kornmarkt ein wichtiger Handelsplatz für fränkische Hirse. Die Qualitätskontrolle erfolgte durch städtische Kornmesser, die Reinheit und Feuchtigkeit prüften.',
      'Hirsebrühe als Fastenspeise: In fränkischen Klöstern wie Banz und Ebrach wurde verdünnte Hirsebrühe während der strengen Fastenzeit als leichte Mahlzeit gereicht.',
      'Kombinationsanbau: Fränkische Bauern pflanzten Hirse in Randstreifen um die Weinberge — eine Praxis, die den Boden schützte und eine Zusatzernte einbrachte.',
      'Hirsebrot als Alltagskost: In den ärmeren Regionen der Fränkischen Alb wurde Hirse gemahlen und mit Roggenmehl zu einem dunklen, nahrhaften Brot verbacken.',
    ],
    famousQuoteOrSaying:
      '„Hirse und Wein — so muss Franken sein!" — Fränkischer Spruch',
    imageFile: '/images/sections/regional-franken.webp',
  },

  // ═══════════════════════════════════════════════════════
  // 7. BRANDENBURG-MECKLENBURG
  // ═══════════════════════════════════════════════════════
  {
    slug: 'brandenburg-mecklenburg',
    state: 'Brandenburg-Mecklenburg',
    region: 'Nordostdeutschland',
    tagline:
      'Von der märkischen Streusandbüchse zum Bio-Hirse-Pionier — Tradition trifft Moderne.',
    description:
      'Die sandigen, nährstoffarmen Böden Brandenburgs und Mecklenburgs — liebevoll „des Heiligen Römischen Reiches Streusandbüchse" genannt — waren historisch geradezu prädestiniert für den Hirseanbau. Wo Weizen und Roggen nur kümmerlich gediehen, brachte die genügsame Rispenhirse zuverlässige Ernten ein. In den Dörfern der Mark Brandenburg, der Prignitz und der Mecklenburgischen Seenplatte war Hirsebrei über Jahrhunderte das tägliche Brot der Landbevölkerung. Die märkische Hirseküche ist schlicht und pragmatisch: Hirsefladen, Hirsepudding und Hirsesuppe — einfache Gerichte, die aus wenigen Zutaten sättigende Mahlzeiten schaffen. Heute ist die Region Vorreiter einer bemerkenswerten Hirserenaissance: Bio-Bauern auf Demeter- und Bioland-Höfen bauen wieder Hirse an, und brandenburgische Startups verarbeiten sie zu modernen Produkten wie Hirsemilch, Hirse-Müsli und Hirsenudeln. Die Verbindung von traditionellem Wissen und ökologischer Landwirtschaft macht Brandenburg-Mecklenburg zum spannendsten Hirseanbaugebiet des 21. Jahrhunderts.',
    primaryMillets: ['proso-millet', 'foxtail-millet', 'finger-millet'],
    iconicDishes: [
      {
        name: 'Märkische Hirsefladen',
        millet: 'Rispenhirse',
        description:
          'Einfache, rustikale Fladen aus Hirsemehl, Wasser, Salz und etwas Schmalz, die in der Pfanne oder auf dem heißen Stein gebacken werden. Die Hirsefladen waren das alltägliche Brot der brandenburgischen Landbevölkerung und wurden mit Griebenschmalz, Zwiebeln oder Quark belegt. In der modernen Variante werden sie mit Kräutern und Sonnenblumenkernen verfeinert.',
      },
      {
        name: 'Hirsepudding mit Beerensoße',
        millet: 'Rispenhirse',
        description:
          'Ein süßer Pudding aus Hirse, Milch und Vanille, der in einer Form gestürzt und mit einer Soße aus frischen oder eingekochten Waldbeeren — Heidelbeeren, Brombeeren oder Preiselbeeren — serviert wird. Dieser Nachtisch nutzt den Beerenreichtum der mecklenburgischen Wälder und ist ein sommerlicher Klassiker der Landhausküche.',
      },
      {
        name: 'Hirsesuppe mit Räucheraal',
        millet: 'Rispenhirse',
        description:
          'Eine besondere Spezialität der Havelregion: feine Hirsesuppe mit Stücken von geräuchertem Aal, Dill und einem Schuss Sahne. Die Kombination von Süßwasserfisch und Hirse spiegelt die Wirtschaft der Fluss- und Seenlandschaft Brandenburgs wider.',
      },
      {
        name: 'Mecklenburger Hirsegrütze',
        millet: 'Rispenhirse',
        description:
          'Grob geschrotete Hirse, die in Fleischbrühe mit Wurzelgemüse und Kräutern zu einer sämigen Grütze gekocht wird. Die Mecklenburger Variante wird mit karamellisierten Zwiebeln und einem Löffel Gänseschmalz verfeinert — eine deftige Winterkost der Gutshäuser.',
      },
      {
        name: 'Bio-Hirse-Bowl (modern)',
        millet: 'Rispenhirse / Kolbenhirse',
        description:
          'Eine zeitgenössische Kreation brandenburgischer Restaurants: gekochte Bio-Hirse mit geröstetem Gemüse, Avocado, Sprossen und einem Dressing aus regionalem Leinöl. Diese Bowl verbindet die traditionelle Hirsekultur mit modernen Ernährungstrends und zeigt die Wandlungsfähigkeit des alten Getreides.',
      },
    ],
    festivals: [
      {
        name: 'Brandenburger Erntefest',
        description:
          'Die brandenburgischen Erntefeste im September und Oktober sind farbenfrohe Dorffeiern mit Erntekrone, Festumzug, Volksmusik und einem gemeinsamen Festessen. Besonders in der Prignitz und im Fläming haben die Erntefeste eine lange Tradition.',
        milletConnection:
          'In historischen brandenburgischen Erntefesten war die „Hirsegarbe" ein wichtiger Bestandteil der Erntekrone. Die Schnitterin, die die letzte Hirsegarbe band, wurde zur „Hirsebraut" erklärt und erhielt besondere Ehren beim Festessen. Zum Erntedank wurde ein großer Hirsepudding zubereitet, und die Kinder erhielten geröstete Hirsekörner als süße Nascherei. Bio-Bauernhöfe in Brandenburg beleben diese Traditionen heute im Rahmen von Hoffesten und Ernte-Workshops wieder.',
      },
      {
        name: 'Spreewälder Hirsetag',
        description:
          'Ein seit 2018 jährlich stattfindendes Fest im Spreewald, das die Rückkehr der Hirse in die regionale Landwirtschaft feiert. Mit Kochvorführungen, Verkostungen, Vorträgen und einem Bio-Bauernmarkt verbindet der Hirsetag Tradition und Innovation.',
        milletConnection:
          'Der Spreewälder Hirsetag wurde von Bio-Landwirten und Slow-Food-Aktivisten initiiert, um die historische Bedeutung der Hirse in der Region wieder ins Bewusstsein zu rufen. Höhepunkt ist der Hirsebrei-Wettbewerb, bei dem Köche und Hobbyköche um den besten traditionellen und den kreativsten modernen Hirsebrei wetteifern.',
      },
    ],
    culturalSignificance:
      'In der brandenburgisch-mecklenburgischen Kulturgeschichte spiegelt die Hirse die Bescheidenheit und den Pragmatismus der Landbevölkerung wider. Das brandenburgische Sprichwort „Hirse im Topf, Dach überm Kopf" fasst zusammen, was als grundlegendes Lebensglück galt. In den Gutshäusern und Herrensitzen des mecklenburgischen Landadels wurde die Hirse als „Bauernkost" betrachtet, während sie für die einfache Bevölkerung oft die einzige zuverlässige Nahrungsquelle war. Die Wende von 1989/90 brachte einen Umbruch in der ostdeutschen Landwirtschaft, und auf den ehemaligen LPG-Flächen entstand eine neue Generation ökologischer Betriebe, die alte Kulturpflanzen wie die Hirse wiederentdeckten. Heute steht die Region für eine moderne, nachhaltige Hirseproduktion: Demeter-zertifizierte Höfe in der Uckermark, innovative Verarbeitungsbetriebe in Brandenburg und Forschungsprojekte an der Universität Rostock machen die Region zum wichtigsten Hirsestandort Deutschlands.',
    traditionalPractices: [
      'Dreifelderwirtschaft mit Hirse: In der brandenburgischen Landwirtschaft des 18. und 19. Jahrhunderts wurde Hirse als wichtiger Bestandteil der Dreifelderwirtschaft auf den leichten Sandböden angebaut.',
      'Hirsefladen als Reiseproviant: Bauern und Handwerker nahmen getrocknete Hirsefladen als haltbaren Proviant auf Reisen mit — ähnlich dem Hardbrot der skandinavischen Tradition.',
      'Gänsefütterung mit Hirse: In der mecklenburgischen Gänsezucht wurde Hirse als hochwertiges Mastfutter verwendet, das besonders zartes und schmackhaftes Gänsefleisch hervorbrachte.',
      'Moderne Bio-Hirse-Pioniere: Seit den 2000er Jahren bauen Demeter- und Bioland-Betriebe in der Uckermark und der Prignitz wieder Rispenhirse an und verarbeiten sie zu regionalen Bio-Produkten — eine Wiederentdeckung, die nationale Aufmerksamkeit findet.',
      'Saatguterhaltung: Brandenburgische Saatgutbanken bewahren alte regionale Hirsesorten, die an die sandigen Böden und das kontinentale Klima angepasst sind.',
    ],
    famousQuoteOrSaying:
      '„Hirse im Topf, Dach überm Kopf" — Brandenburgisches Sprichwort',
    imageFile: '/images/sections/regional-brandenburg-mecklenburg.webp',
  },
];

export function getRegionalTraditionBySlug(
  slug: string
): RegionalTradition | undefined {
  return regionalTraditions.find((t) => t.slug === slug);
}
