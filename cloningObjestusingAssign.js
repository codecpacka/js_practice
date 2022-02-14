// cloning object using Object.assign
const obj={

    key1:"value1",
    key2:"value2"
}
// const obj2={...obj}; //one way of cloning array
const obj2=Object.assign({},obj);//one way of cloning  array
obj.key3="value3"
console.log(obj)
console.log(obj2)
