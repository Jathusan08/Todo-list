const path = require("path");

module.exports = {
  entry: {
    // Multiple entry points for javascript file to be bundled
    app: "./src/app.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true, // Ensures the output directory is cleaned before each build
  },
  module: {
    rules: [
      {
        // css files
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
