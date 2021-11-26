const assertEqual = function (actual, expected) {
  if (actual !== expected) {
    console.log(`⚠️⚠️⚠️ Assertion Failed  ${actual}  !==  ${expected}`)
  } else {
    console.log(`✅✅✅ Assertion Passed  ${actual}  ===  ${expected}`)
  }
};

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

const letterPositions = function (sentence) {
  const results = {};
  // logic to update results here
  for (let i = 0; i < sentence.length; i++) {
    const char = sentence[i];// h
    index = sentence.indexOf(sentence[i]); // 0
    results[char] = []
    results[char].push(index) //h:[0]

  }
  return results;
};

assertArraysEqual(letterPositions("hello").e, [1]);
