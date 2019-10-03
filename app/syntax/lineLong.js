

// var wordMap = require('./common/parseWords')

function app(str) {
  var line = str.match(/([\w\W])\n/g)
  // var wMap = wordMap(str)
  var linelong = line.map(i => i.length)
  var avgLong = linelong.reduce((p, c) => { p += c; return p }, 0) / linelong.length
  return avgLong
  // var total = wordcount(str, wMap)
  // return ((total / ((lline && lline.length > 0) ? lline.length : 1) * 10000) | 0)
}

module.exports = app