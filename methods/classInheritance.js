console.log("this   programme shows inheritance");
class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  eat() {
    return `${this.name} is eating`;
  }
  isSupercute() {
    return this.age >= 1;
  }
  isCute() {
    return true;
  }
}
// const Animal1 = new Animal("nonoo", 1);
// console.log(Animal1.eat());
// console.log(Animal1.isSupercute());
// imp: below is the normal way to create class Dog
//Dog class normal way
// class Dog {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   eat() {
//     return `${this.name} is eating`;
//   }
//   isSupercute() {
//     return this.age >= 1;
//   }
//   isCute() {
//     return true;
//   }
// }
// problem: create a dog class that extends class Animal
class Dog extends Animal {}
const tommy = new Dog("moti", 3);
console.log(tommy.isCute());
console.log(tommy.isSupercute());
