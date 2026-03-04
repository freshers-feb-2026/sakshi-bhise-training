let successPromise = Promise.resolve("Operation Successful");

let failurePromise = Promise.reject("Operation Failed");

successPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

failurePromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });