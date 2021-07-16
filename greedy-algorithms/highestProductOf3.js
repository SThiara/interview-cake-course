// function highestProductOf3(arrayOfInts) {
  
//   const subArr = arrayOfInts.slice(0, 3).sort((a, b) => a - b)
  
//   let firstMaxInt = subArr[2]
//   let secondMaxInt = subArr[1]
//   let thirdMaxInt = subArr[0]
  
//   let firstLowInt = thirdMaxInt
//   let secondLowInt = secondMaxInt
//   let thirdLowInt = firstMaxInt
  
//   for (let i = 3; i < arrayOfInts.length; i++) {
//     if (arrayOfInts[i] > thirdMaxInt) {
//       if (arrayOfInts[i] > firstMaxInt) {
//         thirdMaxInt = secondMaxInt
//         secondMaxInt = firstMaxInt
//         firstMaxInt = arrayOfInts[i]
//       } else if (arrayOfInts[i] > secondMaxInt) {
//         thirdMaxInt = secondMaxInt
//         secondMaxInt = arrayOfInts[i]
//       } else {
//         thirdMaxInt = arrayOfInts[i]
//       }
//     } else if (arrayOfInts[i] < thirdLowInt) {
//       if (arrayOfInts[i] < firstLowInt) {
//         thirdLowInt = secondLowInt
//         secondLowInt = firstLowInt
//         firstLowInt = arrayOfInts[i]
//       } else if (arrayOfInts[i] < secondLowInt) {
//         thirdLowInt = secondLowInt
//         secondLowInt = arrayOfInts[i]
//       } else {
//         thirdLowInt = arrayOfInts[i]
//       }
//     }
//   }
//   return Math.max(firstMaxInt * secondMaxInt * thirdMaxInt, firstMaxInt * firstLowInt * secondLowInt);
// }

function highestProductOf3(arrayOfInts) {
  if (arrayOfInts.length < 3) {
    throw new Error('Less than 3 items!');
  }

  // We're going to start at the 3rd item (at index 2)
  // So pre-populate highests and lowests based on the first 2 items
  // We could also start these as null and check below if they're set
  // but this is arguably cleaner
  let highest = Math.max(arrayOfInts[0], arrayOfInts[1]);
  let lowest  = Math.min(arrayOfInts[0], arrayOfInts[1]);

  let highestProductOf2 = arrayOfInts[0] * arrayOfInts[1];
  let lowestProductOf2  = arrayOfInts[0] * arrayOfInts[1];

  // Except this one--we pre-populate it for the first *3* items
  // This means in our first pass it'll check against itself, which is fine
  let highestProductOf3 = arrayOfInts[0] * arrayOfInts[1] * arrayOfInts[2];

  // Walk through items, starting at index 2
  for (let i = 2; i < arrayOfInts.length; i++) {
    const current = arrayOfInts[i];

    // Do we have a new highest product of 3?
    // It's either the current highest
    // or the current times the highest product of two
    // or the current times the lowest product of two
    highestProductOf3 = Math.max(
      highestProductOf3,
      current * highestProductOf2,
      current * lowestProductOf2
    );

    // Do we have a new highest product of two?
    highestProductOf2 = Math.max(
      highestProductOf2,
      current * highest,
      current * lowest
    );

    // Do we have a new lowest product of two?
    lowestProductOf2 = Math.min(
      lowestProductOf2,
      current * highest,
      current * lowest
    );

    // Do we have a new highest?
    highest = Math.max(highest, current);

    // Do we have a new lowest?
    lowest = Math.min(lowest, current);
  }

  return highestProductOf3;
}