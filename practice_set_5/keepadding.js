//keep adding numbers to the array in qtn 1 until 0 is added to the array

const prompt = require('prompt-sync')();
let a ;
let arr = [1,2,3,4,5,6];
do {
a = prompt('enter a number:');
a = Number.parseInt(a);
arr.push(a);
} while (a!=0);
console.log(arr);