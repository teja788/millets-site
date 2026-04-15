interface AuthorBioProps {
  heading: string;
  name: string;
  credentials: string;
  storyP1: string;
  storyP2: string;
}

export default function AuthorBio({
  heading,
  name,
  credentials,
  storyP1,
  storyP2,
}: AuthorBioProps) {
  return (
    <section className="rounded-xl border border-earth-200 dark:border-earth-700 bg-earth-50/60 dark:bg-earth-800/30 p-6 md:p-8">
      <h2 className="font-heading text-2xl font-bold text-earth-800 dark:text-earth-100 mb-4">
        {heading}
      </h2>

      <div className="mb-5">
        <p className="font-heading text-lg font-semibold text-earth-800 dark:text-earth-100">
          {name}
        </p>
        <p className="text-sm text-earth-600 dark:text-earth-300 italic leading-relaxed mt-1">
          {credentials}
        </p>
      </div>

      <div className="space-y-4 text-earth-600 dark:text-earth-300 leading-relaxed">
        <p>{storyP1}</p>
        <p>{storyP2}</p>
      </div>
    </section>
  );
}
