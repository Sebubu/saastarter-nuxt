import { join, resolve } from "path";
const fs = require("fs");

async function* walk(dir) {
  for await (const d of await fs.promises.opendir(dir)) {
    const entry = join(dir, d.name);
    if (d.isDirectory()) yield* walk(entry);
    else if (d.isFile()) yield entry;
  }
}

function addRoute(pagesDir, location) {
  let path = location.replace(pagesDir, "").replace(".vue", "");
  if (path.endsWith("index")) {
    path = path.substring(0, path.length - 5);
  }
  const newRoute = {
    name: path,
    path: path,
    component: location
  };
  this.extendRoutes(routes => {
    const alreadyExists =
      routes.filter(route => {
        return route.name === newRoute.name;
      }).length > 0;
    if (alreadyExists) {
      console.log("routeAlreadyExists", alreadyExists, newRoute.name);
    }
    routes.unshift(newRoute);
  });
}

async function addPages() {
  const pagesDir = join(__dirname, "../pages");
  for await (const page of walk(pagesDir)) {
    addRoute.bind(this)(pagesDir, page);
  }
}

export default async function(moduleOptions) {
  // Add components
  this.nuxt.hook("components:dirs", dirs => {
    const componentDir = join(__dirname, "../components");
    dirs.push({
      path: componentDir,
      prefix: "saas"
    });
  });

  // Add pages
  await addPages.bind(this)();

  // Add Stripe plugin
  this.addPlugin(resolve(__dirname, "../plugins/stripe.plugin.client.js"));

  // Add saastarter plugin
  const options = this.options.saastarter;
  this.addPlugin({
    src: resolve(__dirname, "../plugins/saastarter.plugin.js"),
    fileName: "saastarter.plugin.js",
    options: {
      appName: options.appName,
      loginSuccessUrl: options.loginSuccessUrl || "/",
      stripePublishableKey: options.stripePublishableKey,
      layoutName: options.layoutName || "saastarter"
    }
  });

  // Add css
  const addDefaultStyling =
    options.defaultStyling === undefined || options.defaultStyling;
  const cssDir = join(__dirname, "../css/");
  if (addDefaultStyling) {
    this.options.css.push(cssDir + "style.css");
  } else {
    this.options.css.push(cssDir + "base.css");
  }

  // Add layout
  this.options.layouts.saastarter = join(
    __dirname,
    "../layouts/saastarter.vue"
  );
}
