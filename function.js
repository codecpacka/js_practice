console.log("this file contains functions");
//  note:this file contains function and its types
function singHappyBirthday(){
    console.log("happy birthday to you.....");
}

singHappyBirthday();

// note:passing paramets to a javascript  function 
function sum(num1,num2){ //num1,num2 are parameters
    return num1+num2;
}

const value=sum(4,5)//4,5 are called arguments;
console.log("total sum of above passed value is "+value);