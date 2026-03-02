import type { FermentedProduct } from '@/lib/types';

export const fermentedProducts: FermentedProduct[] = [
  {
    name: 'Hirsebier',
    region: 'Deutschland, Mitteleuropa (historisch)',
    millets: ['proso-millet'],
    process:
      'Rispenhirse wird eingeweicht, zum Keimen gebracht und anschließend getrocknet (Mälzen). Das Hirsemalz wird mit heißem Wasser aufgegossen (Maischen), die Würze abgeseiht und mit Hefe vergoren. Im Mittelalter wurde häufig ohne Hopfen gebraut, stattdessen kamen Kräutermischungen (Grut) zum Einsatz. Der Alkoholgehalt lag bei 2-4 % Vol. Moderne Craft-Brauereien brauen glutenfreies Hirsebier nach ähnlichem Prinzip, verwenden jedoch kontrollierte Hefen und optimierte Mälzungsverfahren.',
    duration: '7-14 Tage (Mälzen: 3-5 Tage, Gärung: 4-9 Tage)',
    nutritionalBenefit:
      'Durch den Mälzungsprozess werden Phytinsäure und Tannine um 40-60 % reduziert, was die Bioverfügbarkeit von Eisen und Zink erhöht. Die Hefe produziert B-Vitamine (B1, B2, B6, Folsäure). Der Fermentationsprozess erzeugt lebende Milchsäurebakterien und Hefen mit probiotischem Potenzial. Glutenfreies Hirsebier ist eine wichtige Alternative für Zöliakie-Betroffene.',
    culturalContext:
      'Hirsebier war in Mitteleuropa bis zum Spätmittelalter weit verbreitet, bevor Gerstenbier durch das Bayerische Reinheitsgebot (1516) zur Norm wurde. Archäologische Funde an der Heuneburg (Baden-Württemberg) und Hallstatt (Österreich) belegen keltisches Hirsebierbrauen bereits in der Bronzezeit. Der Archäobotaniker Hans-Peter Stika konnte anhand von Malzfunden ein keltisches Hirsebierrezept rekonstruieren. Heute erleben glutenfreie Hirsebiere durch die Craft-Beer-Bewegung eine Renaissance.',
  },
  {
    name: 'Boza (Bosa)',
    region: 'Türkei, Balkan (Bulgarien, Albanien, Rumänien, Nordmazedonien)',
    millets: ['proso-millet', 'pearl-millet'],
    process:
      'Hirsekörner (traditionell Rispenhirse, manchmal mit Weizen oder Mais gemischt) werden eingeweicht, weich gekocht und zu einem Brei püriert. Nach dem Abseihen werden Zucker und ein Starter aus einer vorherigen Charge zugefügt. Es folgt eine Mischfermentation durch Milchsäurebakterien (Lactobacillus, Leuconostoc) und Hefen (Saccharomyces), die ein dickflüssiges, leicht sprudelndes, mild-alkoholisches (typisch unter 1 % Vol.) süß-saures Getränk ergibt.',
    duration: '3-10 Tage',
    nutritionalBenefit:
      'Boza ist reich an den Vitaminen B1, B2 und B6 durch die kombinierte Wirkung von Milchsäurebakterien und Hefen. Die Fermentation baut komplexe Kohlenhydrate in leicht verdauliche Zucker ab und erzeugt Milchsäure, die die Mineralstoffaufnahme verbessert. Das Getränk enthält ca. 1000 KBE/ml lebender Probiotika und liefert nachhaltige Energie aus seiner komplexen Kohlenhydratmatrix.',
    culturalContext:
      'Boza hat eine Geschichte von etwa 9.000 Jahren, die bis nach Mesopotamien zurückreicht, und ist damit eines der ältesten fermentierten Getränke der Welt. Im Osmanischen Reich waren Boza-Verkäufer (Bozaci) ein vertrauter Anblick im Winter. Das berühmte Vefa Bozacısı in Istanbul serviert seit 1876 Boza. In Bulgarien ist Boza weiterhin ein beliebtes Wintergetränk. In Deutschland ist Boza durch die türkische und balkanische Diaspora bekannt und in türkischen Lebensmittelgeschäften erhältlich.',
  },
  {
    name: 'Togwa',
    region: 'Tansania, Ostafrika',
    millets: ['finger-millet', 'sorghum'],
    process:
      'Finger- oder Sorghumhirsemehl wird mit Wasser zu einem dünnen Brei gekocht und auf Körpertemperatur abgekühlt. Gekeimtes Hirsemehl (als natürliche Enzymquelle) wird zugefügt, um die Stärke aufzuspalten. Die Mischung fermentiert spontan bei Raumtemperatur durch natürlich vorhandene Milchsäurebakterien (L. plantarum, L. fermentum) und Hefen. Das Ergebnis ist ein leicht saures, erfrischendes Getränk mit porridgeartiger Konsistenz.',
    duration: '12-24 Stunden',
    nutritionalBenefit:
      'Die Fermentation erhöht die Bioverfügbarkeit von Eisen und Zink aus Fingerhirse durch Abbau der Phytinsäure um 30-50 %. Das Keimen aktiviert Phytasen und steigert den Gehalt an Vitamin C und B-Vitaminen. Togwa enthält lebende Milchsäurebakterien mit probiotischer Wirkung und ist durch den niedrigen pH-Wert (3,5-4,0) auch bei tropischen Temperaturen mikrobiologisch sicher.',
    culturalContext:
      'In Tansania ist Togwa ein traditionelles Erfrischungsgetränk und Energielieferant, das besonders während der Feldarbeit und in der heißen Jahreszeit getrunken wird. Die Weltgesundheitsorganisation (WHO) hat Togwa als sicheres, nährstoffreiches Getränk für die Ernährungssicherung in Subsahara-Afrika anerkannt. In der Forschung dient Togwa als Modell für kostengünstige probiotische Lebensmittel in Entwicklungsländern.',
  },
  {
    name: 'Ogi (Akamu)',
    region: 'Nigeria, Westafrika (Ghana, Benin, Togo)',
    millets: ['sorghum', 'pearl-millet'],
    process:
      'Sorghum- oder Perlhirsekörner werden 1-3 Tage in Wasser eingeweicht, dann nass gemahlen und gesiebt. Das stärkehaltige Filtrat setzt sich ab und fermentiert spontan. Die dominierenden Mikroorganismen sind Lactobacillus plantarum, Corynebacterium und Saccharomyces cerevisiae. Der fermentierte Brei wird vor dem Verzehr zu einem glatten Porridge (Pap) gekocht.',
    duration: '24-72 Stunden',
    nutritionalBenefit:
      'Die Fermentation von Ogi verbessert das Aminosäureprofil deutlich, insbesondere den Lysingehalt, der in Hirsefoods typischerweise limitierend ist. Phytinsäure wird um 50-60 % reduziert, was die Bioverfügbarkeit von Zink und Eisen drastisch erhöht. Die erzeugte Milchsäure senkt den pH auf 3,5-4,0 und schafft ein für Krankheitserreger wie E. coli und Salmonella unwirtliches Milieu.',
    culturalContext:
      'Ogi ist das primäre Beikost-Nahrungsmittel in Westafrika und wird Säuglingen ab dem 4.-6. Lebensmonat eingeführt. Bei den Yoruba heißt es „Ogi" oder als feste Variante „Agidi", bei den Hausa „Kamu". Es ist ein Grundnahrungsmittel für alle Altersgruppen. Die Erforschung der Anreicherung von Ogi mit Sojabohnen ist ein wichtiger Schwerpunkt der westafrikanischen Lebensmittelwissenschaft.',
  },
  {
    name: 'Bushera',
    region: 'Uganda, Ostafrikanische Große Seen',
    millets: ['finger-millet', 'sorghum'],
    process:
      'Finger- oder Sorghumhirsemehl wird mit Wasser zu einem Brei gekocht. Nach dem Abkühlen wird gekeimtes Hirsemehl (als Malz) und optional Honig hinzugefügt. Die Mischung fermentiert bei Raumtemperatur durch Milchsäurebakterien und Hefen. Je nach gewünschter Stärke wird die Fermentation nach 1-5 Tagen gestoppt — kurze Fermentation ergibt ein süßes, probiotisches Getränk, längere Fermentation ein leicht alkoholisches.',
    duration: '1-5 Tage',
    nutritionalBenefit:
      'Bushera ist eine wichtige Quelle von Probiotika, B-Vitaminen und bioverfügbaren Mineralstoffen in ländlichen Regionen Ugandas. Die Keimung erhöht den Vitamin-C-Gehalt um das 3-5-Fache und aktiviert Phytasen, die Phytinsäure abbauen. Bei längerer Fermentation entsteht zusätzlich Ethanol, das die Haltbarkeit verlängert. Bushera ist besonders für schwangere und stillende Frauen als Nahrungsergänzung empfohlen.',
    culturalContext:
      'Bushera ist das traditionelle Getränk der Bakiga und Banyankole in Südwest-Uganda. Es wird bei kulturellen Zeremonien, Hochzeiten und als Geste der Gastfreundschaft gereicht. In den letzten Jahren wurde Bushera von ugandischen Lebensmittelwissenschaftlern als Modell für die Entwicklung lokaler probiotischer Getränke erforscht, die importierte Produkte ersetzen könnten.',
  },
  {
    name: 'Hirse-Sauerteig',
    region: 'Deutschland, Mitteleuropa (modern)',
    millets: ['proso-millet', 'sorghum'],
    process:
      'Hirsemehl (Rispenhirse oder Sorghum) wird mit Wasser im Verhältnis 1:1 gemischt und bei Raumtemperatur (24-28°C) spontan fermentiert. Durch tägliches Füttern (Auffrischen) über 5-7 Tage entwickelt sich ein stabiler Sauerteig mit natürlichen Milchsäurebakterien und Hefen. Der fertige Hirse-Sauerteig wird als Triebmittel und Geschmacksgeber für glutenfreie Brote, Brötchen und Fladen verwendet. Für ein reines Hirsebrot wird oft mit Flohsamenschalen oder Leinsamenmehl als Bindemittel gearbeitet.',
    duration: '5-7 Tage (Ansatz), danach kontinuierliche Pflege',
    nutritionalBenefit:
      'Die Sauerteigfermentation reduziert den Phytinsäuregehalt im Hirsemehl um 60-75 % — deutlich mehr als Einweichen oder Keimen allein. Dadurch verbessert sich die Bioverfügbarkeit von Eisen, Zink und Kalzium erheblich. Die Milchsäurebakterien produzieren B-Vitamine (besonders Folsäure) und erzeugen Exopolysaccharide, die die Textur von glutenfreiem Brot verbessern. Der niedrige pH-Wert (3,8-4,2) verlängert die Haltbarkeit auf natürliche Weise.',
    culturalContext:
      'Hirse-Sauerteig ist ein Produkt der modernen glutenfreien Backbewegung in Deutschland und verbindet traditionelle Sauerteigkultur mit dem wiederentdeckten Getreide. In Bio-Bäckereien und der Craft-Brotszene wird Hirse-Sauerteig als Alternative zu Weizen- und Roggensauerteig zunehmend geschätzt. Die Universität Hohenheim und das Max Rubner-Institut forschen aktiv an optimierten Sauerteigführungen für glutenfreie Hirsebrote.',
  },
  {
    name: 'Braga',
    region: 'Rumänien, Moldawien, Osteuropa',
    millets: ['proso-millet'],
    process:
      'Rispenhirse wird geröstet, grob gemahlen und mit kochendem Wasser übergossen. Nach dem Abkühlen auf ca. 35°C wird Zucker und manchmal ein Hefestarter zugefügt. Die Mischung fermentiert 2-5 Tage bei Raumtemperatur durch eine Kombination von Milchsäurebakterien und Hefen. Das Ergebnis ist ein leicht trübes, süß-saures, schwach alkoholisches Getränk (1-2 % Vol.) mit malzigem Grundton.',
    duration: '2-5 Tage',
    nutritionalBenefit:
      'Braga enthält durch die Fermentation erhöhte Gehalte an B-Vitaminen (B1, B2, Niacin) und lebende Milchsäurebakterien. Die Röstung vor der Fermentation erzeugt Maillard-Reaktionsprodukte mit antioxidativer Wirkung. Der Abbau von Phytinsäure durch mikrobielle Phytasen verbessert die Mineralstoffaufnahme. Als leicht alkoholisches Getränk liefert Braga zudem schnell verfügbare Energie aus fermentierten Zuckern.',
    culturalContext:
      'Braga ist ein traditionelles rumänisches und moldauisches Volksgetränk, das besonders im ländlichen Raum verbreitet ist. Es wird als erfrischendes Sommergetränk und bei dörflichen Festen gereicht. In Rumänien hat Braga eine jahrhundertealte Tradition, die auf die osmanische Einflussperiode zurückgeht — das Wort „Braga" ist mit dem türkischen „Boza" verwandt. Heute wird Braga vereinzelt von rumänischen Handwerksbrauern als Spezialität wiederbelebt.',
  },
  {
    name: 'Hirse-Kwas',
    region: 'Russland, Ukraine, Osteuropa',
    millets: ['proso-millet'],
    process:
      'Rispenhirsemehl oder -grütze wird mit Wasser zu einem Brei gekocht und auf Raumtemperatur abgekühlt. Zucker oder Honig und Trockenhefe werden zugefügt, alternativ dient altbackenes Brot als natürlicher Fermentationsstarter. Die Mischung fermentiert 1-3 Tage bei Raumtemperatur. Die Kombination aus Milchsäuregärung und alkoholischer Gärung erzeugt ein sprudelndes, leicht saures, erfrischendes Getränk mit sehr niedrigem Alkoholgehalt (0,5-1,5 % Vol.).',
    duration: '1-3 Tage',
    nutritionalBenefit:
      'Hirse-Kwas liefert lebende Milchsäurebakterien und Hefen mit probiotischem Potenzial. Die Fermentation produziert organische Säuren (Milchsäure, Essigsäure), die die Darmgesundheit unterstützen, sowie B-Vitamine durch Hefestoffwechsel. Im Vergleich zu klassischem Brot-Kwas ist Hirse-Kwas glutenfrei und daher für Zöliakie-Betroffene geeignet.',
    culturalContext:
      'Kwas (Квас) ist eines der ältesten und beliebtesten Getränke der osteuropäischen Küche, traditionell auf Roggenbrotbasis hergestellt. Die Variante aus Hirse war historisch in Regionen verbreitet, in denen Roggen weniger verfügbar war. In der modernen glutenfreien Szene Deutschlands und Osteuropas erlebt Hirse-Kwas ein Comeback als fermentiertetes, probiotisches Erfrischungsgetränk. Besonders in russischen und ukrainischen Communitys in Deutschland wird das Rezept von Generation zu Generation weitergegeben.',
  },
];
