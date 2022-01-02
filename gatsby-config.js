require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `César Vega | Programador web`,
    description: `He trabajado como desarrollador de back-end y front-end, siendo esté último mi preferido ya que se acerca más al usuario. Tengo pasión por como funcionan las cosas, una cierta obsesión por la experiencia de usuario y me satisface ver el resultado final.`,
    author: `hola.cesar.vega@gmail.com`,
    siteUrl: `https://cesarvega.dev/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
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
        name: `César Vega | Desarrollador web`,
        short_name: `César Vega`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#EC6544`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        theme_color: `#EC6544`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `limelight`,
          `Roboto Slab\:100`, // you can also specify font weights and styles
          `Quicksand\:300,400,500`, // you can also specify font weights and styles
        ],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@src": "src",
          "@components": "src/components",
          "@pages": "src/pages",
          "@images": "src/images",
          "@utils": "src/utils",
        },
        extensions: ["js"],
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          // require(`precss`),
          // require(`postcss-preset-env`)({ stage: 0 }),
        ],
      },
    },
  ],
}
