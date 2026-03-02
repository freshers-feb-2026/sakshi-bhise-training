let arr = [10, 20, 30];

console.log(arr[0]);

arr.push(40);

arr.pop();

arr.unshift(5);

arr.shift();

console.log(arr.length);

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

let newArr = arr.map(x => x * 2);
console.log(newArr);

let filtered = arr.filter(x => x > 15);
console.log(filtered);