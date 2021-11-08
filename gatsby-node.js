const path = require("path");
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        assets: path.resolve(__dirname, "src/assets"),
        components: path.resolve(__dirname, "src/components"),
        hooks: path.resolve(__dirname, "src/hooks"),
        layouts: path.resolve(__dirname, "src/layouts"),
        pages: path.resolve(__dirname, "src/pages"),
        provider: path.resolve(__dirname, "src/provider"),
        templates: path.resolve(__dirname, "src/templates"),
      },
    },
  });
};
