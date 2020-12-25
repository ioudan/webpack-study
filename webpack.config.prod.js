const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const base = require('./webpack.config.base.js')

module.exports = {
  ...base,
    mode: "production",
    plugins: [
      ...base.plugins,
      new MiniCssExtractPlugin({
        filename: 'index.[contenthash].css',
        chunkFilename: '[id].[contenthash].css',
        ignoreOrder: false, // Enable to remove warnings about conflicting order
      })],
    module: {
        rules: [
          // ...base.module.rules,
            {
                test: /\.css$/i,
                use: [
                    {
                      loader: MiniCssExtractPlugin.loader,
                      options: {
                        publicPath: '../',
                      },
                    },
                    'css-loader',
                  ],
            },
        ],
    },
};