// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://logica.morrone.dev",
  integrations: [tailwind()],
  vite: {
    server: {
      watch: {
        ignored: ["**/target/**"],
      },
    },
  },
});
