import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import robotsTxt from "astro-robots-txt";
import { defineConfig } from "astro/config";

export default defineConfig({
	site: "https://fitzhawke.com",
	integrations: [react(), tailwind({}), sitemap(), robotsTxt()],
});
