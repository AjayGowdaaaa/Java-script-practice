// variable declaration
// var, let, const
//Var is not used anymore  because it is depricated in ES6 [version] EcmaScript 6

var name = "Ajay";

console.log(name);

name = "Dudu";
console.log(name);

var variable ;
// Default value will be undefined
console.log(variable)

let letVar = "Variable dec"
console.log(letVar)

// Const is user to declare final variables it cannot be reinitialized
const constVar = 1;
console.log(constVar)


const person = {
    name : "Ajay"
}
console.log(person)
person.name = "Dudu"
console.log(person)

//here i'm reinitializing name variable not a person object

const list = [1,2,3,4,5]
list.push(6)
console.log(list)

// This will throw an error
// list = []
