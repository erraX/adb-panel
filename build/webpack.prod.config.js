const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const {resolve} = require('./utils');

let configs = {
    mode: 'production',
    devtool: 'none',
    entry: [resolve('src/index.js')],
    output: {
        path: resolve('output'),
        filename: 'adb.bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ]
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new UglifyJsPlugin(),
        new HtmlWebpackPlugin({
            title: 'AdbPanel',
            filename: 'index.html',
            template: resolve('./html/index.html')
        })
    ]
};

module.exports = configs;