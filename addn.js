console.log("adding n numbers using singel function");
const addn=(...a)=>{
    let sum=0;
    for(let array in a){
        
        sum=sum+a[array]

    }
    console.log(typeof(sum));
    console.log(`sum of all elements is ${sum}`);
}

addn(1,2,3,5);
