/*globals __dirname:false */
"use strict";

var webpack = require("webpack");

module.exports = {

  devServer: {
    contentBase: __dirname,
    noInfo: false
  },

  output: {
    path: __dirname,
    filename: "main.js"
  },

  cache: true,
  devtool: "source-map",
  entry: {
    app: ["./components/entry.jsx"]
  },
  stats: {
    colors: true,
    reasons: true
  },
  resolve: {
    extensions: ["", ".js", ".jsx"]
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: [function (absPath) {
          return absPath.indexOf('node_modules') > -1 &&
            absPath.indexOf('node_modules/victory') === -1;
        }],
        loaders: ["babel-loader?stage=0"]
      }, {
        test: /\.(png|jpg)$/,
        loader: "url-loader?limit=8192"
      }
    ]
  },
  plugins: [
    new webpack.NoErrorsPlugin()
  ]
};
