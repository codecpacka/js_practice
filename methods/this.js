// imp: understanding this  
// console.log(this);///here this represents global windows object
// console.log(window);//is the same as above this
// note: all the functions are added in global window object
function myFunc(){
    "use strict"
    // console.log("hello world");
    console.log(this);
}
myFunc();