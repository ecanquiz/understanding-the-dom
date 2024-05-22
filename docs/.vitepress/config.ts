import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'DOM en JS',
  description: 'Comprensión del Document Object Model.',
  base: '/understanding-the-dom/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/me.jpg',
    nav: [
      { text: 'Inicio', link: '/' },
      { text: 'Comenzar', link: '/intro' },
      { text: 'ecanquiz', link: 'https://ecanquiz.github.io/' },     
    ],
    sidebar: [{      
      path: '/',      // optional, link of the title, which should be an absolute path and must exist        
      sidebarDepth: 1,    // optional, defaults to 1
      items: [
        { text: 'Introducción', link: '/intro' },
        { text: 'Introduction to the DOM', link: '/introduction-to-the-dom' },
        { text: 'Understanding the DOM Tree and Nodes', link: '/understanding-the-dom-tree-and-nodes' },
        { text: 'How To Access Elements in the DOM', link: '/how-to-access-elements-in-the-dom' },
        { text: 'How To Traverse the DOM', link: '/how-to-traverse-the-dom' },
        { text: 'How To Make Changes to the DOM', link: '/how-to-make-changes-to-the-dom' },
        { text: 'How To Modify Attributes, Classes, and Styles in the DOM', link: '/how-to-modify-attributes-classes-and-styles-in-the-dom' },
        { text: 'Understanding Events in JavaScript', link: '/understanding-events-in-javascript' },
        { text: 'Understanding the DOM — Document Object Model eBook', link: '/understanding-the-dom-document-object-model-ebook' },
      ]
    }],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/ecanquiz/understanding-the-dom' }
    ]
  }
})




