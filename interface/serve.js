

var yargs = require('yargs')

module.exports = app => {
  yargs.command('serve [d]', 'creates the features', (arg) => {
    arg.positional('data', {
      alias: 'd',
      type: 'string',
      default: './data',
      describe: '"directory of JS files as input',
    })
    arg.positional('input', {
      alias: 'i',
      type: 'string',
      describe: 'input JS code text'
    })
  }, param => {
    if (typeof param.input === 'string')
      console.log(app.extractfeaturesRaw(param.inputLine))
    // else if (typeof param.data === 'string') { }
    else {
      console.log('underconstruction')
      yargs.showHelp()
    }
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