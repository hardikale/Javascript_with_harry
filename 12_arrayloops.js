let num = [ 2, 5, 1, 3, 4]

//using for loop with array
for(let i =0 ; i<num.length; i++){
    console.log(num[i]*num[i])
}

//using forEach loop
num.forEach((Element) => {
    console.log(Element*Element)
})  