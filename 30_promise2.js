function checkWeather(isSunny){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(isSunny){
            resolve('It is sunny outside.')
        }else{
            reject('It is not so sunny outside.')
        }
    },3000)
    });
}

checkWeather(true)
.then(message=>{
    console.log('BINGO:',message) //this will run
})
.catch((error)=>{
    console.log('Oh no!', error) //this will not run
})
.finally(()=>{
    console.log('-----CHECK SUCCESSFULL-----')
})

checkWeather(false)
.then(message=>{
    //this wont run
})
.catch(error =>{
    console.log('Oh no!' ,error)
})
