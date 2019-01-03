const LIBRARY_NAME = '__[name]_[chunkhash]__'
/* -------------------- */
const path = require('path')
const {
  path: pathConfig,
  dllConf: { entry, outputPath }
} = require('./config.js')
const { NODE_ENV } = process.env
const [isDevelopment, isProduction] = [
  NODE_ENV === 'development',
  NODE_ENV === 'production'
]
/* -------------------- */
const webpack = require('webpack')
const extractCSS = require('./extract.js')
const AssetsWebpackPlugin = require('assets-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const webpackConfig = {
  mode: !isProduction ? 'development' : 'production',
  entry,
  output: {
    filename: 'js/[name].js',
    path: outputPath,
    publicPath: '/',
    library: LIBRARY_NAME
  },
  resolve: {
    extensions: ['.js'],
    modules: [pathConfig.nodeModules]
  },
  resolveLoader: {
    modules: [pathConfig.nodeModules]
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: extractCSS.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: true
              }
            }
          ]
        })
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff2?|eot|ttf|otf)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: 'images/[name].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new webpack.EnvironmentPlugin(['NODE_ENV']),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment\/min$/),
    extractCSS,
    new webpack.DllPlugin({
      path: path.resolve(outputPath, '[name].json'),
      name: LIBRARY_NAME
    }),
    new AssetsWebpackPlugin({
      path: outputPath,
      filename: 'index.json',
      prettyPrint: true
    }),
    new CleanWebpackPlugin([outputPath], {
      root: pathConfig.root,
      verbose: false
    })
  ],
  stats: {
    colors: true,
    modules: false,
    children: false,
    chunks: false
  }
}

module.exports = { webpackConfig }
