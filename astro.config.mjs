import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import robotsTxt from "astro-robots-txt";
import { defineConfig } from "astro/config";

export default defineConfig({
	site: "https://fitzhawke.com",
	integrations: [react(), sitemap(), robotsTxt()],
	vite: {
		plugins: [tailwindcss()],
	},
});
