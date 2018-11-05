'use strict';

// Add your code here

const createBase = function ( num ) {
    return function constructing (value) {
      return num + value;
    };
  };
  
let addSix = createBase(6);

addSix(10); // returns 16
addSix(21); // returns 27

console.log(addSix(10));
console.log(addSix(21));


