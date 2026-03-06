import type { Millet } from '@/lib/types';

export const minorMillets: Millet[] = [
  // =============================================
  // KODO MILLET
  // =============================================
  {
    slug: 'kodo-millet',
    name: 'कोदो (Kodo Millet)',
    commonName: 'कोदो / कोदरा',
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
    tagline: 'एंटीऑक्सीडेंट से भरपूर अनाज — सदियों से भारतीय व्रत परंपरा में इस्तेमाल',
    description:
      'कोदो मिलेट (कोदरा/वरगु) भारत का मूल एक सख़्त, सूखा-सहनशील अनाज है, जिसकी 3000 साल से ज़्यादा समय से खेती हो रही है। प्रति 100g में 309 कैलोरी के साथ यह सबसे कम कैलोरी वाले मिलेट में से एक है और एंटीऑक्सीडेंट पॉलीफ़ेनोल से बेहद समृद्ध है। कोदो मिलेट का भारतीय व्रत (उपवास) परंपराओं में गहरा सांस्कृतिक महत्व है और व्रत के दौरान इसका ख़ूब उपयोग होता है। यह मध्य भारत के आदिवासी क्षेत्रों का मुख्य अनाज है और अपने स्वास्थ्य लाभों के कारण फिर से लोकप्रिय हो रहा है।',

    names: {
      english: 'Kodo Millet',
      hindi: 'कोदो (Kodo) / कोदरा (Kodra)',
      tamil: 'வரகு (Varagu)',
      telugu: 'అరికెలు (Arikelu)',
      kannada: 'ಹಾರಕ (Haraka)',
      malayalam: 'വരക് (Varaku)',
      marathi: 'कोद्रा (Kodra)',
      bengali: 'কোদো (Kodo)',
      gujarati: 'કોદરા (Kodra)',
      odia: 'କୋଦୋ (Kodo)',
      punjabi: 'ਕੋਦੋ (Kodo)',
      sanskrit: 'कोद्रव (Kodrava)',
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
      magnesium_mg: 122,
      potassium_mg: 144,
      source: 'ICMR-NIN IFCT 2017',
      sourceDetail: 'Indian Food Composition Tables, National Institute of Nutrition, Hyderabad',
    },

    glycemicIndex: {
      value: 48,
      category: 'low',
      source: 'Gopalan et al., Nutritive Value of Indian Foods, NIN',
    },

    ayurveda: {
      rasa: ['कषाय (कसैला)', 'मधुर (मीठा)'],
      guna: ['लघु (हल्का)', 'रूक्ष (सूखा)'],
      virya: 'शीत (ठंडा)',
      vipaka: 'कटु (तीखा)',
      doshaEffect: {
        vata: 'increases',
        pitta: 'decreases',
        kapha: 'decreases',
      },
      therapeuticUses: [
        'ब्लड शुगर प्रबंधन के लिए पारंपरिक रूप से डायबिटीज़ आहार में उपयोग',
        'पित्त बढ़ने पर ठंडक देने वाला प्रभाव लाभकारी',
        'कम कैलोरी के कारण वज़न प्रबंधन में सहायक',
        'हल्के गुण के कारण व्रत के दौरान पारंपरिक रूप से अनुशंसित',
      ],
      contraindications: [
        'वात बढ़ा सकता है — घी या गरम व्यंजनों के साथ सेवन करें',
        'फफ़ूँद संदूषण से बचने के लिए ठीक से साफ़ और प्रोसेस किया जाना ज़रूरी',
      ],
      classicalReference: 'चरक संहिता',
    },

    history: {
      originRegion: 'भारतीय उपमहाद्वीप',
      domesticationPeriod: 'लगभग 3000 साल पहले',
      archaeologicalEvidence:
        'भारत का मूल अनाज, मध्य भारत के आदिवासी क्षेत्रों में हज़ारों सालों से खेती होती रही है। सीमित औपचारिक पुरातत्व दस्तावेज़ लेकिन व्यापक नृवंशविज्ञान रिकॉर्ड उपलब्ध हैं।',
      spreadPattern:
        'भारत में पालतू बनाया गया और मुख्यतः भारतीय उपमहाद्वीप में ही खेती होती रही, कुछ हद तक दक्षिण-पूर्व एशिया और पश्चिम अफ़्रीका में भी फैला।',
      culturalSignificance:
        'कोदो मिलेट की भारतीय व्रत (उपवास) परंपराओं में गहरी जड़ें हैं और यह हिंदू व्रत के दौरान अनुमत अनाजों में से एक है। यह मध्य प्रदेश और छत्तीसगढ़ के आदिवासी समुदायों के लिए खाद्य सुरक्षा की महत्वपूर्ण फ़सल है।',
    },

    cultivation: {
      majorStates: ['तमिलनाडु', 'मध्य प्रदेश', 'छत्तीसगढ़', 'महाराष्ट्र', 'कर्नाटक'],
      globalRegions: ['दक्षिण एशिया (भारत)', 'दक्षिण-पूर्व एशिया', 'पश्चिम अफ़्रीका'],
      growingSeason: 'खरीफ़ (जून-अक्टूबर)',
      waterRequirement: '400-500mm बारिश',
      soilType: 'कंकड़ीली, लेटेराइट और उथली मिट्टी; कमज़ोर मिट्टी में भी उगता है',
      harvestDays: '90-120 दिन',
    },

    cooking: {
      waterRatio: '1:2.5',
      soakingTime: '6-8 घंटे',
      cookingTime: '20-25 मिनट',
      texture: 'चावल जैसा लेकिन ज़्यादा मज़बूत',
      flavorProfile: 'हल्का, मिट्टी जैसा',
      bestSubstituteFor: 'चावल',
      tips: [
        'बेहतरीन नतीजों के लिए 6-8 घंटे या रात भर भिगोएँ',
        'भिगोने के बाद अच्छी तरह धो लें ताकि कड़वाहट निकल जाए',
        'भिगोने के बाद चावल की तरह पकाएँ — दाने अच्छे से अलग होते हैं',
        'उपमा, पुलाव और पोंगल बनाने में बढ़िया लगता है',
        'अनाज भरोसेमंद स्रोत से लें और ठीक से प्रोसेस किया हो, यह सुनिश्चित करें',
      ],
    },

    healthBenefits: [
      {
        benefit: 'एंटीऑक्सीडेंट पॉलीफ़ेनोल भरपूर',
        description:
          'कोदो मिलेट पॉलीफ़ेनोलिक यौगिकों से बेहद समृद्ध है जिनमें मज़बूत एंटीऑक्सीडेंट गुण हैं, जो कोशिकाओं को ऑक्सीडेटिव नुकसान से बचाने में मदद करते हैं।',
        evidenceLevel: 'supported-by-research',
        source: 'Journal of Food Science and Technology',
      },
      {
        benefit: 'पाचन स्वास्थ्य के लिए फ़ाइबर से भरपूर',
        description:
          'प्रति 100g में 9.0g फ़ाइबर के साथ, कोदो मिलेट स्वस्थ पाचन, नियमित मलत्याग को बढ़ावा देता है और कोलेस्ट्रॉल को सामान्य रखने में मदद कर सकता है।',
        evidenceLevel: 'well-established',
        source: 'ICMR-NIN IFCT 2017',
      },
      {
        benefit: 'कम कैलोरी',
        description:
          'प्रति 100g में 309 कैलोरी के साथ, कोदो मिलेट आम तौर पर खाए जाने वाले मिलेट में सबसे कम कैलोरी वाला है, जो वज़न प्रबंधन के लिए उपयुक्त है।',
        evidenceLevel: 'well-established',
        source: 'ICMR-NIN IFCT 2017',
      },
      {
        benefit: 'डायबिटीज़ आहार में पारंपरिक उपयोग',
        description:
          'लगभग 48 के कम ग्लाइसेमिक इंडेक्स के साथ, कोदो मिलेट को आयुर्वेदिक और लोक चिकित्सा में ब्लड शुगर नियंत्रण के लिए पारंपरिक रूप से अनुशंसित किया जाता रहा है।',
        evidenceLevel: 'traditional-knowledge',
        source: 'Indian Journal of Traditional Knowledge',
      },
    ],

    sideEffects: [
      {
        condition: 'कोदुआ विषाक्तता (फफ़ूँद संदूषण)',
        description:
          'ठीक से साफ़ करना ज़रूरी है क्योंकि दूषित कोदो मिलेट एस्परजिलस फ़्लेवस फफ़ूँद के कारण नशा (कोदुआ विषाक्तता) पैदा कर सकता है। लक्षणों में मतली, कँपकँपी और उनींदापन शामिल हैं। हमेशा भरोसेमंद स्रोत से ख़रीदें।',
        severity: 'consult-doctor',
      },
      {
        condition: 'अधूरी प्रोसेसिंग से कड़वाहट',
        description:
          'अगर ठीक से प्रोसेस और साफ़ न किया गया हो तो हल्की कड़वाहट हो सकती है। अच्छी तरह धोने, भिगोने और छानने से यह दूर होती है।',
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
      'icmr-nin-ifct-2017',
      'charaka-samhita',
      'gopalan-nutritive-value-indian-foods',
      'icar-small-millets-handbook',
    ],
  },

  // =============================================
  // BARNYARD MILLET
  // =============================================
  {
    slug: 'barnyard-millet',
    name: 'साँवा (Barnyard Millet)',
    commonName: 'साँवा / झंगोरा',
    scientificName: 'Echinochloa frumentacea',
    family: 'Poaceae',
    category: 'minor',
    grainType: 'husked',
    imageUrl: '',
    images: {
      grain: '/images/millets/barnyard-millet-grain.webp',
      plant: '/images/millets/barnyard-millet-plant.webp',
      cooked: '/images/millets/barnyard-millet-cooked.webp',
    },
    tagline: 'व्रत का अनाज — मिलेट में सबसे कम कार्बोहाइड्रेट और सबसे ज़्यादा फ़ाइबर',
    description:
      'साँवा/झंगोरा (Barnyard Millet) सबसे तेज़ बढ़ने वाला मिलेट है, जो कम से कम 60 दिनों में तैयार हो जाता है। इसमें सबसे ज़्यादा फ़ाइबर (प्रति 100g में 9.8g) और सबसे कम ग्लाइसेमिक इंडेक्स (~44) है। उत्तर भारत में हिंदू व्रत (उपवास) के दौरान इसका ख़ूब उपयोग होता है, जहाँ इसे साँवा या झंगोरा कहा जाता है। इसकी फूली हुई, चावल जैसी बनावट और सामान्य स्वाद इसे चावल का आसान विकल्प बनाता है।',

    names: {
      english: 'Barnyard Millet',
      hindi: 'सांवा (Sanwa) / झंगोरा (Jhangora)',
      tamil: 'குதிரைவாலி (Kuthiraivali)',
      telugu: 'ఊదలు (Udalu)',
      kannada: 'ಊದಲು (Oodalu)',
      malayalam: 'കുതിരവാലി (Kuthiravali)',
      marathi: 'भगर (Bhagar)',
      bengali: 'শ্যামাধান (Shyamadhan)',
      gujarati: 'મોરૈયો (Moraiyo)',
      odia: 'ଖିରା (Khira)',
      punjabi: 'ਸਾਂਵਾ (Sanwa)',
      sanskrit: 'श्यामाक (Shyamaka)',
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
      potassium_mg: 180,
      source: 'ICMR-NIN / published literature',
      sourceDetail: 'ICMR-NIN data supplemented with published research literature',
    },

    glycemicIndex: {
      value: 44,
      category: 'low',
      source: 'Published literature on millet glycemic indices',
    },

    ayurveda: {
      rasa: ['मधुर (मीठा)', 'कषाय (कसैला)'],
      guna: ['लघु (हल्का)'],
      virya: 'शीत (ठंडा)',
      vipaka: 'मधुर',
      doshaEffect: {
        vata: 'neutral',
        pitta: 'decreases',
        kapha: 'neutral',
      },
      therapeuticUses: [
        'हल्के और आसानी से पचने वाले स्वभाव के कारण व्रत के लिए आदर्श',
        'गर्मियों और पित्त स्थितियों में ठंडक देने वाला प्रभाव लाभकारी',
        'बहुत ज़्यादा फ़ाइबर के कारण पाचन स्वास्थ्य में सहायक',
        'बीमारी से उबरने के आहार में पारंपरिक रूप से उपयोग',
      ],
      contraindications: [
        'पकाने से पहले पर्याप्त न भिगोने पर गैस हो सकती है',
        'कम प्रोटीन के कारण लंबे समय तक अकेले अनाज के रूप में अनुशंसित नहीं',
      ],
      classicalReference: 'भावप्रकाश निघंटु',
    },

    history: {
      originRegion: 'उष्णकटिबंधीय एशिया (भारतीय उपमहाद्वीप)',
      domesticationPeriod: 'कई हज़ार साल पहले (सटीक समय अनिश्चित)',
      archaeologicalEvidence:
        'उष्णकटिबंधीय एशिया का मूल, भारत में वर्षा-आधारित क्षेत्रों में हज़ारों सालों से खेती होती रही है। जापानी बार्नयार्ड मिलेट (Echinochloa esculenta) को जापान में अलग से पालतू बनाया गया।',
      spreadPattern:
        'मुख्य रूप से दक्षिण एशिया में खेती होती है, जापान में अलग से एक और पालतूकरण की घटना। भारत और जापान की क्षेत्रीय फ़सल ही बनी रही।',
      culturalSignificance:
        'साँवा/झंगोरा का उत्तर भारतीय व्रत परंपराओं में विशेष सांस्कृतिक महत्व है। साँवा या भगर के नाम से जाना जाने वाला यह नवरात्रि, एकादशी और अन्य व्रत के अवसरों पर खाया जाने वाला प्रमुख अनाज है। उत्तराखंड में झंगोरा की खीर एक प्रिय पारंपरिक व्यंजन है।',
    },

    cultivation: {
      majorStates: ['उत्तराखंड', 'तमिलनाडु', 'मध्य प्रदेश', 'छत्तीसगढ़'],
      globalRegions: ['दक्षिण एशिया (भारत, नेपाल)', 'जापान', 'दक्षिण-पूर्व एशिया'],
      growingSeason: 'खरीफ़ (जून-सितंबर)',
      waterRequirement: '350-500mm बारिश',
      soilType: 'ऊसर, जलभराव वाली और यहाँ तक कि खारी मिट्टी में भी उगता है',
      harvestDays: '60-90 दिन (सबसे तेज़ बढ़ने वाला मिलेट)',
    },

    cooking: {
      waterRatio: '1:3',
      soakingTime: '2-4 घंटे',
      cookingTime: '15-20 मिनट',
      texture: 'फूली हुई, चावल जैसी',
      flavorProfile: 'हल्का, सामान्य',
      bestSubstituteFor: 'चावल (ख़ासकर व्रत में)',
      tips: [
        'अच्छी बनावट के लिए 2-4 घंटे भिगोकर रखें',
        'थोड़ा ज़्यादा पानी डालकर चावल की तरह पकाएँ',
        'व्रत में लोकप्रिय — सामो की खिचड़ी या मोरैयो पुलाव बनाएँ',
        'उत्तराखंड में झंगोरा की खीर दूध, चीनी और इलायची से बनाई जाती है',
        'पकाने से पहले हल्का सूखा भूनें — ज़्यादा स्वादिष्ट बनेगा',
      ],
    },

    healthBenefits: [
      {
        benefit: 'मिलेट में सबसे ज़्यादा फ़ाइबर',
        description:
          'साँवा में प्रति 100g में 9.8g फ़ाइबर होता है, जो आम तौर पर खाए जाने वाले मिलेट में सबसे ज़्यादा है। यह असाधारण फ़ाइबर पाचन स्वास्थ्य में मदद करता है, पेट भरा रखता है और कोलेस्ट्रॉल प्रबंधन में सहायक है।',
        evidenceLevel: 'well-established',
        source: 'ICMR-NIN / published literature',
      },
      {
        benefit: 'मिलेट में सबसे कम ग्लाइसेमिक इंडेक्स',
        description:
          'लगभग 44 के GI के साथ, साँवा का ग्लाइसेमिक इंडेक्स आम तौर पर उपलब्ध मिलेट में सबसे कम है, जो ब्लड शुगर प्रबंधन के लिए बेहतरीन विकल्प है।',
        evidenceLevel: 'supported-by-research',
        source: 'International Journal of Food Sciences and Nutrition',
      },
      {
        benefit: 'पारंपरिक व्रत का अनाज',
        description:
          'हल्के, आसानी से पचने वाले स्वभाव के कारण हिंदू व्रत के दौरान पारंपरिक रूप से इस्तेमाल होता है। व्रत में बिना भारीपन के लगातार ऊर्जा देता है।',
        evidenceLevel: 'traditional-knowledge',
      },
      {
        benefit: 'आयरन का अच्छा स्रोत',
        description:
          'प्रति 100g में 5.0mg आयरन होता है, जो एनीमिया रोकने के लिए डाइटरी आयरन का बहुमूल्य स्रोत है, ख़ासकर शाकाहारी आहार में।',
        evidenceLevel: 'well-established',
        source: 'ICMR-NIN / published literature',
      },
    ],

    sideEffects: [
      {
        condition: 'पर्याप्त न भिगोने पर गैस',
        description:
          'पकाने से पहले पर्याप्त न भिगोने पर गैस और पेट फूलना हो सकता है। 2-4 घंटे भिगोने से पाचन में सुधार होता है।',
        severity: 'mild',
      },
      {
        condition: 'फ़ाइटेट की मौजूदगी',
        description:
          'इसमें फ़ाइटेट (एंटीन्यूट्रिएंट) होते हैं जो खनिज अवशोषण को कम कर सकते हैं। भिगोने और पकाने से फ़ाइटेट का स्तर काफ़ी कम हो जाता है।',
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
      'icmr-nin-ifct-2017',
      'bhavaprakasha-nighantu',
      'gopalan-nutritive-value-indian-foods',
      'icar-small-millets-handbook',
    ],
  },

  // =============================================
  // PROSO MILLET
  // =============================================
  {
    slug: 'proso-millet',
    name: 'चेना (Proso Millet)',
    commonName: 'चेना / बारी',
    scientificName: 'Panicum miliaceum',
    family: 'Poaceae',
    category: 'minor',
    grainType: 'husked',
    imageUrl: '',
    images: {
      grain: '/images/millets/proso-millet-grain.webp',
      plant: '/images/millets/proso-millet-plant.webp',
      cooked: '/images/millets/proso-millet-cooked.webp',
    },
    tagline: 'सबसे पुराना पालतू मिलेट — ज़्यादा प्रोटीन और सबसे कम उगने का समय',
    description:
      'चेना/बारी (Proso Millet) मानव इतिहास में सबसे पुराना पालतू बनाया गया मिलेट होने का गौरव रखता है, चीन के सिशान से लगभग 8000 ईसा पूर्व के पुरातत्व प्रमाण मिले हैं। लघु मिलेट में इसमें सबसे ज़्यादा प्रोटीन (प्रति 100g में 12.5g) है और उगने का समय सबसे कम — सिर्फ़ 60-75 दिन। यह यूरोपीय इतिहास का "मिलेट" है, जो गेहूँ और चावल के व्यापक प्रचलन से पहले हज़ारों सालों तक मध्य एशिया और यूरोप का मुख्य अनाज रहा।',

    names: {
      english: 'Proso Millet',
      hindi: 'चेना (Chena) / बरि (Bari)',
      tamil: 'பனிவரகு (Panivaragu)',
      telugu: 'వరిగెలు (Varigelu)',
      kannada: 'ಬರಗು (Baragu)',
      malayalam: 'പനിവരക് (Panivaraku)',
      marathi: 'वरी (Vari)',
      bengali: 'চিনা (China)',
      gujarati: 'ચેનો (Cheno)',
      odia: 'ବଗୁ (Bagu)',
      punjabi: 'ਚੀਨਾ (China)',
      sanskrit: 'चीनक (Chinaka)',
    },

    nutrition: {
      calories: 341,
      protein_g: 12.5,
      fat_g: 1.1,
      carbohydrates_g: 70.4,
      fiber_g: 5.2,
      calcium_mg: 14,
      iron_mg: 0.8,
      zinc_mg: 1.4,
      phosphorus_mg: 206,
      magnesium_mg: 153,
      potassium_mg: 113,
      source: 'ICMR-NIN IFCT 2017',
      sourceDetail: 'Indian Food Composition Tables, National Institute of Nutrition, Hyderabad',
    },

    glycemicIndex: {
      value: 56,
      category: 'low',
      source: 'Gopalan et al., Nutritive Value of Indian Foods, NIN',
    },

    ayurveda: {
      rasa: ['मधुर (मीठा)', 'कषाय (कसैला)'],
      guna: ['लघु (हल्का)', 'रूक्ष (सूखा)'],
      virya: 'उष्ण (गरम)',
      vipaka: 'कटु (तीखा)',
      doshaEffect: {
        vata: 'neutral',
        pitta: 'neutral',
        kapha: 'decreases',
      },
      therapeuticUses: [
        'ज़्यादा प्रोटीन के कारण मांसपेशियों के निर्माण में सहायक',
        'उष्ण गुण ठंडे मौसम में लाभकारी',
        'हल्के गुण से आसान पाचन',
        'ताक़त और ऊर्जा के लिए पारंपरिक रूप से उपयोग',
      ],
      contraindications: [
        'उष्ण प्रकृति — ज़्यादा गर्मी वाली स्थितियों में उपयुक्त नहीं हो सकता',
        'रूक्ष गुण — घी या नम व्यंजनों से संतुलित करें',
      ],
      classicalReference: 'सुश्रुत संहिता',
    },

    history: {
      originRegion: 'उत्तरी चीन (सिशान पुरातत्व स्थल)',
      domesticationPeriod: 'लगभग 10000 साल पहले (~8000 ईसा पूर्व) — सबसे पुराना पालतू मिलेट',
      archaeologicalEvidence:
        'चीन के सिशान से लगभग 8000 ईसा पूर्व के पुरातत्व प्रमाण, जो चेना को मानव इतिहास का सबसे पुराना पालतू मिलेट बनाते हैं।',
      spreadPattern:
        'चीन से पश्चिम की ओर मध्य एशिया होते हुए यूरोप तक फैला, गेहूँ और चावल के प्रभुत्व से पहले यूरोपीय और मध्य एशियाई आहार का मुख्य अनाज बना। यूरोपीय ऐतिहासिक ग्रंथों में इसे ही "मिलेट" कहा गया है।',
      culturalSignificance:
        'चेना ऐतिहासिक रूप से मानव सभ्यता के सबसे महत्वपूर्ण अनाजों में से एक है। यह रोमन साम्राज्य, मध्यकालीन यूरोप और मध्य एशिया का मुख्य अनाज था। भारत में यह आदिवासी और वर्षा-आधारित खेती क्षेत्रों में आज भी महत्वपूर्ण है।',
    },

    cultivation: {
      majorStates: ['मध्य प्रदेश', 'छत्तीसगढ़', 'तमिलनाडु', 'कर्नाटक', 'उत्तराखंड'],
      globalRegions: [
        'चीन',
        'रूस',
        'मध्य एशिया',
        'यूरोप (ऐतिहासिक)',
        'उत्तरी अमेरिका (पक्षियों के दाने की फ़सल)',
      ],
      growingSeason: 'खरीफ़ (जून-सितंबर)',
      waterRequirement: '250-400mm बारिश',
      soilType: 'हल्की, अच्छी जल निकासी वाली मिट्टी; कमज़ोर मिट्टी सहन करता है',
      harvestDays: '60-75 दिन (मिलेट में सबसे कम)',
    },

    cooking: {
      waterRatio: '1:3',
      soakingTime: '20-30 मिनट',
      cookingTime: '15-20 मिनट',
      texture: 'फूला हुआ, कूसकूस (couscous) जैसा',
      flavorProfile: 'हल्का, थोड़ा मीठा',
      bestSubstituteFor: 'कूसकूस, चावल',
      tips: [
        'पकाने से पहले 20-30 मिनट भिगोएँ',
        'चावल की तरह पकाएँ — दाने फूले और अलग-अलग बनते हैं',
        'पुलाव, उपमा और सलाद बनाने में बढ़िया',
        'कूसकूस जैसी बनावट इसे ठंडे सलाद के लिए बेहतरीन बनाती है',
        'पकाने से पहले सूखा भूनें — ज़्यादा सुगंधित और स्वादिष्ट बनेगा',
        'आटा बनाकर रोटी और चीला भी बना सकते हैं',
      ],
    },

    healthBenefits: [
      {
        benefit: 'लघु मिलेट में सबसे ज़्यादा प्रोटीन',
        description:
          'चेना में प्रति 100g में 12.5g प्रोटीन होता है, जो लघु मिलेट में सबसे ज़्यादा है। यह प्लांट-बेस्ड प्रोटीन का बेहतरीन स्रोत है, ख़ासकर शाकाहारी और वीगन आहार के लिए।',
        evidenceLevel: 'well-established',
        source: 'ICMR-NIN IFCT 2017',
      },
      {
        benefit: 'लेसिथिन लिवर की सेहत में सहायक',
        description:
          'चेना में लेसिथिन होता है, एक फ़ॉस्फ़ोलिपिड जो लिवर के कामकाज में मदद करता है और फ़ैट मेटाबॉलिज़्म में सहायक हो सकता है। प्रारंभिक अध्ययन बताते हैं कि यह संपूर्ण लिवर स्वास्थ्य में मदद कर सकता है।',
        evidenceLevel: 'preliminary-evidence',
        source: 'Journal of Cereal Science',
      },
      {
        benefit: 'जलवायु-कुशल फ़सल',
        description:
          'मिलेट में सबसे कम उगने का समय (60-75 दिन) और बहुत कम पानी की ज़रूरत (250-400mm) के साथ, चेना सबसे जलवायु-कुशल अनाजों में से एक है।',
        evidenceLevel: 'well-established',
        source: 'ICAR Crop Science Division',
      },
      {
        benefit: 'विटामिन B ख़ासकर नियासिन से भरपूर',
        description:
          'चेना विटामिन B-कॉम्प्लेक्स का अच्छा स्रोत है, ख़ासकर नियासिन (विटामिन B3), जो ऊर्जा चयापचय, तंत्रिका तंत्र के कामकाज और त्वचा की सेहत के लिए ज़रूरी है।',
        evidenceLevel: 'supported-by-research',
        source: 'Journal of Food Science and Technology',
      },
    ],

    sideEffects: [
      {
        condition: 'गोइट्रोजन की मौजूदगी',
        description:
          'इसमें गोइट्रोजन होते हैं जो ज़्यादा खपत पर थायरॉइड के कामकाज में बाधा डाल सकते हैं। थायरॉइड रोगियों को सीमित मात्रा में सेवन करना चाहिए और डॉक्टर से सलाह लेनी चाहिए।',
        severity: 'consult-doctor',
      },
      {
        condition: 'एंटीन्यूट्रिएंट की मौजूदगी',
        description:
          'इसमें फ़ाइटेट जैसे एंटीन्यूट्रिएंट होते हैं जो खनिज अवशोषण कम कर सकते हैं। भिगोने, अंकुरित करने और पकाने से एंटीन्यूट्रिएंट का स्तर कम होता है।',
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
      'icmr-nin-ifct-2017',
      'sushruta-samhita',
      'gopalan-nutritive-value-indian-foods',
      'cishan-archaeological-studies',
      'icar-small-millets-handbook',
    ],
  },

  // =============================================
  // BROWNTOP MILLET
  // =============================================
  {
    slug: 'browntop-millet',
    name: 'कोरले (Browntop Millet)',
    commonName: 'छोटी कंगनी / कोरले',
    scientificName: 'Urochloa ramosa (syn. Brachiaria ramosa)',
    family: 'Poaceae',
    category: 'minor',
    grainType: 'husked',
    imageUrl: '',
    images: {
      grain: '/images/millets/browntop-millet-grain.webp',
      plant: '/images/millets/browntop-millet-plant.webp',
      cooked: '/images/millets/browntop-millet-cooked.webp',
    },
    tagline: 'फ़ाइबर का चैंपियन — सबसे दुर्लभ व्यावसायिक मिलेट, अब वापसी कर रहा है',
    description:
      'कोरले (Browntop Millet) व्यावसायिक रूप से उगाए जाने वाले मिलेट में सबसे दुर्लभ है, जिसमें सभी मिलेट में सबसे ज़्यादा फ़ाइबर (प्रति 100g में 12.5g) है। एक समय खेती की फ़सल के रूप में लगभग विलुप्त हो चुका, यह अब कर्नाटक के किसानों के पुनरुद्धार प्रयासों से उल्लेखनीय वापसी कर रहा है। मुख्य रूप से कर्नाटक के तुमकुर और चित्रदुर्ग ज़िलों में उगाया जाने वाला, कोरले का ग्लाइसेमिक इंडेक्स बहुत कम (~47) है और यह अपने असाधारण आँतों के स्वास्थ्य लाभों के लिए ध्यान आकर्षित कर रहा है।',

    names: {
      english: 'Browntop Millet',
      hindi: 'छोटी कंगनी (Chhoti Kangni)',
      tamil: 'பனிப்புல் (Panippul)',
      telugu: 'అండ కొర్రలు (Anda Korralu)',
      kannada: 'ಕೊರಲೆ (Korale)',
      malayalam: 'തൊട്ടക്കുറ (Thottakura)',
      marathi: 'हरिक (Harik)',
      bengali: 'कोई प्रचलित नाम नहीं',
      gujarati: 'कोई प्रचलित नाम नहीं',
      odia: 'कोई प्रचलित नाम नहीं',
      punjabi: 'कोई प्रचलित नाम नहीं',
      sanskrit: 'कोई प्रचलित नाम नहीं',
    },

    nutrition: {
      calories: 331,
      protein_g: 11.5,
      fat_g: 1.6,
      carbohydrates_g: 69.0,
      fiber_g: 12.5,
      calcium_mg: 20,
      iron_mg: 0.65,
      zinc_mg: 0.5,
      phosphorus_mg: 150,
      magnesium_mg: 0,
      potassium_mg: 0,
      source: 'Published literature, limited data',
      sourceDetail:
        'Limited ICMR data available. Values derived from published research literature. Magnesium and potassium data not available.',
    },

    glycemicIndex: {
      value: 47,
      category: 'low',
      source: 'Published literature on millet glycemic indices',
    },

    ayurveda: {
      rasa: ['कषाय (कसैला)', 'मधुर (मीठा)'],
      guna: ['लघु (हल्का)', 'रूक्ष (सूखा)'],
      virya: 'शीत (ठंडा)',
      vipaka: 'कटु (तीखा)',
      doshaEffect: {
        vata: 'increases',
        pitta: 'neutral',
        kapha: 'decreases',
      },
      therapeuticUses: [
        'बहुत ज़्यादा फ़ाइबर के कारण आँतों की सेहत और पाचन नियमितता के लिए असाधारण',
        'ठंडी प्रकृति पित्त स्थितियों के लिए उपयुक्त',
        'हल्का गुण आसान पाचन और डिटॉक्सिफ़िकेशन में सहायक',
        'स्वस्थ वज़न प्रबंधन में मदद कर सकता है',
      ],
      contraindications: [
        'बहुत ज़्यादा फ़ाइबर — अचानक शुरू करने पर पाचन तकलीफ़ हो सकती है',
        'रूक्ष और लघु गुणों के कारण वात बढ़ा सकता है',
      ],
      classicalReference: 'सीमित आयुर्वेदिक संदर्भ - क्षुद्र धान्य के अंतर्गत वर्गीकृत',
    },

    history: {
      originRegion: 'दक्षिण-पूर्व एशिया और भारतीय उपमहाद्वीप',
      domesticationPeriod: 'प्राचीन (सटीक समय अप्रलेखित)',
      archaeologicalEvidence:
        'सीमित पुरातत्व दस्तावेज़। कर्नाटक के पहाड़ी क्षेत्रों में सदियों से पारंपरिक रूप से उगाया जाता रहा है। हाल के पुनरुद्धार प्रयासों से पहले खेती की फ़सल के रूप में लगभग विलुप्त हो चुका था।',
      spreadPattern:
        'दक्षिण-पूर्व एशिया और भारत का मूल। मुख्य रूप से कर्नाटक के पहाड़ी क्षेत्रों तक सीमित, पड़ोसी राज्यों में सीमित प्रसार।',
      culturalSignificance:
        'कोरले फ़सल पुनरुद्धार की कहानी है। कृषि आधुनिकीकरण में लगभग खो चुका था, कर्नाटक के समर्पित किसानों ने इसे वापस लाया है। यह भूली हुई देसी फ़सलों को पुनर्जीवित करने और कृषि जैव विविधता को संरक्षित करने के बढ़ते आंदोलन का प्रतीक है।',
    },

    cultivation: {
      majorStates: ['कर्नाटक (मुख्यतः तुमकुर, चित्रदुर्ग ज़िले)', 'आंध्र प्रदेश (सीमित)'],
      globalRegions: ['दक्षिण एशिया (मुख्यतः भारत)', 'दक्षिण-पूर्व एशिया'],
      growingSeason: 'खरीफ़ (जून-अक्टूबर)',
      waterRequirement: '300-400mm बारिश',
      soilType: 'लाल कंकड़ीली और लेटेराइट मिट्टी; कमज़ोर, पहाड़ी भूभाग में उगता है',
      harvestDays: '90-100 दिन',
    },

    cooking: {
      waterRatio: '1:2.5',
      soakingTime: '6-8 घंटे',
      cookingTime: '20-25 मिनट',
      texture: 'चावल जैसा, मज़बूत',
      flavorProfile: 'हल्का, थोड़ा नट जैसा (nutty)',
      bestSubstituteFor: 'चावल',
      tips: [
        'बेहतरीन नतीजों के लिए 6-8 घंटे या रात भर भिगोएँ',
        'अच्छी तरह भिगोने के बाद चावल की तरह पकाएँ',
        'मज़बूत बनावट पुलाव और बिरयानी जैसे व्यंजनों में अच्छा टिकता है',
        'डोसा और रोटी के लिए आटा बनाया जा सकता है',
        'अगर यह मिलेट पहली बार खा रहे हैं तो कम मात्रा से शुरू करें और धीरे-धीरे बढ़ाएँ',
      ],
    },

    healthBenefits: [
      {
        benefit: 'सभी मिलेट में सबसे ज़्यादा फ़ाइबर',
        description:
          'कोरले में प्रति 100g में 12.5g फ़ाइबर होता है, जो सभी मिलेट में सबसे ज़्यादा है। यह असाधारण फ़ाइबर पाचन स्वास्थ्य में मदद करता है, पेट भरा रखता है और कोलेस्ट्रॉल व ब्लड शुगर को सामान्य रखने में सहायक है।',
        evidenceLevel: 'well-established',
        source: 'Published literature on millet nutrition',
      },
      {
        benefit: 'बहुत कम ग्लाइसेमिक इंडेक्स',
        description:
          'लगभग 47 के GI के साथ, कोरले ग्लूकोज़ को बहुत धीरे छोड़ता है, जो डायबिटीज़ वालों या स्थिर ऊर्जा चाहने वालों के लिए बेहतरीन अनाज विकल्प है।',
        evidenceLevel: 'supported-by-research',
        source: 'Published literature on millet glycemic indices',
      },
      {
        benefit: 'फ़ाइटोकेमिकल से भरपूर',
        description:
          'इसमें फ़ेनोलिक यौगिकों सहित विभिन्न फ़ाइटोकेमिकल हैं जिनमें एंटीऑक्सीडेंट, सूजन-रोधी और अन्य स्वास्थ्य-वर्धक गुण हो सकते हैं। शोध जारी है।',
        evidenceLevel: 'preliminary-evidence',
        source: 'Journal of Food Science and Technology',
      },
      {
        benefit: 'आँतों की सेहत में सहायक',
        description:
          'बहुत ज़्यादा फ़ाइबर प्रीबायोटिक के रूप में काम करता है, लाभकारी आँत बैक्टीरिया की वृद्धि को बढ़ावा देता है और समग्र पेट स्वास्थ्य और पाचन नियमितता में सुधार करता है।',
        evidenceLevel: 'supported-by-research',
        source: 'Nutrition Research Reviews',
      },
    ],

    sideEffects: [
      {
        condition: 'सीमित व्यावसायिक उपलब्धता',
        description:
          'कोरले व्यावसायिक रूप से उगाया जाने वाला सबसे दुर्लभ मिलेट है और मिलना मुश्किल हो सकता है। उपलब्धता मुख्यतः कर्नाटक और विशेष दुकानों तक सीमित है।',
        severity: 'mild',
      },
      {
        condition: 'ज़्यादा फ़ाइबर से पाचन तकलीफ़',
        description:
          'बहुत ज़्यादा फ़ाइबर (प्रति 100g में 12.5g) अचानक आहार में शामिल करने पर पाचन तकलीफ़, पेट फूलना या गैस की समस्या हो सकती है। धीरे-धीरे शुरू करने की सख़्त सलाह दी जाती है।',
        severity: 'moderate',
      },
    ],

    isGlutenFree: true,
    relatedRecipes: [
      'browntop-millet-rice',
      'korale-pulao',
      'browntop-millet-upma',
      'browntop-millet-dosa',
    ],
    sources: [
      'published-millet-nutrition-literature',
      'icar-small-millets-handbook',
      'karnataka-agriculture-department',
      'gopalan-nutritive-value-indian-foods',
    ],
  },
];
