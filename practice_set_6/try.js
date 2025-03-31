// write a program using prompt function to take  input of age as a value  from the user and use alert to tell whether he can drive or not

let age = Number.parseInt(prompt("Enter Your Age Below :"));

if (age => 18) {
    alert("You can DRIVE!");
} 
else if(age < 18) {
    alert("You cannot Drive");
}