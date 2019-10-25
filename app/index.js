

var syntaxesFeatures = require('./syntax')
var graphesFeatures = require('./graph')

var features = Object.assign(syntaxesFeatures, graphesFeatures)

var kys = Object.keys(features)

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
