/**
 * Created by hdr on 17/6/14.
 */
const webpack = require('webpack');

const CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: {
        bundle: __dirname + "/app/main.js",
        vendor: ['react', 'react-dom'],
    },
    output: {
        path: __dirname + "/build",
        filename: "[name]-[hash].js"
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
        new webpack.DefinePlugin({__DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))}),
        new webpack.optimize.UglifyJsPlugin({compress: {warnings: false}}),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new CommonsChunkPlugin({
            name: 'vendor',
            minChunks: Infinity
        }),
        new HtmlWebpackPlugin({
            template: __dirname + "/app/index.tmpl.html"//new 一个这个插件的实例，并传入相关的参数
        })
    ],
    devServer: {
        contentBase: './build',
        historyApiFallback: true,
        inline: true,
        port: 8081,
    }
};