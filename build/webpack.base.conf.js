var path = require('path')
var config = require('../config')
var utils = require('./utils')
var projectRoot = path.resolve(__dirname, '../')
var env = process.env.NODE_ENV

module.exports = {
  entry: {
    // 这里添加多页面入口
    index: './src/index/main.js',
    page: './src/page/main.js',
  },
  output: {
    path: config.build.assetsRoot,
    publicPath: env === 'development' ? config.dev.assetsPublicPath : config.build.assetsPublicPath,
    filename: '[name].js'
  },
  resolve: {
    extensions: ['', '.js'],
    fallback: [path.join(__dirname, '../node_modules')],
    alias: {
      'src': path.resolve(__dirname, '../src'),
      'assets': path.resolve(__dirname, '../src/assets'),
      'styles': path.resolve(__dirname, '../src/assets/styles'),
      'imgs': path.resolve(__dirname, '../src/assets/imgs'),
      'scripts': path.resolve(__dirname, '../src/assets/scripts')
    }
  },
  resolveLoader: {
    fallback: [path.join(__dirname, '../node_modules')]
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        include: projectRoot,
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 5000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  }
}
