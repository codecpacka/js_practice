console.log("objects and the properties");
const person={
    name:"ramprasad",
    age:22,
    hobbies:["guitat","palyingsports","reading"]

}
person.height=169;
// console.log(person);
// console.log(typeof(person));
console.log(person["name"]); ///keys in javascript object are by default string.
console.log("using loops");
// for(let i in person){ //i contains key properties directley
//     console.log(person[i]);
// }

// console.log(Object.keys(person)); //returns key as Array

// for(let i of Object.keys(person)){
//     console.log(`${i}: ${person[i]}`);
// }

//computed properties using variables value in object
const value1="key1"
const value2="key3"

const fistName="ramprasad"
const age=3;

console.log("Creating object by computing values");
const obj={
    [value1]:fistName,  
    [value2]:age
}
console.log(obj);

//object destructuring
const band={
    bandname:"ramp",
    famousSong:"hello",
};
//traditional way of storing 
// let bandName=band["bandname"];
// console.log(bandName);

// destructuring objects 
// note:variable name should be same as key name in simple destruceing 
console.log(band);
const {bandname,famousSong }=band;
console.log(bandname);
console.log(famousSong);
// console.log(var2);
console.log("now if we want to use variable name different form key name then use another syntax")
let {bandname:var1,famousSong:var2}=band;
console.log(var1,var2);