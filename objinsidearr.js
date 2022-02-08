//objects inside array
console.log("objinsidearr");
const users=[{userId:1,firstName:"ramprasad",gender:"male"},{userId:2,firstName:"sarkar",gender:"male"},{userId:3,firstName:"shyam",gender:"male"},
];

for(let user of users){
   for(let key in user){
       console.log(user[key]);
   }
}