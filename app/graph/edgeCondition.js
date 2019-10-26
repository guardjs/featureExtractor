

var primitive = require('./primitive')
var getloops = require('./common/loop')
var graph = primitive(true)

function app(str) {
	var edges = graph.edge(str)
	console.log(edges)
	if (!edges || edges.length < 1) return 0
	var result = edges.reduce((prev, curr) =>
		prev += ((curr.label == "true") ? 1 : 0)
		, 0)
	return result ? result : 0
}

module.exports = app
