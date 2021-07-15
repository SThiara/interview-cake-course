// function hasPalindromePermutation(theString) {

//   const palinHash = {}

//   for (const char of theString) {
//     palinHash[char] ? palinHash[char]++ : palinHash[char] = 1
//   }
  
//   const check = Object.values(palinHash)

//   let oneCheck

//   for (const val of check) {
//     if (val > 2) {
//       return false;
//     }
//     if (val === 1) {
//       if (oneCheck) {
//         return false
//       }
//       oneCheck = true
//     }
//   }

//   return true;
// }

function hasPalindromePermutation(theString) {
  const palinHash = {}

  for (const char of theString) {
    if (palinHash[char]) {
      delete palinHash[char]
    } else {
      palinHash[char] = true
    }
  }
  
  return Object.keys(palinHash).length <= 1
}

// function hasPalindromePermutation(theString) {

//   // Track characters we've seen an odd number of times
//   const unpairedCharacters = new Set();

//   for (let char of theString) {
//     if (unpairedCharacters.has(char)) {
//       unpairedCharacters.delete(char);
//     } else {
//       unpairedCharacters.add(char);
//     }
//   }

//   // The string has a palindrome permutation if it
//   // has one or zero characters without a pair
//   return unpairedCharacters.size <= 1;
// }