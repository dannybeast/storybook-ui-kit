const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const nodeExternals = require("webpack-node-externals");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
module.exports = {
  entry: "./src/index.js",
  externals: [nodeExternals()],
  output: {
    filename: "tander-ui.js",
    path: path.resolve(__dirname, "dist"),
    library: "",
    libraryTarget: "commonjs",
  },
  plugins: [new CleanWebpackPlugin(), new VueLoaderPlugin()],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
        include: path.resolve(__dirname, "./src"),
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
    ],
  },
};
