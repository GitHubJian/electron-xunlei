const root = process.cwd()
const path = require('path')

const pathConfig = {
  root, // 根目录
  temp: path.resolve(root, './.skit'), // 根目录
  pages: path.resolve(root, './src/pages'), // 
  prepack: path.resolve(root, './.skit/prepack'), //
  dll: path.resolve(root, './.skit/dll'), // dll文件夹
  dist: path.resolve(root, './dist'), // 
  nodeModules: path.resolve(root, './node_modules'), // 
  favicon: path.resolve(root, './favicon.ico') // 
}

module.exports = {
  path: pathConfig,
  conf: {
    entry: {},
    outputPath: pathConfig.dist,
    alias: {}
  },
  dllConf: {
    entry: {
      vendor: ['vue']
    },
    outputPath: pathConfig.dll
  }
}
