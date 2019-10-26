

var primitive = require('./primitive')
var getloops = require('./common/loop')
var graph = primitive(true)

function app(str) {
  var edges = graph.edge(str)
  var loops = getloops(edges, edges[0], edges[0], 0)
	var result = loops.reduce((prev, curr) => {
		if (!curr.length) return prev
		return Math.max(prev, curr.length)
	}, 0)
	return result ? result : 0
}

module.exports = app
