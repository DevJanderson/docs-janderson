import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Janderson Lira",
  description: "Programador Web e Adminstrador",


  cleanUrls: true,


  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
       // Conteúdo de Introdução
       {
        text: 'Introdução',
        collapsed:true,
        items: [
          { text: 'Primeiros passos', link: '/introducao/00passos' },
          { text: 'VSCode: Extenções', link: '/introducao/vscode' },
        ]
      },
      // Conteúdo de JavaScript
      {
        text: 'JavaScript',
        collapsed:true,
        items: [
          { text: 'Em produção', link: '/' },
        ]
      },
      // Conteúdo de Docker
      {
        text: 'Docker',
        collapsed:true,
        items: [
          { text: 'Em produção', link: '/' },
        ]
      }
    ],

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]
    footer: {
			// message: "....",
			copyright: "Copyright © 2024 ",
		},
  }
})
