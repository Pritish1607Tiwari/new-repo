
const myArr = [0,1,2,3,4,5]
console.log(myArr);
const newArr = new Array(6,7,8,9,10);
console.log(newArr);

// push and pop -- aads and delete from the last
myArr.push(9)
console.log(myArr);
myArr.pop();
console.log(myArr);

// Unshift and shift add and delete from the beginning

newArr.unshift(5);
console.log(newArr);
newArr.shift();
console.log(newArr);

// includes -- boolean
console.log(newArr.includes(9));

// index of
console.log(newArr.indexOf(6));

//join
const Arr = newArr.join()
console.log(newArr);
console.log(Arr);
console.log(typeof Arr);

//Slice -- doesnot affect the original array and splice -- affets the original array

console.log(newArr.slice(0,5));
console.log(newArr.splice(0,4));
console.log(newArr);
