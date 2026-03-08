import nextVitals from 'eslint-config-next/core-web-vitals';

const config = [
  { ignores: ['_theme-backup/**', '.next/**', 'node_modules/**'] },
  ...nextVitals,
];

export default config;
