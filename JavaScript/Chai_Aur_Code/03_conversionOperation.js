"user strict";
let score ="33"

// console.log(typeof score);
// console.log(typeof(score));

let valueInNumber = Number(score);
// console.log(typeof valueInNumber);
// console.log(valueInNumber);


let isLoggedIn = 1;

let booleanLoggedIn = Boolean(isLoggedIn);
// console.log(booleanLoggedIn);

let isNumber = 33;

// console.log(typeof isNumber);

let stringNumber = String(isNumber);
// console.log(typeof stringNumber);
// console.log(stringNumber);

// "33" => 33
// "33abc" => NaN
// true => 1
// false => 0
// null => 0
// undefined => NaN
// "" => 0


// ********** Operations **********

let val = 3;
let negVal = -val;
//console.log(negVal);


//console.log(3 + 3);
//console.log(3 - 3);
//console.log(3 * 3);
//console.log(3 ** 4);  // 3^4 for power operation

let str1 = "Hello";
let str2 = " World";
//console.log(str1 + str2);

console.log(3 + "3");  // 33
console.log("3" + 2);  // 32
console.log(3 + 2 + "3");  // 53
console.log("3" + 3 + 2);  // 332

// if string in first position then it will concatenate
// if number in first position then it will add the numbers and then concatenate with string
// * Resource : https://tc39.es/ecma262/#sec-tonumber

console.log(+true);  // 1   //Not good practice
console.log(+"");   // 0    // Not good practice

// link to study
// * https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion

