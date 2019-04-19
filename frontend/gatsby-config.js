module.exports = {
  siteMetadata: {
    title: `Gatsby App: Turn Static Data Dynamic`,
    description: ``,
    author: `tannermichaelgaucher@gmail.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: `GCMS`,
        fieldName: `gcms`,
        url: `https://api-apeast.graphcms.com/v1/cju7s4frq3f1a01fcdq560ewi/master`,
      },
    },
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: `API`,
        fieldName: `api`,
        url: `http://localhost:4000`,
      },
    },
    // `gatsby-plugin-offline`,
  ],
}
