// function reverse(arrayOfChars) {
  
//   const arrayLength = arrayOfChars.length;

//   if (arrayLength <= 1) {
//     return arrayOfChars;
//   }
  
//   let start = 0;
//   let mid = Math.floor(arrayLength / 2);
//   let end = arrayLength - 1;
  
//   while (start < mid) {
//     const temp = arrayOfChars[start];
//     arrayOfChars[start] = arrayOfChars[end];
//     arrayOfChars[end] = temp;
//     start++;
//     end--;
//   }
// }

function reverse(arrayOfChars) {
  let start = 0;
  let end = arrayOfChars.length - 1;
  
  while (start < end) {
    const temp = arrayOfChars[start];
    arrayOfChars[start] = arrayOfChars[end];
    arrayOfChars[end] = temp;
    start++;
    end--;
  }
}
