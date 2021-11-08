module.exports = {
  siteMetadata: {
    siteUrl: "https://www.uxu.pl",
    title: "UXU | Paweł Niedźwiecki | Portfolio",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/assets/img/icon.png",
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `https://uxu-portfolio.herokuapp.com`,
        queryLimit: 1000,
        collectionTypes: [`histories`, `portfolios`, `tags`],
        singleTypes: [`data-contact`],
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/assets/",
      },
      __key: "images",
    },
  ],
};
