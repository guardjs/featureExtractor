

var yargs = require('yargs')

module.exports = app => {
  yargs.command('count', 'show the count of features', (arg) => { }, (param) => {
    console.log(app.calculateFeatureCount())
  }).argv
}