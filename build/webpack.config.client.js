const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
// 把非JS的文件打包成一个单独的文件,例如从外部引入的css
const ExtractPlugin = require('extract-text-webpack-plugin')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.base')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const VueClientPlugin = require('vue-server-renderer/client-plugin')

const isDev = process.env.NODE_ENV === 'development'

let config
const devServer = {
  port: 8000,
  host: '0.0.0.0',
  overlay: {
    errors: true
  },
  historyApiFallback: { // 加上这个配置的目的是防止再次刷新页面,报404
    index: '/public/index.html' // 这个里面的public是来自,output中publicPath的配置,如果没配则不添加
  },
  hot: true
}

const defaultPlugins = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: isDev ? '"development"' : '"production"'
    }
  }),
  new HTMLPlugin({ // 在dist生成index.html文件
    title: 'todo',
    template: path.join(__dirname, '../client/index.html')
  }),
  new VueLoaderPlugin(),
  new VueClientPlugin()
]

if (isDev) { // 开发环境
  config = merge(baseConfig, {
    devtool: '#cheap-module-eval-source-map',
    module: {
      rules: [
        {
          test: /\.styl/,
          use: [
            'vue-style-loader',
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true
              }
            },
            'stylus-loader'
          ]
        }
      ]
    },
    devServer,
    plugins: defaultPlugins.concat([
      new webpack.HotModuleReplacementPlugin()
      // new webpack.NoEmitOnErrorsPlugin() webpack4被取消
    ])
  })
} else { // 生产环境
  config = merge(baseConfig, {
    entry: {
      app: path.join(__dirname, '../client/index.js'),
      vendor: ['vue']
    },
    output: {
      filename: '[name].[chunkhash:8].js'
    },
    module: {
      rules: [
        {
          test: /\.styl/,
          use: ExtractPlugin.extract({
            fallback: 'vue-style-loader',
            use: [
              'css-loader',
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: true
                }
              },
              'stylus-loader'
            ]
          })
        }
      ]
    },
    plugins: defaultPlugins.concat([
      // new ExtractPlugin('styles.[contentHash:8].css') 因为webpack4.3有contentHash关键字所以用
      // [md5:contentHash:hex:8]替代以前的
      new ExtractPlugin('styles.[md5:contentHash:hex:8].css')
      // new webpack.optimize.CommonsChunkPlugin({
      //   name: 'vendor'
      // }),
      // new webpack.optimize.CommonsChunkPlugin({
      //   name: 'runtime'
      // })
    ]),
    optimization: { // webpack4新增
      splitChunks: {
        chunks: 'all'
      },
      runtimeChunk: true
    }
  })
}

module.exports = config
