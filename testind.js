console.log("this is for teting function overloading");
 function test(firstName){
     console.log(firstName); 
 }
 function test(firstName,lastName){
     console.log(firstName,lastName);
 }

 test("ram")
 test("ram","prasad")