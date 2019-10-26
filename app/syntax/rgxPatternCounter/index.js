

var rgxmatch = require('../common/exRgxPatt')
var features = require('./patterns')

function app() {
  var result = {}
  Object.keys(features).forEach(model => {
    var rgx = features[model]
    result[model] = str => rgxmatch(str, rgx).length
  })
  return result
}

module.exports = app