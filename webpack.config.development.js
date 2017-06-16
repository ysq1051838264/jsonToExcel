/**
 * Created by hdr on 17/6/14.
 */
var webpack = require('webpack');
console.log("加载了开发环境的配置");
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
    ],
    devServer: {
        contentBase: './build',
        historyApiFallback: true,
        inline: true,
        port: 3000,
    }
};