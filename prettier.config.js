/** @type {import("prettier").Config} */
module.exports = {
  singleQuote: true,
  trailingComma: 'es5',
  tabWidth: 2,
  importOrder: [
    '^(next/(.*)$)|^(next)',
    '^(react/(.*)$)|^(react$)',
    '<THIRD_PARTY_MODULES>',
    '',
    '^@/components/(.*)$',
    '^@/styles/(.*)$',
  ],
  importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
  importOrderTypeScriptVersion: '5.0.0',
  plugins: [
    '@ianvs/prettier-plugin-sort-imports',
    'prettier-plugin-tailwindcss',
  ],
};
