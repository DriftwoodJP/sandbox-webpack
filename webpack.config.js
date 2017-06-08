const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    app: ['./app/index.js'],
    vendors: './app/vendors.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {loader: 'babel-loader'},
          {
            loader: 'eslint-loader',
            options: {
              fix: true,
              failOnError: true,
            },
          },
        ],
      },
      {
        test: /\.(css|scss)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {sourceMap: true},
            },
            {
              loader: 'sass-loader',
              options: {sourceMap: true},
            },
          ],
        }),
      },
      {
        test: /\.(gif|png|jpg|eot|wof|woff|ttf|svg)$/,
        use: [
          {loader: 'url-loader'},
        ],
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    }),
    new HtmlWebpackPlugin(),
    new ExtractTextPlugin('stylesheets/style.css'),
  ],
};
