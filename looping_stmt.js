for (let i = 1; i <= 5; i++) {
    console.log(i);
}

let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}

let j = 1;
do {
    console.log(j);
    j++;
} while (j <= 5);

let arr = [10, 20, 30];

for (let value of arr) {
    console.log(value);
}

for (let index in arr) {
    console.log(arr[index]);
}

let obj = {
    name: "Sakshi",
    age: 22
};

for (let key in obj) {
    console.log(key, obj[key]);
}