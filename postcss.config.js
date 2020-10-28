const purgecss = require('@fullhuman/postcss-purgecss')
const cssnano = require('cssnano')


const prodPlugins = [
  require("postcss-import"),
  require('tailwindcss'),
  require('autoprefixer'),
  cssnano({
    preset: 'default'
  }),
  purgecss({
    content: [
        'components/**/*.vue',
        'layouts/**/*.vue',
        'pages/**/*.vue',
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
  })
];

const devPlugins = [
  require('tailwindcss'),
  require('autoprefixer'),
];


const isProduction = process.env.NODE_ENV === 'production';
if (isProduction) {
  module.exports = {
    plugins: prodPlugins
  }
} else {
  module.exports = {
    plugins: devPlugins
  }
}
