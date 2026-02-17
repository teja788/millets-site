import type { Source } from '@/lib/types';

interface SourceCitationProps {
  source: Source;
}

export default function SourceCitation({ source }: SourceCitationProps) {
  const renderTitle = () => {
    if (source.url) {
      return (
        <a
          href={source.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-earth-500 underline hover:text-earth-500 dark:hover:text-earth-200 transition-colors"
        >
          {source.title}
        </a>
      );
    }
    return <>{source.title}</>;
  };

  const renderCitation = () => {
    switch (source.type) {
      case 'peer-reviewed':
        return (
          <>
            {source.authors} ({source.year}). {renderTitle()}.{' '}
            {source.journal && <em>{source.journal}</em>}
            {source.journal && '.'}
          </>
        );

      case 'book':
        return (
          <>
            {source.authors} ({source.year}). <em>{renderTitle()}</em>.
            {source.journal && ` ${source.journal}.`}
          </>
        );

      case 'government':
      case 'institutional':
        return (
          <>
            {source.authors} ({source.year}). {renderTitle()}.
            {source.url && (
              <>
                {' '}
                <span className="break-all">{source.url}</span>
              </>
            )}
          </>
        );

      default:
        return (
          <>
            {source.authors} ({source.year}). {renderTitle()}.
          </>
        );
    }
  };

  return (
    <li className="text-sm text-earth-600 dark:text-earth-300 leading-relaxed">
      {renderCitation()}
    </li>
  );
}
