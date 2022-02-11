console.log("array find method");
const myArray=["hello","Cat","dog","Lion"]
// arrow function is defined below
const isLength3=(string,obj)=>{
    // if(string[0]==='d')
    // return string;
    // string.length===3
    // console.log(string);
    // console.log(index);
    console.log(obj);
};
// console.log(isLength3("ram"));
// console.log(myArray.find(isLength3));// note: calls islength for each function until the islength full fill its criteria.
// problem: find the data of user with userid ===5 using find function
const users=[
    {userId:1,userName:"rampsad"},
    {userId:2,userName:"dd"},
    {userId:3,userName:"mpad"}, 
    {userId:4,userName:"raad"},
    {userId:5,userName:"ramad"},
]

const findUser=user=>user.userId===5;
let person=users.find(findUser);
console.log(person);
