console.log("some important array functions");
// imp:  below are few important array functions
//forEach
//map
//filter
//reduce

// Problem: create an array which takes two paramerter 1.an element from array 2. its index & prints element*2 ;
const arr = [2, 4, 9, 5];
// const mulBy2 = (element, index) => {
//     console.log("index is " + index);
//     console.log(`${element}*2 = ${element * 2}`);
// };

// mulBy2(arr[0], 0);
// mulBy2(arr[1], 1);

// for(let i=0;i<arr.length;i++){
//     mulBy2(arr[i],i);
// }
// note: array.forEach does the same as the above for loop does;
// arr.forEach(mulBy2); 
// imp:  u can either define callback function outside foreach or inside for each function
// arr.forEach(function(element,index){
//     console.log("index is " + index);
//     console.log(`${element}*2 = ${element * 2}`);
// })

//  note:the above way of writing function without name is also called anonymous function
// note: now writng arrow function of above function
arr.forEach((element, index) => {
    console.log("index is " + index);
    console.log(`${element}*2 = ${element * 2}`);

})
// problem:using foreach loop traverse an array which contains object and print only the firstname key values from the array
const users = [
    { firstName: "ramprasad", gender: "male", age: 21 },
    { firstName: "sarkar", gender: "male", age: 21 },
    { firstName: "Kutu", gender: "male", age: 21 },
];

users.forEach(function (user) {
    console.log(user.firstName);
})