const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: path.resolve(__dirname, "src/index.js"),
    output: {
        path: path.resolve(__dirname, "dist"),
        publicPath: "/",
        filename: "bundle.js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Home",
            template: path.resolve(__dirname, "src/index.html"),
            filename: "index.html"
        }),
        new ExtractTextPlugin({
            filename: "style.css",
            allChunks: true
        }),
    ],
    devServer: {
        contentBase: path.resolve(__dirname,"dist"),
        hot: true,
        compress: false,
        port: 8080,
        stats: "errors-only",
        open: true
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                                          fallback: "style-loader",
                                          use: ["css-loader","sass-loader"],
                                          publicPath: "/dist"
                                        })
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [
                    'file-loader?hash=sha512&digest=hex&name=[hash].[ext]&outputPath=images/&publicPath=images/',
                    'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false'
                ]
            },
            {
                enforce: "pre",
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "eslint-loader"
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                    presets: ['es2016', 'react']
                }
            }
        ]
    }
};