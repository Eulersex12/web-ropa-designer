import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

import db from "@astrojs/db";

// https://astro.build/config
export default defineConfig({
  /*image: '/preview-image.png',*/
  integrations: [react(), tailwind(), db()]
});