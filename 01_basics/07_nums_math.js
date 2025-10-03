const score = 400
console.log (score)

const balance = new Number(100)
console.log(balance)

console.log (balance.toString().length);
console.log(balance.toFixed(2)); //it will give the value after decimal

const othernumber = 123.5565

console.log(othernumber.toPrecision(3));

const Hundreds = 10000000
console.log (Hundreds.toLocaleString('en-IN')); // it will add commas according to place values



/***************************** MATHS*************************************************** */

// console.log (Math);
// console.log(Math.abs(-4));
// console.log (Math.round(4.3)); // Round of the number
// console.log (Math.ceil(4.2)); // Round of from top value
// console.log(Math.floor(4.9)); // Round of from bottom value
// console.log (Math.min(4,3,5,6));
// console.log (Math.max(4,3,));


console.log(Math.random()); // select number from 0 to 1 Randomly like 0.228556565 ,0.78854655, 0.9945622
console.log ((Math.random()*10)+1); // 1 se jyada random value 
console.log (Math.floor(Math.random()*10)+1); // without decimal value chahiye to ye use kro 

const min = 10
const max = 20

console.log (Math.floor(Math.random()*(max - min +1)) + min); // it give random number from 10 to 20


