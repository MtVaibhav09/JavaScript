// let a = 10
// const b = 20
// var c = 30

// console.log ( a );
// console.log ( b );     //Yaha to thik hai But {} Scope jab lagega tab dikkat hoga 
// console.log ( c );


//var c = 300                   // This is called as Global Scope

let a = 300

if (true){                    // This is called as Block Scope
    let a = 10
    const b = 20
    console.log("Inner: ",a);
    //var c = 30
}

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    
}

console.log ( a );
// console.log ( b );
// console.log ( c );