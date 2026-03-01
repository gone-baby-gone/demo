import { defineConfig } from 'vite'

export default defineConfig({
  base: '/',  // Замініть 'demo' на назву вашого GitHub-репо (gone-baby-gone/demo → /demo/)
  plugins: [],  // Додайте vue() якщо Vue: import vue from '@vitejs/plugin-vue'
  css: {
    preprocessorOptions: {
      scss: {
      }
    }
  }
})