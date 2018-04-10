const path = require("path");
const utils = require("../utils");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const nodeModules = utils.getExternalNodeModules();

module.exports = {
  entry: {
    "server/app": "./src/server/app.ts"
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "../../dist")
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader"
      },
      {
        test: /\.(png|jpg|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [
          {
            loader: "file-loader",
            options: { name: "[name].[ext]", context: "" }
          }
        ]
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            {
              loader: "css-loader",
              options: {
                sourceMap: true,
                importLoaders: 1
              }
            },
            "sass-loader"
          ]
        })
      },
      {
        test: /\.(woff|woff2)$/,
        use: [
          {
            loader: "file-loader",
            options: { name: "[name].[ext]", context: "" }
          }
        ]
      }
    ]
  },
  target: "node",
  externals: nodeModules
};