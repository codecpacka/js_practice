console.log("rest parameters");
// note: ...c here ... is rest parameter syntax c is variable
function myFunc(a,b,...c){
console.log(a,b,c);
// imp:here a=12,b=56,c=array of remaining elements
}

myFunc(12,56,23,78,67);

// note:creating a function add all 
// input:all function parameters
// output:sum of all passed parameters

const addAll=(...a)=>{
let sum=0;
console.log(a); //printing elements of a
for(num of a){
sum=sum+num;
}
return sum;
}
console.log("sum of all numbers is "  + addAll(1,3,2,7));

