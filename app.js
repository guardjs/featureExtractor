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
    opt = mid.cmd || {},
    str = opt.input || `this is a 'hello' and this iframe is var word="iframe" !`

// result the list of feature names
if (opt.isFeatureNameRequired)
    console.log(Object.keys(app).reduce((i, c) => i += ', ' + c))

if (opt.isFeatureCountRequired)
    console.log(Object.keys(app).length)

// break if no need to the features
if (!opt.isRawRequired) return void 0

// running feature extraction on input string
Object.keys(app).forEach(func => { result.push(app[func](str)) })

// export result
console.log(result.reduce((i, c) => i += ', ' + c))