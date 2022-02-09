// note:calling one function from inside of another function
const app=()=>{
    const myFunc=()=>{
        console.log("hello from my function");
    }
    const addTwoNumber=(num1,num2)=>num1+num2;
    const mulTwoNumber=(num1,num2)=>num1*num2;
    console.log("inside app");
    myFunc();

}
app();