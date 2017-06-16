/**
 * Created by hdr on 17/6/14.
 */

var webpack = require('webpack');
console.log("加载了正式环境的配置");
module.exports = {
    entry: [__dirname + "/app/main.js"],
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
        new webpack.DefinePlugin({ __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false')) }),
        new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } }),
        new webpack.optimize.OccurrenceOrderPlugin(),
    ],
    devServer: {
        contentBase: './build',
        historyApiFallback: true,
        inline: true,
        port: 8081,
    }
};