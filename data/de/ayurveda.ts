import type { AyurvedaPageData } from '@/lib/types';

export const ayurvedaPageData: AyurvedaPageData = {
  generalClassification:
    'Hirse (Millets) bilden eine Gruppe uralter Getreidearten aus der Familie der Suessgräser (Poaceae), die sich durch ihr herausragendes Nährstoffprofil und ihre agronomische Anpassungsfähigkeit auszeichnen. Aus ernährungswissenschaftlicher Sicht weisen diese Körner mehrere bedeutende Eigenschaften auf, die durch die Deutsche Gesellschaft für Ernährung (DGE), das Bundesinstitut für Risikobewertung (BfR), die Europäische Behörde für Lebensmittelsicherheit (EFSA) und das USDA FoodData Central dokumentiert sind. Erstens sind Hirsearten von Natur aus glutenfrei, was sie zu einer sicheren Alternative für Menschen mit Zöliakie oder Glutenunverträglichkeit macht. Zweitens übertrifft ihr Ballaststoffgehalt — zwischen 8 und 12,5 g pro 100 g je nach Sorte — bei Weitem den von weissem Reis (0,4 g) und konkurriert mit dem von Vollkornweizen. Drittens ist ihr Mineralstoffreichtum bemerkenswert: Perlhirse liefert bis zu 242 mg Magnesium pro 100 g, Fingerhirse (Ragi) enthält 344 mg Calcium, und Sorghum bietet 4,4 mg Eisen. Viertens weisen die meisten Hirsearten einen niedrigen bis mittleren glykämischen Index (zwischen 54 und 68) auf, was zu einer gleichmässigen Glucosefreisetzung im Blut beiträgt — ganz im Sinne der WHO-Empfehlungen zur Prävention von Typ-2-Diabetes. Schliesslich ergänzt ihr Aminosäureprofil, insbesondere der Gehalt an Methionin und Cystein, in vorteilhafter Weise das Profil von Hülsenfrüchten. Diese durch zahlreiche Studien in Fachzeitschriften mit Peer-Review validierten Nährstoffeigenschaften machen Hirse zu einem wertvollen Verbündeten für die Herzgesundheit, das Gewichtsmanagement und die Blutzuckerregulierung.',

  doshaGuide: [
    {
      dosha: 'Herzgesundheit',
      recommended: ['pearl-millet', 'finger-millet'],
      moderate: ['sorghum', 'little-millet'],
      avoid: [],
      description:
        'Die Herz-Kreislauf-Gesundheit stellt in Deutschland eine zentrale Herausforderung der öffentlichen Gesundheit dar: Herz-Kreislauf-Erkrankungen sind laut Robert Koch-Institut die häufigste Todesursache. Hirse bietet wissenschaftlich dokumentierte Nährstoffvorteile für den Schutz von Herz und Gefässen. Perlhirse (Pennisetum glaucum) zeichnet sich durch ihren aussergewöhnlich hohen Magnesiumgehalt aus (242 mg/100 g laut USDA FoodData Central) — ein essentieller Mineralstoff für die Regulierung des Herzrhythmus und die Entspannung der Gefässwände. Metaanalysen im Journal of the American Heart Association haben gezeigt, dass eine ausreichende Magnesiumzufuhr das Schlaganfallrisiko um 12 % senkt. Fingerhirse (Eleusine coracana) liefert 344 mg Calcium pro 100 g — mehr als Milch — und trägt damit zur Blutdruckregulierung bei. Die in beiden Hirsearten enthaltenen löslichen Ballaststoffe fördern die Senkung des LDL-Cholesterins, indem sie dessen Rückresorption im Darm verringern — ein Mechanismus, der von der EFSA bestätigt wurde. Das reichlich vorhandene Kalium in der Perlhirse (390 mg/100 g) trägt ebenfalls zur Aufrechterhaltung eines normalen Blutdrucks bei. Die DGE empfiehlt, Vollkorngetreide in die tägliche Ernährung zu integrieren, und Hirse bietet hier eine hervorragende, glutenfreie Alternative. Für optimale Wirkung wird empfohlen, diese Hirsearten als ganzes Korn zu verzehren und damit teilweise raffiniertes Getreide zu ersetzen — idealerweise zwei- bis dreimal pro Woche.',
    },
    {
      dosha: 'Blutzucker-Management',
      recommended: [
        'finger-millet',
        'little-millet',
        'barnyard-millet',
        'kodo-millet',
      ],
      moderate: ['sorghum', 'proso-millet'],
      avoid: [],
      description:
        'Die Blutzuckerregulierung und die Prävention von Typ-2-Diabetes stellen eine wachsende Herausforderung für die öffentliche Gesundheit dar. Die WHO schätzt, dass weltweit 422 Millionen Menschen mit Diabetes leben, und laut der Deutschen Diabetes Gesellschaft (DDG) sind in Deutschland etwa 8,5 Millionen Menschen betroffen. Mehrere Hirsesorten weisen einen niedrigen bis mittleren glykämischen Index (GI) auf, der durch Studien im British Journal of Nutrition und in Diabetes Care belegt ist. Fingerhirse (Ragi) besitzt einen GI von etwa 54, dank ihres Reichtums an Ballaststoffen (11,5 g/100 g) und Polyphenolen, die die intestinale Glucoseaufnahme verlangsamen. Kleine Hirse (Panicum sumatrense, GI ~56) und Japanische Hirse (Echinochloa esculenta, GI ~55) zeichnen sich durch eine langsame Kohlenhydratfreisetzung aus, die den postprandialen Blutzuckerspitzenwert abmildert. Kodohirse (Paspalum scrobiculatum) enthält phenolische Verbindungen und Ballaststoffe, die die Insulinsensitivität verbessern. Randomisierte klinische Studien haben gezeigt, dass ein regelmässiger Ersatz von weissem Reis durch diese Hirsearten zu einer signifikanten Reduktion des HbA1c-Wertes um 0,3 bis 0,5 Prozentpunkte über drei Monate führt. Die DGE empfiehlt eine Erhöhung des Vollkorngetreideverzehrs, und diese Hirsearten mit niedrigem GI passen hervorragend in diese Empfehlung.',
    },
    {
      dosha: 'Gewichtsmanagement',
      recommended: [
        'foxtail-millet',
        'kodo-millet',
        'proso-millet',
        'fonio',
      ],
      moderate: ['barnyard-millet', 'little-millet'],
      avoid: ['pearl-millet'],
      description:
        'Das Gewichtsmanagement und die Stoffwechseloptimierung sind zentrale Anliegen in modernen Gesellschaften. Laut der Nationalen Verzehrsstudie des BfR ist mehr als die Hälfte der Erwachsenen in Deutschland übergewichtig, und die Ernährung stellt den wirksamsten Hebel zur Umkehrung dieses Trends dar. Bestimmte Hirsesorten eignen sich aufgrund ihrer geringen Kaloriendichte in Kombination mit einem hohen Ballaststoffgehalt besonders gut für Strategien zur Gewichtskontrolle. Kolbenhirse (Setaria italica) liefert nur 351 kcal pro 100 g bei gleichzeitig 8 g Ballaststoffen, was ein langanhaltendes Sättigungsgefühl fördert und die Gesamtkalorienaufnahme reduziert. Kodohirse (Paspalum scrobiculatum) zeichnet sich durch ihren Reichtum an unlöslichen Ballaststoffen (9 g/100 g) aus, die den Darmtransit beschleunigen und die Fettaufnahme begrenzen. Rispenhirse (Panicum miliaceum) und Fonio (Digitaria exilis) ergänzen diese Auswahl dank ihres moderaten Energieprofils und ihrer Fähigkeit, den Blutzucker stabil zu halten — wodurch Heisshungerattacken durch Insulinspitzen vermieden werden. Studien im European Journal of Clinical Nutrition haben gezeigt, dass die regelmässige Integration dieser Hirsearten in die Ernährung als Ersatz für raffinierte Stärkeprodukte zu einer Reduktion des Body-Mass-Index und einer Verbesserung des Blutfettprofils beiträgt. Die DGE-Empfehlung, mindestens 30 g Ballaststoffe pro Tag zu konsumieren, lässt sich mit Hirsearten besonders gut umsetzen.',
    },
  ],

  seasonalGuide: [
    {
      season: 'Frühling',
      months: 'März - Mai',
      recommended: ['foxtail-millet', 'kodo-millet', 'little-millet'],
      reasoning:
        'Im Frühling erwacht der Körper aus der winterlichen Phase, die oft von reichhaltigerer Ernährung und reduzierter körperlicher Aktivität geprägt war. Dies ist die ideale Zeit, den Speiseplan zu erleichtern und die natürlichen Ausscheidungsfunktionen des Körpers zu unterstützen. Kolbenhirse, Kodohirse und Kleine Hirse sind die am besten geeigneten Sorten für diese Jahreszeit — dank ihrer geringen Kalorienzahl und ihres hohen Gehalts an unlöslichen Ballaststoffen, die den Darmtransit anregen. Diese Hirsearten fördern die Ausscheidung von Stoffwechselrückständen und unterstützen die Leber in ihrer Entgiftungsfunktion. Ihr Reichtum an Antioxidantien — insbesondere Polyphenole und Flavonoide — trägt zum Zellschutz nach den Wintermonaten bei. Bevorzugen Sie leichte Zubereitungen: lauwarme Hirsesalate mit saisonalem Frühlingsgemüse, Tabbouleh oder dünne Pfannkuchen mit minimalem Fettgehalt. In Bayern und Schwaben beginnt traditionell mit dem Frühling die Zeit leichter Breispeisen aus Hirse.',
    },
    {
      season: 'Sommer',
      months: 'Juni - August',
      recommended: ['finger-millet', 'little-millet', 'barnyard-millet'],
      reasoning:
        'Während der sommerlichen Hitze steigt der Flüssigkeitsbedarf und die Verdauung kann sich verlangsamen. Fingerhirse (Ragi) eignet sich dank ihres Calciumreichtums (344 mg/100 g) besonders gut für diese Jahreszeit — ein Mineralstoff, dessen Verluste durch Schwitzen zunehmen. Kleine Hirse und Japanische Hirse sind leicht und gut verdaulich, sodass sie den Organismus bei heissem Wetter nicht belasten. Diese Sorten können als kalte Breie, erfrischende fermentierte Getränke oder Sommersalate mit Gurke, Minze und Zitrone zubereitet werden. Fingerhirse eignet sich auch hervorragend für nahrhafte Smoothies und Müsli-Mischungen. Der Kaliumgehalt dieser Hirsearten hilft, die durch Schwitzen verlorenen Elektrolyte auszugleichen, während ihr niedriger glykämischer Index über die heissen Tage hinweg eine stabile Energieversorgung gewährleistet. In der österreichischen und Schweizer Tradition werden im Sommer gerne leichte Hirseaufläufe und Hirsemüsli serviert.',
    },
    {
      season: 'Herbst',
      months: 'September - November',
      recommended: ['sorghum', 'foxtail-millet', 'proso-millet'],
      reasoning:
        'Der Herbst markiert den Übergang zu kühleren Temperaturen und kürzeren Tagen. Es ist die Erntezeit, ideal für den Genuss wohltuender und nahrhafter Getreidearten. Sorghum bietet mit 329 kcal pro 100 g und einem bemerkenswerten Eisengehalt (4,4 mg/100 g) die nötige Energie für die sinkenden Temperaturen und unterstützt gleichzeitig das Immunsystem durch seine Polyphenole. Kolbenhirse und Rispenhirse bieten ein ausgewogenes Verhältnis von Leichtigkeit und Nährwert — ideal, um den Körper auf den Winter vorzubereiten, ohne ihn zu überlasten. Bereiten Sie diese Hirsearten in warmen Gerichten zu: cremige Risottos, dickflüssige Suppen mit Herbstgemüse (Kürbis, Pastinake, Karotten) oder als Beilage zu Schmorgerichten. Die Zugabe von Gewürzen wie Kurkuma, Ingwer und Zimt verstärkt die entzündungshemmenden Eigenschaften dieser Getreidearten. Die Rispenhirse — in Österreich und Bayern als „Brein" bekannt — hat in dieser Region eine besonders lange Herbst- und Wintertradition.',
    },
    {
      season: 'Winter',
      months: 'Dezember - Februar',
      recommended: ['pearl-millet', 'sorghum', 'finger-millet'],
      reasoning:
        'Der Winter erfordert eine energiereichere Ernährung, um die Körpertemperatur aufrechtzuerhalten und das Immunsystem zu stärken. Perlhirse ist das winterliche Getreide par excellence: Mit 378 kcal pro 100 g, einem hohen Magnesiumgehalt (242 mg) und Zink (3,1 mg) liefert sie anhaltende Energie und stärkt die natürlichen Abwehrkräfte. Sorghum, reich an Eisen und antioxidativen Polyphenolen, hilft gegen Wintermüdigkeit und den durch Lichtmangel verstärkten oxidativen Stress. Fingerhirse ergänzt diese Auswahl dank ihres Calciums, das die Knochengesundheit unterstützt — besonders wichtig im Winter, wenn die Vitamin-D-Synthese durch mangelnde Sonneneinstrahlung reduziert ist. Bereiten Sie diese Hirsearten als warme Fladen, dickflüssige Breie mit Pflanzenmilch, Gratins oder eingearbeitet in hausgemachtes Brot zu — für wärmende und nahrhafte Mahlzeiten. In Süddeutschland und Österreich haben Hirsebreie mit Äpfeln, Zimt und Nüssen eine jahrhundertealte Wintertradition. Die DGE empfiehlt gerade im Winter eine ausreichende Versorgung mit Eisen und Magnesium, die durch Hirsearten optimal gewährleistet werden kann.',
    },
  ],

  disclaimer:
    'Die auf dieser Seite dargestellten Ernährungs- und Gesundheitsinformationen dienen ausschliesslich zu Informationszwecken und basieren auf veröffentlichten Daten der Deutschen Gesellschaft für Ernährung (DGE), des Bundesinstituts für Risikobewertung (BfR), der Europäischen Behörde für Lebensmittelsicherheit (EFSA), des USDA FoodData Central und der Weltgesundheitsorganisation (WHO) sowie auf Studien in Fachzeitschriften mit Peer-Review. Sie stellen in keinem Fall eine ärztliche Beratung, eine Diagnose oder eine individuell angepasste Ernährungsempfehlung dar. Da jeder Mensch individuelle Ernährungsbedürfnisse hat, wird dringend empfohlen, vor einer wesentlichen Umstellung der Ernährung einen Arzt, eine Diätassistentin oder einen Ernährungsberater (Oecotrophologe) zu konsultieren — insbesondere bei Diabetes, Herz-Kreislauf-Erkrankungen, Lebensmittelallergien oder anderen Gesundheitsstörungen.',
};
