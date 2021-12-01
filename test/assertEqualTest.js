const assertEqual = require('../assertEqual');

// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual("Bootcamp", "Bootcamp");
// assertEqual(1, 1);
// assertEqual(1, 2);

const assert = require('chai').assert;

assertEqual(1, 1);

describe("#assertEqual", () => {
  it("returns true if items are equal", () => {
    assertEqual("Bootcamp", "Bootcamp");
  });

  it("returns true if items are equal", () => {
    assertEqual(1, 1);
  });

});
