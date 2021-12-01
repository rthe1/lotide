const assertEqual = function (actual, expected) {
  if (actual !== expected) {
    console.log(`⚠️⚠️⚠️ Assertion Failed  ${actual}  !==  ${expected}`)
  } else {
    console.log(`✅✅✅ Assertion Passed  ${actual}  ===  ${expected}`)
  }
};
// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function (allItems, itemsToCount) {
  const results = {}

  for (let i = 0; i < allItems.length; i++) {
    const item = allItems[i];
    // console.log(item)

    if (itemsToCount[item] === true) {
      if (results[item]) {
        results[item]++;
      } else {
        results[item] = 1;
      }
      
    }
  }
  return results;
}

module.exports = countOnly;
//Test




// const firstNames = [
//   "Karl",
//   "Salima",
//   "Agouhanna",
//   "Fang",
//   "Kavith",
//   "Jason",
//   "Salima",
//   "Fang",
//   "Joe"
// ];


// const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

// // assertEqual(result1["Jason"], 1);
// // assertEqual(result1["Karima"], undefined);
// // assertEqual(result1["Fang"], 2);
// // assertEqual(result1["Agouhanna"], undefined);