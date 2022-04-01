const CreateUser = function (firstName, lastName, age) {
    this.age = age;
    this.firstName = firstName;
    this.lastName = lastName;
    function check(){
        console.log("test succesfull")
    }

}

CreateUser.prototype.about = function () {
    return `name is ${this.firstName}`
};
CreateUser.prototype.is18 =function(){
    return this.age >= 18;
};
CreateUser.prototype.hello=function(){
    return `Hello ${this.firstName}; `
};
CreateUser.prototype.test="this for test";

const user1 = new CreateUser("ram", "prasad", 21);
const user2 = new CreateUser("nonu", "ping", 2);
const user3 = new CreateUser("vachleya", "pig", 67);
// console.log( user1.about());
// console.log( user1.is18());
// console.log(user1);
// problem: print only user property i.e it should not print function names present inside prototype of that object
console.log("only printing user property not its prototype");
for(let key in user1){
    if(user1.hasOwnProperty(key))
    console.log(key);
}


