console.log("function is a ==> function + object");
console.log("prototype is a simple object that u get free with function");
function hello(){
    console.log("hello");
}

console.log(hello); 

console.log("adding property to a function like we add property(i.e key ) in object");

hello.myOwnProperty="is is a custom property";
console.log(hello.myOwnProperty);
// imp: only function has prototype property 
if(hello.prototype){
    console.log("prototype is present");
}else{
    console.log("prototype not present");
}
console.log("adding property to prototype");
hello.prototype.abc="abc";
console.log(hello.prototype);