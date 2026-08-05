import type { Millet } from '@/lib/types';

export const majorMillets: Millet[] = [
  // =============================================
  // PEARL MILLET (Bajra) — الدخن اللؤلؤي (الباجرا)
  // =============================================
  {
    slug: 'pearl-millet',
    name: 'الدخن اللؤلؤي',
    commonName: 'الباجرا',
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
    tagline: 'أكثر أنواع الدخن زراعةً في الهند، وغذاء أساسي في راجستان وغوجارات',
    description:
      'الدخن اللؤلؤي (الباجرا) هو أكثر أنواع الدخن زراعةً في الهند والحبوب السادسة من حيث الأهمية على مستوى العالم. يُعدّ غذاءً أساسياً في المناطق الجافة وشبه الجافة من راجستان وغوجارات وماهاراشترا وهاريانا. يتميز بتحمّله الاستثنائي للحرارة والجفاف، وينمو في التربة الرملية مع كميات قليلة من الأمطار. يزخر بالحديد والبروتين والطاقة، مما يجعله قوةً غذائية لملايين الناس في الهند وأفريقيا.',

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
      rasa: ['Madhura (sweet)'],
      guna: ['Guru (heavy)', 'Snigdha (unctuous)'],
      virya: 'Ushna (hot)',
      vipaka: 'Madhura',
      doshaEffect: {
        vata: 'increases',
        pitta: 'neutral',
        kapha: 'decreases',
      },
      therapeuticUses: [
        'يمدّ الجسم بطاقة مستدامة وتغذية متوازنة',
        'يقوّي العضلات والأنسجة',
        'مفيد في المناخات الباردة وفصل الشتاء',
        'يدعم الرضاعة الطبيعية عند الأمهات المرضعات',
      ],
      contraindications: [
        'غير مناسب بشكل مثالي للأفراد الذين يعانون من خلل شديد في الفاتا',
        'يُستحسن تناوله باعتدال خلال فصل الصيف',
      ],
      classicalReference: 'Bhavaprakasha Nighantu, Dhanya Varga',
    },

    history: {
      originRegion: 'منطقة الساحل في أفريقيا',
      domesticationPeriod: 'منذ نحو 4500 عام (حوالي 2500 ق.م.)',
      archaeologicalEvidence:
        'تُثبت الشواهد الأثرية المكتشفة في سوركوتادا وروجدي بغوجارات، والتي تعود إلى حوالي 2000 ق.م.، بداية زراعته في شبه القارة الهندية.',
      spreadPattern:
        'نشأ في منطقة الساحل بغرب أفريقيا وانتشر إلى الهند حوالي 2000 ق.م.، على الأرجح عبر طرق التجارة القديمة عبر بحر العرب.',
      culturalSignificance:
        'يتجذّر الدخن اللؤلؤي بعمق في الثقافة الغذائية لراجستان وغوجارات. خبز الباجرا مع السمن والجاغري هو الغذاء الأساسي التقليدي في فصل الشتاء، كما يحتلّ مكانةً محورية في مهرجانات الحصاد في غرب الهند.',
    },

    cultivation: {
      majorStates: ['Rajasthan', 'Maharashtra', 'Gujarat', 'Uttar Pradesh', 'Haryana'],
      globalRegions: ['West Africa (Sahel)', 'East Africa', 'South Asia'],
      growingSeason: 'Kharif (July-October)',
      waterRequirement: '350-500mm rainfall',
      soilType: 'تربة رملية وطميية؛ تتحمّل التربة الفقيرة والجافة',
      harvestDays: '65-85 days',
    },

    cooking: {
      waterRatio: '1:3',
      soakingTime: 'لا يحتاج إلى نقع',
      cookingTime: '20-25 دقيقة',
      texture: 'خشن قليلاً مع نكهة المكسرات',
      flavorProfile: 'خفيف ترابي',
      bestSubstituteFor: 'دقيق القمح (للخبز الرقيق)',
      tips: [
        'يُستخدم بشكل أمثل كدقيق لصنع خبز الباجرا أو البهاكري',
        'يمكن مزجه مع دقيق القمح (50:50) للمبتدئين للحصول على نكهة أخف',
        'قدّم خبز الباجرا ساخناً مع السمن للحصول على أفضل نكهة وملمس',
        'دقيق الدخن اللؤلؤي لا يُحفظ طويلاً — اطحنه طازجاً أو احفظه في الثلاجة',
      ],
    },

    healthBenefits: [
      {
        benefit: 'مصدر غني بالحديد',
        description:
          'يحتوي الدخن اللؤلؤي على 8.0 ملغ من الحديد لكل 100 غرام، مما يجعله أحد أفضل المصادر النباتية للحديد بين الحبوب. يساعد ذلك في مكافحة فقر الدم بسبب نقص الحديد الشائع في الهند.',
        evidenceLevel: 'well-established',
        source: 'ICMR-NIN IFCT 2017',
      },
      {
        benefit: 'يدعم صحة القلب والأوعية الدموية',
        description:
          'يدعم محتوى المغنيسيوم والبوتاسيوم في الدخن اللؤلؤي صحة القلب من خلال المساعدة في تنظيم ضغط الدم والحفاظ على نظم قلب صحي.',
        evidenceLevel: 'supported-by-research',
        source: 'Journal of Food Science and Technology',
      },
      {
        benefit: 'مفيد لإدارة مرض السكري',
        description:
          'بمؤشر جلايسيمي يبلغ نحو 55، يُفرز الدخن اللؤلؤي الجلوكوز ببطء في مجرى الدم، مما يجعله مناسباً للأشخاص الذين يديرون مرض السكري.',
        evidenceLevel: 'supported-by-research',
        source: 'International Journal of Food Sciences and Nutrition',
      },
      {
        benefit: 'حبوب عالية الطاقة',
        description:
          'بما يحتويه من 361 سعرة حرارية لكل 100 غرام مع محتوى جيد من البروتين (11.6 غرام) والدهون (5.0 غرام)، يُعدّ الدخن اللؤلؤي مصدراً ممتازاً للطاقة، لا سيما للأشخاص النشطين بدنياً والعمال.',
        evidenceLevel: 'well-established',
        source: 'ICMR-NIN IFCT 2017',
      },
    ],

    sideEffects: [
      {
        condition: 'اضطراب هضمي',
        description:
          'قد يسبب انتفاخاً لدى بعض الأشخاص في البداية، خاصةً أولئك غير المعتادين على تناول الدخن. يُنصح بإدخاله تدريجياً في النظام الغذائي.',
        severity: 'mild',
      },
      {
        condition: 'محتوى مواد مضادة للغدة الدرقية',
        description:
          'يحتوي في شكله النيء على مواد مضادة للغدة الدرقية قد تؤثر على وظيفتها. يُقلّل الطهي من هذه المواد بشكل كبير، مما يجعله آمناً للاستهلاك الطبيعي.',
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
  // FINGER MILLET (Ragi) — دخن الأصابع (الراغي)
  // =============================================
  {
    slug: 'finger-millet',
    name: 'دخن الأصابع',
    commonName: 'الراغي',
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
    tagline: 'بطل الكالسيوم — أغنى مصدر طبيعي للكالسيوم غير الألبانية بين الحبوب',
    description:
      'يشتهر دخن الأصابع (الراغي) بكونه بطل الكالسيوم في عالم الحبوب، إذ يحتوي على كمية استثنائية من الكالسيوم تبلغ 344 ملغ لكل 100 غرام — وهو الأعلى بين جميع الحبوب. يُعدّ غذاءً أساسياً في كارناتاكا وتاميل نادو، وقد زُرع في الهند منذ أكثر من 3000 عام. يُقدَّر بشكل خاص لتغذية الرضّع وصحة العظام وكغذاء أساسي للمسنّين. تُعدّ مودي الراغي (كرة الراغي) ومالت الراغي من أبرز المستحضرات التقليدية في جنوب الهند.',

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
      rasa: ['Madhura (sweet)', 'Kashaya (astringent)'],
      guna: ['Laghu (light)', 'Ruksha (dry)'],
      virya: 'Sheeta (cool)',
      vipaka: 'Madhura',
      doshaEffect: {
        vata: 'neutral',
        pitta: 'decreases',
        kapha: 'decreases',
      },
      therapeuticUses: [
        'ممتاز لتقوية العظام وتعويض الكالسيوم',
        'موصى به للأطفال في مرحلة النمو والمسنّين',
        'تأثيره المبرّد مفيد في حالات غلبة البيتا',
        'يدعم إدارة الوزن بفضل طبيعته الخفيفة',
        'يُستخدم في حميات التعافي والنقاهة',
      ],
      contraindications: [
        'الإفراط في تناوله قد يؤدي إلى إمساك بسبب طبيعته الجافة (روكشا)',
        'من يعانون من حصى الكلى (نوع أكسالات الكالسيوم) يجب أن يتناولوه باعتدال',
      ],
      classicalReference: 'Charaka Samhita, Sutra Sthana',
    },

    history: {
      originRegion: 'المرتفعات الإثيوبية، شرق أفريقيا',
      domesticationPeriod: 'منذ نحو 5000 عام (حوالي 3000 ق.م.)',
      archaeologicalEvidence:
        'تُظهر الشواهد الأثرية من هالور في كارناتاكا التي تعود إلى حوالي 1800 ق.م. بداية زراعته المبكرة في جنوب الهند.',
      spreadPattern:
        'جرى تدجينه في المرتفعات الإثيوبية ووصل إلى الهند حوالي 3000 ق.م.، مترسّخاً كمحصول رئيسي في هضبة الدكن والتلال الجنوبية الهندية.',
      culturalSignificance:
        'يحتل الراغي مكانةً محورية في الثقافة الغذائية لكارناتاكا وتاميل نادو. راغي مودي (كرة الراغي) هو الغذاء التقليدي الأساسي في كارناتاكا. يُعدّ مالت الراغي (الأمبلي/الكانجي) أول طعام تكميلي تقليدي للرضّع الهنود.',
    },

    cultivation: {
      majorStates: ['Karnataka', 'Tamil Nadu', 'Andhra Pradesh', 'Uttarakhand', 'Maharashtra'],
      globalRegions: ['East Africa (Ethiopia, Uganda)', 'South Asia', 'Nepal'],
      growingSeason: 'Kharif (June-October)',
      waterRequirement: '500-750mm rainfall',
      soilType: 'تربة طميية حمراء ولاتيريتية؛ تتحمّل التربة الحمضية قليلاً',
      harvestDays: '90-120 days',
    },

    cooking: {
      waterRatio: '1:3.5',
      soakingTime: 'لا حاجة للنقع عند استخدام الدقيق',
      cookingTime: '15-20 دقيقة (عصيدة)',
      texture: 'ناعم عند طهيه عصيدة، وخشن قليلاً كدقيق',
      flavorProfile: 'خفيف، حلو قليلاً، ترابي',
      bestSubstituteFor: 'دقيق القمح، دقيق الأرز',
      tips: [
        'لصنع راغي مودي، أضف دقيق الراغي إلى الماء المغلي مع التقليب المستمر لتجنب التكتّل',
        'يمكن تحضير مالت الراغي بخلط الدقيق مع الماء وطهيه حتى يتكثّف',
        'امزج دقيق الراغي مع الجاغري والهيل للحصول على عصيدة مغذّية',
        'يعمل دقيق الراغي بشكل جيد في الدوسا والإيدلي والمخبوزات',
        'دقيق الراغي المنبت له توافر حيوي غذائي أعلى',
      ],
    },

    healthBenefits: [
      {
        benefit: 'مصدر استثنائي للكالسيوم',
        description:
          'يحتوي دخن الأصابع على 344 ملغ من الكالسيوم لكل 100 غرام، وهو الأعلى بين جميع الحبوب ومقارب لمستوى الحليب. يجعله ذلك ذا قيمة لا تُقدَّر لصحة العظام، لا سيما لمن يعانون من عدم تحمّل اللاكتوز.',
        evidenceLevel: 'well-established',
        source: 'ICMR-NIN IFCT 2017',
      },
      {
        benefit: 'يدعم صحة العظام ويمنع هشاشتها',
        description:
          'يدعم المحتوى العالي من الكالسيوم والفوسفور كثافة العظام وقد يساعد في الوقاية من هشاشة العظام، لا سيما عند النساء بعد انقطاع الطمث والمسنّين.',
        evidenceLevel: 'supported-by-research',
        source: 'Journal of Bone and Mineral Research',
      },
      {
        benefit: 'مفيد لإدارة مرض السكري',
        description:
          'يحتوي دخن الأصابع على أحماض أمينية تساعد في تخفيض الاستجابة للسكر في الدم. غلاف البذرة غني بالبوليفينول والألياف الغذائية التي تبطئ امتصاص الجلوكوز.',
        evidenceLevel: 'supported-by-research',
        source: 'Journal of Agricultural and Food Chemistry',
      },
      {
        benefit: 'غني بمضادات الأكسدة',
        description:
          'يحتوي على أحماض فينولية وفلافونويدات وتانينات ذات نشاط مضاد قوي للأكسدة، تساعد في مكافحة الإجهاد التأكسدي في الجسم.',
        evidenceLevel: 'supported-by-research',
        source: 'Food Chemistry',
      },
      {
        benefit: 'ممتاز لتغذية الرضّع والمسنّين',
        description:
          'استُخدم مالت الراغي تقليدياً كأول طعام تكميلي للرضّع في جنوب الهند. سهولة هضمه ومحتواه الغني بالكالسيوم يجعله مثالياً أيضاً لتغذية المسنّين.',
        evidenceLevel: 'well-established',
        source: 'Indian Pediatrics',
      },
    ],

    sideEffects: [
      {
        condition: 'محتوى الأكسالات',
        description:
          'يحتوي دخن الأصابع على أكسالات قد تتداخل مع امتصاص الكالسيوم في بعض الحالات، وقد تُسهم في تكوّن حصى الكلى لدى الأشخاص القابلين للتأثر.',
        severity: 'mild',
      },
      {
        condition: 'خطر الإمساك',
        description:
          'قد يُسبّب إمساكاً إذا تُناوِل بإفراط دون تناول كميات كافية من الماء، بسبب طبيعته الجافة (روكشا).',
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
  // SORGHUM (Jowar) — الذرة الرفيعة (الجوار)
  // =============================================
  {
    slug: 'sorghum',
    name: 'الذرة الرفيعة',
    commonName: 'الجوار',
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
    tagline: 'القوة متعددة الاستخدامات — غنية بالألياف ومضادات الأكسدة والتنوع الطهوي',
    description:
      'الذرة الرفيعة (الجوار) هي إحدى أكثر أنواع الدخن تنوعاً وانتشاراً من حيث الزراعة، وتُزرع عبر ماهاراشترا وكارناتاكا وماديا براديش. وهي الحبوب الخامسة الأكثر أهمية على مستوى العالم. تشتهر بمحتواها العالي جداً من الألياف (9.7 غرام لكل 100 غرام) وملفها الغني بمضادات الأكسدة، وتُؤكل على شكل خبز رقيق (البهاكري)، وعصائد، وتُخمَّر في بعض المشروبات. تنمو في موسمَي الخريف والربيع، مما يجعلها غذاءً أساسياً طوال العام.',

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
      rasa: ['Madhura (sweet)', 'Kashaya (astringent)'],
      guna: ['Ruksha (dry)', 'Laghu (light)'],
      virya: 'Sheeta (cool)',
      vipaka: 'Katu (pungent)',
      doshaEffect: {
        vata: 'increases',
        pitta: 'decreases',
        kapha: 'decreases',
      },
      therapeuticUses: [
        'يعزّز صحة الجهاز الهضمي بفضل محتواه العالي من الألياف',
        'تأثيره المبرّد مفيد في الحالات التي تغلب فيها البيتا',
        'يدعم إدارة الوزن بفضل طبيعته الخفيفة والجافة',
        'مفيد لصحة المسالك البولية',
      ],
      contraindications: [
        'قد يُهيّج الفاتا — يُستحسن تناوله مع السمن أو الزيت لتحقيق التوازن',
        'الإفراط في تناوله قد يسبب الجفاف في الجسم',
      ],
      classicalReference: 'Bhavaprakasha Nighantu',
    },

    history: {
      originRegion: 'شمال شرق أفريقيا (منطقة السودان-إثيوبيا)',
      domesticationPeriod: 'منذ نحو 5000-8000 عام',
      archaeologicalEvidence:
        'يُعدّ من أقدم الحبوب المزروعة في أفريقيا. تؤكد شواهد أثرية من مواقع هضبة الدكن وجوده في الهند منذ حوالي 2000 ق.م.',
      spreadPattern:
        'جرى تدجينه في شمال شرق أفريقيا وانتشر عبر طرق التجارة إلى الهند بحلول 2000 ق.م.، ثم إلى الصين وجنوب شرق آسيا.',
      culturalSignificance:
        'يُعدّ خبز جوار البهاكري (الخبز الرقيق) ركيزةً ثقافية في ماهاراشترا وشمال كارناتاكا. وهو متجذّر في الهوية الغذائية لمنطقة هضبة الدكن ويستهلكه الملايين يومياً.',
    },

    cultivation: {
      majorStates: ['Maharashtra', 'Karnataka', 'Madhya Pradesh', 'Rajasthan', 'Tamil Nadu'],
      globalRegions: ['Sub-Saharan Africa', 'South Asia', 'Americas', 'Australia'],
      growingSeason: 'Both Kharif (July-October) and Rabi (October-February)',
      waterRequirement: '400-600mm rainfall',
      soilType: 'تربة قطنية سوداء (فيرتيسول)، طميية طينية؛ تتحمّل التربة القلوية',
      harvestDays: '100-120 days',
    },

    cooking: {
      waterRatio: '1:2.5',
      soakingTime: 'نقع اختياري لمدة 4-6 ساعات (للحبوب الكاملة)',
      cookingTime: '25-30 دقيقة',
      texture: 'متماسك، ومضغه لذيذ قليلاً',
      flavorProfile: 'خفيف، حلو قليلاً، محايد',
      bestSubstituteFor: 'الأرز، القمح',
      tips: [
        'دقيق الجوار يصنع بهاكري رائعاً — اعجن العجينة وهي دافئة للحصول على خبز طري قابل للطي',
        'يمكن طهي حبوب الجوار الكاملة كالأرز بعد نقعها',
        'الجوار المنفوش (كالفشار) وجبة خفيفة شعبية في ماهاراشترا',
        'دقيق الجوار لا يحتوي على غلوتين — أضف مادة رابطة عند الخبيز',
        'اجمعه مع الخضروات لصنع أوبما أو خيشدي مغذّية',
      ],
    },

    healthBenefits: [
      {
        benefit: 'محتوى عالٍ جداً من الألياف يدعم الهضم',
        description:
          'تحتوي الذرة الرفيعة على 9.7 غرام من الألياف لكل 100 غرام، وهو من بين أعلى المستويات بين جميع الحبوب. يعزّز ذلك صحة الجهاز الهضمي وانتظام حركة الأمعاء ويدعم تنوع الميكروبيوم المعوي.',
        evidenceLevel: 'well-established',
        source: 'ICMR-NIN IFCT 2017',
      },
      {
        benefit: 'غنية بالمركبات الفينولية ومضادات الأكسدة',
        description:
          'تزخر الذرة الرفيعة بثلاثي ديوكسي أنثوسيانين والتانينات والأحماض الفينولية ذات الخصائص المضادة للأكسدة، مما قد يُقلّل من الأضرار التأكسدية في الجسم.',
        evidenceLevel: 'supported-by-research',
        source: 'Journal of Cereal Science',
      },
      {
        benefit: 'خصائص محتملة لمكافحة السرطان',
        description:
          'تحتوي على تانينات ومركبات فينولية أخرى أظهرت خصائص محتملة لمكافحة السرطان في دراسات أولية، لا سيما ضد خلايا سرطان القولون.',
        evidenceLevel: 'preliminary-evidence',
        source: 'Nutrition and Cancer journal',
      },
      {
        benefit: 'يدعم صحة القلب',
        description:
          'قد يساعد المحتوى العالي من الألياف والمغنيسيوم، إلى جانب البوليكوسانول الموجود في شمع الذرة الرفيعة، في خفض الكوليسترول ودعم صحة القلب والأوعية الدموية.',
        evidenceLevel: 'supported-by-research',
        source: 'Journal of Agricultural and Food Chemistry',
      },
    ],

    sideEffects: [
      {
        condition: 'تفاعل التانين مع الحديد',
        description:
          'قد يُقلّل محتوى التانين في الذرة الرفيعة من امتصاص الحديد من الأطعمة الأخرى. ينبغي للأشخاص الذين يعانون من نقص الحديد أن يراعوا تناولها مع الأطعمة الغنية بالحديد.',
        severity: 'moderate',
      },
      {
        condition: 'توافق هضمي أولي',
        description:
          'قد تسبب غازات وانتفاخاً في البداية للأشخاص غير المعتادين على الأطعمة الغنية بالألياف. يُنصح بإدخالها تدريجياً في النظام الغذائي.',
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
  // FOXTAIL MILLET (Kangni / Thinai) — دخن الذيل الثعلبي (كانغني / ثيناي)
  // =============================================
  {
    slug: 'foxtail-millet',
    name: 'دخن الذيل الثعلبي',
    commonName: 'كانغني / ثيناي',
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
    tagline: 'أحد أقدم الدخن المزروعة في التاريخ — غني بالبروتين والحديد، وبديل ممتاز للأرز',
    description:
      'يُعدّ دخن الذيل الثعلبي (كانغني/ثيناي) من أقدم المحاصيل المزروعة في تاريخ البشرية، إذ تمتد شواهد تدجينه في شمال الصين إلى ما يزيد على 9000 عام. يتميز بمحتواه العالي من البروتين (12.3 غرام لكل 100 غرام) وغناه بالألياف الغذائية، ومؤشره الجلايسيمي المنخفض الذي يبلغ نحو 50. قوامه الهشّ الشبيه بالأرز عند الطهي يجعله بديلاً ممتازاً للأرز. يتحمّل الجفاف بشكل استثنائي، إذ لا يحتاج سوى 300-400 ملم من الأمطار.',

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
      rasa: ['Kashaya (astringent)', 'Madhura (sweet)'],
      guna: ['Laghu (light)', 'Ruksha (dry)'],
      virya: 'Ushna (warm)',
      vipaka: 'Katu (pungent)',
      doshaEffect: {
        vata: 'increases',
        pitta: 'neutral',
        kapha: 'decreases',
      },
      therapeuticUses: [
        'مفيد لإدارة الوزن بفضل طبيعته الخفيفة والجافة',
        'يدعم نار الهضم (أغني)',
        'مفيد في الحالات المرتبطة بالكافا كالاحتقان',
        'استُخدم تقليدياً في الحميات الغذائية لما بعد الولادة',
      ],
      contraindications: [
        'قد يزيد من الفاتا قليلاً — يُوازَن مع السمن أو الزيت',
        'غير مُوصى به بكميات زائدة للأشخاص الذين يعانون من جفاف الجلد',
      ],
      classicalReference: 'Ashtanga Hridaya',
    },

    history: {
      originRegion: 'شمال الصين (موقع تشيشان الأثري)',
      domesticationPeriod: 'منذ نحو 8700 عام (حوالي 6700 ق.م.)',
      archaeologicalEvidence:
        'عُثر على بقاياه في موقع تشيشان الأثري في شمال الصين، والتي تعود إلى نحو 8700 عام، مما يجعله أحد أقدم المحاصيل المزروعة في العالم.',
      spreadPattern:
        'جرى تدجينه في شمال الصين وانتشر غرباً عبر طرق التجارة في آسيا الوسطى إلى الهند والشرق الأوسط وأوروبا.',
      culturalSignificance:
        'يحظى دخن الذيل الثعلبي بأهمية ثقافية في المطبخ الجنوبي الهندي، لا سيما في تاميل نادو (ثيناي) وأندهرا براديش (كورالو). يُستخدم في التحضيرات التقليدية للمهرجانات وورد ذكره في أدب سانغام التاميلي القديم.',
    },

    cultivation: {
      majorStates: [
        'Andhra Pradesh',
        'Karnataka',
        'Tamil Nadu',
        'Rajasthan',
        'Madhya Pradesh',
      ],
      globalRegions: ['China', 'Southeast Asia', 'South Asia', 'Europe (historical)'],
      growingSeason: 'Kharif (June-October)',
      waterRequirement: '300-400mm rainfall',
      soilType: 'تربة طميية رملية خفيفة إلى متوسطة؛ تتحمّل الجفاف بشكل استثنائي',
      harvestDays: '75-90 days',
    },

    cooking: {
      waterRatio: '1:2.5',
      soakingTime: '30 دقيقة',
      cookingTime: '15-20 دقيقة',
      texture: 'هش، شبيه بالأرز',
      flavorProfile: 'نكهة المكسرات، حلو قليلاً',
      bestSubstituteFor: 'الأرز',
      tips: [
        'اشطفه جيداً وانقعه 30 دقيقة قبل الطهي للحصول على أفضل النتائج',
        'اطهه كالأرز — ينفش بشكل جميل',
        'يصنع أوبما وبولاو وبونغال رائعة',
        'يمكن استخدامه في الحلويات كالباياسام (الخير)',
        'احمصه جافاً قبل الطهي للحصول على نكهة مكسرات أكثر',
      ],
    },

    healthBenefits: [
      {
        benefit: 'محتوى عالٍ من البروتين',
        description:
          'يحتوي دخن الذيل الثعلبي على 12.3 غرام من البروتين لكل 100 غرام، وهو من بين الأعلى بين أنواع الدخن، مما يجعله ممتازاً للنباتيين الباحثين عن مصادر بروتين نباتية.',
        evidenceLevel: 'well-established',
        source: 'ICMR-NIN IFCT 2017',
      },
      {
        benefit: 'مؤشر جلايسيمي منخفض مناسب لمرضى السكري',
        description:
          'بمؤشر جلايسيمي يبلغ نحو 50، يُفرز دخن الذيل الثعلبي الجلوكوز ببطء، مما يجعله حبّة مناسبة للأشخاص الذين يديرون مرض السكري.',
        evidenceLevel: 'supported-by-research',
        source: 'International Journal of Diabetes in Developing Countries',
      },
      {
        benefit: 'غني بالألياف الغذائية',
        description:
          'يحتوي على 8.0 غرام من الألياف لكل 100 غرام، مما يدعم صحة الجهاز الهضمي ويعزّز الشعور بالشبع ويساعد في الحفاظ على مستويات صحية من الكوليسترول.',
        evidenceLevel: 'well-established',
        source: 'ICMR-NIN IFCT 2017',
      },
      {
        benefit: 'مصدر جيد لفيتامينات ب',
        description:
          'يُعدّ دخن الذيل الثعلبي مصدراً جيداً لمركّب فيتامينات ب بما فيها الثيامين والنياسين، اللذان يُعدّان ضروريَّين لعملية التمثيل الغذائي للطاقة ووظيفة الجهاز العصبي.',
        evidenceLevel: 'supported-by-research',
        source: 'Journal of Food Science and Technology',
      },
    ],

    sideEffects: [
      {
        condition: 'محتوى مواد مضادة للغدة الدرقية',
        description:
          'قد يُسبّب مشكلات في الغدة الدرقية عند الاستهلاك المفرط جداً بسبب المركبات المضادة لها. ينبغي للأشخاص الذين يعانون من حالات الغدة الدرقية تناوله باعتدال واستشارة طبيبهم.',
        severity: 'consult-doctor',
      },
      {
        condition: 'متطلبات المعالجة',
        description:
          'يحتاج النوع المقشور إلى إزالة القشرة والمعالجة الصحيحة قبل الطهي. قد يكون الحبّ غير المعالج جيداً صعب الهضم.',
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
  // LITTLE MILLET (Kutki / Samai) — الدخن الصغير (كوتكي / ساماي)
  // =============================================
  {
    slug: 'little-millet',
    name: 'الدخن الصغير',
    commonName: 'كوتكي / ساماي',
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
    tagline: 'الحبّة الصغيرة الغنية بالحديد — بديل مثالي للأرز بمحتوى عالٍ من الألياف',
    description:
      'الدخن الصغير (كوتكي/ساماي) هو دخن صغير الحبّة يعود أصله إلى الهند، وجرى تدجينه في منطقة الغاتس الشرقية. على الرغم من حجمه الصغير، يتمتع بقوة غذائية هائلة تتجلى في محتواه العالي جداً من الحديد (9.3 ملغ لكل 100 غرام) والألياف (7.6 غرام لكل 100 غرام). نكهته المحايدة وقوامه الشبيه بالأرز يجعلانه الأقرب بين أنواع الدخن في استبدال الأرز. زُرع منذ العصور القديمة في المناطق القبلية لوسط الهند وجنوبها.',

    names: {
      english: 'Little Millet',
      hindi: 'कुटकी (Kutki)',
      tamil: 'சாமை (Samai)',
      telugu: 'సామలు (Samalu)',
      kannada: 'ಸಾಮೆ (Same)',
      malayalam: 'ചാമ (Chama)',
      marathi: 'वरी (Vari) / साव (Sav)',
      bengali: 'সামা (Sama)',
      gujarati: 'ગજરો (Gajro) / મોરૈयো (Moraiyo)',
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
        'مناسب لجميع أنواع الأجسام بفضل تأثيره المتوازن على الدوشا',
        'طبيعته المبرّدة مفيدة في الصيف وحالات غلبة البيتا',
        'يدعم الهضم اللطيف بفضل طبيعته الخفيفة (لاغهو)',
        'استُخدم تقليدياً في الحميات الغذائية للنقاهة',
      ],
      contraindications: [
        'موانع استخدامه ضئيلة نظراً لطبيعته المتوازنة',
        'قد يحتاج إلى نقع لتقليل محتوى مضادات التغذية',
      ],
      classicalReference: 'Bhavaprakasha Nighantu, Dhanya Varga',
    },

    history: {
      originRegion: 'منطقة الغاتس الشرقية، الهند',
      domesticationPeriod: 'العصور القديمة (الفترة الدقيقة غير محددة)',
      archaeologicalEvidence:
        'نبات هندي أصيل بتاريخ طويل من الزراعة في المناطق القبلية لوسط وجنوب الهند. السجلات الأثرية محدودة، لكن الشواهد الإثنونباتية تدعم قِدَم زراعته.',
      spreadPattern:
        'جرى تدجينه في منطقة الغاتس الشرقية بالهند وبقي محصولاً هندياً في المقام الأول، يُزرع على نطاق واسع في مناطق الزراعة القبلية والمعتمدة على الأمطار.',
      culturalSignificance:
        'الدخن الصغير محصول مهم للمجتمعات القبلية في وسط الهند. في تاميل نادو، يُعدّ أرز الساماي من التحضيرات اليومية الشعبية للدخن. كما يحظى بأهمية في تقاليد صيام نافراتري في بعض المناطق.',
    },

    cultivation: {
      majorStates: ['Madhya Pradesh', 'Chhattisgarh', 'Karnataka', 'Tamil Nadu', 'Odisha'],
      globalRegions: ['South Asia (primarily India)', 'Southeast Asia (Myanmar, Sri Lanka)'],
      growingSeason: 'Kharif (June-October)',
      waterRequirement: '300-500mm rainfall',
      soilType: 'تربة طميية رملية إلى لاتيريتية حمراء؛ ينمو جيداً في الأراضي الهامشية',
      harvestDays: '75-90 days',
    },

    cooking: {
      waterRatio: '1:2.5',
      soakingTime: '30 دقيقة',
      cookingTime: '15 دقيقة',
      texture: 'شبيه جداً بالأرز، لزج قليلاً',
      flavorProfile: 'خفيف، محايد',
      bestSubstituteFor: 'الأرز (الأقرب بديلاً بين أنواع الدخن)',
      tips: [
        'انقعه 30 دقيقة واشطفه جيداً قبل الطهي',
        'اطهه تماماً كالأرز — إنه أسهل أنواع الدخن في الانتقال إليه',
        'يصنع أرز الليمون وبولاو وبدائل البيرياني الممتازة',
        'يمكن استخدامه في عجينة الإيدلي والدوسا مخلوطاً مع عدس الأوراد',
        'طعمه المحايد يجعله متعدد الاستخدامات للأطباق المالحة والحلوة على حدٍّ سواء',
      ],
    },

    healthBenefits: [
      {
        benefit: 'محتوى عالٍ جداً من الحديد',
        description:
          'يحتوي الدخن الصغير على 9.3 ملغ من الحديد لكل 100 غرام، وهو من بين الأعلى بين جميع أنواع الدخن والحبوب. يجعله ذلك قيّماً في الوقاية من فقر الدم بسبب نقص الحديد وإدارته.',
        evidenceLevel: 'well-established',
        source: 'ICMR-NIN IFCT 2017',
      },
      {
        benefit: 'مصدر جيد للألياف لصحة الجهاز الهضمي',
        description:
          'بمحتوى 7.6 غرام من الألياف لكل 100 غرام، يدعم الدخن الصغير صحة الجهاز الهضمي وانتظام حركة الأمعاء وقد يساعد في خفض مستويات الكوليسترول.',
        evidenceLevel: 'well-established',
        source: 'ICMR-NIN IFCT 2017',
      },
      {
        benefit: 'مؤشر جلايسيمي منخفض مناسب لمرضى السكري',
        description:
          'بمؤشر جلايسيمي يبلغ نحو 52، يُوفّر الدخن الصغير إفرازاً بطيئاً ومستقراً للجلوكوز، مما يجعله مناسباً لإدارة مرض السكري.',
        evidenceLevel: 'supported-by-research',
        source: 'International Journal of Food Sciences and Nutrition',
      },
      {
        benefit: 'غني بمضادات الأكسدة',
        description:
          'يحتوي على مركبات فينولية وفلافونويدات قد تُسهم في النشاط المضاد للأكسدة، وإن كانت هناك حاجة لمزيد من الأبحاث لتوصيف هذه الفوائد بشكل كامل.',
        evidenceLevel: 'preliminary-evidence',
        source: 'Journal of Food Science and Technology',
      },
    ],

    sideEffects: [
      {
        condition: 'انتفاخ دون نقع',
        description:
          'قد يُسبّب انتفاخاً إذا لم يُنقع قبل الطهي. يُنصح بنقعه لمدة 30 دقيقة على الأقل لتحسين قابليته للهضم.',
        severity: 'mild',
      },
      {
        condition: 'محتوى مضادات التغذية',
        description:
          'يحتوي على فيتات (مضادات تغذية) قد تُقلّل من امتصاص المعادن. النقع والإنبات والتخمير يُقلّلان من مستويات الفيتات بشكل كبير.',
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
