module.exports = {
  siteMetadata: {
    title: `Schmidtke Law`,
    description: `A Law Corporation`,
    author: `@gatsbyjs`,
    menuLinks:[
      {
        name:'About',
        link:'/about',
        },
     
     {
      name:'Contact',
      link:'/contact'
      },
      {
      name:'Services',
      link:'/services'
      },
      {
        name:'Location',
        link:'/location'
        },
        {
          name:'Hours',
          link:'/hours'
          }
      ]
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
        icon: `src/images/logo-white.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
