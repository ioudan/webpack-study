const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: "development",
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
    },
    entry: "./src/index.js",
    output: {
        // path: path.resolve(__dirname, './dist'),
        // filename: '[name].[contenthash].js'
        filename: 'index.[contenthash].js'
    },
    plugins: [new HtmlWebpackPlugin({  // Also generate a test.html
        title: '立-dev',
        template: 'src/assets/index.html'
    }), new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        // filename: '[name].[contenthash].css',
        filename: 'index.[contenthash].css',
        chunkFilename: '[id].[contenthash].css',
        ignoreOrder: false, // Enable to remove warnings about conflicting order
      })],
    module: {
        rules: [
            {
                test: /\.css$/i,
                // use: [
                //     {
                //       loader: MiniCssExtractPlugin.loader,
                //       options: {
                //         // you can specify a publicPath here
                //         // by default it uses publicPath in webpackOptions.output
                //         publicPath: '../',
                //       },
                //     },
                //     'css-loader',
                //   ],
                use: ["style-loader", "css-loader"],
            },
        ],
    },
};