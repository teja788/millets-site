import { spanishMilletNames } from '@/data/es/spanish-names';

interface SpanishNamesTableProps {
  slug: string;
}

export default function SpanishNamesTable({ slug }: SpanishNamesTableProps) {
  const names = spanishMilletNames[slug];
  if (!names) return null;

  const rows: { label: string; value: string }[] = [
    { label: 'Español', value: names.spanish },
    { label: 'Inglés', value: names.english },
    { label: 'Nombre científico', value: names.scientificName },
  ];

  return (
    <div className="overflow-x-auto rounded-xl border border-earth-200 dark:border-earth-700">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-earth-200 dark:bg-earth-700">
            <th className="px-5 py-3 text-left text-sm font-semibold text-earth-800 dark:text-earth-100 uppercase tracking-wider">
              Idioma
            </th>
            <th className="px-5 py-3 text-left text-sm font-semibold text-earth-800 dark:text-earth-100 uppercase tracking-wider">
              Nombre
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => {
            const isScientific = row.label === 'Nombre científico';
            const bgColor =
              index % 2 === 0
                ? 'bg-earth-50 dark:bg-earth-800'
                : 'bg-white dark:bg-earth-900';

            return (
              <tr
                key={row.label}
                className={`${bgColor} border-b border-earth-100 dark:border-earth-700 last:border-b-0`}
              >
                <td
                  className={`px-5 py-3 text-earth-700 dark:text-earth-200 font-medium ${
                    isScientific ? 'italic text-earth-500 dark:text-earth-400' : ''
                  }`}
                >
                  {row.label}
                </td>
                <td
                  className={`px-5 py-3 text-earth-800 dark:text-earth-100 ${
                    isScientific ? 'italic text-earth-600 dark:text-earth-300' : ''
                  }`}
                >
                  {row.value}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
