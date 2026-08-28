let a = 10;
let b = 20 ;

const promise = new Promise((resolve , reject)=>{
    setTimeout(() => {
        resolve("Operation Successfull")
    }, 3000);
})
promise.then((result)=>{
    console.log(result)
    console.log(a+b)
})
.catch((error)=>{
    console.log(error)
})


let c =prompt("Enter Your Name")
let name="inshal"
let id1= 10;

const promises = new Promise((resolve , reject)=>{
    setTimeout(() => {
        if (c === name){
            alert("Logged In")
            resolve("Operation Successdfull")
            console.log({name : name , id: id1})
        } 
        else{
            alert("Please Try Again")
            reject("Something Went Wrong")
        }
    }, 2000);
})

promises.then((result)=>{
    console.log(result)
})
.catch((error)=>{
    console.log(error)
})
