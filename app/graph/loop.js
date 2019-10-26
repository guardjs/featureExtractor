

var primitive = require('./primitive')
var getloops = require('./common/loop')
var graph = primitive(true)

function app(str) {
  var edges = graph.edge(str)
  var loops = getloops(edges, edges[0], edges[0], 0)
  return loops.length
}

module.exports = app
