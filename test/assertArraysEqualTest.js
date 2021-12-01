const assertArraysEqual = require('../assertArraysEqual')
const eqArrays = require('../eqArrays')
// assertArraysEqual(eqArrays([1],[1]), true)
const assert = require('chai').assert;


describe("#assertArraysEqual", () => {
  it("returns true if arrays are equal", () => {
    assert.strictEqual(assertArraysEqual(eqArrays([1],[1]), true));
  });

});