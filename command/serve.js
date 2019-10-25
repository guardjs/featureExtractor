

exports.command = ['serve', 'run', 'start', 'extract']
exports.desc = 'extract the features'
exports.builder = (arg) => {
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
}
exports.handler = argv => {
  if (typeof argv.input === 'string')
    console.log(argv.app.extractfeaturesRaw(argv.inputLine))
  // else if (typeof argv.data === 'string') { }
  else {
    console.log('underconstruction')
  }
}