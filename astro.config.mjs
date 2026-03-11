// @ts-check
import { defineConfig } from "astro/config";
import icon from "astro-icon";
import keystatic from "@keystatic/astro";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";

const isDevMode = import.meta.env.DEV;

// https://astro.build/config
export default defineConfig({
  site: "https://cajytam.fr",
  integrations: [
    icon({
      include: {
        "simple-icons": ["*"],
      },
    }),
    mdx(),
    ...(isDevMode ? [keystatic(), react()] : []),
  ],
});
