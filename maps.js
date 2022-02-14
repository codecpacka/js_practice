// note: maps are itereable
// store data in ordered fashion
// imp: map store key value pair (like objects)
// imp: key could be anything from an array to any object anything
//     duplicate keys are not allowed like objects

//     imp: difference between map and objects

//     objects can only have string or symbol as key
//     in maps you can use anything as key  like Array,number,string
//object literal  (that means all the keys are of string type)
// const person={
//     firstName:"ramp",
//     age:7,
//     1:"one" // 1 is also cosidered as string in object literal
// }
// console.log(person.firstName);
// console.log(person["firstName"]);
// console.log(person['1']);
// for(let key in person){
//     console.log(typeof key);
// }
// problem: create a map
const person = new Map();
// problem: adding multiple values to map in one go 
const mapmultiple=new Map([["firstname","ramprasad"],["age",7],[1,"one"]]);
console.log(mapmultiple);
person.set("firstname", "ramprasad");
person.set("age", 7);
person.set(1, "one");
person.set([1,2,3], "one two three");
person.set({1:'one'}, "this is an object as a key");
// methods:
//get:-gets the value of key

//keys:-return list of all keys available in map
//acces individual key values
// console.table(person);
// console.log(person.get('age'));
// console.log(person.get(1));
// console.log(person.keys());
// imp: iterating map
// for (let key of person.keys()) {
//   console.log(key + ":-" + person.get(key) + " " + typeof key);
// }

//  imp: all key value pairs in map are arrays 
// for(let key of person){
//     console.log(Array.isArray(key));
// }
//  imp: now from above statement we know its an array so to destruce an array in loop

for(let [key,value] of person ){
    console.log(key,value);
}

// // problem:  link objects with objects 
const person1={
    name:"ram",
    age:"21",
    height:"169"
}
const userinfo=new Map();
userinfo.set(person1,{age:4,address:"fateganj"})
console.log(userinfo.get(person1).age);