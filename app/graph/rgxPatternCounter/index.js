

var rgxmatch = require('../../syntax/common/exRgxPatt')
var cfg = require('../common/cfg')
var features = require('./patterns')

function app() {
  var result = {}
  Object.keys(features).forEach(model => {
    var rgx = features[model]
    result[model] = str => rgxmatch(cfg(str), rgx).length
  })
  return result
}

module.exports = app