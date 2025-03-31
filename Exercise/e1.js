//write a javascript program to generate a random number and store it in a variable. the program then takes an input from the user to tell them whether the guess was correct, greater or lower than the original number.
//100 - (number of guess) is the score of the user
//the program is expected to terminate once the number is guessed. number should be between  1-100

const prompt = require ('prompt-sync')();

let rnum = Math.floor(Math.random()*100)+1;
let life;
// console.log(rnum);
for ( life = 2; life >= 1; life--) {
    
let guess = parseInt(prompt("guess a number betwclseen 1 to 100: "));

if(guess>=1 && guess<=100){
    if (guess == rnum) {
    console.log("CORRECT GUESS! the number is "+rnum);
    console.log("Your score is "+life+ "!");
    break;
    } else if (guess < rnum){
    console.log("Guess Higher!");
    }
    else {
    console.log("Guess Lower!");
    }
}
else{
    console.log("Between 1 to 100. AGAIN!");
}

}

if (life === 0) {
    console.log(" Out of attempts! The number was " + rnum);
}