

var strs = require('./common/exStr')

function app(str) {
  strMap = strs(str)
  if (strMap.length < 1) return 0
  str200 = strMap.map(i => { if (i) if (i.length > 200) return 1 })
  return str200.length
}

module.exports = app
