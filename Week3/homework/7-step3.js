'use strict';

const x = 9;
function f1(val) {
  val = val + 1;
  return val;
}

f1(x);

console.log(x);

/*
Here I tell JavaScript that I want the same variable value (x) and increase it by one value and return it.
'val' here is a local variable. It has the same x value but has nothing to do with it.
I did not tell JavaScript that I wanted to change the value of X . 
If I want to do this I must first change the X to let or var because it is const and the code must be like :


let x = 9;
function f1() {
  x ++ ;
}
f1();

or

let x = 9;
function f1() {
  x = x + 1;   
  return x;
}

f1(x);
*/






const y = { x: 9 };
function f2(val) {
  val.x = val.x + 1;
  return val;
}

f2(y);

console.log(y);

// Add your explanation as a comment here

/*
Here it is different. We tell JavaScript to change the 'x' value in the object, where each of 'y' and 'val' refers to the same object.
If we change the value of val.x or y.x , the original value in y will be changing
*/