const slsw = require("serverless-webpack");
const path = require("path");
const nodeExternals = require("webpack-node-externals");



module.exports = {
  entry: slsw.lib.entries,
  mode: slsw.lib.webpack.isLocal ? "development" : "production",
  target: "node",
  externals: [nodeExternals()],
  optimization: {
    minimize: false,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        use: {
          loader: "file-loader",
        },
      },
    ],
  },
  resolve: {
    extensions: [".js"],
  },
  output: {
    libraryTarget: "commonjs",
    path: path.resolve(__dirname, ".webpack"),
    // filename: "handler.js",
  },
  devtool: "inline-cheap-module-source-map",
};

// module.exports = {
//   target: "node",
//   entry: slsw.lib.entries,
//   mode: slsw.lib.webpack.isLocal ? "development" : "production",
//   node: false,
//   optimization: {
//     minimize: false,
//   },

// };
