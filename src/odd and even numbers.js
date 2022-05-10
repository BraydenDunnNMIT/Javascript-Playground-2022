//create a function which returns the total of all odd numbers
//up to and including the number pass in a parameter

//example: oddNumbersSum(5) > [1+3+5];
//example: oddNumbersSum(13). [1+3+5+7+9+11+13]

function oddNumbersSum(num){
    let total = 0
    for (let i = 1; i <= num; i=2){
        total += i // total = total + i
    }
    return total
}

//create a function that takes an array of strings and numbers and 
// filter out the array so it returns on an array of numbers.


//create a function that takes a boolean variable and return it as a string.
//example: boLToStr(true) > "true"
function boLToStr(parameter){
    return parameter.toString()
}
//create a function that takes two numbers num1 and num2, and add an array
//that returns an array containing all numbers greater than num1 and less than num2

//example: greaterAndLess(2,7[1,2,3,4,5,6,7,8,9,10]) > [3,4,5,6]
function greaterThan(num1,num2,arr){
    let filtered = []
    let n = arr.length 
    for (var i =0; i < n ;i++){
        if((arr[i]> num1) &&(arr[i]< num2)){
            filtered.push(arr[i])
        }
    }
    return filtered
}
let filtered = [3,4,5,6,7].filter(greaterThan)
console.log(greaterThan(2,7,[1,2,3,4,5,6,7,8,9,10]))


{{{{{{{{{{{{{{{{{}}}}}}}}}}}}}}}}}

class person{
constructor(name, age){
    this.name = name
    this.age = age
}
}
let personOne = new person('Android', '567')
let persontwo = new person2('Biomechanical', 'sentient v2')

console.log(personOne.name)
console.log(persontwo.name)
console.log(personOne.age)
console.log(persontwo.age)

/*
below is old way of doing classes
var person = function(name, age){
    this.name = name
    this.age = age
    
}
person.prototype.fullinfo = function(){
return this.name+ " " + this.age
}
*/
class student{}
const first_year = new student()
//first_year.name
