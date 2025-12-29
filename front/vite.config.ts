import { defineConfig } from 'vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import autoprefixer from 'autoprefixer'
import pandacss from '@pandacss/dev/postcss'
import viteTsConfigPaths from 'vite-tsconfig-paths'

const config = defineConfig({
  css: {
    postcss: {
      plugins: [pandacss, autoprefixer]
    }
  },
  plugins: [
    // this is the plugin that enables path aliases
    viteTsConfigPaths({
      projects: ['./tsconfig.json'],
    }),
    tanstackStart(),
    viteReact(),
  ],
})

export default config
