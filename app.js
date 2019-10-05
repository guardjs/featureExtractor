

/** this is a test page by now */
var app = require('./app/index')

var result = [], str = `this is 'hello' and this is var word="world" !`

// call all functions
Object.keys(app).forEach(func => { result.push(app[func](str)) })

// log all results
console.log(`-----features: \n ${Object.keys(app).reduce((i, c) => i += ', ' + c)}`)
console.log(`-----feature-raw: \n ${result.reduce((i, c) => i += ', ' + c)}`)
