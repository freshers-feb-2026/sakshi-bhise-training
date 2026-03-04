function getUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("User fetched");
      resolve();
    }, 2000);
  });
}

function getOrders() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Orders fetched");
      resolve();
    }, 2000);
  });
}

function processPayment() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Payment processed");
      resolve();
    }, 2000);
  });
}

function sendEmail() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Email sent");
      resolve();
    }, 2000);
  });
}

getUser()
  .then(() => getOrders())
  .then(() => processPayment())
  .then(() => sendEmail())
  .then(() => console.log("All Done"))
  .catch((error) => console.log(error));