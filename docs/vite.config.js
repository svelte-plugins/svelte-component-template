import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import autoprefixer from 'autoprefixer'
import path from 'path';

export default defineConfig(({ command, mode }) => {
  const isProduction = mode === 'production'

  return {
    base: '',
    css: {
      postcss: {
        plugins: [
          autoprefixer({
            overrideBrowserslist: ['last 1 version', 'ie >= 11'],
          }),
        ],
      },
    },
    resolve: {
      alias: {
        '@svelte-plugins/svelte-component-template': path.resolve('../', 'src')
      },
      extensions: ['.svelte', '.ts', '.js'],
    },
    build: {
      minify: isProduction,
      outDir: 'build',
    },
    plugins: [
      svelte()
    ],
    server: {
      open: true
    }
  }
})
