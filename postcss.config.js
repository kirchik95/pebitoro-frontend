// @ts-nocheck

import postcssGlobalData from '@csstools/postcss-global-data';
import postcssCustomMedia from 'postcss-custom-media';
import postcssCustomProperties from 'postcss-custom-properties';
import postcssImport from 'postcss-import';
import postcssNesting from 'postcss-nesting';

const config = {
  plugins: [
    postcssImport,
    postcssNesting,
    postcssCustomProperties,
    postcssGlobalData({
      files: ['./src/core/styles/media.css'],
    }),
    postcssCustomMedia,
  ],
};

export default config;
