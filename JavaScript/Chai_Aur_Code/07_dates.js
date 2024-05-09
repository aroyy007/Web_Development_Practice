//*********Dates */

let myDate = new Date();
console.log(myDate);   // prints current date and time in GMT  //2024-05-09T05:16:35.901Z

console.log(myDate.toString()); // prints current date and time in string format  
//Thu May 09 2024 11:16:35 GMT+0600 (Bangladesh Standard Time)

console.log(myDate.toDateString()); // prints current date in string format  //Thu May 09 2024

console.log(myDate.toTimeString()); // prints current time in string format  //11:16:35 GMT+0600 (Bangladesh Standard Time)

console.log(myDate.toLocaleString()); // prints current date and time in local string format  //5/9/2024, 11:16:35 AM

console.log(typeof myDate);  // prints object

console.log(myDate.getFullYear());  // prints year  //2024

console.log(myDate.getMonth() + 1);  // prints month  //5 for May (0 based index)

console.log(myDate.getHours());  // prints hours  //11

console.log(myDate.getMinutes());  // prints minutes  //16

let myCreateDate = new Date(2024, 0, 30);  // 0 based index for month (0 for January)
console.log(myCreateDate.toLocaleString());  // prints date  //30/01/2024, 12:00:00 am

let myCreateDate2 = new Date("2024-01-30");  //YY-MM-DD
console.log(myCreateDate2.toLocaleString());  // prints date  //30/01/2024, 6:00:00 am

let myCreateDate3 = new Date("2024-01-30");  //YY/MM/DD
console.log(myCreateDate3.toLocaleString());  // prints date  //30/01/2024, 6:00:00 am

let myTimeStamp = Date.now()  // prints current timestamp

console.log(myTimeStamp);   // prints current timestamp  //1693767395901
console.log(myCreatedDate.getTime());   // prints timestamp of created date  //1693767395901
console.log(Math.floor(Date.now() / 1000));  // prints current timestamp in seconds  //1693767395

let myDate4 = new Date(1693767395901);
console.log(myDate4.toLocaleString());  // prints date  //5/9/2024, 11:16:35 AM

newDate.toLocaleString('default', {
    weekday: "long",
    
});  // prints day name  //Thursday
