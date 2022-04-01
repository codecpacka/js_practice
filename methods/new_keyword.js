// imp: using new keyword 
// problem: tell how new keyword works
// 1: creates an empty object i.e this={};
// 2:adds funtion methods to this object proto
// 3:return this;

function creatUser(firstName,lastName,age){
    this.firstName=firstName;
    this.lastName=lastName;
    this.age=age;
}
creatUser.prototype.gretting=function(){
   return  `hello ${this.firstName}`}
const user1=new creatUser("ram","prasad",34)
console.log(user1.gretting());
