const user = {
    userName : "Stark",
    price : 999,

    welcomeMessage: function()
    {
        console.log(`Welcome ${this.userName} to our website. The price of the product is ${this.price}`);
        console.log(this);
    }
}


//console.log(user.welcomeMessage());  
user.welcomeMessage();
user.userName = "Thor";
user.price = 1000;
user.welcomeMessage();

console.log(this);  // {} // window object in browser and global object in Node.js 


// **** Arrow Function ****

const user1 = () => {    // Arrow Function  // Arrow Function does not have its own this keyword
    let userName = "Stark";
    console.log(this);
}


const addTwo1 = (num1,num2) => num1 + num2;  // Arrow Function with implicit return statement
console.log(addTwo1(5,6));

const addThree = (num1,num2,num3) => (num1 + num2 + num3);   // Arrow Function with explicit return statement

console.log(addThree(5,6,7));
