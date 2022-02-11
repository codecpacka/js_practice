console.log("default parameters");
// const addTwo=(a,b)=>a+b;
const addTwo=(a,b=6)=>a+b; //hence we keep default value as 6 if no value of b is passed
let sum=addTwo(4,5)
console.log(sum);
//  note:if we dont pass value of any parameters lets say be don't pass 5 in the above function then 4+undefined =Nan(not a number)
sum=addTwo(4)
console.log(`${sum} because one argument is not passed `);