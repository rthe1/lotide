function assertArraysEqual(actual, expected) {
  if (actual !== expected) {
    console.log(`⚠️⚠️⚠️ Assertion Failed  ${actual}  !==  ${expected}`)
  } else {
    console.log(`✅✅✅ Assertion Passed  ${actual}  ===  ${expected}`)
  }
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

const takeUntil = function(array, callback) {
  // ...
  let newArray = [];
  for (const item of array) {
    if(!callback(item)){
      newArray.push(item);
    } else {
      return newArray
    }
  }
  
}


// Test

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);