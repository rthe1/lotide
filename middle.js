function eqArrays(arr1, arr2) {


  for (let x = 0; x < arr1.length; x++) {
    if (arr1.length !== arr2.length) {
      return false
    } else if (arr1[x] !== arr2[x]) {
      return false
    }else {
      return true
    }

  }

}

function assertArraysEqual(arr1, arr2) {


  for (let x = 0; x < arr1.length; x++) {
    if (arr1.length !== arr2.length) {
      console.log(`⚠️⚠️⚠️ Assertion Failed  ${arr1}  !==  ${arr2}`)
    } else if (arr1[x] !== arr2[x]) {
      console.log(`⚠️⚠️⚠️ Assertion Failed  ${arr1}  !==  ${arr2}`)
    } else {
      console.log(`✅✅✅ Assertion Passed  ${arr1}  ===  ${arr2}`)
    }

  }
}


// Func

function middle(arr){
let midNum;
let xtraMidNum;
let midArr = [];
  if(arr.length % 2 === 0){
    
    midNum = arr[(arr.length / 2 -1)];
    xtraMidNum = arr[(arr.length / 2 )];
    
    midArr.push(midNum)
    midArr.push(xtraMidNum)
    
    return midArr

  }

  midNum = Math.ceil(arr.length / 2)
  midArr.push(midNum)
  return midArr
}

// Test

console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]

