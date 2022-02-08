console.log("different types of functions");
function simple(name){
  console.log(`my name is $name`);
}
simple("ramprasad");


// function expression

// const expfunction=function(){
//     console.log("this is a expression function");
// }

// expfunction();
//arrow functions
console.log(" arrow funtions");
const expfunction=()=>{
    console.log("this is a expression function");
}
const sumThreeNumber=(number1,number2,number3)=>{
    console.log("sum of three number is ");
    return number1+number2+number3;
}
console.log(sumThreeNumber(2,3,5));
