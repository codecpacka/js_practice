console.log("array map method");
const numbers=[23,53,70,34]
const newarr=numbers.map((number)=>{
    return number*number; //return values of callback function that are going to be stored in the map return array
})
console.log(newarr);
//  note:  map return array of all return values;