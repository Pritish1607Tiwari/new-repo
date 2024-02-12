
// ****************************STRINGS*********************************
const firstName = "Pritish";
let lastName = "   Tiwari   ";
console.log("My name is " +  firstName + lastName);
// bapticks
console.log(`My Name is ${firstName} ${lastName}`);

// to convert in upper case and lower case
console.log(firstName.toUpperCase());
console.log(lastName.toLowerCase());

//to know index of characxter and vice versa
console.log(firstName.charAt(5));
console.log(lastName.indexOf('s'));

//for slicing the string and trim the spaces
console.log(firstName.slice(-6, 3));
console.log(lastName.trim());

//substring
console.log(firstName.substring(2,5));
