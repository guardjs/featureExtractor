

var yargs = require('yargs')

yargs.command('serve [d]', 'creates the features', (arg) => {
  arg.positional('d', {
    describe: '"data" - directory to bind features from the javascript files insied of it',
    default: './data'
  })
}, (argv) => {
  opt.isRawRequired = true
  opt.folder = argv.d
}).option('data', {
  alias: 'd',
  demandOption: true,
  default: './data'
}).option('result', {
  alias: 'r',
  default: './result/default.csv'
}).argv


var commandFunction = function (argv) {
  opt.isRawRequired = true
  opt.folder = argv.d
}