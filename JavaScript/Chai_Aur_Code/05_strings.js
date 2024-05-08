"user strict";
const name = "stark";
const age = 22;

console.log(name + " is " + age + " years old.");          // Not recommended

console.log(`${name} is ${age} years old.`);   // Modern way of string concatenation

const gameName = new String("Call-of-duty");

console.log(gameName);  // prints string object

console.log(gameName[0]);   // prints 0th index of string

console.log(gameName.charAt(0));  // prints 0th index of string

console.log(gameName.length);  // prints length of string

console.log(gameName[gameName.length - 1]);  // prints last character of string

console.log(gameName.__proto__);  // prints prototype of string

console.log(gameName.toUpperCase());  // prints string in uppercase but not change the original string

console.log(gameName.toLowerCase());  // prints string in lowercase but not change the original string

console.log(gameName.indexOf("l"));  // prints index of first occurrence of character

console.log(gameName.lastIndexOf("l"));  // prints index of last occurrence of character

console.log(gameName.includes("l"));  // prints true if character is present in string

console.log(gameName.startsWith("C"));  // prints true if string starts with character

console.log(gameName.endsWith("y"));  // prints true if string ends with character

console.log(gameName.substring(0, 4));  // prints substring from index 5 not include 5th index

console.log(gameName.slice(0, 4));  // prints substring from index 5 not include 5th index

console.log(gameName.slice(-4));  // prints last 4 characters of string

console.log(gameName.split("-"));  // prints array of string after split by character

console.log(gameName.replace("Call", "New-Call"));  // prints string after replacing first occurrence of character

console.log(gameName.replace(/l/g, "L"));  // prints string after replacing all occurrence of character
/* 
    * The first argument of the replace method, /l/g, is a regular expression that matches the character ‘l’. 
    * The ‘g’ after the slash is a flag that means ‘global’. This tells the replace method to replace all 
    * occurrences of ‘l’, not just the first one.
*/

console.log(gameName.replace(/l/gi, "L"));  // prints string after replacing all occurrence of character with case insensitive
/* 
    * The ‘i’ flag after the ‘g’ flag is another flag that means ‘case-insensitive’. 
    * This tells the replace method to replace all occurrences of ‘l’ regardless of their case.
*/

console.log(gameName.concat("-Warzone"));  // prints string after concatenating with another string but not change the original string

console.log(gameName.trim());  // removes white spaces from start and end of string 

console.log(gameName.repeat(2));  // prints string 2 times

