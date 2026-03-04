console.log("Application Started");

function getUser(callback) {
  setTimeout(() => {
    console.log("User fetched");
    callback();
  }, 2000);
}

function getOrders(callback) {
  setTimeout(() => {
    console.log("Orders fetched");
    callback();
  }, 2000);
}

function processPayment(callback) {
  setTimeout(() => {
    console.log("Payment processed");
    callback();
  }, 2000);
}

function sendEmail() {
  setTimeout(() => {
    console.log("Email sent");
  }, 2000);
}

getUser(() => {
  getOrders(() => {
    processPayment(() => {
      sendEmail();
    });
  });
});