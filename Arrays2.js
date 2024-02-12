const marvel = [ "ironman" , "hulk" , "thor"];
const dc = ["batman" , "flash" , "aquaman"];

// pushes another Array inside the Array
//marvel.push(dc)
//console.log(marvel);

// concat the arrays and form a new array
const heroes = marvel.concat(dc);
//console.log(heroes);

//Spread
const newHero = [...dc , ...marvel];
console.log(newHero);

// flat for merging diifrent array in one
const Arr = [0,1,2,3,4,5,[0,1,2,3],6,7,[4,5,6,7,[0,1,2,3]]];
const Arr2 = Arr.flat(Infinity);
console.log(Arr);
console.log(Arr2);

// from to form new array and is Array to verify if its a array or not
console.log(Array.from("pritish"));
console.log(Array.isArray(Arr2));

// of
let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1,score2,score3));

// key value pair
console.log(Array.from({name : "pritish"})); // gives empty array bcz whether key or the value is given is not specified
