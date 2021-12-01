function assertArraysEqual(arr1, arr2) {


  for (let x = 0; x < arr1.length; x++) {
    if (arr1.length != arr2.length) {
      console.log(`⚠️⚠️⚠️ Assertion Failed  ${arr1}  !==  ${arr2}`)
    } else if (arr1[x] != arr2[x]) {
      console.log(`⚠️⚠️⚠️ Assertion Failed  ${arr1}  !==  ${arr2}`)
    } else {
      console.log(`✅✅✅ Assertion Passed  ${arr1}  ===  ${arr2}`)
    }

  }
}

function without(arr, undesiredItem) {
  let copyArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != undesiredItem) {
      copyArr.push(arr[i])
    }
  }
  return copyArr
}

// const words = ["hello", "world", "lighthouse"];
// console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// console.log(assertArraysEqual(words, ["hello", "world", "lighthouse"]));

module.exports = without;