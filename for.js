// printing sum of n natural number
console.log("printing sum of n natural numbers");
let num = prompt("enter a positive number");
var sum = 0;
for (let i = 0; i <= num; i++) {
    sum = sum + i;
}
console.log(`sum of ${num} natural numbers is ${sum}`);