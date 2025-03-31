let str = 'the amount is 2000'


let excess = 'the amount is '
// let amount = str.slice(excess.length)
let amount = str.slice('the amount is '.length)
console.log(amount)
console.log(typeof amount)
