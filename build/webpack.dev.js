var webpack = require('webpack');
const path = require('path');

const merge = require('webpack-merge');
const base = require('./webpack.base.js');

let devConfig = {
  watchOptions: {
    ignored: /node_modules/,
  },
  devServer: { //web服务
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    open: true, //第一次打开浏览器
    hot: true, //是否监听
    historyApiFallback: true,
    proxy: {
      '/api': {
        target: 'http://localhost:9090/',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': '' // 通过pathRewrite重写地址，将前缀/api转为/
        }
      }
    },
    publicPath: "/" //访问的目录
  },
  module: {
    rules: [{
        // test: /\.(sa|c|sa)ss$/,
        // test: /\.s[ac]ss$/,
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              sourceMap: true
            }
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
          "style-loader",
          {
            loader: "css-loader",
            options: {
              sourceMap: true
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true
            }
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
    new webpack.HotModuleReplacementPlugin() //引入热更新插件
  ]
}
module.exports = merge(base, devConfig);
