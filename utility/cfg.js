

const esgraph = require('esgraph')
const esprima = require('esprima')

/**
 * returns a dot graph as string
 * @param {A code string as string} sourceCode 
 */
function app(sourceCode) {
  if (typeof sourceCode !== 'string') return false
  try {

    const cfgObj = esgraph(esprima.parse(sourceCode, { range: true }))
    const dotstr = esgraph.dot(cfgObj, { counter: 0, source: sourceCode })
    return dotstr

  } catch (e) { return false; }
}

module.exports = app
