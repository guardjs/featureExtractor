

var yargs = require('yargs')

module.exports = app => {
  yargs.command('serve [d]', 'creates the features', (arg) => {
    arg.positional('d', {
      describe: '"data" - directory to bind features from the javascript files insied of it',
      default: './data'
    })
    arg.positional('inputLine', {
      type: 'string',
      require: true,
      describe: '"input string" - a string line as input',
      alias: 'i'
    })
  }, param => {
    if (typeof param.inputLine === 'string')
      console.log(app.extractfeaturesRaw(param.inputLine))
    else
      yargs.showHelp()
  }).argv
}

// .option('data', {
//   alias: 'd',
//   demandOption: true,
//   default: './data'
// }).option('result', {
//   alias: 'r',
//   default: './result/default.csv'
// })