

var getNodes = require('./common/node')

function app(str) {
	var nodes = getNodes(str)
	if (!nodes || nodes.length < 1) return 0
	console.log(nodes)
	var result = nodes.reduce((prev, curr) =>
		prev += typeof curr.label === "string"
			&& curr.label.match(/\w*\s*?=\s*?\\?[`'"](.*?)\\?[`'"]/gi)
			? 1 : 0
		, 0)
	return result ? result : 0
}

module.exports = app
