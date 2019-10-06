

var rgxmatch = require('./common/exRgxPatt')

function app(str) {
	return rgxmatch(str, /u[0-9a-z]{4,8}/gi).length
}

module.exports = app
