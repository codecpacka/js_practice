class CreateUser {
  constructor(firstName, lastName, age) {
    this.age = age;
    this.firstName = firstName;
    this.lastName = lastName;
  }
  about() {
    return `name is ${this.firstName}`;
  }
  is18 = function () {
    return this.age >= 18;
  };
  hello = function () {
    return `Hello ${this.firstName}; `;
  };
}
const user1 = new CreateUser("ramprasad", "sarkar", 52);
console.log(user1.hello());
