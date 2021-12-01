const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle')

const assert = require('chai').assert;
const head   = require('../head');

describe("#MiddleTest", () => {
  it("returns true if arrays are equal", () => {
    assertArraysEqual(eqArrays(middle([1, 2, 3, 4]), [2, 3]));
  });

  // it("returns '5' for ['5']", () => {
  //   eqArrays((middle([1, 2, 3, 4, 5, 6]), [3, 4])); 
  // });
});




// console.log(middle([1, 2, 3, 4])); // => [2, 3]
// console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]