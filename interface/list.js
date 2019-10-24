

var yargs = require('yargs')


module.exports = app => {
  yargs.command('list', 'show the features list', (arg) => { }, (param) => {
    console.log(app.getListOfFeaturesName())
  }).argv
}
