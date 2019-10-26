

var getEdges = require('./common/edge')
var getloops = require('./common/loop')

function app(str) {
  var edges = getEdges(str)
  var loops = getloops(edges, edges[0], edges[0], 0)
  return loops.length
}

module.exports = app
