/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Zakaria Reggab",
        short_name: "Zakaria",
        start_url: "/",
        background_color: "#0A0908",
        theme_color: "#0A0908",
        display: "standalone",
        icon: "src/images/184003857_506318487171458_7783588791377115635_n.png",
      },
    },
    "gatsby-plugin-postcss",
    "gatsby-plugin-react-helmet",
  ],
}
