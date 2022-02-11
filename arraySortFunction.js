console.log("array sort function");
// imp:  this sort function sort numbers as an string i.e according on ansii code a=97,A=58 and so on that means 
const arr=[23,56,98,72,2000];
// imp:  this sort function changes the original array dirctley
console.log("initial array");
console.log(arr);// printing wrong out as per interger value
arr.sort();
console.log("initial array sorted number as string invalid output");
console.log(arr);// printing wrong out as per interger value

// problem: sort the above array in asending order as integer 
//  note: by default sort function takes an compare function which sorts the element
arr.sort((a,b)=>{
    return a-b;
})
console.log("array sorted in ascending order");
console.log(arr);

// problem: sort the above array in descending order
arr.sort((a,b)=>b-a);
console.log("array sorted in descending order");
console.log(arr);

// problem:  sort the below list of array objects according to their ascending price
// const tempArr = [
//     { productName: "shampoo", price: 2200 },
//     { productName: "conditioner", price: 1100 },
//     { productName: "deo ", price: 180 }
// ]
// console.log("initial array");
// console.table(tempArr);
// tempArr.sort((a,b)=>{
//     return a.price-b.price;
// })
// console.log("after sorting the above object");
// console.table(tempArr);

// problem: clone the array and then sort the above object
const tempArr = [
        { productName: "shampoo", price: 2200 },
         { productName: "conditioner", price: 1100 },
        { productName: "deo ", price: 180 }
     ]
const lowToHigh=tempArr.slice(0).sort((a,b)=>a.price-b.price);
console.table(lowToHigh);
