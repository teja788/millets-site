import type { Myth } from '@/lib/types';

export const myths: Myth[] = [
  {
    id: 'coarse-inferior-grains',
    myth: 'Millets are coarse and inferior grains',
    fact: 'This perception is a colonial-era relic. The Indian government officially renamed millets as "Nutri-Cereals" in 2018, recognizing their superior nutritional profile compared to refined rice and wheat. Millets contain 2-3 times more minerals (calcium, iron, zinc) than rice, significantly more dietary fiber (8-12.5g per 100g versus 0.2g for polished rice), and comparable or higher protein content. The United Nations declared 2023 the International Year of Millets, backed by 72 countries, specifically to counter the stigma of millets as "poor people food." The term "coarse grain" referred to the grain texture before processing, not nutritional quality — and modern processing technology has made this distinction obsolete.',
    category: 'general',
    sources: [
      'Government of India Gazette Notification, April 2018 — Reclassification as Nutri-Cereals',
      'UN General Assembly Resolution A/RES/75/263 — International Year of Millets 2023',
      'ICAR-IIMR, Nutritive Value of Millets (2020)',
    ],
  },
  {
    id: 'kidney-stones',
    myth: 'Millets cause kidney stones',
    fact: 'This is one of the most widespread misconceptions about millets and is not supported by evidence. Most millets have low to moderate oxalate content — significantly lower than commonly consumed foods like spinach, almonds, and chocolate. In fact, research published in the Journal of Food Science and Technology (2019) demonstrated that pearl millet extract actively inhibits calcium oxite crystal formation by 26-34% in vitro, suggesting a protective rather than harmful effect. Finger millet contains approximately 20 mg oxalate per 100g, compared to 750-970 mg per 100g in spinach. The kidney stone myth likely arose from confusion with high-oxalate leafy greens, not millets. People with a history of kidney stones should consult their doctor about any dietary changes, but there is no basis for blanket avoidance of millets.',
    category: 'health',
    sources: [
      'Sade, A. et al., "In vitro inhibition of calcium oxalate crystallization by pearl millet extract," Journal of Food Science and Technology (2019)',
      'USDA FoodData Central — Oxalate content database',
      'Indian Journal of Nephrology, "Dietary oxalate sources in Indian foods" (2018)',
    ],
  },
  {
    id: 'thyroid-problems',
    myth: 'Millets cause thyroid problems',
    fact: 'Some millets, particularly pearl millet and finger millet, contain C-glycosyl flavones that can inhibit thyroid peroxidase (TPO) enzyme activity in laboratory settings, leading to concerns about goitrogenic effects. However, a comprehensive 2024 systematic review published in Critical Reviews in Food Science and Nutrition concluded that the evidence for millets causing thyroid dysfunction in humans consuming a balanced diet is "not compelling enough" to recommend avoidance. The goitrogenic effect is observed primarily in animal studies using millet as the sole food source — a condition that does not reflect normal human dietary patterns. Cooking and processing significantly reduce the flavonoid content, and adequate iodine intake fully counteracts any potential anti-thyroid effect. People with pre-existing thyroid conditions should consume millets in moderation as part of a varied diet.',
    category: 'health',
    sources: [
      'Sharma, N. et al., "Effect of millets on thyroid function: a systematic review," Critical Reviews in Food Science and Nutrition (2024)',
      'Gaitan, E., "Goitrogens in food and water," Annual Review of Nutrition (1990)',
      'Kaur, K. et al., "Impact of processing on anti-nutritional factors in pearl millet," Food Chemistry (2021)',
    ],
  },
  {
    id: 'hard-to-cook',
    myth: 'Millets are hard to cook',
    fact: 'Most millets cook as easily as rice and require no special equipment. Foxtail millet, little millet, barnyard millet, and proso millet cook in just 12-15 minutes with a simple 1:2 or 1:2.5 grain-to-water ratio — virtually identical to the rice cooking method. They can be cooked in a regular pot, rice cooker, pressure cooker, or Instant Pot. Finger millet flour (ragi) cooks into porridge or mudde in under 10 minutes. Pearl millet and sorghum, which have harder kernels, benefit from 30-60 minutes of soaking but still cook within 20-25 minutes after soaking. The perception of difficulty likely stems from unfamiliarity rather than any inherent complexity. Once tried, most people find millets no harder to cook than rice or quinoa.',
    category: 'cooking',
    sources: [
      'ICAR-Indian Institute of Millets Research, "Millet Cooking Guide" (2022)',
      'National Institute of Nutrition (NIN), Hyderabad — Millet recipe guidelines',
    ],
  },
  {
    id: 'taste-bad',
    myth: 'Millets taste bad or bland',
    fact: 'Each millet has a distinct and appealing flavor profile when prepared correctly. Foxtail millet has a mild, nutty sweetness similar to couscous. Pearl millet (bajra) has a robust, earthy flavor prized in Rajasthani and Gujarati cuisines. Finger millet (ragi) delivers a rich, malty taste that makes excellent porridges and baked goods. Sorghum (jowar) has a neutral, slightly sweet flavor that works well in rotis and pilafs. Barnyard millet has a light, grassy note perfect for upma and khichdi. The perceived blandness often results from under-seasoning or unfamiliarity. In traditional cuisines across India, Africa, and East Asia, millets have been the preferred grain for thousands of years precisely because of their flavor. Modern processing techniques like flaking, popping, and malting further enhance millet taste and versatility.',
    category: 'cooking',
    sources: [
      'Saleh, A.S.M. et al., "Millet grains: nutritional quality, processing, and potential health benefits," Comprehensive Reviews in Food Science and Food Safety (2013)',
      'ICAR-IIMR, "Millet Recipes: A Healthy Choice" (2018)',
    ],
  },
  {
    id: 'only-for-poor',
    myth: 'Millets are only for poor people',
    fact: 'This stigma is rapidly reversing worldwide. The UN International Year of Millets 2023 brought millets to the global stage, with celebrity chefs, fine-dining restaurants, and premium food brands embracing them. In India, millet-based products now command premium pricing — millet cookies, millet pasta, and millet-based snacks are sold at 2-3 times the price of their wheat equivalents in urban markets. Brands like Slurrp Farm, Soulfull, and Kodo Millet Co. have positioned millets as aspirational health foods. Internationally, sorghum-based craft beers, fonio grain bowls, and millet flour artisan breads have entered gourmet food circuits in New York, London, and Paris. The Indian government promotion of millets at the G20 presidency (2023) further elevated their global status from subsistence crop to superfood.',
    category: 'general',
    sources: [
      'UN Food and Agriculture Organization (FAO), "International Year of Millets 2023 Report"',
      'India G20 Presidency — "Millet Food Festival" documentation (2023)',
      'Economic Times, "The millet market boom in India" (2023)',
    ],
  },
  {
    id: 'all-gluten-free',
    myth: 'All millets are gluten-free',
    fact: 'While millets themselves are naturally gluten-free — they belong to a different botanical tribe than wheat, barley, and rye and do not contain the gliadin and glutenin proteins that form gluten — cross-contamination during processing is a real concern. Millets may be processed in facilities that also handle wheat, or they may be grown in rotation with wheat and carry trace amounts. For people with celiac disease (not just gluten sensitivity), even trace amounts of gluten can trigger an immune response. Therefore, individuals with celiac disease should look for millets that are explicitly certified gluten-free and processed in dedicated gluten-free facilities. For the general population and those with non-celiac gluten sensitivity, millets are an excellent and safe gluten-free alternative. Teff, sorghum, and finger millet are among the most commonly certified gluten-free millets available commercially.',
    category: 'nutrition',
    sources: [
      'Celiac Disease Foundation, "Safe Grains and Flours" (2022)',
      'Taylor, J.R.N. et al., "Millets: their unique nutritional and health-promoting attributes," Gluten-Free Ancient Grains (2017)',
    ],
  },
  {
    id: 'lack-protein',
    myth: 'Millets lack protein',
    fact: 'Millets contain 7-12.5 grams of protein per 100 grams, which is comparable to wheat (11.8g) and significantly higher than polished rice (6.8g). Proso millet leads the group with approximately 12.5g protein per 100g, followed by pearl millet at 11.6g and foxtail millet at 12.3g. The protein quality is also noteworthy: millets are relatively rich in sulfur-containing amino acids (methionine and cysteine) that are deficient in legumes, making millet-legume combinations nutritionally complementary. Finger millet, while lower in total protein (7.3g), contains unusually high methionine for a cereal. The protein digestibility of millets improves substantially with processing methods like fermentation, malting, and cooking. When combined with pulses (dal), millets provide a complete amino acid profile rivaling animal protein sources.',
    category: 'nutrition',
    sources: [
      'Longvah, T. et al., "Indian Food Composition Tables" ICMR-NIN (2017)',
      'Saleh, A.S.M. et al., Comprehensive Reviews in Food Science and Food Safety (2013)',
      'Gopalan, C. et al., "Nutritive Value of Indian Foods" NIN (revised 2011)',
    ],
  },
  {
    id: 'gas-bloating',
    myth: 'Millets cause gas and bloating',
    fact: 'Some people experience temporary digestive discomfort when first introducing millets, which is normal for any high-fiber food added suddenly to a low-fiber diet. Millets contain 8-12.5g of dietary fiber per 100g, compared to just 0.2g in polished white rice. This fiber is predominantly insoluble fiber that feeds beneficial gut bacteria, and the initial adjustment period typically lasts 1-2 weeks. The solution is gradual introduction: start with small portions (1/4 cup dry) and increase over 2-3 weeks as your gut microbiome adapts. Soaking millets for 4-6 hours before cooking, and ensuring adequate water intake, further reduces any digestive discomfort. Long-term, the prebiotic fiber in millets promotes a healthier gut microbiome, more regular bowel movements, and reduced bloating. Studies show that regular millet consumption actually improves digestive health markers over time.',
    category: 'health',
    sources: [
      'Devi, P.B. et al., "Health benefits of finger millet polyphenols and dietary fiber," Journal of Food Science and Technology (2014)',
      'World Gastroenterology Organisation, "Probiotics and Prebiotics — Global Guidelines" (2023)',
    ],
  },
  {
    id: 'cant-make-bread',
    myth: "You can't make bread with millets",
    fact: 'Millets have been used to make flatbreads, fermented breads, and baked goods across cultures for millennia. Bajra roti (pearl millet flatbread) is a daily staple in Rajasthan and Gujarat. Jowar bhakri (sorghum flatbread) is the everyday bread of Maharashtra and northern Karnataka. Ragi dosa (finger millet crepe) is a beloved breakfast across South India. Injera, the spongy sourdough flatbread of Ethiopia, is traditionally made from teff (a millet). In West Africa, fura (pearl millet bread balls) are a staple food. While millets lack gluten and therefore cannot produce the same elastic, leavened wheat-style bread without modification, they excel in flatbreads, crepes, steamed breads, and quick breads. Modern baking techniques using xanthan gum, psyllium husk, or blending millet flour with a small percentage of wheat flour produce excellent risen loaves and buns.',
    category: 'cooking',
    sources: [
      'Rai, S. et al., "Gluten-free products from millet flours — a review," Food Chemistry (2018)',
      'Hager, A.S. et al., "Influence of flour particle size on bread quality," European Food Research and Technology (2012)',
    ],
  },
  {
    id: 'special-farming-equipment',
    myth: 'Millets need special farming equipment',
    fact: 'Millets are among the least input-intensive crops on Earth, which is precisely why they have been the preferred crop of smallholder farmers for thousands of years. They require no specialized equipment — they can be sown by hand broadcasting, grown without irrigation (surviving on as little as 200-300mm of rainfall), and thrive in poor, marginal soils where rice and wheat fail entirely. Millets require minimal to no chemical fertilizer and are naturally resistant to most pests and diseases, reducing the need for pesticides. Harvesting can be done manually with simple sickles. This ultra-low-input agriculture is not a limitation but a massive advantage: millets produce nutritious food in conditions where no other cereal can survive. The FAO identifies millets as "climate-smart crops" specifically because they need so little to grow so much.',
    category: 'farming',
    sources: [
      'FAO, "Millets in the Drylands: Production, Climate-Smart Agriculture" (2023)',
      'ICRISAT, "Smart Food — Millets for Climate Resilience" (2022)',
      'Rao, B.D. et al., "Millets — Future of Food and Farming," ICAR-IIMR (2021)',
    ],
  },
  {
    id: 'only-kharif',
    myth: 'Millets are only a kharif (monsoon) crop',
    fact: 'While many millets are traditionally grown as kharif (monsoon/rainy season, June-October) crops in India, they are remarkably versatile in their growing seasons. Rabi (winter, October-March) cultivation of sorghum is widespread in Maharashtra, Karnataka, and Andhra Pradesh — rabi jowar is a distinct, important crop with its own varieties and culinary uses. Pearl millet is grown as a summer crop in parts of Gujarat and Rajasthan. Foxtail millet and little millet have extremely short maturation cycles of just 60-90 days, allowing them to be planted in multiple seasons as gap-fill or relay crops. Globally, millets are grown year-round: in the Sahel region of Africa, pearl millet is a dry-season crop; in China, foxtail millet spans spring to autumn. This multi-season adaptability makes millets uniquely flexible for crop planning and food security.',
    category: 'farming',
    sources: [
      'ICAR-IIMR, "Millets — Crop Production Technologies" (2022)',
      'Directorate of Millets Development, Government of India — Seasonal cultivation guidelines',
      'ICRISAT, "Pearl millet and sorghum cropping systems in India" (2020)',
    ],
  },
  {
    id: 'not-enough-calcium',
    myth: "Millets don't have enough calcium",
    fact: 'Finger millet (ragi) contains approximately 364 mg of calcium per 100g — this is roughly three times the calcium in whole milk (120 mg per 100mL) and over 30 times the calcium in brown rice (10 mg per 100g). This makes finger millet one of the richest non-dairy sources of calcium available in any food system. Even other millets have respectable calcium levels: kodo millet (27 mg), foxtail millet (31 mg), and pearl millet (42 mg) all exceed the calcium content of rice. The calcium in finger millet is particularly bioavailable because fermentation and traditional processing methods (like making ragi ambali or ragi mudde) reduce phytic acid that otherwise binds calcium. Regular consumption of finger millet has been associated with lower rates of osteoporosis in populations that traditionally consume it, making it especially valuable for lactose-intolerant individuals, vegans, and post-menopausal women.',
    category: 'nutrition',
    sources: [
      'Longvah, T. et al., "Indian Food Composition Tables" ICMR-NIN (2017)',
      'Shobana, S. et al., "Finger millet: an overview," International Journal of Food Science and Nutrition (2013)',
      'Singh, P. & Raghuvanshi, R.S., "Finger millet for food and nutritional security," African Journal of Food Science (2012)',
    ],
  },
  {
    id: 'processed-equally-healthy',
    myth: 'Processed millet products are equally healthy as whole millets',
    fact: 'While the growing popularity of millet-based processed foods (cookies, chips, noodles, instant mixes) is a positive trend for awareness, these products are not nutritionally equivalent to whole or minimally processed millets. Industrial processing — particularly refining, puffing at high temperatures, and extrusion — can significantly reduce the fiber, protein, and heat-sensitive micronutrients (B-vitamins, folate) that make millets nutritious. Adding sugar, salt, palm oil, and preservatives further diminishes the health advantage. A millet cookie with 30% millet flour, 25% sugar, and 20% refined fat is not the same as a bowl of whole ragi porridge. The healthiest ways to consume millets remain traditional methods: whole grain cooked as rice replacement, flour made into rotis and dosa, or fermented into porridges and drinks. When buying processed millet products, check that whole millet is the first ingredient and that added sugar and fat are minimal.',
    category: 'nutrition',
    sources: [
      'Sharma, B. et al., "Effect of processing on nutritional and anti-nutritional components of millets," Food Chemistry (2020)',
      'FSSAI (Food Safety and Standards Authority of India), "Guidelines for millet-based products" (2023)',
      'Anitha, S. et al., "A systematic review on the impact of processing on millet nutrients," Frontiers in Nutrition (2021)',
    ],
  },
];

export function getMythsByCategory(category: Myth['category']): Myth[] {
  return myths.filter((m) => m.category === category);
}
