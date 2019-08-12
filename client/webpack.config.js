const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { parsed: env } = require('dotenv').config({
  path: path.join(__dirname, '../.env')
});

module.exports = {
  entry: {
    entry: ['@babel/polyfill', './src/index.js']
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader'
        }
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      ENVIRONMENT: `<script>window.process = { env: ${JSON.stringify(
        env
      )} };</script>`,
      template: './src/index.ejs'
    }),
    new MiniCssExtractPlugin({
      filename: 'main.css'
    })
  ]
};
