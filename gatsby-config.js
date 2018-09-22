module.exports = {
  siteMetadata: {
    title: 'LUKE BRANDON FARRELL',
    tagline: 'ENTREPRENEURIAL, UX-ING, FULL-STACK WIZARD…',
    pages: {
      home: '/',
    },
  },
  plugins: [
    'gatsby-plugin-catch-links',
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
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
        plugins: [
          `gatsby-remark-copy-images`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 950,
              backgroundColor: 'transparent',
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
          },
        },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./src/favicon.png",
        injectHTML: true,
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          favicons: true,
          firefox: true,
        }
      }
    }
  ],
}
