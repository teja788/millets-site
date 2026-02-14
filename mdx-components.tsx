import type { MDXComponents } from 'mdx/types';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="font-heading text-4xl md:text-5xl font-bold text-earth-800 dark:text-earth-200 mb-6 mt-12 first:mt-0">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="font-heading text-3xl font-bold text-earth-800 dark:text-earth-200 mb-4 mt-10">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="font-heading text-2xl font-semibold text-earth-700 dark:text-earth-300 mb-3 mt-8">
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="text-earth-900 dark:text-earth-100 leading-relaxed mb-4">
        {children}
      </p>
    ),
    ul: ({ children }) => (
      <ul className="list-disc list-inside space-y-2 mb-4 text-earth-900 dark:text-earth-100 ml-4">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-inside space-y-2 mb-4 text-earth-900 dark:text-earth-100 ml-4">
        {children}
      </ol>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-earth-400 pl-4 py-2 my-4 bg-earth-100/50 dark:bg-earth-800/30 rounded-r-lg italic text-earth-700 dark:text-earth-300">
        {children}
      </blockquote>
    ),
    table: ({ children }) => (
      <div className="overflow-x-auto mb-4">
        <table className="w-full border-collapse">
          {children}
        </table>
      </div>
    ),
    th: ({ children }) => (
      <th className="bg-earth-200 dark:bg-earth-700 px-4 py-2 text-left font-semibold text-earth-800 dark:text-earth-200 border border-earth-300 dark:border-earth-600">
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td className="px-4 py-2 border border-earth-200 dark:border-earth-700 text-earth-900 dark:text-earth-100">
        {children}
      </td>
    ),
    ...components,
  };
}
