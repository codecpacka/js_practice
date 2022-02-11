console.log("Array reduce function");
const arr = [2, 5, 6, 8]
//   note: reduce function takes two parameters in callback function one is accumulator & another is current  and returns value which then becomes accumulator value
//  imp:  reduce could also take an number which becomes the initial value of accumulator
//  problem: to find sum of all number of the array to understand reduce method
const sum = arr.reduce((accumulator, current) => {
    return accumulator + current;
})
console.log("sum of above array is " + sum);
//  problem: given a array of objects find the sum of all the products in the cart
const tempArr = [
    { productName: "shampoo", price: 2200 },
    { productName: "conditioner", price: 1100 }
]
const total=tempArr.reduce((accumulator,product)=>{
    return accumulator + product.price;
},0 
//   note: here  0 is initalized as first value of accumulator
 )
 console.log(total);
 
