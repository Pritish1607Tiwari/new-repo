//conversion in java script

let age = 33;
console.log(typeof age);
age = "33abc";
console.log(typeof age);

let conversion = Number(age);
console.log(typeof conversion);
console.log(conversion);

// "33" = 33
// "33abs" = NaN
// "Null" = 0
// undefined = NaN
// Boolean = 0 or 1

let isLogin = "vasu";
let conLogin = Boolean(isLogin);
console.log(conLogin);
