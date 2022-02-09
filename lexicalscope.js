console.log("checking lexical scope");
const var1="value3";
function myApp() {
  // const var1="value2";
  function func() {}
  const func1 = function () {};
  const func2 = () => {
    // const var1="value1";
    // note:if value of var1 is not found in the scope of this function 
    // then js will look for variable value of this fun2 block
    console.log("value of var1 is " + var1);
  };
  func2();
}

myApp();
