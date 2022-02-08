console.log("array destructuring");
const myArray=["first","last","hello","world"];
let [myvar1,myvar2,...newArr]=myArray;
console.log(typeof(myvar1),myvar1);
console.log(typeof(myvar2),myvar2);
console.log(typeof(newArr),newArr);