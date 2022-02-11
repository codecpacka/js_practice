//block scope vs function scope
// imp: let and const are block {} scope
//imp: var is function scope
{
    let name="ramprasad"
    console.log(name);

}
//  note:Because the above statement is outside the scope name variable inside the scope is not accesable

{
    let name="sarkar"
    console.log(name);
}
let name="kutu"
console.log(name);

//  note:in the above code each name variable uses different value because of scope of let 

{
    var firstName="checking var scope";
    console.log(firstName);
}
{
    //  note:unless the above block varibale type is not var the below
    // code won't be able to access the variable firstname
    console.log(firstName);
}