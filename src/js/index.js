function graph(num) {
  const setInstance = new Set([1, 2, 3, 4, 5]);
  const hasNum = () => setInstance.has(num)
  return hasNum
}
module.exports = graph