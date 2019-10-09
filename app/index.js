

var fs = require('fs')
var rgxFeatures = require('./syntax/rgxPatternCounter')
var app = rgxFeatures()

/**
 * folders to look for feature extraction function
 */
var folders = ['syntax']
folders.forEach(folder => { load(folder) })

function load(folder) {
	var files = fs.readdirSync(__dirname + '\\' + folder)
	if (!files) throw new Error(err)
	files.forEach(file => {
		var featureName = app[file] ? (folder + file) : file
		featureName = /^([\d\w]+)\.js/gi.exec(featureName)
		if (!featureName) return 0
		// feature : feature extractor model
		app[featureName[1]] = require(`./${folder}/${file}`)
	})
}

module.exports = app