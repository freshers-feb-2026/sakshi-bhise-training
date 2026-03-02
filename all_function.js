function greet() {
  console.log("Hello from Simple Function");
}
greet();

let anon = function() {
  console.log("Hello from Anonymous Function");
};
anon();

let arrow = () => {
  console.log("Hello from Arrow Function");
};
arrow();

let sayHi = function() {
  console.log("Hi (Function stored in variable)");
};
sayHi();

function execute(fn) {
  fn();
}

execute(function() {
  console.log("Function passed as argument");
});

function outer() {
  return function() {
    console.log("Function returned from another function");
  };
}

let returnedFunction = outer();
returnedFunction();