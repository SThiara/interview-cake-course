// function reverseWords(message) {

//   // Decode the message by reversing the words
//   const spaceIndices = [0]
  
//   message.forEach((element, index) => {
//     if (element === ' ') {
//       spaceIndices.push(index)
//     }
//   })
  
//   if (spaceIndices.length === 1) {
//     return message
//   }
  
//   spaceIndices.push(message.length - 1);
  
//   let start = 0
//   let end = spaceIndices.length - 1
  
//   while (start < end) {
//     let i = 0

//     if (spaceIndices[start + 1] - spaceIndices[start] === spaceIndices[end] - spaceIndices[end - 1]) {
//       while (i + spaceIndices[start] < spaceIndices[start + 1]) {
//         const temp = message[i + spaceIndices[start]]
//         message[i + spaceIndices[start]] = message[i + spaceIndices[end - 1] + 1]
//         message[i + spaceIndices[end - 1] + 1] = temp
//         i++
//       }  
//     } else if (spaceIndices[start + 1] - spaceIndices[start] < spaceIndices[end] - spaceIndices[end - 1]) {
//       while (i + spaceIndices[start] < spaceIndices[start + 1]) {
//         const temp = message[i + spaceIndices[start]]
//         message[i + spaceIndices[start]] = message[i + spaceIndices[end - 1] + 1]
//         message[i + spaceIndices[end - 1] + 1] = temp
//         i++
//       }
//       const freezeIterator = i
//       while (i + spaceIndices[end - 1] < spaceIndices[end]) {
//         message.splice(spaceIndices[start + 1], 0, message[i + spaceIndices[end - 1]])
//         i++
//       }  
//       message.splice(freezeIterator + spaceIndices[end - 1], spaceIndices[end] - freezeIterator)
//     } else {
//       while (i + spaceIndices[end - 1] < spaceIndices[end]) {
//         const temp = message[i + spaceIndices[start]]
//         message[i + spaceIndices[start]] = message[i + spaceIndices[end - 1] + 1]
//         message[i + spaceIndices[end - 1] + 1] = temp
//         i++
//       }
//       const freezeIterator = i
//       console.log(message)
//       while (i + spaceIndices[start] < spaceIndices[start + 1]) {
//         message.splice(spaceIndices[end], 0, message[i + spaceIndices[start]])
//         i++
//       }
//       message.splice(freezeIterator + spaceIndices[start], spaceIndices[start + 1] - freezeIterator)    
//     }
//     start++;
//     end--;
//   }
  
//   console.log(message)
// }

function reverseWords(message) {

  // First we reverse all the characters in the entire message
  reverseCharacters(message, 0, message.length - 1);
  // This gives us the right word order
  // but with each word backward

  // Now we'll make the words forward again
  // by reversing each word's characters

  // We hold the index of the *start* of the current word
  // as we look for the *end* of the current word
  let currentWordStartIndex = 0;
  for (let i = 0; i <= message.length; i++) {

    // Found the end of the current word!
    if (i === message.length || message[i] === ' ') {

      // If we haven't exhausted the string our
      // next word's start is one character ahead
      reverseCharacters(message, currentWordStartIndex, i - 1);
      currentWordStartIndex = i + 1;
    }
  }
}

function reverseCharacters(message, leftIndex, rightIndex) {

  // Walk towards the middle, from both sides
  while (leftIndex < rightIndex) {

    // Swap the left char and right char
    const temp = message[leftIndex];
    message[leftIndex] = message[rightIndex];
    message[rightIndex] = temp;
    leftIndex++;
    rightIndex--;
  }
}

reverseWords(['p', 'o', 'u', 'n', 'd', ' ', 'c', 'a', 'k', 'e'])