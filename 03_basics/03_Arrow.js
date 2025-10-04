const user = {

    username: "Vaibhav",
    Price:  999,

    welcomeMessage: function (){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "Amit"
// user.welcomeMessage()

// console.log(this);

// function chai (){
//     let username = "Vaibhav"
//     console.log (this.username);
// }

// chai()

// const chai = function (){
//     let username = "Vaibhav"
//     console.log (this.username);

// }

const chai = () => {
    let username = "Vaibhav"
    console.log (this);

}

// chai()

// const addTwo =(num1, num2) => {               // Basic Arrow Functions 
//     return num1 + num2

// }

// const addTwo =(num1, num2) =>  num1 + num2
const addTwo =(num1, num2) => ( num1 + num2 )
console.log(addTwo(55, 5))