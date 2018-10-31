'use strict';

const numbers = [1, 2, 3, 4];

// Add your code here


let newNumbers = [];

newNumbers = numbers.filter (  function ( num ) { return num % 2 !== 0  } ) ;

newNumbers = newNumbers.map (  num => { return num * 2 ; } );

console.log('The doubled numbers are : ', newNumbers);

