const Utils = require('./webpack/utils')

const root = process.cwd()
const path = require('path')

let pathConfig = {
  root, // 根目录
  src: path.resolve(root, './src'),
  pages: path.resolve(root, './src/pages'),
  prepack: path.resolve(root, './.skit/.temp/prepack')
}


Utils.createPrepack(pathConfig.src, pathConfig.prepack)

console.log