// imp: adding methods in prototype of a function 

const createUser=function(firstName,lastName,age){
    const user=Object.create(createUser.prototype);
    user.age=age;
    user.firstName=firstName;
    user.lastName=lastName;
    return user;
}
// const userMethods={
//     about(){
//         return `name is ${this.firstName}`
//     },
//     is18(){
//         return this.age>=18;
//     },
//     hello(){
//         return `Hello ${this.firstName} `
//     }
// }

createUser.prototype.about=function(){
    return `name is ${this.firstName}`

}
const user1=createUser("ram","sarkar",12);
console.log(user1.about());