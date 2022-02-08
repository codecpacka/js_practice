"use strict"
var value=10;
// console.log(value *10);
let array=["ram","shayam"];
// console.log(array);
//spread operator
let array2=[...array];
// console.log(array2 );
// // traversing array using for loop
// for(let i=0;i<array.length;i++){
//     console.log(array[i]);
// }

//traversing array using for of loop
const fruits=["apple","mango","banana","orange"];
// for(let fruit of fruits){
//     console.log(fruit);
// }


//traversing using for in loop
// for(let index in fruits){
//     console.log(index);
//     console.log(fruits[index]);
// };

// array destructuring
const myarray=["value1","value2","value3","value4","value5"];
// let myVar1=myarray[0];
// let myVar2=myarray[1];
// console.log(myVar1,myVar2);

let[var1,var2,...newarray]=myarray;
console.log(var1,var2);
console.log(newarray);

 ///object refernce data type
 //arrays are good but not sufficient
 const person={
     name:"ramprasad",
     age:22,
     hobbies:["guitar","sleeping","listening music"]

 }
 console.log(typeof person);
 console.log(person.hobbies);

 console.log(person.name);
//add key value pair in object
person.gender="male";
console.log(person);
//accessing object value using [] brackets
console.log(person["name"]);