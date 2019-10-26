

var primitive = require('./primitive')
var getloops = require('./common/loop')
var graph = primitive(true)

function app(str) {
	var nodes = graph.node(str)
	console.log(nodes)
	if (!nodes || nodes.length < 1) return 0
	var result = nodes.reduce((prev, curr) =>
		prev += typeof curr.label !== "string"
			? 0 : curr.label.match(/\w*\s*?=\s*?[`'"](.*?)[^\\][`'"]/gi)
				? 1 : 0
		, 0)
	return result ? result : 0
}

module.exports = app
