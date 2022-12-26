const axios = require('axios')
module.exports = {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
		htmlAttrs:{
			lang: "ru"
		},
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.svg" },
      { rel: "stylesheet", href: "/assets/style.css" },
			{ name: "theme-color", content: "#3b8070"}
    ],
  },

  components: true,
  /*
   ** Customize the progress-bar color
   */
  loading: false,
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: "~/plugins/vee-validate.js" }],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    "@nuxtjs/axios",
    "@nuxtjs/pwa",
    "@nuxtjs/dotenv",
    "nuxt-lazy-load",
    "@nuxt/http",
		"@nuxtjs/auth",
    "@nuxtjs/sitemap",
    [
      "@nuxtjs/yandex-metrika",
      {
        id: "XXXXXX",
        webvisor: true,
        // clickmap: true,
        // useCDN: false,
        // trackLinks: true,
        // accurateTrackBounce: true,
      },
    ],
  ],
	pwa:{
		manifest:{
			name: "knyazev.com",
			lang: "ru",
			description: "knyazev.com"
		}
	},
	 axios: {
		proxy: true
	 },
	proxy:{
		"/api/": "http://localhost:3000"
	},
  sitemap: {
    hostname: "http://localhost:3000",
    exclude: ["/**/new",
							"/login"
	],
    defaults: {
      changefreq: "daily",
      priority: 1,
      lastmod: new Date(),
    },
    routes: async () => {
			
      const { data } = await axios.get(
        "http://localhost:3000/api/theme/sitemap"
      );
      return data.map((page) => `${page.path}${page.url}`);
    },
  },

  build: {
    transpile: ["vee-validate", "@nuxtjs/yandex-metrika"],
    extend(config, ctx) {},
  },
};
