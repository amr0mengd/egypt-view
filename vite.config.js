import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig(({mode}) =>({
	plugins: [vue(), vueDevTools(), tailwindcss()],
	resolve: {
		alias: {
			"@": fileURLToPath(new URL("./src", import.meta.url)),
		},
	},
	server: {
		port: 8080,
		host: true,
	},
  // this ternary operator checks the mode if it's production then the base will be "/egypt-view/" and if it's development mode it's '/'
  base: mode === 'production' ? "/egypt-view/": "/",
}));
