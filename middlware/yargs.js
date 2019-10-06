#!/usr/bin / env node

var yargs = require('yargs') // eslint-disable-line
/**
 * the option element to pass through app.js
 */
var opt = {}
/**
 * command
 * info
 * commands
 * callback function with params
 */
yargs.command('serve [d]', 'creates the features', (yargs) => {
  yargs.positional('d', {
    describe: 'directory to bind features from the javascript files insied it',
    default: './samples'
  })
  yargs.positional('r', {
    describe: 'result file, or simply use the cmd defualt command to save result on a file ">> filename"',
    default: './result.csv'
  })
}, (argv) => {
  if (argv) console.error(`GUARDJS: process is started checkout ${argv.n}`)
  opt.resultFile = argv.r
  opt.folder = argv.d
  opt.isRawRequired = argv.v
  opt.isFeatureNameRequired = argv.n
}).option('directory', {
  alias: 'd',
  default: './samples'
}).option('result', {
  alias: 'r',
  default: './result.csv'
}).option('name', {
  type: Boolean,
  alias: 'n',
  default: false
}).option('result', {
  type: Boolean,
  alias: 'v',
  default: false
}).command('feature', 'show the features list', (yargs) => { }, (param) => {
  opt.isFeatureNameRequired = true
}).argv

module.exports = opt