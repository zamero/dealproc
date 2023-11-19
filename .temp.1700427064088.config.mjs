import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from "@astrojs/tailwind";
import lottie from "@lottiefiles/lottie-player";
export default defineConfig({
  integrations: [react(), tailwind(), lottie()]
});