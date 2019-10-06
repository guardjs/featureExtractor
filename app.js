

/**
 *  Developed by easa 
 *  this is a test page by now!
 *  using yargs to parse args
 * 
 * requisites: nodejs, npm i
 * 
 * $ node app [command] --[option] --[option] so on...
 * 
 * to save result on file use "> filename" command
*/
var mid = require('./middlware/')
var app = require('./app/')

var result = [],
  opt = mid.argv || {}
samplestr = `this is 'hello' and this is var word="world" !`,
  str = opt.input || samplestr

// result the list of feature names
if (opt.isFeatureNameRequired)
  console.log(Object.keys(app).reduce((i, c) => i += ', ' + c))
// result a raw or raws of feature values
if (opt.isRawRequired) {
  Object.keys(app).forEach(func => { result.push(app[func](str)) })
  console.log(result.reduce((i, c) => i += ', ' + c))
}