// ********** Comparison **********

console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);


console.log("2" > 1);
console.log("02" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);


let a = '5';
let b = 5;

console.log(a == b);  // true, because '5' is coerced to a number before comparison
console.log(a === b); // false, because '5' (string) and 5 (number) are of different types

