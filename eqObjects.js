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

const assertEqual = function (actual, expected) {
  if (actual !== expected) {
    console.log(`⚠️⚠️⚠️ Assertion Failed  ${actual}  !==  ${expected}`)
  } else {
    console.log(`✅✅✅ Assertion Passed  ${actual}  ===  ${expected}`)
  }
};

const eqObjects = function (object1, object2) {
  let objKeysOne = Object.keys(object1)
  let objKeysTwo = Object.keys(object2)

  if (objKeysOne.length !== objKeysTwo.length) {
    return false
  } 

  for (const key of objKeysOne) {

    if(object1[key].length !== object2[key].length){
      return false
    }

    if(object1[key].isArray && object2[key].isArray){
      if(eqArrays(object1[key],object2[key]) !== true){
        return false
      }
    } 

  }

  return true

}

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false

console.log(cd2['d'].length)
console.log(cd['d'].length)