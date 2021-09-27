  const checkLetterFrequency = (phrase) => {
    if (typeof phrase !== 'string') {
      throw new TypeError('The first param should be a string')
    }
    const result = {}
    if (phrase.length > 0) {
      for (let i = 0; i < phrase.length; i++) {
        const word = phrase[i]
        if (/\s/.test(word) || /^[0-9]+$/.test(word)) continue
        result[word] = (!result[word]) ? 1 : result[word] + 1
      }
    }
    return Object.entries(result).map(x=>x.join("")).join("")
  }
  export { checkLetterFrequency }