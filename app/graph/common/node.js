

var nodePattern = require('./patterns').node

function app(strDot) {
  var list = []
  strDot.replace(nodePattern, (str, id, label, offset, input) => {
    list.push({ id: id, label: label})
  })
  return list
}

module.exports = app