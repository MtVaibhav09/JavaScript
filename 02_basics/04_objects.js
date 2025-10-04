// const tinderUser = new Object()      Singletone Object
 const tinderUser = {}   // Non SingleTOne Object


tinderUser.id = "123abc"
tinderUser.name ="Amit"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Vaibhav",
            lastname : "kushwaha"      // Objects ke andr object 
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname); // acces object ke andeer ka object

const obj1 = {1: "a",   2: "b"}
const obj2 = {3: "c",   4: "d"}

// const obj3 = Object.assign({}, obj1, obj2)  // assign or merge the both object
const obj3 = {...obj1, ...obj2}
// console.log(obj3);


// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));

// console.log (tinderUser.hasOwnProperty('isLoggedIn'))


const course = {
    coursename: "JavaScript Master",
    price : "Youtube",
    CourseInstructor: "Chai Aur Code"
}

// course.CourseInstructor

const {CourseInstructor: Instructor} = course  // Object diStructuring 
console.log(Instructor);


// {
//     "coursename": "JavaScript Master",
//     "price" : "Youtube",
//     "CourseInstructor" : "Chai Aur Code"
// }

