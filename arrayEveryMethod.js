//  note: every method return boolean if all the values returned by callback function is true;
// note: every method performs AND operation between all the boolens returned by callback function
// and return boolean value 
const arr=[2,4,3];
// problem: check if every element in the array is even or not
const func=num=>num%2===0;
const ans=arr.every(func);
console.log(ans);
