

var getNodes = require('./common/node')

function app(str) {
  return getNodes(str).length
}

module.exports = app
