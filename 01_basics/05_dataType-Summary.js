// Premitive

// 7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
// const outsideTemp = Null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id== anotherId);

//const BigNumber = 364566618792485254865n


//Reference (Non Premitive)

// Array, Objects, Functions

const heros = ["Shaktiman", "naagraj", "IronMan"]
let myobj = {
    name: "vaibhav",
    age: 22,

}

const myFunction = function(){
    console.log("Hello Vaibhav");
}

console.log(typeof BigNumber);

//******************************************** Memory *********************************************************

// Stack (Premitive), Heap (Non Premitive)

let myYouTubename = "Techy_amit"

let anothername = "vaibhav"

console.log(myYouTubename);
console.log(anothername);

let userOne ={
    email: "user@gmail.com",
    upi: "user@ybl"                     
}

let UserTwo = userOne
UserTwo.email = "vaibhavkushwaha696@gmail.com"

console.log(userOne)
console.log(UserTwo
    
)