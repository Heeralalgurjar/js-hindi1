//  primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 545123455341231n


// Reference (Non primitive)

// Array, objects, Functions

const heros = ["iron man", "thor", "hulk"];
let myObj ={
    name: "Heeralal",
    age: 22,
}

const myFunction = function(){
    console.log("Helloworld");
}

console.log(typeof bigNumber);