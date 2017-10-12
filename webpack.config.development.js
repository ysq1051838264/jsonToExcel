/**
 * Created by hdr on 17/6/14.
 */
var webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin")
module.exports = {
    entry: ['webpack/hot/dev-server', __dirname + "/app/main.js"],
    devtool: 'eval-source-map',

    output: {
        path: __dirname + "/build",
        filename: "bundle.js"
    },

    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            use: ['babel-loader'],
            exclude: /node_modules/,
        }, {
            test: /\.(png|jpg)/,
            use: 'url-loader?limit=8192',
        }, {
            test: /\.css/,
            use: [
                'style-loader',
                {loader: 'css-loader', options: {importLoaders: 1}},
            ],
            exclude: /node_modules/,
        }]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: __dirname + "/app/index.tmpl.html"//new 一个这个插件的实例，并传入相关的参数
        })
    ],
    devServer: {
        contentBase: './build',
        historyApiFallback: true,
        inline: true,
        port: 3000,
    }
};