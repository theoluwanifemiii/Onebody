import { resolve } from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: '.output',
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        services: resolve(__dirname, 'services.html'),
        sermons: resolve(__dirname, 'sermons.html'),
        academy: resolve(__dirname, 'academy.html'),
        charity: resolve(__dirname, 'charity.html'),
        giving: resolve(__dirname, 'giving.html')
      }
    }
  }
});
