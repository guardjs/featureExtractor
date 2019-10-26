

var edgePattern = require('./patterns').edge

function app(strDot) {
  var list = []
  strDot.replace(edgePattern, (str, a, b, label, offset, input) => {
    var item = { from: a, to: b }
    if (label) item.label = label
    list.push(item)
  })
  return list
}

module.exports = app