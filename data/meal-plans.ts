import type { MealPlan } from '@/lib/types';

const DISCLAIMER =
  'This meal plan is for general guidance only. It is not a substitute for professional dietary advice. Consult a registered dietitian or healthcare provider before making significant dietary changes, especially if you have any medical conditions.';

export const mealPlans: MealPlan[] = [
  // =============================================
  // 1. BEGINNER-FRIENDLY
  // =============================================
  {
    slug: 'beginner-friendly',
    title: "Beginner's Millet Week",
    description:
      'A gentle, no-pressure introduction to millets for first-timers. This plan eases you in by replacing just one meal at a time with millet-based dishes, using familiar preparations and flavors. By the end of the week, you will have tried five different millets without any drastic change to your routine.',
    goal: 'Introduce millets gradually into your daily diet without overwhelm',
    duration: '7 days',
    days: [
      {
        day: 'Monday',
        breakfast: 'Your regular breakfast',
        lunch: 'Foxtail millet pulao with mixed vegetables and raita',
        snack: 'Roasted puffed millet chivda with peanuts',
        dinner: 'Your regular dinner',
      },
      {
        day: 'Tuesday',
        breakfast: 'Ragi porridge with warm milk, banana slices, and honey',
        lunch: 'Your regular lunch',
        snack: 'Millet cookies with a cup of chai',
        dinner: 'Your regular dinner',
      },
      {
        day: 'Wednesday',
        breakfast: 'Your regular breakfast',
        lunch: 'Little millet lemon rice with roasted cashews and curry leaves',
        snack: 'Jowar puffed grain with jaggery and peanuts',
        dinner: 'Your regular dinner',
      },
      {
        day: 'Thursday',
        breakfast: 'Jowar dosa with coconut chutney and sambar',
        lunch: 'Your regular lunch',
        snack: 'Ragi ladoo (2 pieces) with milk',
        dinner: 'Your regular dinner',
      },
      {
        day: 'Friday',
        breakfast: 'Your regular breakfast',
        lunch: 'Barnyard millet khichdi with ghee, moong dal, and vegetables',
        snack: 'Foxtail millet upma bites',
        dinner: 'Your regular dinner',
      },
      {
        day: 'Saturday',
        breakfast: 'Foxtail millet upma with vegetables and lemon',
        lunch: 'Kodo millet vegetable biryani with cucumber raita',
        snack: 'Millet muesli with yogurt and seasonal fruits',
        dinner: 'Your regular dinner',
      },
      {
        day: 'Sunday',
        breakfast: 'Ragi pancakes with maple syrup or jaggery syrup',
        lunch: 'Little millet curd rice with pickle and papad',
        snack: 'Mixed millet trail mix with dried fruits',
        dinner: 'Bajra roti with dal and seasonal sabzi',
      },
    ],
    tips: [
      'Start by replacing just one meal per day with a millet-based dish during the first week.',
      'Soak millets for 15-30 minutes before cooking to improve digestibility and reduce cooking time.',
      'Mix millets with your regular rice or wheat initially (50:50 ratio) if switching fully feels too different.',
      'Keep your favorite chutneys, pickles, and accompaniments the same — it helps the transition feel natural.',
      'Drink plenty of water as millets are high in fiber and your body needs time to adjust.',
      'Do not worry if the taste feels different initially — most people develop a preference for millets within 2-3 weeks.',
    ],
    disclaimer: DISCLAIMER,
  },

  // =============================================
  // 2. WEIGHT MANAGEMENT
  // =============================================
  {
    slug: 'weight-management',
    title: 'Weight Management Plan',
    description:
      'A fiber-rich, low glycemic index meal plan built around millets that promote satiety and steady blood sugar levels. This plan focuses on barnyard millet, foxtail millet, and kodo millet — the lightest millets in terms of calorie density — combined with plenty of vegetables, lean proteins, and healthy fats.',
    goal: 'Support healthy weight management with high-fiber, low-GI millet meals (~1500-1800 cal/day)',
    duration: '7 days',
    days: [
      {
        day: 'Monday',
        breakfast: 'Barnyard millet porridge with chia seeds, cinnamon, and apple slices',
        lunch: 'Foxtail millet vegetable salad bowl with lemon-tahini dressing',
        snack: 'Cucumber and carrot sticks with hummus',
        dinner: 'Kodo millet khichdi with spinach, moong dal, and a side of steamed broccoli',
      },
      {
        day: 'Tuesday',
        breakfast: 'Foxtail millet upma with mixed vegetables, curry leaves, and lemon juice',
        lunch: 'Little millet and sprouted moong salad with tomato, onion, and mint dressing',
        snack: 'Roasted millet puffs with a handful of almonds (10-12 pieces)',
        dinner: 'Barnyard millet soup with mixed vegetables, garlic, and a dash of pepper',
      },
      {
        day: 'Wednesday',
        breakfast: 'Ragi malt smoothie with banana, flaxseeds, and unsweetened almond milk',
        lunch: 'Kodo millet lemon rice with peanuts and green beans',
        snack: 'Buttermilk with roasted cumin and a small millet cracker',
        dinner: 'Foxtail millet and vegetable stir-fry with tofu and soy-ginger sauce',
      },
      {
        day: 'Thursday',
        breakfast: 'Barnyard millet dosa with tomato-onion chutney (oil-free)',
        lunch: 'Little millet pulao with mixed vegetables, mint, and a side of raita',
        snack: 'Green tea with 2 ragi biscuits (low sugar)',
        dinner: 'Jowar roti (2 small) with palak dal and cucumber salad',
      },
      {
        day: 'Friday',
        breakfast: 'Foxtail millet pongal with black pepper, cumin, and minimal ghee',
        lunch: 'Barnyard millet and chickpea bowl with roasted vegetables and lemon dressing',
        snack: 'Sprout salad with a sprinkle of millet flakes',
        dinner: 'Kodo millet and vegetable clear soup with ginger and garlic',
      },
      {
        day: 'Saturday',
        breakfast: 'Little millet poha with onion, peanuts, turmeric, and lemon',
        lunch: 'Foxtail millet tamarind rice with sesame seeds and curry leaves',
        snack: 'Mixed fruit bowl with a tablespoon of millet granola',
        dinner: 'Barnyard millet and dal khichdi with a side of sauteed lauki (bottle gourd)',
      },
      {
        day: 'Sunday',
        breakfast: 'Kodo millet idli (3 pieces) with sambar and coconut chutney',
        lunch: 'Mixed millet vegetable biryani with cucumber-onion raita',
        snack: 'Ragi and oat energy ball (1 piece) with green tea',
        dinner: 'Foxtail millet and mixed vegetable stew with a small jowar roti',
      },
    ],
    tips: [
      'Barnyard millet has the lowest calorie count among millets (75 kcal per 100g cooked) — use it as your primary grain.',
      'Eat slowly and chew thoroughly — the high fiber in millets promotes satiety when eaten mindfully.',
      'Avoid adding excessive ghee or oil to millet dishes; use measured quantities (1-2 teaspoons per meal).',
      'Pair millets with plenty of non-starchy vegetables to increase volume without adding many calories.',
      'Drink at least 8-10 glasses of water daily as the increased fiber intake requires adequate hydration.',
      'Avoid millet-based sweets and fried millet snacks — the health benefits are negated by excess sugar and oil.',
    ],
    disclaimer: DISCLAIMER,
  },

  // =============================================
  // 3. HIGH PROTEIN
  // =============================================
  {
    slug: 'high-protein',
    title: 'High Protein Millet Plan',
    description:
      'Designed for athletes, fitness enthusiasts, and anyone looking to increase their protein intake through plant-based sources. This plan combines protein-rich millets like proso millet, finger millet, and pearl millet with complementary legumes, nuts, and seeds to create complete amino acid profiles in every meal.',
    goal: 'Maximize protein intake with millet-legume combinations for muscle building and recovery',
    duration: '7 days',
    days: [
      {
        day: 'Monday',
        breakfast: 'Ragi and moong dal cheela with mint chutney and a boiled egg or paneer cubes',
        lunch: 'Pearl millet (bajra) khichdi with toor dal, ghee, and a side of curd',
        snack: 'Ragi protein shake with peanut butter, banana, and milk',
        dinner: 'Proso millet pulao with rajma (kidney beans) and mixed vegetable raita',
      },
      {
        day: 'Tuesday',
        breakfast: 'Bajra paratha stuffed with paneer and spinach, served with curd',
        lunch: 'Foxtail millet and chana dal risotto with roasted vegetables and cheese',
        snack: 'Roasted millet trail mix with almonds, walnuts, and pumpkin seeds',
        dinner: 'Ragi mudde (ragi balls) with chicken or mushroom saaru (rasam) and green salad',
      },
      {
        day: 'Wednesday',
        breakfast: 'Proso millet porridge with whey protein powder, berries, and chia seeds',
        lunch: 'Jowar roti with chole (chickpea curry), onion salad, and lemon',
        snack: 'Paneer and millet tikka bites (3-4 pieces)',
        dinner: 'Pearl millet and black-eyed pea khichdi with ghee and pickle',
      },
      {
        day: 'Thursday',
        breakfast: 'Ragi and oat pancakes with Greek yogurt and mixed nuts',
        lunch: 'Little millet biryani with soya chunks and mint raita',
        snack: 'Boiled egg whites (3) with millet crackers and hummus',
        dinner: 'Bajra roti with dal makhani and a side of grilled paneer or chicken tikka',
      },
      {
        day: 'Friday',
        breakfast: 'Foxtail millet and sprouted moong dosa with coconut chutney',
        lunch: 'Proso millet and rajma bowl with avocado, cherry tomatoes, and lime dressing',
        snack: 'Ragi ladoo with peanuts and jaggery (2 pieces)',
        dinner: 'Kodo millet and chana pulao with roasted papad and cucumber raita',
      },
      {
        day: 'Saturday',
        breakfast: 'Bajra and besan (gram flour) chilla with tomato-onion filling and green chutney',
        lunch: 'Finger millet pasta with chickpea Bolognese sauce and grated cheese',
        snack: 'Millet protein bar (homemade with ragi, oats, peanut butter, and honey)',
        dinner: 'Pearl millet and masoor dal khichdi with ghee, papad, and mixed vegetable curry',
      },
      {
        day: 'Sunday',
        breakfast: 'Ragi and banana smoothie bowl topped with granola, seeds, and coconut flakes',
        lunch: 'Jowar bhakri with mutton or jackfruit curry and onion-tomato salad',
        snack: 'Roasted chana and puffed millet mix with spices',
        dinner: 'Proso millet and mixed dal tadka with jeera rice (50:50 millet-rice blend)',
      },
    ],
    tips: [
      'Combine millets with legumes in a 3:1 ratio (3 parts millet, 1 part legume) for a complete amino acid profile.',
      'Finger millet (ragi) has the highest protein among millets at about 7.3g per 100g — use it as your breakfast base.',
      'Proso millet is rich in leucine, an essential amino acid for muscle protein synthesis.',
      'Add a handful of nuts or seeds to every millet meal to boost protein content by 5-8 grams.',
      'Post-workout, have a ragi malt drink with milk within 30 minutes for optimal protein absorption.',
      'Sprout your legumes before adding them to millet dishes — sprouting increases protein bioavailability by up to 30%.',
    ],
    disclaimer: DISCLAIMER,
  },

  // =============================================
  // 4. DIABETIC-FRIENDLY
  // =============================================
  {
    slug: 'diabetic-friendly',
    title: 'Diabetic-Friendly Plan',
    description:
      'A carefully designed low glycemic index meal plan featuring millets with the lowest GI values: foxtail millet (GI ~50), barnyard millet (GI ~50), little millet (GI ~52), and kodo millet (GI ~55). This plan eliminates all refined grains and sugars, emphasizing whole millets, non-starchy vegetables, healthy fats, and lean proteins to help maintain steady blood glucose levels throughout the day.',
    goal: 'Maintain stable blood sugar levels using low-GI millets with no refined grains or added sugars',
    duration: '7 days',
    days: [
      {
        day: 'Monday',
        breakfast: 'Foxtail millet upma with vegetables, curry leaves, and a side of sugar-free buttermilk',
        lunch: 'Little millet and moong dal khichdi with ghee, spinach, and a cucumber-tomato salad',
        snack: 'Handful of roasted almonds (10-12) with a small bowl of sprouts',
        dinner: 'Barnyard millet vegetable soup with garlic, ginger, and a side of steamed greens',
      },
      {
        day: 'Tuesday',
        breakfast: 'Kodo millet dosa with flaxseed chutney and sambar (no potato)',
        lunch: 'Foxtail millet pulao with mixed beans, fenugreek leaves, and raita',
        snack: 'Roasted fox nuts (makhana) with a pinch of turmeric and black pepper',
        dinner: 'Little millet and palak dal with a small jowar roti and bitter gourd sabzi',
      },
      {
        day: 'Wednesday',
        breakfast: 'Barnyard millet porridge with cinnamon, walnuts, and unsweetened coconut milk',
        lunch: 'Kodo millet lemon rice with peanuts, green beans, and a side of drumstick sambar',
        snack: 'Vegetable sticks (carrot, cucumber, bell pepper) with millet crackers',
        dinner: 'Foxtail millet and chana dal khichdi with a side of lauki (bottle gourd) sabzi',
      },
      {
        day: 'Thursday',
        breakfast: 'Little millet poha with onion, peanuts, turmeric, curry leaves, and lemon',
        lunch: 'Barnyard millet and sprouted moong salad with mint-coriander dressing',
        snack: 'A small apple with a tablespoon of unsweetened peanut butter',
        dinner: 'Kodo millet and mixed vegetable stew with fenugreek and garlic',
      },
      {
        day: 'Friday',
        breakfast: 'Foxtail millet idli (3 pieces) with drumstick-tomato sambar and chutney',
        lunch: 'Little millet and toor dal khichdi with ghee, papad, and ridge gourd sabzi',
        snack: 'Roasted chana (chickpeas) with a glass of chaas (buttermilk)',
        dinner: 'Barnyard millet and vegetable clear soup with pepper, garlic, and a side of salad',
      },
      {
        day: 'Saturday',
        breakfast: 'Kodo millet and oat cheela with tomato-onion filling and green chutney',
        lunch: 'Foxtail millet biryani with vegetables, mint, and cucumber-onion raita',
        snack: 'Mixed seeds (sunflower, pumpkin, flax) with unsweetened green tea',
        dinner: 'Little millet and masoor dal tadka with steamed broccoli and carrots',
      },
      {
        day: 'Sunday',
        breakfast: 'Barnyard millet pongal with black pepper, cumin, cashews, and curry leaves',
        lunch: 'Mixed millet (foxtail + little millet) vegetable pulao with raita and salad',
        snack: 'Sprout chaat with lemon, chaat masala, and a handful of puffed millets',
        dinner: 'Kodo millet and moong dal soup with ginger, garlic, and a side of sauteed methi (fenugreek) leaves',
      },
    ],
    tips: [
      'Foxtail millet (GI ~50) and barnyard millet (GI ~50) should be your primary grains — they have the lowest glycemic impact.',
      'Always pair millets with a protein source (dal, curd, paneer) and healthy fat (ghee, nuts) to further slow glucose absorption.',
      'Avoid reheating millet dishes repeatedly — eat them freshly cooked for optimal glycemic response.',
      'Include fenugreek (methi) and cinnamon regularly as they have evidence-backed blood sugar-lowering properties.',
      'Eat your meals at consistent times each day and avoid skipping meals to prevent blood sugar fluctuations.',
      'Monitor your blood glucose levels regularly, especially in the first week, to see how your body responds to each millet variety.',
    ],
    disclaimer: DISCLAIMER,
  },
];

export function getMealPlanBySlug(slug: string): MealPlan | undefined {
  return mealPlans.find((p) => p.slug === slug);
}
