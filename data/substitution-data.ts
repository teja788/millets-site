import type { SubstitutionEntry } from '@/lib/types';

export const substitutionEntries: SubstitutionEntry[] = [
  // =============================================
  // 1. WHITE RICE
  // =============================================
  {
    conventionalGrain: 'White Rice',
    milletSubstitutes: [
      {
        millet: 'foxtail-millet',
        milletName: 'Foxtail Millet (Kangni/Thinai)',
        ratio: '1:1',
        notes:
          'Foxtail millet is the closest substitute for white rice in both appearance and cooking method. Use the same amount of water as you would for rice (1:2 millet-to-water ratio) and cook until fluffy. The cooked grain has a mildly nutty flavor and slightly firmer bite compared to rice, making it an almost seamless swap in everyday meals.',
        bestFor: ['pilaf', 'fried rice', 'biryani', 'plain steamed rice'],
        difficulty: 'easy',
      },
      {
        millet: 'little-millet',
        milletName: 'Little Millet (Samai/Kutki)',
        ratio: '1:1',
        notes:
          'Little millet cooks quickly and has a light, fluffy texture very similar to short-grain rice. It absorbs flavors well and works as a direct replacement in rice-based dishes. Soaking for 15-20 minutes before cooking helps achieve a softer texture, and it pairs beautifully with sambar, rasam, and curries.',
        bestFor: ['lemon rice', 'curd rice', 'pongal', 'khichdi'],
        difficulty: 'easy',
      },
      {
        millet: 'barnyard-millet',
        milletName: 'Barnyard Millet (Sanwa/Jhangora)',
        ratio: '1:1',
        notes:
          'Barnyard millet has an extremely low glycemic index and calorie count, making it an excellent rice alternative for weight management. It cooks in about 15 minutes and has a slightly chewy texture. It is especially popular as a fasting food in North India and absorbs the flavor of spices and gravies readily.',
        bestFor: ['khichdi', 'pulao', 'upma', 'porridge'],
        difficulty: 'easy',
      },
      {
        millet: 'kodo-millet',
        milletName: 'Kodo Millet (Varagu/Kodra)',
        ratio: '1:1',
        notes:
          'Kodo millet has a mild, earthy flavor and holds its shape well after cooking, making it ideal for rice dishes where distinct grains are desired. Use slightly less water than for rice (1:1.75 millet-to-water ratio) to prevent mushiness. The grain turns light and fluffy when cooked correctly and is rich in dietary fiber.',
        bestFor: ['biryani', 'tamarind rice', 'pilaf', 'steamed rice'],
        difficulty: 'easy',
      },
    ],
  },

  // =============================================
  // 2. ALL-PURPOSE FLOUR (MAIDA)
  // =============================================
  {
    conventionalGrain: 'All-Purpose Flour (Maida)',
    milletSubstitutes: [
      {
        millet: 'finger-millet',
        milletName: 'Finger Millet Flour (Ragi)',
        ratio: '3:4',
        notes:
          'Replace 3 parts maida with 4 parts ragi flour, as ragi is denser and absorbs more moisture. Ragi flour adds a distinctive malty, earthy flavor and a dark brown color to baked goods. Since it lacks gluten, combine with a binding agent like flaxseed meal or xanthan gum for cakes and cookies. Works best in recipes that benefit from a denser crumb.',
        bestFor: ['cookies', 'pancakes', 'muffins', 'flatbreads'],
        difficulty: 'moderate',
      },
      {
        millet: 'sorghum',
        milletName: 'Sorghum Flour (Jowar)',
        ratio: '1:1',
        notes:
          'Sorghum flour is one of the most versatile millet flours for replacing maida. It has a neutral, mildly sweet flavor and a light color that closely mimics all-purpose flour in appearance. The texture is smooth and it works well in both sweet and savory baked goods. Add a teaspoon of psyllium husk or xanthan gum per cup of flour to improve structure in cakes and breads.',
        bestFor: ['rotis', 'bhakri', 'pancakes', 'cakes', 'cookies'],
        difficulty: 'easy',
      },
      {
        millet: 'pearl-millet',
        milletName: 'Pearl Millet Flour (Bajra)',
        ratio: '1:1',
        notes:
          'Bajra flour is heavier and more robust than maida, lending a slightly bitter, earthy flavor that works well in savory preparations. It requires more water than maida and produces a denser result. Best used in winter recipes as it has a warming effect on the body. For baking, blend 50:50 with another lighter millet flour like sorghum for better results.',
        bestFor: ['rotis', 'flatbreads', 'savory pancakes', 'thalipeeth'],
        difficulty: 'moderate',
      },
    ],
  },

  // =============================================
  // 3. WHEAT FLOUR (ATTA)
  // =============================================
  {
    conventionalGrain: 'Wheat Flour (Atta)',
    milletSubstitutes: [
      {
        millet: 'sorghum',
        milletName: 'Sorghum Flour (Jowar)',
        ratio: '1:1',
        notes:
          'Jowar flour is the easiest wheat flour substitute for making Indian flatbreads. The dough handles similarly to wheat atta, though it may crack slightly at the edges when rolling. Use warm water for kneading and roll the rotis slightly thicker than wheat rotis. The flavor is mild and the rotis puff up nicely on a hot tava with a slightly denser chew.',
        bestFor: ['bhakri', 'rotis', 'parathas', 'thalipeeth', 'dosa batter'],
        difficulty: 'easy',
      },
      {
        millet: 'pearl-millet',
        milletName: 'Pearl Millet Flour (Bajra)',
        ratio: '1:1',
        notes:
          'Bajra rotis are a staple in Rajasthan and Gujarat, making this one of the most traditional millet-for-wheat swaps. The flour produces a dark, hearty roti with a robust flavor that pairs exceptionally well with ghee, jaggery, and garlic chutney. Knead the dough with hot water and press rotis by hand rather than rolling for best results. Bajra rotis are best eaten fresh as they tend to harden on cooling.',
        bestFor: ['rotis', 'flatbreads', 'winter meals', 'parathas'],
        difficulty: 'easy',
      },
      {
        millet: 'finger-millet',
        milletName: 'Finger Millet Flour (Ragi)',
        ratio: '3:4',
        notes:
          'Ragi flour can replace wheat in many preparations but requires a slightly different approach due to its lack of gluten. Use 3 parts ragi flour for every 4 parts wheat flour called for in the recipe. The flour is best for preparations where a binding agent is already present, such as dosa batter or mudde (ragi balls). For rotis, mix 50:50 with wheat flour initially and gradually increase the ragi proportion as you get comfortable.',
        bestFor: ['ragi mudde', 'dosa', 'porridge', 'rotis (blended)'],
        difficulty: 'moderate',
      },
      {
        millet: 'foxtail-millet',
        milletName: 'Multi-Millet Flour Blend',
        ratio: '1:1',
        notes:
          'A blend of sorghum (40%), pearl millet (30%), and finger millet (30%) creates a nutritionally superior multi-millet atta that mimics wheat flour behavior. This combination provides a balanced flavor profile, good binding properties, and excellent nutrition. Pre-mixed multi-millet atta is available commercially or can be custom-ground at local flour mills. Use warm water for kneading and rest the dough for 10 minutes before rolling.',
        bestFor: ['rotis', 'chapatis', 'parathas', 'puris', 'daily use'],
        difficulty: 'easy',
      },
    ],
  },

  // =============================================
  // 4. SEMOLINA (RAVA / SUJI)
  // =============================================
  {
    conventionalGrain: 'Semolina (Rava/Suji)',
    milletSubstitutes: [
      {
        millet: 'foxtail-millet',
        milletName: 'Foxtail Millet (Kangni/Thinai)',
        ratio: '1:1',
        notes:
          'Whole foxtail millet or foxtail millet rava (semolina) is the most popular semolina substitute in South Indian cooking. Dry roast the millet for 2-3 minutes before cooking to enhance flavor and prevent clumping. Use the same water ratio as semolina upma, and the result is a nutritious, fiber-rich dish with a slightly nuttier taste. The texture is very close to traditional rava upma.',
        bestFor: ['upma', 'pongal', 'kesari', 'idli batter'],
        difficulty: 'easy',
      },
      {
        millet: 'barnyard-millet',
        milletName: 'Barnyard Millet (Sanwa/Jhangora)',
        ratio: '1:1',
        notes:
          'Barnyard millet works beautifully as a semolina replacement, especially in upma and payasam. Its small grain size means it cooks quickly and absorbs flavors from tempering spices efficiently. Use a 1:2 millet-to-water ratio and keep the flame on medium to prevent the grains from turning mushy. The cooked result has a light, airy texture that is very similar to rava.',
        bestFor: ['upma', 'payasam', 'kheer', 'savory porridge'],
        difficulty: 'easy',
      },
      {
        millet: 'little-millet',
        milletName: 'Little Millet (Samai/Kutki)',
        ratio: '1:1',
        notes:
          'Little millet rava or whole little millet grains can directly replace semolina in most South Indian recipes. The grain cooks in about 12-15 minutes and produces a fluffy, non-sticky texture ideal for upma. For best results, rinse the millet well, dry roast it lightly, and then cook with tempered spices and vegetables. It has a neutral flavor that takes on the taste of accompanying ingredients.',
        bestFor: ['upma', 'pongal', 'kitchdi', 'sweet pongal'],
        difficulty: 'easy',
      },
    ],
  },

  // =============================================
  // 5. OATS
  // =============================================
  {
    conventionalGrain: 'Oats',
    milletSubstitutes: [
      {
        millet: 'barnyard-millet',
        milletName: 'Barnyard Millet Flakes (Sanwa Flakes)',
        ratio: '1:1',
        notes:
          'Barnyard millet flakes are the closest millet equivalent to rolled oats. They cook in just 5-7 minutes and create a creamy, porridge-like consistency when simmered with milk or water. The flakes are extremely low in calories (75 kcal per 100g compared to 389 kcal for oats) and have a mild flavor that pairs well with fruits, nuts, and honey. They can also be used in overnight millet preparations just like overnight oats.',
        bestFor: ['porridge', 'overnight millets', 'smoothie bowls', 'granola'],
        difficulty: 'easy',
      },
      {
        millet: 'foxtail-millet',
        milletName: 'Foxtail Millet (Kangni/Thinai)',
        ratio: '1:1',
        notes:
          'Cracked or flaked foxtail millet can replace oats in breakfast bowls and baking recipes. When cooked as porridge, it has a slightly more textured, less gummy consistency than oats, which many people prefer. Cook with a 1:3 millet-to-liquid ratio for a creamy porridge, or use 1:2 for a thicker consistency. Top with seasonal fruits, seeds, and a drizzle of jaggery syrup for a complete breakfast.',
        bestFor: ['breakfast porridge', 'baking', 'energy bars', 'muesli'],
        difficulty: 'easy',
      },
    ],
  },

  // =============================================
  // 6. CORNMEAL
  // =============================================
  {
    conventionalGrain: 'Cornmeal',
    milletSubstitutes: [
      {
        millet: 'sorghum',
        milletName: 'Sorghum Flour (Jowar)',
        ratio: '1:1',
        notes:
          'Sorghum flour is the closest millet substitute for cornmeal in terms of texture and flavor profile. It has a slightly sweet, mild taste and produces a similar golden color in baked goods. For cornbread recipes, substitute 1:1 and add an extra tablespoon of oil or butter to compensate for the slightly drier texture. Sorghum polenta-style porridge is a traditional preparation in parts of Africa and India.',
        bestFor: ['cornbread', 'polenta', 'porridge', 'coating for frying'],
        difficulty: 'easy',
      },
      {
        millet: 'pearl-millet',
        milletName: 'Pearl Millet Flour (Bajra)',
        ratio: '1:1',
        notes:
          'Pearl millet flour offers a robust, earthy alternative to cornmeal with a heartier flavor profile. It works particularly well in savory cornbread-style preparations and porridges. The flour produces a denser crumb compared to cornmeal, so add slightly more liquid (about 2 tablespoons extra per cup of flour) to achieve the right consistency. Pearl millet porridge is a staple across West Africa and Rajasthan.',
        bestFor: ['flatbreads', 'porridge', 'savory baking', 'thick stews'],
        difficulty: 'easy',
      },
    ],
  },

  // =============================================
  // 7. BREAKFAST CEREAL
  // =============================================
  {
    conventionalGrain: 'Breakfast Cereal',
    milletSubstitutes: [
      {
        millet: 'finger-millet',
        milletName: 'Ragi Flakes / Ragi Malt',
        ratio: '1:1',
        notes:
          'Ragi flakes can be eaten just like cornflakes — pour into a bowl and add cold or warm milk. They have a toasty, malt-like flavor and are exceptionally rich in calcium (344 mg per 100g). Ragi malt powder mixed with warm milk makes a traditional South Indian breakfast drink that is more nutritious than most commercial cereals. Look for brands that use minimal sugar and no artificial additives.',
        bestFor: ['cold cereal with milk', 'ragi malt drink', 'smoothie base', 'energy bites'],
        difficulty: 'easy',
      },
      {
        millet: 'foxtail-millet',
        milletName: 'Puffed Millets / Millet Pops',
        ratio: '1:1',
        notes:
          'Puffed millets (available in foxtail, ragi, and jowar varieties) are a crunchy, ready-to-eat breakfast option that directly replaces puffed rice or commercial cereal. They are light, crispy, and can be enjoyed with milk, yogurt, or as a base for trail mix. Many brands now offer flavored puffed millets in options like chocolate, masala, and honey. Choose unsweetened varieties for maximum health benefit.',
        bestFor: ['cereal with milk', 'trail mix', 'chivda', 'snacking'],
        difficulty: 'easy',
      },
      {
        millet: 'barnyard-millet',
        milletName: 'Millet Muesli / Millet Granola',
        ratio: '1:1',
        notes:
          'Multi-millet muesli blends typically combine flaked barnyard millet, foxtail millet, and ragi with dried fruits, seeds, and nuts for a complete breakfast cereal. These are available pre-made from health food brands or can be prepared at home by toasting millet flakes with honey, coconut oil, and your choice of add-ins. Homemade millet granola stores well for up to 3 weeks in an airtight container.',
        bestFor: ['muesli bowls', 'yogurt parfaits', 'granola bars', 'baking'],
        difficulty: 'easy',
      },
    ],
  },
];
