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
        giving: resolve(__dirname, 'giving.html'),
        lordsTable: resolve(__dirname, 'lords-table.html'),
        blog: resolve(__dirname, 'blog.html'),
        postGodCalling: resolve(__dirname, 'posts/god-is-calling-you.html'),
        postFruitBearing: resolve(__dirname, 'posts/fruit-bearing-branches.html'),
        postLoving: resolve(__dirname, 'posts/loving-christs-way.html'),
        postFish: resolve(__dirname, 'posts/fish-faith-and-obedience.html'),
        postPureHeart: resolve(__dirname, 'posts/the-pure-heart-touches-god.html'),
        postTransformation: resolve(__dirname, 'posts/spiritual-transformation.html'),
        postGodSpeaking: resolve(__dirname, 'posts/god-is-speaking-can-you-hear.html')
      }
    }
  }
});
