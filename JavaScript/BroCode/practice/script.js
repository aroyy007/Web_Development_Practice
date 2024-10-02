let userName;

document.getElementById("mySubmit").onclick = function () {
    userName = document.getElementById("myText").value;
    //document.getElementById("myText").value = "";
    //console.log(userName);
    document.getElementById("myH1").textContent = `Hello ${userName}`;
}

//** Type Conversion

//let age = window.prompt("Enter your age: ");
//age = Number(age);
//age+=1;

//console.log(age);


let x = "pikachu";
let y = "pikachu";
let z = "pikachu";

x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);

//Constants

const PI = 3.14;
let radius;
// radius = window.prompt("Enter the radius: ");
// radius = Number(radius);

let circumference;
// console.log(circumference);

document.getElementById("mySubmit1").onclick = function () {
    radius = document.getElementById("myText1").value;
    radius = Number(radius);
    console.log("Radius entered: ", radius);
    circumference = 2 * PI * radius;
    document.getElementById("myH2").textContent = `Circumference of the circle is ${circumference}`;
}


//** Counter Element

const decreasedBtn = document.getElementById("decreaseBtn");
const increasedBtn = document.getElementById("increaseBtn");
const resetBtn = document.getElementById("resetBtn");
const countLabel = document.getElementById("countLabel");
let count = 0;

increasedBtn.onclick = function () {
    count++;
    countLabel.textContent = count;
}

decreasedBtn.onclick = function () {
    count--;
    countLabel.textContent = count;
}

resetBtn.onclick = function () {
    count = 0;
    countLabel.textContent = count;
}


//** Random Number Generator

// const min = 50;
// const max = 100;

// let randomNumber = Math.floor(Math.random()*(max-min+1)+min);
// console.log(randomNumber);

const mySubmit2 = document.getElementById("mySubmit2");
const myLabel1 = document.getElementById("myLabel1");
const myLabel2 = document.getElementById("myLabel2");
const myLabel3 = document.getElementById("myLabel3");

const min = 1;
const max = 6;

let randomNumber1, randomNumber2, randomNumber3;

mySubmit2.onclick = function () {
    randomNumber1 = Math.floor(Math.random() * (max - min + 1) + min);
    randomNumber2 = Math.floor(Math.random() * (max - min + 1) + min);
    randomNumber3 = Math.floor(Math.random() * (max - min + 1) + min);
    myLabel1.textContent = randomNumber1;
    myLabel2.textContent = randomNumber2;
    myLabel3.textContent = randomNumber3;
}

// ** If Statements

let age = 18;

if (age >= 18) {
    console.log("You are eligible to vote.");
}
else if (age >= 16) {
    console.log("You can vote in the next election.");
}
else {
    console.log("You are not eligible to vote.");
}


//**CheckBox */

//**CheckBox */
const myCheckBox = document.getElementById("myCheckbox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterBtn");
const paypalBtn = document.getElementById("paypalBtn");
const mySubmit3 = document.getElementById("mySubmit3");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit3.onclick = function () {

    if (myCheckBox.checked) {
        subResult.textContent = "You are subscribed.";
    }
    else {
        subResult.textContent = "You are NOT subscribed.";
    }


    if (visaBtn.checked) {
        paymentResult.textContent = "You have selected Visa.";
    }
    else if (masterCardBtn.checked) {
        paymentResult.textContent = "You have selected MasterCard.";
    }
    else if (paypalBtn.checked) {
        paymentResult.textContent = "You have selected PayPal.";
    }
    else {
        paymentResult.textContent = "Please select a payment method.";
    }
}


//** Ternary Operator */

let age11 = 21;

let result = age11 >= 18 ? "You are an Adult now." : "You are still a child.";
console.log(result);


//** Switch Statement */

let day = 1;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid Day");
        break;
}


//**Method chaining  */
// method chaining is a technique used to simplify code by calling multiple methods on the same object in a single line.
// let userName1 = window.prompt("Enter your name: ");

// userName1 = userName1.trim().charAt(0).toUpperCase() + userName1.trim().slice(1).toLowerCase();
// console.log(userName1);

//** Logical Operator */
//** &&, ||, !
const temp = 25;

if (temp > 0 && temp < 30) {
    console.log("The temperature is good");
}
else {
    console.log("The temperature is not good");
}

//** = Assignment Operator */
//** == Comparison Operator */
//** === Strict Comparison Operator */
//** != Not Equal Operator */
//** !== Strict Inequality Operator */

const PI1 = 3.14;

if (PI1 !== 3.14) {
    console.log("PI is not equal to 3.14");
}
else {
    console.log("PI is equal to 3.14");
}

//** While Loop : Repeat some code while the condition is true */

let userName2 = "TonyStark"
while (userName2 === "") {
    userName2 = window.prompt("Enter your name: ");
}

console.log(`Hello ${userName2}`);

// let loggedIn = false;
// let username;
// let password;

// while (!loggedIn) {
//     //username = window.prompt("Enter your username: ");
//     //password = window.prompt("Enter your password: ");
//     if (username === "admin" && password === "admin123") {
//         loggedIn = true;
//         //console.log("You are now logged in.");
//     }
//     else {
//         //console.log("Invalid credentials. Please try again.");
//     }
// }

//** For loop : repeat some code a limited amount of Time */

for (let i = 10; i > 0; i--) {
    console.log(i);
}
console.log("Happy New Year");

//** NUMBER GUESSING GAME */

const minNum = 1;
const maxNum = 100;

const answer = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);

let attempts = 0;
let guess;
let running = false;

while (running) {
    //guess = window.prompt(`Enter your guess between ${minNum} - ${maxNum} : `);
    guess = Number(guess);

    if (isNaN(guess)) {
        //window.alert("Please enter a valid number.");
    }
    else if (guess < minNum || guess > maxNum) {
        //window.alert("Please enter a number within the range.");
    }
    else {
        attempts++;
        if (guess === answer) {
            //window.alert(`Congratulations! You have guessed the correct number in ${attempts} attempts.`);
            running = false;
        }
        else if (guess < answer) {
            //window.alert("Try a higher number.");
        }
        else {
            // window.alert("Try a lower number.");
        }
    }
}

//** Function */

function happyBirthday() {
    console.log("Happy Birthday to you!");
}
happyBirthday();


//**Temperature converter */


const textBox = document.getElementById("textBox");
const toFar = document.getElementById("toFar");
const toCel = document.getElementById("toCel");
const result1 = document.getElementById("result");
const mySubmit4 = document.getElementById("mySubmit4");

mySubmit4.onclick = function (event) {
    event.preventDefault();

    if (toFar.checked) {
        result1.textContent = ((textBox.value * 9 / 5) + 32).toFixed(1) + " ℉";
    }
    else if (toCel.checked) {
        result1.textContent = ((textBox.value - 32) * 5 / 9).toFixed(1) + " ℃";
    }
    else {
        result1.textContent = "Select a Unit";
    }
}


//** Spread Operator  */

let arr1 = [1, 2, 3, 4, 5];

console.log(arr1);
let maxINum = Math.max(...arr1);
console.log(`Maximum number in arr1 : ${maxINum}`);

let minINum = Math.min(...arr1);
console.log(`Minimum number in arr1 : ${minINum}`);

let arr2 = [6, 7, 8, 9, 10];

let arr3 = [...arr1, ...arr2];

console.log(arr3);


//** REST Operator */

const food1 = "Pizza";
const food2 = "Burger";
const food3 = "Pasta";
const food4 = "Fries";
const food5 = "Ice Cream";

function openFridge(...foods) {
    console.log(...foods);
}

function getFood(...foods) {
    return foods;
}

openFridge(food1, food2, food3, food4, food5);


//** Dice Roller Game */

const rollDice = document.getElementById("rollDice");
rollDice.onclick = function () {

    const numofDice = document.getElementById("numofDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");

    const values = [];
    const images = [];

    for (let i = 0; i < numofDice; i++) {
        const value = Math.floor(Math.random() * 6 + 1);

        values.push(value);
        images.push(`<img src="${value}.png" width="100" height="100">`);
    }

    diceResult.textContent = `Result: ${values.join(", ")}`;
    diceImages.innerHTML = images.join(" ");

}



//**Random Password Generator */

function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols) {
    const lowerCaseChar = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChar = "0123456789";
    const symbolChar = "!@#$%^&*()_+";

    let allowedChar = "";
    let password = "";

    allowedChar += includeLowercase ? lowerCaseChar : "";
    allowedChar += includeUppercase ? upperCaseChar : "";
    allowedChar += includeNumbers ? numberChar : "";
    allowedChar += includeSymbols ? symbolChar : "";

    if (length <= 0) {
        return `Password length should be greater than 0.`;
    }
    if (allowedChar === "") {
        return `At least one character type should be selected.`;
    }

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChar.length);
        password += allowedChar[randomIndex];
    }

    return password;
}

const passwordLength = 6;
const includeUppercase = true;
const includeLowercase = true;
const includeNumbers = true;
const includeSymbols = true;

const password = generatePassword(passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSymbols);
console.log(`Password is : ${password}`);

//** Callback =  a function that is passed as an argument to another function */

hello();
goodbye();

function hello() {
    console.log("Hello");
}

function goodbye() {
    console.log("Goodbye");
}
