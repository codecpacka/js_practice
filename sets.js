console.log("sets are also iterable");
//store data
// sets also have its own methods
//no index-based access
// imp: order is not garanteed
// unique items only(no duplication allowed)

// const number=new Set([1,2,3,4,2,4]) //note: varibale num would only have 1,2,3,4 elements because duplication by default is not allowd in sets
const items=['item1',"item2","item3"]
// creating empty set
const number=new Set();
// number.add(1);//note: u can use add function in set to add values
// number.add(2);
// number.add(3);
number.add(items)
number.add(items)
console.log(number);
// problem: seprate set of unique elemernts for an array contaning duplicates 
const arr=[1,6,5,9,6,3,2,5,6];
const uniqueElements=new Set(arr);
uniqueElements.forEach(number=>console.log(number))