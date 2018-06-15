module.exports = {
  siteMetadata: {
    title: 'LUKE BRANDON FARRELL',
    tagline: 'ENTREPRENEURIAL, UX-ING, FULL-STACK WIZARD…',
    pages: {
      home: '/',
      projects: '/projects',
      experience: '/experience',
    },
  },
  plugins: [
    'gatsby-plugin-catch-links',
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-netlify-cms`,
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
