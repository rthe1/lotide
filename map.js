function assertArraysEqual(actual, expected) {
    if (actual !== expected) {
      console.log(`⚠️⚠️⚠️ Assertion Failed  ${actual}  !==  ${expected}`)
    } else {
      console.log(`✅✅✅ Assertion Passed  ${actual}  ===  ${expected}`)
    }
}
const map = function(array, func) {
  const results = [];
  for (let item of array) {
    results.push(func(item));
  }
  return results;
}
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


const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, word => word[0]);
console.log(results1);

const results2 = map(words, word => '"'+word+'"');
console.log(results2);

const results3 = map(words, word => word + '🌑');
console.log(results3);

console.log(assertArraysEqual(eqArrays(results1, words),false));
console.log(assertArraysEqual(eqArrays(results2, words),false));
console.log(assertArraysEqual(eqArrays(results3, words),false));



