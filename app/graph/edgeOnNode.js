

var primitive = require('./primitive/')
var graph = primitive(true)

function app(str) {
  var nodes = graph.node(str).length
  if (nodes >= 0)
    return (graph.edge(str).length / nodes * 10) | 0
  return 0
}

module.exports = app
