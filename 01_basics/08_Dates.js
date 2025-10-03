// Date 

let myDate = new Date()
// console.log (myDate.toString());
// console.log (myDate.toDateString());
// console.log (myDate.toISOString());
// console.log (myDate.toLocaleString());
// console.log (myDate.toTimeString());

let mycreatedDate = new Date (2025, 0, 25)  // in JavaScript Month Start from Zero like 0 monthe == Jan
console.log(mycreatedDate.toDateString());


let otherdate = new Date (2025, 0, 25, 5, 3);
console.log(otherdate.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);

// console.log (math.floor(Date.now()/1000));       // it will give in seconds