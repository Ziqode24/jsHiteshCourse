// promise

const promise = new Promise((resolve, reject) =>{

  const allWhite = false;

  if(!allWhite){
    resolve("all things are white")
}else{
    reject("not all things are white")
  }
})

console.log(promise)