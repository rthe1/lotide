const eqArrays = require('./eqArrays');

const assertArraysEqual = require('./assertArraysEqual');


// Func

function middle(arr){
let midNum;
let xtraMidNum;
let midArr = [];
  if(arr.length % 2 === 0){
    
    midNum = arr[(arr.length / 2 -1)];
    xtraMidNum = arr[(arr.length / 2 )];
    
    midArr.push(midNum)
    midArr.push(xtraMidNum)
    
    return midArr

  }

  midNum = Math.ceil(arr.length / 2)
  midArr.push(midNum)
  return midArr
}

module.exports = middle;

// Test


