// note: performs OR operation between the booleans returned by callback function
const arr=[3,5,23,9,2]
const anyEvenNumber=arr.some(num=>num%2===0)
console.log(anyEvenNumber);