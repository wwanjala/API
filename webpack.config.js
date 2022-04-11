const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    API: "./js/script.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "script.bundle.js",
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 3000,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};
