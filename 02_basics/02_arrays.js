const marvel_heros = ["Thor", "IronMan", "SpiderMan"]
const DC_heros = ["SuperMan", "flash", "batman"]

// marvel_heros.push(DC_heros)

// console.log(marvel_heros)

// const allHeros = marvel_heros.concat(DC_heros)
// console.log(allHeros)


const another_arr = [1,2,3, [5,9,6], 7, [5,7, [5, 8, 4]]]
const real_another_arr = another_arr.flat(Infinity)   // It will convert all the arrays to a Single Array

console.log (real_another_arr)

console.log (Array.isArray("Vaibhav"))  // It will check if the array is available or Not
console.log(Array.from("Vaibhav"))  // It will form a new Array


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))

