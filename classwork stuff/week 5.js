//ANCHOR Javascript PDF from Ali on teams
//Javascript and Java are very different they have different syntaxes

//ANCHOR test commands for stuff in the web console in chrome and firefox
//console.table({first:"test",val:9});
//console.dir(document)
//console.error("Initiating security protocols")

//code snippet

//var myName = "Laurence";
//var myCourse = "Javascript";
//console.log(myName);
//alert("welcome")
//var myAge =40; //damn daniel arararara
//console.log(myAge)



//my copy below exact copy above
var myName = "android";
var myCourse = "Javascript";
console.log(myName);
var string = ("Welcome back administrator");
alert = ("Warning. Warning. Self destruction imminent in T- 5 minutes")
let myOS = "Killware version //1444.41 sub variant B";
console.log(myOS);
console.log(string);

var names = ("test my name")
var names1 = ("test other name")
console.log(names1)

var message;
console.log(message);
message = null
console.log(message);
var myLight = false;
console.log(myLight);
myLight = true;
if (myLight) {
    console.log(myLight);
}
var score1, score2, score3, score4; //can name multiple different things under one var command 
var a = "hello"; //assigning values to the variables seperatly
var b = 10
var c = false;
console.log(a);

/*difference between var,let and cost
var declares a variable, optionally intilizing it into a value

let: declares a block scoped, local variable, optionally initilizing it to a value.
Blocks of code are indicated by {}

const- Declares a block scoped, read only named constant. Can't be changed.

two types of scopes.
global and local scopes

*/
//const msg = "goodbye naesayer"
//console.log(msg)

//the block scope is below
if (false) {
    const msg = "hello world"
}
console.log(msg)
//

function call () {
    var msg = "hello world"
    console.log(msg)
}
console.log(call())
console.log(msg)

//global scope

var msg = "hello bean sproint"
 function readMsg(){
     console.log(msg)
 }
 console.log(readMsg())

 //block scoping

 function outerfunc() {
     var msg = "hello world"
     function innerfunc() {
         console.log(msg)
     }
     console.log(innerfunc())
 }
 console.log(outerfunc())
 
/*
a block scope is within the conditions which are the {} brackets. anything within those brackets is
called a block scope. within an if statement a while statement a for loop and switch.
so the variables interact within the corrosponding block so within the {}
so if you call to the variable outside of the {} it will throw an error unless it's defined outside 
of the {} however it will be overwritten by the variable not within the block statement becuase it 
has access to the variable outside but not within the block scope/ the curly brackets {}

*/ 

/*
Data type.
1 -numbers
2- boolean
3- strings
4- objects 

*/

let a = 1 //A number datatype
let b = "hello" //B is a string
let c = true //C is a boolean datatype 
let d; //D is undefined datatype
/*
 (Boolean meaning denoting a system of
 algebraic notation used to represent
 logical propositions by means of the binary digits 0 
(false) and 1 (true), especially in computing and electronics)
*/
let sum = "1"+"1"
console.log(sum)

