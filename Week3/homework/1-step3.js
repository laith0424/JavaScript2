'use strict';

function doHomework ( subject , callback ) {

  console.log ( `Starting my ${ subject } homework.` ) ;

  setTimeout( function ( ) { callback ( ) ; } , 5000 ) ;
}

function finishedHomework(){

  console.log ( 'Finished my homework' ) ;
}
doHomework ( 'math' , finishedHomework ) ;
