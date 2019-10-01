

var app = require('./app/index')

var str = app.exStr(`this is 'hello' and this is "world" !`)
console.log(str)

var long = app.longestWord('this is a veryLong9 word')
var long1 = app.tinestWord('this is a veryshort word')
console.log(`the longest string is ${long} long and tiniest is ${long1}`)
