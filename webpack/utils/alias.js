const glob = require('glob')
const path = require('path')
const fs = require('fs')
const { path: pathConfig } = require('./config.js')

const createAlias = src => {
  return glob
    .sync(path.resolve(src, './*'))
    .filter(v => {
      return fs.statSync(v).isDirectory()
    })
    .reduce((prev, cur) => {
      prev[path.basename(cur)] = cur

      return prev
    }, {})
}

const alias = createAlias(pathConfig.src)

module.exports = { alias }
