const User = {
    name : "Stark",
    age : 45,
    location : "New York",
    isAvenger : true,
    sayHello : function(){
        console.log("Hello");
    },
    friends : ["Thor", "Hulk", "Cap"]
}

//console.log(User["name"]);    
console.log(User.name); 
console.log(User.age);
console.log(User.location);
console.log(User.isAvenger);
User.sayHello();
console.log(User.friends[0]);
console.log(User.friends[1]);
console.log(User.friends[2]);

User.location = "New Jersey";
console.log(User);

Object.freeze(User);
User.location = "Los Angeles";
console.log(User);
