// imp: this below function is called constructor function because the below function constructes an object and then return it

// imp: note: whenever u are creating a function which requires new keyword for calling it make sure you write the fist letter capital of that function
const CreateUser = function (firstName, lastName, age) {
    this.age = age;
    this.firstName = firstName;
    this.lastName = lastName;

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


const user1 = new CreateUser("ram", "prasad", 21);
const user2 = new CreateUser("nonu", "ping", 2);
const user3 = new CreateUser("vachleya", "pig", 67);
console.log( user1.about());
console.log( user1.is18());


