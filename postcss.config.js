const purgecss = require('@fullhuman/postcss-purgecss')
const cssnano = require('cssnano')
const prefixer = require('postcss-prefix-selector')


const prodPlugins = [
  require("postcss-import"),
  require('tailwindcss'),
  prefixer({
    prefix: '.saastarter', 
    transform: function (prefix, selector, prefixedSelector) {
      if (selector === 'body' || selector === 'html') {
        return 'body' + prefix;
      } else {
        return prefixedSelector;
      }
    }
  }),
  require('autoprefixer'),
  purgecss({
    content: [
        'components/**/*.vue',
        'layouts/**/*.vue',
        'pages/**/*.vue',
        'lib/**/*.vue',
        'plugins/**/*.js',
        'nuxt.config.js',
    ],
    safelist: [
        'saastarter-btn-primary',
        'saastarter-btn-secondary',
        'saastarter-text-input',
        'saastarter-error-message'
    ],
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
  }),
  cssnano({
    preset: 'default'
  }),
];

const devPlugins = [
  require('tailwindcss'),
  prefixer({
    prefix: '.saastarter', 
    transform: function (prefix, selector, prefixedSelector) {
      if (selector === 'body' || selector === 'html') {
        return 'body' + prefix;
      } else {
        return prefixedSelector;
      }
    }
  }),
  require('autoprefixer'),
];


const isProduction = process.env.NODE_ENV === 'production';
const isNuxt = !!process.env.VUE_ENV;
if (isNuxt) {
  module.exports = {
    plugins: [require('autoprefixer')]
  }
  return;
}
if (isProduction) {
  module.exports = {
    plugins: prodPlugins
  }
} else {
  module.exports = {
    plugins: devPlugins
  }
}
