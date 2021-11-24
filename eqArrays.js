const assertEqual = function (actual, expected) {
  if (actual !== expected) {
    console.log(`⚠️⚠️⚠️ Assertion Failed  ${actual}  !==  ${expected}`)
  } else {
    console.log(`✅✅✅ Assertion Passed  ${actual}  ===  ${expected}`)
  }
};



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

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); 