//TODO 
/* 
Javascript Variable(s) and testing
*/
const defaults = require("nodemon/lib/config/defaults")

 

var firstname = "Brayden"
var classcode = 69

console.log(firstname)
console.log(classcode)

//Javascript Object(s)
var full_name = 
{ 
first_name: "Deus",
last_name : "The Time Lord",
course_number:503
}
console.log(full_name)
console.log(full_name.first_name)
console.log(full_name["last_name"])

//Javascript Functions

function addTwoNumbers(numb1, numb2) {
return numb1+numb2
}
console.log(addTwoNumbers(20,400))
//Adding numbers together within Javascript using functions
//ANCHOR using Functions and adding sums
function addThreeNumbers (numb1, numb2, numb3) {
const result = numb1+numb2+numb3 
return console.log("sum=" + result)
}
console.log(addThreeNumbers(1,2,3))

//Javascript Loops
for(var i=0; i<10; i++ ){ 
 console.log(i)   
}

// Javascript if statements
var number =9
if (number === 10){
 console.log("answer = " + number)   
} else {
  console.log("Incorrect. Warning; security protocols have been initiated.")  
}

//JS devs added new var substitutes which are 'const' and 'let' 
// In const you are not able to change the value of the const integer
// let allows you to change the variables value and data type e.g number to string

var sdv503 = "javascript"
var x
var x = 3

var fullname = "xyz"
function foo(p1, p2){
return p2/p1
}
foo(5,100)
function sum(x1, x2) {
  return x1 + x2
}
//To call the function needs to be in paranthases
sum(10, 3)
//TODO Eloquent JavaScript book online saved needs to be read.

/* Statements vs Expressions 
A program is a sequence of statements such as 'var' and expressions produce
values such as within functions. (Ali didn't make much sense explaining this lol)
*/

var x
if (y >= 0() ) {
  (x = y)
} else {
   x = -y
}
// Refactoring code example take above example statement and compare to the refactored code below
var x = y >= 0 ? y : -y 

function statements(x){
  if(y >= 0){
    return x =y 
  } else {
    return x = -y
  }
}
var x =y >= 0 ?y : -y 
//NOTE Refactoring seems quite hard lmao apparently it isn't too big of a deal in level 5

var word = "Protocol"
console.log(word.length)

var obj = {}
console.log(obj)

obj.protocol = 123
console.log(obj)
console.log(word.toUpperCase())


