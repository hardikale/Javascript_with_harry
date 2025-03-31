//create an array of numbers and take input from the user to add numbers to this array

const prompt = require('prompt-sync')();

let arr = [1,2,3,4,5,6];
let a = prompt('enter a number:');
a = Number.parseInt(a);
arr.push(a);
console.log(arr);