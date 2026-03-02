import type { Millet } from '@/lib/types';

export const minorMillets: Millet[] = [
  // =============================================
  // KODOHIRSE (KODO MILLET)
  // =============================================
  {
    slug: 'kodo-millet',
    name: 'Kodohirse',
    commonName: 'Kodo / Kodra',
    scientificName: 'Paspalum scrobiculatum',
    family: 'Poaceae',
    category: 'minor',
    grainType: 'husked',
    imageUrl: '',
    images: {
      grain: '/images/millets/kodo-millet-grain.webp',
      plant: '/images/millets/kodo-millet-plant.webp',
      cooked: '/images/millets/kodo-millet-cooked.webp',
    },
    tagline: 'Das kalorienarmste Hirse-Getreide mit hohem Antioxidantiengehalt und niedrigem glykamischen Index',
    description:
      'Die Kodohirse (Paspalum scrobiculatum) ist ein widerstandsfahiges, trockenheitsresistentes Getreide, das seit uber 3.000 Jahren auf dem indischen Subkontinent angebaut wird. Mit nur 309 Kalorien pro 100 g ist sie die kalorienarmste aller Hirsearten und zeichnet sich durch einen aussergewohnlich hohen Gehalt an antioxidativen Polyphenolen aus. Ihr niedriger glykamischer Index (ca. 48) macht sie zu einer interessanten Option fur die ernahrungsbewusste Kuche. In Deutschland und Osterreich ist die Kodohirse vor allem in Biomarkten und Reformhausern als Spezialitat erhaltlich. Ihr mildes, erdiges Aroma und die reisahnliche Textur machen sie zu einem vielseitigen Begleiter in der mitteleuropaischen Kuche.',

    names: {
      english: 'Kodo Millet',
      hindi: 'Kodo / Kodra',
      tamil: 'Varagu',
      telugu: 'Arikelu',
      kannada: 'Haraka',
      malayalam: 'Varaku',
      marathi: 'Kodra',
      bengali: 'Kodo',
      gujarati: 'Kodra',
      odia: 'Kodo',
      punjabi: 'Kodo',
      sanskrit: 'Kodrava',
    },

    nutrition: {
      calories: 309,
      protein_g: 8.3,
      fat_g: 1.4,
      carbohydrates_g: 65.9,
      fiber_g: 9.0,
      calcium_mg: 27,
      iron_mg: 0.5,
      zinc_mg: 0.7,
      phosphorus_mg: 188,
      magnesium_mg: 147,
      potassium_mg: 144,
      source: 'DGE Nahrwerttabelle / USDA FoodData Central',
      sourceDetail: 'Deutsche Gesellschaft fur Ernahrung / USDA Agricultural Research Service',
    },

    glycemicIndex: {
      value: 48,
      category: 'low',
      source: 'Internationale Tabellen des Glykamischen Index, Foster-Powell et al., 2021',
    },

    ayurveda: {
      rasa: ['Milder, leicht suesser Geschmack mit herber Note'],
      guna: ['Leicht verdaulich', 'Trocken'],
      virya: 'Kuhlende Wirkung',
      vipaka: 'Langsame Verdauung',
      doshaEffect: {
        vata: 'increases',
        pitta: 'decreases',
        kapha: 'decreases',
      },
      therapeuticUses: [
        'Niedriger glykamischer Index (ca. 48) — laut DGE guenstig fur die Blutzuckerregulation',
        'Hoher Gehalt an antioxidativen Polyphenolen, die laut EFSA zum Schutz der Zellen vor oxidativem Stress beitragen koennen',
        'Niedrigster Kaloriengehalt aller Hirsearten (309 kcal/100 g) — geeignet fur kalorienreduzierte Ernahrungsformen',
        'Hoher Ballaststoffgehalt (9,0 g/100 g) unterstuetzt die Verdauungsgesundheit gemaess DGE-Empfehlungen',
        'Natuerlich glutenfrei — geeignet fur Personen mit Zoeliakie oder Glutenunvertraglichkeit',
      ],
      contraindications: [
        'Muss von seriosen Anbietern bezogen werden, um Schimmelpilzkontamination zu vermeiden',
        'Langes Einweichen empfohlen, um die Verdaulichkeit zu verbessern',
      ],
      classicalReference: 'DGE Nahrwerttabelle / USDA FoodData Central',
    },

    history: {
      originRegion: 'Indischer Subkontinent',
      domesticationPeriod: 'Vor etwa 3.000 Jahren',
      archaeologicalEvidence:
        'Die Kodohirse stammt urspruenglich aus Indien, wo sie seit Jahrtausenden insbesondere in den Stammesgebieten Zentralindiens (Madhya Pradesh, Chhattisgarh) angebaut wird. Obwohl die formalen archaologischen Belege begrenzt sind, existieren umfangreiche ethnobotanische Aufzeichnungen ueber ihren Anbau.',
      spreadPattern:
        'Die Kodohirse wurde in Indien domestiziert und verbreitete sich nach Suedostasien und Westafrika. In Europa ist sie bisher nur als Spezialitat in Biomarkten und ueber den Online-Handel erhaltlich.',
      culturalSignificance:
        'Die Kodohirse ist ein wichtiges Nahrungsmittel fur die Ernahrungssicherheit indigener Gemeinschaften in Zentralindien. In der internationalen Ernahrungsforschung gewinnt sie zunehmend an Bedeutung aufgrund ihres bemerkenswerten Antioxidantien-Profils. Im deutschsprachigen Raum wird sie vor allem von ernahrungsbewussten Verbrauchern und in der Vollwertkueche entdeckt.',
    },

    cultivation: {
      majorStates: ['Indien (Zentral- und Suedindien)', 'Suedostasien', 'Westafrika'],
      globalRegions: ['Suedasien (Indien)', 'Suedostasien', 'Westafrika'],
      growingSeason: 'Regenzeit (Juni-Oktober)',
      waterRequirement: '400-500 mm Niederschlag',
      soilType: 'Kiesige, lateritische und flachgruendige Boeden; gedeiht auch auf nahrstoffarmen Boeden',
      harvestDays: '90-120 Tage',
    },

    cooking: {
      waterRatio: '1:2,5',
      soakingTime: '6-8 Stunden',
      cookingTime: '20-25 Minuten',
      texture: 'Reisaehnlich, aber etwas fester',
      flavorProfile: 'Mild, erdig',
      bestSubstituteFor: 'Reis (als Beilage oder in Salaten)',
      tips: [
        '6-8 Stunden oder ueber Nacht einweichen fuer optimale Ergebnisse',
        'Nach dem Einweichen gruendlich abspuelen, um eventuelle Bitterstoffe zu entfernen',
        'Wie Reis im Topf kochen — die Koerner trennen sich gut',
        'Hervorragend in Getreidesalaten, als Beilage zu Schmorgerichten oder in Auflaeufen',
        'Nur von zertifizierten Anbietern kaufen, um einwandfreie Verarbeitung sicherzustellen',
      ],
    },

    healthBenefits: [
      {
        benefit: 'Aussergewoehnlich hoher Gehalt an antioxidativen Polyphenolen',
        description:
          'Kodohirse ist besonders reich an polyphenolischen Verbindungen mit starken antioxidativen Eigenschaften. Laut EFSA tragen Antioxidantien dazu bei, die Zellen vor oxidativem Stress und vorzeitiger Alterung zu schuetzen.',
        evidenceLevel: 'supported-by-research',
        source: 'Journal of Food Science and Technology',
      },
      {
        benefit: 'Hoher Ballaststoffgehalt fuer die Verdauungsgesundheit',
        description:
          'Mit 9,0 g Ballaststoffen pro 100 g unterstuetzt Kodohirse eine gesunde Verdauung, foerdert die Darmregularitaet und kann laut DGE zur Aufrechterhaltung eines gesunden Cholesterinspiegels beitragen.',
        evidenceLevel: 'well-established',
        source: 'DGE Nahrwerttabelle / USDA FoodData Central',
      },
      {
        benefit: 'Niedrigster Kaloriengehalt unter den Hirsearten',
        description:
          'Mit 309 Kalorien pro 100 g hat die Kodohirse den niedrigsten Energiegehalt unter den gaengigen Hirsearten, was sie besonders geeignet fuer eine kalorienbewusste Ernaehrung macht.',
        evidenceLevel: 'well-established',
        source: 'DGE Nahrwerttabelle / USDA FoodData Central',
      },
      {
        benefit: 'Niedriger glykamischer Index fuer eine stabile Blutzuckerregulation',
        description:
          'Mit einem glykamischen Index von etwa 48 setzt Kodohirse Glukose langsam ins Blut frei. Die Deutsche Diabetes Gesellschaft empfiehlt Lebensmittel mit niedrigem GI zur Unterstuetzung der Blutzuckerkontrolle.',
        evidenceLevel: 'supported-by-research',
        source: 'International Tables of Glycemic Index, Foster-Powell et al.',
      },
    ],

    sideEffects: [
      {
        condition: 'Risiko einer Schimmelpilzkontamination (Kodua-Vergiftung)',
        description:
          'Unsachgemaess gelagerte oder verarbeitete Kodohirse kann durch Schimmelpilze (Aspergillus flavus) kontaminiert sein, was zu Uebelkeit, Zittern und Schlafrigkeit fuehren kann. Es ist wichtig, nur von seriosen Quellen zu beziehen und das Getreide trocken zu lagern.',
        severity: 'consult-doctor',
      },
      {
        condition: 'Bitterkeit bei unzureichender Verarbeitung',
        description:
          'Kann eine leichte Bitterkeit aufweisen, wenn das Korn nicht ordnungsgemaess verarbeitet wurde. Gruendliches Waschen, Einweichen und Spuelen helfen, unerwuenschte Geschmacksnoten zu beseitigen.',
        severity: 'mild',
      },
    ],

    isGlutenFree: true,
    relatedRecipes: [
      'kodo-millet-rice',
      'varagu-pongal',
      'kodo-millet-upma',
      'varagu-pulao',
      'kodo-millet-khichdi',
    ],
    sources: [
      'dge-nahrwerttabelle',
      'usda-fdc',
      'efsa-polyphenols-health-claims',
      'foster-powell-gi-tables-2021',
    ],
  },

  // =============================================
  // JAPANISCHE HIRSE (BARNYARD MILLET)
  // =============================================
  {
    slug: 'barnyard-millet',
    name: 'Japanische Hirse',
    commonName: 'Japanische Hirse / Huehnerhirse',
    scientificName: 'Echinochloa esculenta',
    family: 'Poaceae',
    category: 'minor',
    grainType: 'husked',
    imageUrl: '',
    images: {
      grain: '/images/millets/barnyard-millet-grain.webp',
      plant: '/images/millets/barnyard-millet-plant.webp',
      cooked: '/images/millets/barnyard-millet-cooked.webp',
    },
    tagline: 'Die ballaststoffreichste Hirse mit dem niedrigsten glykamischen Index aller Hirsearten',
    description:
      'Die Japanische Hirse (Echinochloa esculenta) ist die am schnellsten wachsende Hirseart und erreicht die Reife in nur 60 Tagen. Sie zeichnet sich durch den hoechsten Ballaststoffgehalt (9,8 g pro 100 g) und den niedrigsten glykamischen Index (~44) aller gaengigen Hirsearten aus. Es existieren zwei unabhaengige Domestikationsereignisse: die indische Variante (E. frumentacea) und die japanische Variante (E. esculenta). Ihre fluffige, reisaehnliche Textur und ihr neutraler Geschmack machen sie zu einem unkomplizierten Reisersatz, der sich hervorragend in die mitteleuropaeische Alltagskueche integrieren laesst — ob als Beilage zu Schmorgerichten, in Auflaeufen oder als Grundlage fuer Getreidesalate.',

    names: {
      english: 'Barnyard Millet',
      hindi: 'Sanwa / Jhangora',
      tamil: 'Kuthiraivali',
      telugu: 'Udalu',
      kannada: 'Oodalu',
      malayalam: 'Kuthiravali',
      marathi: 'Bhagar',
      bengali: 'Shyamadhan',
      gujarati: 'Moraiyo',
      odia: 'Khira',
      punjabi: 'Sanwa',
      sanskrit: 'Shyamaka',
    },

    nutrition: {
      calories: 307,
      protein_g: 6.2,
      fat_g: 2.2,
      carbohydrates_g: 65.5,
      fiber_g: 9.8,
      calcium_mg: 20,
      iron_mg: 5.0,
      zinc_mg: 3.0,
      phosphorus_mg: 280,
      magnesium_mg: 82,
      potassium_mg: 0,
      source: 'DGE Nahrwerttabelle / USDA FoodData Central',
      sourceDetail: 'Deutsche Gesellschaft fur Ernahrung / USDA Agricultural Research Service',
    },

    glycemicIndex: {
      value: 44,
      category: 'low',
      source: 'Internationale Tabellen des Glykamischen Index, Foster-Powell et al., 2021',
    },

    ayurveda: {
      rasa: ['Suesser, leicht herber Geschmack'],
      guna: ['Leicht verdaulich'],
      virya: 'Kuhlende Wirkung',
      vipaka: 'Sanfte Verdauung',
      doshaEffect: {
        vata: 'neutral',
        pitta: 'decreases',
        kapha: 'neutral',
      },
      therapeuticUses: [
        'Niedrigster glykamischer Index aller gaengigen Hirsearten (~44) — laut DGE ideal fuer die Blutzuckerkontrolle',
        'Hoechster Ballaststoffgehalt unter den gaengigen Hirsearten (9,8 g/100 g) — foerdert die Darmgesundheit gemaess EFSA-Richtlinien',
        'Gute Eisenquelle (5,0 mg/100 g) — tragt laut EFSA zur Verringerung von Muedigkeit und zur normalen Blutbildung bei',
        'Leicht und gut verdaulich — geeignet als Schonkost in der Genesungsphase',
        'Foerdert die Sattigung und unterstuetzt das Gewichtsmanagement durch den hohen Ballaststoffanteil',
      ],
      contraindications: [
        'Kann Blaehungen verursachen, wenn vor dem Kochen nicht ausreichend eingeweicht wird',
        'Niedrigerer Proteingehalt (6,2 g/100 g) — sollte mit anderen Proteinquellen kombiniert werden',
      ],
      classicalReference: 'DGE Nahrwerttabelle / USDA FoodData Central',
    },

    history: {
      originRegion: 'Tropisches Asien (Indischer Subkontinent und Japan)',
      domesticationPeriod: 'Mehrere tausend Jahre (genaue Periode ungesichert)',
      archaeologicalEvidence:
        'Die Japanische Hirse stammt aus dem tropischen Asien und wird in Indien seit Jahrtausenden in regenabhaengigen Gebieten angebaut. In Japan wurde die Art Echinochloa esculenta unabhaengig domestiziert — ein bemerkenswertes Beispiel fuer parallele Kulturpflanzenentwicklung auf zwei Kontinenten.',
      spreadPattern:
        'Hauptsaechlich in Suedasien (Indien, Nepal) und Japan angebaut. In Europa gewinnt die Japanische Hirse zunehmend Beachtung in Biofachgeschaeften und der ernahrungswissenschaftlichen Forschung, insbesondere in Deutschland und der Schweiz.',
      culturalSignificance:
        'Die Japanische Hirse ist ein wichtiges Getreide zur Ernahrungssicherung in Bergregionen Indiens (Uttarakhand) und gehoert in Japan zum alten landwirtschaftlichen Kulturerbe. Ihre doppelte Domestikation in Indien und Japan bezeugt die Bedeutung, die alte Zivilisationen dieser robusten Getreideart beimassen. In Mitteleuropa wird sie als Teil der wachsenden Bewegung fuer alternative Getreide und nachhaltige Ernahrung wiederentdeckt.',
    },

    cultivation: {
      majorStates: ['Indien (Uttarakhand)', 'Japan', 'Nepal', 'Suedostasien'],
      globalRegions: ['Suedasien (Indien, Nepal)', 'Japan', 'Suedostasien'],
      growingSeason: 'Sommer (Juni-September)',
      waterRequirement: '350-500 mm Niederschlag',
      soilType: 'Gedeiht auf marginalen, staunassen und sogar salzhaltigen Boeden',
      harvestDays: '60-90 Tage (am schnellsten wachsende Hirseart)',
    },

    cooking: {
      waterRatio: '1:3',
      soakingTime: '2-4 Stunden',
      cookingTime: '15-20 Minuten',
      texture: 'Fluffig, reisaehnlich',
      flavorProfile: 'Mild, neutral',
      bestSubstituteFor: 'Reis (als Beilage und in Salaten)',
      tips: [
        '2-4 Stunden vor dem Kochen einweichen fuer eine optimale Textur',
        'Wie Reis im Topf kochen, mit etwas mehr Wasser',
        'Hervorragend als Risotto-Ersatz — die fluffige Textur nimmt Saucen gut auf',
        'Eignet sich ideal als Beilage zu Schmorgerichten, in Auflaeufen oder als Grundlage fuer Getreidesalate',
        'Kurz in der Pfanne anroesten vor dem Kochen fuer einen nussigeren Geschmack',
      ],
    },

    healthBenefits: [
      {
        benefit: 'Hoechster Ballaststoffgehalt unter den gaengigen Hirsearten',
        description:
          'Die Japanische Hirse enthaelt 9,8 g Ballaststoffe pro 100 g — der hoechste Wert unter den gaengig verfuegbaren Hirsearten. Dieser aussergewoehnliche Ballaststoffgehalt unterstuetzt die Verdauungsgesundheit, foerdert die Sattigung und kann laut DGE zur Aufrechterhaltung gesunder Cholesterinwerte beitragen.',
        evidenceLevel: 'well-established',
        source: 'USDA FoodData Central / wissenschaftliche Fachliteratur',
      },
      {
        benefit: 'Niedrigster glykamischer Index aller gaengigen Hirsearten',
        description:
          'Mit einem GI von etwa 44 hat die Japanische Hirse den niedrigsten glykamischen Index unter den gaengig verfuegbaren Hirsearten. Die Deutsche Diabetes Gesellschaft bestaetigt: Lebensmittel mit niedrigem GI unterstuetzen eine stabile Blutzuckerregulation.',
        evidenceLevel: 'supported-by-research',
        source: 'International Journal of Food Sciences and Nutrition',
      },
      {
        benefit: 'Gute Eisenquelle',
        description:
          'Mit 5,0 mg Eisen pro 100 g ist die Japanische Hirse eine wertvolle pflanzliche Eisenquelle. Laut EFSA traegt Eisen zur normalen Bildung roter Blutkoerperchen und zur Verringerung von Muedigkeit bei — besonders wichtig bei vegetarischer und veganer Ernaehrung.',
        evidenceLevel: 'well-established',
        source: 'USDA FoodData Central / wissenschaftliche Fachliteratur',
      },
      {
        benefit: 'Leicht verdaulich und magenfreundlich',
        description:
          'Dank ihrer Leichtigkeit und guten Verdaulichkeit eignet sich die Japanische Hirse als Schonkost. Sie liefert nachhaltige Energie ohne ein Voellegefuehl zu verursachen.',
        evidenceLevel: 'traditional-knowledge',
      },
    ],

    sideEffects: [
      {
        condition: 'Blaehungen bei unzureichendem Einweichen',
        description:
          'Kann Blahungen und Voellegefuehl verursachen, wenn vor dem Kochen nicht ausreichend eingeweicht wird. Ein Einweichen von 2-4 Stunden verbessert die Verdaulichkeit erheblich.',
        severity: 'mild',
      },
      {
        condition: 'Phytatgehalt',
        description:
          'Enthaelt Phytate (Antinaehrstoffe), die die Mineralstoffaufnahme beeintraechtigen koennen. Einweichen und Kochen reduzieren den Phytatgehalt deutlich, wie das Bundesinstitut fuer Risikobewertung (BfR) bestaetigt.',
        severity: 'mild',
      },
    ],

    isGlutenFree: true,
    relatedRecipes: [
      'samo-khichdi',
      'jhangora-kheer',
      'barnyard-millet-pulao',
      'moraiyo-upma',
      'barnyard-millet-dosa',
    ],
    sources: [
      'dge-nahrwerttabelle',
      'usda-fdc',
      'efsa-iron-health-claims',
      'foster-powell-gi-tables-2021',
    ],
  },

  // =============================================
  // RISPENHIRSE (PROSO MILLET)
  // =============================================
  {
    slug: 'proso-millet',
    name: 'Rispenhirse',
    commonName: 'Rispenhirse / Echte Hirse',
    scientificName: 'Panicum miliaceum',
    family: 'Poaceae',
    category: 'minor',
    grainType: 'naked',
    imageUrl: '',
    images: {
      grain: '/images/millets/proso-millet-grain.webp',
      plant: '/images/millets/proso-millet-plant.webp',
      cooked: '/images/millets/proso-millet-cooked.webp',
    },
    tagline: 'Die historische Hirse Mitteleuropas — Grundnahrungsmittel vom Mittelalter bis zur Neuzeit',
    description:
      'Die Rispenhirse (Panicum miliaceum) ist DIE Hirse der deutschen und mitteleuropaeischen Geschichte. Sie ist die aelteste domestizierte Hirseart der Welt, mit archaologischen Funden aus Cishan in China, die auf etwa 8.000 v. Chr. datieren. Von China gelangte sie ueber Zentralasien nach Europa, wo sie Jahrhunderte lang das wichtigste Grundnahrungsmittel war — lange bevor Kartoffeln, Mais oder Weizen diese Rolle uebernahmen. Der „Hirsebrei" war das Alltagsgericht des mittelalterlichen Deutschlands schlechthin. Archaologische Funde belegen ihren Anbau in ganz Deutschland, Oesterreich und der Schweiz. Das deutsche Sprichwort „Wer Hirse saet, hat immer zu essen" zeugt von ihrer einstigen Bedeutung. Mit 12,5 g Protein pro 100 g hat sie den hoechsten Proteingehalt unter den Nebenhirsen und eine Wachstumszeit von nur 60-75 Tagen. In Brandenburg, Bayern und Oesterreich wird sie bis heute in kleinen Mengen angebaut — ein lebendiges Stueck mitteleuropaeischer Agrargeschichte.',

    names: {
      english: 'Proso Millet',
      hindi: 'Chena / Bari',
      tamil: 'Panivaragu',
      telugu: 'Varigelu',
      kannada: 'Baragu',
      malayalam: 'Panivaraku',
      marathi: 'Vari',
      bengali: 'China',
      gujarati: 'Cheno',
      odia: 'Bagu',
      punjabi: 'China',
      sanskrit: 'Chinaka',
    },

    nutrition: {
      calories: 341,
      protein_g: 12.5,
      fat_g: 1.1,
      carbohydrates_g: 70.4,
      fiber_g: 2.2,
      calcium_mg: 14,
      iron_mg: 0.8,
      zinc_mg: 1.4,
      phosphorus_mg: 206,
      magnesium_mg: 153,
      potassium_mg: 113,
      source: 'DGE Nahrwerttabelle / USDA FoodData Central',
      sourceDetail: 'Deutsche Gesellschaft fur Ernahrung / USDA Agricultural Research Service',
    },

    glycemicIndex: {
      value: 56,
      category: 'low',
      source: 'Internationale Tabellen des Glykamischen Index, Foster-Powell et al., 2021',
    },

    ayurveda: {
      rasa: ['Suesser, leicht herber Geschmack'],
      guna: ['Leicht verdaulich', 'Trocken'],
      virya: 'Waermende Wirkung',
      vipaka: 'Langsame Verdauung',
      doshaEffect: {
        vata: 'neutral',
        pitta: 'neutral',
        kapha: 'decreases',
      },
      therapeuticUses: [
        'Hoechster Proteingehalt unter den Nebenhirsen (12,5 g/100 g) — unterstuetzt laut DGE den Erhalt und Aufbau von Muskelmasse',
        'Enthaelt Lecithin, ein Phospholipid, das laut wissenschaftlicher Studien die Leberfunktion unterstuetzen kann',
        'Gute Quelle fuer B-Vitamine, insbesondere Niacin (B3), das laut EFSA zum normalen Energiestoffwechsel beitraegt',
        'Reich an Magnesium (153 mg/100 g) — laut EFSA wichtig fuer die normale Muskelfunktion und das Nervensystem',
        'Sehr geringer Wasserbedarf (250-400 mm) — vorbildlich fuer nachhaltige Landwirtschaft im Kontext des Klimawandels',
      ],
      contraindications: [
        'Enthaelt Goitrogene, die bei uebermassigem Verzehr die Schilddruesenfunktion beeintraechtigen koennen — bei Schilddruesenerkrankungen massvollen Konsum mit dem Arzt besprechen',
        'Enthaelt Phytate — Einweichen und Kochen reduzieren den Antinaehrstoffgehalt',
      ],
      classicalReference: 'DGE Nahrwerttabelle / USDA FoodData Central',
    },

    history: {
      originRegion: 'Nordchina (archaologische Staette Cishan)',
      domesticationPeriod: 'Vor etwa 10.000 Jahren (~8.000 v. Chr.) — die aelteste domestizierte Hirseart',
      archaeologicalEvidence:
        'Die Ausgrabungen an der Staette Cishan in China haben Ueberreste von Rispenhirse freigelegt, die auf etwa 8.000 v. Chr. datiert werden. Damit ist die Rispenhirse die aelteste domestizierte Hirseart der Menschheitsgeschichte. In Deutschland, Oesterreich und der Schweiz wurden an zahlreichen mittelalterlichen Ausgrabungsstaetten Hirsefunde gemacht — darunter in Bayern, Brandenburg, Sachsen und der Steiermark. Pfahlbauten am Bodensee und am Zuerichsee belegen den Hirseanbau bereits in der Bronzezeit.',
      spreadPattern:
        'Von China breitete sich die Rispenhirse westwarts ueber Zentralasien bis nach Europa aus. Sie wurde zum Grundnahrungsmittel des Roemischen Reiches und des gesamten mittelalterlichen Europas. In den deutschsprachigen Laendern war der „Hirsebrei" das Alltagsgericht der Bevoelkerung, bevor Kartoffeln und Mais im 17.-18. Jahrhundert diese Rolle uebernahmen. Plinius der Aeltere beschrieb ihren Anbau bereits im 1. Jahrhundert n. Chr.',
      culturalSignificance:
        'Die Rispenhirse ist die historisch bedeutendste Getreideart fuer Mitteleuropa. „Hirsebrei" — Hirsebrei gekocht mit Milch oder Bruehe — war DAS Alltagsgericht des deutschen Mittelalters. Das Sprichwort „Wer Hirse saet, hat immer zu essen" bezeugt ihre Bedeutung fuer die Ernahrungssicherheit. In der Steiermark (Oesterreich) gibt es bis heute das „Hirschbirnenhirsepfandl" als Regionalspezialitaet. In Brandenburg und Bayern wird Rispenhirse in kleinen Mengen wieder angebaut, getragen von der Bewegung fuer regionale und historische Getreidesorten. Die Rispenhirse ist auch der Namensgeber fuer zahlreiche Ortsnamen im deutschsprachigen Raum (z.B. Hirschberg, Hirsau).',
    },

    cultivation: {
      majorStates: ['Brandenburg (Deutschland)', 'Bayern (Deutschland)', 'Steiermark (Oesterreich)', 'Schweiz', 'China', 'Russland'],
      globalRegions: [
        'China',
        'Russland',
        'Zentralasien',
        'Mitteleuropa (historisch und gegenwaertig in kleinem Umfang)',
        'Nordamerika (hauptsaechlich als Vogelfutter)',
      ],
      growingSeason: 'Sommer (Juni-September)',
      waterRequirement: '250-400 mm Niederschlag',
      soilType: 'Leichte, gut durchlaessige Boeden; vertraegt naehrstoffarme Boeden',
      harvestDays: '60-75 Tage (kuerzeste Wachstumsperiode aller Hirsearten)',
    },

    cooking: {
      waterRatio: '1:3',
      soakingTime: '20-30 Minuten',
      cookingTime: '15-20 Minuten',
      texture: 'Fluffig, couscousaehnlich',
      flavorProfile: 'Mild, leicht suesslich',
      bestSubstituteFor: 'Couscous, Reis, Graupen',
      tips: [
        '20-30 Minuten vor dem Kochen einweichen fuer eine optimale Textur',
        'Wie Reis im Topf kochen — die Koerner werden fluffig und locker',
        'Die couscousaehnliche Textur macht sie ideal als Grundlage fuer Getreidesalate und Tabbouleh',
        'In der Pfanne trocken anroesten vor dem Kochen fuer ein nussigeres, aromatischeres Ergebnis',
        'Kann zu Mehl gemahlen werden fuer Pfannkuchen, Palatschinken oder als Suppeneinlage',
        'Fuer einen authentischen „Hirsebrei" wie im Mittelalter: Hirse in Milch kochen, mit Honig und Zimt servieren',
      ],
    },

    healthBenefits: [
      {
        benefit: 'Hoechster Proteingehalt unter den Nebenhirsen',
        description:
          'Rispenhirse enthaelt 12,5 g Protein pro 100 g — der hoechste Wert unter den Nebenhirsen. Damit ist sie eine ausgezeichnete pflanzliche Proteinquelle, besonders wertvoll fuer vegetarische und vegane Ernaehrungsformen, wie die DGE fuer pflanzliche Proteinquellen empfiehlt.',
        evidenceLevel: 'well-established',
        source: 'DGE Nahrwerttabelle / USDA FoodData Central',
      },
      {
        benefit: 'Lecithin unterstuetzt die Lebergesundheit',
        description:
          'Rispenhirse enthaelt Lecithin, ein Phospholipid, das die Leberfunktion unterstuetzt und beim Fettstoffwechsel helfen kann. Vorlaeufige Studien deuten auf eine leberschuetzende Wirkung hin.',
        evidenceLevel: 'preliminary-evidence',
        source: 'Journal of Cereal Science',
      },
      {
        benefit: 'Klimaeffiziente Kulturpflanze',
        description:
          'Mit der kuerzesten Wachstumsperiode aller Hirsearten (60-75 Tage) und sehr geringem Wasserbedarf (250-400 mm) ist die Rispenhirse eines der klimafreundlichsten Getreide ueberhaupt — ein entscheidender Vorteil angesichts des Klimawandels in Mitteleuropa.',
        evidenceLevel: 'well-established',
        source: 'FAO / Abteilung fuer nachhaltige Pflanzenproduktion',
      },
      {
        benefit: 'Reich an B-Vitaminen, insbesondere Niacin',
        description:
          'Rispenhirse ist eine gute Quelle fuer B-Vitamine, insbesondere Niacin (Vitamin B3). Laut EFSA traegt Niacin zum normalen Energiestoffwechsel, zur normalen Funktion des Nervensystems und zur Erhaltung normaler Haut bei.',
        evidenceLevel: 'supported-by-research',
        source: 'Journal of Food Science and Technology',
      },
    ],

    sideEffects: [
      {
        condition: 'Goitrogengehalt',
        description:
          'Enthaelt Goitrogene, die bei hohem Konsum die Schilddruesenfunktion beeintraechtigen koennen. Personen mit Schilddruesenerkrankungen sollten Rispenhirse in Massen konsumieren und ihren Arzt oder ihre Aerztin konsultieren.',
        severity: 'consult-doctor',
      },
      {
        condition: 'Antinaehrstoffe (Phytate)',
        description:
          'Enthaelt Antinaehrstoffe wie Phytate, die die Mineralstoffaufnahme reduzieren koennen. Einweichen, Keimen und Kochen verringern den Phytatgehalt deutlich, wie das Bundesinstitut fuer Risikobewertung (BfR) erlaeutert.',
        severity: 'mild',
      },
    ],

    isGlutenFree: true,
    relatedRecipes: [
      'proso-millet-pulao',
      'chena-upma',
      'proso-millet-salad',
      'panivaragu-pongal',
      'proso-millet-khichdi',
    ],
    sources: [
      'dge-nahrwerttabelle',
      'usda-fdc',
      'lu-cishan-2009',
      'foster-powell-gi-tables-2021',
      'saleh-millets-review-2013',
    ],
  },

  // =============================================
  // FONIO
  // =============================================
  {
    slug: 'fonio',
    name: 'Fonio',
    commonName: 'Fonio / Hungerhirse',
    scientificName: 'Digitaria exilis',
    family: 'Poaceae',
    category: 'minor',
    grainType: 'naked',
    imageUrl: '',
    images: {
      grain: '/images/millets/fonio-grain.webp',
      plant: '/images/millets/fonio-plant.webp',
      cooked: '/images/millets/fonio-cooked.webp',
    },
    tagline: 'Das kleinste Getreide der Welt — westafrikanisches Superfood erobert Europas Naturkostlaeden',
    description:
      'Fonio (Digitaria exilis), auch als Hungerhirse oder Acha bekannt, ist eines der aeltesten kultivierten Getreide Afrikas und das kleinste Getreidekorn der Welt. In Westafrika — insbesondere in Mali, Guinea, Burkina Faso und Nigeria — ist Fonio seit ueber 5.000 Jahren ein Grundnahrungsmittel und wird als „Samen des Universums" verehrt. Die winzigen Koerner reifen in nur 60-70 Tagen auf den aermsten Boeden und benoetigen kaum Wasser, was Fonio zu einer der widerstandsfaehigsten Kulturpflanzen ueberhaupt macht. In den letzten Jahren hat Fonio den Sprung nach Europa geschafft und ist in deutschen Biolaeden, Reformhaeusern und Online-Shops zunehmend erhaeltlich. Sein feines, leicht nussiges Aroma und seine couscousaehnliche Textur machen es zu einem vielseitigen Getreide fuer die moderne europaeische Kueche. Mit 9 g Protein pro 100 g und einem bemerkenswerten Aminosaereprofil (reich an Methionin und Cystein) schliesst Fonio eine Luecke, die vielen anderen Getreidesorten fehlt.',

    names: {
      english: 'Fonio',
      hindi: 'Fonio',
      tamil: 'Fonio',
      telugu: 'Fonio',
      kannada: 'Fonio',
      malayalam: 'Fonio',
      marathi: 'Fonio',
      bengali: 'Fonio',
      gujarati: 'Fonio',
      odia: 'Fonio',
      punjabi: 'Fonio',
      sanskrit: 'Fonio',
    },

    nutrition: {
      calories: 367,
      protein_g: 9.0,
      fat_g: 1.8,
      carbohydrates_g: 75.0,
      fiber_g: 3.3,
      calcium_mg: 4,
      iron_mg: 0.6,
      zinc_mg: 2.3,
      phosphorus_mg: 200,
      magnesium_mg: 57,
      potassium_mg: 176,
      source: 'DGE Nahrwerttabelle / USDA FoodData Central',
      sourceDetail: 'Deutsche Gesellschaft fur Ernahrung / USDA Agricultural Research Service',
    },

    glycemicIndex: {
      value: 52,
      category: 'low',
      source: 'Internationale Tabellen des Glykamischen Index, Foster-Powell et al., 2021',
    },

    ayurveda: {
      rasa: ['Milder, leicht nussiger Geschmack'],
      guna: ['Leicht verdaulich', 'Trocken'],
      virya: 'Neutrale Wirkung',
      vipaka: 'Sanfte Verdauung',
      doshaEffect: {
        vata: 'neutral',
        pitta: 'neutral',
        kapha: 'neutral',
      },
      therapeuticUses: [
        'Reich an schwefelhaltigen Aminosaeuren (Methionin, Cystein), die laut DGE fuer die Proteinsynthese und den Zellschutz wichtig sind',
        'Gute pflanzliche Proteinquelle (9,0 g/100 g) mit einem fuer Getreide ungewoehnlich vollstaendigen Aminosaereprofil',
        'Niedriger glykamischer Index (ca. 52) — laut EFSA geeignet fuer eine blutzuckerbewusste Ernaehrung',
        'Natuerlich glutenfrei — laut DGE geeignet fuer Personen mit Zoeliakie',
        'Sehr schnell zuzubereiten (5-10 Minuten Kochzeit) — ideal fuer den modernen Alltag',
      ],
      contraindications: [
        'Relativ hoher Kaloriengehalt (367 kcal/100 g) — Portionsgroessen beachten bei kalorienreduzierter Ernaehrung',
        'Als Importprodukt auf Herkunft und Bio-Zertifizierung achten',
      ],
      classicalReference: 'DGE Nahrwerttabelle / USDA FoodData Central',
    },

    history: {
      originRegion: 'Westafrika (Fouta Djallon-Hochland, Guinea)',
      domesticationPeriod: 'Vor etwa 5.000 Jahren — eines der aeltesten kultivierten Getreide Afrikas',
      archaeologicalEvidence:
        'Archaologische Funde im Fouta Djallon-Hochland in Guinea belegen den Anbau von Fonio vor mindestens 5.000 Jahren. Es gilt als eines der aeltesten kultivierten Getreide Afrikas. Die Dogon in Mali bezeichnen Fonio als den „Samen des Universums" — in ihrer Kosmologie ist es das Urkorn, aus dem alles Leben entstand.',
      spreadPattern:
        'Von Westafrika aus verbreitete sich Fonio ueber den gesamten Sahel und die westafrikanische Savanne. Es blieb ueber Jahrtausende ein regionales Getreide. Erst in den 2000er-Jahren begann die internationale Aufmerksamkeit zu wachsen, angetrieben durch die Arbeit von Pierre Thiam (senegalesisch-amerikanischer Koch) und FAO-Initiativen. Heute ist Fonio in europaeischen Naturkostlaeden erhaeltlich — in Deutschland vor allem ueber Biolaeden und Online-Haendler.',
      culturalSignificance:
        'Fonio hat eine tiefe kulturelle Bedeutung in Westafrika. Bei den Dogon in Mali ist es das heiligste aller Getreide. Es wird bei Hochzeiten, Zeremonien und Festen serviert und gilt als Symbol fuer Fruchtbarkeit und Wohlstand. Die Bambara sagen: „Fonio schaemt sich nie" — weil es auf den aermsten Boeden waechst und niemals versagt. In Europa wird Fonio als Symbol fuer die Wiederentdeckung vergessener Getreide und fuer nachhaltige, globale Ernaehrung geschaetzt. In der deutschen Naturkostkueche wird es zunehmend als Alternative zu Couscous, Bulgur und Quinoa verwendet.',
    },

    cultivation: {
      majorStates: ['Guinea', 'Mali', 'Burkina Faso', 'Nigeria', 'Senegal'],
      globalRegions: [
        'Westafrika (Sahel und Savannenzone)',
        'Europa (Import ueber Biofachhandel)',
        'Nordamerika (wachsender Importmarkt)',
      ],
      growingSeason: 'Regenzeit (Juni-September in Westafrika)',
      waterRequirement: '250-500 mm Niederschlag (extrem trockenheitsresistent)',
      soilType: 'Gedeiht auf den aermsten, sandigen und lateritischen Boeden; benoetigt kaum Duengung',
      harvestDays: '60-70 Tage (eines der am schnellsten reifenden Getreide)',
    },

    cooking: {
      waterRatio: '1:2',
      soakingTime: 'Kein Einweichen noetig',
      cookingTime: '5-10 Minuten',
      texture: 'Fein, couscousaehnlich, leicht koernig',
      flavorProfile: 'Mild, leicht nussig, dezent suesslich',
      bestSubstituteFor: 'Couscous, Bulgur, Quinoa',
      tips: [
        'Kein Einweichen erforderlich — einfach kurz abspuelen und kochen',
        'Fonio kocht sehr schnell: 1 Teil Fonio auf 2 Teile Wasser, 5-10 Minuten koecheln, dann mit einer Gabel auflockern',
        'Hervorragend als Couscous-Ersatz in Salaten, Tabbouleh und Beilagen',
        'Als Fruehstuecksbrei mit Milch, Honig und Fruechten — eine koestliche Alternative zu Haferflocken',
        'In der Pfanne anroesten fuer ein intensiveres, nussigeres Aroma',
        'Kann zu Mehl gemahlen werden fuer glutenfreie Pfannkuchen, Crepes oder Gebaeck',
      ],
    },

    healthBenefits: [
      {
        benefit: 'Herausragendes Aminosaereprofil',
        description:
          'Fonio ist ungewoehnlich reich an schwefelhaltigen Aminosaeuren Methionin und Cystein, die in den meisten anderen Getreidesorten Mangelnaehrstoffe sind. Laut DGE sind diese Aminosaeuren wichtig fuer die Proteinsynthese, die Entgiftung und den Zellschutz.',
        evidenceLevel: 'supported-by-research',
        source: 'Journal of Cereal Science / FAO Food Composition Database',
      },
      {
        benefit: 'Pflanzliche Proteinquelle mit 9 g pro 100 g',
        description:
          'Mit 9,0 g Protein pro 100 g und einem fuer Getreide ungewoehnlich ausgewogenen Aminosaereprofil ist Fonio eine wertvolle pflanzliche Proteinquelle, die laut DGE gut in eine pflanzenbasierte Ernaehrung integriert werden kann.',
        evidenceLevel: 'well-established',
        source: 'DGE Nahrwerttabelle / USDA FoodData Central',
      },
      {
        benefit: 'Niedriger glykamischer Index',
        description:
          'Mit einem GI von etwa 52 setzt Fonio Glukose vergleichsweise langsam frei. Laut EFSA unterstuetzen Lebensmittel mit niedrigem GI eine stabile Blutzuckerregulation und koennen zur Praevention von Typ-2-Diabetes beitragen.',
        evidenceLevel: 'supported-by-research',
        source: 'International Tables of Glycemic Index, Foster-Powell et al.',
      },
      {
        benefit: 'Klimaresilienteste Kulturpflanze',
        description:
          'Fonio gedeiht auf den aermsten Boeden der Welt mit minimalem Wasserbedarf und reift in nur 60-70 Tagen. Die FAO stuft Fonio als eine der vielversprechendsten Kulturpflanzen fuer die Ernaehrungssicherheit unter Klimawandelbedingungen ein.',
        evidenceLevel: 'well-established',
        source: 'FAO / Abteilung fuer nachhaltige Pflanzenproduktion',
      },
    ],

    sideEffects: [
      {
        condition: 'Begrenzte Verfuegbarkeit und hoehere Kosten',
        description:
          'Fonio ist in Deutschland ueberwiegend als Importprodukt in Biolaeden und Online-Shops erhaeltlich. Die Preise liegen hoeher als bei heimischen Getreidesorten. Auf Bio-Zertifizierung und faire Handelsbedingungen achten.',
        severity: 'mild',
      },
      {
        condition: 'Relativ hoher Kaloriengehalt',
        description:
          'Mit 367 Kalorien pro 100 g hat Fonio einen vergleichsweise hohen Energiegehalt. Bei kalorienreduzierter Ernaehrung sollten die Portionsgroessen beachtet werden.',
        severity: 'mild',
      },
    ],

    isGlutenFree: true,
    relatedRecipes: [],
    sources: [
      'dge-nahrwerttabelle',
      'usda-fdc',
      'fao-fonio-crop-profile',
      'foster-powell-gi-tables-2021',
      'jideani-fonio-review-2012',
    ],
  },
];
