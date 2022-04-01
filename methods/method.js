//method
//function inside object
// const person={
//     firstname:"ramprasad",
//     age:21,
//     about:function(){
//         // console.log(this);// this keyword means the object which is calling.
//         // the value of this is calculated at the runtime
//         console.log(`person name is ${this.firstname} & age is ${person.age}`);
//     } 
// }
// problem: define the function outside the object 

function personInfo(){
    
        console.log(`person name is ${this.firstname} & age is ${this.age}`);
    
}
const person={
    firstname:"ramprasad",
    age:22,
    about:personInfo
}
const person2={
    firstname:"sarkar",
    age:12,
    about:personInfo
}
const person3={
    firstname:"kutu",
    age:34,
    about:personInfo
}

person.about();
person2.about();
person3.about();