

var rgxmatch = require('./common/exRgxPatt')

function app(str) {
	return rgxmatch(str, /document\.write/g)
}

module.exports = app