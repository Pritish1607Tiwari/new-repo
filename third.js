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

let isLogin = "vasu"; // true for any number and string except 0 and null string
let conLogin = Boolean(isLogin);
console.log(conLogin);

// ********************************************OPERATIONS*************************************
// + , - , * , / , %

let str1 = "hello";
let str2 = " vasu";
str3 = str1 + str2;
console.log(str3);


console.log(2 + "1");
console.log("2" + 1);
console.log(2+2+"1");
