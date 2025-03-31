//use filter for numbers divisible by 10 from a given array
let arr = [234, 6750 , 60, 565, 2, 10, 456, 88, 90];
let div10 = arr.filter(num => num % 10 == 0);
console.log(div10);