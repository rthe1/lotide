
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

module.exports = eqArrays;

