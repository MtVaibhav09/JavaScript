// if Statement
const isUserloggedIn = true
const temperature = 41

// if (2==2){ 
//     console.log("Executed ");

// }

// if ( temperature === 0){ 
//     console.log("less than 50");
// }
// else {
//     console.log( "temperature should be greater than 50")
//     }



// <, >, <=, >=, ==, !=, ===, !==


// const score = 200 

// if (score >100) {
//     let power = "fly"                          // Here we can see the scope for let
//     console.log ('user power: ${power}' );
// }

// console.log('user power: ${power}');

// const balance = 1200

// if (balance < 400){
//     console.log ("less than 500")
// }else if (balance < 750){
//     console.log ("less than 750")
// }else if ( balance < 900){
//     console.log ("less than 900")
// }else  {   console.log (" Your Balance is: "  +  balance) }

const UserloggedIn = true
const debitCard = true
const loggedinfromGoogle = false
const loggedinfromEmail = true

if (UserloggedIn && debitCard ){
    console.log ("Allow to buy course");
}

if (loggedinfromGoogle || loggedinfromEmail ){
    console.log ("Allow to Buy the Course" )
}