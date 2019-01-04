const root = process.cwd()
const path = require('path')
const {
  path: { temp },
  loo
} = require('./../config.js')

let pathConfig = {
  root, // 根目录
  src: path.resolve(root, './src'),
  pages: path.resolve(root, './src/pages'),
  prepack: path.resolve(temp, './prepack')
}

module.exports = {
  path: pathConfig
}
