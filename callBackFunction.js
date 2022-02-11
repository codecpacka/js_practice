console.log("callback functions");
// note: when a function is passed to another function as argument its called callback funtion

const func2=(name)=>{
    console.log("inside my func2");
    console.log(`my name is ${name}`);
}

const func=(callback)=>{
    console.log(callback);//function will be printed but  not executed
    callback("ramprasad");// function func2 is executed  and value is passed 
}

func(func2); //function func2 is passed as as argument 