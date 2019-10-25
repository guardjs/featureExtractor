module.exports = {
  edge: /n(\d+)\s->\sn(\d+)\s*?(?:\[[\w="]*,?\s*?label=([^\]]*)\])? /g,
  node: /n(\d+)\s\[label=([^\]]*)\]/g
}