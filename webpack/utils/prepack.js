const { path: pathConfig } = require('./config.js')
const glob = require('glob')
const path = require('path')
const fse = require('fs-extra')
const fs = require('fs')

const createContent = p => {
  return [
    `import Vue from 'vue';`,
    `import entry from '${p}/index.vue';`,
    '',
    `export default new Vue({`,
    `    el: '#app',`,
    `    render: h => h(entry)`,
    `})`
  ].join('\n')
}

const prepack = () => {
  return glob
    .sync(path.resolve(pathConfig.pages, './**/index.vue'))
    .forEach(entry => {
      let p = entry
        .split('/')
        .slice(0, -1)
        .join('/')

      let key = entry.split('/').slice(-2, -1)[0]
      let filePath = path.resolve(pathConfig.prepack, `${key}.js`)
      fse.outputFileSync(filePath, createContent(p), {
        encoding: 'utf-8'
      })
    })
}

module.exports = { prepack }
