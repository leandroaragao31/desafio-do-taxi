module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "desafio-do-taxi",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "alldata",
        fieldName: "alldata",
        url: "https://api-us-east-1.graphcms.com/v2/ckv72svcj50n901xlf6u6as9n/master",
      },
    }
  ],
};