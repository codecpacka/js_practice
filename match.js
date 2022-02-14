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
const newarr=[];
function bykey(element,index){
if(element.key==="CTC")
{
    newarr.push(element);
    console.log(index);
    mainArray.splice(index,1);
    
}
}
function byParentKey(element,index){
    if(element.parentKey==="CTC")
    {
        newarr.push(element);
        console.log(index);
        mainArray.splice(index,1);
        
    }
    }

mainArray.forEach(bykey);
mainArray.forEach(byParentKey);
newarr.push(...mainArray);
console.table(newarr);
// console.table(mainArray)