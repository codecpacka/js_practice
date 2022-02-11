console.log("Array filter method");
//   note:  array filter method returns list of elements which fullfill the certain criteria;
const arr=[3,2,5,6,8]
//   note:  filter function return boolean value if it return true then that value is added to array that is to be returned else the value is rejected;
const iseven=arr.filter((number)=>{
    return number%2===0; //  note: this statement will return true to filter then the filter function will add that value to the array which needs to be returned
})
console.log(iseven);

