// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import swup from '@swup/astro';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: 'https://vlad.gg',
  integrations: [tailwind(), swup(), icon()],
  prefetch: false,
  output: 'static'
});