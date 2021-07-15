class WordCloudData {
  constructor(inputString) {
    this.wordsToCounts = new Map();
    this.populateWordsToCounts(inputString);
  }

  populateWordsToCounts(inputString) {
    const stringLen = inputString.length
    const regex = new RegExp("[a-zA-Z'-]")
    let i = 0
    let word = ''
    while (i < stringLen && regex.test(inputString[i])) {
      word += inputString[i]
      i++
    }
    this.wordsToCounts.set(word.toLowerCase(), 1)
    word = ''
    while (i < stringLen) {
      if (regex.test(inputString[i])) {
        word += inputString[i]
      } else {
        if (word !== "") {
          if (this.wordsToCounts.has(word)) {
            this.wordsToCounts.set(word, (this.wordsToCounts.get(word))+1)
          } else {
            this.wordsToCounts.set(word, 1)
          }
          word = ''
        }
      }
      i++
    }
    if (word !== "") {
      if (this.wordsToCounts.has(word)) {
        this.wordsToCounts.set(word, (this.wordsToCounts.get(word))+1)
      } else {
        this.wordsToCounts.set(word, 1)
      }
    }
  }
}

const test = new WordCloudData('Chocolate cake for dinner and pound cake for dessert')

console.log(test.wordsToCounts)