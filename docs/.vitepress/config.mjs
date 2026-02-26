import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "..\\redshape",
  
  title: "RedShape",
  description: "Сайт с лором редшейпа",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    sidebar: [
      {
        text: 'Основы',
        items: [
          { text: 'Введение', link: '/redshape/basics/intro' }
        ]
      },

      {
        text: 'Персонажи',
        items: [
          { text: 'Вайтфин нового поколения', link: '/redshape/characters/whitefin' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
