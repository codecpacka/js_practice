console.log("object inside array destructuring");
const sample=[
    {userId:1,firstName:"ramprasad",gender:'male'},
    {userId:2,firstName:"harshit",gender:'male'},
    {userId:3,firstName:"sarkat",gender:"fe-male"}

]

const[user1,user2,user3]=sample;
console.log(typeof(user1),user2);
console.log(typeof(user2),user3);
console.log(typeof(user3),user1);

console.log("above is simple array destructing now combine it with object destrucing ");

const[{firstName:name},,{gender:sex}]=sample;
console.log(name);
console.log(sex);