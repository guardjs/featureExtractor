

var rgxmatch = require('./common/exRgxPatt')

function app(str) {
	return rgxmatch(str, /cookie\s*?=/g).length
}

module.exports = app
