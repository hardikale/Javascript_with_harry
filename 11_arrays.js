let a = []
let b = [10, 34, 12, 20, 30]
console.log(a)
console.log(b)

//ascessing the first element of array
console.log(b[0])

//ascessing the last element of array
console.log(b[b.length-1])

//modifying array element
b[0]=444
console.log(b[0])

//adding element to the starting 
b.unshift(111)

//adding element to the end
b.push(999)

console.log(b)

//concatenating two arrays
c = ["html", "css", "java"]
d = ["github", "react", "figma"]

console.log(c.concat(d))

//sort method

num = [10, 30, 20, 70, 40, 50]

//ascending order
console.log(num.sort((a,b) => a - b))

// descending order
console.log(num.sort((a,b) => b - a))