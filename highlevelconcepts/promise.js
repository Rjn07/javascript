const simran =    new Promise((resolve, reject) => { 
    let parentDecisionn =false;
    if(parentDecisionn==true){
        resolve("chalo shadi ki tyari karo ")
    }else{
        reject("papa nahi mane baby")
    }
 })

 simran.then((message)=>console.log(message)) // then is used to prinnt positive side
 .catch((message)=>console.log(message)) // catch is used to print -ve side 



//+++++++++++++++++++ promise usinng variable +++++++++++
 const printHello = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve("hello world")
    },3000
)})

printHello
.then((message) => console.log(message));

// ++++++promise using function+++++++++++++++++

function printhello(){
return new Promise((resolve)=>{
    setTimeout(()=>{
        resolve("system")
    },3000)
})
}

printhello()
.then((message)=>console.log(message)) // message are the arguement we can take no of argument accordinng to the given argue in resol