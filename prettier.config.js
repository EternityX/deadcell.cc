/** @type {import("prettier").Config} */
export default {
    singleQuote: true,
    tabWidth: 2,
    importOrder: [
        '^(react/(.*)$)|^(react$)',
        '^@/components/(.*)$',
        '^@/styles/(.*)$',
    ],
    plugins: [
        '@ianvs/prettier-plugin-sort-imports',
        'prettier-plugin-tailwindcss',
    ],
};