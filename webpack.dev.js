const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common')

const outputFile = '[name]'
const assetFile = '[name]'
const MODE = 'development'
const enabledSourceMap = MODE === 'development'

module.exports = merge(
  commonConfig({ outputFile, assetFile, enabledSourceMap }),
  {
    mode: MODE,
    // watch: true,
    devServer: {
      static: 'dist',
      open: true,
      client: {
        // warnigがある時の画面表示を阻止
        overlay: {
          warnings: false,
        },
      },
    },
  }
)
