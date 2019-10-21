

var yargs = require('yargs')

yargs.command('count', 'show the count of features', (arg) => { }, (param) => {
  opt.isFeatureCountRequired = true
}).argv