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




