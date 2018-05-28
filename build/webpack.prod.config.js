const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const {resolve} = require('./utils');

let configs = {
    mode: 'production',
    devtool: 'none',
    entry: [resolve('src/index.js')],
    target: 'electron-renderer',
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
                test: /\.(svg|jpeg|png)$/,
                exclude: /node_modules/,
                use: [
                    {
                      loader: 'url-loader',
                      options: {
                          limit: 8192
                      }
                    }
                ]
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