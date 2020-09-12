module.exports = {
  siteMetadata: {
    title: `Dennis Morello`,
    description: `Notes about JavaScript, ReactJS and more about Front-End Development by Dennis Morello.`,
    author: `Dennis Morello`,
    social: {
      twitter: "https://twitter.com/dennismorello",
      github: "https://github.com/dennismorello",
      linkedin: "https://linkedin.com/in/dennismorello",
      instagram: "https://instagram.com/dennismrl",
      mail: "mailto:dennismorello@gmail.com",
    },
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
        name: `Dennis Morello`,
        short_name: `morello.dev`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-postcss`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
