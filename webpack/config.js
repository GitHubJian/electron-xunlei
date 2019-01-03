const root = process.cwd()
const path = require('path')

module.exports = {
  path: {
    temp: path.resolve(root, './.temp'),
    pages: path.resolve(root, './src/pages'),
    prepack: path.resolve(root, './.temp/prepack'),
    dll: path.resolve(root, './.temp/dll'),
    nodeModules: path.resolve(root, './node_modules')
  },
  conf: {
    entry: {}
  },
  dllconf: {}
}
