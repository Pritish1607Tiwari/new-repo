const num = 400;
console.log(num);
// to number
const newNum = new Number(500);
console.log(newNum);
//to string
console.log(newNum.toString().length);

// upto decimal places
const othernum = 1000000000;
console.log(othernum.toFixed(3));

//to add commas between the zeroes in a big number
console.log(othernum.toLocaleString('en-IN'));

//convert to exponential
console.log(newNum.toExponential(2));

// precised value
console.log(newNum.toPrecision(3));

//***************************Math **************************************** */
console.log(Math);

let value = 22.6456;
// for round off
console.log(Math.round(value));
console.log(Math.ceil(value));
console.log(Math.floor(value));

// for absolute value
 value = -222;
 console.log(Math.abs(value));

 // random
 console.log(Math.random());
 let max = 25;
 let min = 10;
 console.log(Math.random()*10 + 1);

 // +++++++++++++++++++++++++++++++important line++++++++++++++++++++++++++++++++++++

 console.log(Math.floor(Math.random()*(max-min + 1) + min));

 // for a game of dice
 max = 6;
 min =1;
 console.log(Math.floor(Math.random()*(max-min +1) + min));