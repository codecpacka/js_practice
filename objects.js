// const person={
//     name:"ramprasad",
//     age:22,
//     hobbies:["guitar","sleeping","listening music"],
// }

// console.log(person);
for(key in person){
    console.log(`${key}:${person[key]}`);
}


// // get all the keys of an object
// console.log( Object.keys(person));


//computed properties
const keys1="objkey1";
const keys2="objkey2";

const val1="value1";
const val2="value2";
 
const obj={};
obj[keys1]=val1;
obj[keys2]=val2;
console.log(obj);


