// @ts-check
import { defineConfig } from "astro/config";
import icon from "astro-icon";

import react from "@astrojs/react";
import markdoc from "@astrojs/markdoc";
import keystatic from "@keystatic/astro";

// https://astro.build/config
export default defineConfig({
  site: "https://cajytam.com",
  integrations: [
    icon({
      include: {
        "simple-icons": ["*"],
      },
    }),
    react(),
    markdoc(),
    keystatic(),
  ],
});
