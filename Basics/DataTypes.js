/*
Data types 
    1. Primitive data type (Stored directly in the location the variable access and it is stored in stack)
        [String, Number Boolean Null Undefined Symbol]
    2. Rerence data type (accessed by refrence and stored in heap and points to loaction array)
        [Arrays, Object literals, Functions]
*/


// Primitive data type
const name = 'Ajay'
console.log(name, " ---> ", (typeof name))

const age = 26;
console.log(age, " ---> ", (typeof age))

const  isDeveloper = true;
console.log(isDeveloper, " ---> ", (typeof isDeveloper))

const company = null; //Storing value of null
console.log(company, " ---> ", (typeof company))

let undef;
console.log(undef, " ---> ", (typeof undef))

const sym = Symbol()
console.log(sym, " ---> ", (typeof sym))


// Refrence Data type
// Array
const skills = ["Java", "Python", "SQL", "Spring"]
console.log(skills, " ---> ", (typeof skills))

// Object
const Person = { name: name, age: age}
console.log(Person, " ---> ", (typeof Person))

// Dates
// If we dont use new it will consider as a String
const today = new Date()
console.log(today, " ---> ", (typeof today))
console.log(typeof today)

console.log("--------------- Type casting ---------------------")

// Type casting
let a = 25;
console.log(typeof a)
a = String(a)
console.log(typeof a)
a = true;
console.log(typeof a)
a = String(a)
console.log(typeof a)

console.log("--------------- Type casting using toString ---------------------")

let b = 5;
console.log(typeof b)
b = b.toString();
console.log(typeof b)

c = 10;

console.log(c.toFixed(1)) //Prents the decimal value based on parameter

d = "123"
console.log(typeof d)
d = Number(d)
console.log(typeof d)
e ="Abc";
e = Number(e)
console.log(e) // print NaN

bool = false;
console.log(bool, " ---> ", (typeof bool))
bool = Number(bool);
console.log(bool, " ---> ", (typeof bool))



f = parseInt("100")
console.log(f, " ---> ", (typeof f))


// Type Coehesion
console.log("---------------------Type Coehesion--------------------------")


let x = "1";
let y = 2;
let z = x+y;
console.log(z, " ---> ", (typeof z))


console.log("---------------------Math Object--------------------------")

console.log("Math.PI ---->", Math.PI )
console.log("Math.round(2.5)-->",Math.round(2.5)) //.5 and above it will consider as a next value

console.log("Math.ceil(2.1)-->",Math.ceil(2.1)) // prints 3, from . above it will consider as a next val
console.log("Math.floor(2.1)-->",Math.floor(2.9)) //prints 2 it will ignore the decimal values
console.log("Math.sqrt(9)-->",Math.sqrt(9)) 
console.log("Math.abs(-3)-->",Math.abs(-3)) //prints 3 ignore megative valu and prints a positive
console.log("Math.pow(2,3)-->",Math.pow(2,3))  //prints = 2*2*2 = 8
console.log("Math.min()-->",Math.min(9,5,7,6,1,56,8,63,5,8,6,0,4)) //prints the minimum value of the list
console.log("Math.max()-->",Math.max(9,5,7,6,1,56,8,63,5,8,6,0,4)) //prints the maximum value of the list
console.log(Math.random()) //gives random decimal value if u want number do floor
