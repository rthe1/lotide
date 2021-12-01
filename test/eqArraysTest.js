const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); 

const assert = require('chai').assert;

describe("#eqArrayTest", () => {
  it("returns true if arrays are equal", () => {
    assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });
});