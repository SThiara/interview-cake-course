function findRotationPoint(words) {
  
  let currentIndex = Math.floor(words.length / 2)
  let minIndex = 0
  let maxIndex = words.length - 1
  
  let word = words[currentIndex]
  
  while (maxIndex > minIndex) {
    if (words[currentIndex] > words[currentIndex + 1]) {
      return currentIndex + 1
    }
    
    if (words[maxIndex] < words[currentIndex]) {
      minIndex = currentIndex
      currentIndex = Math.floor((maxIndex + minIndex) / 2)
    } else {
      maxIndex = currentIndex
      currentIndex = Math.floor((maxIndex + minIndex) / 2)
    }
  }

  return currentIndex;
}

function findRotationPoint(words) {
  const firstWord = words[0];

  let floorIndex = 0;
  let ceilingIndex = words.length - 1;

  while (floorIndex < ceilingIndex) {

    // Guess a point halfway between floor and ceiling
    const guessIndex = Math.floor(floorIndex + ((ceilingIndex - floorIndex) / 2));

    // If guess comes after first word or is the first word
    if (words[guessIndex] >= firstWord) {

      // Go right
      floorIndex = guessIndex;
    } else {

      // Go left
      ceilingIndex = guessIndex;
    }

    // If floor and ceiling have converged
    if (floorIndex + 1 === ceilingIndex) {

      // Between floor and ceiling is where we flipped to the beginning
      // so ceiling is alphabetically first
      break;
    }
  }

  return ceilingIndex;
}