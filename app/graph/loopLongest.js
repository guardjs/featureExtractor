

var getEdges = require('./common/edge')
var getloops = require('./common/loop')

function app(str) {
  var edges = getEdges(str)
  var loops = getloops(edges, edges[0], edges[0], 0)
	var result = loops.reduce((prev, curr) => {
		if (!curr.length) return prev
		return Math.max(prev, curr.length)
	}, 0)
	return result ? result : 0
}

module.exports = app
