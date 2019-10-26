


/**
 * returns array of all matched string 
 * @param {code string} codeString 
 * @param {regex pattern to match} pattern 
 */
function app(codeString, pattern) {
	if (typeof codeString !== 'string') throw new Error('Param "codeString" should be code string')
	if (!pattern) throw new Error('Param "pattern" should be a pattern')

	var matches = codeString.match(pattern)
	return matches ? matches : []
}

module.exports = app