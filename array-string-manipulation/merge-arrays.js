function mergeArrays(myArray, alicesArray) {
  if (myArray.length === 0) {
    if (alicesArray.length === 0) {
      return []
    } else {
      return alicesArray
    }
  } else if (alicesArray.length === 0) {
    return myArray
  }
  
  const mergedArr = []
  
  let myCount = 0;
  let aliceCount = 0;
  
  if (myArray[0] < alicesArray[0]) {
    
    while (myCount < myArray.length) {
      mergedArr.push(myArray[myCount])
      while (alicesArray[aliceCount] < myArray[myCount + 1]) {
        mergedArr.push(alicesArray[aliceCount])
        aliceCount++
      }
      myCount++;
    }
    
    while (aliceCount < alicesArray.length) {
      mergedArr.push(alicesArray[aliceCount])
      aliceCount++
    }
    
    return mergedArr;
  } else {
    while (aliceCount < alicesArray.length) {
      mergedArr.push(alicesArray[aliceCount])
      while (myArray[myCount] < alicesArray[aliceCount + 1]) {
        mergedArr.push(myArray[myCount])
        myCount++
      }
      aliceCount++;
    }
    
    while (myCount < myArray.length) {
      mergedArr.push(myArray[myCount])
      myCount++
    }
    
    return mergedArr;
  }
}

