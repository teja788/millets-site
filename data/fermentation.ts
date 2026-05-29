import type { FermentedProduct } from '@/lib/types';

export const fermentedProducts: FermentedProduct[] = [
  {
    name: 'Ambali',
    region: 'South India (Tamil Nadu, Karnataka, Andhra Pradesh)',
    millets: ['finger-millet'],
    process:
      'Finger millet (ragi) flour is cooked into a thick porridge, cooled, and mixed with water or buttermilk. The mixture is left to ferment at room temperature, allowing naturally present lactic acid bacteria (LAB), primarily Lactobacillus plantarum and L. fermentum, to acidify the batter. The result is a thin, tangy, probiotic-rich gruel consumed as a cooling drink.',
    duration: '8-12 hours (overnight fermentation)',
    nutritionalBenefit:
      'Fermentation increases the bioavailability of calcium and iron from finger millet by reducing phytic acid content by up to 40-52%. LAB proliferation produces B-vitamins (especially B12 and folate) and improves protein digestibility. The low pH inhibits pathogenic bacteria, making it a safe, shelf-stable food in tropical climates.',
    culturalContext:
      'Ambali is the quintessential working-class food of southern India, consumed by farmers and laborers as a midday meal for centuries. In Tamil Nadu it is called "koozh" and served free at roadside stalls during summer. It is considered a symbol of resilience and self-sufficiency among rural communities.',
  },
  {
    name: 'Boza',
    region: 'Turkey, Balkans (Bulgaria, Albania, Romania, North Macedonia)',
    millets: ['proso-millet', 'pearl-millet'],
    process:
      'Millet grains (traditionally proso millet, sometimes combined with wheat or maize) are soaked, boiled until soft, then mashed and strained. Sugar and a starter from a previous batch are added. The mixture undergoes a mixed fermentation involving both LAB (Lactobacillus, Leuconostoc) and yeasts (Saccharomyces), producing a thick, slightly fizzy, mildly alcoholic (typically <1% ABV) sweet-sour beverage.',
    duration: '3-10 days',
    nutritionalBenefit:
      'Boza is rich in vitamins B1, B2, and B6 from the combined action of LAB and yeast. The fermentation process breaks down complex carbohydrates into easily digestible sugars while generating lactic acid that enhances mineral absorption. It contains approximately 1000 CFU/mL of live probiotics and provides sustained energy from its complex carbohydrate matrix.',
    culturalContext:
      'Boza has a history stretching back roughly 9,000 years to Mesopotamia, making it one of the oldest known fermented beverages on Earth. In Ottoman Turkey, boza sellers (bozaci) were a common winter sight, and the drink is still associated with cold weather. The famous Vefa Bozacisi in Istanbul has been serving boza since 1876. In Bulgaria, boza remains a popular winter drink sold in bakeries and street stalls.',
  },
  {
    name: 'Ogi',
    region: 'Nigeria, West Africa (Ghana, Benin, Togo)',
    millets: ['sorghum', 'pearl-millet'],
    process:
      'Sorghum or millet grains are steeped in water for 1-3 days, then wet-milled and sieved. The starchy filtrate is allowed to sediment and ferment spontaneously. Dominant microorganisms include Lactobacillus plantarum, Corynebacterium, and Saccharomyces cerevisiae. The fermented slurry is cooked into a smooth porridge (pap) for consumption.',
    duration: '24-72 hours',
    nutritionalBenefit:
      'The fermentation of ogi significantly improves the amino acid profile, particularly lysine content, which is typically limiting in millet-based foods. Phytic acid is reduced by 50-60%, dramatically improving zinc and iron bioavailability. The lactic acid produced lowers the pH to 3.5-4.0, creating an inhospitable environment for enteropathogens like E. coli and Salmonella.',
    culturalContext:
      'Ogi is the primary weaning food across West Africa, introduced to infants from 4-6 months of age. Among the Yoruba, it is called "ogi" or "agidi" when set into a gel; among the Hausa, the equivalent is "kamu." It is a staple breakfast food consumed by all age groups. Research into fortifying ogi with soybean has been a major focus of West African food science.',
  },
  {
    name: 'Togwa',
    region: 'Tanzania, East Africa (Kenya, Mozambique)',
    millets: ['finger-millet', 'sorghum'],
    process:
      'Finger millet or sorghum flour is made into a thin porridge and cooled to about 40 degrees Celsius. Germinated millet flour (malt) is added as a source of amylase enzymes and natural microflora. The mixture ferments at ambient temperature, with Lactobacillus brevis and L. plantarum dominating. The result is a sweet-sour, slightly effervescent beverage.',
    duration: '12-24 hours',
    nutritionalBenefit:
      'The use of germinated grain introduces amylase enzymes that liquefy the starch, reducing viscosity while increasing energy density per unit volume, a critical advantage for infant feeding. Fermentation enhances the content of thiamine, riboflavin, and niacin. The combination of germination and fermentation achieves up to 88.3% reduction in phytic acid, vastly improving mineral bioavailability.',
    culturalContext:
      'Togwa is deeply embedded in Tanzanian daily life. It is sold by women vendors in recycled plastic containers at bus stops, markets, and school gates across the country. It is an affordable, nutrient-dense beverage for low-income families and is particularly valued during the hot season as a thirst quencher. The World Food Programme has studied togwa as a model for indigenous probiotic foods.',
  },
  {
    name: 'Chibuku',
    region: 'Southern Africa (Zimbabwe, Zambia, Malawi, Botswana, South Africa)',
    millets: ['sorghum', 'pearl-millet'],
    process:
      'Sorghum or millet malt is mixed with maize or sorghum adjunct and water. The mash undergoes a two-stage fermentation: first, a lactic acid fermentation by Lactobacillus species sours the wort (souring step); then Saccharomyces cerevisiae yeast is pitched for alcoholic fermentation. The result is an opaque, thick, pinkish-brown beer with a sour taste, typically 3-4% ABV. It is not filtered, retaining the grain particles.',
    duration: '3-5 days',
    nutritionalBenefit:
      'Chibuku retains significant nutritional value because it is unfiltered, preserving the grain solids, B-vitamins (especially thiamine and riboflavin), and residual proteins. The fermentation converts up to 70% of the phytic acid, substantially increasing iron and zinc bioavailability. A typical serving provides meaningful amounts of calories, protein, and micronutrients, making it a caloric supplement for subsistence communities.',
    culturalContext:
      'Traditional opaque beer is the most widely consumed alcoholic beverage in sub-Saharan Africa and is central to social ceremonies, ancestral offerings, and communal gatherings. The commercial brand "Chibuku" (meaning "give to the people" in Shona) was established in the 1960s and is now produced industrially in carton packaging across multiple countries. Home-brewed versions remain common in rural areas and are often prepared by women as a communal activity.',
  },
  {
    name: 'Kunu',
    region: 'Nigeria (Northern Nigeria, widespread across West Africa)',
    millets: ['pearl-millet', 'sorghum'],
    process:
      'Pearl millet or sorghum grains are soaked, wet-milled with spices (ginger, cloves, red pepper, sweet potato), and divided into two portions. One portion is cooked into a paste (gelatinized starch), then mixed back with the raw portion. The combined mixture ferments for 8-24 hours through the action of wild LAB and yeasts. The result is strained into a smooth, spiced, milky-white non-alcoholic beverage.',
    duration: '8-24 hours',
    nutritionalBenefit:
      'The addition of spices contributes antioxidant and antimicrobial properties alongside the LAB fermentation. Kunu provides approximately 80-90 kcal per 100mL with significant amounts of calcium, magnesium, and iron. The spices (particularly ginger and pepper) aid digestion and have anti-inflammatory properties. Fermentation improves the protein efficiency ratio and reduces anti-nutritional factors by 40-55%.',
    culturalContext:
      'Kunu (also called kunun-zaki, meaning "sweet drink") is the most popular traditional non-alcoholic beverage in northern Nigeria, consumed by all age groups across the Hausa, Fulani, and Nupe communities. It is served at naming ceremonies, weddings, and during Ramadan as an iftar drink. Different variants exist based on the base grain: kunun-gyada (with groundnut), kunun-aya (with tiger nut), and kunun-tsamiya (with tamarind).',
  },
  {
    name: 'Fura da Nono',
    region: 'Nigeria (Northern Nigeria), Niger, northern Ghana',
    millets: ['pearl-millet'],
    process:
      'Pearl millet is pounded into flour, mixed with spices (ginger, pepper, cloves), shaped into balls, and partially cooked by boiling. These dense, spiced millet balls (fura) are then crumbled and mixed into fermented cow milk or yogurt (nono). The nono itself is produced by spontaneous fermentation of raw milk by Lactobacillus and Streptococcus species over 12-24 hours. The combination is stirred into a thick, drinkable meal.',
    duration: '12-24 hours (for the nono component)',
    nutritionalBenefit:
      'Fura da nono is a nutritionally synergistic combination: the millet provides energy, fiber, iron, and B-vitamins, while the fermented milk contributes high-quality protein, calcium, and live probiotics. The lactic acid in nono enhances iron absorption from the millet. Together, they deliver a complete amino acid profile that neither component achieves alone. It provides approximately 150-180 kcal per serving with 6-8g of protein.',
    culturalContext:
      'Fura da nono is the iconic food of the Fulani (Fula/Peul) pastoralist people, who historically traded their dairy products with sedentary millet-farming communities. It represents a centuries-old nutritional partnership between herder and farmer cultures. Today it is sold by Fulani women in calabashes at roadsides and markets across the Sahel region and is celebrated as a symbol of cross-cultural food exchange.',
  },
  {
    name: 'Banku',
    region: 'Ghana (Ga, Ewe, and Fante communities)',
    millets: ['pearl-millet'],
    process:
      'Corn dough and millet or cassava dough are blended, mixed with water, and left to ferment naturally for 2-3 days. During fermentation, Lactobacillus, Saccharomyces, and Candida species produce lactic acid and other flavor compounds. The fermented dough is then cooked on low heat with continuous stirring until it forms a smooth, sticky, elastic ball. It is served as an accompaniment to soups, stews, and grilled fish.',
    duration: '2-3 days',
    nutritionalBenefit:
      'The extended fermentation of banku significantly improves its digestibility and mineral bioavailability. The combination of corn and millet creates a complementary amino acid profile, millet provides methionine that corn lacks, while corn contributes leucine. Fermentation reduces cyanogenic glycosides (from cassava when used), making the food safer, and produces organic acids that serve as natural preservatives.',
    culturalContext:
      'Banku is one of the most popular staple foods in southern Ghana and is closely associated with the Ga and Ewe peoples. The dish is almost always paired with pepper sauce, okro stew, or grilled tilapia. "Banku and tilapia" is considered Ghana unofficial national dish combination and is celebrated at food festivals. The fermentation is traditionally managed by women who maintain active starter cultures passed through generations.',
  },
  {
    name: 'Jnard / Raksi',
    region: 'Nepal (Limbu, Rai, and Newari communities)',
    millets: ['finger-millet'],
    process:
      'Finger millet grain is cooked, spread out to cool, and inoculated with a traditional starter called "murcha", a dry cake containing a consortium of molds (Rhizopus, Mucor), yeasts (Saccharomyces, Pichia), and bacteria. The inoculated millet is packed into an airtight container (traditionally a bamboo basket lined with banana leaves) and left for solid-state fermentation. The fermented mass (jnard) can be consumed directly as a sweet-sour paste or steeped in hot water to make "tongba" beer. For raksi (distilled spirit), the fermented mass is distilled in a traditional copper still.',
    duration: '7-14 days (fermentation), plus distillation for raksi',
    nutritionalBenefit:
      'The murcha-mediated fermentation enriches finger millet with essential amino acids, particularly lysine and tryptophan. Saccharification by Rhizopus molds releases simple sugars from starch, making the energy more accessible. Studies show a 2-3 fold increase in free amino acids and significant B-vitamin production. The undistilled jnard retains fiber, minerals, and probiotic microorganisms.',
    culturalContext:
      'Jnard and tongba are central to the social and ritual life of the Limbu and Rai ethnic groups of eastern Nepal. Tongba (hot millet beer sipped through a bamboo straw called a "pipsing") is served at every social occasion, births, weddings, funerals, and festivals. It is considered a gesture of hospitality and warmth, especially during cold Himalayan winters. The murcha starter is a closely guarded family recipe passed from mothers to daughters.',
  },
  {
    name: 'Bushera',
    region: 'Uganda (Ankole, Kigezi, western Uganda)',
    millets: ['sorghum', 'pearl-millet'],
    process:
      'Sorghum or millet grain is malted by soaking in water for 24 hours, germinating for 3-4 days, then sun-drying and grinding into malt flour. Separately, a portion of millet flour is cooked into porridge. The malt flour is mixed into the cooled porridge, and the natural enzymes and microflora initiate fermentation. LAB (especially Lactobacillus fermentum) dominate, producing a sour, slightly thick beverage. Extended fermentation may yield mild alcohol.',
    duration: '1-4 days (depending on desired sourness and alcohol content)',
    nutritionalBenefit:
      'Bushera is rich in energy (approximately 340 kcal/L) and provides significant amounts of iron, zinc, and calcium. The malting step alone reduces phytic acid by 25-30%, and subsequent fermentation reduces it further by an additional 20-25%. The beverage is particularly valued as a nutritious drink for pregnant and lactating women. Studies by Makerere University have shown that bushera consumption correlates with improved hemoglobin levels in children.',
    culturalContext:
      'Bushera is the most important traditional fermented beverage in western Uganda and is deeply integrated into the Ankole and Bakiga cultures. It is the customary drink served to visitors and is essential at traditional marriage negotiations (where the groom family must bring bushera to the bride family). Longer-fermented versions called "omuramba" are reserved for elders and ceremonies. Local governments have supported bushera production as a food security intervention.',
  },
  {
    name: 'Koozh / Ragi Java',
    region: 'Tamil Nadu, South India',
    millets: ['finger-millet'],
    process:
      'Finger millet flour is mixed with water and cooked into a thin porridge. Once cooled to room temperature, it is transferred to an earthen pot (mann paanai) and left overnight for spontaneous fermentation by ambient LAB, primarily Lactobacillus acidophilus and L. plantarum. By morning, the porridge has developed a pleasant sour tang. It is consumed cold, often mixed with buttermilk, raw onion, and green chili.',
    duration: 'Overnight (8-12 hours)',
    nutritionalBenefit:
      'Overnight fermentation in koozh increases the bioavailability of calcium (finger millet already contains 364 mg/100g) by reducing phytic acid and oxalic acid that bind calcium. The LAB-produced lactic acid further aids calcium solubility in the gut. Koozh is an exceptional source of probiotics, studies have measured up to 10^8 CFU/mL of live LAB. The earthen pot contributes trace minerals and provides natural cooling through evaporation.',
    culturalContext:
      'Koozh (also spelled kanji or koozhu) is an ancient Tamil food with deep class and cultural significance. It was historically the staple food of agricultural laborers and is distributed free from public koozh stalls during the scorching Tamil summer (April-June). The phrase "koozh kudikka" (to drink koozh) is a Tamil idiom for eating a meal. Former Tamil Nadu Chief Minister Jayalalithaa launched the "Amma Unavagam" canteen scheme which served koozh as a low-cost nutritious meal.',
  },
  {
    name: 'Mudde Ambali',
    region: 'Karnataka, South India (Old Mysore region, Mandya, Ramanagara)',
    millets: ['finger-millet'],
    process:
      'Ragi (finger millet) flour is cooked with water into a thick, stiff ball called "mudde" (ragi ball). Leftover mudde is broken into pieces, immersed in water or buttermilk, and left to ferment overnight in an earthen or steel vessel. The natural LAB from the environment and the buttermilk culture ferment the starch, producing a sour, semi-liquid gruel by morning. Some preparations add cooked rice to the mix for additional starch and texture variation.',
    duration: 'Overnight (8-12 hours)',
    nutritionalBenefit:
      'Mudde ambali retains all the nutritional benefits of finger millet (high calcium, iron, and dietary fiber) while the fermentation step enhances mineral absorption and introduces beneficial probiotics. The combination with buttermilk adds high-quality milk protein, additional calcium, and a more complete amino acid profile. The slow-releasing carbohydrates from the fermented ragi provide sustained energy with a low glycemic response, making it particularly beneficial for people managing blood sugar levels.',
    culturalContext:
      'Mudde ambali is the breakfast of rural Karnataka, particularly in the old Mysore region where finger millet cultivation has been practiced for over 2,000 years. The legendary Kannada poet and saint Kanakadasa (16th century) wrote "Ramadhanya Charithre," an allegorical debate between ragi and rice in which ragi emerges victorious, a work that elevated ragi to a symbol of humility and strength. Mudde (ragi ball) with saaru (rasam) remains the everyday meal of millions in Karnataka, and ambali is its fermented, cooling counterpart.',
  },
];
