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
// var mid = require('./utility/')
var cmd = require('./interface/')
var app = require('./app/')

// bind-chain(app).interface(cmd).file(mid.file). so on 

cmd(app)

/*
var opt = mid.cmd || {}
opt.input = opt.input || `this is a 'hello' and this iframe is var word="iframe" !`

var app = require('./app/')(opt)
console.log(app)
*/