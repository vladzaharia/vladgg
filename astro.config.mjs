// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import cloudflare from '@astrojs/cloudflare';
import compressor from 'astro-compressor';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), compressor()],
  output: 'server',
  adapter: cloudflare()
});