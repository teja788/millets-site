import {
  Flame,
  Beef,
  Wheat,
  Bone,
  Droplets,
  Gauge,
} from 'lucide-react';
import type { Millet } from '@/lib/types';
import QuickFactBox from '@/components/ui/QuickFactBox';

interface NutritionHighlightProps {
  millet: Millet;
}

export default function NutritionHighlight({ millet }: NutritionHighlightProps) {
  const facts = [
    {
      icon: <Flame size={24} />,
      label: 'Calories',
      value: millet.nutrition.calories,
      unit: 'kcal',
    },
    {
      icon: <Beef size={24} />,
      label: 'Protein',
      value: millet.nutrition.protein_g,
      unit: 'g',
    },
    {
      icon: <Wheat size={24} />,
      label: 'Fiber',
      value: millet.nutrition.fiber_g,
      unit: 'g',
    },
    {
      icon: <Bone size={24} />,
      label: 'Calcium',
      value: millet.nutrition.calcium_mg,
      unit: 'mg',
    },
    {
      icon: <Droplets size={24} />,
      label: 'Iron',
      value: millet.nutrition.iron_mg,
      unit: 'mg',
    },
  ];

  // Add GI value if available
  if (millet.glycemicIndex) {
    facts.push({
      icon: <Gauge size={24} />,
      label: 'Glycemic Index',
      value: millet.glycemicIndex.value,
      unit: `(${millet.glycemicIndex.category})`,
    });
  }

  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
      {facts.map((fact) => (
        <QuickFactBox
          key={fact.label}
          icon={fact.icon}
          label={fact.label}
          value={fact.value}
          unit={fact.unit}
        />
      ))}
    </div>
  );
}
