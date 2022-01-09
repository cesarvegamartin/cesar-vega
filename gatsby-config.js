require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `César Vega`,
    description: `He trabajado como desarrollador de back-end y front-end, siendo esté último mi preferido ya que se acerca más al usuario. Tengo pasión por cómo funcionan las cosas, una cierta obsesión por la experiencia de usuario y me satisface ver el resultado final.`,
    author: `hola.cesar.vega@gmail.com`,
    siteUrl: `https://cesarvega.dev/`,
  },
  plugins: [
    { resolve: `gatsby-plugin-react-helmet` },
    { resolve: `gatsby-plugin-image` },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    { resolve: `gatsby-transformer-sharp` },
    { resolve: `gatsby-plugin-sharp` },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `César Vega`,
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
    { resolve: `gatsby-plugin-offline` },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
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

    // MDX
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `sections`,
        path: `${__dirname}/src/sections`,
      },
    },
    {
      resolve: "gatsby-plugin-page-creator",
      options: {
        path: `${__dirname}/src/sections`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        defaultLayouts: {
          default: require.resolve("./src/components/layout.js"),
          sections: require.resolve("./src/components/layout.js"),
        },
      },
    },
  ],
}
