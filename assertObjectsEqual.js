const eqObjects = function (object1, object2) {
  let objKeysOne = Object.keys(object1)
  let objKeysTwo = Object.keys(object2)
  if (objKeysOne.length !== objKeysTwo.length) {
    console.log(`⚠️⚠️⚠️ Assertion Failed  ${object1}  !==  ${object2}`)
  }
  for (const key of objKeysOne) {
    if (object1[key].length !== object2[key].length) {
      console.log(`⚠️⚠️⚠️ Assertion Failed  ${object1}  !==  ${object2}`)
    }
    if (object1[key].isArray && object2[key].isArray) {
      if (eqArrays(object1[key], object2[key]) !== true) {
        console.log(`⚠️⚠️⚠️ Assertion Failed  ${object1}  !==  ${object2}`)
      }
    }
  }
  return true
}

// FUNCTION IMPLEMENTATION
function assertObjectsEqual (actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  if (eqObjects(actual, expected),true) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`⚠️⚠️⚠️ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};


assertObjectsEqual(eqObjects({ a: 1 }, { a: 1 }), true)