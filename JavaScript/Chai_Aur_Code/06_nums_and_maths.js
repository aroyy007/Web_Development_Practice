"user strict";
const score = 400;
console.log(score);

const balance = new Number(450);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));  // prints number with 2 decimal points

console.log(Number.MAX_VALUE);   // prints maximum value of number
console.log(Number.MIN_VALUE);   // prints minimum value of number

console.log(Number.POSITIVE_INFINITY);   // prints positive infinity
console.log(Number.NEGATIVE_INFINITY);   // prints negative infinity


const num1 = 10.89321;
console.log(Math.round(num1));  // prints rounded number
console.log(Math.ceil(num1));  // prints ceil number
console.log(Math.floor(num1));  // prints floor number

console.log(Math.PI);  // prints value of PI
console.log(Math.E);  // prints value of E


console.log(Math.toPrecision(num1));  // prints number with precision

console.log(Math.abs(-num1));  // prints absolute number
console.log(Math.sqrt(num1));  // prints square root of number

console.log(Math.pow(num1, 2));  // prints power of number

console.log(Math.min(10, 20, 30, 40));  // prints minimum number
console.log(Math.max(10, 20, 30, 40));  // prints maximum number

console.log(Math.random());  // prints random number between 0 and 1
console.log(Math.floor(Math.random() * 10));  // prints random number between 0 and 9
console.log(Math.floor(Math.random() * 10) + 1);  // prints random number between 1 and 10

//Sorting Arrays
const numbers = [1, 3, 5, 2, 4, 6];
console.log(numbers.sort());  // prints sorted array in ascending order
console.log(numbers.sort((a, b) => a - b));  // prints sorted array in ascending order
console.log(numbers.sort((a, b) => b - a));  // prints sorted array in descending order

const names = ["John", "Doe", "Alice", "Bob"];
console.log(names.sort());  // prints sorted array
console.log(names.sort((a, b) => a.localeCompare(b)));  // prints sorted array



