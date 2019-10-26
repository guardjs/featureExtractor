

var getEdges = require('./common/edge')

function app(str) {
  return getEdges(str).length
}

module.exports = app
