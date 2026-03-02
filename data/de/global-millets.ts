import type { GlobalMilletRegion } from '@/lib/types';

export const globalMilletRegions: GlobalMilletRegion[] = [
  // ─── 1. MITTELEUROPA ──────────────────────────────────
  {
    slug: 'mitteleuropa',
    region: 'Mitteleuropa',
    continent: 'Europa',
    tagline:
      'Die Wiege der europäischen Hirsetradition — vom mittelalterlichen Grundnahrungsmittel zum Bio-Superfood',
    description:
      'Mitteleuropa war über Jahrtausende ein Kerngebiet des Hirseanbaus. Die Rispenhirse (Panicum miliaceum) wurde bereits in der Bronzezeit von den Donau bis an die Ostsee kultiviert und war bis ins 18. Jahrhundert das wichtigste Getreide der Landbevölkerung. In Deutschland, Österreich, der Schweiz und Tschechien bezeugen archäologische Funde, Ortsnamen (wie Hirsau, Hirschberg, Proso) und mittelalterliche Urkunden die zentrale Rolle der Hirse in der regionalen Ernährung. Mit der Einführung der Kartoffel im 18. Jahrhundert geriet die Hirse in Vergessenheit, doch seit den 2000er Jahren erlebt sie eine bemerkenswerte Renaissance: Bio-Bauern bauen wieder alte Hirsesorten an, und die Nachfrage nach glutenfreien, regionalen Lebensmitteln hat der Hirse einen festen Platz in Reformhäusern und Bio-Läden gesichert.',
    countries: ['Deutschland', 'Österreich', 'Schweiz', 'Tschechien'],
    primaryMillets: [
      'Rispenhirse (Panicum miliaceum)',
      'Kolbenhirse (Setaria italica)',
    ],
    iconicFoods: [
      {
        name: 'Hirsebrei (Hirsebrei / Brein)',
        country: 'Deutschland / Österreich',
        millet: 'Rispenhirse',
        description:
          'Der goldgelbe Hirsebrei ist das Urdeutsche Hirsegericht schlechthin — langsam in Milch gekocht, mit Butter, Zimt und Honig serviert. In Bayern und Österreich als „Brein" bekannt, war er über Jahrhunderte das wichtigste Alltagsgericht und galt zu Neujahr als Glücksbringer.',
      },
      {
        name: 'Hirseknödel',
        country: 'Österreich (Tirol)',
        millet: 'Rispenhirse',
        description:
          'Herzhafte Knödel aus gekochter Hirse, Brot, Speck und Kräutern, die in Salzwasser gegart und mit zerlassener Butter serviert werden. Ein Klassiker der Tiroler Bauernküche, der die alpine Knödeltradition mit der Hirse verbindet.',
      },
      {
        name: 'Jahelník',
        country: 'Tschechien',
        millet: 'Rispenhirse',
        description:
          'Ein traditioneller böhmischer Hirseauflauf mit Quark, Eiern und Mohn, der im Ofen goldbraun gebacken wird. Jahelník ist ein fester Bestandteil der tschechischen Landhausküche und wird sowohl als Hauptgericht als auch als Nachspeise gegessen.',
      },
      {
        name: 'Hirsotto',
        country: 'Schweiz',
        millet: 'Rispenhirse',
        description:
          'Eine moderne Schweizer Kreation: Hirse wird nach der Risotto-Methode mit Brühe, Weißwein und Gruyère zubereitet. Das Hirsotto steht für die innovative Verbindung alpiner Tradition und zeitgenössischer Küche.',
      },
    ],
    historicalHighlights: [
      {
        title: 'Bronzezeitliche Hirsekultur',
        period: 'ca. 2000–800 v. Chr.',
        description:
          'Archäologische Funde aus der Aunjetitzer Kultur (Mitteleuropa) und Pfahlbausiedlungen am Bodensee belegen den Hirseanbau in der Bronzezeit. Hirsekörner gehörten zu den häufigsten Getreideresten in vorgeschichtlichen Siedlungen.',
      },
      {
        title: 'Mittelalterliche Hirsemärkte',
        period: 'ca. 1200–1500',
        description:
          'In den Reichsstädten Nürnberg, Augsburg und Prag wurde Hirse auf speziellen Kornmärkten gehandelt. Städtische Verordnungen regelten Qualität, Maße und Preise, was die wirtschaftliche Bedeutung der Hirse unterstreicht.',
      },
      {
        title: 'Klösterliche Hirsekultur',
        period: 'ca. 800–1600',
        description:
          'Benediktiner- und Zisterzienserklöster kultivierten Hirse systematisch und entwickelten verfeinerte Zubereitungsarten. Klösterliche Kochbücher aus dem 15. Jahrhundert enthalten detaillierte Hirserezepte für Fasten- und Festtage.',
      },
      {
        title: 'Bio-Hirserenaissance',
        period: '2000–heute',
        description:
          'Demeter- und Bioland-Betriebe in Deutschland, Österreich und der Schweiz bauen wieder alte Hirsesorten an. Die glutenfreie Ernährungsbewegung und das wachsende Interesse an regionalen Lebensmitteln haben der Hirse einen festen Platz im modernen Speiseplan gesichert.',
      },
    ],
    culturalSignificance:
      'In der mitteleuropäischen Volkskultur war Hirse ein Symbol für Wohlstand und Glück. Der Brauch, zu Neujahr Hirsebrei zu essen, ist in Deutschland und Österreich seit dem Mittelalter überliefert und basiert auf dem Glauben, dass die vielen kleinen goldenen Körner Reichtum im neuen Jahr bringen. In der Lausitz streuen die Sorben bis heute Hirsekörner bei Hochzeiten als Fruchtbarkeitssymbol. Tschechische Volksmärchen erzählen von magischen Hirsetöpfen, die niemals leer werden, und bayerische Bauernregeln bestimmen den optimalen Zeitpunkt für die Hirseaussaat.',
    modernStatus:
      'Deutschland importiert jährlich etwa 10.000–15.000 Tonnen Hirse, hauptsächlich aus der Ukraine und Indien, doch die heimische Produktion wächst stetig. In Österreich und der Schweiz ist die Bio-Hirseproduktion ein wachsender Nischenmarkt. Die DACH-Region gehört zu den Vorreitern bei der Entwicklung innovativer Hirseprodukte wie Hirsemilch, Hirseburger und Hirse-Müsli. Der deutsche Bio-Fachhandel verzeichnet zweistellige Zuwachsraten bei Hirseprodukten.',
    keyFact:
      'Archäologische Funde belegen den Hirseanbau in Mitteleuropa seit der Bronzezeit (ca. 2000 v. Chr.) — die Hirse ist damit eines der ältesten kultivierten Getreide der Region.',
    imageFile: '/images/sections/global-mitteleuropa.webp',
  },

  // ─── 2. WESTAFRIKA ────────────────────────────────────
  {
    slug: 'westafrika',
    region: 'Westafrika',
    continent: 'Afrika',
    tagline:
      'Das Herz der weltweiten Hirseproduktion — wo Perlhirse Millionen von Menschen ernährt',
    description:
      'Westafrika ist das globale Zentrum des Hirseanbaus und die Heimat der Perlhirse (Pennisetum glaucum), die hier vor über 4.500 Jahren in der Sahelzone domestiziert wurde. In den semi-ariden Regionen von Niger, Mali, Senegal und Burkina Faso ist Hirse das wichtigste Grundnahrungsmittel und ernährt Hunderte Millionen Menschen. Die westafrikanische Hirsekultur ist tief in das soziale und religiöse Leben eingebettet: Hirseernte und -verarbeitung sind gemeinschaftliche Rituale, und Hirsebier (Dolo) ist ein unverzichtbarer Bestandteil von Festen und Zeremonien. Niger ist der weltweit größte Hirseproduzent, und in der Sahelzone macht Hirse bis zu 75 % der gesamten Getreideproduktion aus.',
    countries: ['Niger', 'Mali', 'Senegal', 'Burkina Faso', 'Nigeria'],
    primaryMillets: [
      'Perlhirse (Pennisetum glaucum)',
      'Fingerhirse (Eleusine coracana)',
      'Kolbenhirse (Setaria italica)',
    ],
    iconicFoods: [
      {
        name: 'Tô (Hirsebrei)',
        country: 'Mali / Burkina Faso',
        millet: 'Perlhirse',
        description:
          'Ein fester, polentaartiger Brei aus Hirsemehl, der als Grundnahrungsmittel in der gesamten Sahelzone dient. Tô wird in Bällchen geformt und in Soßen aus Erdnüssen, Okra oder Baobab-Blättern getunkt — eine Mahlzeit, die Millionen von Menschen täglich ernährt.',
      },
      {
        name: 'Thiéré (Couscous de mil)',
        country: 'Senegal',
        millet: 'Perlhirse',
        description:
          'Senegalesischer Hirsecouscous, der über Dampf gegart und mit einer reichhaltigen Gemüse- oder Fleischsoße serviert wird. Thiéré ist ein Festmahl, das bei besonderen Anlässen wie Hochzeiten und religiösen Feiertagen zubereitet wird.',
      },
      {
        name: 'Dolo (Hirsebier)',
        country: 'Burkina Faso / Mali',
        millet: 'Sorghum / Perlhirse',
        description:
          'Ein traditionelles fermentiertes Hirsebier, das von Frauen (den „Dolotières") in einem mehrtägigen Brauprozess hergestellt wird. Dolo ist ein zentrales Element sozialer und religiöser Zeremonien und spielt eine wichtige Rolle in der westafrikanischen Gemeinschaftskultur.',
      },
      {
        name: 'Fura da Nono',
        country: 'Nigeria / Niger',
        millet: 'Perlhirse',
        description:
          'Gewürzte Hirsebällchen (Fura), die in frischer Kuhmilch (Nono) aufgelöst werden — ein erfrischendes, proteinreiches Getränk der Fulani-Hirten, das besonders in der heißen Trockenzeit geschätzt wird.',
      },
    ],
    historicalHighlights: [
      {
        title: 'Domestizierung der Perlhirse',
        period: 'ca. 2500 v. Chr.',
        description:
          'Die Perlhirse wurde in der Sahelzone Westafrikas domestiziert — archäologische Funde aus Dhar Tichitt (Mauretanien) belegen die früheste bekannte Kultivierung vor etwa 4.500 Jahren.',
      },
      {
        title: 'Ghana-Reich und Hirsehandel',
        period: 'ca. 300–1200 n. Chr.',
        description:
          'Im Ghana-Reich war Hirse ein wichtiges Handelsgut auf den transsaharischen Handelsrouten. Hirseüberschüsse ermöglichten die Entwicklung komplexer Gesellschaftsstrukturen und städtischer Zentren.',
      },
      {
        title: 'Koloniale Verdrängung',
        period: '1880–1960',
        description:
          'Die europäische Kolonialpolitik förderte Exportkulturen wie Erdnüsse und Baumwolle auf Kosten des Hirseanbaus, was die Ernährungssouveränität der Region nachhaltig beeinträchtigte.',
      },
    ],
    culturalSignificance:
      'In westafrikanischen Gesellschaften ist Hirse weit mehr als Nahrung — sie ist ein Medium sozialer Beziehungen, religiöser Praxis und kultureller Identität. Hirseernte und -verarbeitung sind gemeinschaftliche Rituale, die den sozialen Zusammenhalt stärken. In vielen Kulturen der Sahelzone ist das Anbieten von Hirsebrei oder Hirsebier ein Zeichen der Gastfreundschaft und des Respekts. Die Fulani-Hirten betrachten die Verbindung von Hirse und Milch als perfekte Ernährung, und in den Dogon-Gemeinden Malis ist die Hirseernte mit kosmologischen Vorstellungen verknüpft.',
    modernStatus:
      'Westafrika produziert jährlich über 15 Millionen Tonnen Hirse, wobei Niger, Nigeria und Mali die größten Produzenten sind. Der Klimawandel stellt den Hirseanbau vor neue Herausforderungen: Unregelmäßige Niederschläge und längere Trockenperioden bedrohen die Erntesicherheit. Gleichzeitig wird Hirse als klimaresistente Kulturpflanze zunehmend von internationalen Organisationen gefördert. Die FAO und das ICRISAT arbeiten an dürreresistenten Hirsesorten und verbesserten Anbaumethoden.',
    keyFact:
      'Niger ist mit über 3,5 Millionen Tonnen jährlich der weltweit größte Hirseproduzent — Hirse macht dort über 65 % der gesamten Getreideproduktion aus.',
    imageFile: '/images/sections/global-westafrika.webp',
  },

  // ─── 3. OSTAFRIKA ─────────────────────────────────────
  {
    slug: 'ostafrika',
    region: 'Ostafrika',
    continent: 'Afrika',
    tagline:
      'Geburtsstätte von Teff und Fingerhirse — jahrtausendealte Getreidekulturen der Hochländer',
    description:
      'Ostafrika ist die evolutionäre Wiege zweier bedeutender Hirsearten: Teff (Eragrostis tef), das in den äthiopischen Hochländern domestiziert wurde, und Fingerhirse (Eleusine coracana), die in den Hochebenen von Uganda und Kenia seit über 5.000 Jahren angebaut wird. Äthiopien produziert über 90 % des weltweiten Teff auf etwa 3 Millionen Hektar Anbaufläche. Das säuerlich-schwammige Fladenbrot Injera, hergestellt aus fermentiertem Teff-Teig, ist das kulturelle Herzstück der äthiopischen und eritreischen Küche. In Kenia und Uganda ist Fingerhirse ein unverzichtbarer Bestandteil der traditionellen Ernährung, besonders als Brei für Kleinkinder und als fermentiertes Bier (Busaa) für Feierlichkeiten.',
    countries: ['Äthiopien', 'Eritrea', 'Kenia', 'Uganda', 'Tansania'],
    primaryMillets: [
      'Teff (Eragrostis tef)',
      'Fingerhirse (Eleusine coracana)',
      'Sorghum (Sorghum bicolor)',
    ],
    iconicFoods: [
      {
        name: 'Injera',
        country: 'Äthiopien / Eritrea',
        millet: 'Teff',
        description:
          'Ein großes, schwammiges Sauerteig-Fladenbrot mit charakteristisch saurem Geschmack, hergestellt durch 2-3-tägige Fermentation von Teff-Mehl. Injera dient als Teller und Besteck zugleich — Fleisch- und Gemüseeintöpfe (Wot) werden darauf serviert und mit abgerissenen Stücken aufgenommen.',
      },
      {
        name: 'Uji (Hirsebrei)',
        country: 'Kenia / Tansania',
        millet: 'Fingerhirse',
        description:
          'Ein dünner, fermentierter Brei aus Fingerhirsemehl, der als Frühstücksgetränk und Babynahrung in ganz Ostafrika verbreitet ist. Uji ist besonders reich an Kalzium und Eisen und wird stillenden Müttern und Kleinkindern empfohlen.',
      },
      {
        name: 'Bushera',
        country: 'Uganda',
        millet: 'Fingerhirse / Sorghum',
        description:
          'Ein fermentiertes, leicht alkoholisches Getränk aus gekeimter und getrockneter Fingerhirse, das in der Kultur der Banyankole und anderer ugandischer Völker eine zentrale Rolle bei Festen und Zeremonien spielt.',
      },
    ],
    historicalHighlights: [
      {
        title: 'Domestizierung von Teff',
        period: 'ca. 1000–800 v. Chr.',
        description:
          'Teff wurde in den äthiopischen Hochländern domestiziert und ist damit eine der wenigen Getreidearten, die ausschließlich in einer Region ihren Ursprung haben. Teff-Samen wurden in präaksumitischen archäologischen Stätten gefunden.',
      },
      {
        title: 'Aksumitisches Reich',
        period: 'ca. 100–940 n. Chr.',
        description:
          'Das Aksumitische Reich, eine der großen Zivilisationen der Antike, basierte auf der Landwirtschaft mit Teff und Fingerhirse. Überschussproduktion ermöglichte Handelsnetze bis nach Rom und Indien.',
      },
      {
        title: 'Äthiopisches Biodiversitätsabkommen',
        period: '2006',
        description:
          'Äthiopien verbot den Export von Teff-Saatgut zum Schutz seiner genetischen Ressourcen — ein Meilenstein im Kampf um Ernährungssouveränität und Saatgutrechte.',
      },
    ],
    culturalSignificance:
      'In der äthiopischen Kultur ist Injera weit mehr als Nahrung. Der Brauch des „Gursha" — einer Person von Hand einen Bissen Injera mit Beilage zu reichen — ist ein tief verwurzelter Ausdruck von Liebe, Respekt und Freundschaft. In der ugandischen Kultur der Bagisu ist Fingerhirse (Bulo) ein heiliges Getreide, das bei Initiationsriten und Ahnenverehrung verwendet wird.',
    modernStatus:
      'Äthiopien produziert jährlich etwa 5 Millionen Tonnen Teff. Seit den 2010er Jahren hat Teff als „Superfood" internationale Bekanntheit erlangt — sein vollständiges Aminosäureprofil, hoher Eisengehalt und natürliche Glutenfreiheit machen es zum Exportschlager. Allerdings haben steigende internationale Preise Teff für einkommensschwache Äthiopier zunehmend unerschwinglich gemacht.',
    keyFact:
      'Teff ist so klein, dass etwa 3.000 Körner nur ein Gramm wiegen — und dennoch ernährt es über 80 Millionen Äthiopier als Hauptnahrungsmittel.',
    imageFile: '/images/sections/global-ostafrika.webp',
  },

  // ─── 4. SÜDASIEN ──────────────────────────────────────
  {
    slug: 'suedasien',
    region: 'Südasien',
    continent: 'Asien',
    tagline:
      'Die größte Hirsevielfalt der Welt — neun verschiedene Hirsearten in einer einzigen Region',
    description:
      'Südasien, insbesondere Indien, ist die Region mit der weltweit größten Hirsevielfalt. Mindestens neun verschiedene Hirsearten — Perlhirse (Bajra), Fingerhirse (Ragi), Sorghum (Jowar), Kolbenhirse, Kleine Hirse, Kodohirse, Japanische Hirse, Rispenhirse und Brauntophirse — werden auf dem Subkontinent angebaut und gegessen. Indien ist nach Produktion der drittgrößte Hirseproduzent der Welt und war die treibende Kraft hinter der Erklärung des Jahres 2023 zum „Internationalen Jahr der Hirse" durch die Vereinten Nationen. Von den Wüsten Rajasthans, wo Perlhirse mit weniger als 300 mm Niederschlag gedeiht, über die Dekkan-Hochebene mit ihren Sorghum-Feldern bis zu den Reisterrassen Südindiens, wo Fingerhirse auf den Berghängen wächst — Hirse ist tief in die kulinarische und kulturelle Identität des Subkontinents eingewoben.',
    countries: ['Indien', 'Nepal', 'Myanmar', 'Sri Lanka'],
    primaryMillets: [
      'Perlhirse (Pennisetum glaucum)',
      'Fingerhirse (Eleusine coracana)',
      'Sorghum (Sorghum bicolor)',
      'Kolbenhirse (Setaria italica)',
      'Kleine Hirse (Panicum sumatrense)',
    ],
    iconicFoods: [
      {
        name: 'Bajra ki Roti',
        country: 'Indien (Rajasthan)',
        millet: 'Perlhirse',
        description:
          'Dicke, rustikale Fladen aus Perlhirsemehl, die ohne Nudelholz von Hand geformt und auf der heißen Platte gebacken werden. Mit Ghee und scharfer Knoblauch-Chutney serviert, ist Bajra-Roti das Grundnahrungsmittel der Wüstenbewohner Rajasthans.',
      },
      {
        name: 'Ragi Mudde',
        country: 'Indien (Karnataka)',
        millet: 'Fingerhirse',
        description:
          'Ein fester, glatter Brei aus Fingerhirsemehl, der in der südindischen Küche mit scharfem Sambar oder würziger Fleischsoße gegessen wird. Ragi Mudde ist reich an Kalzium und das Grundnahrungsmittel in den ländlichen Regionen Karnatakas.',
      },
      {
        name: 'Dhido',
        country: 'Nepal',
        millet: 'Fingerhirse / Buchweizen',
        description:
          'Ein fester Brei aus Fingerhirsemehl, der im Himalaja-Gebirge als energiereiche Mahlzeit für Bergbauern und Wanderer dient. Dhido wird mit Dal (Linsencurry) und Gemüsebeilagen serviert.',
      },
    ],
    historicalHighlights: [
      {
        title: 'Früheste Hirsedomestizierung in Südasien',
        period: 'ca. 3000–2000 v. Chr.',
        description:
          'Archäologische Funde aus der Indus-Tal-Zivilisation belegen den Anbau von Perlhirse und Fingerhirse. Hirsekörner wurden in den Ruinen von Mohenjo-daro und Harappa identifiziert.',
      },
      {
        title: 'Ayurvedische Hirsetherapie',
        period: 'ca. 1500 v. Chr. – heute',
        description:
          'In der ayurvedischen Medizin werden Hirsearten seit Jahrtausenden therapeutisch eingesetzt. Alte Sanskrit-Texte wie Charaka Samhita und Sushruta Samhita beschreiben die heilenden Eigenschaften verschiedener Hirsearten.',
      },
      {
        title: 'Internationales Jahr der Hirse',
        period: '2023',
        description:
          'Auf Initiative Indiens erklärten die Vereinten Nationen 2023 zum „International Year of Millets", um das Bewusstsein für die ernährungsphysiologischen, ökologischen und wirtschaftlichen Vorteile der Hirse weltweit zu stärken.',
      },
    ],
    culturalSignificance:
      'In Südasien ist Hirse tief in religiöse Rituale, saisonale Feste und Alltagskultur eingebettet. In Rajasthan wird Perlhirse als „Wüstenkrieger-Korn" verehrt, in Karnataka ist Fingerhirse die Grundlage der Ernährung von der Wiege bis zum Grab. Hinduistische Erntefeste wie Makar Sankranti und Pongal feiern den Hirsezyklus, und in vielen Dörfern wird die erste Ernte den Göttern dargebracht.',
    modernStatus:
      'Indien produziert jährlich über 12 Millionen Tonnen Hirse und ist damit einer der weltweit größten Produzenten. Die indische Regierung fördert den Hirsekonsum aktiv durch Subventionen, Schulmahlzeiten-Programme und die Integration von Hirse in das öffentliche Verteilungssystem. Der „Millet Startup Hub" unterstützt innovative Hirseprodukte wie Hirse-Pasta, Hirse-Kekse und Hirse-Getränke.',
    keyFact:
      'Indien baut mindestens neun verschiedene Hirsearten an — die weltweit größte Hirsevielfalt in einer einzigen Nation.',
    imageFile: '/images/sections/global-suedasien.webp',
  },

  // ─── 5. OSTASIEN ──────────────────────────────────────
  {
    slug: 'ostasien',
    region: 'Ostasien',
    continent: 'Asien',
    tagline:
      'Jahrtausendealte Hirsekultur — von den Lössebenen Chinas bis zu den Bergdörfern Japans',
    description:
      'Ostasien ist eine der ältesten Hirseanbauregionen der Welt. In China wurde die Kolbenhirse (Setaria italica) vor über 8.000 Jahren im Gelben-Fluss-Becken domestiziert und war das Grundgetreide der frühen chinesischen Zivilisationen — lange bevor der Reis dominierte. Die Rispenhirse (Panicum miliaceum) folgte wenig später und verbreitete sich von China entlang der Seidenstraße nach Westen. In Japan ist Hirse (awa, kibi, hie) seit der Jōmon-Zeit bekannt und wurde bis in die Edo-Zeit als Grundnahrungsmittel angebaut. In Korea gehört Hirse (jo) zu den traditionellen Fünf Getreiden (ogok) und wird bis heute in Festspeisen verwendet. Die ostasiatische Hirsekultur zeichnet sich durch eine Vielfalt von Zubereitungsarten aus — von Hirsewein und Hirsebrei bis zu süßen Reiskuchen mit Hirse.',
    countries: ['China', 'Japan', 'Südkorea', 'Nordkorea'],
    primaryMillets: [
      'Kolbenhirse (Setaria italica)',
      'Rispenhirse (Panicum miliaceum)',
      'Japanische Hirse (Echinochloa esculenta)',
    ],
    iconicFoods: [
      {
        name: 'Xiǎomǐ zhōu (小米粥)',
        country: 'China',
        millet: 'Kolbenhirse',
        description:
          'Ein dünner, goldener Hirsebrei, der in Nordchina als traditionelles Frühstück und Krankennahrung dient. Der Brei wird langsam gekocht, bis er eine seidige Konsistenz erreicht, und wird pur oder mit eingelegtem Gemüse serviert.',
      },
      {
        name: 'Awa-mochi (粟餅)',
        country: 'Japan',
        millet: 'Kolbenhirse (Awa)',
        description:
          'Klebrige Reiskuchen aus gedämpfter Kolbenhirse, die mit süßer Bohnenpaste (Anko) gefüllt oder in Sojamehl (Kinako) gewälzt werden. Awa-mochi sind ein traditionelles Festgebäck, das in japanischen Bergdörfern seit der Heian-Zeit zubereitet wird.',
      },
      {
        name: 'Ogokbap (오곡밥)',
        country: 'Südkorea',
        millet: 'verschiedene Hirsearten',
        description:
          'Fünf-Getreide-Reis, eine festliche Mischung aus Reis, Hirse, Sorghum, Bohnen und Klebreis, die zum koreanischen Neujahr (Seollal) und zum Vollmondfest (Daeboreum) gekocht wird.',
      },
    ],
    historicalHighlights: [
      {
        title: 'Älteste Hirsedomestizierung weltweit',
        period: 'ca. 6000 v. Chr.',
        description:
          'Archäologische Funde aus Cishan und Peiligang (Nordchina) belegen die Domestizierung der Kolbenhirse vor über 8.000 Jahren — eine der ältesten Getreidedomestizierungen der Menschheitsgeschichte.',
      },
      {
        title: 'Hirse als Grundlage der Shang-Dynastie',
        period: 'ca. 1600–1046 v. Chr.',
        description:
          'Die Shang-Dynastie, eine der ersten chinesischen Hochkulturen, basierte wirtschaftlich auf dem Hirseanbau. In den Orakelknochen-Inschriften dieser Epoche werden Hirseernten und Hirserituale ausführlich dokumentiert.',
      },
      {
        title: 'Hirse auf der Seidenstraße',
        period: 'ca. 200 v. Chr. – 1400 n. Chr.',
        description:
          'Entlang der Seidenstraße verbreitete sich die Hirse von China nach Zentralasien, Persien und Europa. Hirsekörner und -rezepte gehörten zum kulturellen Austausch, der den Eurasischen Kontinent verband.',
      },
    ],
    culturalSignificance:
      'In der chinesischen Kultur symbolisiert die Kolbenhirse (xiaomi) Bodenständigkeit, Genügsamkeit und den Geist der Revolution — Mao Zedongs Rote Armee wurde als „Hirsegewehr-Armee" (xiaomi jia buqiang) bezeichnet. In Japan ist Hirse mit der Legende von Momotarō (dem Pfirsichjungen) verbunden, der Kibidango (Hirseklöße) als Proviant auf seine Abenteuerreise mitnahm. In Korea symbolisieren die Fünf Getreide (einschließlich Hirse) die Harmonie der fünf Elemente.',
    modernStatus:
      'China ist nach wie vor einer der weltweit größten Hirseproduzenten mit einer jährlichen Produktion von über 2 Millionen Tonnen, hauptsächlich in den nordwestlichen Provinzen. In Japan und Korea hat der Hirseanbau stark abgenommen, doch ein wachsendes Interesse an traditioneller Ernährung und glutenfreien Lebensmitteln hat zu einer bescheidenen Wiederbelebung geführt. Chinesische Hirsemilch und japanische Hirse-Snacks finden zunehmend Abnehmer in gesundheitsbewussten urbanen Märkten.',
    keyFact:
      'Die Kolbenhirse wurde vor über 8.000 Jahren in China domestiziert und gilt damit als eine der ältesten Kulturpflanzen der Menschheitsgeschichte.',
    imageFile: '/images/sections/global-ostasien.webp',
  },

  // ─── 6. MITTELMEERRAUM ────────────────────────────────
  {
    slug: 'mittelmeerraum',
    region: 'Mittelmeerraum',
    continent: 'Europa / Asien',
    tagline:
      'Antike Hirsekultur am Kreuzweg der Zivilisationen — von Rom über Byzanz bis Anatolien',
    description:
      'Der Mittelmeerraum war in der Antike ein bedeutendes Hirseanbau- und Handelsgebiet. Die Griechen und Römer kannten die Hirse als „kenchros" bzw. „milium" und bauten sie sowohl als Nahrungsmittel als auch als Tierfutter an. In der Türkei, wo anatolische Bauern Hirse seit der Neolithik kultivieren, ist Darı (Sorghum) bis heute ein wichtiges Getreide. In Italien war die Hirse in der Po-Ebene ein Grundnahrungsmittel der Landbevölkerung, bevor der Mais sie im 17. Jahrhundert verdrängte. In Spanien findet sich Hirse in der traditionellen Küche Kastiliens, und in Griechenland wird sie in der Inselküche der Ägäis verarbeitet. Der Mittelmeerraum verbindet europäische, asiatische und afrikanische Hirsetraditionen und zeigt die bemerkenswerte Anpassungsfähigkeit dieses Getreides an verschiedene Klimazonen und Kulturen.',
    countries: ['Türkei', 'Italien', 'Spanien', 'Griechenland'],
    primaryMillets: [
      'Rispenhirse (Panicum miliaceum)',
      'Kolbenhirse (Setaria italica)',
      'Sorghum (Sorghum bicolor)',
    ],
    iconicFoods: [
      {
        name: 'Darı Pilavı',
        country: 'Türkei',
        millet: 'Sorghum / Rispenhirse',
        description:
          'Ein türkischer Hirsepilav, der mit Butter, Brühe und gerösteten Pinienkernen zubereitet wird. In den ländlichen Regionen Zentralanatoliens ist Hirsepilav eine traditionelle Alternative zum Reispilav.',
      },
      {
        name: 'Miglio con Verdure',
        country: 'Italien',
        millet: 'Rispenhirse (Miglio)',
        description:
          'Hirse, die mit saisonalem Gemüse, Olivenöl und Parmesan nach Risotto-Art gekocht wird. In der norditalienischen Landküche der Po-Ebene war dieses Gericht ein Vorläufer des Maisbreis Polenta.',
      },
      {
        name: 'Kechek el Fouqara',
        country: 'Griechenland / Türkei',
        millet: 'Rispenhirse',
        description:
          'Ein fermentierter Hirsebrei, der in der östlichen Mittelmeerküche als probiotisches Nahrungsmittel geschätzt wird. Die Fermentation verleiht dem Gericht einen leicht säuerlichen Geschmack und erhöht die Nährstoffverfügbarkeit.',
      },
    ],
    historicalHighlights: [
      {
        title: 'Römische Hirsekultur',
        period: 'ca. 500 v. Chr. – 400 n. Chr.',
        description:
          'Die Römer bauten Hirse (milium) in der gesamten Po-Ebene und in den Provinzen an. Plinius der Ältere beschrieb in seiner „Naturalis Historia" verschiedene Hirsesorten und ihre Verwendung als Brei, Brot und Tierfutter.',
      },
      {
        title: 'Byzantinische Hirsemärkte',
        period: 'ca. 500–1453 n. Chr.',
        description:
          'Im Byzantinischen Reich war Hirse ein wichtiges Handelsgetreide. Konstantinopler Marktvorschriften regelten Qualität und Preise, und byzantinische Kochbücher enthalten Hirserezepte für Festmahle.',
      },
      {
        title: 'Osmanische Hirsetradition',
        period: 'ca. 1300–1922',
        description:
          'Im Osmanischen Reich spielte Hirse eine wichtige Rolle in der Ernährung der Landbevölkerung Anatoliens. Osmanische Volkszählungen dokumentieren Hirsefelder in fast allen Provinzen des Reiches.',
      },
    ],
    culturalSignificance:
      'Im antiken Griechenland wurde Hirse der Göttin Demeter geweiht, der Schutzherrin der Landwirtschaft. In der römischen Kultur galt Hirsebrei (puls) als Urnahrung der Stadtgründer, und das Wort „milium" lebt im italienischen „miglio" und im deutschen „Hirse" (über mittelhochdeutsch „hirs") fort. In der anatolischen Volkskultur symbolisiert Hirse Bescheidenheit und Ausdauer, und türkische Sprichwörter verwenden Hirsekörner als Metapher für Geduld und Beharrlichkeit.',
    modernStatus:
      'Die Türkei produziert jährlich etwa 250.000 Tonnen Hirse, hauptsächlich in den zentralanatolischen Regionen. In Italien und Spanien ist der Hirseanbau auf kleine Bio-Nischen geschrumpft, erfährt aber durch die glutenfreie Ernährungsbewegung ein wachsendes Interesse. In Griechenland experimentieren Inselbauern mit dem Wiederanbau traditioneller Hirsesorten als Teil der Slow-Food-Bewegung.',
    keyFact:
      'Plinius der Ältere berichtete, dass ein einziges Hirsekorn bis zu 150 neue Samen produzieren kann — ein Produktivitätswunder, das die Römer tief beeindruckte.',
    imageFile: '/images/sections/global-mittelmeerraum.webp',
  },

  // ─── 7. OSTEUROPA ─────────────────────────────────────
  {
    slug: 'osteuropa',
    region: 'Osteuropa',
    continent: 'Europa',
    tagline:
      'Die Kornkammer der Hirseproduktion — von der ukrainischen Steppe bis zur ungarischen Puszta',
    description:
      'Osteuropa ist eine der produktivsten Hirseregionen der Welt und das Zentrum der europäischen Rispenhirse-Produktion. Die Ukraine, Russland, Rumänien und Ungarn profitieren von ausgedehnten Steppenlandschaften mit fruchtbaren Schwarzerdeböden und einem kontinentalen Klima, das ideale Bedingungen für den Hirseanbau bietet. In der ukrainischen und russischen Küche ist Hirsebrei (Proso/Пшено) ein Grundnahrungsmittel, das seit Jahrhunderten die Landbevölkerung ernährt. In Ungarn ist Köles (Hirse) ein traditioneller Bestandteil der Puszta-Küche, und in Rumänien wird Mălai (Hirsebrei) in der moldauischen Landküche bis heute zubereitet. Die osteuropäische Hirsetradition ist geprägt von einfachen, nahrhaften Zubereitungen — Breie, Suppen und Eintöpfe —, die das raue kontinentale Klima widerspiegeln.',
    countries: ['Ukraine', 'Russland', 'Rumänien', 'Ungarn', 'Polen'],
    primaryMillets: [
      'Rispenhirse (Panicum miliaceum)',
      'Kolbenhirse (Setaria italica)',
      'Sorghum (Sorghum bicolor)',
    ],
    iconicFoods: [
      {
        name: 'Pschionnaja Kascha (Пшённая каша)',
        country: 'Russland / Ukraine',
        millet: 'Rispenhirse',
        description:
          'Goldgelber Hirsebrei, der mit Milch oder Wasser gekocht und mit Butter serviert wird. Pschionnaja Kascha ist eines der ältesten und beliebtesten russischen Breie und ein fester Bestandteil der Armeeernährung, Schulspeisung und Krankenhausküche.',
      },
      {
        name: 'Kölesfőzelék',
        country: 'Ungarn',
        millet: 'Rispenhirse (Köles)',
        description:
          'Ein cremiger ungarischer Hirseauflauf mit Sauerrahm und Eiern, der als Beilage zu Gulasch und Paprikasch dient. In der Puszta-Küche ist Köles eine traditionelle Alternative zu Nudeln und Reis.',
      },
      {
        name: 'Kulesh (Кулеш)',
        country: 'Ukraine',
        millet: 'Rispenhirse',
        description:
          'Ein herzhafter ukrainischer Hirseeintopf mit Speck, Zwiebeln und Kartoffeln, der in einem großen Kessel über offenem Feuer gekocht wird. Kulesh war die traditionelle Feldmahlzeit der ukrainischen Kosaken und Bauern.',
      },
      {
        name: 'Mămăligă cu brânză',
        country: 'Rumänien',
        millet: 'Rispenhirse / Mais',
        description:
          'In der moldauischen Region Rumäniens wird Mămăligă traditionell auch aus Hirsemehl zubereitet — ein fester Brei, der mit Schafskäse (Brânză) und Sauerrahm serviert wird.',
      },
    ],
    historicalHighlights: [
      {
        title: 'Skythische Hirsekultur',
        period: 'ca. 800–300 v. Chr.',
        description:
          'Die nomadischen Skythen der eurasischen Steppe bauten Hirse als eines ihrer wenigen Kulturgetreide an. Griechische Historiker wie Herodot berichteten über den Hirseanbau in der pontischen Steppe (heutige Ukraine).',
      },
      {
        title: 'Kiewer Rus und Hirsehandel',
        period: 'ca. 900–1240 n. Chr.',
        description:
          'In der Kiewer Rus war Hirse ein wichtiges Handels- und Steuergetreide. Altrussische Chroniken erwähnen Hirsezehnt als Abgabe an Fürsten und Klöster.',
      },
      {
        title: 'Sowjetische Hirseproduktion',
        period: '1920–1991',
        description:
          'In der Sowjetunion wurde Rispenhirse auf Millionen Hektar in den Steppengebieten angebaut. Pschionnaja Kascha war ein Standardgericht in Schulen, Kantinen und der Roten Armee.',
      },
    ],
    culturalSignificance:
      'In der slawischen Volkskultur ist Hirsebrei ein Symbol für Wohlstand, Familie und Gastfreundschaft. Das russische Sprichwort „Schi da kascha — pischa nascha" (Kohlsuppe und Brei — das ist unsere Nahrung) beschreibt die Grundpfeiler der traditionellen russischen Ernährung. In der ukrainischen Kultur ist Kulesh (Hirseeintopf) ein Symbol für die Kosakentradition und wird bei patriotischen Festen zubereitet. In Ungarn wird Hirse in Volksmärchen als magisches Korn beschrieben, das niemals ausgeht.',
    modernStatus:
      'Die Ukraine und Russland gehören zu den größten Hirseproduzenten und -exporteuren weltweit. Die Ukraine exportiert jährlich etwa 50.000–80.000 Tonnen Hirse, hauptsächlich nach Europa und Asien. In Ungarn und Rumänien wird Hirse zunehmend als Bio-Produkt angebaut und in westeuropäische Märkte exportiert. Der osteuropäische Hirseanbau profitiert von den fruchtbaren Böden und dem Kostenvorteil gegenüber westeuropäischer Produktion.',
    keyFact:
      'Die Ukraine ist einer der weltweit größten Hirseexporteure und deckt einen erheblichen Teil des deutschen und österreichischen Bio-Hirsebedarfs.',
    imageFile: '/images/sections/global-osteuropa.webp',
  },

  // ─── 8. NORDAMERIKA ───────────────────────────────────
  {
    slug: 'nordamerika',
    region: 'Nordamerika',
    continent: 'Nordamerika',
    tagline:
      'Vom Vogelfutter zum Superfood — die überraschende Hirserenaissance in den USA und Kanada',
    description:
      'Nordamerika hat keine eigene historische Hirsetradition — die Hirse kam erst mit europäischen Siedlern im 17. und 18. Jahrhundert auf den Kontinent und wurde zunächst hauptsächlich als Tierfutter und Vogelfutter angebaut. Doch seit den 2010er Jahren erlebt die Hirse in den USA und Kanada eine bemerkenswerte Transformation: Von der Gesundheits- und Wellness-Bewegung getrieben, hat sich Hirse vom vergessenen Futtermittel zum trendigen Superfood entwickelt. Glutenfreie Hirseprodukte, Hirse-Bowls und Hirsemehl-Backmischungen füllen die Regale von Whole Foods, Trader Joe\'s und kanadischen Bio-Läden. Colorado, South Dakota und North Dakota sind die Hauptanbaugebiete der USA, und die kanadischen Prärieprovinzen Saskatchewan und Manitoba produzieren Rispenhirse für den Exportmarkt. Die nordamerikanische Hirsegeschichte ist ein Beispiel dafür, wie ein altes Getreide durch moderne Ernährungstrends eine völlige Neubewertung erfahren kann.',
    countries: ['USA', 'Kanada'],
    primaryMillets: [
      'Rispenhirse (Panicum miliaceum)',
      'Perlhirse (Pennisetum glaucum)',
      'Fingerhirse (Eleusine coracana)',
    ],
    iconicFoods: [
      {
        name: 'Millet Bowl',
        country: 'USA',
        millet: 'verschiedene Hirsearten',
        description:
          'Eine moderne Kreation der amerikanischen „Bowl-Kultur": gekochte Hirse als Basis, belegt mit geröstetem Gemüse, Avocado, Hummus, Tahini-Dressing und Sprossen. Millet Bowls sind ein Standardgericht in Reformhäusern, Juice Bars und veganen Restaurants von Los Angeles bis New York.',
      },
      {
        name: 'Millet Porridge',
        country: 'USA / Kanada',
        millet: 'Rispenhirse',
        description:
          'Ein warmer Frühstücksbrei aus gekochter Hirse mit Ahornsirup, Blaubeeren und Nüssen — die nordamerikanische Antwort auf den europäischen Hirsebrei. Millet Porridge ist in der glutenfreien Community besonders beliebt.',
      },
      {
        name: 'Millet Flour Bread',
        country: 'USA',
        millet: 'Rispenhirse / Kolbenhirse',
        description:
          'Glutenfreies Brot aus Hirsemehl, oft in Kombination mit Sorghummehl und Tapiokastärke gebacken. Hirsebrot ist einer der Wachstumstreiber im glutenfreien Backwarenmarkt Nordamerikas.',
      },
    ],
    historicalHighlights: [
      {
        title: 'Einführung durch europäische Siedler',
        period: '1700er Jahre',
        description:
          'Europäische, insbesondere deutsche und ukrainische Einwanderer brachten Hirsesaatgut nach Nordamerika. Die Rispenhirse wurde zunächst in den Präriestaaten als Vieh- und Vogelfutter angebaut.',
      },
      {
        title: 'Futtermittelära',
        period: '1900–2000',
        description:
          'Im 20. Jahrhundert war Hirse in Nordamerika fast ausschließlich als Vogelfutter und Viehfutter bekannt. Die Anbaufläche blieb gering, und Hirse hatte keinerlei kulinarisches Ansehen.',
      },
      {
        title: 'Glutenfreie Revolution',
        period: '2010–heute',
        description:
          'Die glutenfreie Ernährungsbewegung und das wachsende Interesse an „Ancient Grains" (alten Getreidesorten) haben Hirse in Nordamerika vom Vogelfutter zum Superfood befördert. Der US-Markt für Hirseprodukte wächst jährlich um etwa 5–8 %.',
      },
    ],
    culturalSignificance:
      'In der nordamerikanischen Ernährungskultur repräsentiert Hirse den Trend zu „Ancient Grains" — alten Getreidesorten, die als gesünder und nachhaltiger gelten als moderner Weizen. Die Hirse passt perfekt in die Schnittstelle von glutenfreier Ernährung, pflanzlicher Kost und Nachhaltigkeitsbewusstsein, die den amerikanischen und kanadischen Lebensmittelmarkt prägt. Afrikanische und asiatische Einwanderergemeinschaften in Städten wie New York, Toronto und Los Angeles haben ihre Hirsetraditionen mitgebracht und tragen zur wachsenden Vielfalt von Hirsegerichten in der nordamerikanischen Gastronomie bei.',
    modernStatus:
      'Die USA produzieren jährlich etwa 300.000–500.000 Tonnen Hirse, hauptsächlich in Colorado, South Dakota und Nebraska. Ein Großteil wird nach wie vor als Futtermittel und Vogelfutter verwendet, doch der Lebensmittelanteil wächst stetig. Kanada produziert etwa 100.000 Tonnen in den Prärieprovinzen, mit zunehmender Ausrichtung auf den Bio-Export nach Europa und Asien. Große Lebensmittelkonzerne wie Bob\'s Red Mill und Nature\'s Path bieten inzwischen Hirseprodukte für den Massenmarkt an.',
    keyFact:
      'In den USA wurde Hirse noch in den 1990er Jahren fast ausschließlich als Vogelfutter verkauft — heute füllt sie als glutenfreies Superfood die Regale von Whole Foods und Trader Joe\'s.',
    imageFile: '/images/sections/global-nordamerika.webp',
  },
];

export function getGlobalMilletRegionBySlug(
  slug: string
): GlobalMilletRegion | undefined {
  return globalMilletRegions.find((r) => r.slug === slug);
}
