
function saymyname(){
    console.log ("v");
    console.log ("a");
    console.log ("i");
    console.log ("b");
    console.log ("h");
    console.log ("a");
    console.log ("v");
}
// saymyname()


function addTwoNum(Num1, Num2){
    let Num3 = Num1 + Num2
    console.log(Num3)
}

// addTwoNum(12, 8)


function loginUserMessage (username){

    if(username=== undefined){
        console.log("Please Enter the username");    
        return
    }

    return `${username} just loggedIn`
}

// console.log(loginUserMessage("Vaibhav"));
// console.log(loginUserMessage());

function CalculateCartPrice (...cartN){     //  Getting Multiple Values
    return cartN
}

// console.log(CalculateCartPrice(200,300,600, 700));
 
const user = {
    username: "Iphone 16",
    price : 51999
}

function handelObject(anyObject){
    console.log(`Username is ${anyObject.username} and Price is ${anyObject.price}`)
}
handelObject(user)


const myNewArray = [200, 300, 900, 799]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
