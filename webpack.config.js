const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');
const GasWebpackPlugin = require('gas-webpack-plugin');

module.exports = [

  {
    entry: './src/client/index.js',
    output: {
      filename: 'index.js'
    },

    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        }
      ]
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: './src/client/index.html',
        inlineSource: ['index.js'],
      }),
      new HtmlWebpackInlineSourcePlugin(),
    ]
  },

  {
    entry: './src/server/Code.js',
    output: {
      filename: 'Code.gs'
    },

    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        }
      ]
    },

    plugins: [
      new GasWebpackPlugin()
    ]

  }

];
