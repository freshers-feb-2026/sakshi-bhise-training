function multiply(a, b) {
  let result = a * b;
  console.log("Multiply Result:", result);
}

function add(a, b) {
  let result = a + b;
  console.log("Add Result:", result);
}

function calculateTotal(prices) {
  let total = 0;

  for (let i = 0; i < prices.length; i++) {
    total = total + prices[i];

  }

  console.log("Final Subtotal:", total);
}

let cartItems = [100, 200, 300, 400];

console.log("Items:", cartItems);

calculateTotal(cartItems);

add(10, 20);
multiply(5, 6);

console.log("Process Completed");