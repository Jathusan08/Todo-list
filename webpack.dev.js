const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
    watchFiles: ["src/**/*.html"], // Add your HTML template files here
    port: 4000, // Change the default port - this is just to get the local storage rather than running different port
  },
});
