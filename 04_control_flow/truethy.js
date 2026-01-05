const userEmail = "vaibhavkushwaha@gmail.com"

if (userEmail) {
    console.log("Got user Email");
}else {
    console.log ("Don't have user email");
}

// falsy values
// false, 0, -0, bigInt on, "", null, undefined, NaN


// truthy values 
// " 0  ", 'false', "", [], {}, function(){}

// Nullish Coalescing Operator (??): null undefined

let val1;

// val1 = 5?? 10
// val1 = null ?? 10
val1 = undefined ?? 15


console.log(val1);