import type { Millet } from '@/lib/types';

export const majorMillets: Millet[] = [
  // =============================================
  // PEARL MILLET (Bajra)
  // =============================================
  {
    slug: 'pearl-millet',
    name: 'बाजरा (Pearl Millet)',
    commonName: 'बाजरा',
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
    tagline: 'भारत में सबसे ज़्यादा उगाया जाने वाला मिलेट — राजस्थान और गुजरात का मुख्य अनाज',
    description:
      'बाजरा (Pearl Millet) भारत में सबसे ज़्यादा उगाया जाने वाला मिलेट है और दुनिया भर में छठा सबसे अहम अनाज है। यह राजस्थान, गुजरात, महाराष्ट्र और हरियाणा के शुष्क और अर्ध-शुष्क इलाकों का मुख्य भोजन है। गर्मी और सूखे को सहन करने की अपनी बेजोड़ क्षमता के लिए मशहूर, बाजरा रेतीली मिट्टी में कम बारिश में भी उग जाता है। यह आयरन, प्रोटीन और ऊर्जा से भरपूर है, जो इसे भारत और अफ़्रीका में करोड़ों लोगों के लिए पोषण का खज़ाना बनाता है।',

    names: {
      english: 'Pearl Millet',
      hindi: 'बाजरा (Bajra)',
      tamil: 'கம்பு (Kambu)',
      telugu: 'సజ్జలు (Sajjalu)',
      kannada: 'ಸಜ್ಜೆ (Sajje)',
      malayalam: 'കമ്പം (Kambam)',
      marathi: 'बाजरी (Bajri)',
      bengali: 'বাজরা (Bajra)',
      gujarati: 'બાજરી (Bajri)',
      odia: 'ବାଜରା (Bajra)',
      punjabi: 'ਬਾਜਰਾ (Bajra)',
      sanskrit: 'वज्रान्न (Vajranna)',
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
      source: 'ICMR-NIN IFCT 2017',
      sourceDetail: 'Indian Food Composition Tables, National Institute of Nutrition, Hyderabad',
    },

    glycemicIndex: {
      value: 55,
      category: 'low',
      source: 'Gopalan et al., Nutritive Value of Indian Foods, NIN',
    },

    ayurveda: {
      rasa: ['मधुर (मीठा)'],
      guna: ['गुरु (भारी)', 'स्निग्ध (चिकना)'],
      virya: 'उष्ण (गरम)',
      vipaka: 'मधुर',
      doshaEffect: {
        vata: 'increases',
        pitta: 'neutral',
        kapha: 'decreases',
      },
      therapeuticUses: [
        'लंबे समय तक ऊर्जा और पोषण देता है',
        'मांसपेशियों और ऊतकों को मज़बूत बनाता है',
        'ठंडे मौसम और सर्दियों में फ़ायदेमंद',
        'स्तनपान कराने वाली माताओं में दूध बढ़ाने में सहायक',
      ],
      contraindications: [
        'ज़्यादा वात असंतुलन वाले लोगों के लिए आदर्श नहीं',
        'गर्मियों में सीमित मात्रा में खाना चाहिए',
      ],
      classicalReference: 'भावप्रकाश निघंटु, धान्य वर्ग',
    },

    history: {
      originRegion: 'अफ़्रीका का साहेल क्षेत्र',
      domesticationPeriod: 'लगभग 4500 साल पहले (~2500 ईसा पूर्व)',
      archaeologicalEvidence:
        'गुजरात के सुरकोटदा और रोजड़ी से लगभग 2000 ईसा पूर्व के पुरातत्व प्रमाण भारतीय उपमहाद्वीप में इसकी शुरुआती खेती की पुष्टि करते हैं।',
      spreadPattern:
        'इसकी शुरुआत पश्चिम अफ़्रीका के साहेल क्षेत्र से हुई और लगभग 2000 ईसा पूर्व में अरब सागर के प्राचीन व्यापार मार्गों से होकर यह भारत पहुँचा।',
      culturalSignificance:
        'बाजरा राजस्थान और गुजरात की खाद्य संस्कृति में गहराई से जुड़ा हुआ है। घी और गुड़ के साथ बाजरे की रोटी सर्दियों का पारंपरिक खाना है। यह पश्चिमी भारत के फ़सल त्योहारों का भी केंद्र है।',
    },

    cultivation: {
      majorStates: ['राजस्थान', 'महाराष्ट्र', 'गुजरात', 'उत्तर प्रदेश', 'हरियाणा'],
      globalRegions: ['पश्चिम अफ़्रीका (साहेल)', 'पूर्वी अफ़्रीका', 'दक्षिण एशिया'],
      growingSeason: 'खरीफ़ (जुलाई-अक्टूबर)',
      waterRequirement: '350-500mm बारिश',
      soilType: 'रेतीली और दोमट मिट्टी; कमज़ोर, सूखी मिट्टी में भी उगता है',
      harvestDays: '65-85 दिन',
    },

    cooking: {
      waterRatio: '1:3',
      soakingTime: 'भिगोने की ज़रूरत नहीं',
      cookingTime: '20-25 मिनट',
      texture: 'थोड़ा मोटा और नट जैसा (nutty)',
      flavorProfile: 'हल्का, मिट्टी जैसा स्वाद',
      bestSubstituteFor: 'गेहूँ का आटा (रोटी बनाने के लिए)',
      tips: [
        'बाजरे की रोटी या भाकरी बनाने के लिए आटे के रूप में सबसे बढ़िया',
        'अगर बाजरा पहली बार खा रहे हैं तो गेहूँ के आटे में मिलाएँ (50:50) — स्वाद हल्का रहेगा',
        'बाजरे की रोटी गर्म-गर्म घी के साथ परोसें — बेहतरीन स्वाद आएगा',
        'बाजरे का आटा ज़्यादा दिन नहीं टिकता — ताज़ा पिसवाएँ या फ़्रिज में रखें',
      ],
    },

    healthBenefits: [
      {
        benefit: 'आयरन का भरपूर स्रोत',
        description:
          'बाजरे में प्रति 100g में 8.0mg आयरन होता है, जो इसे अनाजों में सबसे अच्छे प्लांट-बेस्ड आयरन स्रोतों में से एक बनाता है। यह आयरन की कमी से होने वाले एनीमिया से लड़ने में मदद करता है, जो भारत में काफ़ी आम है।',
        evidenceLevel: 'well-established',
        source: 'ICMR-NIN IFCT 2017',
      },
      {
        benefit: 'दिल की सेहत के लिए फ़ायदेमंद',
        description:
          'बाजरे में मौजूद मैग्नीशियम और पोटैशियम ब्लड प्रेशर को नियंत्रित करने और दिल की धड़कन को सामान्य रखने में मदद करके हृदय स्वास्थ्य को सहारा देते हैं।',
        evidenceLevel: 'supported-by-research',
        source: 'Journal of Food Science and Technology',
      },
      {
        benefit: 'डायबिटीज़ प्रबंधन में सहायक',
        description:
          'लगभग 55 के ग्लाइसेमिक इंडेक्स के साथ, बाजरा खून में ग्लूकोज़ को धीरे-धीरे छोड़ता है, जो इसे डायबिटीज़ वाले लोगों के लिए उपयुक्त बनाता है।',
        evidenceLevel: 'supported-by-research',
        source: 'International Journal of Food Sciences and Nutrition',
      },
      {
        benefit: 'ऊर्जा से भरपूर अनाज',
        description:
          'प्रति 100g में 361 कैलोरी, अच्छी प्रोटीन (11.6g) और फ़ैट (5.0g) के साथ, बाजरा ऊर्जा का बेहतरीन स्रोत है, ख़ासकर शारीरिक मेहनत करने वालों और मज़दूरों के लिए।',
        evidenceLevel: 'well-established',
        source: 'ICMR-NIN IFCT 2017',
      },
    ],

    sideEffects: [
      {
        condition: 'पाचन संबंधी तकलीफ़',
        description:
          'शुरुआत में कुछ लोगों को पेट फूलने की समस्या हो सकती है, ख़ासकर जो मिलेट खाने के आदी नहीं हैं। धीरे-धीरे शुरू करना बेहतर है।',
        severity: 'mild',
      },
      {
        condition: 'गोइट्रोजन की मौजूदगी',
        description:
          'कच्चे रूप में गोइट्रोजन होते हैं जो थायरॉइड को प्रभावित कर सकते हैं। पकाने से यह काफ़ी कम हो जाता है, जिससे सामान्य खपत के लिए सुरक्षित रहता है।',
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
      'icmr-nin-ifct-2017',
      'bhavaprakasha-nighantu',
      'gopalan-nutritive-value-indian-foods',
      'icar-pearl-millet-handbook',
    ],
  },

  // =============================================
  // FINGER MILLET (Ragi)
  // =============================================
  {
    slug: 'finger-millet',
    name: 'रागी (Finger Millet)',
    commonName: 'रागी / मंडुआ',
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
    tagline: 'कैल्शियम का चैंपियन — अनाजों में सबसे ज़्यादा नॉन-डेयरी कैल्शियम का स्रोत',
    description:
      'रागी (Finger Millet) अनाजों की दुनिया में कैल्शियम के चैंपियन के रूप में मशहूर है, जिसमें प्रति 100g में असाधारण 344mg कैल्शियम होता है — सभी अनाजों में सबसे ज़्यादा। कर्नाटक और तमिलनाडु का प्रमुख अनाज, रागी भारत में 3000 साल से ज़्यादा समय से उगाया जा रहा है। शिशुओं के पोषण, हड्डियों की मज़बूती और बुज़ुर्गों के आहार के लिए इसकी ख़ासतौर पर क़दर की जाती है। रागी मुद्दे (रागी बॉल) और रागी माल्ट दक्षिण भारत की पहचान हैं।',

    names: {
      english: 'Finger Millet',
      hindi: 'रागी (Ragi) / मंडुआ (Mandua)',
      tamil: 'கேழ்வரகு (Kezhvaragu)',
      telugu: 'రాగి (Ragi)',
      kannada: 'ರಾಗಿ (Ragi)',
      malayalam: 'മുത്താറി (Mutthari)',
      marathi: 'नाचणी (Nachni)',
      bengali: 'মড়ুয়া (Marua)',
      gujarati: 'નાગલી (Nagli)',
      odia: 'ମାଣ୍ଡିଆ (Mandia)',
      punjabi: 'ਮੰਡੂਆ (Mandua)',
      sanskrit: 'मधूलिका (Madhulika)',
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
      source: 'ICMR-NIN IFCT 2017',
      sourceDetail: 'Indian Food Composition Tables, National Institute of Nutrition, Hyderabad',
    },

    glycemicIndex: {
      value: 61,
      category: 'medium',
      source: 'Gopalan et al., Nutritive Value of Indian Foods, NIN',
    },

    ayurveda: {
      rasa: ['मधुर (मीठा)', 'कषाय (कसैला)'],
      guna: ['लघु (हल्का)', 'रूक्ष (सूखा)'],
      virya: 'शीत (ठंडा)',
      vipaka: 'मधुर',
      doshaEffect: {
        vata: 'neutral',
        pitta: 'decreases',
        kapha: 'decreases',
      },
      therapeuticUses: [
        'हड्डियों को मज़बूत बनाने और कैल्शियम की पूर्ति के लिए बेहतरीन',
        'बढ़ते बच्चों और बुज़ुर्गों के लिए अनुशंसित',
        'ठंडक देने वाला प्रभाव पित्त स्थितियों में लाभकारी',
        'हल्के गुण के कारण वज़न प्रबंधन में सहायक',
        'बीमारी से उबरने और रिकवरी के आहार में उपयोगी',
      ],
      contraindications: [
        'ज़्यादा सेवन से रूक्ष (सूखे) गुण के कारण कब्ज़ हो सकता है',
        'किडनी स्टोन (कैल्शियम ऑक्सालेट वाले) के मरीज़ सीमित मात्रा में सेवन करें',
      ],
      classicalReference: 'चरक संहिता, सूत्र स्थान',
    },

    history: {
      originRegion: 'इथियोपिया के पहाड़ी क्षेत्र, पूर्वी अफ़्रीका',
      domesticationPeriod: 'लगभग 5000 साल पहले (~3000 ईसा पूर्व)',
      archaeologicalEvidence:
        'कर्नाटक के हल्लूर से लगभग 1800 ईसा पूर्व के पुरातत्व प्रमाण दक्षिण भारत में इसकी शुरुआती खेती को दर्शाते हैं।',
      spreadPattern:
        'इथियोपिया के पहाड़ी इलाकों में पालतू बनाया गया और लगभग 3000 ईसा पूर्व में भारत पहुँचा, जहाँ यह दक्कन पठार और दक्षिण भारत की पहाड़ियों में प्रमुख फ़सल बन गया।',
      culturalSignificance:
        'रागी कर्नाटक और तमिलनाडु की खाद्य संस्कृति का केंद्र है। रागी मुद्दे (रागी बॉल) कर्नाटक का पारंपरिक मुख्य भोजन है। रागी माल्ट (अम्बली/कांजी) भारतीय शिशुओं का पारंपरिक पहला आहार है।',
    },

    cultivation: {
      majorStates: ['कर्नाटक', 'तमिलनाडु', 'आंध्र प्रदेश', 'उत्तराखंड', 'महाराष्ट्र'],
      globalRegions: ['पूर्वी अफ़्रीका (इथियोपिया, युगांडा)', 'दक्षिण एशिया', 'नेपाल'],
      growingSeason: 'खरीफ़ (जून-अक्टूबर)',
      waterRequirement: '500-750mm बारिश',
      soilType: 'लाल दोमट और लेटेराइट मिट्टी; हल्की अम्लीय मिट्टी में भी उगता है',
      harvestDays: '90-120 दिन',
    },

    cooking: {
      waterRatio: '1:3.5',
      soakingTime: 'आटे के लिए भिगोने की ज़रूरत नहीं',
      cookingTime: '15-20 मिनट (दलिया/पॉरिज)',
      texture: 'दलिया बनाने पर मुलायम, आटे के रूप में थोड़ा दानेदार',
      flavorProfile: 'हल्का, थोड़ा मीठा, मिट्टी जैसा',
      bestSubstituteFor: 'गेहूँ का आटा, चावल का आटा',
      tips: [
        'रागी मुद्दे के लिए उबलते पानी में रागी का आटा डालें और गाँठ न पड़ने दें — लगातार हिलाते रहें',
        'रागी माल्ट बनाने के लिए रागी के आटे को पानी में मिलाकर गाढ़ा होने तक पकाएँ',
        'रागी के आटे को गुड़ और इलायची के साथ मिलाकर पौष्टिक दलिया बनाएँ',
        'रागी का आटा डोसा, इडली और बेक्ड चीज़ों में बढ़िया काम करता है',
        'अंकुरित रागी के आटे में पोषक तत्वों का अवशोषण और बेहतर होता है',
      ],
    },

    healthBenefits: [
      {
        benefit: 'कैल्शियम का असाधारण स्रोत',
        description:
          'रागी में प्रति 100g में 344mg कैल्शियम होता है, जो सभी अनाजों में सबसे ज़्यादा है और दूध के बराबर है। यह हड्डियों की सेहत के लिए अमूल्य है, ख़ासकर लैक्टोज़ इंटॉलरेंट लोगों के लिए।',
        evidenceLevel: 'well-established',
        source: 'ICMR-NIN IFCT 2017',
      },
      {
        benefit: 'हड्डियों की सेहत और ऑस्टियोपोरोसिस रोकथाम में सहायक',
        description:
          'ज़्यादा कैल्शियम और फ़ॉस्फ़ोरस हड्डियों की मज़बूती को बढ़ाते हैं और ऑस्टियोपोरोसिस रोकने में मदद कर सकते हैं, ख़ासकर मेनोपॉज़ के बाद की महिलाओं और बुज़ुर्गों में।',
        evidenceLevel: 'supported-by-research',
        source: 'Journal of Bone and Mineral Research',
      },
      {
        benefit: 'डायबिटीज़ प्रबंधन में सहायक',
        description:
          'रागी में ऐसे अमीनो एसिड होते हैं जो ब्लड शुगर रिस्पॉन्स को कम करने में मदद करते हैं। इसके छिलके में पॉलीफ़ेनॉल और डाइटरी फ़ाइबर भरपूर होते हैं जो ग्लूकोज़ के अवशोषण को धीमा करते हैं।',
        evidenceLevel: 'supported-by-research',
        source: 'Journal of Agricultural and Food Chemistry',
      },
      {
        benefit: 'एंटीऑक्सीडेंट से भरपूर',
        description:
          'इसमें फ़ेनोलिक एसिड, फ़्लेवोनॉइड्स और टैनिन होते हैं जिनमें महत्वपूर्ण एंटीऑक्सीडेंट गुण हैं, जो शरीर में ऑक्सीडेटिव स्ट्रेस से लड़ने में मदद करते हैं।',
        evidenceLevel: 'supported-by-research',
        source: 'Food Chemistry',
      },
      {
        benefit: 'शिशुओं और बुज़ुर्गों के पोषण के लिए बेहतरीन',
        description:
          'रागी माल्ट दक्षिण भारत में पारंपरिक रूप से शिशुओं का पहला पूरक आहार रहा है। इसकी आसान पाचन शक्ति और भरपूर कैल्शियम इसे बुज़ुर्गों के पोषण के लिए भी आदर्श बनाते हैं।',
        evidenceLevel: 'well-established',
        source: 'Indian Pediatrics',
      },
    ],

    sideEffects: [
      {
        condition: 'ऑक्सालेट की मौजूदगी',
        description:
          'रागी में ऑक्सालेट होते हैं जो कुछ मामलों में कैल्शियम के अवशोषण में बाधा डाल सकते हैं और संवेदनशील लोगों में किडनी स्टोन बनने में योगदान कर सकते हैं।',
        severity: 'mild',
      },
      {
        condition: 'कब्ज़ का ख़तरा',
        description:
          'पर्याप्त पानी के बिना ज़्यादा मात्रा में खाने पर कब्ज़ हो सकता है, क्योंकि इसकी प्रकृति रूक्ष (सूखी) है।',
        severity: 'mild',
      },
    ],

    isGlutenFree: true,
    relatedRecipes: [
      'ragi-mudde',
      'ragi-dosa',
      'ragi-porridge',
      'ragi-ladoo',
      'ragi-idli',
    ],
    sources: [
      'icmr-nin-ifct-2017',
      'charaka-samhita',
      'gopalan-nutritive-value-indian-foods',
      'icar-finger-millet-handbook',
      'hallur-archaeological-report',
    ],
  },

  // =============================================
  // SORGHUM (Jowar)
  // =============================================
  {
    slug: 'sorghum',
    name: 'ज्वार (Sorghum)',
    commonName: 'ज्वार',
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
    tagline: 'बहुमुखी ताक़तवर अनाज — फ़ाइबर, एंटीऑक्सीडेंट और पाक विविधता से भरपूर',
    description:
      'ज्वार (Sorghum) सबसे बहुमुखी और व्यापक रूप से उगाए जाने वाले मिलेट में से एक है, जो महाराष्ट्र, कर्नाटक और मध्य प्रदेश में उगाया जाता है। यह दुनिया का पाँचवाँ सबसे अहम अनाज है। अपने बहुत ज़्यादा फ़ाइबर (प्रति 100g में 9.7g) और भरपूर एंटीऑक्सीडेंट के लिए जाना जाता है। ज्वार को रोटी (भाकरी), दलिया और यहाँ तक कि किण्वित पेय के रूप में भी खाया जाता है। यह खरीफ़ और रबी दोनों मौसमों में उगता है, जो इसे साल भर का मुख्य अनाज बनाता है।',

    names: {
      english: 'Sorghum',
      hindi: 'ज्वार (Jowar)',
      tamil: 'சோளம் (Cholam)',
      telugu: 'జొన్నలు (Jonnalu)',
      kannada: 'ಜೋಳ (Jola)',
      malayalam: 'ചോളം (Cholam)',
      marathi: 'ज्वारी (Jwari)',
      bengali: 'জোয়ার (Jowar)',
      gujarati: 'જુવાર (Juvar)',
      odia: 'ଜୁଆର (Juara)',
      punjabi: 'ਜਵਾਰ (Jawar)',
      sanskrit: 'यवनाल (Yavanala)',
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
      source: 'ICMR-NIN IFCT 2017',
      sourceDetail: 'Indian Food Composition Tables, National Institute of Nutrition, Hyderabad',
    },

    glycemicIndex: {
      value: 62,
      category: 'medium',
      source: 'Gopalan et al., Nutritive Value of Indian Foods, NIN',
    },

    ayurveda: {
      rasa: ['मधुर (मीठा)', 'कषाय (कसैला)'],
      guna: ['रूक्ष (सूखा)', 'लघु (हल्का)'],
      virya: 'शीत (ठंडा)',
      vipaka: 'कटु (तीखा)',
      doshaEffect: {
        vata: 'increases',
        pitta: 'decreases',
        kapha: 'decreases',
      },
      therapeuticUses: [
        'ज़्यादा फ़ाइबर के कारण पाचन स्वास्थ्य को बढ़ावा देता है',
        'ठंडक का प्रभाव पित्त-प्रधान स्थितियों में लाभकारी',
        'हल्के और सूखे गुणों के कारण वज़न प्रबंधन में सहायक',
        'मूत्र मार्ग की सेहत के लिए उपयोगी',
      ],
      contraindications: [
        'वात बढ़ा सकता है — संतुलन के लिए घी या तेल के साथ खाएँ',
        'ज़्यादा सेवन से शरीर में रूखापन आ सकता है',
      ],
      classicalReference: 'भावप्रकाश निघंटु',
    },

    history: {
      originRegion: 'पूर्वोत्तर अफ़्रीका (सूडान-इथियोपिया क्षेत्र)',
      domesticationPeriod: 'लगभग 5000-8000 साल पहले',
      archaeologicalEvidence:
        'अफ़्रीका में सबसे पहले उगाए गए अनाजों में से एक। दक्कन पठार के पुरातत्व स्थलों से मिले प्रमाण लगभग 2000 ईसा पूर्व तक भारत में इसकी उपस्थिति की पुष्टि करते हैं।',
      spreadPattern:
        'पूर्वोत्तर अफ़्रीका में पालतू बनाया गया और व्यापार मार्गों से 2000 ईसा पूर्व तक भारत पहुँचा, फिर चीन और दक्षिण-पूर्व एशिया तक फैला।',
      culturalSignificance:
        'ज्वार की भाकरी (चपटी रोटी) महाराष्ट्र और उत्तरी कर्नाटक की सांस्कृतिक पहचान है। यह दक्कन पठार क्षेत्र की खाद्य पहचान का अभिन्न हिस्सा है और करोड़ों लोग इसे रोज़ खाते हैं।',
    },

    cultivation: {
      majorStates: ['महाराष्ट्र', 'कर्नाटक', 'मध्य प्रदेश', 'राजस्थान', 'तमिलनाडु'],
      globalRegions: ['उप-सहारा अफ़्रीका', 'दक्षिण एशिया', 'अमेरिका', 'ऑस्ट्रेलिया'],
      growingSeason: 'खरीफ़ (जुलाई-अक्टूबर) और रबी (अक्टूबर-फ़रवरी) दोनों',
      waterRequirement: '400-600mm बारिश',
      soilType: 'काली कपास मिट्टी (वर्टीसोल), चिकनी दोमट; क्षारीय मिट्टी सहन करती है',
      harvestDays: '100-120 दिन',
    },

    cooking: {
      waterRatio: '1:2.5',
      soakingTime: 'वैकल्पिक — 4-6 घंटे भिगोना (साबुत दाने के लिए)',
      cookingTime: '25-30 मिनट',
      texture: 'मज़बूत, थोड़ा चबाने जैसा',
      flavorProfile: 'हल्का, थोड़ा मीठा, सामान्य',
      bestSubstituteFor: 'चावल, गेहूँ',
      tips: [
        'ज्वार के आटे से बढ़िया भाकरी बनती है — गरम आटे को हाथ से थपथपाकर लचीली रोटी बनाएँ',
        'साबुत ज्वार को भिगोकर चावल की तरह पकाया जा सकता है',
        'भुने हुए ज्वार (पॉपकॉर्न जैसे) महाराष्ट्र में लोकप्रिय नाश्ता है',
        'ज्वार के आटे में ग्लूटेन नहीं होता — बेकिंग करते समय बाइंडर मिलाएँ',
        'सब्ज़ियों के साथ मिलाकर पौष्टिक ज्वार उपमा या खिचड़ी बनाएँ',
      ],
    },

    healthBenefits: [
      {
        benefit: 'बहुत ज़्यादा फ़ाइबर — पाचन में सहायक',
        description:
          'ज्वार में प्रति 100g में 9.7g फ़ाइबर होता है, जो सभी अनाजों में सबसे ज़्यादा में से है। यह स्वस्थ पाचन, नियमित मलत्याग और आँतों के माइक्रोबायोम की विविधता को बढ़ावा देता है।',
        evidenceLevel: 'well-established',
        source: 'ICMR-NIN IFCT 2017',
      },
      {
        benefit: 'फ़ेनोलिक यौगिकों और एंटीऑक्सीडेंट से भरपूर',
        description:
          'ज्वार में 3-डीऑक्सीएन्थोसायनिन, टैनिन और फ़ेनोलिक एसिड भरपूर होते हैं जो मज़बूत एंटीऑक्सीडेंट गुण दिखाते हैं, जो शरीर में ऑक्सीडेटिव नुकसान को कम कर सकते हैं।',
        evidenceLevel: 'supported-by-research',
        source: 'Journal of Cereal Science',
      },
      {
        benefit: 'संभावित कैंसर-रोधी गुण',
        description:
          'इसमें टैनिन और अन्य फ़ेनोलिक यौगिक होते हैं जिन्होंने प्रारंभिक अध्ययनों में कैंसर-रोधी गुण दिखाए हैं, ख़ासकर कोलन कैंसर कोशिकाओं के ख़िलाफ़।',
        evidenceLevel: 'preliminary-evidence',
        source: 'Nutrition and Cancer journal',
      },
      {
        benefit: 'दिल की सेहत में सहायक',
        description:
          'ज़्यादा फ़ाइबर और मैग्नीशियम, साथ ही ज्वार के मोम में पाए जाने वाले पॉलिकोसैनोल, कोलेस्ट्रॉल कम करने और हृदय स्वास्थ्य को बेहतर बनाने में मदद कर सकते हैं।',
        evidenceLevel: 'supported-by-research',
        source: 'Journal of Agricultural and Food Chemistry',
      },
    ],

    sideEffects: [
      {
        condition: 'टैनिन-आयरन इंटरैक्शन',
        description:
          'ज्वार में मौजूद टैनिन अन्य खाद्य पदार्थों से आयरन के अवशोषण को कम कर सकते हैं। आयरन की कमी वाले लोगों को ज्वार के साथ आयरन युक्त खाद्य पदार्थ खाते समय ध्यान रखना चाहिए।',
        severity: 'moderate',
      },
      {
        condition: 'शुरुआती पाचन समायोजन',
        description:
          'ज़्यादा फ़ाइबर वाले खाने के आदी न होने पर शुरुआत में गैस और पेट फूलना हो सकता है। धीरे-धीरे शुरू करने की सलाह दी जाती है।',
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
      'icmr-nin-ifct-2017',
      'bhavaprakasha-nighantu',
      'gopalan-nutritive-value-indian-foods',
      'icar-sorghum-handbook',
    ],
  },

  // =============================================
  // FOXTAIL MILLET (Kangni / Thinai)
  // =============================================
  {
    slug: 'foxtail-millet',
    name: 'कंगनी (Foxtail Millet)',
    commonName: 'कंगनी / थिनाई',
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
    tagline: 'सबसे पुराने उगाए गए मिलेट में से एक — प्रोटीन और आयरन से भरपूर, चावल का विकल्प',
    description:
      'कंगनी (Foxtail Millet) मानव इतिहास में सबसे पुरानी उगाई गई फ़सलों में से एक है, उत्तरी चीन में लगभग 9000 साल पहले इसके पालतू बनाने के प्रमाण मिलते हैं। इसमें प्रोटीन (प्रति 100g में 12.3g) ज़्यादा है, डाइटरी फ़ाइबर भरपूर है, और ग्लाइसेमिक इंडेक्स कम (~50) है। पकने पर इसकी फूली हुई, चावल जैसी बनावट इसे चावल का बेहतरीन विकल्प बनाती है। यह बेहद सूखा-सहनशील है, जिसे सिर्फ़ 300-400mm बारिश की ज़रूरत होती है।',

    names: {
      english: 'Foxtail Millet',
      hindi: 'कंगनी (Kangni)',
      tamil: 'தினை (Thinai)',
      telugu: 'కొర్రలు (Korralu)',
      kannada: 'ನವಣೆ (Navane)',
      malayalam: 'തിന (Thina)',
      marathi: 'काँग / राळा (Kang / Rala)',
      bengali: 'কাওন (Kaon)',
      gujarati: 'કાંગ (Kang)',
      odia: 'କଙ୍ଗୁ (Kangu)',
      punjabi: 'ਕੰਗਣੀ (Kangni)',
      sanskrit: 'प्रियंगु (Priyangu)',
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
      source: 'ICMR-NIN IFCT 2017',
      sourceDetail: 'Indian Food Composition Tables, National Institute of Nutrition, Hyderabad',
    },

    glycemicIndex: {
      value: 50,
      category: 'low',
      source: 'Gopalan et al., Nutritive Value of Indian Foods, NIN',
    },

    ayurveda: {
      rasa: ['कषाय (कसैला)', 'मधुर (मीठा)'],
      guna: ['लघु (हल्का)', 'रूक्ष (सूखा)'],
      virya: 'उष्ण (गरम)',
      vipaka: 'कटु (तीखा)',
      doshaEffect: {
        vata: 'increases',
        pitta: 'neutral',
        kapha: 'decreases',
      },
      therapeuticUses: [
        'हल्के और सूखे गुणों के कारण वज़न प्रबंधन में उपयोगी',
        'पाचन अग्नि (Agni) को बढ़ाता है',
        'कफ़ संबंधी समस्याओं जैसे जमाव में लाभकारी',
        'प्रसव के बाद रिकवरी के आहार में पारंपरिक रूप से उपयोग किया जाता है',
      ],
      contraindications: [
        'वात थोड़ा बढ़ा सकता है — संतुलन के लिए घी या तेल मिलाएँ',
        'सूखी त्वचा की समस्या वाले लोगों के लिए ज़्यादा मात्रा में अनुशंसित नहीं',
      ],
      classicalReference: 'अष्टांग हृदय',
    },

    history: {
      originRegion: 'उत्तरी चीन (सिशान पुरातत्व स्थल)',
      domesticationPeriod: 'लगभग 8700 साल पहले (~6700 ईसा पूर्व)',
      archaeologicalEvidence:
        'उत्तरी चीन के सिशान पुरातत्व स्थल से लगभग 8700 साल पुराने अवशेष मिले हैं, जो इसे दुनिया की सबसे पुरानी उगाई गई फ़सलों में से एक बनाते हैं।',
      spreadPattern:
        'उत्तरी चीन में पालतू बनाया गया और मध्य एशिया के व्यापार मार्गों से पश्चिम की ओर भारत, मध्य पूर्व और यूरोप तक फैला।',
      culturalSignificance:
        'कंगनी दक्षिण भारतीय भोजन में सांस्कृतिक महत्व रखती है, ख़ासकर तमिलनाडु (थिनाई) और आंध्र प्रदेश (कोर्रालु) में। इसका उपयोग पारंपरिक त्योहारी व्यंजनों में होता है और प्राचीन संगम तमिल साहित्य में इसका उल्लेख मिलता है।',
    },

    cultivation: {
      majorStates: [
        'आंध्र प्रदेश',
        'कर्नाटक',
        'तमिलनाडु',
        'राजस्थान',
        'मध्य प्रदेश',
      ],
      globalRegions: ['चीन', 'दक्षिण-पूर्व एशिया', 'दक्षिण एशिया', 'यूरोप (ऐतिहासिक)'],
      growingSeason: 'खरीफ़ (जून-अक्टूबर)',
      waterRequirement: '300-400mm बारिश',
      soilType: 'हल्की रेतीली दोमट से मध्यम दोमट मिट्टी; बेहद सूखा-सहनशील',
      harvestDays: '75-90 दिन',
    },

    cooking: {
      waterRatio: '1:2.5',
      soakingTime: '30 मिनट',
      cookingTime: '15-20 मिनट',
      texture: 'फूली हुई, चावल जैसी',
      flavorProfile: 'नट जैसा (nutty), हल्का मीठा',
      bestSubstituteFor: 'चावल',
      tips: [
        'अच्छे नतीजों के लिए अच्छी तरह धोकर 30 मिनट भिगोएँ',
        'चावल की तरह पकाएँ — यह बहुत अच्छे से फूलता है',
        'बढ़िया उपमा, पुलाव और पोंगल बनता है',
        'मीठे व्यंजनों जैसे पायसम (खीर) में भी इस्तेमाल कर सकते हैं',
        'पकाने से पहले हल्का सूखा भूनें — ज़्यादा स्वादिष्ट बनेगा',
      ],
    },

    healthBenefits: [
      {
        benefit: 'ज़्यादा प्रोटीन',
        description:
          'कंगनी में प्रति 100g में 12.3g प्रोटीन होता है, जो मिलेट में सबसे ज़्यादा में से एक है। यह शाकाहारियों के लिए प्लांट-बेस्ड प्रोटीन का बेहतरीन स्रोत है।',
        evidenceLevel: 'well-established',
        source: 'ICMR-NIN IFCT 2017',
      },
      {
        benefit: 'कम ग्लाइसेमिक इंडेक्स — डायबिटीज़ वालों के लिए अच्छा',
        description:
          'लगभग 50 के GI के साथ, कंगनी में ग्लूकोज़ धीरे-धीरे रिलीज़ होता है, जो इसे डायबिटीज़ वालों के लिए एक उपयुक्त अनाज बनाता है।',
        evidenceLevel: 'supported-by-research',
        source: 'International Journal of Diabetes in Developing Countries',
      },
      {
        benefit: 'डाइटरी फ़ाइबर से भरपूर',
        description:
          'प्रति 100g में 8.0g फ़ाइबर होता है, जो पाचन स्वास्थ्य को बढ़ावा देता है, पेट भरा रखता है और कोलेस्ट्रॉल को सामान्य बनाए रखने में मदद करता है।',
        evidenceLevel: 'well-established',
        source: 'ICMR-NIN IFCT 2017',
      },
      {
        benefit: 'विटामिन B का अच्छा स्रोत',
        description:
          'कंगनी विटामिन B-कॉम्प्लेक्स का अच्छा स्रोत है, जिसमें थायमिन और नियासिन शामिल हैं, जो ऊर्जा चयापचय और तंत्रिका तंत्र के कामकाज के लिए ज़रूरी हैं।',
        evidenceLevel: 'supported-by-research',
        source: 'Journal of Food Science and Technology',
      },
    ],

    sideEffects: [
      {
        condition: 'गोइट्रोजन की मौजूदगी',
        description:
          'गोइट्रोजेनिक यौगिकों के कारण बहुत ज़्यादा खाने पर थायरॉइड की समस्या हो सकती है। थायरॉइड रोगियों को सीमित मात्रा में खाना चाहिए और डॉक्टर से सलाह लेनी चाहिए।',
        severity: 'consult-doctor',
      },
      {
        condition: 'प्रोसेसिंग की ज़रूरत',
        description:
          'छिलके वाली क़िस्म को पकाने से पहले सही ढंग से छिलका उतारना/प्रोसेस करना ज़रूरी है। अधूरी प्रोसेसिंग वाला दाना पचने में मुश्किल हो सकता है।',
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
      'icmr-nin-ifct-2017',
      'ashtanga-hridaya',
      'gopalan-nutritive-value-indian-foods',
      'cishan-archaeological-studies',
    ],
  },

  // =============================================
  // LITTLE MILLET (Kutki / Samai)
  // =============================================
  {
    slug: 'little-millet',
    name: 'कुटकी (Little Millet)',
    commonName: 'कुटकी / सामई',
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
    tagline: 'आयरन से भरपूर छोटा दाना — ज़्यादा फ़ाइबर के साथ चावल का सबसे अच्छा विकल्प',
    description:
      'कुटकी (Little Millet) भारत का मूल छोटे दाने वाला मिलेट है, जिसे पूर्वी घाट क्षेत्र में पालतू बनाया गया। अपने छोटे आकार के बावजूद, यह बहुत ज़्यादा आयरन (प्रति 100g में 9.3mg) और अच्छे-ख़ासे फ़ाइबर (प्रति 100g में 7.6g) के साथ ज़बरदस्त पोषण देता है। इसका सामान्य स्वाद और चावल जैसी बनावट इसे चावल का सबसे नज़दीकी मिलेट विकल्प बनाती है। इसे मध्य और दक्षिण भारत के आदिवासी क्षेत्रों में प्राचीन काल से उगाया जा रहा है।',

    names: {
      english: 'Little Millet',
      hindi: 'कुटकी (Kutki)',
      tamil: 'சாமை (Samai)',
      telugu: 'సామలు (Samalu)',
      kannada: 'ಸಾಮೆ (Same)',
      malayalam: 'ചാമ (Chama)',
      marathi: 'वरी (Vari) / साव (Sav)',
      bengali: 'সামা (Sama)',
      gujarati: 'ગજરો (Gajro) / મોરૈયો (Moraiyo)',
      odia: 'ସୁଆଁ (Suan)',
      punjabi: 'ਸਵਾਂਕ (Swank)',
      sanskrit: 'श्यामाक (Shyamaka)',
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
      source: 'ICMR-NIN IFCT 2017',
      sourceDetail: 'Indian Food Composition Tables, National Institute of Nutrition, Hyderabad',
    },

    glycemicIndex: {
      value: 52,
      category: 'low',
      source: 'Gopalan et al., Nutritive Value of Indian Foods, NIN',
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
        'संतुलित दोष प्रभाव के कारण सभी शरीर प्रकारों के लिए उपयुक्त',
        'ठंडी प्रकृति गर्मियों और पित्त स्थितियों में लाभकारी',
        'लघु (हल्के) गुण के कारण सौम्य पाचन में सहायक',
        'बीमारी से उबरने के आहार में पारंपरिक रूप से उपयोग किया जाता है',
      ],
      contraindications: [
        'संतुलित प्रकृति के कारण बहुत कम दुष्प्रभाव',
        'एंटीन्यूट्रिएंट कम करने के लिए भिगोने की ज़रूरत हो सकती है',
      ],
      classicalReference: 'भावप्रकाश निघंटु, धान्य वर्ग',
    },

    history: {
      originRegion: 'पूर्वी घाट क्षेत्र, भारत',
      domesticationPeriod: 'प्राचीन काल (सटीक समय अनिश्चित)',
      archaeologicalEvidence:
        'भारत का मूल अनाज, मध्य और दक्षिण भारत के आदिवासी क्षेत्रों में लंबे इतिहास के साथ खेती होती रही है। सीमित पुरातत्व रिकॉर्ड हैं, लेकिन नृवंशविज्ञान प्रमाण प्राचीन खेती की पुष्टि करते हैं।',
      spreadPattern:
        'भारत के पूर्वी घाट क्षेत्र में पालतू बनाया गया और मुख्यतः भारतीय फ़सल ही बना रहा, आदिवासी और वर्षा-आधारित खेती वाले क्षेत्रों में व्यापक रूप से उगाया जाता है।',
      culturalSignificance:
        'कुटकी मध्य भारत के आदिवासी समुदायों के लिए महत्वपूर्ण फ़सल है। तमिलनाडु में सामई चावल एक लोकप्रिय रोज़मर्रा की मिलेट डिश है। कुछ क्षेत्रों में नवरात्रि व्रत की परंपराओं में भी इसका महत्व है।',
    },

    cultivation: {
      majorStates: ['मध्य प्रदेश', 'छत्तीसगढ़', 'कर्नाटक', 'तमिलनाडु', 'ओडिशा'],
      globalRegions: ['दक्षिण एशिया (मुख्यतः भारत)', 'दक्षिण-पूर्व एशिया (म्यांमार, श्रीलंका)'],
      growingSeason: 'खरीफ़ (जून-अक्टूबर)',
      waterRequirement: '300-500mm बारिश',
      soilType: 'रेतीली दोमट से लाल लेटेराइट मिट्टी; ऊसर ज़मीन में भी अच्छा उगता है',
      harvestDays: '75-90 दिन',
    },

    cooking: {
      waterRatio: '1:2.5',
      soakingTime: '30 मिनट',
      cookingTime: '15 मिनट',
      texture: 'चावल से बहुत मिलता-जुलता, थोड़ा चिपचिपा',
      flavorProfile: 'हल्का, सामान्य',
      bestSubstituteFor: 'चावल (मिलेट में सबसे नज़दीकी विकल्प)',
      tips: [
        '30 मिनट भिगोएँ और पकाने से पहले अच्छी तरह धो लें',
        'बिल्कुल चावल की तरह पकाएँ — मिलेट पर शिफ़्ट करने का सबसे आसान तरीक़ा',
        'बढ़िया नींबू चावल, पुलाव और बिरयानी का विकल्प बनता है',
        'उड़द दाल के साथ मिलाकर इडली और डोसा बैटर बनाया जा सकता है',
        'इसका सामान्य स्वाद इसे नमकीन और मीठी दोनों डिशों के लिए बहुमुखी बनाता है',
      ],
    },

    healthBenefits: [
      {
        benefit: 'बहुत ज़्यादा आयरन',
        description:
          'कुटकी में प्रति 100g में 9.3mg आयरन होता है, जो सभी मिलेट और अनाजों में सबसे ज़्यादा में से एक है। यह आयरन की कमी से होने वाले एनीमिया की रोकथाम और प्रबंधन के लिए बहुमूल्य है।',
        evidenceLevel: 'well-established',
        source: 'ICMR-NIN IFCT 2017',
      },
      {
        benefit: 'पाचन स्वास्थ्य के लिए अच्छा फ़ाइबर स्रोत',
        description:
          'प्रति 100g में 7.6g फ़ाइबर के साथ, कुटकी स्वस्थ पाचन, नियमित मलत्याग में सहायता करती है और कोलेस्ट्रॉल कम करने में मदद कर सकती है।',
        evidenceLevel: 'well-established',
        source: 'ICMR-NIN IFCT 2017',
      },
      {
        benefit: 'कम GI — डायबिटीज़ वालों के लिए उपयुक्त',
        description:
          'लगभग 52 के ग्लाइसेमिक इंडेक्स के साथ, कुटकी धीमी और स्थिर ग्लूकोज़ रिलीज़ देती है, जो इसे डायबिटीज़ प्रबंधन के लिए उपयुक्त बनाती है।',
        evidenceLevel: 'supported-by-research',
        source: 'International Journal of Food Sciences and Nutrition',
      },
      {
        benefit: 'एंटीऑक्सीडेंट से भरपूर',
        description:
          'इसमें फ़ेनोलिक यौगिक और फ़्लेवोनॉइड्स होते हैं जो एंटीऑक्सीडेंट गतिविधि में योगदान कर सकते हैं, हालाँकि इन फ़ायदों को पूरी तरह समझने के लिए और शोध की ज़रूरत है।',
        evidenceLevel: 'preliminary-evidence',
        source: 'Journal of Food Science and Technology',
      },
    ],

    sideEffects: [
      {
        condition: 'बिना भिगोए खाने पर पेट फूलना',
        description:
          'अगर पकाने से पहले नहीं भिगोया तो पेट फूल सकता है। पाचन में सुधार के लिए कम से कम 30 मिनट भिगोने की सलाह दी जाती है।',
        severity: 'mild',
      },
      {
        condition: 'एंटीन्यूट्रिएंट की मौजूदगी',
        description:
          'इसमें फ़ाइटेट (एंटीन्यूट्रिएंट) होते हैं जो खनिज अवशोषण को कम कर सकते हैं। भिगोने, अंकुरित करने या किण्वित करने से फ़ाइटेट का स्तर काफ़ी कम हो जाता है।',
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
      'icmr-nin-ifct-2017',
      'bhavaprakasha-nighantu',
      'gopalan-nutritive-value-indian-foods',
      'icar-small-millets-handbook',
    ],
  },
];
