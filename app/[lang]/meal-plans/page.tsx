'use client';

import { useParams } from 'next/navigation';
import Breadcrumb from '@/components/layout/Breadcrumb';
import Tabs from '@/components/ui/Tabs';
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableHeaderCell,
} from '@/components/ui/Table';
import type { Locale } from '@/lib/i18n';
import { isValidLocale, getTranslations } from '@/lib/i18n';
import { getMealPlans } from '@/lib/i18n-data';

function MealPlanContent({
  plan,
  t,
}: {
  plan: ReturnType<typeof getMealPlans>[number];
  t: ReturnType<typeof getTranslations>;
}) {
  return (
    <div>
      {/* Description and Goal */}
      <div className="mb-6">
        <p className="text-earth-800 dark:text-earth-200 leading-relaxed mb-3">
          {plan.description}
        </p>
        <p className="text-sm text-earth-700 dark:text-earth-300">
          <strong className="text-earth-800 dark:text-earth-100">{t.mealPlan.goal}:</strong> {plan.goal}
        </p>
      </div>

      {/* 7-Day Table */}
      <Table>
        <TableHead>
          <TableRow>
            <TableHeaderCell>{t.mealPlan.day}</TableHeaderCell>
            <TableHeaderCell>{t.mealPlan.breakfast}</TableHeaderCell>
            <TableHeaderCell>{t.mealPlan.lunch}</TableHeaderCell>
            <TableHeaderCell>{t.mealPlan.snack}</TableHeaderCell>
            <TableHeaderCell>{t.mealPlan.dinner}</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {plan.days.map((day) => (
            <TableRow key={day.day}>
              <TableCell className="font-medium whitespace-nowrap">
                {day.day}
              </TableCell>
              <TableCell className="text-sm">{day.breakfast}</TableCell>
              <TableCell className="text-sm">{day.lunch}</TableCell>
              <TableCell className="text-sm">{day.snack}</TableCell>
              <TableCell className="text-sm">{day.dinner}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Tips */}
      <div className="mt-6">
        <h3 className="font-heading text-lg font-bold text-earth-800 dark:text-earth-100 mb-3">
          {t.recipeDetail.tips}
        </h3>
        <ul className="space-y-2">
          {plan.tips.map((tip, index) => (
            <li key={index} className="flex items-start gap-3 text-earth-800 dark:text-earth-200 text-sm">
              <span className="w-2 h-2 rounded-full bg-warm-gray dark:bg-earth-400 flex-shrink-0 mt-1.5" />
              <span className="leading-relaxed">{tip}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Plan Disclaimer */}
      <div className="mt-6 bg-forest-50 dark:bg-earth-800 rounded-lg p-4">
        <p className="text-xs text-warm-gray dark:text-earth-400 leading-relaxed italic">
          {plan.disclaimer}
        </p>
      </div>
    </div>
  );
}

export default function MealPlansPage() {
  const routeParams = useParams();
  const lang = (routeParams?.lang as string) || 'en';
  const locale: Locale = isValidLocale(lang) ? lang : 'en';

  const t = getTranslations(locale);
  const mealPlans = getMealPlans(locale);

  const tabs = mealPlans.map((plan) => ({
    label: plan.title,
    content: <MealPlanContent plan={plan} t={t} />,
  }));

  return (
    <main>
      <Breadcrumb locale={locale} />

      <div className="content-wrapper py-8">
        {/* Page Header */}
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-earth-800 dark:text-earth-100 mb-4">
          {t.mealPlan.title}
        </h1>
        <p className="text-lg text-earth-700 dark:text-earth-300 max-w-3xl mb-10 leading-relaxed">
          {t.mealPlan.intro}
        </p>

        {/* Tabs */}
        <Tabs tabs={tabs} />
      </div>

      {/* Disclaimer */}
      <div className="content-wrapper pb-8">
        <div className="border-t border-earth-200 dark:border-earth-700 pt-6 mt-10">
          <p className="text-xs text-warm-gray dark:text-earth-400 leading-relaxed max-w-3xl">
            <strong>{t.common.disclaimer}:</strong> {t.common.disclaimerText}
          </p>
        </div>
      </div>
    </main>
  );
}
