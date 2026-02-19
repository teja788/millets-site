import type { Millet } from '@/lib/types';

export const minorMillets: Millet[] = [
  // =============================================
  // KODO MILLET — دخن الكودو
  // =============================================
  {
    slug: 'kodo-millet',
    name: 'دخن الكودو',
    commonName: 'كودو / كودرا',
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
    tagline: 'الحبوب الغنية بمضادات الأكسدة المستخدمة منذ قرون في طقوس الصيام الهندية',
    description:
      'دخن الكودو (كودرا/فاراغو) حبوب صلبة مقاومة للجفاف تعود أصولها إلى الهند، وقد زُرعت منذ أكثر من 3000 عام. تتميز بكونها من أقل أنواع الدخن في السعرات الحرارية بواقع 309 سعرة لكل 100 غرام، وهي استثنائية في ثرائها بمضادات الأكسدة البوليفينولية. يحظى دخن الكودو بأهمية ثقافية عميقة في تقاليد الصيام الهندية، ويُستخدم على نطاق واسع خلال فترات فرات (الصيام). يُعدّ غذاءً أساسياً في المناطق القبلية بوسط الهند، وتتزايد شعبيته من جديد بفضل فوائده الصحية.',

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
      rasa: ['Kashaya (astringent)', 'Madhura (sweet)'],
      guna: ['Laghu (light)', 'Ruksha (dry)'],
      virya: 'Sheeta (cool)',
      vipaka: 'Katu (pungent)',
      doshaEffect: {
        vata: 'increases',
        pitta: 'decreases',
        kapha: 'decreases',
      },
      therapeuticUses: [
        'يُستخدم تقليدياً في حميات مرضى السكري لإدارة سكر الدم',
        'تأثيره المبرّد مفيد خلال نوبات تهيّج البيتا',
        'يدعم إدارة الوزن بفضل انخفاض محتواه من السعرات الحرارية',
        'يُوصى به تقليدياً خلال الصيام بفضل طبيعته الخفيفة',
      ],
      contraindications: [
        'قد يُهيّج الفاتا — يُتناول مع السمن أو في تحضيرات دافئة',
        'يجب تنظيفه ومعالجته جيداً لتجنب التلوث الفطري',
      ],
      classicalReference: 'Charaka Samhita',
    },

    history: {
      originRegion: 'شبه القارة الهندية',
      domesticationPeriod: 'منذ نحو 3000 عام',
      archaeologicalEvidence:
        'نبات هندي أصيل بتاريخ طويل من الزراعة. يُزرع على نطاق واسع في المناطق القبلية بوسط الهند منذ آلاف السنين. التوثيق الأثري الرسمي محدود، غير أن السجلات الإثنونباتية واسعة.',
      spreadPattern:
        'جرى تدجينه في الهند وظلّ يُزرع في المقام الأول في شبه القارة الهندية، مع انتشار محدود إلى جنوب شرق آسيا وغرب أفريقيا.',
      culturalSignificance:
        'تتجذّر لدخن الكودو جذور عميقة في تقاليد الصيام الهندي (فرات)، وهو من الحبوب المسموح بتناولها خلال فترات الصيام الهندوسية. كما يُعدّ محصولاً حيوياً لأمن الغذاء للمجتمعات القبلية في ماديا براديش وتشاتيسغار.',
    },

    cultivation: {
      majorStates: ['Tamil Nadu', 'Madhya Pradesh', 'Chhattisgarh', 'Maharashtra', 'Karnataka'],
      globalRegions: ['South Asia (India)', 'Southeast Asia', 'West Africa'],
      growingSeason: 'Kharif (June-October)',
      waterRequirement: '400-500mm rainfall',
      soilType: 'تربة حصوية ولاتيريتية وضحلة؛ ينمو جيداً في التربة الفقيرة',
      harvestDays: '90-120 days',
    },

    cooking: {
      waterRatio: '1:2.5',
      soakingTime: '6-8 ساعات',
      cookingTime: '20-25 دقيقة',
      texture: 'شبيه بالأرز لكن أكثر تماسكاً',
      flavorProfile: 'خفيف، ترابي',
      bestSubstituteFor: 'الأرز',
      tips: [
        'انقعه لمدة 6-8 ساعات أو طوال الليل للحصول على أفضل النتائج',
        'اشطفه جيداً بعد النقع لإزالة أي مرارة',
        'اطهه كالأرز بعد النقع — تتفرد الحبات جيداً',
        'يناسب تحضيرات الأوبما والبولاو والبونغال',
        'تأكد من أن الحبوب من مصدر موثوق ومعالَجة بشكل سليم',
      ],
    },

    healthBenefits: [
      {
        benefit: 'محتوى عالٍ من البوليفينول المضاد للأكسدة',
        description:
          'يزخر دخن الكودو بالمركبات البوليفينولية ذات الخصائص المضادة القوية للأكسدة، مما يساعد في حماية الخلايا من التلف التأكسدي.',
        evidenceLevel: 'supported-by-research',
        source: 'Journal of Food Science and Technology',
      },
      {
        benefit: 'غني بالألياف لصحة الجهاز الهضمي',
        description:
          'بمحتوى 9.0 غرام من الألياف لكل 100 غرام، يدعم دخن الكودو صحة الجهاز الهضمي وانتظام حركة الأمعاء وقد يساعد في الحفاظ على مستويات صحية من الكوليسترول.',
        evidenceLevel: 'well-established',
        source: 'ICMR-NIN IFCT 2017',
      },
      {
        benefit: 'انخفاض محتوى السعرات الحرارية',
        description:
          'بواقع 309 سعرة حرارية لكل 100 غرام، يملك دخن الكودو أدنى محتوى من السعرات بين أنواع الدخن الشائعة الاستهلاك، مما يجعله مناسباً لحميات إدارة الوزن.',
        evidenceLevel: 'well-established',
        source: 'ICMR-NIN IFCT 2017',
      },
      {
        benefit: 'استُخدم تقليدياً في حميات مرضى السكري',
        description:
          'بمؤشر جلايسيمي منخفض يبلغ نحو 48، أوصى الطبّ الآيورفيدي والطب الشعبي تقليدياً بدخن الكودو لإدارة مستويات السكر في الدم.',
        evidenceLevel: 'traditional-knowledge',
        source: 'Indian Journal of Traditional Knowledge',
      },
    ],

    sideEffects: [
      {
        condition: 'تسمم كودوا (تلوث فطري)',
        description:
          'يجب تنظيفه جيداً، إذ قد يسبب دخن الكودو الملوّث تسمماً (تسمم كودوا) نتيجة التلوث الفطري بالأسبرجيلوس فلافوس. تشمل الأعراض الغثيان والارتعاش والنعاس. يُستحسن دائماً الشراء من مصادر موثوقة.',
        severity: 'consult-doctor',
      },
      {
        condition: 'مرارة ناتجة عن معالجة غير سليمة',
        description:
          'قد تظهر مرارة طفيفة إذا لم يُعالَج ويُنظَّف بشكل صحيح. يساعد الغسيل الجيد والنقع والشطف المتكرر في إزالة أي طعم غير مرغوب.',
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
  // BARNYARD MILLET — دخن باحات الحيوانات
  // =============================================
  {
    slug: 'barnyard-millet',
    name: 'دخن باحات الحيوانات',
    commonName: 'سانوا / جانغورا',
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
    tagline: 'حبّة الصيام — أقل محتوى من الكربوهيدرات وأعلى محتوى من الألياف بين أنواع الدخن',
    description:
      'دخن باحات الحيوانات (سانوا/جانغورا) هو أسرع أنواع الدخن نمواً، إذ ينضج في ستين يوماً فحسب. يتميز بأعلى محتوى من الألياف (9.8 غرام لكل 100 غرام) وأدنى مؤشر جلايسيمي (نحو 44) بين أنواع الدخن المتاحة شائعة الاستهلاك. يُستخدم على نطاق واسع خلال فترات الصيام الهندوسي (فرات) في شمال الهند، حيث يُعرف باسم سانوا أو جانغورا. قوامه الهشّ الشبيه بالأرز ونكهته المحايدة يجعلانه بديلاً سهلاً للأرز.',

    names: {
      english: 'Barnyard Millet',
      hindi: 'सांवा (Sanwa) / झंगोरा (Jhangora)',
      tamil: 'குதிரைவாலி (Kuthiraivali)',
      telugu: 'ఊదలు (Udalu)',
      kannada: 'ಊದಲು (Oodalu)',
      malayalam: 'കുതിരവാലി (Kuthiravali)',
      marathi: 'भगर (Bhagar)',
      bengali: 'শ্যামাধান (Shyamadhan)',
      gujarati: 'મોરૈयো (Moraiyo)',
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
      rasa: ['Madhura (sweet)', 'Kashaya (astringent)'],
      guna: ['Laghu (light)'],
      virya: 'Sheeta (cool)',
      vipaka: 'Madhura',
      doshaEffect: {
        vata: 'neutral',
        pitta: 'decreases',
        kapha: 'neutral',
      },
      therapeuticUses: [
        'مثالي للصيام بفضل طبيعته الخفيفة وسهولة هضمه',
        'تأثيره المبرّد مفيد في الصيف وحالات غلبة البيتا',
        'يدعم صحة الجهاز الهضمي بفضل محتواه العالي جداً من الألياف',
        'استُخدم تقليدياً في الحميات الغذائية للنقاهة',
      ],
      contraindications: [
        'قد يسبب غازات إذا لم يُنقع بشكل كافٍ قبل الطهي',
        'لا يُنصح به كحبوب وحيدة لفترات مطوّلة نظراً لانخفاض محتواه من البروتين',
      ],
      classicalReference: 'Bhavaprakasha Nighantu',
    },

    history: {
      originRegion: 'آسيا الاستوائية (شبه القارة الهندية)',
      domesticationPeriod: 'منذ آلاف السنين (الفترة الدقيقة غير محددة)',
      archaeologicalEvidence:
        'نبات أصيل في آسيا الاستوائية، زُرع في الهند آلاف السنين في مناطق الزراعة المعتمدة على الأمطار. جرى تدجين دخن باحات الحيوانات الياباني (إيكينوكلوا إيسكولنتا) بشكل منفصل في اليابان.',
      spreadPattern:
        'يُزرع في المقام الأول في جنوب آسيا، مع حدث تدجين منفصل في اليابان. ظلّ إلى حدٍّ بعيد محصولاً إقليمياً لكلٍّ من الهند واليابان.',
      culturalSignificance:
        'يحمل دخن باحات الحيوانات أهمية ثقافية خاصة في تقاليد الصيام في شمال الهند. يُعرف باسم سانوا أو بهاغار، وهو من الحبوب الرئيسية التي تُؤكل خلال نافراتري وإيكاداشي وغيرها من مناسبات الصيام. في أوتاراكاند، تُعدّ خير جانغورا من التحضيرات التقليدية الراسخة والمحبوبة.',
    },

    cultivation: {
      majorStates: ['Uttarakhand', 'Tamil Nadu', 'Madhya Pradesh', 'Chhattisgarh'],
      globalRegions: ['South Asia (India, Nepal)', 'Japan', 'Southeast Asia'],
      growingSeason: 'Kharif (June-September)',
      waterRequirement: '350-500mm rainfall',
      soilType: 'ينمو في الأراضي الهامشية والمبللة وحتى الملحية',
      harvestDays: '60-90 days (fastest growing millet)',
    },

    cooking: {
      waterRatio: '1:3',
      soakingTime: '2-4 ساعات',
      cookingTime: '15-20 دقيقة',
      texture: 'هش، شبيه بالأرز',
      flavorProfile: 'خفيف، محايد',
      bestSubstituteFor: 'الأرز (خاصةً خلال الصيام)',
      tips: [
        'انقعه لمدة 2-4 ساعات قبل الطهي للحصول على أفضل ملمس',
        'اطهه كالأرز مع كمية ماء أكبر قليلاً',
        'شائع خلال الصيام — اصنع خيشدي الصامو أو بولاو المورايو',
        'في أوتاراكاند، اصنع خير جانغورا مع الحليب والسكر والهيل',
        'احمصه جافاً لفترة قصيرة قبل الطهي للحصول على نكهة مكسرات أكثر',
      ],
    },

    healthBenefits: [
      {
        benefit: 'أعلى محتوى من الألياف بين أنواع الدخن',
        description:
          'يحتوي دخن باحات الحيوانات على 9.8 غرام من الألياف لكل 100 غرام، وهو الأعلى بين أنواع الدخن الشائعة الاستهلاك. يدعم هذا المحتوى الاستثنائي من الألياف صحة الجهاز الهضمي ويعزّز الشعور بالشبع ويساعد في إدارة الكوليسترول.',
        evidenceLevel: 'well-established',
        source: 'ICMR-NIN / published literature',
      },
      {
        benefit: 'أدنى مؤشر جلايسيمي بين أنواع الدخن',
        description:
          'بمؤشر جلايسيمي يبلغ نحو 44، يملك دخن باحات الحيوانات أدنى مؤشر جلايسيمي بين أنواع الدخن المتاحة شائعة الاستهلاك، مما يجعله خياراً ممتازاً لإدارة سكر الدم.',
        evidenceLevel: 'supported-by-research',
        source: 'International Journal of Food Sciences and Nutrition',
      },
      {
        benefit: 'حبّة الصيام التقليدية',
        description:
          'يُستخدم تقليدياً خلال فترات الصيام الهندوسي بفضل طبيعته الخفيفة وسهولة هضمه. يمدّ بطاقة مستدامة دون ثقل على المعدة خلال الصيام.',
        evidenceLevel: 'traditional-knowledge',
      },
      {
        benefit: 'مصدر جيد للحديد',
        description:
          'يحتوي على 5.0 ملغ من الحديد لكل 100 غرام، مما يجعله مصدراً قيّماً للحديد الغذائي للوقاية من فقر الدم، لا سيما في الأنظمة الغذائية النباتية.',
        evidenceLevel: 'well-established',
        source: 'ICMR-NIN / published literature',
      },
    ],

    sideEffects: [
      {
        condition: 'غازات دون نقع كافٍ',
        description:
          'قد يسبب غازات وانتفاخاً إذا لم يُنقع بشكل كافٍ قبل الطهي. يساعد النقع لمدة 2-4 ساعات في تحسين قابليته للهضم.',
        severity: 'mild',
      },
      {
        condition: 'محتوى الفيتات',
        description:
          'يحتوي على فيتات (مضادات تغذية) قد تُقلّل من امتصاص المعادن. يُقلّل الطهي والنقع بشكل كبير من مستويات الفيتات.',
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
  // PROSO MILLET — الدخن البروسو
  // =============================================
  {
    slug: 'proso-millet',
    name: 'الدخن البروسو',
    commonName: 'تشينا / باري',
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
    tagline: 'أقدم الدخن المدجّن في التاريخ — عالي البروتين وأقصر موسم نمو',
    description:
      'يتميز الدخن البروسو (تشينا/باري) بكونه أقدم أنواع الدخن المدجّن في تاريخ البشرية قاطبةً، إذ تعود الشواهد الأثرية من تشيشان بالصين إلى نحو 8000 ق.م. ويملك أعلى محتوى من البروتين بين أنواع الدخن الثانوية بواقع 12.5 غرام لكل 100 غرام، وأقصر موسم نمو في 60-75 يوماً فحسب. هذا هو "الدخن" الذي تذكره كتب التاريخ الأوروبية، إذ كان غذاءً أساسياً عبر آسيا الوسطى وأوروبا على مدى آلاف السنين، قبل أن ينتشر القمح والأرز على نطاق واسع.',

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
      rasa: ['Madhura (sweet)', 'Kashaya (astringent)'],
      guna: ['Laghu (light)', 'Ruksha (dry)'],
      virya: 'Ushna (warm)',
      vipaka: 'Katu (pungent)',
      doshaEffect: {
        vata: 'neutral',
        pitta: 'neutral',
        kapha: 'decreases',
      },
      therapeuticUses: [
        'يدعم بناء العضلات بفضل محتواه العالي من البروتين',
        'طبيعته الدافئة مفيدة في الفصول الباردة',
        'طبيعته الخفيفة تدعم سهولة الهضم',
        'استُخدم تقليدياً لتعزيز القوة والحيوية',
      ],
      contraindications: [
        'طبيعته الدافئة قد لا تلائم من يعانون من حالات الحرارة الزائدة',
        'طبيعته الجافة — يُوازَن مع السمن أو التحضيرات الرطبة',
      ],
      classicalReference: 'Sushruta Samhita',
    },

    history: {
      originRegion: 'شمال الصين (موقع تشيشان الأثري)',
      domesticationPeriod: 'منذ نحو 10000 عام (حوالي 8000 ق.م.) — أقدم الدخن المدجّن',
      archaeologicalEvidence:
        'تعود الشواهد الأثرية من تشيشان بالصين إلى نحو 8000 ق.م.، مما يجعل الدخن البروسو أقدم أنواع الدخن المدجّن في تاريخ البشرية.',
      spreadPattern:
        'انتشر غرباً من الصين عبر آسيا الوسطى إلى أوروبا، وأصبح حبّة غذائية أساسية في الأنظمة الأوروبية وآسيا الوسطى قبل أن يسود القمح والأرز. وهو "الدخن" المشار إليه في النصوص التاريخية الأوروبية.',
      culturalSignificance:
        'يُعدّ الدخن البروسو تاريخياً من أهم الحبوب في الحضارة الإنسانية. كان غذاءً أساسياً عبر الإمبراطورية الرومانية وأوروبا في القرون الوسطى وآسيا الوسطى. في الهند، يظلّ مهماً في مناطق الزراعة القبلية والمعتمدة على الأمطار.',
    },

    cultivation: {
      majorStates: ['Madhya Pradesh', 'Chhattisgarh', 'Tamil Nadu', 'Karnataka', 'Uttarakhand'],
      globalRegions: [
        'China',
        'Russia',
        'Central Asia',
        'Europe (historical)',
        'North America (birdseed crop)',
      ],
      growingSeason: 'Kharif (June-September)',
      waterRequirement: '250-400mm rainfall',
      soilType: 'تربة خفيفة جيدة التصريف؛ تتحمّل التربة الفقيرة',
      harvestDays: '60-75 days (shortest among millets)',
    },

    cooking: {
      waterRatio: '1:3',
      soakingTime: '20-30 دقيقة',
      cookingTime: '15-20 دقيقة',
      texture: 'هش، شبيه بالكسكس',
      flavorProfile: 'خفيف، حلو قليلاً',
      bestSubstituteFor: 'الكسكس، الأرز',
      tips: [
        'انقعه لمدة 20-30 دقيقة قبل الطهي',
        'اطهه كالأرز — تتفرد الحبات وتصبح هشّة',
        'ممتاز في البولاو والأوبما وتحضيرات السلطة',
        'قوامه الشبيه بالكسكس يجعله رائعاً للسلطات الباردة',
        'احمصه جافاً قبل الطهي للحصول على نكهة مكسرات أكثر عطراً',
        'يمكن طحنه دقيقاً للخبز الرقيق والفطائر',
      ],
    },

    healthBenefits: [
      {
        benefit: 'أعلى بروتين بين الدخن الثانوي',
        description:
          'يحتوي الدخن البروسو على 12.5 غرام من البروتين لكل 100 غرام، وهو الأعلى بين أنواع الدخن الثانوية. يجعله ذلك مصدراً نباتياً ممتازاً للبروتين، لا سيما في الأنظمة الغذائية النباتية والصارمة.',
        evidenceLevel: 'well-established',
        source: 'ICMR-NIN IFCT 2017',
      },
      {
        benefit: 'الليسيثين يدعم صحة الكبد',
        description:
          'يحتوي الدخن البروسو على ليسيثين — وهو فوسفوليبيد يدعم وظيفة الكبد وقد يساعد في أيض الدهون. تُشير دراسات أولية إلى أن هذا قد يدعم صحة الكبد الإجمالية.',
        evidenceLevel: 'preliminary-evidence',
        source: 'Journal of Cereal Science',
      },
      {
        benefit: 'محصول فعّال مناخياً',
        description:
          'بأقصر موسم نمو بين أنواع الدخن (60-75 يوماً) ومتطلبات مائية منخفضة جداً (250-400 ملم)، يُعدّ الدخن البروسو من أكثر الحبوب كفاءةً مناخياً.',
        evidenceLevel: 'well-established',
        source: 'ICAR Crop Science Division',
      },
      {
        benefit: 'غني بفيتامينات ب، لا سيما النياسين',
        description:
          'يُعدّ الدخن البروسو مصدراً جيداً لمركّب فيتامينات ب، لا سيما النياسين (فيتامين ب3)، المهم لأيض الطاقة ووظيفة الجهاز العصبي وصحة الجلد.',
        evidenceLevel: 'supported-by-research',
        source: 'Journal of Food Science and Technology',
      },
    ],

    sideEffects: [
      {
        condition: 'محتوى مواد مضادة للغدة الدرقية',
        description:
          'يحتوي على مواد مضادة للغدة الدرقية قد تتداخل مع وظيفتها عند الاستهلاك المفرط. ينبغي للأشخاص الذين يعانون من حالات الغدة الدرقية تناوله باعتدال واستشارة طبيبهم.',
        severity: 'consult-doctor',
      },
      {
        condition: 'محتوى مضادات التغذية',
        description:
          'يحتوي على مضادات تغذية كالفيتات قد تُقلّل من امتصاص المعادن. يساعد النقع والإنبات والطهي في تقليل مستويات مضادات التغذية.',
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
  // BROWNTOP MILLET — الدخن قهوي القمة
  // =============================================
  {
    slug: 'browntop-millet',
    name: 'الدخن قهوي القمة',
    commonName: 'تشهوتي كانغني / كورالي',
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
    tagline: 'بطل الألياف — أندر أنواع الدخن التجارية، يعود من جديد إلى الواجهة',
    description:
      'الدخن قهوي القمة (كورالي) هو أندر أنواع الدخن المتاحة تجارياً، إذ يمتلك أعلى محتوى من الألياف بين جميع أنواع الدخن بواقع 12.5 غرام لكل 100 غرام. كاد يندثر كمحصول مزروع، غير أنه يشهد اليوم عودةً ملحوظة بفضل جهود الإحياء التي يقودها المزارعون في كارناتاكا. يُزرع في المقام الأول في مناطق تومكور وتشيترادورغا بكارناتاكا، ويملك مؤشراً جلايسيمياً منخفضاً جداً (نحو 47)، ويكسب اهتماماً متزايداً بفضل فوائده الاستثنائية لصحة الأمعاء.',

    names: {
      english: 'Browntop Millet',
      hindi: 'छोटी कंगनी (Chhoti Kangni)',
      tamil: 'பனிப்புல் (Panippul)',
      telugu: 'అండ కొర్రలు (Anda Korralu)',
      kannada: 'ಕೊರಲೆ (Korale)',
      malayalam: 'തൊട്ടക്കുറ (Thottakura)',
      marathi: 'हरिक (Harik)',
      bengali: 'No common name',
      gujarati: 'No common name',
      odia: 'No common name',
      punjabi: 'No common name',
      sanskrit: 'No common name',
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
      rasa: ['Kashaya (astringent)', 'Madhura (sweet)'],
      guna: ['Laghu (light)', 'Ruksha (dry)'],
      virya: 'Sheeta (cool)',
      vipaka: 'Katu (pungent)',
      doshaEffect: {
        vata: 'increases',
        pitta: 'neutral',
        kapha: 'decreases',
      },
      therapeuticUses: [
        'استثنائي لصحة الأمعاء وانتظام الجهاز الهضمي بفضل محتواه العالي جداً من الألياف',
        'طبيعته المبرّدة مناسبة لحالات البيتا',
        'طبيعته الخفيفة تدعم سهولة الهضم وإزالة السموم',
        'قد يدعم إدارة الوزن الصحية',
      ],
      contraindications: [
        'قد يسبب اضطراباً هضمياً إذا أُدخل في النظام الغذائي بسرعة كبيرة نظراً لمحتواه العالي جداً من الألياف',
        'قد يُهيّج الفاتا بسبب طبيعته الجافة والخفيفة',
      ],
      classicalReference: 'Limited Ayurvedic references - classified under Kshudra Dhanya',
    },

    history: {
      originRegion: 'جنوب شرق آسيا وشبه القارة الهندية',
      domesticationPeriod: 'قديم (الفترة غير موثّقة)',
      archaeologicalEvidence:
        'التوثيق الأثري محدود. يُعلم أنه زُرع تقليدياً في المناطق الجبلية بكارناتاكا لقرون. كاد يندثر كمحصول مزروع قبل جهود الإحياء الأخيرة.',
      spreadPattern:
        'نبات أصيل في جنوب شرق آسيا والهند. يقتصر انتشاره في المقام الأول على المناطق الجبلية في كارناتاكا، مع انتشار محدود إلى الولايات المجاورة.',
      culturalSignificance:
        'يمثّل الدخن قهوي القمة قصة إحياء زراعي رائعة. كاد يُفقد بسبب التحديث الزراعي، غير أن مزارعين متفانين في كارناتاكا أعادوا إحياءه. يرمز إلى الحركة المتنامية لإحياء الحبوب الأصيلة المنسية والحفاظ على التنوع الزراعي.',
    },

    cultivation: {
      majorStates: ['Karnataka (primarily Tumkur, Chitradurga districts)', 'Andhra Pradesh (limited)'],
      globalRegions: ['South Asia (primarily India)', 'Southeast Asia'],
      growingSeason: 'Kharif (June-October)',
      waterRequirement: '300-400mm rainfall',
      soilType: 'تربة حمراء حصوية ولاتيريتية؛ ينمو في التربة الفقيرة والتضاريس الجبلية',
      harvestDays: '90-100 days',
    },

    cooking: {
      waterRatio: '1:2.5',
      soakingTime: '6-8 ساعات',
      cookingTime: '20-25 دقيقة',
      texture: 'شبيه بالأرز، متماسك',
      flavorProfile: 'خفيف، مع نكهة مكسرات خفيفة',
      bestSubstituteFor: 'الأرز',
      tips: [
        'انقعه لمدة 6-8 ساعات أو طوال الليل للحصول على أفضل النتائج',
        'اطهه كالأرز بعد النقع الجيد',
        'قوامه المتماسك يناسب تحضيرات البولاو والبيرياني',
        'يمكن طحنه دقيقاً للدوسا والخبز الرقيق',
        'ابدأ بكميات صغيرة وزدها تدريجياً إذا كنت جديداً على هذا النوع من الدخن',
      ],
    },

    healthBenefits: [
      {
        benefit: 'أعلى محتوى من الألياف بين جميع أنواع الدخن',
        description:
          'يحتوي الدخن قهوي القمة على 12.5 غرام من الألياف لكل 100 غرام، وهو الأعلى بين جميع أنواع الدخن. يدعم هذا المحتوى الاستثنائي من الألياف صحة الجهاز الهضمي ويعزّز الشعور بالشبع ويساعد في الحفاظ على مستويات صحية من الكوليسترول وسكر الدم.',
        evidenceLevel: 'well-established',
        source: 'Published literature on millet nutrition',
      },
      {
        benefit: 'مؤشر جلايسيمي منخفض جداً',
        description:
          'بمؤشر جلايسيمي يبلغ نحو 47، يُفرز الدخن قهوي القمة الجلوكوز ببطء شديد، مما يجعله خياراً حبوبياً ممتازاً للأشخاص الذين يديرون مرض السكري أو يسعون للحفاظ على مستويات طاقة مستقرة.',
        evidenceLevel: 'supported-by-research',
        source: 'Published literature on millet glycemic indices',
      },
      {
        benefit: 'غني بالمواد الكيميائية النباتية',
        description:
          'يحتوي على مواد كيميائية نباتية متنوعة بما فيها المركبات الفينولية التي قد تمتلك خصائص مضادة للأكسدة ومضادة للالتهابات وخصائص صحية أخرى. البحث في هذا المجال متواصل.',
        evidenceLevel: 'preliminary-evidence',
        source: 'Journal of Food Science and Technology',
      },
      {
        benefit: 'يدعم صحة الأمعاء',
        description:
          'يعمل المحتوى العالي جداً من الألياف كمادة بريبيوتيك، تدعم نمو بكتيريا الأمعاء النافعة وتعزّز الصحة العامة للأمعاء وانتظام الجهاز الهضمي.',
        evidenceLevel: 'supported-by-research',
        source: 'Nutrition Research Reviews',
      },
    ],

    sideEffects: [
      {
        condition: 'محدودية التوافر التجاري',
        description:
          'الدخن قهوي القمة هو أندر أنواع الدخن المتاحة تجارياً وقد يصعب الحصول عليه. يقتصر توافره في المقام الأول على كارناتاكا والمتاجر المتخصصة.',
        severity: 'mild',
      },
      {
        condition: 'اضطراب هضمي من الألياف العالية',
        description:
          'قد يُسبّب المحتوى العالي جداً من الألياف (12.5 غرام لكل 100 غرام) اضطراباً هضمياً أو انتفاخاً أو غازات إذا أُدخل في النظام الغذائي بسرعة. يُنصح بشدة بالإدخال التدريجي.',
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
