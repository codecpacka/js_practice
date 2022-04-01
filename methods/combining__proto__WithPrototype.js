const userMethods={
    about(){
        return `name is ${this.firstName}`
    },
    is18(){
        return this.age>=18;
    },
    hello(){
        return `Hello ${this.firstName} `
    }
}
const createUser=function(firstName,lastName,age){
    const user=Object.create(userMethods);
    user.age=age;
    user.firstName=firstName;
    user.lastName=lastName;
    return user;
}
const user1=createUser("ram","sarkar",25);
console.log(user1.about());
console.log(user1.is18());
console.log(user1.hello());