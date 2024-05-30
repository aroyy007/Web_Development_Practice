// [{},{},{}]     array of objects

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {    // for-of loop is used to iterate over the array elements
    console.log(num)        //
}

const greet = "Hello World"
for (const item of greet) {
    console.log(`Character: ${item}`);
}

const map = new Map();

map.set("IN", "India");
map.set("US", "United States");
map.set("UK", "United Kingdom");
map.set("IN", "India");

console.log(map);

for (const [key, value] of map) {
    console.log(`Key: ${key} Value: ${value}`);

}

const myObject = {
    'game1': 'Cricket',
    'game2': 'Football',
}

for (const [key, value] of Object.entries(myObject))    // not work for previous syntex 
{
    console.log(`Key: ${key} Value: ${value}`);
}
