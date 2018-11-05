'use strict';

// use a 'for' loop
function repeatStringNumTimesWithFor(str, num) {
  // add your code here
  let result = '';
    if ( num === 0 || num < 0){
        return result;
    }
    for(var i = 1 ; i <= num ; i++){
        result += str;
    }
    return result;
}

console.log('for', repeatStringNumTimesWithFor('abc', 3));

// use a 'while' loop
function repeatStringNumTimesWithWhile(str, num) {
  // add your code here
  let result = '';
    if ( num === 0 || num < 0){
        return result;
    }
    var i = 1 ;
    while ( i <= num){
        result += str;
        i++;
    }
    return result;
}

console.log('while', repeatStringNumTimesWithWhile('abc', 3));

// use a 'do...while' loop
function repeatStringNumTimesWithDoWhile(str, num) {
  // add your code here
  let result = '';
    if ( num === 0 || num < 0){
        return result;
    }
    var i = 1 ;
    do {
        result += str;
        i++;
    } while ( i <= num)
    return result;
}

console.log('while', repeatStringNumTimesWithDoWhile('abc', 3));
