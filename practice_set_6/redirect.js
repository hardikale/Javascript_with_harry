let a = Number.parseInt(prompt("Enter any number:"))
if(a>4){
    location.href = "https://www.google.com"
}
else{
    document.body.innerHTML += (`You Entered = ${a}`)
}