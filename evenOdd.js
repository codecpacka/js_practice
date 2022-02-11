// function isEven(num){

// return num%2==0;
// }

// let ans=isEven(3);
// if(ans){
//     console.log("number is even");
// }
// else{
//     console.log("number is odd");
// }

// //  note:creating a function with
// // input:string
// // return:first charecter of that string

// function firstCharacter(text){
//     return text[0];
// }
// console.log("first character is "+ firstCharacter("ramprasad"));

// //  note:creatin a function that return index value of target element

// function searchElement(arr,value){
//     for(let i in arr){
//         if(arr[i]==value){
//             return i;
//         }
//     }
//     return -1;
// }
// let array=[30,2,5];
// console.log("value found at index :- "+searchElement(array,10));

//  note:functions can be made in many ways above are function declaration
//imp:  now converting above function into function exprerssion

// function isEven(num) {
//   return num % 2 == 0;
// }
const isEven = function (num) {
    return num % 2 == 0;
  };
let ans = isEven(3);
if (ans) {
  console.log("number is even");
} else {
  console.log("number is odd");
}




const firstCharacter=function(text) {
  return text[0];
}
console.log("first character is " + firstCharacter("ramprasad"));



function searchElement(arr, value) {
  for (let i in arr) {
    if (arr[i] == value) {
      return i;
    }
  }
  return -1;
}
let array = [30, 2, 5];
console.log("value found at index :- " + searchElement(array, 10));
