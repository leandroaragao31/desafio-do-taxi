module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "desafio-do-taxi",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-smoothscroll`,
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "alldata",
        fieldName: "alldata",
        url: "https://api-us-east-1.graphcms.com/v2/ckv72svcj50n901xlf6u6as9n/master",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: 'src/images/ponto-de-taxi.png',
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Roboto:wght: 100`,
          `limelight`,
          `source sans pro: 300,400,400i,700`, // you can also specify font weights and styles
          `Nunito+Sans: 200`,
          `Montserrat: 700`
        ],
        display: 'swap'
      }
    }
  ],
};