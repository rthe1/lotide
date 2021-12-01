const eqArrays = require('./eqArrays');

function assertArraysEqual(actual, expected) {
  if (actual !== expected) {
    console.log(`⚠️⚠️⚠️ Assertion Failed  ${actual}  !==  ${expected}`)
  } else {
    console.log(`✅✅✅ Assertion Passed  ${actual}  ===  ${expected}`)
  }
}

// assertArraysEqual(eqArrays([1],[1]), true);

module.exports = assertArraysEqual;

