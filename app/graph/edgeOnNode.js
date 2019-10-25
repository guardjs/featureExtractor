

var primitive = require('./primitive/')
var p = primitive(true)

function app(str) {
  console.log(p.edge(str), p.node(str))
}

module.exports = app