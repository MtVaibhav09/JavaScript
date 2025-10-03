let name = "Vaibhav"
let repoCount = 10

// console.log (name + repoCount + "Value");

console.log ('Hello My name is ${name} and my repo count is ${repoCount}');

const gameName = new String('Vaibhav k')

// console.log ( gameName[0]);
// console.log (gameName.__proto__);
//console.log (gameName.length);

console.log(gameName.charAt (2));
console.log (gameName.indexOf('h'));

const newString = gameName.substring(0,4); //  negative values nhi use kr skte
console.log (newString);

const anotherstring = gameName.slice(-8, 4);  // Slice me Negative values use kr skte hai
console.log (anotherstring);

const newstring = "     vaibhav    "
console.log(newstring); // Will print the space
console.log(newstring.trim()); // it remove the extra spaces

const url = "https://Vaibhav.com/amit%20kushwaha"
console.log (url.replace('%20', '__'))     // Replace is used to replace the % with __ 

console.log(url.includes('Vaibhav')) // iska use kr ke hm puchh skte hai ki ye keyword available hai ki nhi
