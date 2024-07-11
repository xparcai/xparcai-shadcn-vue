import path from 'node:path'
import process from 'node:process'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import unocss from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig(() => {
  const root = process.cwd()
  return {
    root,
    plugins: [
      vue(),
      unocss(),
    ],
    resolve: {
      alias: {
        '@ui': path.resolve(__dirname, './src/shadcn/ui'),
        '@': path.resolve(__dirname, './src'),
      },
    },
  }
})
