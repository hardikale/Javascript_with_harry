console.log(document.body)
console.log(document.body.firstChild)
console.log(document.body.lastChild)
console.log(document.body.childNodes) //includes all node types(elements,texts,comments)
console.log(document.body.children) //includes element nodes


console.log(document.getElementById('container').children)
//OR
const container = document.getElementById('container')
console.log(container.children)