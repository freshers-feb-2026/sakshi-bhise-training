console.log(" Start");

function syncTask() {
  console.log(" Synchronous Task");
}

syncTask();

setTimeout(() => {
  console.log(" Asynchronous Task (after 2 seconds)");
}, 2000);

console.log("End");