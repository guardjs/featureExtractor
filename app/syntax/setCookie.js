

var rgxmatch = require('./common/exRgxPatt')

function app(str) {
	return rgxmatch(str, /cookie\s*?=/g)
}

module.exports = app
