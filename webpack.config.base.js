const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: 'index.[contenthash].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: '立',
            template: 'src/assets/index.html'
        })],
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                  {
                    loader: 'file-loader',
                  },
                ],
              },
            {
                test: /\.styl$/,
                // loader: "less-loader",
                use: ['style-loader','css-loader','stylus-loader'],
            },
            {
                test: /\.less$/,
                // loader: "less-loader",
                use: ['style-loader','css-loader','less-loader'],
            },
            {
                test: /\.scss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    {
                        loader: 'sass-loader',
                        options: {
                            implementation: require('dart-sass'),
                        },
                    },
                ],
            },
        ],
    },
};


