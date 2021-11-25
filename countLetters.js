const assertEqual = function (actual, expected) {
  if (actual !== expected) {
    console.log(`⚠️⚠️⚠️ Assertion Failed  ${actual}  !==  ${expected}`)
  } else {
    console.log(`✅✅✅ Assertion Passed  ${actual}  ===  ${expected}`)
  }
};

function countLetter(word) {
  letterCounter = {}
  for (const letter of word) {
     if (letterCounter[letter]) {
      letterCounter[letter]++
    } else if (!letterCounter[letter]) {
      letterCounter[letter] = 1
    }
  }
  return letterCounter

}