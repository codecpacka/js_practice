// imp: important function calling methods 
// call
// apply
// bind
function hello(){
    console.log("hello world");
}
hello.call();
//  problem: use one objects function  for another function 
// const user1={
//     firstName:"harshit",
//     age:8,
//     about:function(hobby,favMusician){
//         console.log(this.firstName,this.age,hobby,favMusician);
//     }
// }

// const user2={
//     firstName:"ramprasad",
//     age:4,
// }

// user1.about.call(user2,"badminton","koiBhiNahi");

// problem: now doing the above same in different manner
function about(hobby,favMusician){
    console.log(this.firstName,this.age,hobby,favMusician);
}
const user1={
    firstName:"harshit",
    age:8,
    
}

const user2={
    firstName:"ramprasad",
    age:4,
}

about.call(user1,"badminton","koiBhiNahi");

//apply 
// same as call by extra arguments are passed in the form of array

about.apply(user2,["rampr","shyam"])

//bind
//performs call internally ,return a function that contains static value instead of this

const binded=about.bind(user1,"rr","ppp");
//calling binded function
binded();
// problem: the above function works different with arrow function

const user3={
    firstName:"ramprasad",
    age:21,
    about:()=>{
        console.log(this);
    }
}

user3.about();
//u cannot change this of arrow function
//this cannot be changed
