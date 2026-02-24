'use client';

import { useMemo } from 'react';
import dynamic from 'next/dynamic';
import type { Locale } from '@/lib/i18n';
import { getTranslations } from '@/lib/i18n';

const ResponsiveContainer = dynamic(
  () => import('recharts').then((mod) => mod.ResponsiveContainer),
  { ssr: false }
);
const BarChart = dynamic(
  () => import('recharts').then((mod) => mod.BarChart),
  { ssr: false }
);
const Bar = dynamic(
  () => import('recharts').then((mod) => mod.Bar),
  { ssr: false }
);
const XAxis = dynamic(
  () => import('recharts').then((mod) => mod.XAxis),
  { ssr: false }
);
const YAxis = dynamic(
  () => import('recharts').then((mod) => mod.YAxis),
  { ssr: false }
);
const CartesianGrid = dynamic(
  () => import('recharts').then((mod) => mod.CartesianGrid),
  { ssr: false }
);
const Tooltip = dynamic(
  () => import('recharts').then((mod) => mod.Tooltip),
  { ssr: false }
);
const Legend = dynamic(
  () => import('recharts').then((mod) => mod.Legend),
  { ssr: false }
);
const RadarChart = dynamic(
  () => import('recharts').then((mod) => mod.RadarChart),
  { ssr: false }
);
const Radar = dynamic(
  () => import('recharts').then((mod) => mod.Radar),
  { ssr: false }
);
const PolarGrid = dynamic(
  () => import('recharts').then((mod) => mod.PolarGrid),
  { ssr: false }
);
const PolarAngleAxis = dynamic(
  () => import('recharts').then((mod) => mod.PolarAngleAxis),
  { ssr: false }
);
const PolarRadiusAxis = dynamic(
  () => import('recharts').then((mod) => mod.PolarRadiusAxis),
  { ssr: false }
);

interface NutritionDataItem {
  name: string;
  calories: number;
  protein_g: number;
  fat_g: number;
  carbohydrates_g: number;
  fiber_g: number;
  calcium_mg: number;
  iron_mg: number;
}

interface NutritionChartProps {
  data: NutritionDataItem[];
  chartType: 'bar' | 'radar';
  locale?: Locale;
}

const CHART_COLORS = ['#5B8C5A', '#2D5016', '#D4A843', '#C17E5A', '#4A7C3E'];

function CustomTooltip({
  active,
  payload,
  label,
}: {
  active?: boolean;
  payload?: Array<{ name: string; value: number; color: string }>;
  label?: string;
}) {
  if (!active || !payload || payload.length === 0) return null;

  return (
    <div className="bg-cream dark:bg-earth-800 border border-earth-200 dark:border-earth-700 rounded-lg px-4 py-3 shadow-elevated">
      <p className="font-heading text-sm font-semibold text-earth-800 dark:text-earth-100 mb-1">
        {label}
      </p>
      {payload.map((entry, index) => (
        <p
          key={index}
          className="text-xs text-earth-300"
          style={{ color: entry.color }}
        >
          {entry.name}: {entry.value}
        </p>
      ))}
    </div>
  );
}

export default function NutritionChart({ data, chartType, locale = 'en' }: NutritionChartProps) {
  const t = getTranslations(locale);

  const macroKeys = useMemo(
    () =>
      [
        { key: 'protein_g', label: `${t.milletDetail.protein} (g)` },
        { key: 'fat_g', label: `${t.milletDetail.fat} (g)` },
        { key: 'carbohydrates_g', label: `${t.milletDetail.carbohydrates} (g)` },
        { key: 'fiber_g', label: `${t.milletDetail.fiber} (g)` },
        { key: 'calories', label: `${t.milletDetail.calories} (kcal)` },
      ] as const,
    [t]
  );

  const radarData = useMemo(() => {
    const microKeys = [
      { key: 'calcium_mg' as const, label: `${t.milletDetail.calcium} (mg)` },
      { key: 'iron_mg' as const, label: `${t.milletDetail.iron} (mg)` },
      { key: 'protein_g' as const, label: `${t.milletDetail.protein} (g)` },
      { key: 'fiber_g' as const, label: `${t.milletDetail.fiber} (g)` },
    ];

    return microKeys.map((micro) => {
      const point: Record<string, string | number> = { nutrient: micro.label };
      data.forEach((item) => {
        point[item.name] = item[micro.key];
      });
      return point;
    });
  }, [data, t]);

  if (chartType === 'radar') {
    return (
      <div className="w-full">
        <ResponsiveContainer width="100%" height={400}>
          <RadarChart data={radarData} cx="50%" cy="50%" outerRadius="80%">
            <PolarGrid stroke="#E0D8CE" />
            <PolarAngleAxis
              dataKey="nutrient"
              tick={{ fill: '#2C2C2C', fontSize: 12 }}
            />
            <PolarRadiusAxis
              angle={30}
              tick={{ fill: '#6B6B6B', fontSize: 10 }}
            />
            {data.map((item, index) => (
              <Radar
                key={item.name}
                name={item.name}
                dataKey={item.name}
                stroke={CHART_COLORS[index % CHART_COLORS.length]}
                fill={CHART_COLORS[index % CHART_COLORS.length]}
                fillOpacity={0.2}
              />
            ))}
            <Legend />
            <Tooltip content={<CustomTooltip />} />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    );
  }

  return (
    <div className="w-full">
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#E0D8CE" />
          <XAxis
            dataKey="name"
            tick={{ fill: '#2C2C2C', fontSize: 12 }}
            axisLine={{ stroke: '#D4A843' }}
          />
          <YAxis
            tick={{ fill: '#6B6B6B', fontSize: 11 }}
            axisLine={{ stroke: '#D4A843' }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          {macroKeys.map((macro, index) => (
            <Bar
              key={macro.key}
              dataKey={macro.key}
              name={macro.label}
              fill={CHART_COLORS[index % CHART_COLORS.length]}
              radius={[4, 4, 0, 0]}
            />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
