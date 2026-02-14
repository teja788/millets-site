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

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
};

export default withSerwist(withMDX(nextConfig));
