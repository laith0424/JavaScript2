'use strict';

let newArray = [  [ [1 , 4 ] , [ 5 , 6 , 7] ]  ,  [ [ 8 , 9 , 10] , [ 2 , 4 ] ]  ,  [ [ 3 , 4] , [ 5 , 6] , [ 8 ] ]  ];   // an array with 3 dimensions




function multiplyAll(arr) {  // This function if we have  an array with 3 dimensions

  var result = 1;
 
  for  (var i = 0 ; i < arr.length ; i++ ) {

      for ( var j = 0 ; j < arr[ i ].length ; j++ ) {

        for (var r = 0 ; r < arr[i][j].length ; r++ ) {

          result *= arr[i][j][r];

          console . log ( arr[i][j][r] );
      }
      }
    }
  console . log ( result );
}

multiplyAll ( newArray );







const arr2d = [[1, 2], [3, 4], [5, 6]];             // Nested arrays
const arr3d = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];

// add your solution here, or add a comment on how you would tackle this problem


function nestArray(arr  ) { //This is a function for using If  we didn't know how deep the array was nested
  
    var newArray = [];  // Place the nested array elements in a single-dimension array
    
    var multiplies = 1 ;    //  it multiplies the product variable by each number in the sub-arrays of arr

    function arraysFunction ( arr ) {    // This function is called an unspecified number of times depending on which array we have

        if ( Array.isArray(arr) ) {        // If the 'arr' is a array,  go deep into 'arr'
            for ( var i in arr ) {
                arraysFunction ( arr[i] );    
            }
    
        }
    
        else {                            // If the 'arr' is not a array, place it in the newArray
            newArray.push( arr );
            multiplies *=  arr;
        }
    
    }



    if ( Array.isArray(arr) ) {
        arraysFunction (arr);
    }

    else {
        newArray.push( arr );
        multiplies *=  arr;
    }


    console.log('The result of multiplies the variables by each number of arr  :  ' + multiplies );
    console.log('Print all elements of The nested array "arr" :  ' + newArray );
    return newArray;
  }
 

var  a1 = nestArray( arr2d );

var  a2 = nestArray( arr3d );


