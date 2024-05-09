const marvel_heroes = ["IronMan","Thor","SpiderMan","Hulk"];
const dc_heroes = ["Batman","Superman","Wonder_Woman","Flash"];

marvel_heroes.push(dc_heroes);
console.log(marvel_heroes);

console.log(marvel_heroes[4][2]); // Wonder 
console.log(marvel_heroes[4][2][0]); // W

const allHeroes = marvel_heroes.concat(dc_heroes);
console.log(allHeroes);

const allHeroes2 = [...marvel_heroes, ...dc_heroes];
console.log(allHeroes2);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("Hitesh"))
console.log(Array.from("Captain America"))

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
