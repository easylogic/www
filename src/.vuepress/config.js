// .vuepress/config.js
const locales = require('./locales')
const themeLocales = require('./locales/themes')

module.exports = {
  base: '/',
  dest: './docs',
  ga: 'UA-139740394-1',
  title: 'Easylogic',
  description: 'Fantastic Web Design Tool',
  head: [

    [
      "script",
      {},
      `
      (function(j,en,ni,fer) {
        j['dmndata']=[];j['jenniferFront']=function(args){window.dmndata.push(args)};
        j['dmnaid']=fer;j['dmnatime']=new Date();j['dmnanocookie']=false;j['dmnajennifer']='JENNIFER_FRONT@INTG';
        var b=Math.floor(new Date().getTime() / 60000) * 60000;var a=en.createElement(ni);
        a.src='https://d-collect.jennifersoft.com/'+fer+'/demian.js?'+b;a.async=true;
        en.getElementsByTagName(ni)[0].parentNode.appendChild(a);
    }(window,document,'script','cc474308-b29c-af41-7393-409d285dca6e'));
  `
    ],
    [
      'script',
      {
        async: true,
        src: "https://www.googletagmanager.com/gtag/js?id=UA-139740394-1"
      }
    ],
    [
      'script',
      {
        "data-ad-client": "ca-pub-9166386451361987",
        async: true,
        src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
      }
    ],    
    [
      'script',
      {},
      `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'UA-139740394-1');
      `

    ],

    ['meta', { name: 'description', content: 'You can make simply web with CSS + SVG editor. ' }],
    ['meta', { name: 'keywords', content: 'html5,css,svg,editor' }],
    ['meta', { name: 'author', content: 'easylogic' }],
    ['meta', { name: 'og:title', content: 'Fantastic Web Design Tool' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:description', content: 'You can make simply web with CSS + SVG editor. ' }],
    ['meta', { name: 'og:url', content: 'https://www.easylogic.studio' }],
    ['meta', { name: 'og:image', content: 'https://www.easylogic.studio/images/editor3.png' }],

    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:url', content: 'https://www.easylogic.studio' }],
    ['meta', { name: 'twitter:title', content: 'Fantastic Web Design Tool' }],
    ['meta', { name: 'twitter:description', content: 'You can make simply web with CSS + SVG editor. ' }],
    ['meta', { name: 'twitter:image', content: 'https://www.easylogic.studio/images/editor3.png' }],
    ['link', { rel: 'icon', href: '/images/icon32.png' }]
  ],
  postcss: {
    plugins: [ 
      require('autoprefixer')
    ]
  },
  markdown: {
    lineNumbers: true,
    toc: { includeLevel: [1, 2, 3] }
  },
  locales,
  themeConfig: {
    repo: 'easylogic/editor',
    // repoLabel: 'Git!', 
    search: false,
    lastUpdated: 'Last Updated',
    locales: themeLocales,
    sidebarDepth: 2

  },
  plugins: [
    [
      '@vuepress/google-analytics',
      {
        'ga': 'UA-139740394-1' // UA-00000000-0
      }
    ]
  ]
} 