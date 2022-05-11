/* write a function that divides an array into sub arrays based on 'n' number given
where 'n' is the length of each sub array 
so basically put 
subarrays ([1,2,3,4,5,6,7,8,9,10],2) -> [[1,2],[3,4],[5.6],[7,8],[9,10]]
*/

function subarray (array,n){
    const x = [];
    //in arrays the computer starts counting from 0 not one 
    const y = [];
    for(let i = 0; i < array.length; i++) {
    x.push(array[i])
    }
    if(x.length$n === 0) {
        y.push(x)
        x=[]
    }
    else {
        y.push(x)
    }
    return[... new set(x)]
//when you have an array you need to intergrate it within a forloop
}



/* craete a function that re-orders the number of element in the array based on
ascending or descending order
*/ 

function order(arr,gamers){
for (let i = 0; i < arr.length; i++) {
    var returned = []
    if(gamers == "des"){
        arr64 = arr[i]
        arr64.sort((a, b) => b - a);
    }
    if(gamers == "asc"){
        arr64 = arr[i];
        arr64.sort((a, b) => a - b);
    } 
    returned.push(arr64)
}
return returned 
}

console.log(order([694201,2,39263,4,5,23,5],"asc") )
console.log(order([694201,2,39263,4,5,23,5],"des") )




function laptop(str = 1200)
console.log(laptop)

let name = 'laptop';
let price = 1200
let user = {
    price: price,
    name: name,
};
//property value shorthand ^^^

//property existance check

/* for in loop 

to iterate over all 'keys' of an object, there exists a special form of the loop: for in

the syntax 
*/ 
for (key in object){
    //executes the body for each key among object properties
}
/* 
for instance let's output all properties of a user
let user = {
    name: "john",
    age: 30,
    isAdmin: true
};
for (let key in user){
    //keys
    alert(key); //name, age, isAdmin
    //values for the keys
    alert(user[key]); //john, 30, true
}

we have an object storing salaries of our team:
let salaries = {
    John: 100,
    Ann: 160,
    Goku: 130
}
copying objects by reference
when an object var is copied or passed as a function arguement the refernce is copied no the object
let user = { name: "John" };
let admin = user; //copy the reference 

now we have two variables each one with te refernce to the same object we can use any
variable to acess the cabinet and modify it's content.

admin.name = "David"; //changed by the 'admin' reference
alert(user.name); //"david"; , changes are seen from the 'user'

comparing objects by reference
the equality == and strict equality === operators for objects work exactly the same 
two objects are equal only if they are the same object
for instance two vars reference the same object, they are equal

let a = {};
let b == a; //copy the reference

alert(a == b); //true, both vars reference the same object
alert(a === b); //true

object methods 
javascript methods are actions that can be performed on objects 
a method is a property containing a function defintiion

let user = {
    name: "John",
    age: 30
};
user.sayHi = function (){
    alert("hello");
};
user.sayHi(); //hello

method shorthand
there exists shorter syntax for methods in an object literal
let user ={
    sayHi: function (){
        alert("hello");

    };
    we can ommit the function and write sayHi();
    let user = {
        sayHi(){
            alert("hello");

        }
    }
}

the 'this' keyboard 
it is common that an object method needs to access the information stored in the object to do its job
to access the object, a method can use 'this' keyword
the value of 'this' is the object 'before the dot' ie the object that was used to call this method

let user = {
    name: "john",
    age: 30,

sayHi(){
    alert(this.name); //this == user
}

};
user.sayHi(); //John

*/