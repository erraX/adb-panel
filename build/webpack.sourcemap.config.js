const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const { resolve } = require('./utils');

module.exports = [
    'cheap-eval-source-map',
    'cheap-module-eval-source-map',
    'cheap-module-source-map',
    'cheap-source-map',
    'eval',
    'eval-source-map',
    'hidden-source-map',
    'inline-source-map',
    'inline-cheap-module-source-map',
    'inline-cheap-source-map',
    'nosources-source-map',
    'source-map'
].map(devtool => ({
    mode: 'development',
    devtool,
    entry: resolve('src/index.js'),
    output: {
        path: resolve('output'),
        filename: `./[name]-${devtool}.js`
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: 'css-loader'
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ]
    },
    devServer: {
        hot: true
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        // new UglifyJsPlugin(),
        new HtmlWebpackPlugin({
            title: 'AdbPanel',
            filename: `index.${devtool}.html`,
            template: resolve('./html/index.html')
        })
    ]
}));
