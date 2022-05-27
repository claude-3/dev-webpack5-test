const { merge } = require('webpack-merge')

// const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const commonConfig = require('./webpack.common')

const outputFile = '[name].[chunkhash]'
const assetFile = '[name].[contenthash]'
const MODE = 'production'
const enabledSourceMap = MODE === 'development'

module.exports = merge(
  commonConfig({ outputFile, assetFile, enabledSourceMap }),
  {
    mode: MODE,
    // plugins: [new CleanWebpackPlugin()],
  }
)
