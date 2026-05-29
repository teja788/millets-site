import type { AyurvedaPageData } from '@/lib/types';

export const ayurvedaPageData: AyurvedaPageData = {
  generalClassification:
    'In Ayurveda, millets are classified under Dhanya Varga (the grain group) in classical pharmacological texts. Specifically, most millets fall under the sub-category of Trina Dhanya (grains derived from grasses) or Kshudra Dhanya (minor grains), distinguishing them from the principal cereals like rice (Vrihi) and wheat (Godhuma). The three foundational Ayurvedic texts (Charaka Samhita, Sushruta Samhita, and Bhavaprakasha Nighantu) each describe the properties of various millets in detail, covering their rasa (taste), guna (qualities), virya (potency), vipaka (post-digestive effect), and doshic actions. As a general class, millets are considered Laghu (light to digest), Ruksha (dry in quality), and Kashaya or Madhura in rasa (astringent or sweet in taste). These properties make them particularly beneficial for conditions involving Kapha dosha and Ama (metabolic toxins), as their light and dry nature helps counterbalance heaviness, congestion, and excess moisture in the body. However, the specific properties vary significantly among individual millets. For example, pearl millet (Bajra) is Ushna Virya (heating) while finger millet (Ragi) is Sheeta Virya (cooling), making personalized selection important based on one\'s Prakriti (constitution) and Vikriti (current imbalance).',

  doshaGuide: [
    {
      dosha: 'Vata',
      recommended: ['pearl-millet', 'finger-millet'],
      moderate: ['little-millet', 'barnyard-millet'],
      avoid: ['kodo-millet', 'browntop-millet'],
      description:
        'Vata types are characterized by qualities of dryness, lightness, coldness, and irregularity. Since most millets are inherently Ruksha (dry) and Laghu (light), they can aggravate Vata if consumed excessively or improperly. Vata individuals should prefer warming, grounding millets like pearl millet (Bajra), which has Ushna Virya (hot potency) and provides substantial nourishment, and finger millet (Ragi), which is Madhura Vipaka (sweet post-digestive effect) and building in nature. These millets should always be cooked with generous amounts of ghee, warming spices like cumin, ginger, and black pepper, and prepared in soupy or porridge-like forms to add moisture. Millets that are excessively Ruksha and Laghu, such as kodo millet and browntop millet, should be avoided as they can increase dryness and cause digestive discomfort in Vata-predominant constitutions.',
    },
    {
      dosha: 'Pitta',
      recommended: [
        'finger-millet',
        'little-millet',
        'barnyard-millet',
        'kodo-millet',
      ],
      moderate: ['sorghum', 'proso-millet'],
      avoid: [],
      description:
        'Pitta types are characterized by heat, sharpness, and intensity. Cooling and moderately nourishing millets are ideal for balancing Pitta dosha. Finger millet (Ragi) is particularly excellent due to its Sheeta Virya (cooling potency) and Madhura Rasa (sweet taste), which directly pacify Pitta. Little millet (Samai), barnyard millet (Sanwa), and kodo millet (Varagu) are also well-suited as they are light, easy to digest, and do not generate excessive heat. These millets can be prepared with cooling accompaniments like coriander, fennel, and coconut. Sorghum and proso millet are moderately suitable. They are not strongly heating but lack the distinct cooling properties of the recommended varieties. Pitta types generally tolerate the widest range of millets, as none of the common millets are excessively Ushna (heating) enough to significantly aggravate Pitta.',
    },
    {
      dosha: 'Kapha',
      recommended: [
        'foxtail-millet',
        'kodo-millet',
        'browntop-millet',
        'proso-millet',
      ],
      moderate: ['sorghum', 'barnyard-millet'],
      avoid: ['pearl-millet'],
      description:
        'Kapha types are characterized by heaviness, oiliness, coldness, and sluggish metabolism. Millets are particularly beneficial for Kapha constitutions because their inherent Laghu (light) and Ruksha (dry) qualities directly counterbalance Kapha\'s heaviness and moisture. Foxtail millet (Kangni), kodo millet (Varagu), browntop millet, and proso millet (Chena) are excellent choices as they are among the lightest and driest of the millets, promoting efficient digestion and helping reduce Ama (metabolic waste). These millets should be prepared with minimal oil or ghee and paired with pungent spices like black pepper, dry ginger, and mustard to further stimulate Agni (digestive fire). Pearl millet (Bajra) should be avoided or consumed sparingly by Kapha types, as it is the most nourishing and heavy among millets, and its Guru (heavy) quality can increase Kapha accumulation.',
    },
  ],

  seasonalGuide: [
    {
      season: 'Summer (Grishma Ritu)',
      months: 'April - June',
      recommended: ['finger-millet', 'little-millet', 'barnyard-millet'],
      reasoning:
        'During the intense heat of Grishma Ritu, Pitta dosha is naturally elevated and the body\'s energy (Bala) is at its lowest. Ayurveda recommends Sheeta (cooling), Madhura (sweet), and easily digestible foods during this season. Finger millet (Ragi) with its cooling potency is ideal. Ragi porridge (ambali/koozh) has been a traditional South Indian summer drink for centuries. Little millet and barnyard millet are also excellent choices due to their light, cooling nature. These millets can be prepared as porridges with buttermilk, or as light upma with cooling vegetables like cucumber and ash gourd.',
    },
    {
      season: 'Monsoon (Varsha Ritu)',
      months: 'July - September',
      recommended: ['foxtail-millet', 'sorghum', 'pearl-millet'],
      reasoning:
        'Varsha Ritu brings dampness and humidity, which aggravates Vata dosha and weakens Agni (digestive fire). The body becomes susceptible to digestive issues and Ama (toxin) accumulation. Ayurveda recommends Ushna (warming), Deepana (appetite-stimulating), and Pachana (digestive) foods during monsoon. Foxtail millet is excellent for its balanced digestive properties. Sorghum (Jowar) and pearl millet (Bajra) provide warming energy and are traditionally consumed as bhakri (flatbreads) with spiced preparations during this season. Adding Agni-kindling spices like ginger, cumin, and ajwain to millet preparations is particularly recommended during the rains.',
    },
    {
      season: 'Autumn/Winter (Sharad and Hemanta Ritu)',
      months: 'October - January',
      recommended: ['pearl-millet', 'sorghum', 'proso-millet'],
      reasoning:
        'During Hemanta Ritu (early winter), Agni is naturally strong and the body requires more nourishing, calorie-dense foods to maintain warmth and vitality. This is the season when Ayurveda permits heavier and more nourishing foods. Pearl millet (Bajra) is the quintessential winter millet. Bajra roti with ghee and jaggery is a time-honored North Indian winter staple that provides warmth and sustained energy. Sorghum (Jowar) bhakri is similarly valued in Maharashtra and Karnataka. Proso millet adds variety and is nourishing without being excessively heavy. These millets should be paired generously with ghee, sesame oil, and warming spices to maximize their winter-appropriate nourishing qualities.',
    },
    {
      season: 'Spring (Vasanta Ritu)',
      months: 'February - March',
      recommended: ['foxtail-millet', 'kodo-millet', 'browntop-millet'],
      reasoning:
        'Vasanta Ritu is the season of Kapha accumulation and liquefaction. The Kapha that accumulated during winter begins to melt with rising temperatures, potentially causing congestion, sluggishness, and reduced appetite. Ayurveda strongly recommends Laghu (light), Ruksha (dry), and Tikshna (sharp) foods to counteract this Kapha aggravation. Foxtail millet, kodo millet, and browntop millet are among the lightest and driest millets, making them ideal for spring. These should be prepared with minimal fat and paired with Kapha-reducing spices like turmeric, black pepper, dry ginger (Shunthi), and honey. Light millet upma, pongal, or dry preparations are preferred over heavy, creamy, or oily millet dishes during this season.',
    },
  ],

  disclaimer:
    'The Ayurvedic information presented here is based on classical texts including Charaka Samhita, Sushruta Samhita, and Bhavaprakasha Nighantu. This is traditional knowledge and should not be considered a substitute for professional medical advice. Please consult a qualified Ayurvedic practitioner for personalized dietary recommendations.',
};
