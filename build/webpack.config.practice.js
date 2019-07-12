const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
// 把非JS的文件打包成一个单独的文件,例如从外部引入的css
// const ExtractPlugin = require('extract-text-webpack-plugin')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.base')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

// const isDev = process.env.NODE_ENV === 'development'

let config
const devServer = {
  port: 8001,
  host: '0.0.0.0',
  overlay: {
    errors: true
  },
  hot: true
}

const defaultPlugins = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: '"development"'
    }
  }),
  new HTMLPlugin({ // 在dist生成index.html文件
    title: 'todo',
    template: path.join(__dirname, '../practice/template.html')
  }),
  new VueLoaderPlugin()
]

config = merge(baseConfig, {
  entry: path.join(__dirname, '../practice/index.js'),
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
  resolve: {
    alias: {
      'vue': path.join(__dirname, '../node_modules/vue/dist/vue.esm.js')
    }
  },
  plugins: defaultPlugins.concat([
    new webpack.HotModuleReplacementPlugin()
    // new webpack.NoEmitOnErrorsPlugin() webpack4被取消
  ])
})

module.exports = config
