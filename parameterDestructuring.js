console.log("destructuring parameter");


const obj={
    firstName:"ramprasad",
    gender:"male",

}
// const print=(obj)=>{
//     console.log(obj.firstName)
//     console.log(obj.gender)
//     //  note:in below line u will get undefined as their is no key in of name age in obj variable
//     console.log(obj.age)

// }

// imp: now we will destructure obj in function parameter 

const print=({firstName,gender})=>
{
    console.log("printing from inside of destructed parameter");
    console.log(firstName);
    console.log(gender);
}

print(obj);