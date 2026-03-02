import type { FAQItem } from '@/lib/types';

export const faqItems: FAQItem[] = [
  // =====================
  // ALLGEMEIN (5)
  // =====================
  {
    id: 'was-ist-hirse',
    question: 'Was ist Hirse und welche Sorten gibt es?',
    answer:
      'Hirse ist der Sammelbegriff für eine Gruppe kleinkörniger Getreidearten aus der Familie der Süßgräser (Poaceae). Zu den bekanntesten Sorten gehören Rispenhirse (Panicum miliaceum), Perlhirse (Pennisetum glaucum), Fingerhirse (Eleusine coracana), Kolbenhirse (Setaria italica) und Sorghum (Sorghum bicolor). Hirse zählt zu den ältesten Kulturpflanzen der Menschheit — archäologische Funde belegen den Anbau bereits um 8700 v. Chr. in China. In Mitteleuropa war Hirse bis zum 18. Jahrhundert ein weit verbreitetes Grundnahrungsmittel, bevor sie durch Kartoffel und Weizen verdrängt wurde.',
    category: 'Allgemein',
    relatedMillets: [],
  },
  {
    id: 'hirse-glutenfrei',
    question: 'Ist Hirse glutenfrei?',
    answer:
      'Ja, alle echten Hirsearten sind von Natur aus glutenfrei. Dies bestätigt auch die Deutsche Zöliakie-Gesellschaft (DZG). Rispenhirse, Perlhirse, Fingerhirse, Kolbenhirse, Teff und Sorghum enthalten kein Gluten und sind daher für Menschen mit Zöliakie oder Glutensensitivität geeignet. Wichtig: Beim Kauf sollte man auf das Glutenfrei-Symbol (durchgestrichene Ähre) achten, da in Produktionsanlagen Kreuzkontaminationen mit Weizen oder Dinkel möglich sind. Bio-Märkte und spezialisierte Online-Shops bieten häufig zertifiziert glutenfreie Hirseprodukte an.',
    category: 'Allgemein',
    relatedMillets: [
      'pearl-millet',
      'finger-millet',
      'foxtail-millet',
      'proso-millet',
      'sorghum',
    ],
  },
  {
    id: 'hirse-kaufen-deutschland',
    question: 'Wo kann man Hirse in Deutschland kaufen?',
    answer:
      'Hirse ist in Deutschland mittlerweile gut verfügbar. Geschälte Rispenhirse (Goldhirse) findet man in fast jedem Supermarkt (REWE, Edeka, Kaufland) in der Getreideabteilung. Bio-Qualität gibt es bei Alnatura, Denn\'s Biomarkt, Bio Company und in Reformhäusern. DM und Rossmann führen Hirseprodukte unter ihren Bio-Eigenmarken. Für speziellere Sorten wie Perlhirse, Fingerhirse oder Teff empfehlen sich asiatische und afrikanische Lebensmittelgeschäfte, Online-Shops (z. B. KoRo, Kamelur, Amazon) oder der Großhandel. Auf Wochenmärkten bieten regionale Erzeuger gelegentlich auch deutsche Hirse an.',
    category: 'Allgemein',
  },
  {
    id: 'unterschied-hirsearten',
    question: 'Was ist der Unterschied zwischen Rispenhirse, Perlhirse und Fingerhirse?',
    answer:
      'Rispenhirse (Goldhirse, Panicum miliaceum) ist die in Deutschland bekannteste Sorte — klein, goldgelb, mild-nussig im Geschmack und vielseitig einsetzbar für Brei, Aufläufe und Beilagen. Perlhirse (Pennisetum glaucum) ist die weltweit am meisten angebaute Hirseart, hat größere Körner und einen kräftigeren Geschmack; sie wird vor allem in Afrika und Indien als Grundnahrungsmittel verwendet. Fingerhirse (Ragi, Eleusine coracana) hat einen besonders hohen Kalziumgehalt (344 mg/100 g) und wird meist als Mehl verarbeitet — ideal für Brei, Fladenbrot und glutenfreies Backen. Sorghum (Sorghumhirse) ist die größte Hirseart und wird zunehmend auch in Europa angebaut.',
    category: 'Allgemein',
    relatedMillets: ['proso-millet', 'pearl-millet', 'finger-millet', 'sorghum'],
  },
  {
    id: 'internationales-jahr-hirse',
    question: 'Was war das Internationale Jahr der Hirse 2023?',
    answer:
      'Die Vereinten Nationen erklärten 2023 auf Initiative Indiens zum Internationalen Jahr der Hirse (International Year of Millets). Die Resolution A/RES/75/263 wurde von 72 Ländern unterstützt. Ziel war es, das Bewusstsein für den Nährwert, die Klimaresilienz und das wirtschaftliche Potenzial von Hirse weltweit zu stärken. In Deutschland wurde das Jahr von der DGE, dem BMEL und verschiedenen Forschungseinrichtungen begleitet, die auf die Bedeutung von Hirse für eine nachhaltige Ernährung hinwiesen.',
    category: 'Allgemein',
  },

  // =====================
  // ERNÄHRUNG (5)
  // =====================
  {
    id: 'hirse-naehrwerte',
    question: 'Welche Nährwerte hat Hirse?',
    answer:
      'Hirse ist ein nährstoffdichtes Getreide. Pro 100 g enthält geschälte Rispenhirse durchschnittlich: 378 kcal, 11 g Eiweiß, 4,2 g Fett, 73 g Kohlenhydrate und 3,5 g Ballaststoffe. Besonders hervorzuheben sind die Mineralstoffgehalte: Eisen (6,9 mg), Magnesium (114 mg), Phosphor (285 mg), Zink (1,7 mg) und Kalium (195 mg). Fingerhirse sticht mit 344 mg Kalzium pro 100 g hervor — das ist mehr als in Milch. Die Deutsche Gesellschaft für Ernährung (DGE) empfiehlt, Vollkorngetreide regelmäßig in den Speiseplan einzubauen, wozu Hirse hervorragend beiträgt.',
    category: 'Ernährung',
    relatedMillets: ['proso-millet', 'finger-millet'],
  },
  {
    id: 'dge-empfehlung-hirse',
    question: 'Was sagt die DGE über Hirse?',
    answer:
      'Die Deutsche Gesellschaft für Ernährung (DGE) stuft Hirse als vollwertiges Getreide ein und empfiehlt es im Rahmen einer ausgewogenen, pflanzenbetonten Ernährung. In den DGE-Ernährungsregeln wird der tägliche Verzehr von Getreideprodukten empfohlen, wobei Vollkornvarianten bevorzugt werden sollten. Hirse erfüllt diese Anforderung als Vollkorngetreide und liefert wichtige Mikronährstoffe. Die DGE betont auch die Vorteile einer abwechslungsreichen Getreideauswahl, zu der Hirse als glutenfreie Alternative beiträgt.',
    category: 'Ernährung',
  },
  {
    id: 'hirse-diabetiker',
    question: 'Ist Hirse für Diabetiker geeignet?',
    answer:
      'Hirse kann für Menschen mit Diabetes Typ 2 eine gute Wahl sein. Viele Hirsearten haben einen niedrigen bis mittleren glykämischen Index (GI): Fingerhirse liegt bei etwa GI 54, Kolbenhirse bei GI 50-55, und Perlhirse bei GI 54-68 je nach Zubereitung. Der hohe Ballaststoffgehalt verlangsamt die Glukoseaufnahme. Eine systematische Meta-Analyse (2021) zeigte, dass der regelmäßige Verzehr von Hirse den Nüchternblutzucker um durchschnittlich 12 % und den HbA1c-Wert um 0,5 % senken kann. Die DGE empfiehlt ballaststoffreiche Vollkorngetreide als Teil der Diabetesernährung.',
    category: 'Ernährung',
    relatedMillets: ['finger-millet', 'foxtail-millet', 'pearl-millet'],
  },
  {
    id: 'bio-siegel-hirse',
    question: 'Welche Bio-Siegel sollte man bei Hirse beachten?',
    answer:
      'In Deutschland gibt es mehrere relevante Bio-Siegel für Hirseprodukte: Das EU-Bio-Logo (grünes Blatt) garantiert die Einhaltung der EU-Öko-Verordnung. Das deutsche Bio-Siegel (sechseckig, grün-schwarz-weiß) basiert auf denselben Kriterien. Strengere Standards bieten die Verbands-Siegel von Demeter (biodynamisch), Bioland, Naturland und Biokreis. Für importierte Hirse (z. B. Fingerhirse aus Indien, Teff aus Äthiopien) empfiehlt sich zusätzlich auf Fairtrade-Zertifizierung zu achten. Hirse aus deutschem Bio-Anbau ist noch selten, aber wachsend — Betriebe in Brandenburg, Sachsen und Bayern bauen zunehmend Rispenhirse an.',
    category: 'Ernährung',
  },
  {
    id: 'hirse-babys-kinder',
    question: 'Ist Hirse für Babys und Kleinkinder geeignet?',
    answer:
      'Ja, Hirse ist ein hervorragendes Getreide für die Beikosteinführung und Kleinkindernährung. Die glutenfreie Eigenschaft macht sie ideal für den Beginn der Beikost ab dem 5.-7. Monat (gemäß den Empfehlungen der Deutschen Gesellschaft für Kinder- und Jugendmedizin, DGKJ). Hirsebrei lässt sich leicht pürieren und ist gut verträglich. Besonders Fingerhirse ist wegen ihres hohen Kalzium- und Eisengehalts wertvoll für das kindliche Wachstum. Hirseflocken (z. B. von Holle, Alnatura, DM Bio) sind als Babybrei-Basis weit verbreitet. Wichtig: Hirse immer gut kochen, da rohe Hirse schwer verdaulich ist.',
    category: 'Ernährung',
    relatedMillets: ['proso-millet', 'finger-millet'],
  },

  // =====================
  // KOCHEN (4)
  // =====================
  {
    id: 'hirse-kochen-grundrezept',
    question: 'Wie kocht man Hirse richtig?',
    answer:
      'Grundrezept für Rispenhirse (Goldhirse): 1. 200 g Hirse unter fließendem Wasser gründlich waschen, bis das Wasser klar ist (entfernt Bitterstoffe). 2. In einem Topf 200 g Hirse mit 400 ml Wasser und einer Prise Salz aufkochen (Verhältnis 1:2). 3. Hitze auf niedrigste Stufe reduzieren, Deckel auflegen und 15-20 Minuten quellen lassen. 4. Herd ausschalten und 5 Minuten nachquellen lassen. 5. Mit einer Gabel auflockern. Für cremigeren Brei: Verhältnis 1:3 verwenden. Tipp: Hirse vorher ohne Fett in der Pfanne kurz anrösten verstärkt den nussigen Geschmack.',
    category: 'Kochen',
    relatedMillets: ['proso-millet'],
  },
  {
    id: 'hirse-aufbewahren',
    question: 'Wie lagert man Hirse richtig?',
    answer:
      'Trockene, ungeöffnete Hirse hält sich in der Originalverpackung an einem kühlen, dunklen Ort 12-18 Monate. Nach dem Öffnen sollte man die Hirse in ein luftdichtes Glas- oder Keramikgefäß umfüllen und innerhalb von 3-6 Monaten verbrauchen. Der leicht erhöhte Fettgehalt (ca. 4 %) kann bei falscher Lagerung ranzig werden — daher vor Licht und Wärme schützen. Hirsemehl ist empfindlicher und sollte im Kühlschrank oder Gefrierfach gelagert und innerhalb von 2-3 Monaten verbraucht werden. Gekochte Hirse hält sich im Kühlschrank 3-4 Tage in einem geschlossenen Behälter.',
    category: 'Kochen',
  },
  {
    id: 'hirse-rezeptideen-deutschland',
    question: 'Welche Gerichte kann man mit Hirse zubereiten?',
    answer:
      'Hirse ist in der Küche vielseitig einsetzbar: Frühstück — Hirsebrei mit Obst, Nüssen und Honig (wie Porridge). Beilage — Als lockere Beilage zu Gemüse, Pilzen oder Fleisch (ähnlich wie Reis oder Couscous). Auflauf — Hirseauflauf mit Gemüse und Käse überbacken. Bratlinge — Hirsebratlinge mit Kräutern als vegetarische Frikadellen. Salat — Kalter Hirsesalat mit Tomaten, Gurke und Feta. Suppe — Hirsesuppe (traditionelles deutsches Gericht). Süßspeise — Hirsepudding oder Hirsegratin mit Äpfeln. Backen — Hirsemehl für glutenfreies Brot, Pfannkuchen und Waffeln. Babybrei — Hirseflocken als Beikostbasis.',
    category: 'Kochen',
  },
  {
    id: 'hirse-ersatz-fuer-reis',
    question: 'Kann man Hirse als Reisersatz verwenden?',
    answer:
      'Ja, Hirse eignet sich hervorragend als Reisersatz und bietet dabei deutlich mehr Nährstoffe. Im Vergleich zu poliertem weißem Reis enthält Rispenhirse dreimal so viel Eisen, fünfmal so viel Magnesium und deutlich mehr Ballaststoffe. Die Zubereitung ist nahezu identisch: Wasser im Verhältnis 1:2 aufkochen, Hitze reduzieren, 15-20 Minuten garen. Für eine reisähnliche, lockere Konsistenz die Hirse vorher kurz anrösten. Hirse passt zu Currys, Eintöpfen, als Füllung für Paprika oder Auberginen und als Basis für Bowls. Auch im Risotto-Stil („Hirsotto") lässt sich Hirse wunderbar verwenden.',
    category: 'Kochen',
    relatedMillets: ['proso-millet'],
  },

  // =====================
  // GESUNDHEIT (3)
  // =====================
  {
    id: 'hirse-schilddruese',
    question: 'Beeinflusst Hirse die Schilddrüse?',
    answer:
      'Einige Hirsearten, insbesondere Perlhirse, enthalten C-Glycosylflavone, die im Labor die Schilddrüsenperoxidase (TPO) hemmen können. Eine umfassende systematische Übersichtsarbeit (2024, Critical Reviews in Food Science and Nutrition) kam jedoch zu dem Schluss, dass die Evidenz für eine Schilddrüsenschädigung beim Menschen bei normaler, abwechslungsreicher Ernährung „nicht überzeugend genug" ist. Die goitrogene Wirkung wurde hauptsächlich in Tierversuchen beobachtet, bei denen Hirse das einzige Nahrungsmittel war. Kochen und Verarbeiten reduzieren den Flavonoidgehalt erheblich, und eine ausreichende Jodzufuhr gleicht mögliche Anti-Schilddrüsen-Effekte vollständig aus. Menschen mit bestehender Schilddrüsenerkrankung sollten Hirse in Maßen genießen und ihren Arzt konsultieren.',
    category: 'Gesundheit',
    relatedMillets: ['pearl-millet'],
  },
  {
    id: 'hirse-eisenmangel',
    question: 'Hilft Hirse bei Eisenmangel?',
    answer:
      'Hirse ist eine gute pflanzliche Eisenquelle. Rispenhirse enthält etwa 6,9 mg Eisen pro 100 g, Perlhirse 8,0 mg und Fingerhirse 3,9 mg — zum Vergleich: polierter Reis enthält nur 0,8 mg. Um die Eisenaufnahme aus Hirse zu verbessern, sollte man sie mit Vitamin-C-reichen Lebensmitteln kombinieren (z. B. Paprika, Zitronensaft, Brokkoli). Fermentation und Einweichen reduzieren den Phytinsäuregehalt und verbessern die Bioverfügbarkeit. Das Bundesinstitut für Risikobewertung (BfR) empfiehlt eine abwechslungsreiche Ernährung zur Eisenversorgung, wobei Hirse als Vollkorngetreide gut beitragen kann.',
    category: 'Gesundheit',
    relatedMillets: ['proso-millet', 'pearl-millet', 'finger-millet'],
  },
  {
    id: 'hirse-antinaehrstoffe',
    question: 'Enthält Hirse Antinährstoffe?',
    answer:
      'Wie alle Vollkorngetreide enthält Hirse natürliche Antinährstoffe — vor allem Phytinsäure, Tannine und in geringem Maße Oxalate. Diese Stoffe können die Aufnahme von Mineralstoffen wie Eisen, Zink und Kalzium verringern. Die gute Nachricht: Durch einfache Küchenmethoden lassen sich Antinährstoffe deutlich reduzieren. Einweichen (6-12 Stunden) reduziert Phytinsäure um 20-30 %. Keimen (24-48 Stunden) reduziert sie um 40-60 %. Fermentation (wie bei Sauerteig) reduziert sie um 50-70 %. Kochen eliminiert Tannine weitgehend. Die DGE betont, dass die gesundheitlichen Vorteile von Vollkorngetreide die Nachteile durch Antinährstoffe bei weitem überwiegen.',
    category: 'Gesundheit',
  },

  // =====================
  // GESCHICHTE (1)
  // =====================
  {
    id: 'hirse-geschichte-deutschland',
    question: 'Welche Rolle spielte Hirse in der deutschen Geschichte?',
    answer:
      'Hirse hat eine jahrtausendealte Geschichte in Mitteleuropa. Archäologische Funde belegen Hirseanbau in der Bronzezeit (ab ca. 2500 v. Chr.) an Fundorten wie Hallstatt und der Heuneburg. Bei Kelten und Germanen war Hirsebrei ein Grundnahrungsmittel. Im Mittelalter war Hirsebrei („Hirsmus") eines der verbreitetsten Gerichte der einfachen Bevölkerung — Klöster führten Hirse in ihren Speiseplänen. Der Spruch „Hirsebrei und Hafergrütz, das isst der deutsche Bauersmütz" zeigt die Bedeutung. Ab dem 18. Jahrhundert wurde Hirse durch die Kartoffel (eingeführt unter Friedrich dem Großen in Preußen) und billigeren Weizen verdrängt. Heute erlebt Hirse in Deutschland eine Renaissance als nachhaltiges Superfood.',
    category: 'Geschichte',
  },

  // =====================
  // NACHHALTIGKEIT (2)
  // =====================
  {
    id: 'hirse-nachhaltigkeit',
    question: 'Warum gilt Hirse als nachhaltig?',
    answer:
      'Hirse ist eines der nachhaltigsten Getreide der Welt und erfüllt viele Kriterien der DGE-Empfehlungen für eine pflanzenbasierte, umweltfreundliche Ernährung. Wasserverbrauch: Hirse benötigt nur 300-500 mm Niederschlag pro Saison — ein Drittel des Wasserbedarfs von Reis. CO₂-Fußabdruck: Hirse hat einen deutlich geringeren ökologischen Fußabdruck als Weizen oder Mais, da sie weniger Dünger und keine Bewässerung braucht. Klimaresilienz: Hirse gedeiht bei Temperaturen bis 40°C und auf armen Böden — ideal für den Klimawandel. Biodiversität: Der Anbau verschiedener Hirsearten fördert die Agrobiodiversität. Kurze Wachstumsperiode: 60-90 Tage bis zur Ernte ermöglichen Zweitfruchtanbau.',
    category: 'Nachhaltigkeit',
  },
  {
    id: 'hirse-anbau-deutschland',
    question: 'Wird Hirse auch in Deutschland angebaut?',
    answer:
      'Ja, der Hirseanbau in Deutschland nimmt zu, wenn auch von einem niedrigen Niveau. Rispenhirse (Panicum miliaceum) und zunehmend auch Sorghum werden in wärmeren Regionen angebaut — vor allem in Brandenburg, Sachsen, Bayern, Baden-Württemberg und Rheinland-Pfalz. Die Anbaufläche für Sorghum stieg von unter 1.000 Hektar (2015) auf über 5.000 Hektar (2023) laut Destatis. Die Universität Hohenheim und die Bayerische Landesanstalt für Landwirtschaft forschen aktiv an Sorten, die für das mitteleuropäische Klima optimiert sind. Der Klimawandel mit heißeren, trockeneren Sommern macht Hirse für deutsche Landwirte zunehmend interessant.',
    category: 'Nachhaltigkeit',
  },
];
