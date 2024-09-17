// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import cloudflare from '@astrojs/cloudflare';
import compressor from 'astro-compressor';
import swup from '@swup/astro';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), swup()],
  output: 'server',
  adapter: cloudflare()
});