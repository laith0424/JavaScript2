'use strict';
{

  const bookTitles = [ "harry_potter_chamber_of_secrets" , "the_grace_of_kings" , "game_of_thrones" ,

                     "children_of_blood_and_bone" , "fire_and_Blood" , "the_sea_and_civilisation" ,

                     "stalins_englishman" , "magna_carta" , "night_walking" , "napoleon_the_great" ];
 
  console.log( bookTitles );


  for ( var i = 0 ; i < bookTitles.length ; i++ ) { 

    console.log( "book [" + i + "] : " + bookTitles[ i ] + '\n' )

    } 

}





'use strict'

const bookTitles = [ "harry_potter_chamber_of_secrets" , "the_grace_of_kings" , "game_of_thrones" ,  //Books titles, I will use it as an index in 'bookObject'

                     "children_of_blood_and_bone" , "fire_and_Blood" , "the_sea_and_civilisation" ,

                     "stalins_englishman" , "magna_carta" , "night_walking" , "napoleon_the_great" ];








function createFieldsetOfBooksArray(){   //Create a fieldset of Books array 

  'use strict'



  var fieldset = document.createElement( 'fieldset' );   //Create a fieldset in index.html

  fieldset.setAttribute( 'class' , 'booksArray' );



  var legend = document.createElement( 'legend' );   //Create a legend for the  fieldset

  legend.innerHTML = 'Book IDs' ;  

  fieldset.appendChild( legend );


  
  let ul = document.createElement( 'ul' );   //Create a ul in the  fieldset

  fieldset.appendChild( ul );



  for ( var i = 0 ; i < bookTitles.length ; i++ ) {  //set each element of the "bookTitles" into in  "LI" element  of the "UL" elements


    var li = document.createElement( 'li' );

    li.innerHTML = bookTitles[ i ];

    ul.append( li );

  }

  document.body.append( fieldset );
};


//2.4-----------------------------------------------------------

const bookObject = {          //An object of books

  "harry_potter_chamber_of_secrets" : {

    'title': 'Harry Potter and the Chamber of Secrets' ,

    'language' : 'English' ,

    'author' : 'Chris Columbus' ,

    'date_of_publication' : 2002

  },


  "the_grace_of_kings" : {

    'title': 'The Grace of Kings' ,

    'language' : 'Chinese' ,

    'author' : 'Ken Liu' ,

    'date_of_publication' : 2015

  },


  "game_of_thrones" : {

    'title': 'A Game of Thrones ' ,

    'language' : 'English' ,

    'author' : 'George Martin' ,

    'date_of_publication' : 1996

  },


  "children_of_blood_and_bone" : {

    'title': 'Children of Blood and Bone' ,

    'language' : 'English' ,

    'author' : 'Tomi Adeyemi' ,

    'date_of_publication' : 2018

  },


  "fire_and_Blood" : {

    'title': 'Fire and Blood' ,

    'language' : 'English' ,

    'author' : 'George Martin' ,

    'date_of_publication' : 2018

  },


  "the_sea_and_civilisation" : {

    'title': 'The Sea and Civilization: A Maritime History of the World' ,

    'language' : 'English' ,

    'author' : 'Lincoln Paine' ,

    'date_of_publication' : 2013

  },


  "stalins_englishman" : {

    'title': "Stalin's Englishman: The Lives of Guy Burgess" ,

    'language' : 'English' ,

    'author' : 'Andrew Lownie' ,

    'date_of_publication' : 2015

  },


  "magna_carta" : {

    'title': 'Magna Carta' ,

    'language' : 'English' ,

    'author' : 'John King of England & Stephen Langton' ,

    'date_of_publication' : 1215

  },


  "night_walking" : {

    'title': 'Nightwalking: A Nocturnal ' ,

    'language' : 'English' ,

    'author' : 'Matthew Beaumont' ,

    'date_of_publication' : 2015

  },


  "napoleon_the_great" : {

    'title': 'Napoleon the Great' ,

    'language' : 'English' ,

    'author' : 'Andrew Roberts' ,

    'date_of_publication' : 2015

  }


};





//2.5   &   2.7   -----------------------------------------------------------


function createFieldsetOfBooksObject(){     //Create a fieldset of Books Object

  'use strict'


  var fieldset = document.createElement( 'fieldset' );  //Create a fieldset in index.html

  fieldset.setAttribute( 'class' , 'booksObject' );



  var legend=document.createElement( 'legend' );    //Create a legend for the  fieldset

  legend.innerHTML = 'All book information';  

  fieldset.appendChild( legend );



  for ( var i = 0 ; i < bookTitles.length ; i++ ){    //We use the "bookTitles" as an index for passing on each book of the "bookObject"

    var div = document.createElement( 'div' );   //Create a div  in index.html for every book
    

 
    var h4 = document.createElement( 'h4' );   //Create a h4  in the div

    h4.innerHTML = 'This is the ID of book number ' +  i  + ' : ' + bookTitles[ i ];

    div.appendChild( h4 );


     
    var bookImage = document.createElement( 'img' );   //Create a img  for the book in the div and give it an attribute

    bookImage.src = 'img/' + bookTitles[ i ] + '.jpg';

    bookImage.setAttribute( 'alt' , bookTitles[ i ] );

    div.append( bookImage );
    


    let ul = document.createElement( 'ul' );  //create a list and put all the details of the book in 

    div.appendChild( ul );


    for ( let property in bookObject[ bookTitles [ i ] ] ){

      var li = document.createElement( 'li' );   //Put every  detail of the book in "LI".  - title , language , author , date_of_publication -
  
      li.innerHTML = property + ' : ' + bookObject[ bookTitles [ i ] ].property;
  
      ul.append( li );

    }
  
    fieldset.appendChild( div );  

  }

  document.body.append( fieldset );
};

