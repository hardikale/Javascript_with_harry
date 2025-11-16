let p1 = new Promise((resolve,reject)=>{
    console.log("promise is pending")
    setTimeout(() => {
        console.log('promise resolved.')
        resolve(true)
    }, 3000);
})

let p2 = new Promise((resolve,reject)=>{
    console.log("promise is pending")
    setTimeout(() => {
        console.log('promise rejected.')
        reject(new Error('Error occured'))
    }, 3000);
})

p1.then((value)=>{
    console.log(value);
})

p2.catch((error)=>{
    console.log('error detected')
})


