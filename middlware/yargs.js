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
    default: './sample'
  })
}, (argv) => {
  opt.isRawRequired = true
  opt.folder = argv.d
}).option('directory', {
  alias: 'd',
  demandOption: true,
  default: './sample'
}).option('result', {
  alias: 'r',
  default: './result/default.csv'
}).command('feature', 'show the features list', (yargs) => { }, (param) => {
  opt.isFeatureNameRequired = true
}).command('fcount', 'show the count of features', (yargs) => { }, (param) => {
  opt.isFeatureCountRequired = true
}).argv

module.exports = opt