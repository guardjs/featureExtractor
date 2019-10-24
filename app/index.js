var syntaxesFeatures = require('./syntax')

var kys = Object.keys(syntaxesFeatures)

/**
 * getListOfFeaturesName, 
 * calculateFeatureCount, 
 * extractfeaturesRaw
 */
module.exports = {
	getListOfFeaturesName: () => kys.reduce((res, name) => res += ', ' + name),
	calculateFeatureCount: () => kys.length,
	extractfeaturesRaw: inputString => kys.reduce((res, model) =>
		res += `${res !== '' ? ', ' : ''}${syntaxesFeatures[model](inputString)}`
		, '')
}
