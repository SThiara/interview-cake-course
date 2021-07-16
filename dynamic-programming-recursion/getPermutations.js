function getPermutations(string) {

  if (string.length > 1) {
    const tempSet = getPermutations(string.substring(1))
    const returnSet = new Set();
    for (const item of tempSet) {
      const splitStr = item.split('')
      for (let i = 0; i < item.length + 1; i++) {
        let newStr = [...splitStr]
        newStr.splice(i, 0, string[0])
        returnSet.add(newStr.join(''))
      }
    }
    return returnSet
  }

  const initSet = new Set();
  initSet.add(string)
  return initSet
}
