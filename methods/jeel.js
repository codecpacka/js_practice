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
    name: "cbdfdf",
    parentKey: "CTC",
  },
  {
    key: "CTC",
    name: "b",
    parentKey: "CTC",
  },
  {
    key: "DDFF1",
    name: "d",
    parentKey: "DFFF",
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
  {
    key: "DFFF",
    name: "d",
    parentKey: "DF",
  },
];
const newarr = []; //creating new blank array
//function to match  (key) of the object\
//note :if matched the element is deleted from main array
function bykey(element, index) {
  if (element.key === "CTC") {
    newarr.push(element);
    // console.log(index);
    mainArray.splice(index, 1);
  }
}
//function to match (ParentKey) key of the object
//note :if matched the element is deleted from main array
function byParentKey(element, index) {
  if (element.parentKey === "CTC") {
    newarr.push(element);
    // console.log(index);
    mainArray.splice(index, 1);
  }
}
console.table(mainArray);
mainArray.forEach(bykey);
mainArray.forEach(byParentKey);
// now sorting the elment left in the main array by key (name) in desending alphabatical order
mainArray.forEach((pkey) => {
  var sum = Number(0);
  for (let i = 0; i < pkey.name.length; i++) {
    // console.log(pkey.name.charCodeAt(i));
    sum = sum + pkey.name.charCodeAt(i);
  }
  //   console.log(sum);  hint how array is sorted
  pkey.value = sum;
});
mainArray.sort((a, b) => {
  if(a.name===b.name)
   {a.value-b.value;
    return;
  }
   b.value - a.value

});
for (let element of mainArray) {
  delete element.value;
}
newarr.push(...mainArray); // pushing sorted element in the new array

console.table(newarr);
