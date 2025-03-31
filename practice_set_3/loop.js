const prompt = require('prompt-sync')();
    let a = prompt("Enter correct number between 1 to 20: ");
while( a!=12){
    console.log("try again!");
    a = prompt("Enter correct number between 1 to 20: ");
}

console.log("12 is the correct number.");