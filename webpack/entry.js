const glob = require('glob')
const path = require('path')
const {
  path: { pages, prepack }
} = require('./config.js')

let entry = {}

glob
  .sync(path.resolve(pages, './**/index.vue'))
  .map(v => v.split('/').slice(-2, -1)[0])
  .forEach(key => {
    entry[key] = path.resolve(prepack, `${key}.js`)
  })

module.exports = { entry }
