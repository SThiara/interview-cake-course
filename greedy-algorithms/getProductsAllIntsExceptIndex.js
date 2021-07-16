function getProductsOfAllIntsExceptAtIndex(intArray) {

  let productsArr = []
  let productSoFar = 1
  
  for (let i = 0; i < intArray.length; i++) {
    productsArr.push(productSoFar)
    productSoFar *= intArray[i]
  }
  
  productSoFar = 1
  
  for (let j = intArray.length - 1; j >= 0; j--) {
    productsArr[j] *= productSoFar
    productSoFar *= intArray[j]
  }

  return productsArr;
}
