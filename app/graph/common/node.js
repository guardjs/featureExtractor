

var nodePattern = require('./patterns').node

function app(strDot) {
  var list = []
  strDot.replace(nodePattern, (str, a, b, offset, input) => {
    list.push({ id: a, lable: b })
  })
  return list
}

module.exports = app