

var rgxmatch = require('./common/exRgxPatt')

function app(str) {
	return rgxmatch(str, /\s/g).length
}

module.exports = app
