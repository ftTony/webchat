const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    entry: path.join(__dirname, '../client/main.js'),
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': path.join(__dirname, '../client/')
        }
    },
    module: {
        // noParse: function (content) { return /jquery|lodash/.test(content); },
        rules: [
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/,
                include: [path.resolve(__dirname, '../client')],
                use: [{
                    loader: 'url-loader', // 根据图片大小，把图片转换成 base64
                    options: { limit: 10000 },
                }, {
                    loader: "image-webpack-loader",
                    options: {
                        mozjpeg: { progressive: true, quality: 65 },
                        optipng: { enabled: false },
                        pngquant: { quality: [0.65, 0.90], speed: 4 },
                        gifsicle: { interlaced: false },
                        webp: { quality: 75 }
                    }
                }]
            }, {
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
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                include: [path.resolve(__dirname, 'src/')],
                use: ['file-loader']
            }
            // {
            //     // test: /\.(sa|c|sa)ss$/,
            //     test: /\.s[ac]ss$/,
            //     // test: /\.css$/,
            //     use: [
            //         MiniCssExtractPlugin.loader,
            //         {
            //             loader: 'css-loader',
            //             options: { sourceMap: true }
            //         },
            //         {
            //             loader: 'postcss-loader',
            //             options: {
            //                 ident: 'postcss',
            //                 plugins: [
            //                     require('autoprefixer')({
            //                         'browsers': ['>1%', 'last 2 versions']
            //                     }),
            //                     require('postcss-cssnext')(),
            //                     require('cssnano')()
            //                 ]
            //             }
            //         },
            //         {
            //             loader: 'sass-loader',
            //             options: { sourceMap: true }
            //         }
            //     ]
            // }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "小武子智能聊天系统",
            filename: "index.html",
            template: path.resolve(__dirname, '../client/index.html'),
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeAttributeQuotes: true,
            }
        }),
        new CleanWebpackPlugin(),
        new VueLoaderPlugin()
    ]
}