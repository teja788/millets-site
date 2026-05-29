import type { FAQItem } from '@/lib/types';

export const faqItems: FAQItem[] = [
  // =====================
  // GENERAL (5)
  // =====================
  {
    id: 'what-are-millets',
    question: 'What are millets?',
    answer:
      'Millets are a group of small-seeded grasses belonging to the family Poaceae, cultivated as cereal crops for thousands of years. They include a diverse set of grains such as pearl millet (bajra), finger millet (ragi), foxtail millet (kangni), sorghum (jowar), and several others. Millets are among the oldest cultivated crops in the world, with archaeological evidence dating back to 8700 BCE in China, and have been staple foods across Asia, Africa, and Europe for millennia.',
    category: 'General',
    relatedMillets: [],
  },
  {
    id: 'millets-gluten-free',
    question: 'Are all millets gluten-free?',
    answer:
      'Yes, all true millets are naturally gluten-free. This includes pearl millet, finger millet, foxtail millet, little millet, kodo millet, barnyard millet, proso millet, browntop millet, and sorghum. They are safe for individuals with celiac disease or gluten sensitivity. However, cross-contamination can occur during processing or packaging in facilities that also handle wheat, so those with severe gluten intolerance should look for certified gluten-free labels.',
    category: 'General',
    relatedMillets: [
      'pearl-millet',
      'finger-millet',
      'foxtail-millet',
      'little-millet',
      'kodo-millet',
      'barnyard-millet',
      'proso-millet',
      'browntop-millet',
      'sorghum',
    ],
  },
  {
    id: 'major-vs-minor-millets',
    question: 'What is the difference between major and minor millets?',
    answer:
      'Millets are classified as major or minor based on their grain size and global production volume. Major millets include pearl millet (bajra), sorghum (jowar), and finger millet (ragi). These are produced in large quantities and are significant commercial crops. Minor millets include foxtail millet, little millet, kodo millet, barnyard millet, proso millet, and browntop millet. These have smaller grains, lower production volumes, and are often cultivated as subsistence crops, though they are equally nutritious and sometimes superior in specific nutrients.',
    category: 'General',
    relatedMillets: [],
  },
  {
    id: 'millets-lost-popularity',
    question: 'Why did millets lose popularity in India?',
    answer:
      'Millets lost popularity in India primarily due to the Green Revolution of the 1960s and 1970s, which prioritized high-yield wheat and rice varieties to combat food scarcity. Government policies including minimum support prices, public distribution system subsidies, and procurement programs heavily favored rice and wheat, making them cheaper and more accessible. Additionally, millets became associated with poverty and "coarse grains," while polished rice and refined wheat were seen as aspirational foods. The lack of processing infrastructure for millets further contributed to their decline.',
    category: 'General',
  },
  {
    id: 'international-year-millets',
    question: 'What was the International Year of Millets?',
    answer:
      'The International Year of Millets (IYM) was celebrated in 2023, following a United Nations General Assembly resolution proposed by India in 2021 and supported by 72 countries. The initiative aimed to raise global awareness about millets\' nutritional benefits, climate resilience, and role in sustainable agriculture. India led worldwide campaigns, events were held across 100+ countries, and millet-based menus were introduced at UN cafeterias. The campaign significantly boosted global interest in millet cultivation, research, and consumption.',
    category: 'General',
  },

  // =====================
  // NUTRITION (4)
  // =====================
  {
    id: 'most-calcium-millet',
    question: 'Which millet has the most calcium?',
    answer:
      'Finger millet (ragi) has the highest calcium content among all millets (and indeed among all commonly consumed cereals) at approximately 344 mg per 100g according to ICMR-NIN Indian Food Composition Tables 2017. This is over 30 times the calcium in polished rice (10 mg/100g) and about 8 times that of whole wheat (41 mg/100g). Ragi is often recommended for growing children, pregnant women, the elderly, and those at risk of osteoporosis as a natural dietary source of calcium.',
    category: 'Nutrition',
    relatedMillets: ['finger-millet'],
  },
  {
    id: 'most-protein-millet',
    question: 'Which millet has the most protein?',
    answer:
      'Among millets, proso millet and foxtail millet have the highest protein content at approximately 12.5g and 12.3g per 100g respectively, according to ICMR-NIN data. These values are comparable to whole wheat (12.1g/100g) and significantly higher than polished rice (6.8g/100g). Pearl millet also has notable protein content at around 11.6g/100g. While the protein quantity is important, millets also provide a relatively good amino acid profile, though like most cereals, they are limiting in lysine.',
    category: 'Nutrition',
    relatedMillets: ['proso-millet', 'foxtail-millet', 'pearl-millet'],
  },
  {
    id: 'most-fiber-millet',
    question: 'Which millet has the most fiber?',
    answer:
      'Browntop millet has the highest dietary fiber content among millets at approximately 12.5g per 100g. This is comparable to whole wheat (12.5g/100g) and dramatically higher than polished rice (0.2g/100g). Other high-fiber millets include kodo millet (about 9g/100g) and barnyard millet (about 10g/100g). The high fiber content in millets contributes to their low glycemic index, promotes satiety, supports gut health, and helps in maintaining healthy cholesterol levels.',
    category: 'Nutrition',
    relatedMillets: ['browntop-millet', 'kodo-millet', 'barnyard-millet'],
  },
  {
    id: 'millets-vs-rice',
    question: 'How do millets compare to rice nutritionally?',
    answer:
      'Millets are generally nutritionally superior to polished white rice in most parameters. Compared to white rice (per 100g), most millets offer 1.5-2x more protein, 5-60x more dietary fiber, 3-35x more calcium, and 2-5x more iron. For example, finger millet has 344mg calcium vs rice\'s 10mg, and pearl millet has 8mg iron vs rice\'s 0.7mg. White rice does have slightly higher caloric density and carbohydrate content. The key advantage of millets is their significantly higher micronutrient density, making them more nutritious calorie-for-calorie.',
    category: 'Nutrition',
    relatedMillets: [],
  },

  // =====================
  // COOKING (4)
  // =====================
  {
    id: 'soaking-millets',
    question: 'Do millets need soaking before cooking?',
    answer:
      'Soaking requirements vary by millet type. Husked millets like kodo millet, little millet, barnyard millet, and browntop millet benefit from soaking for 30 minutes to 2 hours. This reduces cooking time, improves texture, and helps reduce anti-nutrients like phytic acid. Pearl millet (bajra) and sorghum (jowar) are typically ground into flour and don\'t require soaking. Finger millet (ragi) flour also doesn\'t need soaking. Whole grain preparations of larger millets like sorghum may benefit from 6-8 hours of soaking for softer results.',
    category: 'Cooking',
    relatedMillets: [
      'kodo-millet',
      'little-millet',
      'barnyard-millet',
      'browntop-millet',
    ],
  },
  {
    id: 'water-millet-ratio',
    question: 'What is the general water-to-millet ratio for cooking?',
    answer:
      'The water-to-millet ratio varies depending on the specific millet and desired consistency. As a general guide: foxtail millet and little millet use a 1:2.5 ratio, kodo millet and barnyard millet work well with 1:2.5 to 1:3, and pearl millet or sorghum (when cooked whole) need 1:3 to 1:3.5. For a rice-like fluffy texture, use less water; for porridge, use more. It\'s best to start with less water and add more if needed, as overcooked millets can become mushy. Rinsing millets before cooking also affects the water requirement slightly.',
    category: 'Cooking',
    relatedMillets: [
      'foxtail-millet',
      'little-millet',
      'kodo-millet',
      'barnyard-millet',
    ],
  },
  {
    id: 'reduce-earthy-taste',
    question: 'How can I reduce the earthy or bitter taste of millets?',
    answer:
      'Several techniques help reduce the earthy or bitter taste that some people notice in millets. Soaking millets for 30 minutes to a few hours and discarding the water removes some of the bitter compounds. Dry roasting millets in a pan before cooking brings out a nutty flavor and reduces earthiness. Tempering with mustard seeds, cumin, curry leaves, and a small amount of ghee or oil adds aromatic complexity. Mixing millets with lentils (as in pongal or khichdi) or using them in spiced preparations rather than plain also helps mask any off-flavors. With time, most people develop a taste for millets\' distinctive flavor.',
    category: 'Cooking',
    relatedMillets: [],
  },
  {
    id: 'storing-millets',
    question: 'How should I store millets?',
    answer:
      'Uncooked millets should be stored in clean, dry, airtight containers in a cool, dark place. Whole grain millets have a shelf life of 6-12 months when stored properly. Millet flours should be used within 2-3 months as they can turn rancid faster due to the exposed oils; refrigerating millet flour extends its life to 4-6 months. Cooked millets can be refrigerated for 3-4 days in sealed containers. Always ensure the grains are completely dry before storage, and check periodically for any signs of moisture, insects, or off-odors.',
    category: 'Cooking',
    relatedMillets: [],
  },

  // =====================
  // HEALTH (5)
  // =====================
  {
    id: 'millets-diabetes',
    question: 'Are millets good for people with diabetes?',
    answer:
      'Millets have a low to medium glycemic index (GI), typically ranging from 44 to 62, which is lower than white rice (GI ~73). Their high fiber content slows glucose absorption, potentially helping manage post-meal blood sugar spikes. Several peer-reviewed studies suggest that replacing rice with millets can improve glycemic control. However, millets are not a medicine or cure for diabetes. They are a healthier dietary choice that should be part of a comprehensive management plan. Always consult your doctor or dietician for personalized advice on managing diabetes.',
    category: 'Health',
    relatedMillets: [],
  },
  {
    id: 'daily-millet-consumption',
    question: 'Can I eat millets every day?',
    answer:
      'Yes, millets can be safely consumed every day as part of a balanced diet. However, Ayurvedic and modern nutritional wisdom both recommend rotating between different millets and other grains to ensure a diverse nutrient intake. For example, you might have ragi for breakfast, jowar roti for lunch, and foxtail millet rice for dinner, rotating through different millets across the week. This ensures you benefit from each millet\'s unique nutritional profile while avoiding excessive intake of any single grain\'s anti-nutrients.',
    category: 'Health',
    relatedMillets: [],
  },
  {
    id: 'millets-thyroid',
    question: 'Do millets cause thyroid problems?',
    answer:
      'Some millets, particularly pearl millet and finger millet, contain goitrogens, compounds that can interfere with iodine uptake by the thyroid gland. However, cooking significantly reduces goitrogen content, and moderate consumption of well-cooked millets is considered safe for most people. If you have a pre-existing thyroid condition (especially hypothyroidism), it is advisable to consult your endocrinologist before making millets a major part of your diet. Ensuring adequate iodine intake through iodized salt also helps mitigate any potential effect.',
    category: 'Health',
    relatedMillets: ['pearl-millet', 'finger-millet'],
  },
  {
    id: 'millets-pregnancy',
    question: 'Can pregnant women eat millets?',
    answer:
      'Yes, millets can be an excellent addition to a pregnancy diet. Finger millet (ragi) is particularly valuable as it provides 344mg of calcium per 100g, supporting the developing baby\'s bones and the mother\'s calcium needs. Pearl millet (bajra) is rich in iron (8mg/100g), which helps prevent pregnancy-related anemia. Millets also provide folate, zinc, and other essential minerals important during pregnancy. As with any dietary change during pregnancy, it is best to consult your obstetrician or dietician for guidance tailored to your specific nutritional needs.',
    category: 'Health',
    relatedMillets: ['finger-millet', 'pearl-millet'],
  },
  {
    id: 'millets-weight-loss',
    question: 'Which millet is best for weight loss?',
    answer:
      'For weight management, barnyard millet and browntop millet are particularly noteworthy. Barnyard millet has the lowest calorie content among millets (approximately 307 kcal per 100g compared to 356 kcal for rice) and is also low in carbohydrates. Browntop millet offers the highest fiber content (about 12.5g/100g), which promotes satiety and keeps you feeling full longer. Kodo millet is another good option with its high fiber and low glycemic index. Remember that no single food causes weight loss. Millets should be part of an overall balanced diet combined with regular physical activity.',
    category: 'Health',
    relatedMillets: ['barnyard-millet', 'browntop-millet', 'kodo-millet'],
  },

  // =====================
  // AYURVEDA (2)
  // =====================
  {
    id: 'trina-dhanya',
    question: 'What is Trina Dhanya in Ayurveda?',
    answer:
      'Trina Dhanya is an Ayurvedic classification term meaning "grains from grasses" (Trina = grass, Dhanya = grain). As described in the Charaka Samhita and Bhavaprakasha Nighantu, millets fall under this category within the broader Dhanya Varga (grain group). The classification also includes a related sub-group called Kshudra Dhanya (minor grains). These texts describe millets as generally Laghu (light), Ruksha (dry), and Kashaya (astringent) in nature, making them particularly useful for balancing Kapha dosha and supporting digestive health.',
    category: 'Ayurveda',
    relatedMillets: [],
  },
  {
    id: 'dosha-millet-guide',
    question: 'Which millets are best suited for my dosha type?',
    answer:
      'The ideal millet depends on your Ayurvedic constitution (Prakriti). For Vata types, warming millets like pearl millet (bajra) and finger millet (ragi) cooked with ghee are recommended. Pitta types benefit from cooling millets such as finger millet, little millet, and barnyard millet. Kapha types should favor light, dry millets like foxtail millet, kodo millet, and browntop millet. For a detailed breakdown including seasonal recommendations and preparation guidelines, visit our dedicated Ayurveda page. We recommend consulting a qualified Ayurvedic practitioner for personalized dietary advice based on your unique constitution and current state of balance.',
    category: 'Ayurveda',
    relatedMillets: [
      'pearl-millet',
      'finger-millet',
      'little-millet',
      'barnyard-millet',
      'foxtail-millet',
      'kodo-millet',
      'browntop-millet',
    ],
  },
];
