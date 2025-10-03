// singleton
// object.create


// Object literals
const JsUser = {
    name: "Vaibhav",
    "Full Name" : "Vaibhav Kushwaha",
    age: 21,
    location: "Lucknow",
    email: "vaibhavkushwaha@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Wednesday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["Full Name"])

// JsUser.email = "vaibhavchatgpt.com"  // change the actual values
// Object.freeze(JsUser)    // iske baad hmari values change nhi hoga

// JsUser.email = "vaibhavmicrosoft.com"

// console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello Js User");
}

JsUser.greetingTwo = function(){
    console.log('Hello Js User' , '${this.name}');
}


console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
