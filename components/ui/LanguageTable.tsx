import type { LanguageNames } from '@/lib/types';

interface LanguageTableProps {
  names: LanguageNames;
}

const languages: { key: keyof LanguageNames; label: string }[] = [
  { key: 'hindi', label: 'Hindi' },
  { key: 'tamil', label: 'Tamil' },
  { key: 'telugu', label: 'Telugu' },
  { key: 'kannada', label: 'Kannada' },
  { key: 'malayalam', label: 'Malayalam' },
  { key: 'marathi', label: 'Marathi' },
  { key: 'bengali', label: 'Bengali' },
  { key: 'gujarati', label: 'Gujarati' },
  { key: 'odia', label: 'Odia' },
  { key: 'punjabi', label: 'Punjabi' },
  { key: 'sanskrit', label: 'Sanskrit' },
];

export default function LanguageTable({ names }: LanguageTableProps) {
  return (
    <div className="overflow-x-auto rounded-xl border border-earth-200 dark:border-earth-700">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-earth-200 dark:bg-earth-700">
            <th className="px-5 py-3 text-left text-sm font-semibold text-earth-800 dark:text-earth-100 uppercase tracking-wider">
              Language
            </th>
            <th className="px-5 py-3 text-left text-sm font-semibold text-earth-800 dark:text-earth-100 uppercase tracking-wider">
              Name
            </th>
          </tr>
        </thead>
        <tbody>
          {languages.map((lang, index) => {
            const isSanskrit = lang.key === 'sanskrit';
            const bgColor = index % 2 === 0 ? 'bg-earth-50 dark:bg-earth-800' : 'bg-white dark:bg-earth-900';

            return (
              <tr
                key={lang.key}
                className={`${bgColor} border-b border-earth-100 dark:border-earth-700 last:border-b-0`}
              >
                <td
                  className={`px-5 py-3 text-earth-700 dark:text-earth-200 font-medium ${
                    isSanskrit ? 'italic text-earth-500 dark:text-earth-400' : ''
                  }`}
                >
                  {lang.label}
                </td>
                <td
                  className={`px-5 py-3 text-earth-800 dark:text-earth-100 ${
                    isSanskrit ? 'italic text-earth-600 dark:text-earth-300' : ''
                  }`}
                >
                  {names[lang.key]}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
