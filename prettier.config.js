export default {
  endOfLine: 'lf',
  useTabs: false,
  tabWidth: 2,
  printWidth: 100,
  semi: true,
  singleQuote: true,
  bracketSpacing: true,
  plugins: ['@ianvs/prettier-plugin-sort-imports'],
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

    '^@entities/(.*)$',
    '',

    '^@components/(.*)$',
    '',

    '^@ui/(.*)$',
    '',

    '^@shared/(.*)$',
    '',

    '^@pages/(.*)$',
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
