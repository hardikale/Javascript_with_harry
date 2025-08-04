
const choose = Number.parseInt(prompt("Enter 0 for scissor, 1 for rock and 2 for paper"))

if (isNaN(choose) || choose<0 || choose>2) {
    alert("Invalid Input!")
}
else{
const option = ["scissor", "rock", "paper"]
const random = option[Math.floor(Math.random() * option.length)]

alert(`You:${option[choose]} Computer:${random}`)

if (option[choose] == random){
    alert("DRAW")
}
if(choose==0 && random==option[1]){
    alert("Computer WINS")
}
if(choose==0 && random==option[2]){
    alert("You WIN")
}
if(choose==1 && random==option[0]){
    alert("You WIN")
}
if(choose==1 && random==option[2]){
    alert("Computer WINS")
}
if(choose==2 && random==option[0]){
    alert("Computer WINS")
}
if(choose==2 && random==option[1]){
    alert("You WIN")
}
}


// //more optimized code (copied from DEEPSEEK)
// const choose = parseInt(
//   prompt("Enter 0 for scissor, 1 for rock, and 2 for paper")
// );
// const options = ["scissor", "rock", "paper"];

// Winning rules: key loses to value (e.g., "scissor" loses to "rock")
// const winsAgainst = {
//   scissor: "rock",
//   rock: "paper",
//   paper: "scissor",
// };

// // Validate input
// if (isNaN(choose) || choose < 0 || choose > 2) {
//   alert("Invalid input! Please enter 0, 1, or 2.");
// } else {
//   const computerChoice = options[Math.floor(Math.random() * options.length)];
//   const userChoice = options[choose];

//   alert(`Computer chose ${computerChoice}`);

//   // Determine winner
//   if (userChoice === computerChoice) {
//     alert("DRAW");
//   } else if (winsAgainst[userChoice] === computerChoice) {
//     alert("Computer WINS");
//   } else {
//     alert("You WIN");
//   }
// }