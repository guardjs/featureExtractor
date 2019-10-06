

var rgxmatch = require('./common/exRgxPatt')

function app(str) {
	return rgxmatch(str, /0[xX][0-9a-fA-F]+/g).length
}

module.exports = app
