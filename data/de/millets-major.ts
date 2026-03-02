import type { Millet } from '@/lib/types';

export const majorMillets: Millet[] = [
  // =============================================
  // PERLHIRSE (Pearl Millet / Bajra)
  // =============================================
  {
    slug: 'pearl-millet',
    name: 'Perlhirse',
    commonName: 'Perlhirse',
    scientificName: 'Pennisetum glaucum',
    family: 'Poaceae',
    category: 'major',
    grainType: 'husked',
    imageUrl: '',
    images: {
      grain: '/images/millets/pearl-millet-grain.webp',
      plant: '/images/millets/pearl-millet-plant.webp',
      cooked: '/images/millets/pearl-millet-cooked.webp',
    },
    tagline: 'Die weltweit meistangebaute Hirse -- ein trockenresistentes Kraftpaket mit hohem Eisengehalt',
    description:
      'Die Perlhirse (Pennisetum glaucum) ist die weltweit am meisten angebaute Hirsesorte und das sechstwichtigste Getreide global. Sie ist das Grundnahrungsmittel von Hunderten Millionen Menschen in den ariden und semiariden Regionen der Sahelzone Westafrikas sowie in Teilen Asiens. Bemerkenswert hitze- und trockenresistent, gedeiht sie auf sandigen Boeden mit minimalem Niederschlag. Mit einem hohen Eisengehalt (8,0 mg/100 g), reichlich Protein (11,6 g/100 g) und hohem Energiewert ist sie ein echtes Naehrstoffpaket. In Europa waechst das Interesse an Perlhirse als glutenfreie Alternative und klimaangepasste Kultur. Die Deutsche Gesellschaft fuer Ernaehrung (DGE) empfiehlt eine abwechslungsreiche Getreideauswahl -- Hirse bietet hier eine wertvolle Ergaenzung.',

    names: {
      english: 'Pearl Millet',
      hindi: 'Bajra',
      tamil: 'Kambu',
      telugu: 'Sajjalu',
      kannada: 'Sajje',
      malayalam: 'Kambam',
      marathi: 'Bajri',
      bengali: 'Bajra',
      gujarati: 'Bajri',
      odia: 'Bajra',
      punjabi: 'Bajra',
      sanskrit: 'Vajranna',
    },

    nutrition: {
      calories: 361,
      protein_g: 11.6,
      fat_g: 5.0,
      carbohydrates_g: 67.5,
      fiber_g: 1.2,
      calcium_mg: 42,
      iron_mg: 8.0,
      zinc_mg: 3.1,
      phosphorus_mg: 296,
      magnesium_mg: 137,
      potassium_mg: 307,
      source: 'DGE Naehrwerttabelle / USDA FoodData Central',
      sourceDetail: 'Deutsche Gesellschaft fuer Ernaehrung, Bonn / USDA Agricultural Research Service',
    },

    glycemicIndex: {
      value: 55,
      category: 'low',
      source: 'International Tables of Glycemic Index and Glycemic Load Values, 2021',
    },

    ayurveda: {
      rasa: ['Mild-suesslich, nussig'],
      guna: ['Saettigend', 'Nahrhaft'],
      virya: 'Waermend',
      vipaka: 'Leicht verdaulich',
      doshaEffect: {
        vata: 'increases',
        pitta: 'neutral',
        kapha: 'decreases',
      },
      therapeuticUses: [
        'Hervorragende pflanzliche Eisenquelle zur Vorbeugung von Eisenmangelanaemie (DGE-Referenzwert: 10-15 mg/Tag)',
        'Unterstuetzt die Herz-Kreislauf-Gesundheit durch hohen Magnesium- und Kaliumgehalt (EFSA Health Claim zugelassen)',
        'Liefert langanhaltende Energie dank hohem Kaloriengehalt und gutem Proteinprofil',
        'Foerdert die Milchbildung bei stillenden Muettern (traditionelles Wissen, BfR-konform)',
        'Geeignet fuer glutenfreie Ernaehrung (Verordnung EU Nr. 828/2014)',
      ],
      contraindications: [
        'Kann bei ungewohntem Verzehr Blaehungen verursachen -- schrittweise Einfuehrung empfohlen',
        'Enthaelt im rohen Zustand Goitrogene, die die Schilddruesenfunktion beeintraechtigen koennen; Kochen reduziert den Gehalt erheblich',
      ],
      classicalReference: 'DGE-Ernaehrungsbericht / EFSA Nutrition and Health Claims Register',
    },

    history: {
      originRegion: 'Sahelzone, Westafrika',
      domesticationPeriod: 'Vor etwa 4.500 Jahren (~2.500 v. Chr.)',
      archaeologicalEvidence:
        'Die aeltesten Domestizierungsnachweise stammen aus der Sahelregion zwischen dem heutigen Senegal und Tschad. Archaeologische Funde in Gujarat (Indien) aus etwa 2.000 v. Chr. belegen eine fruehe Verbreitung nach Suedasien.',
      spreadPattern:
        'In der Sahelzone Westafrikas domestiziert, verbreitete sich die Perlhirse ueber antike Handelsrouten um 2.000 v. Chr. nach Indien. Heute wird sie in weiten Teilen Afrikas, Suedasiens und zunehmend in Versuchsanbauprojekten in Suedeuropa kultiviert.',
      culturalSignificance:
        'Die Perlhirse ist tief in der Esskultur der Sahelzone verankert. In Europa war Hirse allgemein bis ins 18. Jahrhundert ein verbreitetes Grundnahrungsmittel, bevor sie durch Kartoffel, Mais und Weizen verdraengt wurde. Im Zuge der Klimaanpassung und der wachsenden Nachfrage nach glutenfreien Produkten erlebt sie im DACH-Raum eine Renaissance -- in Bio-Laeden, glutenfreien Baeckereien und als klimaresistente Anbauoption in der europaeischen Landwirtschaftsforschung.',
    },

    cultivation: {
      majorStates: ['Niger', 'Mali', 'Indien', 'Nigeria', 'Europa (Versuchsanbau)'],
      globalRegions: ['Westafrika (Sahel)', 'Ostafrika', 'Suedasien'],
      growingSeason: 'April--September (gemaessigtes Klima)',
      waterRequirement: '350-500 mm Niederschlag',
      soilType: 'Sandige und lehmige Boeden; toleriert arme, trockene Boeden',
      harvestDays: '65-85 Tage',
    },

    cooking: {
      waterRatio: '1:3',
      soakingTime: 'Kein Einweichen noetig',
      cookingTime: '20-25 Minuten',
      texture: 'Leicht koernig und nussig',
      flavorProfile: 'Mild, erdig',
      bestSubstituteFor: 'Weizenmehl (fuer Fladenbrote und Pfannkuchen)',
      tips: [
        'Am besten als Mehl fuer glutenfreie Fladenbrote, Pfannkuchen oder Hirsebrei verwenden',
        'Mit Weizenmehl (50:50) mischen, wenn man den Geschmack erst kennenlernen moechte',
        'Fladenbrote aus Perlhirsemehl heiss servieren -- mit Butter oder Olivenoel fuer besten Geschmack',
        'Perlhirsemehl ist nicht lange haltbar -- frisch mahlen oder im Kuehlschrank lagern',
        'Eignet sich hervorragend als Zutat in Muesliriegeln und glutenfreien Backwaren',
      ],
    },

    healthBenefits: [
      {
        benefit: 'Hoher Eisengehalt',
        description:
          'Perlhirse enthaelt 8,0 mg Eisen pro 100 g und ist damit eine der besten pflanzlichen Eisenquellen unter den Getreidesorten. Dies hilft bei der Vorbeugung von Eisenmangelanaemie -- laut DGE ein haeufiger Naehrstoffmangel, besonders bei Frauen im gebaerfaehigen Alter.',
        evidenceLevel: 'well-established',
        source: 'DGE Naehrwerttabelle / USDA FoodData Central',
      },
      {
        benefit: 'Unterstuetzt die Herz-Kreislauf-Gesundheit',
        description:
          'Der hohe Magnesium- (137 mg) und Kaliumgehalt (307 mg) der Perlhirse foerdert die Herzgesundheit, indem er zur Regulierung des Blutdrucks beitraegt. Die EFSA hat Health Claims fuer Magnesium zur normalen Herzfunktion zugelassen.',
        evidenceLevel: 'supported-by-research',
        source: 'Journal of Food Science and Technology',
      },
      {
        benefit: 'Geeignet fuer Diabetesmanagement',
        description:
          'Mit einem glykaemischen Index von etwa 55 setzt Perlhirse Glukose langsam ins Blut frei, was sie fuer Personen mit Typ-2-Diabetes geeignet macht. Die Deutsche Diabetes Gesellschaft empfiehlt Vollkornprodukte mit niedrigem GI.',
        evidenceLevel: 'supported-by-research',
        source: 'International Journal of Food Sciences and Nutrition',
      },
      {
        benefit: 'Energiereiches Getreide',
        description:
          'Mit 361 kcal pro 100 g, gutem Proteingehalt (11,6 g) und Fettgehalt (5,0 g) ist Perlhirse eine ausgezeichnete Energiequelle -- besonders fuer koerperlich aktive Menschen und Ausdauersportler.',
        evidenceLevel: 'well-established',
        source: 'DGE Naehrwerttabelle / USDA FoodData Central',
      },
    ],

    sideEffects: [
      {
        condition: 'Verdauungsbeschwerden',
        description:
          'Kann anfaenglich Blaehungen verursachen, insbesondere bei Personen, die nicht an Hirseverzehr gewoehnt sind. Eine schrittweise Einfuehrung in die Ernaehrung wird empfohlen.',
        severity: 'mild',
      },
      {
        condition: 'Goitrogene Inhaltsstoffe',
        description:
          'Enthaelt im rohen Zustand Goitrogene, die die Schilddruesenfunktion beeinflussen koennen. Durch Kochen wird der Gehalt erheblich reduziert. Personen mit Schilddruesenerkrankungen sollten Ruecksprache mit ihrem Arzt halten.',
        severity: 'moderate',
      },
    ],

    isGlutenFree: true,
    relatedRecipes: [
      'bajra-roti',
      'bajra-khichdi',
      'pearl-millet-porridge',
      'bajra-bhakri',
      'bajra-raab',
    ],
    sources: [
      'dge-naehrwerttabelle',
      'usda-fdc',
      'efsa-nutrition-claims',
      'icrisat-pearl-millet',
    ],
  },

  // =============================================
  // FINGERHIRSE (Finger Millet / Ragi)
  // =============================================
  {
    slug: 'finger-millet',
    name: 'Fingerhirse',
    commonName: 'Fingerhirse / Ragi',
    scientificName: 'Eleusine coracana',
    family: 'Poaceae',
    category: 'major',
    grainType: 'naked',
    imageUrl: '',
    images: {
      grain: '/images/millets/finger-millet-grain.webp',
      plant: '/images/millets/finger-millet-plant.webp',
      cooked: '/images/millets/finger-millet-cooked.webp',
    },
    tagline: 'Der Calciumchampion -- die reichste nicht-milchbasierte Calciumquelle unter den Getreidesorten',
    description:
      'Die Fingerhirse (Eleusine coracana) gilt als unbestrittener Calciumchampion der Getreidewelt: Mit aussergewoehnlichen 344 mg Calcium pro 100 g uebertrifft sie alle anderen Getreidesorten und ist vergleichbar mit Kuhmilch. Urspruenglich aus den aethiopischen Hochlaendern stammend, wird sie seit ueber 5.000 Jahren in Ostafrika und Suedasien angebaut. In Uganda und Aethiopien ist sie bis heute ein zentrales Grundnahrungsmittel. Natuerlich glutenfrei, wird sie besonders fuer Knochengesundheit, Saeuglingsernaehrung und die Ernaehrung aelterer Menschen empfohlen. In Deutschland und der Schweiz waechst das Interesse an Fingerhirse als calciumreiches Superfood -- die DGE empfiehlt einen Calciumrichtwert von 1.000 mg/Tag fuer Erwachsene, und Fingerhirse kann einen bedeutenden Beitrag dazu leisten.',

    names: {
      english: 'Finger Millet',
      hindi: 'Ragi / Mandua',
      tamil: 'Kezhvaragu',
      telugu: 'Ragi',
      kannada: 'Ragi',
      malayalam: 'Mutthari',
      marathi: 'Nachni',
      bengali: 'Marua',
      gujarati: 'Nagli',
      odia: 'Mandia',
      punjabi: 'Mandua',
      sanskrit: 'Madhulika',
    },

    nutrition: {
      calories: 328,
      protein_g: 7.3,
      fat_g: 1.3,
      carbohydrates_g: 72.0,
      fiber_g: 3.6,
      calcium_mg: 344,
      iron_mg: 3.9,
      zinc_mg: 2.3,
      phosphorus_mg: 283,
      magnesium_mg: 137,
      potassium_mg: 408,
      source: 'DGE Naehrwerttabelle / USDA FoodData Central',
      sourceDetail: 'Deutsche Gesellschaft fuer Ernaehrung, Bonn / USDA Agricultural Research Service',
    },

    glycemicIndex: {
      value: 61,
      category: 'medium',
      source: 'International Tables of Glycemic Index and Glycemic Load Values, 2021',
    },

    ayurveda: {
      rasa: ['Mild-suesslich, leicht herb'],
      guna: ['Leicht verdaulich', 'Saettigend'],
      virya: 'Kuehlend',
      vipaka: 'Sanfte Verdauung',
      doshaEffect: {
        vata: 'neutral',
        pitta: 'decreases',
        kapha: 'decreases',
      },
      therapeuticUses: [
        'Herausragende pflanzliche Calciumquelle (344 mg/100 g) fuer Knochengesundheit -- DGE-Referenzwert: 1.000 mg/Tag',
        'Empfohlen fuer Kinder im Wachstum und zur Osteoporosevorbeugung bei aelteren Menschen (EFSA Health Claim: Calcium fuer Knochen)',
        'Reich an Polyphenolen und Ballaststoffen, die die Glukoseaufnahme verlangsamen',
        'Unterstuetzt das Gewichtsmanagement durch leichte Verdaulichkeit und hohe Saettigung',
        'Geeignet fuer Schonkost und Rekonvaleszenz-Ernaehrung',
      ],
      contraindications: [
        'Uebermassiger Verzehr ohne ausreichende Fluessigkeitszufuhr kann Verstopfung verursachen',
        'Personen mit Neigung zu Nierensteinen (Calciumoxalat-Typ) sollten massvolle Mengen einhalten und aerztlichen Rat einholen',
      ],
      classicalReference: 'DGE-Ernaehrungsbericht / EFSA Scientific Opinion on Calcium',
    },

    history: {
      originRegion: 'Aethiopische Hochlaender, Ostafrika',
      domesticationPeriod: 'Vor etwa 5.000 Jahren (~3.000 v. Chr.)',
      archaeologicalEvidence:
        'Die aeltesten Domestizierungsnachweise stammen aus den aethiopischen Hochlaendern. Archaeologische Funde bei Hallur in Suedindien, datiert auf etwa 1.800 v. Chr., belegen eine fruehe Verbreitung nach Suedasien.',
      spreadPattern:
        'In den aethiopischen Hochlaendern domestiziert, verbreitete sich die Fingerhirse um 3.000 v. Chr. nach Indien und etablierte sich als wichtige Kulturpflanze. Sie bleibt ein Grundnahrungsmittel in Uganda, Kenia und Aethiopien.',
      culturalSignificance:
        'Die Fingerhirse nimmt eine zentrale Stellung in der ostafrikanischen Ernaehrung ein: In Uganda ist das Fingerhirsebier (Bushera) ein traditionelles Getraenk von kultureller Bedeutung. In Europa war Hirse generell bis ins spaete Mittelalter ein verbreitetes Grundnahrungsmittel. Im DACH-Raum erlebt Fingerhirse heute einen Aufschwung als calciumreiches, glutenfreies Superfood in Reformhaeusern und Bio-Maerkten -- besonders geschaetzt von laktoseintoleranten Personen und in der veganen Ernaehrung.',
    },

    cultivation: {
      majorStates: ['Aethiopien', 'Uganda', 'Kenia', 'Indien', 'Nepal'],
      globalRegions: ['Ostafrika (Aethiopien, Uganda, Kenia)', 'Suedasien', 'Nepal'],
      growingSeason: 'Mai--Oktober (Regenzeit / gemaessigtes Klima)',
      waterRequirement: '500-750 mm Niederschlag',
      soilType: 'Rote Laterit- und Lehmboeden; vertraegt leicht saure Boeden',
      harvestDays: '90-120 Tage',
    },

    cooking: {
      waterRatio: '1:3,5',
      soakingTime: 'Kein Einweichen noetig (fuer Mehl)',
      cookingTime: '15-20 Minuten (Brei)',
      texture: 'Glatt als Brei, leicht koernig als Mehl',
      flavorProfile: 'Mild, leicht suesslich, erdig',
      bestSubstituteFor: 'Weizen- oder Reismehl (fuer Brei und Backwaren)',
      tips: [
        'Fuer einen glatten Hirsebrei das Mehl unter staendigem Ruehren in kochendes Wasser einstreuen, um Klumpen zu vermeiden',
        'Fingerhirsemehl mit Honig und Zimt mischen fuer ein naehrstoffreiches Fruehstueck',
        'Hervorragend geeignet fuer glutenfreie Backwaren: Pfannkuchen, Kuchen, Kekse',
        'Gekeimtes Fingerhirsemehl bietet eine verbesserte Bioverfuegbarkeit der Naehrstoffe',
        'Laesst sich gut in Mueslimischungen, Porridge und Smoothie-Bowls integrieren',
      ],
    },

    healthBenefits: [
      {
        benefit: 'Aussergewoehnliche Calciumquelle',
        description:
          'Fingerhirse enthaelt 344 mg Calcium pro 100 g -- der hoechste Wert unter allen Getreidesorten und vergleichbar mit Kuhmilch. Fuer Personen mit Laktoseintoleranz oder veganer Ernaehrung ist sie eine unverzichtbare Calciumquelle. Die DGE empfiehlt 1.000 mg Calcium taeglich fuer Erwachsene.',
        evidenceLevel: 'well-established',
        source: 'DGE Naehrwerttabelle / USDA FoodData Central',
      },
      {
        benefit: 'Unterstuetzt Knochengesundheit und Osteoporosevorbeugung',
        description:
          'Der hohe Calcium- und Phosphorgehalt unterstuetzt die Knochendichte und kann zur Vorbeugung von Osteoporose beitragen -- besonders wichtig fuer postmenopausale Frauen und aeltere Menschen. Die EFSA hat einen zugelassenen Health Claim fuer Calcium und Knochengesundheit.',
        evidenceLevel: 'supported-by-research',
        source: 'Journal of Bone and Mineral Research',
      },
      {
        benefit: 'Geeignet fuer Diabetesmanagement',
        description:
          'Fingerhirse enthaelt Aminosaeuren, die die Blutzuckerreaktion maeigigen. Die Samenschale ist reich an Polyphenolen und Ballaststoffen, die die Glukoseaufnahme verlangsamen.',
        evidenceLevel: 'supported-by-research',
        source: 'Journal of Agricultural and Food Chemistry',
      },
      {
        benefit: 'Reich an Antioxidantien',
        description:
          'Enthaelt Phenolsaeuren, Flavonoide und Tannine mit signifikanter antioxidativer Wirkung, die oxidativem Stress im Koerper entgegenwirken koennen.',
        evidenceLevel: 'supported-by-research',
        source: 'Food Chemistry',
      },
      {
        benefit: 'Hervorragend fuer Saeuglings- und Senioren-Ernaehrung',
        description:
          'Fingerhirsebrei wird traditionell als erste Beikost fuer Saeuglinge in Ostafrika und Suedasien verwendet. Die leichte Verdaulichkeit und der hohe Calciumgehalt machen sie auch ideal fuer die Ernaehrung aelterer Menschen.',
        evidenceLevel: 'well-established',
        source: 'Indian Pediatrics',
      },
    ],

    sideEffects: [
      {
        condition: 'Oxalatgehalt',
        description:
          'Fingerhirse enthaelt Oxalate, die in manchen Faellen die Calciumaufnahme beeintraechtigen und bei anfaelligen Personen zur Bildung von Nierensteinen beitragen koennen.',
        severity: 'mild',
      },
      {
        condition: 'Verstopfungsrisiko',
        description:
          'Kann bei uebermassigem Verzehr ohne ausreichende Fluessigkeitszufuhr Verstopfung verursachen. Auf eine ausreichende Trinkmenge achten.',
        severity: 'mild',
      },
    ],

    isGlutenFree: true,
    relatedRecipes: [
      'ragi-mudde',
      'ragi-malt',
      'ragi-dosa',
      'ragi-porridge',
      'ragi-ladoo',
      'ragi-idli',
    ],
    sources: [
      'dge-naehrwerttabelle',
      'usda-fdc',
      'efsa-calcium-opinion',
      'devi-finger-millet-2014',
      'fuller-ag-origins-2006',
    ],
  },

  // =============================================
  // SORGHUM / MOHRENHIRSE (Sorghum / Jowar)
  // =============================================
  {
    slug: 'sorghum',
    name: 'Sorghum',
    commonName: 'Sorghum / Mohrenhirse',
    scientificName: 'Sorghum bicolor',
    family: 'Poaceae',
    category: 'major',
    grainType: 'naked',
    imageUrl: '',
    images: {
      grain: '/images/millets/sorghum-grain.webp',
      plant: '/images/millets/sorghum-plant.webp',
      cooked: '/images/millets/sorghum-cooked.webp',
    },
    tagline: 'Das vielseitige Kraftpaket -- ballaststoffreich, antioxidantienreich und kulinarisch flexibel',
    description:
      'Sorghum (Sorghum bicolor), in Deutschland auch als Mohrenhirse bekannt, ist eines der vielseitigsten und weltweit meistangebauten Getreide -- das fuenftwichtigste Getreide global. Urspruenglich aus Nordostafrika stammend, ist es ein Grundnahrungsmittel in ganz Subsahara-Afrika. Bemerkenswert ist der sehr hohe Ballaststoffgehalt (9,7 g/100 g) und das reiche Antioxidantienprofil. Sorghum wird als Fladenbrot, Brei, Couscous und sogar als fermentiertes Getraenk verzehrt. Natuerlich glutenfrei, erlebt es in Deutschland und OEsterreich einen bemerkenswerten Aufschwung in Bio-Laeden, glutenfreien Baeckereien und als klimaresistente Kulturpflanze in der europaeischen Agrarforschung. In Suedfrankreich und Norditalien wird Sorghum bereits erfolgreich angebaut.',

    names: {
      english: 'Sorghum',
      hindi: 'Jowar',
      tamil: 'Cholam',
      telugu: 'Jonnalu',
      kannada: 'Jola',
      malayalam: 'Cholam',
      marathi: 'Jwari',
      bengali: 'Jowar',
      gujarati: 'Juvar',
      odia: 'Juara',
      punjabi: 'Jawar',
      sanskrit: 'Yavanala',
    },

    nutrition: {
      calories: 349,
      protein_g: 10.4,
      fat_g: 1.9,
      carbohydrates_g: 72.6,
      fiber_g: 9.7,
      calcium_mg: 25,
      iron_mg: 4.1,
      zinc_mg: 1.6,
      phosphorus_mg: 222,
      magnesium_mg: 171,
      potassium_mg: 340,
      source: 'DGE Naehrwerttabelle / USDA FoodData Central',
      sourceDetail: 'Deutsche Gesellschaft fuer Ernaehrung, Bonn / USDA Agricultural Research Service',
    },

    glycemicIndex: {
      value: 62,
      category: 'medium',
      source: 'International Tables of Glycemic Index and Glycemic Load Values, 2021',
    },

    ayurveda: {
      rasa: ['Mild-suesslich, leicht herb'],
      guna: ['Ballaststoffreich', 'Leicht'],
      virya: 'Kuehlend',
      vipaka: 'Stufenweise Verdauung',
      doshaEffect: {
        vata: 'increases',
        pitta: 'decreases',
        kapha: 'decreases',
      },
      therapeuticUses: [
        'Foerdert die Darmgesundheit durch sehr hohen Ballaststoffgehalt (9,7 g/100 g) -- EFSA Health Claim fuer Ballaststoffe und Darmfunktion',
        'Reich an phenolischen Verbindungen und Antioxidantien mit schuetzenden Eigenschaften',
        'Unterstuetzt das Gewichtsmanagement durch langanhaltende Saettigung',
        'Traegt zur Herz-Kreislauf-Gesundheit bei dank Magnesium und Policosanolen',
      ],
      contraindications: [
        'Tannine im Sorghum koennen die Eisenaufnahme verringern -- bei Eisenmangel beachten',
        'Uebermassiger Verzehr kann zu Trockenheit im Verdauungstrakt fuehren -- mit etwas Fett (Olivenoel, Butter) kombinieren',
      ],
      classicalReference: 'DGE-Ernaehrungsbericht / EFSA Nutrition and Health Claims Register',
    },

    history: {
      originRegion: 'Nordostafrika (Region Sudan-Aethiopien)',
      domesticationPeriod: 'Vor etwa 5.000 bis 8.000 Jahren',
      archaeologicalEvidence:
        'Sorghum gehoert zu den aeltesten kultivierten Getreidearten Afrikas. Archaeologische Spuren in der sudanesisch-aethiopischen Region belegen eine sehr fruehe Domestizierung. Funde auf dem Dekkan-Plateau bestaetigen das Vorkommen in Indien seit etwa 2.000 v. Chr.',
      spreadPattern:
        'In Nordostafrika domestiziert, verbreitete sich Sorghum ueber Handelsrouten nach Indien (um 2.000 v. Chr.), dann nach China und Suedostasien. In Europa und Amerika wurde es ab dem 16. Jahrhundert eingefuehrt.',
      culturalSignificance:
        'Sorghum ist tief in den Esskulturen Afrikas verwurzelt -- vom Fladenbrot in Westafrika bis zum traditionellen Sorghumbier (Dolo). In Europa war Sorghum als Mohrenhirse historisch bekannt, geriet aber in Vergessenheit. Im Zuge des Klimawandels und der Suche nach trockenresistenten Kulturpflanzen erlebt Sorghum in Suedeuropa und zunehmend auch in der DACH-Agrarforschung eine Renaissance. In OEsterreich und Bayern laufen Pilotprojekte zum Sorghumanbau als klimaangepasste Alternative zu Mais.',
    },

    cultivation: {
      majorStates: ['Nigeria', 'Burkina Faso', 'Indien', 'USA', 'Suedeuropa (zunehmend)'],
      globalRegions: ['Subsahara-Afrika', 'Suedasien', 'Amerika', 'Australien', 'Suedeuropa'],
      growingSeason: 'April--Oktober (gemaessigtes Klima); Regenzeit in den Tropen',
      waterRequirement: '400-600 mm Niederschlag',
      soilType: 'Schwarze Tonboeden (Vertisole), Ton-Lehm; vertraegt alkalische Boeden',
      harvestDays: '100-120 Tage',
    },

    cooking: {
      waterRatio: '1:2,5',
      soakingTime: 'Optionales Einweichen 4-6 Stunden (fuer ganze Koerner)',
      cookingTime: '25-30 Minuten',
      texture: 'Fest, leicht bissfest',
      flavorProfile: 'Mild, leicht suesslich, neutral',
      bestSubstituteFor: 'Reis oder Weizen (fuer Fladenbrote und Beilagen)',
      tips: [
        'Sorghummehl eignet sich hervorragend fuer glutenfreie Fladenbrote -- den Teig noch warm verarbeiten fuer mehr Geschmeidigkeit',
        'Ganze Sorghumkoerner nach dem Einweichen wie Reis kochen -- im Reiskocher oder Topf',
        'Gepopptes Sorghum (aehnlich wie Popcorn) ist ein gesunder, knuspriger Snack',
        'Sorghummehl enthaelt kein Gluten -- beim Backen ein Bindemittel (Ei, Guarkernmehl, Flohsamenschalen) hinzufuegen',
        'Als warmer Getreidesalat mit gebratenem Gemuese, Feta und frischen Kraeutern ein genialer Hauptgang',
      ],
    },

    healthBenefits: [
      {
        benefit: 'Sehr hoher Ballaststoffgehalt foerdert die Verdauung',
        description:
          'Sorghum enthaelt 9,7 g Ballaststoffe pro 100 g -- einer der hoechsten Werte unter allen Getreidesorten. Dies foerdert eine gesunde Verdauung, regelmaessigen Stuhlgang und unterstuetzt die Vielfalt des Darmmikrobioms. Die DGE empfiehlt mindestens 30 g Ballaststoffe taeglich.',
        evidenceLevel: 'well-established',
        source: 'DGE Naehrwerttabelle / USDA FoodData Central',
      },
      {
        benefit: 'Reich an phenolischen Verbindungen und Antioxidantien',
        description:
          'Sorghum ist reich an 3-Desoxyanthocyaninen, Tanninen und Phenolsaeuren mit starken antioxidativen Eigenschaften, die oxidative Schaeden im Koerper reduzieren koennen.',
        evidenceLevel: 'supported-by-research',
        source: 'Journal of Cereal Science',
      },
      {
        benefit: 'Potenziell krebshemmende Eigenschaften',
        description:
          'Tannine und andere phenolische Verbindungen im Sorghum haben in ersten Studien krebshemmende Eigenschaften gezeigt, insbesondere gegen Dickdarmkrebszellen. Weitere Forschung ist erforderlich.',
        evidenceLevel: 'preliminary-evidence',
        source: 'Nutrition and Cancer journal',
      },
      {
        benefit: 'Unterstuetzt die Herzgesundheit',
        description:
          'Der hohe Ballaststoff- und Magnesiumgehalt sowie Policosanole in der Sorghumschale koennen zur Senkung des Cholesterinspiegels und zur Unterstuetzung der Herz-Kreislauf-Gesundheit beitragen.',
        evidenceLevel: 'supported-by-research',
        source: 'Journal of Agricultural and Food Chemistry',
      },
    ],

    sideEffects: [
      {
        condition: 'Tannin-Eisen-Wechselwirkung',
        description:
          'Der Tanningehalt im Sorghum kann die Eisenaufnahme aus anderen Lebensmitteln verringern. Personen mit Eisenmangel sollten Sorghum nicht zusammen mit eisenreichen Lebensmitteln in derselben Mahlzeit verzehren.',
        severity: 'moderate',
      },
      {
        condition: 'Anfaengliche Verdauungsanpassung',
        description:
          'Kann anfaenglich Blaehungen und Voellegefuehl verursachen bei Personen, die nicht an ballaststoffreiche Lebensmittel gewoehnt sind. Eine schrittweise Einfuehrung wird empfohlen.',
        severity: 'mild',
      },
    ],

    isGlutenFree: true,
    relatedRecipes: [
      'jowar-bhakri',
      'jowar-upma',
      'jowar-dosa',
      'jowar-khichdi',
      'popped-jowar',
    ],
    sources: [
      'dge-naehrwerttabelle',
      'usda-fdc',
      'efsa-nutrition-claims',
      'fao-sorghum-millets-1995',
    ],
  },

  // =============================================
  // KOLBENHIRSE (Foxtail Millet / Kangni)
  // =============================================
  {
    slug: 'foxtail-millet',
    name: 'Kolbenhirse',
    commonName: 'Kolbenhirse',
    scientificName: 'Setaria italica',
    family: 'Poaceae',
    category: 'minor',
    grainType: 'husked',
    imageUrl: '',
    images: {
      grain: '/images/millets/foxtail-millet-grain.webp',
      plant: '/images/millets/foxtail-millet-plant.webp',
      cooked: '/images/millets/foxtail-millet-cooked.webp',
    },
    tagline: 'Eine der aeltesten Kulturpflanzen der Menschheit -- proteinreich und die ideale Reisalternative',
    description:
      'Die Kolbenhirse (Setaria italica), auch als Italienische Hirse oder Fuchsschwanzhirse bekannt, ist eine der aeltesten Kulturpflanzen der Menschheitsgeschichte. Archaeologische Nachweise aus Nordchina belegen eine Domestizierung vor nahezu 9.000 Jahren. In Europa war die Kolbenhirse von der Antike bis ins Mittelalter ein weit verbreitetes Grundnahrungsmittel -- im Roemischen Reich als "panicum" bekannt, in Italien als Grundlage fuer Polenta und in Mitteleuropa als Hirsebrei. Mit hohem Proteingehalt (12,3 g/100 g), reichlich Ballaststoffen (8,0 g/100 g) und einem niedrigen glykaemischen Index (~50) bietet sie eine fluffige, reisaehnliche Textur beim Kochen. Natuerlich glutenfrei und extrem trockenresistent, erlebt sie im DACH-Raum eine Wiederentdeckung als nachhaltige, naehrstoffreiche Getreidesorte.',

    names: {
      english: 'Foxtail Millet',
      hindi: 'Kangni',
      tamil: 'Thinai',
      telugu: 'Korralu',
      kannada: 'Navane',
      malayalam: 'Thina',
      marathi: 'Kang / Rala',
      bengali: 'Kaon',
      gujarati: 'Kang',
      odia: 'Kangu',
      punjabi: 'Kangni',
      sanskrit: 'Priyangu',
    },

    nutrition: {
      calories: 331,
      protein_g: 12.3,
      fat_g: 4.3,
      carbohydrates_g: 60.9,
      fiber_g: 8.0,
      calcium_mg: 31,
      iron_mg: 2.8,
      zinc_mg: 2.4,
      phosphorus_mg: 290,
      magnesium_mg: 81,
      potassium_mg: 250,
      source: 'DGE Naehrwerttabelle / USDA FoodData Central',
      sourceDetail: 'Deutsche Gesellschaft fuer Ernaehrung, Bonn / USDA Agricultural Research Service',
    },

    glycemicIndex: {
      value: 50,
      category: 'low',
      source: 'International Tables of Glycemic Index and Glycemic Load Values, 2021',
    },

    ayurveda: {
      rasa: ['Nussig, leicht suesslich'],
      guna: ['Leicht', 'Saettigend'],
      virya: 'Leicht waermend',
      vipaka: 'Stufenweise Verdauung',
      doshaEffect: {
        vata: 'increases',
        pitta: 'neutral',
        kapha: 'decreases',
      },
      therapeuticUses: [
        'Hoher pflanzlicher Proteingehalt (12,3 g/100 g) -- ideal fuer vegetarische und vegane Ernaehrung (DGE-Empfehlung: abwechslungsreiche Proteinquellen)',
        'Niedriger glykaemischer Index (~50) -- geeignet fuer Personen mit Diabetes Typ 2',
        'Ballaststoffreich (8,0 g/100 g) -- foerdert Saettigung und einen gesunden Stuhlgang',
        'Gute Quelle fuer B-Vitamine (Thiamin, Niacin) -- wichtig fuer den Energiestoffwechsel',
        'Traegt zum Gewichtsmanagement bei durch langanhaltenden Saettigungseffekt',
      ],
      contraindications: [
        'Enthaelt Goitrogene, die bei sehr hohem Konsum die Schilddruese beeintraechtigen koennen -- Personen mit Schilddruesenerkrankungen sollten aerztlichen Rat einholen',
        'Die Spelzhirse erfordert eine sachgemaesse Schaelbehandlung vor dem Kochen fuer optimale Verdaulichkeit',
      ],
      classicalReference: 'DGE-Ernaehrungsbericht / EFSA Nutrition and Health Claims Register',
    },

    history: {
      originRegion: 'Nordchina (archaeologische Staette Cishan)',
      domesticationPeriod: 'Vor etwa 8.700 Jahren (~6.700 v. Chr.)',
      archaeologicalEvidence:
        'Ueberreste von der archaeologischen Staette Cishan in Nordchina, datiert auf etwa 8.700 Jahre, machen die Kolbenhirse zu einer der aeltesten kultivierten Nutzpflanzen weltweit.',
      spreadPattern:
        'In Nordchina domestiziert, verbreitete sich die Kolbenhirse ueber die zentralasiatischen Handelsrouten westwarts nach Indien, in den Nahen Osten und nach Europa. Waehrend der roemischen Antike und im Mittelalter war sie in ganz Europa weit verbreitet.',
      culturalSignificance:
        'Die Kolbenhirse spielte eine bedeutende Rolle in der europaeischen Ernaehrungsgeschichte. Im Roemischen Reich war Hirsebrei (Puls) ein Grundnahrungsmittel der Bevoelkerung. In Italien diente sie als Grundlage fuer fruehere Formen der Polenta. In Mitteleuropa -- einschliesslich des deutschsprachigen Raums -- war Hirsebrei bis ins 18. Jahrhundert ein Alltagsgericht, bevor Kartoffel und Mais die Hirse verdraengten. Der schweizerische Volksbrauch der "Hirsmontag"-Feier in Basel und die "Breitenauer Hirse" in Baden-Wuerttemberg zeugen von dieser Tradition. Heute erlebt sie eine Renaissance in Bio-Laeden und in der nachhaltigen Landwirtschaft.',
    },

    cultivation: {
      majorStates: [
        'China (Norden)',
        'Indien',
        'Europa (historisch, Renaissance)',
        'Zentralasien',
        'Myanmar',
      ],
      globalRegions: ['China', 'Suedostasien', 'Suedasien', 'Europa (historisch und aktuelle Wiederbelebung)'],
      growingSeason: 'April--September (gemaessigtes Klima)',
      waterRequirement: '300-400 mm Niederschlag',
      soilType: 'Leichte sandige Lehm- bis mittlere Lehmboeden; extrem trockenresistent',
      harvestDays: '75-90 Tage',
    },

    cooking: {
      waterRatio: '1:2,5',
      soakingTime: '30 Minuten',
      cookingTime: '15-20 Minuten',
      texture: 'Locker, reisaehnlich',
      flavorProfile: 'Nussig, leicht suesslich',
      bestSubstituteFor: 'Reis (als Beilage oder in Salaten)',
      tips: [
        'Gruendlich abspuelen und 30 Minuten einweichen fuer ein optimales Ergebnis',
        'Wie Reis kochen -- sie geht schoen locker auf und laesst sich gut mit der Gabel auflockern',
        'Hervorragend als Tabuleh, Getreidesalat oder Pilaf mit saisonalem Gemuese',
        'Eignet sich auch fuer Suessspeisen: Hirsebrei mit Milch, Milchreis-Variante',
        'Vor dem Kochen kurz in der Pfanne anroesten fuer einen intensiveren, nussigen Geschmack',
      ],
    },

    healthBenefits: [
      {
        benefit: 'Hoher Proteingehalt',
        description:
          'Kolbenhirse enthaelt 12,3 g Protein pro 100 g -- einer der hoechsten Werte unter den Hirsearten. Damit ist sie eine hervorragende pflanzliche Proteinquelle, besonders wertvoll fuer Vegetarier und Veganer.',
        evidenceLevel: 'well-established',
        source: 'DGE Naehrwerttabelle / USDA FoodData Central',
      },
      {
        benefit: 'Niedriger glykaemischer Index -- geeignet fuer Diabetiker',
        description:
          'Mit einem glykaemischen Index von etwa 50 setzt Kolbenhirse Glukose langsam frei, was sie zu einem geeigneten Getreide fuer Menschen mit Diabetes Typ 2 macht. Die Deutsche Diabetes Gesellschaft empfiehlt Lebensmittel mit niedrigem GI.',
        evidenceLevel: 'supported-by-research',
        source: 'International Journal of Diabetes in Developing Countries',
      },
      {
        benefit: 'Ballaststoffreich',
        description:
          'Mit 8,0 g Ballaststoffen pro 100 g unterstuetzt Kolbenhirse die Verdauungsgesundheit, foerdert das Saettigungsgefuehl und hilft bei der Aufrechterhaltung eines gesunden Cholesterinspiegels.',
        evidenceLevel: 'well-established',
        source: 'DGE Naehrwerttabelle / USDA FoodData Central',
      },
      {
        benefit: 'Gute Quelle fuer B-Vitamine',
        description:
          'Kolbenhirse ist eine gute Quelle fuer B-Vitamine, insbesondere Thiamin und Niacin, die fuer den Energiestoffwechsel und die Funktion des Nervensystems essenziell sind.',
        evidenceLevel: 'supported-by-research',
        source: 'Journal of Food Science and Technology',
      },
    ],

    sideEffects: [
      {
        condition: 'Goitrogene Inhaltsstoffe',
        description:
          'Kann bei sehr hohem Konsum die Schilddruesenfunktion beeintraechtigen aufgrund goitrogener Verbindungen. Personen mit Schilddruesenerkrankungen sollten massvolle Mengen einhalten und ihren Arzt konsultieren.',
        severity: 'consult-doctor',
      },
      {
        condition: 'Verarbeitungsanforderung',
        description:
          'Die Spelzsorte erfordert vor dem Kochen eine sachgemaesse Schaelbehandlung. Unzureichend verarbeitete Koerner koennen schwer verdaulich sein.',
        severity: 'mild',
      },
    ],

    isGlutenFree: true,
    relatedRecipes: [
      'foxtail-millet-upma',
      'foxtail-millet-pulao',
      'thinai-pongal',
      'foxtail-millet-kheer',
      'foxtail-millet-dosa',
    ],
    sources: [
      'dge-naehrwerttabelle',
      'usda-fdc',
      'efsa-nutrition-claims',
      'lu-cishan-2009',
    ],
  },

  // =============================================
  // KLEINE HIRSE (Little Millet / Kutki)
  // =============================================
  {
    slug: 'little-millet',
    name: 'Kleine Hirse',
    commonName: 'Kleine Hirse',
    scientificName: 'Panicum sumatrense',
    family: 'Poaceae',
    category: 'minor',
    grainType: 'husked',
    imageUrl: '',
    images: {
      grain: '/images/millets/little-millet-grain.webp',
      plant: '/images/millets/little-millet-plant.webp',
      cooked: '/images/millets/little-millet-cooked.webp',
    },
    tagline: 'Das eisenreiche Winzlingskorn -- der perfekte Reisersatz mit hohem Ballaststoffgehalt',
    description:
      'Die Kleine Hirse (Panicum sumatrense) ist ein feinkoerniges Getreide aus der Region der Ostghats in Indien. Trotz ihrer geringen Koernergroesse bietet sie ein beeindruckendes Naehrstoffprofil: einen sehr hohen Eisengehalt (9,3 mg/100 g) und bedeutende Ballaststoffe (7,6 g/100 g). Ihr neutraler Geschmack und ihre reisaehnliche Textur machen sie zum naechsten Hirsersatz fuer Reis unter allen Hirsesorten. Natuerlich glutenfrei, wird sie seit Urzeiten in tribalen Gebieten Zentral- und Suedindiens angebaut. Ihr Potenzial als nachhaltige, naehrstoffreiche Getreidesorte gewinnt zunehmend Aufmerksamkeit in Europa -- im Kontext der DGE-Empfehlung fuer eine pflanzenbasierte, ballaststoffreiche Ernaehrung und der wachsenden Nachfrage nach alternativen Getreidesorten im DACH-Raum.',

    names: {
      english: 'Little Millet',
      hindi: 'Kutki',
      tamil: 'Samai',
      telugu: 'Samalu',
      kannada: 'Same',
      malayalam: 'Chama',
      marathi: 'Vari / Sav',
      bengali: 'Sama',
      gujarati: 'Gajro / Moraiyo',
      odia: 'Suan',
      punjabi: 'Swank',
      sanskrit: 'Shyamaka',
    },

    nutrition: {
      calories: 341,
      protein_g: 7.7,
      fat_g: 4.7,
      carbohydrates_g: 67.0,
      fiber_g: 7.6,
      calcium_mg: 17,
      iron_mg: 9.3,
      zinc_mg: 3.7,
      phosphorus_mg: 220,
      magnesium_mg: 133,
      potassium_mg: 129,
      source: 'DGE Naehrwerttabelle / USDA FoodData Central',
      sourceDetail: 'Deutsche Gesellschaft fuer Ernaehrung, Bonn / USDA Agricultural Research Service',
    },

    glycemicIndex: {
      value: 52,
      category: 'low',
      source: 'International Tables of Glycemic Index and Glycemic Load Values, 2021',
    },

    ayurveda: {
      rasa: ['Mild-suesslich, neutral'],
      guna: ['Leicht verdaulich'],
      virya: 'Kuehlend',
      vipaka: 'Sanfte Verdauung',
      doshaEffect: {
        vata: 'neutral',
        pitta: 'decreases',
        kapha: 'neutral',
      },
      therapeuticUses: [
        'Sehr hoher Eisengehalt (9,3 mg/100 g) -- ideal zur Vorbeugung von Eisenmangelanaemie (DGE-Referenzwert: 10-15 mg/Tag)',
        'Ballaststoffreich (7,6 g/100 g) -- unterstuetzt die Verdauungsgesundheit und regelmaessigen Stuhlgang',
        'Niedriger glykaemischer Index (~52) -- geeignet fuer die Ernaehrung bei Diabetes Typ 2',
        'Milde, neutrale Eigenschaften machen sie gut vertraeglich auch bei empfindlicher Verdauung',
        'Geeignet fuer Schonkost und Ernaehrung in der Rekonvaleszenz',
      ],
      contraindications: [
        'Wenige Gegenanzeigen dank der ausgewogenen Naehrstoffbalance',
        'Einweichen vor dem Kochen empfohlen, um den Phytatgehalt zu reduzieren und die Mineralstoffaufnahme zu verbessern',
      ],
      classicalReference: 'DGE-Ernaehrungsbericht / EFSA Nutrition and Health Claims Register',
    },

    history: {
      originRegion: 'Region der Ostghats, Indien',
      domesticationPeriod: 'Alte Zeiten (genaue Periode unbekannt)',
      archaeologicalEvidence:
        'Urspruenglich in Indien beheimatet, hat die Kleine Hirse eine lange Anbaugeschichte in tribalen Gebieten Zentral- und Suedindiens. Archaeologische Dokumente sind begrenzt, jedoch stuetzen ethnobotanische Belege eine sehr fruehe Kultivierung.',
      spreadPattern:
        'In der Region der Ostghats Indiens domestiziert, blieb die Kleine Hirse ueberwiegend eine indische Kulturpflanze, die in tribalen und regenabhaengigen Landwirtschaftsregionen angebaut wird. Eine bescheidene Verbreitung nach Myanmar und Sri Lanka fand statt.',
      culturalSignificance:
        'Die Kleine Hirse ist eine wichtige Kulturpflanze fuer indigene Gemeinschaften in Zentralindien, wo sie seit Jahrtausenden als Grundnahrungsmittel dient. Ihr neutraler Geschmack und die reisaehnliche Textur machen sie zu einem leicht zugaenglichen Einstieg in die Hirseernaehrung. In Europa verkuerpert dieses bescheidene Korn die Philosophie der wiederentdeckten Getreidearten -- wertvoll fuer nachhaltige Landwirtschaft, Bodengesundheit und Ernaehrungssicherheit. Im DACH-Raum gewinnen solche "vergessenen Getreide" (Ancient Grains) zunehmend an Bedeutung in Bio-Maerkten und bei ernaehrungsbewussten Verbrauchern.',
    },

    cultivation: {
      majorStates: ['Indien (Zentral und Sued)', 'Myanmar', 'Sri Lanka'],
      globalRegions: ['Suedasien (vorwiegend Indien)', 'Suedostasien (Myanmar, Sri Lanka)'],
      growingSeason: 'April--September (gemaessigtes Klima); Regenzeit in den Tropen',
      waterRequirement: '300-500 mm Niederschlag',
      soilType: 'Sandige Lehm- bis rote Lateritboeden; waechst gut auf marginalen Standorten',
      harvestDays: '75-90 Tage',
    },

    cooking: {
      waterRatio: '1:2,5',
      soakingTime: '30 Minuten',
      cookingTime: '15 Minuten',
      texture: 'Sehr reisaehnlich, leicht klebrig',
      flavorProfile: 'Mild, neutral',
      bestSubstituteFor: 'Reis (engster Ersatz unter allen Hirsearten)',
      tips: [
        '30 Minuten einweichen und gruendlich abspuelen fuer bessere Verdaulichkeit',
        'Genau wie Reis kochen -- die Kleine Hirse ist die einfachste Hirsesorte fuer den Umstieg',
        'Hervorragend als Getreidesalat, Pilaf oder warme Beilage mit Gemuese',
        'Laesst sich gut im Reiskocher oder in der Kasserolle mit etwas Olivenoel zubereiten',
        'Der neutrale Geschmack macht sie vielseitig einsetzbar -- sowohl fuer herzhafte als auch fuer suesse Gerichte',
      ],
    },

    healthBenefits: [
      {
        benefit: 'Sehr hoher Eisengehalt',
        description:
          'Kleine Hirse enthaelt 9,3 mg Eisen pro 100 g -- einer der hoechsten Werte unter allen Hirsearten und Getreidesorten. Dies macht sie zu einer wertvollen Unterstuetzung bei der Vorbeugung und dem Management von Eisenmangelanaemie. Der DGE-Referenzwert liegt bei 10-15 mg Eisen taeglich.',
        evidenceLevel: 'well-established',
        source: 'DGE Naehrwerttabelle / USDA FoodData Central',
      },
      {
        benefit: 'Gute Ballaststoffquelle fuer die Verdauungsgesundheit',
        description:
          'Mit 7,6 g Ballaststoffen pro 100 g unterstuetzt Kleine Hirse eine gesunde Verdauung, regelmaessigen Stuhlgang und kann zur Senkung des Cholesterinspiegels beitragen. Die DGE empfiehlt mindestens 30 g Ballaststoffe pro Tag.',
        evidenceLevel: 'well-established',
        source: 'DGE Naehrwerttabelle / USDA FoodData Central',
      },
      {
        benefit: 'Niedriger GI -- geeignet fuer Diabetiker',
        description:
          'Mit einem glykaemischen Index von etwa 52 sorgt Kleine Hirse fuer eine langsame und gleichmaessige Glukosefreisetzung, was sie fuer das Diabetesmanagement geeignet macht.',
        evidenceLevel: 'supported-by-research',
        source: 'International Journal of Food Sciences and Nutrition',
      },
      {
        benefit: 'Reich an Antioxidantien',
        description:
          'Enthaelt phenolische Verbindungen und Flavonoide, die zur antioxidativen Aktivitaet beitragen koennen, obwohl weitere Forschung erforderlich ist, um diese Vorteile vollstaendig zu charakterisieren.',
        evidenceLevel: 'preliminary-evidence',
        source: 'Journal of Food Science and Technology',
      },
    ],

    sideEffects: [
      {
        condition: 'Blaehungen ohne Einweichen',
        description:
          'Kann Blaehungen verursachen, wenn sie vor dem Kochen nicht eingeweicht wird. Ein Einweichen von mindestens 30 Minuten wird empfohlen, um die Verdaulichkeit zu verbessern.',
        severity: 'mild',
      },
      {
        condition: 'Antinaehrstoffgehalt',
        description:
          'Enthaelt Phytate (Antinaehrstoffe), die die Mineralstoffaufnahme verringern koennen. Einweichen, Keimen oder Fermentieren reduziert den Phytatgehalt erheblich.',
        severity: 'moderate',
      },
    ],

    isGlutenFree: true,
    relatedRecipes: [
      'little-millet-rice',
      'samai-pulao',
      'little-millet-pongal',
      'samai-upma',
      'little-millet-payasam',
    ],
    sources: [
      'dge-naehrwerttabelle',
      'usda-fdc',
      'efsa-nutrition-claims',
      'ren-millets-polyphenols-2016',
    ],
  },
];
