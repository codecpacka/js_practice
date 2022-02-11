
// note: fill method is used to fill array with values u could select the index value from where u want to fil ur desired data
// note: fill changes original array
// imp: value,start,end
// const myArray=new Array(10).fill(0);
// note: the above line fills array with its all element as  0
// console.log(myArray);

const testArray=new Array(10);
testArray.fill(3,0,4)// note: this function a adds integer value 3 from index number 0 to 4 i.e 4th index is not modiefied from 0-3 index values are appended
console.log(testArray);