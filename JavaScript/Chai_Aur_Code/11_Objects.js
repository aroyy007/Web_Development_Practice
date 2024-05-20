const tinderUser = {}

tinderUser.name = "Tony",
    tinderUser.age = 45,
    tinderUser.location = "New York",
    tinderUser.isAvenger = true;

console.log(tinderUser);

const regularUser = {
    email: "ironman@avengers.com",
    password: "iamironman",
    isVerified: true,
    fullName:
    {
        completeName:
        {
            firstName: "Tony",
            lastName: "Stark"
        }
    }
}

console.log(regularUser.fullName.completeName.firstName);

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "a", 4: "b" }
const obj4 = { 5: "a", 6: "b" }

const obj0 = { obj1, obj2 }
const obj3 = Object.assign({}, obj1, obj2, obj4)
const obj5 = { ...obj1, ...obj2, ...obj4 }

console.log(obj3);
console.log(obj0);
console.log(obj5);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const { courseInstructor: instructor } = course

console.log(courseInstructor);
console.log(instructor);
