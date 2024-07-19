const myFunction = () => {
  var x = "string"; // x is function-scoped

  console.log(x); // 10
};

myFunction();
console.log(x); // ReferenceError: x is not defined
