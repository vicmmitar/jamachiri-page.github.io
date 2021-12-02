module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Jamach\'iri',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Inicio',
        link: '/',
      },
      {
        text: 'Acerca de',
        link: '/acercade/',
      },
      {
        text: 'Galeria',
        link: '/galeria/'
      },
      {
        text: 'Realidad Aumentada',
        link: '/ar/'
      },
      {
        text: 'Descargas',
        link: '/descargas/'
      },
      {
        text: 'Jugar',
        link: '/jugar-ahora/'
      },

    ],
    sidebar: {
      '/acercade/': [
        {
          title: 'Acerca de',
          collapsable: false,
          children: [
            '',
            'mecanicas',
            'personajes',
            'escenarios',
          ]
        }
      ],
      '/ar/': [
        {
          title: 'AR',
          collapsable: false,
          children: [
            '',
            'experiencia-ar',
            'comolohice',
          ]
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
