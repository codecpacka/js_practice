// imp:  converting function expressoion into arraow function 
// todo: step1:remove the function keyword 
//       step2:add => arrow symbol after the brackets 


// function isEven(num) {
//   return num % 2 == 0;
// }
//  note:converted into arrow function





//  note:converted into arrow function
// const firstCharacter=(text) =>{
//   return text[0];
// }



// note:converted into arrow function
const searchElement=(arr, value)=> {
  for (let i in arr) {
    if (arr[i] == value) {
      return i;
    }
  }
  return -1;
}
let array = [30, 2, 5];
console.log("value found at index :- " + searchElement(array, 10));

//  note:when there is only one parameter u can remove round brakets around the parameter
// imp: example
const firstCharacter=text => text[0];


console.log("first character is " + firstCharacter("ramprasad"));
// imp:  u can also write the below function  note:isEven in single line also 
// const isEven =(num)=> {
//   return num % 2 === 0;
// };
const isEven=num=>num%2===0;

let ans = isEven(3);
if (ans) {
console.log("number is even");
} else {
console.log("number is odd");
}
