

var path = require('path')
var fs = require('fs')
var app = {}

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

		app[featureName[1]] = require(`./${folder}/${file}`)
	})
}

// fs.readdirSync(path.resolve(folder), (err, files) => {


module.exports = app