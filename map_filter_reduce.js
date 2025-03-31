//map
const arr = [10, 20, 30, 40, 50]
let a = arr.map((item,index,array) =>{
    console.log(item)
    return item+index
})
console.log(a)

//filter
let arr1 = [1,2,3,4]
const b = arr1.filter(item => item % 2 == 0)
console.log(b)

console.log(arr + " " + arr1)