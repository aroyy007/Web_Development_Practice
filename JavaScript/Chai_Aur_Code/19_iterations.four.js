//*** Object  ****/

const myObject =
{
    js: 'JavaScript',
    py: 'Python',
    rb: 'Ruby',
    cs: 'C#',
}

for (const key in myObject) {
    console.log(`Key: ${key} Value: ${myObject[key]}`);
}

//**** Array ****/
const programming = ['JavaScript', 'Python', 'Ruby', 'C#']

for (const key in programming) {
    console.log(`Index: ${key} Value: ${programming[key]}`);
}

//**** Map ****/
const map = new Map();

map.set("IN", "India");
map.set("US", "United States");
map.set("UK", "United Kingdom");
map.set("IN", "India");

for (const key in map) {
    console.log(`Key: ${key} Value: ${map[key]}`);   // undefined because map is not an array or object thats why not work in for-in loop
}
