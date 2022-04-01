// const user={
//     firstName:"ramprasad",
//     lastName:"sarkar",
//     email:"ramprasad.r2600@gmail.com",
//     age:3,
//     address:"porbandar",
//     about(){
//         return `${this.firstName} is ${this.age} years old`
//     }, 
//     is18(){
//         return this.age>=18;
//     }
// }

// const userInfo=user.about();
// console.log(userInfo);

// creating a function that creates fucntion and returns function;
function creatUser(firstName,lastName,email,age,address){
    const user={};
    user.firstName=firstName;
    user.lastName=lastName;
    user.email=email;
    user.age=age;
    user.address=address;
    user.about=function(){
        return `${this.firstName} is ${this.age} years old`;
        
    }
    user.is18=function(){
        return this.age>=18;
    }
    return user;
}
const userInfo=creatUser("ramprasad","sarkar","ramprasad.r2600@gmail.com",22,"porbandar");
console.log(userInfo);
const is18=userInfo.is18();
const about=userInfo.about();
console.log(is18); 
console.log(about);