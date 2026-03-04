
console.log("Application Started");

function getUser() {
  setTimeout(() => {
    console.log("User data fetched");
  }, 2000);
}

function getOrders() {
  setTimeout(() => {
    console.log("Orders fetched");
  }, 3000);
}

function processPayment() {
  setTimeout(() => {
    console.log("Payment processed");
  }, 1500);
}

function sendEmail() {
  setTimeout(() => {
    console.log("Confirmation email sent");
  }, 1000);
}

function generateReport() {
  setTimeout(() => {
    console.log("Report generated");
  }, 2500);
}

console.log("Fetching user...");
getUser();

console.log("Fetching orders...");
getOrders();

console.log("Processing payment...");
processPayment();

console.log("Sending email...");
sendEmail();

console.log("Generating report...");
generateReport();

console.log("Application Finished");