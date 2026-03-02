import type { BuyingGuideItem } from '@/lib/types';

export const buyingGuideItems: BuyingGuideItem[] = [
  // =============================================
  // 1. RISPENHIRSE (PROSO MILLET)
  // =============================================
  {
    millet: 'proso-millet',
    milletName: 'Rispenhirse (Echte Hirse / Brein)',
    formsAvailable: [
      'Ganze Körner (geschält)',
      'Hirseflocken',
      'Hirsemehl (fein gemahlen)',
      'Hirsegrieß',
      'Hirseschrot',
      'Gepuffte Hirse',
      'Hirse-Müsli-Mischungen',
    ],
    whatToLookFor: [
      'Achten Sie auf gleichmäßig goldgelbe Körner ohne dunkle Verfärbungen, Bruchstücke oder Fremdkörper. Geschälte Hirse sollte glatt und glänzend sein.',
      'Bevorzugen Sie Produkte mit Bio-Siegel (EU-Bio-Logo), Demeter- oder Naturland-Zertifizierung — diese garantieren pestizidfreien Anbau und strenge Qualitätskontrollen.',
      'Prüfen Sie das Mindesthaltbarkeitsdatum und den Herkunftsnachweis — regionale Hirse aus Deutschland (z.B. Uckermark, Bayern) oder Österreich ist frischer als Importware.',
      'Hirsemehl sollte ein mildes, leicht nussiges Aroma haben. Ein ranziger oder muffiger Geruch deutet auf Alterung oder falsche Lagerung hin.',
      'Bei Hirseflocken achten Sie auf eine gleichmäßige Dicke und trockene, brüchige Konsistenz — feuchte oder verklumpte Flocken sind ein Zeichen für Feuchtigkeitseintritt.',
    ],
    storageInstructions:
      'Ganze Hirsekörner in einem luftdichten Behälter (Glas, Edelstahl oder BPA-freier Kunststoff) an einem kühlen, trockenen Ort bei 15–20 °C lagern. Hirsemehl und Hirseflocken im Kühlschrank aufbewahren, da die natürlichen Öle bei Zimmertemperatur schnell ranzig werden können. In der warmen Jahreszeit empfiehlt sich die Lagerung aller Hirseprodukte im Kühlschrank.',
    shelfLife:
      'Ganze Körner: 12–18 Monate bei kühler, trockener Lagerung. Hirsemehl: 2–3 Monate bei Zimmertemperatur, bis 6 Monate im Kühlschrank. Hirseflocken: 4–6 Monate in versiegelter Verpackung. Gepuffte Hirse: 3–4 Monate in luftdichter Verpackung.',
    priceRange: 'Günstig',
    onlineAvailability:
      'Sehr gut verfügbar bei Amazon.de, Alnatura-shop.de, Greenweez.de, mymuesli.com und Bio-Onlineshops wie biovegan.de. Im stationären Handel bei Reformhaus, DM (dmBio-Linie), Alnatura, Denn\'s Biomarkt, Basic Bio und Edeka Bio. In Österreich bei Billa Plus, SPAR Natur*pur und Denns. In der Schweiz bei Coop Naturaplan, Migros Bio und Alnatura-Filialen. Preislage: ca. 2,50–4,50 €/kg für Bio-Qualität (geschälte Körner).',
  },

  // =============================================
  // 2. PERLHIRSE (PEARL MILLET)
  // =============================================
  {
    millet: 'pearl-millet',
    milletName: 'Perlhirse (Rohrkolbenhirse)',
    formsAvailable: [
      'Ganze Körner',
      'Perlhirsemehl',
      'Perlhirseflocken',
      'Perlhirsegrieß',
    ],
    whatToLookFor: [
      'Wählen Sie runde, gleichmäßige Körner mit graugelber bis bräunlicher Farbe. Vermeiden Sie geschrumpfte oder grünlich verfärbte Körner.',
      'Perlhirsemehl hat einen hohen Fettgehalt und wird schnell ranzig — kaufen Sie kleine Mengen und prüfen Sie auf ein sauberes, leicht süßliches Aroma.',
      'Bevorzugen Sie Bio-zertifizierte Produkte (EU-Bio, Demeter, Naturland). Achten Sie auf den Herkunftsnachweis — die meisten Perlhirseprodukte in der DACH-Region werden aus Indien oder Afrika importiert.',
      'Perlhirse ist im deutschen Einzelhandel weniger verbreitet als Rispenhirse — spezielle Bio-Fachgeschäfte und asiatische/afrikanische Lebensmittelläden führen sie häufiger.',
    ],
    storageInstructions:
      'Ganze Körner in einem luftdichten Behälter kühl und trocken lagern. Perlhirsemehl unbedingt im Kühlschrank aufbewahren — der hohe Fettgehalt führt bei Raumtemperatur schnell zu Ranzigkeit. Geöffnete Verpackungen innerhalb von 4–6 Wochen verbrauchen.',
    shelfLife:
      'Ganze Körner: 10–12 Monate bei kühler Lagerung. Mehl: 1–2 Monate bei Zimmertemperatur, bis 4 Monate im Kühlschrank. Flocken: 4–6 Monate in versiegelter Verpackung.',
    priceRange: 'Mittel',
    onlineAvailability:
      'Verfügbar bei Amazon.de, spezialisierten Bio-Onlineshops und indischen/afrikanischen Lebensmittel-Onlineshops (z.B. IndianSupermarket.de, african-food-store.de). Im stationären Handel bei Reformhaus, Alnatura (eingeschränkt) und in indischen/afrikanischen Fachgeschäften in Großstädten. Preislage: ca. 3,50–6,00 €/kg für Bio-Qualität.',
  },

  // =============================================
  // 3. FINGERHIRSE (FINGER MILLET / RAGI)
  // =============================================
  {
    millet: 'finger-millet',
    milletName: 'Fingerhirse (Ragi)',
    formsAvailable: [
      'Ganze Körner',
      'Fingerhirsemehl (Ragimehl)',
      'Fingerhirseflocken',
      'Gekeimtes Fingerhirsemehl (Ragi-Malz)',
      'Fingerhirse-Nudeln',
    ],
    whatToLookFor: [
      'Achten Sie auf dunkelrotbraune, gleichmäßige Körner ohne Steine, Schalenreste oder Verfärbungen.',
      'Fingerhirsemehl sollte ein mildes, leicht erdiges Aroma haben — ein muffiger Geruch deutet auf schlechte Lagerung hin.',
      'Gekeimtes Fingerhirsemehl (Ragi-Malz) ist besonders für Babybrei und Porridge geeignet, da die Keimung die Nährstoffverfügbarkeit verbessert.',
      'Bio-Zertifizierung ist bei importierter Fingerhirse besonders wichtig, da konventionelle Ware Pestizidrückstände aufweisen kann.',
    ],
    storageInstructions:
      'Ganze Körner in einem sauberen, trockenen Behälter bei kühler Raumtemperatur lagern. Fingerhirsemehl im Kühlschrank aufbewahren und geöffnete Verpackungen innerhalb von 8 Wochen aufbrauchen. Gekeimtes Mehl (Malz) kühl und trocken lagern.',
    shelfLife:
      'Ganze Körner: 12–18 Monate bei Raumtemperatur. Mehl: 2–3 Monate bei Raumtemperatur, bis 6 Monate im Kühlschrank. Malzpulver: 3–4 Monate in versiegelter Verpackung. Flocken: 4–6 Monate.',
    priceRange: 'Mittel',
    onlineAvailability:
      'Gut verfügbar bei Amazon.de, indischen Lebensmittel-Onlineshops (IndianSupermarket.de, spicevillage.eu) und Bio-Spezialshops. Im stationären Handel in indischen Fachgeschäften, Reformhäusern und ausgewählten Bio-Läden (Alnatura, Denn\'s). In Österreich bei Billa Plus und Interspar. In der Schweiz in Asia-Läden und bei Coop City. Preislage: ca. 4,00–7,00 €/kg für Bio-Qualität.',
  },

  // =============================================
  // 4. SORGHUM (JOWAR)
  // =============================================
  {
    millet: 'sorghum',
    milletName: 'Sorghum (Durra / Mohrenhirse)',
    formsAvailable: [
      'Ganze Körner',
      'Sorghummehl',
      'Sorghumflocken',
      'Sorghumsirup (Melasse)',
      'Gepufftes Sorghum',
    ],
    whatToLookFor: [
      'Wählen Sie weiße oder cremefarbene Sorghumkörner für die Küche — rote Sorten sind tanninreicher und werden eher für Bier und Tierfutter verwendet.',
      'Sorghummehl sollte ein mildes, leicht süßliches Aroma haben. Es ist ein beliebtes glutenfreies Backmehl und wird häufig in Kombination mit anderen Mehlen verwendet.',
      'Achten Sie auf Bio-Zertifizierung und EU-Herkunftsnachweis. Ein Großteil des in Europa erhältlichen Sorghums stammt aus Afrika, Indien oder den USA.',
      'Sorghumsirup (Melasse) ist in der DACH-Region eine Rarität — er wird hauptsächlich in amerikanischen Spezialitätenläden oder online angeboten.',
    ],
    storageInstructions:
      'Ganze Körner kühl und trocken in einem luftdichten Behälter lagern. Sorghummehl im Kühlschrank aufbewahren und geöffnete Packungen innerhalb von 3 Monaten verbrauchen. Sorghumsirup wie Honig bei Raumtemperatur lagern.',
    shelfLife:
      'Ganze Körner: 12–18 Monate. Mehl: 2–3 Monate bei Raumtemperatur, bis 6 Monate im Kühlschrank. Flocken: 4–6 Monate. Sirup: 12 Monate nach Öffnung.',
    priceRange: 'Mittel',
    onlineAvailability:
      'Verfügbar bei Amazon.de, glutenfreien Spezialshops (glutenfrei-leben.de, cellavita.de), Bio-Onlineshops und afrikanischen/indischen Lebensmittelgeschäften. Im stationären Handel bei Reformhaus, DM (glutenfreies Sortiment), Alnatura und spezialisierten Bio-Läden. Preislage: ca. 3,50–6,50 €/kg für Bio-Qualität.',
  },

  // =============================================
  // 5. KOLBENHIRSE (FOXTAIL MILLET)
  // =============================================
  {
    millet: 'foxtail-millet',
    milletName: 'Kolbenhirse (Borstenhirse / Fennich)',
    formsAvailable: [
      'Ganze Körner (geschält)',
      'Kolbenhirsemehl',
      'Kolbenhirseflocken',
      'Kolbenhirsegrieß',
    ],
    whatToLookFor: [
      'Achten Sie auf gleichmäßig hellgelbe bis goldene Körner ohne Bruch oder Fremdkörper. Geschälte Kolbenhirse hat eine glatte, glänzende Oberfläche.',
      'Kolbenhirse ist dem weißen Reis in Kochverhalten und Textur am ähnlichsten — ideal für Einsteiger, die Reis durch Hirse ersetzen möchten.',
      'Bevorzugen Sie Bio-Qualität mit Herkunftsangabe. Kolbenhirse wird hauptsächlich aus Indien und China importiert.',
      'Kolbenhirsemehl ist feiner als Rispenhirsemehl und eignet sich besonders für Fladenbrote und Pfannkuchen.',
    ],
    storageInstructions:
      'Ganze Körner in einem luftdichten Glas- oder Edelstahlbehälter bei 15–20 °C lagern. Mehl und Flocken im Kühlschrank aufbewahren. Vor dem Kochen kurz unter fließendem Wasser abspülen.',
    shelfLife:
      'Ganze Körner: 10–14 Monate. Mehl: 2–3 Monate bei Raumtemperatur, bis 5 Monate im Kühlschrank. Flocken: 4–6 Monate.',
    priceRange: 'Mittel',
    onlineAvailability:
      'Verfügbar bei Amazon.de, indischen Lebensmittel-Onlineshops und spezialisierten Bio-Shops. Im stationären Handel seltener als Rispenhirse — in indischen Fachgeschäften, Reformhäusern und ausgewählten Bio-Läden. Preislage: ca. 4,00–7,00 €/kg für Bio-Qualität.',
  },

  // =============================================
  // 6. KLEINE HIRSE (LITTLE MILLET)
  // =============================================
  {
    millet: 'little-millet',
    milletName: 'Kleine Hirse (Kutki / Samai)',
    formsAvailable: [
      'Ganze Körner (geschält)',
      'Kleine-Hirse-Mehl',
      'Kleine-Hirse-Flocken',
    ],
    whatToLookFor: [
      'Kleine Hirse hat sehr feine, helle Körner, die dem Couscous ähneln. Achten Sie auf gleichmäßige Korngröße und Sauberkeit.',
      'Dieses Getreide ist in der DACH-Region eine Spezialität — es wird fast ausschließlich aus Indien importiert und ist hauptsächlich in indischen Fachgeschäften und online erhältlich.',
      'Kleine Hirse kocht schnell und hat eine leichte, lockere Textur — ideal als Reis-Ersatz in Salaten und Pilavs.',
      'Achten Sie auf frische Ware mit gültigem Mindesthaltbarkeitsdatum, da importierte Produkte manchmal längere Transportwege haben.',
    ],
    storageInstructions:
      'In einem luftdichten Behälter kühl und trocken lagern. Geöffnete Verpackungen innerhalb von 6 Monaten aufbrauchen. Mehl im Kühlschrank aufbewahren.',
    shelfLife:
      'Ganze Körner: 10–14 Monate. Mehl: 2–3 Monate bei Raumtemperatur, bis 5 Monate im Kühlschrank. Flocken: 4–6 Monate.',
    priceRange: 'Gehoben',
    onlineAvailability:
      'Hauptsächlich über indische Lebensmittel-Onlineshops (IndianSupermarket.de, spicevillage.eu) und Amazon.de erhältlich. Im stationären Handel nur in indischen Fachgeschäften in Großstädten wie Berlin, München, Frankfurt und Wien. Preislage: ca. 5,00–9,00 €/kg.',
  },

  // =============================================
  // 7. KODOHIRSE (KODO MILLET)
  // =============================================
  {
    millet: 'kodo-millet',
    milletName: 'Kodohirse',
    formsAvailable: [
      'Ganze Körner (geschält)',
      'Kodohirsemehl',
    ],
    whatToLookFor: [
      'Kodohirse hat hellbraune bis gräuliche Körner. Achten Sie auf saubere, gleichmäßige Ware ohne Schalenreste oder Verfärbungen.',
      'In der DACH-Region ist Kodohirse ein Nischenprodukt, das fast ausschließlich in indischen Spezialgeschäften und online erhältlich ist.',
      'Kodohirse hat einen mild-erdigen Geschmack und behält beim Kochen ihre Form gut — ideal für Pilavs und Reisgerichte.',
      'Bevorzugen Sie Bio-Qualität, da konventionelle Kodohirse manchmal Verunreinigungen aufweisen kann.',
    ],
    storageInstructions:
      'In einem luftdichten Behälter kühl und trocken lagern. Mehl im Kühlschrank aufbewahren und geöffnete Packungen innerhalb von 3 Monaten verbrauchen.',
    shelfLife:
      'Ganze Körner: 10–12 Monate. Mehl: 2–3 Monate bei Raumtemperatur, bis 5 Monate im Kühlschrank.',
    priceRange: 'Gehoben',
    onlineAvailability:
      'Ausschließlich über indische Lebensmittel-Onlineshops und Amazon.de. Im stationären Handel nur in indischen Fachgeschäften in Berlin, München, Frankfurt, Wien und Zürich. Preislage: ca. 6,00–10,00 €/kg.',
  },

  // =============================================
  // 8. JAPANISCHE HIRSE (BARNYARD MILLET)
  // =============================================
  {
    millet: 'barnyard-millet',
    milletName: 'Japanische Hirse (Hühnerhirse)',
    formsAvailable: [
      'Ganze Körner (geschält)',
      'Japanische-Hirse-Mehl',
    ],
    whatToLookFor: [
      'Achten Sie auf kleine, weiße bis cremefarbene Körner ohne Verfärbungen oder Bruch.',
      'Japanische Hirse hat den niedrigsten Kaloriengehalt aller Hirsearten und ist daher bei kalorienarmer Ernährung besonders beliebt.',
      'In der DACH-Region ist dieses Getreide eine Seltenheit — es wird fast nur in japanischen und indischen Spezialgeschäften und online angeboten.',
      'In Japan wird diese Hirse „Hie" genannt und ist in japanischen Feinkostläden in Düsseldorf (Japantown) und anderen Städten erhältlich.',
    ],
    storageInstructions:
      'In einem luftdichten Behälter kühl und trocken lagern. Wegen des niedrigen Fettgehalts hält sich Japanische Hirse gut bei Raumtemperatur. Mehl im Kühlschrank aufbewahren.',
    shelfLife:
      'Ganze Körner: 10–14 Monate. Mehl: 2–3 Monate bei Raumtemperatur, bis 5 Monate im Kühlschrank.',
    priceRange: 'Gehoben',
    onlineAvailability:
      'Über japanische Lebensmittel-Onlineshops (japan-store.de, nipponshop.de), indische Onlineshops und Amazon.de. Im stationären Handel in japanischen und indischen Fachgeschäften, besonders in Düsseldorf, Frankfurt, München, Berlin und Wien. Preislage: ca. 7,00–12,00 €/kg.',
  },

  // =============================================
  // 9. BRAUNTOPHIRSE (BROWNTOP MILLET)
  // =============================================
  {
    millet: 'browntop-millet',
    milletName: 'Brauntophirse',
    formsAvailable: [
      'Ganze Körner (geschält)',
      'Brauntophirsemehl',
    ],
    whatToLookFor: [
      'Brauntophirse hat kleine, hellbraune Körner. Achten Sie auf Reinheit und Frische — dieses Getreide ist in der DACH-Region äußerst selten.',
      'Brauntophirse wird fast ausschließlich in Indien (Karnataka und Andhra Pradesh) angebaut und ist ein echtes Nischenprodukt im deutschsprachigen Raum.',
      'Sie hat einen milden, leicht süßlichen Geschmack und einen sehr niedrigen glykämischen Index — interessant für Diabetiker und gesundheitsbewusste Verbraucher.',
      'Da die Verfügbarkeit sehr eingeschränkt ist, empfiehlt es sich, größere Mengen zu bestellen und den Vorrat vorausschauend zu planen.',
    ],
    storageInstructions:
      'In einem luftdichten Behälter kühl und trocken bei 15–20 °C lagern. Mehl im Kühlschrank aufbewahren. Aufgrund der schwierigen Beschaffung empfiehlt sich die Lagerung größerer Mengen in Vakuumbeuteln.',
    shelfLife:
      'Ganze Körner: 10–12 Monate. Mehl: 2–3 Monate bei Raumtemperatur, bis 5 Monate im Kühlschrank.',
    priceRange: 'Gehoben',
    onlineAvailability:
      'Nur über spezialisierte indische Lebensmittel-Onlineshops und gelegentlich bei Amazon.de. Im stationären Handel in der DACH-Region kaum erhältlich. Für regelmäßigen Bedarf empfiehlt sich die Direktbestellung bei indischen Bio-Exporteuren oder über internationale Plattformen wie iHerb. Preislage: ca. 8,00–14,00 €/kg.',
  },
];
