const purgecss = require("@fullhuman/postcss-purgecss");
const cssnano = require("cssnano");
const prefixer = require("postcss-prefix-selector");

const isProd = process.env.NODE_ENV === "production";

const plugins = [
  isProd ? require("postcss-import"): null,
  require("tailwindcss"),
  purgecss({
    enabled: true,
    content: [
      "components/**/*.vue",
      "layouts/**/*.vue",
      "pages/**/*.vue",
      "lib/layouts/**/*.vue",
      "lib/pages/**/*.vue",
      "lib/components/**/*.vue",
    ],
    whitelist: ['body', 'html', 'nuxt-progress'],
    styleExtensions: ['.css'],
    extractors: [
      {
        extractor: content => content.match(/[A-z0-9-:\\/]+/g) || [],
        extensions: ['html', 'vue', 'js']
      }
    ],
  }),
  prefixer({
    prefix: ".saas",
    transform: function(prefix, selector, prefixedSelector) {
      if (selector === "body" || selector === "html") {
        return "body" + prefix;
      } else {
        return prefixedSelector;
      }
    }
  }),
  require("autoprefixer"),
  isProd
    ? cssnano({
        preset: "default"
      })
    : null
];



module.exports = {
  plugins: plugins
};
