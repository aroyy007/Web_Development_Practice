//****** Arrays *******/

const myArr = [0,1,2,3,4,5];
const myHeroes = ["IronMan","Thor","Hulk","Captain America","Black Widow"];
console.log(myHeroes);

myArr.push(6);   // adds element at the end of array
console.log(myArr);

myArr.pop();   // removes element from the end of array
console.log(myArr);

myArr.unshift(-1);   // adds element at the start of array
console.log(myArr);

myArr.shift();   // removes element from the start of array
console.log(myArr);

console.log(myArr.length);   // prints length of array

console.log(myArr.includes(3));   // checks if element is present in array

console.log(myArr.indexOf(3));   // prints index of element

const newArr = myArr.join();  // converts array to string
console.log(newArr);   // 0,1,2,3,4,5

const newArr2 = myArr.join(" ");  // converts array to string with space separator
console.log(newArr2);  // 0 1 2 3 4 5


//Slice,splice

console.log("A ",myArr);
const myArr2 = myArr.slice(1,4);  // extracts elements from array without modifying original array 
console.log("B ",myArr2);  // not including 4

const myArr3 = myArr.splice(1,4);  // removes elements from array and modifies original array
console.log("C ",myArr3); // including 4
console.log("D ",myArr); // 0,5 // 1,2,3,4 removed

