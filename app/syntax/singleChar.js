

var rgxmatch = require('./common/exRgxPatt')

function app(str) {
	return rgxmatch(str, /\b\w\b/g).length
}

module.exports = app
