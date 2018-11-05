'use strict';

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const values = [];
  // Add your code here
  
  for(var i = startIndex; i <= stopIndex; i++){
    values.push(i);
}

console.log( `\nThis is the new array : ${values}` );

const newValues = [];

for (var i = 0 ; i < values.length ; i++){

    if ( values[ i ] % 3 === 0 &&  values[ i ] % 5 === 0 ){

         threeCallback ( values[ i ] );
         
         fiveCallback ( values[ i ] ) ;
         
         newValues.push( values[ i ] );
       }

    else if ( values[ i ] % 3 === 0 ) {

         threeCallback ( values[ i ] ) ;

          newValues.push( values[ i ] );

       }

    else if ( values[ i ] % 5 === 0 ) {

         fiveCallback ( values[ i ] ) ;

          newValues.push( values[ i ] );
       }
}


return newValues;  
}


function sayThree( num ){
  console.log (`\nThe 'sayThree' function get called   ||    ${ num } is divided by 3`);
};

function sayFive( num ){
  console.log (`\nThe 'sayFive'  function get called   ||    ${ num } is divided by 5`);
};


console.log( threeFive(10, 15, sayThree, sayFive) );