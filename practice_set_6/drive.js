// write a program using prompt function to take  input of age as a value  from the user and use alert to tell whether he can drive or 

do {
    let age = Number.parseInt(prompt("Enter your Age below:"));
// document.body.innerHTML = (`AGE = ${age}`);

const canDrive = (age) => {
    return age>=18?true:false;
}

if (canDrive(age)) {
    alert("You can Drive !");
} else {
    alert("You cannot Drive !");
}


   var again =  confirm("Do you want the prompt again?"); //if use let, it can,t be accessed outside loop

} while (again==true);
