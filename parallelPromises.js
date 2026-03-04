function task1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Task 1 completed");
      resolve("Result 1");
    }, 2000);
  });
}

function task2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Task 2 failed");
      reject("Error in Task 2");
    }, 500);
  });
}

function task3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Task 3 completed");
      resolve("Result 3");
    }, 1000);
  });
}

Promise.all([task1(), task2(), task3()])
  .then((results) => console.log("Promise.all:", results))
  .catch((error) => console.log("Promise.all Error:", error));

 Promise.allSettled([task1(), task2(), task3()])
   .then((results) => console.log("Promise.allSettled:", results));

Promise.race([task1(), task2(), task3()])
  .then((result) => console.log("Promise.race:", result))
  .catch((error) => console.log("Promise.race Error:", error));

Promise.any([task1(), task2(), task3()])
  .then((result) => console.log("Promise.any:", result))
  .catch((error) => console.log("Promise.any Error:", error));