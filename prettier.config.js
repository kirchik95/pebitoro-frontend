export default {
  endOfLine: 'lf',
  useTabs: false,
  tabWidth: 2,
  printWidth: 120,
  semi: true,
  singleQuote: true,
  bracketSpacing: true,
  plugins: ['@ianvs/prettier-plugin-sort-imports'],
  importOrderSeparation: true,
  importOrder: [
    '^react$',
    '^react-dom$',
    '^react-dom/client$',
    '^react-redux$',
    '^redux$',
    '^@reduxjs/toolkit$',
    '^redux-first-history',
    '^react-router-dom$',
    '^react-use$',
    '^history$',
    '^lodash$',
    '<THIRD_PARTY_MODULES>',
    '^classnames$',
    '',

    '^@core/(.*)$',
    '',

    '^@ui/(.*)$',
    '',

    '^@assets/(.*)$',
    '',

    '^../(?!.*.(css|module.css)$).*$',
    '',

    '^./(?!.*.(css|module.css)$).*$',
    '',

    '.*\\.(css|module\\.css)$',
  ],
};
