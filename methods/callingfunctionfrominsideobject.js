// function creatUser(firstName,lastName,email,age,address){
//     const user={};
//     user.firstName=firstName;
//     user.lastName=lastName;
//     user.email=email;
//     user.age=age;
//     user.address=address;
//     user.about=function(){
//         return `${this.firstName} is ${this.age} years old`;

//     }
//     user.is18=function(){
//         return this.age>=18;
//     }
//     return user;
// }
// const user1=creatUser("ramprasad","sarkar","ramprasad.r2600@gmail.com",22,"porbandar");
// const user2=creatUser("sarkar","sarkar","ramprasad.r2600@gmail.com",22,"porbandar");
// const user3=creatUser("kutu","sarkar","ramprasad.r2600@gmail.com",22,"porbandar");
// console.log(user1);
// //  imp: problem with the above code is each object i.e user1,user2,user3 they all  contain both the functions i.e is18 and about

// const is18=user1.is18();
// const about=user1.about();
// console.log(is18);
// console.log(about);

// problem: modify above programme so that for each function memory is not assigned to every  object
const userMethods = {
  about() {
    return `${this.firstName} is ${this.age} years old`;
  },
  is18() {
    return this.age >= 18;
  },
};
function creatUser(firstName, lastName, email, age, address) {
  const user = {};
  user.firstName = firstName;
  user.lastName = lastName;
  user.email = email;
  user.age = age;
  user.address = address;
  // imp: in the below code line we are only assigning the reference of the function so that the memory is not allocated for each and every object
  user.about = userMethods.about;
  user.is18 = userMethods.is18;
  return user;
}

const user1 = creatUser(
  "ramprasad",
  "sarkar",
  "ramprasad.r2600@gmail.com",
  22,
  "porbandar"
);
const user2 = creatUser(
  "sarkar",
  "sarkar",
  "ramprasad.r2600@gmail.com",
  22,
  "porbandar"
);
const user3 = creatUser(
  "kutu",
  "sarkar",
  "ramprasad.r2600@gmail.com",
  22,
  "porbandar"
);
// console.log(user1);
console.log(user1);
console.log(user1.about());
console.log(user2.about(),user2.is18());
