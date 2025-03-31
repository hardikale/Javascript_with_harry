alert("Hello! Your script works!");

let a = Number.parseInt(prompt("Enter value for a:", "000"));
alert(`${a} is of type ${typeof a}`);
let write = confirm("Do you want this to be shown in website?");
if (write) {
    document.body.innerHTML += `<p>Value of a: ${a}</p>`;
} else {
    document.body.innerHTML += "Chose not to show.";
}
