import createMDX from '@next/mdx';
import withSerwistInit from '@serwist/next';

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {},
});

const withSerwist = withSerwistInit({
  swSrc: 'app/sw.ts',
  swDest: 'public/sw.js',
  disable: process.env.NODE_ENV === 'development',
});

const ambaliLocales = ['en', 'te', 'ar', 'hi', 'es'];
const ambaliRedirectSlugs = [
  'foxtail-millet-ambali',
  'little-millet-ambali',
  'kodo-millet-ambali',
  'barnyard-millet-ambali',
  'browntop-millet-ambali',
];
const duplicateRecipeLocales = ['en', 'te', 'ar', 'hi'];

const consolidatedRecipeRedirects = [
  ...ambaliLocales.flatMap((locale) =>
    ambaliRedirectSlugs.map((slug) => ({
      source: `/${locale}/recipes/${slug}`,
      destination: `/${locale}/recipes/ragi-ambali`,
      permanent: true,
    })),
  ),
  ...duplicateRecipeLocales.flatMap((locale) => [
    {
      source: `/${locale}/recipes/jowar-roti`,
      destination: `/${locale}/recipes/jowar-bhakri`,
      permanent: true,
    },
    {
      source: `/${locale}/recipes/ragi-malt`,
      destination: `/${locale}/recipes/ragi-porridge`,
      permanent: true,
    },
  ]),
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  async redirects() {
    return consolidatedRecipeRedirects;
  },
};

export default withSerwist(withMDX(nextConfig));
