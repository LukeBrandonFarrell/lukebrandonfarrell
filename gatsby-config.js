module.exports = {
  siteMetadata: {
    title: 'LUKE BRANDON FARRELL',
    tagline: 'ENTREPRENEURIAL, UX-ING, FULL-STACK WIZARD…',
    pages: {
      home: '/',
      podcasts: '/podcasts',
      projects: '/projects',
    },
  },
  plugins: [
    'gatsby-plugin-catch-links',
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-styled-components`,
    {
     resolve: `gatsby-source-filesystem`,
     options: {
       path: `${__dirname}/src/pages`,
       name: 'pages',
     },
   },
   {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [] // just in case those previously mentioned remark plugins sound cool :)
      }
    },
  ],
}
