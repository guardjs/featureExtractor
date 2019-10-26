

function getloops(edges, init, current, timeTolive) {
  if (timeTolive > 10) return []
  let clungs = edges.filter(edge => current.to === edge.from)
  if (!clungs || clungs.length < 1) return []
  let loops = []
  clungs.forEach(next => {
    if (next.to == init.to && next.from == init.from) return [next.from]
    let recursive = getloops(edges, init, next, timeTolive + 1)
    if (recursive.length > 0) recursive.unshift(next.from)
    if (recursive[0] === recursive[recursive.length - 1]) loops.push(recursive)
  })
  return loops
}

module.exports = getloops