

exports.command = ['list', 'features']
exports.desc = 'show the features list'
exports.builder = {}
exports.handler = function (argv) {
  console.log(argv.app.getListOfFeaturesName())
}
