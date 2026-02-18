import type { FermentedProduct } from '@/lib/types';

export const fermentedProducts: FermentedProduct[] = [
  {
    name: 'Ambali',
    region: 'South India (Tamil Nadu, Karnataka, Andhra Pradesh)',
    millets: ['finger-millet'],
    process:
      'రాగి పిండిని బాగా ఉడికించి గట్టి గంజిలా చేస్తారు. ఆ తర్వాత చల్లారనిచ్చి, నీళ్లు లేదా మజ్జిగ కలిపి రాత్రంతా గదిలో ఉంచుతారు. దీంతో రాగిలో సహజంగా ఉండే లాక్టిక్ ఆసిడ్ బ్యాక్టీరియా (ముఖ్యంగా Lactobacillus plantarum, L. fermentum) పులియబెడతాయి. ఫలితంగా పులుపుగా, ప్రోబయోటిక్స్ ఉన్న చల్లని పలచని గంజి తయారవుతుంది — వేసవిలో చాలా చల్లగా ఉంటుంది.',
    duration: '8-12 hours (overnight fermentation)',
    nutritionalBenefit:
      'పులియడం వల్ల రాగిలో ఉన్న ఫైటిక్ ఆసిడ్ 40-52% తగ్గిపోతుంది, దీంతో కాల్షియం, ఐరన్ శరీరానికి బాగా అందుతాయి. లాక్టిక్ బ్యాక్టీరియా B-విటమిన్లు (ముఖ్యంగా B12, ఫోలేట్) తయారు చేస్తాయి, ప్రోటీన్ జీర్ణం కూడా మెరుగవుతుంది. తక్కువ pH వల్ల హానికరమైన బ్యాక్టీరియా పెరగవు — అందుకే వేడి ప్రదేశాల్లో కూడా ఇది సేఫ్‌గా ఉంటుంది.',
    culturalContext:
      'అంబలి దక్షిణ భారతదేశంలో శ్రామిక వర్గాల ప్రధాన ఆహారం. శతాబ్దాలుగా రైతులు, కూలీలు మధ్యాహ్నం ఇది తాగుతారు. తమిళనాడులో దీన్ని "కూళ్" అని పిలుస్తారు, వేసవిలో రోడ్ పక్కన ఫ్రీగా పంచుతారు. గ్రామీణ ప్రజల్లో ఇది ధైర్యానికి, ఆత్మవిశ్వాసానికి గుర్తుగా చెప్పుకుంటారు.',
  },
  {
    name: 'Boza',
    region: 'Turkey, Balkans (Bulgaria, Albania, Romania, North Macedonia)',
    millets: ['proso-millet', 'pearl-millet'],
    process:
      'సాధారణంగా ప్రోసో మిల్లెట్ గింజలను (కొన్నిసార్లు గోధుమ లేదా మొక్కజొన్నతో కలిపి) నానబెట్టి, మెత్తగా ఉడికించి, మెదిపి వడకడతారు. చక్కెర, ముందటి సారి మిగిలిన స్టార్టర్ కలుపుతారు. ఇందులో లాక్టిక్ బ్యాక్టీరియా (Lactobacillus, Leuconostoc) మరియు ఈస్ట్‌లు (Saccharomyces) కలిసి పనిచేస్తాయి. చివరికి చిక్కగా, కొద్దిగా బుడగలతో, తియ్యగా-పుల్లగా ఉండే డ్రింక్ తయారవుతుంది (ఆల్కహాల్ సాధారణంగా 1% కంటే తక్కువ).',
    duration: '3-10 days',
    nutritionalBenefit:
      'లాక్టిక్ బ్యాక్టీరియా మరియు ఈస్ట్ కలిసి పనిచేయడం వల్ల Boza లో B1, B2, B6 విటమిన్లు బాగా ఉంటాయి. పులియడం ద్వారా complex కార్బోహైడ్రేట్లు సులభంగా జీర్ణమయ్యే చక్కెరలుగా మారతాయి, లాక్టిక్ ఆసిడ్ మినరల్స్ absorb అవడానికి సాయపడుతుంది. దాదాపు 1000 CFU/mL లైవ్ ప్రోబయోటిక్స్ ఉంటాయి, complex కార్బోహైడ్రేట్ల వల్ల ఎక్కువసేపు ఎనర్జీ వస్తుంది.',
    culturalContext:
      'Boza కి దాదాపు 9,000 సంవత్సరాల చరిత్ర ఉంది — మెసపొటేమియా నుండి వచ్చిన ఇది భూమి మీద అత్యంత పురాతన ఫర్మెంటెడ్ డ్రింక్స్‌లో ఒకటి. Ottoman Turkey లో boza అమ్మేవాళ్లు (bozaci) చలికాలంలో సాధారణ దృశ్యం, ఇప్పటికీ ఈ డ్రింక్ చలికాలంతో ముడిపడి ఉంది. Istanbul లో ప్రసిద్ధమైన Vefa Bozacisi 1876 నుండి boza అమ్ముతోంది. Bulgaria లో కూడా బేకరీల్లో, రోడ్ పక్కన boza చలికాలంలో బాగా అమ్ముడవుతుంది.',
  },
  {
    name: 'Ogi',
    region: 'Nigeria, West Africa (Ghana, Benin, Togo)',
    millets: ['sorghum', 'pearl-millet'],
    process:
      'జొన్న లేదా సజ్జ గింజలను 1-3 రోజులు నీళ్లలో నానబెడతారు, తర్వాత తడిగా రుబ్బి జల్లెడ పడతారు. పిండి గల నీళ్లను అడుగుకు చేరనిచ్చి, సహజంగా పులియనిస్తారు. ఇందులో Lactobacillus plantarum, Corynebacterium, Saccharomyces cerevisiae ప్రధానంగా పనిచేస్తాయి. పులిసిన మిశ్రమాన్ని ఉడికించి మృదువైన గంజి (pap) గా తింటారు.',
    duration: '24-72 hours',
    nutritionalBenefit:
      'పులియడం వల్ల Ogi లో అమినో ఆసిడ్ ప్రొఫైల్ బాగా మెరుగవుతుంది, ముఖ్యంగా లైసిన్ — మిల్లెట్ ఆహారాల్లో ఇది తక్కువగా ఉంటుంది. ఫైటిక్ ఆసిడ్ 50-60% తగ్గుతుంది, దీంతో జింక్, ఐరన్ శరీరానికి చాలా బాగా అందుతాయి. లాక్టిక్ ఆసిడ్ pH ని 3.5-4.0 కి తగ్గిస్తుంది — ఈ వాతావరణంలో E. coli, Salmonella లాంటి హానికరమైన బ్యాక్టీరియా బతకలేవు.',
    culturalContext:
      'Ogi అనేది West Africa అంతటా పిల్లలకు 4-6 నెలల వయసు నుండి ఇచ్చే ముఖ్యమైన weaning food. Yoruba లో దీన్ని "ogi" లేదా జెల్లా సెట్ చేస్తే "agidi" అంటారు; Hausa లో "kamu" అంటారు. అన్ని వయసుల వాళ్లు breakfast గా తింటారు. Ogi ని సోయాబీన్‌తో fortify చేయడం West African food science లో ప్రధాన research అంశం.',
  },
  {
    name: 'Togwa',
    region: 'Tanzania, East Africa (Kenya, Mozambique)',
    millets: ['finger-millet', 'sorghum'],
    process:
      'రాగి లేదా జొన్న పిండితో పలచని గంజి చేసి దాదాపు 40 డిగ్రీల సెల్సియస్ వరకు చల్లారనిస్తారు. మొలకెత్తిన మిల్లెట్ పిండి (malt) కలుపుతారు — ఇందులో amylase enzymes మరియు సహజ సూక్ష్మజీవులు ఉంటాయి. గది ఉష్ణోగ్రతలో పులియనిస్తారు, Lactobacillus brevis మరియు L. plantarum ప్రధానంగా పనిచేస్తాయి. ఫలితంగా తియ్యగా-పుల్లగా, కొద్దిగా fizz ఉన్న డ్రింక్ తయారవుతుంది.',
    duration: '12-24 hours',
    nutritionalBenefit:
      'మొలకెత్తిన ధాన్యంలో amylase enzymes స్టార్చ్‌ని ద్రవంగా మారుస్తాయి — ఇది చిక్కదనం తగ్గించి, తక్కువ పరిమాణంలోనే ఎక్కువ ఎనర్జీ ఇస్తుంది. పిల్లలకు ఆహారం ఇవ్వడానికి ఇది చాలా ముఖ్యం. పులియడం వల్ల thiamine, riboflavin, niacin పెరుగుతాయి. మొలకెత్తడం + పులియడం కలిసి ఫైటిక్ ఆసిడ్‌ని 88.3% వరకు తగ్గించి, మినరల్స్ అందుబాటును అద్భుతంగా పెంచుతాయి.',
    culturalContext:
      'Togwa Tanzania రోజువారీ జీవితంలో భాగం. బస్ స్టాప్‌ల దగ్గర, మార్కెట్లలో, స్కూల్ గేట్ల దగ్గర ఆడవాళ్లు రీసైకిల్డ్ ప్లాస్టిక్ కంటైనర్లలో అమ్ముతారు. తక్కువ ఆదాయం ఉన్న కుటుంబాలకు ఇది చౌకగా దొరికే పోషకాహారం, వేడి సీజన్‌లో దాహం తీర్చడానికి బాగా ఇష్టపడతారు. World Food Programme కూడా Togwa ని indigenous probiotic food గా అధ్యయనం చేసింది.',
  },
  {
    name: 'Chibuku',
    region: 'Southern Africa (Zimbabwe, Zambia, Malawi, Botswana, South Africa)',
    millets: ['sorghum', 'pearl-millet'],
    process:
      'జొన్న లేదా సజ్జ malt ని మొక్కజొన్న లేదా జొన్నతో కలిపి నీళ్లు వేస్తారు. రెండు దశల్లో పులియబెడతారు: మొదట లాక్టిక్ ఆసిడ్ fermentation ద్వారా Lactobacillus జాతులు పుల్లగా చేస్తాయి; తర్వాత Saccharomyces cerevisiae ఈస్ట్ వేసి ఆల్కహాలిక్ fermentation చేస్తారు. ఫలితంగా అపారదర్శకమైన, చిక్కని, పింక్-బ్రౌన్ రంగు బీర్ తయారవుతుంది — పులుపుగా ఉంటుంది, సాధారణంగా 3-4% ABV. ఇది filter చేయరు, గింజ పదార్థాలు అలాగే ఉంటాయి.',
    duration: '3-5 days',
    nutritionalBenefit:
      'Chibuku filter చేయకపోవడం వల్ల గింజల్లోని పదార్థాలు, B-విటమిన్లు (ముఖ్యంగా thiamine, riboflavin), ప్రోటీన్లు అన్నీ అలాగే ఉంటాయి. Fermentation వల్ల ఫైటిక్ ఆసిడ్ 70% వరకు తగ్గుతుంది, ఐరన్ మరియు జింక్ బాగా absorb అవుతాయి. ఒక సర్వింగ్‌లో మంచి మొత్తంలో calories, protein, micronutrients ఉంటాయి — subsistence communities కి ఇది మంచి caloric supplement.',
    culturalContext:
      'సాంప్రదాయ opaque beer sub-Saharan Africa లో అత్యధికంగా తాగే ఆల్కహాలిక్ డ్రింక్. సామాజిక వేడుకలు, పూర్వీకులకు నైవేద్యాలు, కమ్యూనిటీ సమావేశాలలో ఇది కేంద్ర భూమిక పోషిస్తుంది. "Chibuku" (Shona భాషలో "ప్రజలకు ఇవ్వు" అని అర్థం) commercial brand 1960 లలో ప్రారంభమై, ఇప్పుడు అనేక దేశాల్లో carton packaging లో industrially తయారు చేస్తారు. గ్రామీణ ప్రాంతాల్లో ఇంట్లో చేసుకునే versions ఇప్పటికీ ఉన్నాయి — సాధారణంగా ఆడవాళ్లు కలిసి చేస్తారు.',
  },
  {
    name: 'Kunu',
    region: 'Nigeria (Northern Nigeria, widespread across West Africa)',
    millets: ['pearl-millet', 'sorghum'],
    process:
      'సజ్జ లేదా జొన్న గింజలను నానబెట్టి, మసాలాలతో (అల్లం, లవంగాలు, ఎర్ర మిరపకాయ, చిలగడదుంప) తడిగా రుబ్బుతారు. రుబ్బిన పిండిని రెండు భాగాలు చేస్తారు. ఒక భాగాన్ని ఉడికించి paste లాగా చేస్తారు (gelatinized starch), తర్వాత పచ్చి భాగంతో కలుపుతారు. కలిపిన మిశ్రమాన్ని 8-24 గంటలు wild LAB మరియు ఈస్ట్‌లతో పులియనిస్తారు. వడకట్టిన తర్వాత నునుపైన, మసాలా వాసన ఉన్న, పాల రంగు non-alcoholic డ్రింక్ తయారవుతుంది.',
    duration: '8-24 hours',
    nutritionalBenefit:
      'మసాలాలు యాంటీఆక్సిడెంట్ మరియు యాంటీమైక్రోబియల్ గుణాలు అందిస్తాయి, LAB fermentation తో కలిసి. Kunu లో 100mL కి దాదాపు 80-90 kcal ఎనర్జీ, మంచి మొత్తంలో కాల్షియం, మెగ్నీషియం, ఐరన్ ఉంటాయి. మసాలాలు (ముఖ్యంగా అల్లం, మిరపకాయ) జీర్ణక్రియకు సాయపడతాయి, anti-inflammatory గుణాలు ఉంటాయి. Fermentation protein efficiency ratio ను మెరుగుపరుస్తుంది, anti-nutritional factors ను 40-55% తగ్గిస్తుంది.',
    culturalContext:
      'Kunu (kunun-zaki అని కూడా అంటారు, అంటే "తీపి డ్రింక్") Northern Nigeria లో అత్యంత ప్రాచుర్యం పొందిన సాంప్రదాయ non-alcoholic డ్రింక్. Hausa, Fulani, Nupe కమ్యూనిటీల్లో అన్ని వయసుల వాళ్లు తాగుతారు. నామకరణ వేడుకలు, పెళ్లిళ్లలో, రమజాన్‌లో ఇఫ్తార్ డ్రింక్‌గా ఇస్తారు. ఏ ధాన్యంతో చేస్తారో బట్టి వేర్వేరు varieties ఉన్నాయి: kunun-gyada (వేరుశెనగతో), kunun-aya (tiger nut తో), kunun-tsamiya (చింతపండుతో).',
  },
  {
    name: 'Fura da Nono',
    region: 'Nigeria (Northern Nigeria), Niger, northern Ghana',
    millets: ['pearl-millet'],
    process:
      'సజ్జను పొడి చేసి, మసాలాలు (అల్లం, మిరపకాయ, లవంగాలు) కలిపి, ఉండలుగా చేసి ఉడికిస్తారు. ఈ గట్టి, మసాలా సజ్జ ఉండలు (fura) ని చేతితో ముక్కలు చేసి పులిసిన ఆవు పాలు లేదా పెరుగు (nono) లో కలుపుతారు. Nono అనేది పచ్చి పాలను Lactobacillus, Streptococcus జాతులతో 12-24 గంటలు సహజంగా పులియబెట్టి తయారు చేస్తారు. రెండూ కలిపి బాగా చిలికితే చిక్కని, తాగగలిగే భోజనం తయారవుతుంది.',
    duration: '12-24 hours (for the nono component)',
    nutritionalBenefit:
      'Fura da Nono అనేది nutritional సమన్వయం — సజ్జ ఎనర్జీ, ఫైబర్, ఐరన్, B-విటమిన్లు ఇస్తే, పులిసిన పాలు మంచి నాణ్యత గల ప్రోటీన్, కాల్షియం, లైవ్ ప్రోబయోటిక్స్ ఇస్తాయి. Nono లోని లాక్టిక్ ఆసిడ్ సజ్జలోని ఐరన్ absorption ను పెంచుతుంది. రెండూ కలిస్తే ఒక్కొక్కటి వేరుగా ఇవ్వలేని complete amino acid profile వస్తుంది. ఒక serving లో దాదాపు 150-180 kcal, 6-8g protein ఉంటుంది.',
    culturalContext:
      'Fura da Nono అనేది Fulani (Fula/Peul) పశుపాలక ప్రజల iconic ఆహారం. చరిత్రలో వాళ్లు తమ పాల ఉత్పత్తులను సజ్జ సాగు చేసే స్థిర వ్యవసాయ సమాజాలతో వ్యాపారం చేసేవారు. ఇది పశుపాలక-రైతు సంస్కృతుల మధ్య శతాబ్దాల నాటి పోషక భాగస్వామ్యానికి ప్రతీక. ఇప్పుడు Sahel ప్రాంతం అంతటా Fulani ఆడవాళ్లు calabash లలో రోడ్ పక్కన, మార్కెట్లలో అమ్ముతారు — cross-cultural food exchange కి గుర్తుగా celebrate చేస్తారు.',
  },
  {
    name: 'Banku',
    region: 'Ghana (Ga, Ewe, and Fante communities)',
    millets: ['pearl-millet'],
    process:
      'మొక్కజొన్న పిండి మరియు సజ్జ లేదా cassava పిండి కలిపి, నీళ్లు వేసి 2-3 రోజులు సహజంగా పులియనిస్తారు. Fermentation లో Lactobacillus, Saccharomyces, Candida జాతులు లాక్టిక్ ఆసిడ్ మరియు ఇతర flavor compounds తయారు చేస్తాయి. పులిసిన పిండిని మంద మంటపై నిరంతరం కలుపుతూ ఉడికిస్తారు — నునుపైన, అంటుకునే, elastic బాల్ తయారయ్యే వరకు. సూప్‌లు, కూరలు, కాల్చిన చేపలతో తింటారు.',
    duration: '2-3 days',
    nutritionalBenefit:
      'ఎక్కువ రోజులు పులియబెట్టడం వల్ల Banku జీర్ణమవడం, మినరల్ absorption బాగా మెరుగవుతాయి. మొక్కజొన్న + సజ్జ కలయిక complementary amino acid profile ఇస్తుంది — మొక్కజొన్నలో తక్కువగా ఉన్న methionine సజ్జ ఇస్తుంది, సజ్జలో తక్కువగా ఉన్న leucine మొక్కజొన్న ఇస్తుంది. Cassava వాడితే అందులోని cyanogenic glycosides fermentation వల్ల తగ్గుతాయి — ఆహారం safe అవుతుంది. Organic acids సహజ preservatives గా పనిచేస్తాయి.',
    culturalContext:
      'Banku దక్షిణ Ghana లో అత్యంత ప్రాచుర్యం పొందిన ప్రధాన ఆహారం, ముఖ్యంగా Ga మరియు Ewe ప్రజలతో ముడిపడి ఉంది. ఇది దాదాపు ఎప్పుడూ pepper sauce, okro stew, లేదా కాల్చిన tilapia తో తింటారు. "Banku and tilapia" అనేది Ghana యొక్క అనధికారిక national dish combination — food festivals లో celebrate చేస్తారు. Fermentation సాంప్రదాయంగా ఆడవాళ్లు నిర్వహిస్తారు, తరతరాలుగా active starter cultures కాపాడుతూ వస్తున్నారు.',
  },
  {
    name: 'Jnard / Raksi',
    region: 'Nepal (Limbu, Rai, and Newari communities)',
    millets: ['finger-millet'],
    process:
      'రాగి గింజలను ఉడికించి, చల్లారనిచ్చి, "murcha" అనే సాంప్రదాయ starter తో inoculate చేస్తారు — ఇది molds (Rhizopus, Mucor), yeasts (Saccharomyces, Pichia), bacteria కలిగిన ఎండిన కేక్. Inoculate చేసిన రాగిని airtight container లో (సాంప్రదాయంగా అరటి ఆకులతో line చేసిన వెదురు బుట్ట) పెట్టి solid-state fermentation కి వదిలేస్తారు. పులిసిన ముద్ద (jnard) తీపి-పుల్లని paste గా నేరుగా తినొచ్చు, లేదా వేడి నీళ్లలో నానబెట్టి "tongba" beer గా తాగొచ్చు. Raksi (distilled spirit) కోసం పులిసిన ముద్దను సాంప్రదాయ రాగి still లో distill చేస్తారు.',
    duration: '7-14 days (fermentation), plus distillation for raksi',
    nutritionalBenefit:
      'Murcha-mediated fermentation వల్ల రాగిలో essential amino acids, ముఖ్యంగా lysine మరియు tryptophan పెరుగుతాయి. Rhizopus molds స్టార్చ్ నుండి simple sugars విడుదల చేస్తాయి (saccharification), ఎనర్జీ ఎక్కువ అందుబాటులోకి వస్తుంది. Research ప్రకారం free amino acids 2-3 రెట్లు పెరుగుతాయి, B-విటమిన్ production కూడా గణనీయంగా పెరుగుతుంది. Distill చేయని jnard లో fiber, minerals, probiotic microorganisms అన్నీ ఉంటాయి.',
    culturalContext:
      'Jnard మరియు tongba తూర్పు Nepal లోని Limbu, Rai ప్రజల సామాజిక, ఆచార జీవితంలో కేంద్ర పాత్ర పోషిస్తాయి. Tongba (వేడి మిల్లెట్ బీర్ — "pipsing" అనే వెదురు గొట్టంతో తాగుతారు) ప్రతి సామాజిక సందర్భంలో — పుట్టినరోజులు, పెళ్లిళ్లు, అంత్యక్రియలు, పండగలలో ఇస్తారు. చలి Himalayan శీతాకాలాల్లో ఇది ఆతిథ్యం మరియు వెచ్చదనానికి గుర్తు. Murcha starter అనేది తల్లుల నుండి కూతుళ్లకు అందించే రహస్య కుటుంబ recipe.',
  },
  {
    name: 'Bushera',
    region: 'Uganda (Ankole, Kigezi, western Uganda)',
    millets: ['sorghum', 'pearl-millet'],
    process:
      'జొన్న లేదా సజ్జ గింజలను 24 గంటలు నీళ్లలో నానబెట్టి, 3-4 రోజులు మొలకెత్తించి, ఎండలో ఆరబెట్టి, malt పిండిగా రుబ్బుతారు. విడిగా, కొంత సజ్జ పిండిని గంజిగా ఉడికిస్తారు. చల్లారిన గంజిలో malt పిండి కలుపుతారు — సహజ enzymes మరియు microflora fermentation ను ప్రారంభిస్తాయి. LAB (ముఖ్యంగా Lactobacillus fermentum) ప్రధానంగా పనిచేసి పుల్లని, కొద్దిగా చిక్కని డ్రింక్ తయారు చేస్తాయి. ఎక్కువసేపు పులియబెడితే తేలికపాటి ఆల్కహాల్ వస్తుంది.',
    duration: '1-4 days (depending on desired sourness and alcohol content)',
    nutritionalBenefit:
      'Bushera లో బాగా ఎనర్జీ (దాదాపు 340 kcal/L) మరియు మంచి మొత్తంలో ఐరన్, జింక్, కాల్షియం ఉంటాయి. మొలకెత్తడం వల్ల ఫైటిక్ ఆసిడ్ 25-30% తగ్గుతుంది, తర్వాత fermentation మరో 20-25% తగ్గిస్తుంది. గర్భిణీ స్త్రీలు, పాలిచ్చే తల్లులకు ఇది ముఖ్యంగా పోషకాహారంగా విలువైనది. Makerere University అధ్యయనాల ప్రకారం bushera తాగడం పిల్లల్లో hemoglobin levels మెరుగుపడటంతో ముడిపడి ఉంది.',
    culturalContext:
      'Bushera పశ్చిమ Uganda లో అత్యంత ముఖ్యమైన సాంప్రదాయ fermented డ్రింక్ — Ankole మరియు Bakiga సంస్కృతుల్లో లోతుగా భాగమైపోయింది. అతిథులకు ఇచ్చే ఆచార డ్రింక్ ఇది. సాంప్రదాయ పెళ్లి negotiations లో మగపెళ్లివాడి కుటుంబం ఆడపెళ్లివాడి కుటుంబానికి bushera తీసుకెళ్లాలి — ఇది తప్పనిసరి. ఎక్కువసేపు పులియబెట్టిన "omuramba" versions పెద్దవాళ్లు మరియు ముఖ్యమైన వేడుకలకు మాత్రమే. స్థానిక ప్రభుత్వాలు bushera ఉత్పత్తిని food security intervention గా support చేస్తున్నాయి.',
  },
  {
    name: 'Koozh / Ragi Java',
    region: 'Tamil Nadu, South India',
    millets: ['finger-millet'],
    process:
      'రాగి పిండిని నీళ్లలో కలిపి పలచని గంజిగా ఉడికిస్తారు. గది ఉష్ణోగ్రతకు చల్లారాక, మట్టి కుండ (mann paanai) లో పోసి రాత్రంతా పులియనిస్తారు — వాతావరణంలో ఉన్న LAB, ముఖ్యంగా Lactobacillus acidophilus, L. plantarum సహజంగా పులియబెడతాయి. ఉదయానికి గంజి బాగా పుల్లని రుచి వస్తుంది. చల్లగా తాగుతారు — మజ్జిగ, పచ్చి ఉల్లిపాయ, పచ్చి మిరపకాయ కలుపుకుంటారు.',
    duration: 'Overnight (8-12 hours)',
    nutritionalBenefit:
      'కూళ్ లో రాత్రంతా పులియడం వల్ల కాల్షియం bioavailability పెరుగుతుంది (రాగిలో ఇప్పటికే 364 mg/100g కాల్షియం ఉంది) — ఫైటిక్ ఆసిడ్ మరియు oxalic acid తగ్గడం వల్ల కాల్షియం శరీరానికి బాగా అందుతుంది. LAB తయారు చేసే లాక్టిక్ ఆసిడ్ పేగుల్లో కాల్షియం కరగడానికి మరింత సాయపడుతుంది. Studies లో 10^8 CFU/mL వరకు live LAB కనుగొన్నారు — ఇది అద్భుతమైన probiotic source. మట్టి కుండ trace minerals అందిస్తుంది, evaporation ద్వారా సహజంగా చల్లగా ఉంచుతుంది.',
    culturalContext:
      'కూళ్ (kanji లేదా koozhu అని కూడా రాస్తారు) పురాతన తమిళ ఆహారం — దీనికి లోతైన వర్గ, సాంస్కృతిక ప్రాముఖ్యత ఉంది. చరిత్రలో ఇది వ్యవసాయ కూలీల ప్రధాన ఆహారం. మండే తమిళ వేసవిలో (ఏప్రిల్-జూన్) public koozh stalls నుండి ఫ్రీగా పంచుతారు. "koozh kudikka" (కూళ్ తాగడం) అనేది భోజనం చేయడానికి తమిళ జాతీయం. మాజీ Tamil Nadu ముఖ్యమంత్రి జయలలిత ప్రారంభించిన "Amma Unavagam" canteen scheme లో కూళ్ ని తక్కువ ధరకు పోషకాహారంగా అందించేవారు.',
  },
  {
    name: 'Mudde Ambali',
    region: 'Karnataka, South India (Old Mysore region, Mandya, Ramanagara)',
    millets: ['finger-millet'],
    process:
      'రాగి పిండిని నీళ్లలో ఉడికించి గట్టి ముద్ద (mudde / ragi ball) చేస్తారు. మిగిలిన mudde ముక్కలుగా విరిచి, నీళ్లు లేదా మజ్జిగలో వేసి, మట్టి లేదా స్టీల్ గిన్నెలో రాత్రంతా పులియనిస్తారు. వాతావరణం మరియు మజ్జిగలో ఉన్న సహజ LAB స్టార్చ్‌ను పులియబెట్టి, ఉదయానికి పుల్లని, సగం ద్రవంలాంటి గంజి తయారవుతుంది. కొన్నిసార్లు అన్నం కూడా కలుపుతారు — ఎక్కువ స్టార్చ్ మరియు texture variety కోసం.',
    duration: 'Overnight (8-12 hours)',
    nutritionalBenefit:
      'Mudde ambali లో రాగి యొక్క అన్ని పోషకాలు — ఎక్కువ కాల్షియం, ఐరన్, dietary fiber — అలాగే ఉంటాయి. పులియడం వల్ల mineral absorption మెరుగవుతుంది, మంచి probiotics వస్తాయి. మజ్జిగతో కలపడం వల్ల మంచి నాణ్యత గల milk protein, అదనపు కాల్షియం, complete amino acid profile వస్తుంది. పులిసిన రాగి నుండి నెమ్మదిగా విడుదలయ్యే కార్బోహైడ్రేట్లు ఎక్కువసేపు ఎనర్జీ ఇస్తాయి, glycemic response తక్కువగా ఉంటుంది — blood sugar నిర్వహించే వాళ్లకు ఇది చాలా మంచిది.',
    culturalContext:
      'Mudde ambali గ్రామీణ Karnataka యొక్క breakfast — ముఖ్యంగా old Mysore ప్రాంతంలో 2,000 సంవత్సరాలకు పైగా రాగి సాగు చేస్తున్నారు. ప్రసిద్ధ కన్నడ కవి, సన్యాసి కనకదాస (16వ శతాబ్దం) "రామధాన్య చరిత్రే" రాశారు — ఇందులో రాగి మరియు బియ్యం మధ్య allegorical debate ఉంటుంది, రాగి గెలుస్తుంది — ఈ రచన రాగిని వినయం మరియు బలానికి ప్రతీకగా ఎత్తింది. Mudde (రాగి ముద్ద) తో సారు (rasam) ఇప్పటికీ Karnataka లో కోట్ల మంది రోజువారీ భోజనం, ambali దాని పులిసిన, చల్లని version.',
  },
];
