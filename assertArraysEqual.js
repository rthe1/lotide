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