

var getEdges = require('./common/edge')
var getNodes = require('./common/node')

function app(str) {
  var nodes = getNodes(str).length
  if (nodes >= 0)
    return (getEdges(str).length / nodes * 10) | 0
  return 0
}

module.exports = app
