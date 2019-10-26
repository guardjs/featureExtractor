

const esgraph = require('esgraph')
const esprima = require('esprima')

/**
 * returns a dot graph as string
 * @param {A code string as string} sourceCode 
 */
function app(sourceCode) {
  if (typeof sourceCode !== 'string') throw new Error('Param "sourceString" should be code string')
  try {

    const cfgObj = esgraph(esprima.parse(sourceCode, { range: true }))
    const dotstr = esgraph.dot(cfgObj, { counter: 0, source: sourceCode })
    return dotstr

  } catch (e) { return '' }
}

module.exports = app
