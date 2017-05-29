const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin');
const merge = require('webpack-merge');
const base = require('./webpack.base.js');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
let prodConfig = {
    mode: 'production',
    output: {
        filename: '[name]_[contenthash:8].js',
        chunkFilename: '[name].bundle.js', // bundle.js
        path: path.resolve(__dirname, '../dist/')
    },
    module: {
        rules: [
            {
              test: /\.css$/,
              use: [
                MiniCssExtractPlugin.loader,
                {
                  loader: "css-loader",
                  options: { sourceMap: true }
                },
                {
                  loader: "postcss-loader",
                  options: {
                    plugins: [require("autoprefixer")]
                  }
                }
              ]
            },
            {
              test: /\.scss$/,
              use: [
                MiniCssExtractPlugin.loader,
                {
                  loader: "css-loader",
                  options: { sourceMap: true }
                },
                {
                  loader: "sass-loader",
                  options: { sourceMap: true }
                },
                {
                  loader: "postcss-loader",
                  options: {
                    plugins: [require("autoprefixer")]
                  }
                }
              ]
            }
          ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: `[name]_[contenthash:8].css`,
            chunkFilename: '[name]_[contenthash:8].css'
        }),
        new ParallelUglifyPlugin({
            sourceMap: true,
            exclude: /node_modules/,
            workerCount: 5,
            // 传递给 uglifyES的参数
            uglifyES: {
                output: {
                    beautify: false,
                    comments: false
                },
                compress: {
                    warnings: false,
                    drop_console: true,
                    collapse_vars: true,
                    reduce_vars: true
                }
            }
        }),
        new CleanWebpackPlugin(),
        new OptimizeCssAssetsPlugin({}),
    ]
};
module.exports = merge(base, prodConfig)