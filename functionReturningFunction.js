console.log("function returning function");
//  note:the below function is returning a function

const func=()=>{
    const hello=()=>{
        return "hello world";

    }
    return hello;
}
//  note:the above function could also be written as this is returning arrow function
const funcType=()=>{
    return ()=>{
        return "hello arrow world"
    }
}
const ans=func(); //function func() return function hello();
console.log(ans);//prints whole function as string
console.log(ans());//excutes the function
const fun2=funcType();
console.log(fun2());
