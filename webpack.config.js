var webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');
// const ClearWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin');

module.exports = {
    entry: './client/main.js',
    output: {
    },
    devServer: {  //web服务
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        open: true, //第一次打开浏览器
        hot: true, //是否监听
        publicPath: "/" //访问的目录
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': path.join(__dirname, 'src')
        }
    },
    module: {
        rules: [{
            test: /\.vue$/,
            use: [{
                loader: 'vue-loader',
                options: {
                    compilerOptions: {
                        preserveWhitespace: false
                    }
                }
            }]
        }, {
            // js babel处理
            test: /\.js$/,
            use: ['babel-loader']
            /*,
            exclude: /node_modules/*/
        }, {
            // 图片处理
            test: /\.(png|svg|jpg|gif)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: '[name].[ext]'
                }
            }]
        }, {
            test: /\.s[ac]ss$/,
            // test: /\.css$/,
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader',
                'sass-loader',
                {
                    loader: 'postcss-loader',
                    options: {
                        ident: 'postcss',
                        plugins: [
                            require('autoprefixer')({
                                'browsers': ['>1%', 'last 2 versions']
                            }),
                            require('postcss-cssnext')(),
                            require('cssnano')()
                        ]
                    }
                }
            ]
        }]
    },
    plugins: [
        // new ClearWebpackPlugin(),
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
        new MiniCssExtractPlugin({
            filename: `[name]_[contenthash:8].css`,
            chunkFilename: '[name]_[contenthash:8].css'
        }),
        new VueLoaderPlugin(),
        //将js自动插入到html里
        new HtmlWebpackPlugin({
            template: './client/index.html',
            filename: 'index.html',
        }),
        new webpack.HotModuleReplacementPlugin() //引入热更新插件
    ]
}