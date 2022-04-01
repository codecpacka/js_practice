const obj1={
    key1:"value1",
    key2:"value2"
}

// const obj2={
//     key3:"value3"
// }
// console.log(obj1.key1);
// console.log(obj2.key3);
// console.log(obj2.key1);
// imp: using this syntax if object 2 is not having the key it will look for it in obj1
const obj2=Object.create(obj1) // note: this line adds obj1 as the prototype of obj2
console.log(obj2);
obj2.key3="value3"

console.log(obj2.key2);
console.log("printing prototype of obj2");
console.log(obj2.__proto__);

