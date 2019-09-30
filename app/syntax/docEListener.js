

var rgxmatch = require('./common/exRgxPatt')

function app(str) {
	return rgxmatch(str, /document\.addEventListener/g)
}

module.exports = app