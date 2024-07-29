import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import icon from "astro-icon";
import { defineConfig, squooshImageService } from 'astro/config';
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://melkyy.github.io',
  base: 'melkyy.github.io',
  integrations: [tailwind(), mdx(), icon({
    include: {
      mdi: ["*"]
    }
  }), react({
    experimentalReactChildren: true,
  })],
  image: {
    service: squooshImageService()
  }
});