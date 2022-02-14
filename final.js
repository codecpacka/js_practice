var field = "CTC";
var mainArray = [
  {
    key: "CTC",
    name: "a",
    parentKey: "CTC",
  },
  {
    key: "AF",
    name: "ad",
    parentKey: "DF",
  },
  {
    key: "PF",
    name: "c",
    parentKey: "CTC",
  },
  {
    key: "CTC",
    name: "b",
    parentKey: "CTC",
  },
  {
    key: "DDF",
    name: "dd",
    parentKey: "PF",
  },
  {
    key: "DF",
    name: "d",
    parentKey: "CTC",
  },
];

console.table(mainArray);//printing initial array

mainArray.forEach((pkey) => {
  var sum=Number(0);
    for(let i=0;i<pkey.name.length;i++){
    // console.log(pkey.name.charCodeAt(i));
        sum=sum+pkey.name.charCodeAt(i);
  }
//   console.log(sum);  hint how array is sorted 
  pkey.value=sum;
});
mainArray.sort((a,b)=>a.value-b.value);
// for(let element of mainArray){
//     delete element.value;
// }
console.table(mainArray);

// console.log(newarr);
