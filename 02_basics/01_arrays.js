// array

const myArray = [0,1,2,3,4,5]
const myHeros = ["Hanuman Jii", "Iron Man", "Super Man"]

const myArray2 = new Array (1,2,3,4)

// console.log (myArray[2]);

// Array Methods 

// myArray.push(6) // add new element
// myArray.push(7) //add new element
// myArray.pop()  // Remove the last Element

// myArray.unshift(9)
// myArray.shift()

// console.log (myArray.includes(9)) //Asking Question 9 is Available or Not
// console.log (myArray.indexOf(4))

// const newArr = myArray.join() // join will change the array type
// console.log(newArr)
// console.log(myArray);



// Slice, Splice


console.log("A", myArray);

const myn1 = myArray.slice(1,3)  // Last Range Does not Included

console.log(myn1)
console.log("B", myArray)


const myn2 = myArray.splice(1,3)  // it manupulates the Possitional Array
console.log("C", myArray)
console.log(myn2)