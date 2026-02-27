let num = 10;

if (num > 0) {
    console.log("Positive");
}

if (num > 0) {
    console.log("Positive");
} else {
    console.log("Negative");
}

if (num > 0) {
    console.log("Positive");
} else if (num === 0) {
    console.log("Zero");
} else {
    console.log("Negative");
}

let day = 2;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    default:
        console.log("Invalid");
}

let result = (num > 0) ? "Positive" : "Negative";
console.log(result);