import type { MealPlan } from '@/lib/types';

const DISCLAIMER =
  'Dieser Ernährungsplan dient ausschließlich zu Informationszwecken. Er ersetzt keine ärztliche Beratung. Konsultieren Sie einen Ernährungsberater oder Arzt, bevor Sie Ihre Ernährung grundlegend umstellen, insbesondere bei bestehenden Erkrankungen.';

export const mealPlans: MealPlan[] = [
  // =============================================
  // 1. ENTDECKUNGSWOCHE
  // =============================================
  {
    slug: 'entdeckungswoche',
    title: 'Hirse-Entdeckungswoche',
    description:
      'Eine sanfte Einführung in die Welt der Hirse für Einsteiger. Dieser Plan kombiniert vertraute deutsche Gerichte — Aufläufe, Suppen, Bratlinge — mit neuen Hirserezepten. Jeden Tag werden ein bis zwei Mahlzeiten durch Hirsegerichte ersetzt, während die übrigen Mahlzeiten unverändert bleiben. Am Ende der Woche haben Sie fünf verschiedene Hirsesorten kennengelernt, ohne Ihre Essgewohnheiten grundlegend umstellen zu müssen.',
    goal: 'Sanfter Einstieg in die Hirse-Küche mit vertrauten deutschen Gerichten',
    duration: '7 Tage',
    days: [
      {
        day: 'Montag',
        breakfast: 'Ihr gewohntes Frühstück',
        lunch: 'Hirsesalat mit Gurke, Tomate, Feta und frischen Kräutern',
        snack: 'Hirsewaffel mit Honig',
        dinner: 'Ihr gewohntes Abendessen',
      },
      {
        day: 'Dienstag',
        breakfast: 'Hirsebrei mit warmer Milch, Zimt und Apfelmus',
        lunch: 'Ihr gewohntes Mittagessen',
        snack: 'Handvoll Nüsse mit gepuffter Hirse',
        dinner: 'Ihr gewohntes Abendessen',
      },
      {
        day: 'Mittwoch',
        breakfast: 'Ihr gewohntes Frühstück',
        lunch: 'Hirserisotto mit Pilzen und Parmesan',
        snack: 'Hirsekekse mit Haferflocken und Rosinen',
        dinner: 'Ihr gewohntes Abendessen',
      },
      {
        day: 'Donnerstag',
        breakfast: 'Hirsepfannkuchen mit Apfelkompott',
        lunch: 'Ihr gewohntes Mittagessen',
        snack: 'Joghurt mit Hirseflocken und Beeren',
        dinner: 'Ihr gewohntes Abendessen',
      },
      {
        day: 'Freitag',
        breakfast: 'Ihr gewohntes Frühstück',
        lunch: 'Hirse-Gemüsesuppe mit Karotten, Lauch und Thymian',
        snack: 'Hirsebratlinge mit Kräuterquark',
        dinner: 'Ihr gewohntes Abendessen',
      },
      {
        day: 'Samstag',
        breakfast: 'Warmer Hirsebrei mit Vanille, Honig und Walnüssen',
        lunch: 'Hirseauflauf mit Brokkoli und Käse überbacken',
        snack: 'Hirseriegel mit Trockenfrüchten',
        dinner: 'Hirse-Kürbis-Eintopf mit frischem Brot',
      },
      {
        day: 'Sonntag',
        breakfast: 'Hirse-Müsli-Bowl mit Saisonobst und Joghurt',
        lunch: 'Hirseknödel (Tiroler Art) mit Pilzsauce',
        snack: 'Ihr gewohnter Snack',
        dinner: 'Hirsesalat mit geröstetem Gemüse und Balsamico-Dressing',
      },
    ],
    tips: [
      'Beginnen Sie mit Rispenhirse (Echte Hirse) — sie hat den mildesten Geschmack und ist in jedem Bio-Laden erhältlich.',
      'Spülen Sie Hirse vor dem Kochen gründlich unter fließendem Wasser, bis das Wasser klar ist.',
      'Kochen Sie am Wochenende eine größere Menge Hirse vor und verwenden Sie diese unter der Woche für verschiedene Gerichte.',
      'Hirse schmeckt sowohl süß (mit Milch und Obst) als auch herzhaft (mit Gemüse und Kräutern) — experimentieren Sie!',
    ],
    disclaimer: DISCLAIMER,
  },

  // =============================================
  // 2. GLUTENFREI
  // =============================================
  {
    slug: 'glutenfrei',
    title: 'Glutenfreier Hirse-Plan',
    description:
      'Ein vollständig glutenfreier 7-Tage-Plan, der verschiedene Hirsesorten nutzt, um eine ausgewogene, nährstoffreiche Ernährung sicherzustellen. Besonders geeignet für Menschen mit Zöliakie, Glutenunverträglichkeit oder alle, die glutenfreie Alternativen suchen. Alle Rezepte sind 100 % glutenfrei und basieren auf natürlich glutenfreien Zutaten.',
    goal: 'Glutenfreie Vollwerternährung mit verschiedenen Hirsesorten',
    duration: '7 Tage',
    days: [
      {
        day: 'Montag',
        breakfast: 'Fingerhirse-Porridge mit Mandelmilch, Banane und Zimt',
        lunch: 'Kolbenhirse-Salat mit gegrilltem Gemüse und Zitronendressing',
        snack: 'Gepuffte Hirse mit dunkler Schokolade',
        dinner: 'Sorghum-Gemüseeintopf mit Kartoffeln und Wurzelgemüse',
      },
      {
        day: 'Dienstag',
        breakfast: 'Hirse-Frühstücksbowl mit Joghurt, Honig und Nüssen',
        lunch: 'Hirsebratlinge auf Blattsalat mit Avocado',
        snack: 'Reiswaffel mit Hummus',
        dinner: 'Hirse-Kürbis-Risotto mit Salbei und Parmesan',
      },
      {
        day: 'Mittwoch',
        breakfast: 'Hirsepfannkuchen (aus Hirsemehl) mit Beeren',
        lunch: 'Hirse-Linsensuppe mit Kurkuma und Ingwer',
        snack: 'Obst mit einer Handvoll Kürbiskerne',
        dinner: 'Gebratene Kolbenhirse mit Pak Choi und Sesamdressing',
      },
      {
        day: 'Donnerstag',
        breakfast: 'Hirseflocken-Müsli mit Pflanzenmilch und Trockenobst',
        lunch: 'Hirseauflauf mit Zucchini, Tomaten und Mozzarella',
        snack: 'Hirsekugeln mit Datteln und Kokos',
        dinner: 'Gefüllte Paprika mit Hirse, Feta und Kräutern',
      },
      {
        day: 'Freitag',
        breakfast: 'Warmer Hirsebrei mit Birne und Kardamom',
        lunch: 'Hirse-Taboulé mit Petersilie, Minze und Granatapfel',
        snack: 'Gemüsesticks mit Hirse-Aufstrich',
        dinner: 'Hirse-Gemüse-Pfanne mit Tofu und Sojasauce',
      },
      {
        day: 'Samstag',
        breakfast: 'Sorghum-Porridge mit Ahornsirup und Pekannüssen',
        lunch: 'Hirse-Bowl mit Süßkartoffel, Kichererbsen und Tahini',
        snack: 'Hirsefladen mit Olivenöl und Rosmarin',
        dinner: 'Hirse-Pilzrisotto mit frischem Thymian',
      },
      {
        day: 'Sonntag',
        breakfast: 'Hirse-Bananen-Pancakes mit Ahornsirup',
        lunch: 'Hirseknödel mit Pilzrahmsauce',
        snack: 'Obstsalat mit gepuffter Hirse',
        dinner: 'Hirse-Gemüsegratin mit Käsekruste',
      },
    ],
    tips: [
      'Alle Hirsesorten sind von Natur aus glutenfrei. Achten Sie beim Kauf auf das glutenfrei-Siegel, um Kreuzkontamination auszuschließen.',
      'Fingerhirse (Ragi) ist besonders kalziumreich — ideal als Ersatz für Milchprodukte in der glutenfreien Ernährung.',
      'Hirsemehl eignet sich hervorragend zum glutenfreien Backen, wenn es mit Stärke (Kartoffel- oder Tapiokastärke) kombiniert wird.',
      'Lagern Sie glutenfreie Hirseprodukte getrennt von glutenhaltigen Lebensmitteln, um Kontamination zu vermeiden.',
    ],
    disclaimer: DISCLAIMER,
  },

  // =============================================
  // 3. FITNESS
  // =============================================
  {
    slug: 'fitness',
    title: 'Hirse-Fitness-Plan',
    description:
      'Ein proteinreicher 7-Tage-Ernährungsplan für Sportler und aktive Menschen, der Hirse als nachhaltigen Energielieferant nutzt. Die Mahlzeiten sind auf optimale Makronährstoffverteilung ausgelegt — mit einem Fokus auf komplexe Kohlenhydrate, pflanzliches Protein und essenzielle Mineralien wie Magnesium und Eisen, die für die sportliche Leistung wichtig sind.',
    goal: 'Sportler-Ernährung mit Hirse als nachhaltigem Energielieferant',
    duration: '7 Tage',
    days: [
      {
        day: 'Montag',
        breakfast: 'Hirse-Protein-Bowl: Hirsebrei mit Proteinpulver, Banane und Erdnussbutter',
        lunch: 'Hirse-Hähnchen-Salat mit Quinoa, Avocado und Limettendressing',
        snack: 'Energiebällchen aus Hirse, Datteln und Nüssen',
        dinner: 'Gebratener Lachs auf Hirse-Bett mit gedünstetem Brokkoli',
      },
      {
        day: 'Dienstag',
        breakfast: 'Fingerhirse-Smoothie-Bowl mit Beeren, Chiasamen und Granola',
        lunch: 'Hirsebratlinge mit Hüttenkäse und gemischtem Salat',
        snack: 'Proteinriegel mit Hirse und Mandeln (selbstgemacht)',
        dinner: 'Hirse-Gemüse-Curry mit Kichererbsen und Kokosmilch',
      },
      {
        day: 'Mittwoch',
        breakfast: 'Hirse-Omelett mit Spinat, Tomaten und Feta',
        lunch: 'Hirse-Power-Bowl mit Edamame, Karotten und Sesam-Ingwer-Dressing',
        snack: 'Griechischer Joghurt mit gepuffter Hirse und Honig',
        dinner: 'Gegrillte Hähnchenbrust mit Hirse-Pilaw und geröstetem Gemüse',
      },
      {
        day: 'Donnerstag',
        breakfast: 'Hirse-Pancakes mit Quark, Beeren und Ahornsirup',
        lunch: 'Thunfisch-Hirse-Salat mit weißen Bohnen und Olivenöl',
        snack: 'Hirse-Aufstrich auf Vollkornreiswaffeln',
        dinner: 'Hirse-Bolognese mit Linsen und frischen Kräutern',
      },
      {
        day: 'Freitag',
        breakfast: 'Proteinreicher Hirsebrei mit Leinsamen, Walnüssen und Honig',
        lunch: 'Hirse-Wraps (aus Hirsemehl-Fladen) mit Truthahn und Gemüse',
        snack: 'Banane mit Mandelbutter und Hirseflocken',
        dinner: 'Garnelen mit Hirse, Zucchini und Knoblauch-Zitronen-Sauce',
      },
      {
        day: 'Samstag',
        breakfast: 'Hirse-Granola mit Kokosjoghurt und Tropenfrucht',
        lunch: 'Hirse-Falafel-Bowl mit Hummus, Tomaten und Gurke',
        snack: 'Proteinshake mit Hirseflocken und Beeren',
        dinner: 'Rindersteak mit Hirse-Pilz-Beilage und grünen Bohnen',
      },
      {
        day: 'Sonntag',
        breakfast: 'Herzhaftes Hirsefrühstück mit Rührei, Avocado und Tomaten',
        lunch: 'Hirse-Süßkartoffel-Bowl mit schwarzen Bohnen und Limette',
        snack: 'Hirse-Energieriegel mit Schokolade und Haselnüssen',
        dinner: 'Ofenlachs mit Hirse-Kräuter-Kruste und Ofengemüse',
      },
    ],
    tips: [
      'Perlhirse enthält 242 mg Magnesium pro 100 g — ideal für die Muskelregeneration nach dem Training.',
      'Bereiten Sie Hirse am Vorabend zu und kühlen Sie sie — „resistente Stärke" hat einen niedrigeren glykämischen Index.',
      'Kombinieren Sie Hirse mit Hülsenfrüchten (Linsen, Bohnen) für ein vollständiges Aminosäureprofil.',
      'Nach dem Training eignet sich Hirsebrei mit Proteinpulver als schnell verfügbare Kohlenhydrat-Protein-Kombination.',
    ],
    disclaimer: DISCLAIMER,
  },
];

export function getMealPlanBySlug(slug: string): MealPlan | undefined {
  return mealPlans.find((p) => p.slug === slug);
}
