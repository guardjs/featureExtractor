/**
 *  Developed by easa 
 *  this is a test page by now!
 *  using yargs to parse args
 * requisites: nodejs, npm i
 * $ node app [command] --[option] --[option] so on...
 * to save result on file use "> filename" command
 */

var app = require('./app/')
var filehandler = require('./fileHandler/')

require('yargs')
  .middleware(argv => {
    argv.app = app
    argv.file = filehandler
    return argv
  })
  .commandDir('./command/')
  .demandCommand()
  .help()
  .argv
