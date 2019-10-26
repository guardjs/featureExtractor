

var getEdges = require('./common/edge')

function app(str) {
	var edges = getEdges(str)
	if (!edges || edges.length < 1) return 0
	var edgExps = edges.reduce((prev, curr) =>
		prev += curr.label == "exception" ? 1 : 0
		, 0)
	return edgExps.length / edges.length | 0
}

module.exports = app
