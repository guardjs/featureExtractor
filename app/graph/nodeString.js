

var getNodes = require('./common/node')

function app(str) {
	var nodes = getNodes(str)
	if (!nodes || nodes.length < 1) return 0
	var result = nodes.reduce((prev, curr) =>
		prev += typeof curr.label === "string"
			&& curr.label.match(/\w*\s*?=\s*?\\?[`'"](.*?)\\?[`'"]/g)
			? 1 : 0
		, 0)
	return result ? result : 0
}

module.exports = app
