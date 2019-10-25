

exports.command = ['count', 'total']
exports.desc = 'show the count of features'
exports.builder = {}
exports.handler = function (argv) {
  console.log(argv.app.calculateFeatureCount())
}
