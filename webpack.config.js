var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
    mode: "production", 
    entry: "./src/index.js",
    output: {
        // path: path.resolve(__dirname, './dist'),
        // filename: '[name].[contenthash].js'
        filename: 'index.[contenthash].js'
    },
    plugins: [new HtmlWebpackPlugin({  // Also generate a test.html
        title: '立',
        template: 'src/assets/index.html'
      })],
    module: {
    rules: [
        {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
        },
    ],
    },
};