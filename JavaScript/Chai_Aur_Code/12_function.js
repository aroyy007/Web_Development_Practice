
// JavaScript is a loosely typed language
function sayMyName() {
    console.log("H");
    console.log("E");
    console.log("L");
    console.log("L");
    console.log("O");
}

sayMyName();

function addTwoNumbers(a, b) {
    // console.log(a + b);
    let sum = a + b;   // Local Variable
    return sum;
}

const res = addTwoNumbers(2, 3);
console.log(res);
const res2 = addTwoNumbers(5, "a");
console.log(res2);

function loginUserMessage(userName)  // Default Parameters - If no value is passed, then the default value is used
{
    if (!userName)  // Falsy values in JavaScript are: false, 0, "", null, undefined, NaN
    {
        return "Please enter a valid username";  // Early return
    }
    return `${userName} just logged in`;
}

const message = loginUserMessage("Stark");
console.log(message);

const message2 = loginUserMessage();
console.log(message2);

function calculateCartPrice(...num)  // Rest Operator - It is used to pass multiple arguments to a function
{
    return num;
}
console.log(calculateCartPrice(100, 200, 300, 400, 500));

const user = {
    userName: "Stark",
    userAge: 45
}

function getUserDetails(user) {
    console.log(`User Name: ${user.userName} and User Age: ${user.userAge}`);
}

getUserDetails(user);
getUserDetails({ userName: "Thor", userAge: 150 });

const myNewArr = [200, 400, 100, 600]

function secondValue(arr) {
    return arr[1];
}

console.log(secondValue(myNewArr));
console.log(secondValue([100, 900, 300, 400, 500]));

function getFullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}

console.log(getFullName("Tony", "Stark"));

