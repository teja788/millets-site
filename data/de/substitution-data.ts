import type { SubstitutionEntry } from '@/lib/types';

export const substitutionEntries: SubstitutionEntry[] = [
  // =============================================
  // 1. WEISSER REIS
  // =============================================
  {
    conventionalGrain: 'Weißer Reis',
    milletSubstitutes: [
      {
        millet: 'foxtail-millet',
        milletName: 'Kolbenhirse',
        ratio: '1:1',
        notes:
          'Die Kolbenhirse ist der nächste Reisersatz — ähnliche Korngröße, vergleichbare Kochzeit und ein dezent nussiger Geschmack. Verwenden Sie das gleiche Wasser-Verhältnis wie bei Reis (1:2) und kochen Sie bei niedriger Hitze, bis das Wasser vollständig aufgenommen ist. Vor dem Kochen gründlich spülen, um überschüssige Stärke zu entfernen und lockere, getrennte Körner zu erhalten.',
        bestFor: ['Risotto', 'Pilaw', 'Salat', 'Beilage'],
        difficulty: 'easy',
      },
      {
        millet: 'little-millet',
        milletName: 'Kleine Hirse',
        ratio: '1:1',
        notes:
          'Kleine Hirse kocht schnell und ergibt eine leichte, luftige Textur, die weißem Rundkornreis sehr ähnelt. Sie nimmt Aromen hervorragend auf und eignet sich als direkter Reisersatz. 15–20 Minuten Einweichzeit vor dem Kochen sorgt für eine weichere Konsistenz. Ideal in Kombination mit Saucen, geschmortem Gemüse und aromatischen Brühen.',
        bestFor: ['Risotto', 'Pilaw', 'Suppe', 'Auflauf'],
        difficulty: 'easy',
      },
      {
        millet: 'barnyard-millet',
        milletName: 'Japanische Hirse',
        ratio: '1:1',
        notes:
          'Japanische Hirse hat einen sehr niedrigen glykämischen Index und weniger Kalorien als Reis — ideal für die Gewichtskontrolle. Sie kocht in etwa 15 Minuten und hat eine etwas festere, körnigere Textur als Reis. Der neutrale Geschmack nimmt Gewürze und Kräuter gut auf. Verhältnis 1:2 (Hirse:Wasser), bei niedriger Hitze zugedeckt garen.',
        bestFor: ['Pilaw', 'Eintopf', 'Brei', 'Auflauf'],
        difficulty: 'easy',
      },
      {
        millet: 'kodo-millet',
        milletName: 'Kodohirse',
        ratio: '1:1',
        notes:
          'Kodohirse hat einen milden, leicht erdigen Geschmack und behält nach dem Kochen perfekt ihre Form. Verwenden Sie etwas weniger Wasser als bei Reis (Verhältnis 1:1,75), um eine matschige Konsistenz zu vermeiden. Die Körner werden beim Garen schön locker und luftig. Besonders ballaststoffreich — ein guter Begleiter zu Eintöpfen und Saucen.',
        bestFor: ['Pilaw', 'Risotto', 'Salat', 'Gratin'],
        difficulty: 'easy',
      },
    ],
  },

  // =============================================
  // 2. WEIZENMEHL (TYPE 405/550)
  // =============================================
  {
    conventionalGrain: 'Weizenmehl (Type 405/550)',
    milletSubstitutes: [
      {
        millet: 'finger-millet',
        milletName: 'Fingerhirse (Mehl)',
        ratio: '3:4',
        notes:
          'Ersetzen Sie 3 Teile Weizenmehl durch 4 Teile Fingerhirsemehl, da es dichter ist und mehr Feuchtigkeit aufnimmt. Das Mehl hat eine charakteristische malzige Note und eine dunkelbraune Farbe. Da es kein Gluten enthält, kombinieren Sie es mit Guarkernmehl oder Flohsamenschalen als Bindemittel für Kuchen und Gebäck. Besonders geeignet für Rezepte, die von einer dichten, saftigen Krume profitieren.',
        bestFor: ['Pfannkuchen', 'Porridge', 'Kuchen', 'Babynahrung'],
        difficulty: 'moderate',
      },
      {
        millet: 'pearl-millet',
        milletName: 'Perlhirse (Mehl)',
        ratio: '1:1',
        notes:
          'Perlhirsemehl hat einen kräftigen, erdigen Geschmack und eignet sich gut für Fladenbrot und herzhafte Teige. Für leichtere Backwaren mischen Sie es 1:1 mit anderem glutenfreiem Mehl (z.B. Reismehl). Der hohe Eisengehalt macht es besonders wertvoll für die Ernährung. Das Mehl sollte kühl gelagert werden, da es durch den natürlichen Fettgehalt schneller ranzig wird.',
        bestFor: ['Fladenbrot', 'Brot', 'Pfannkuchen', 'Kekse'],
        difficulty: 'moderate',
      },
      {
        millet: 'sorghum',
        milletName: 'Sorghummehl',
        ratio: '1:1',
        notes:
          'Sorghummehl ist das mildeste aller Hirsemehle und eignet sich hervorragend zum glutenfreien Backen. Es hat eine helle Farbe und einen neutralen, leicht süßlichen Geschmack. Kann in vielen Rezepten 1:1 als Weizenmehlersatz verwendet werden, wobei ein Bindemittel (Xanthan, Guarkernmehl) für die Struktur sorgt. Ideal für Brot, Muffins und Kekse.',
        bestFor: ['Brot', 'Kuchen', 'Muffins', 'Kekse'],
        difficulty: 'easy',
      },
    ],
  },

  // =============================================
  // 3. WEIZENGRIESZ
  // =============================================
  {
    conventionalGrain: 'Weizengrieß',
    milletSubstitutes: [
      {
        millet: 'sorghum',
        milletName: 'Sorghumgrieß',
        ratio: '1:1',
        notes:
          'Sorghumgrieß ist ein hervorragender Ersatz für Weizengrieß in Brei, Aufläufen und Knödeln. Er hat eine ähnliche Körnung und quillt vergleichbar auf. Verwenden Sie das gleiche Flüssigkeitsverhältnis wie bei Weizengrieß. Der Geschmack ist mild und leicht nussig. In Österreich und Süddeutschland wird Sorghumgrieß zunehmend in traditionellen Grießrezepten verwendet.',
        bestFor: ['Grießbrei', 'Auflauf', 'Knödel', 'Gratin'],
        difficulty: 'easy',
      },
      {
        millet: 'pearl-millet',
        milletName: 'Perlhirsegrieß',
        ratio: '1:1',
        notes:
          'Perlhirsegrieß hat eine etwas gröbere Textur als Weizengrieß und einen ausgeprägteren, erdigen Geschmack. Er eignet sich besonders gut für herzhafte Gerichte wie Aufläufe und Bratlinge. Für süßen Grießbrei empfiehlt es sich, etwas mehr Zucker oder Honig zu verwenden, um den kräftigeren Eigengeschmack auszugleichen. Kochzeit: 15–20 Minuten unter ständigem Rühren.',
        bestFor: ['Auflauf', 'Bratlinge', 'Grießbrei', 'Beilage'],
        difficulty: 'moderate',
      },
    ],
  },

  // =============================================
  // 4. HAFERFLOCKEN
  // =============================================
  {
    conventionalGrain: 'Haferflocken',
    milletSubstitutes: [
      {
        millet: 'proso-millet',
        milletName: 'Hirseflocken (Rispenhirse)',
        ratio: '1:1',
        notes:
          'Hirseflocken sind der natürlichste Ersatz für Haferflocken und in jedem Reformhaus und Bio-Laden erhältlich. Sie quellen etwas schneller als Haferflocken und ergeben einen cremigeren Brei. Der Geschmack ist mild und leicht nussig. Verwenden Sie sie 1:1 in Müsli, Porridge und Backrezepten. Bonus: Hirseflocken sind von Natur aus glutenfrei — ideal für Zöliakie-Betroffene.',
        bestFor: ['Porridge', 'Müsli', 'Overnight Oats', 'Backen'],
        difficulty: 'easy',
      },
      {
        millet: 'sorghum',
        milletName: 'Sorghumflocken',
        ratio: '1:1',
        notes:
          'Sorghumflocken sind etwas bissfester als Haferflocken und haben einen dezent süßlichen Geschmack. Sie eignen sich gut für Granola und Müslimischungen, da sie beim Backen schön knusprig werden. Für Porridge empfiehlt sich eine etwas längere Kochzeit (8–10 Minuten statt 5 Minuten bei Haferflocken). Sorghumflocken sind in Bio-Läden und Online-Shops erhältlich.',
        bestFor: ['Granola', 'Müsli', 'Porridge', 'Riegel'],
        difficulty: 'easy',
      },
    ],
  },
];
