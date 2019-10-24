

var yargs = require('yargs')

var modules = {
  serve: require('./serve'),
  count: require('./count'),
  list: require('./list')
}

yargs.command('$0', `commands are: ${Object.keys(modules).join(', ')}`, (arg) => { }, (param) => {
  // FIXME: these are unnecessary
  var commands = Object.keys(modules)
  var condition = param._.filter(p => commands.includes(p)).length > 0
  // log : console.log(param, condition)
  if (condition) return void 0
  yargs.showHelp()
})


module.exports = (businessApplication) => {
  Object.keys(modules).forEach(m => modules[m](businessApplication))
}