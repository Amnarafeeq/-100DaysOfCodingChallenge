// Show how to use the .then() and .catch() methods to handle Promise resolution and rejection.

const myPromise = new Promise((resolve,reject) =>{
       let userName:string = "Amna"
       if (userName === "Amna"){
        resolve("Promise resolved")
       }else {
        console.log("Promise Rejected");
       }
})

myPromise
          .then((res) =>{           // .then method is called when promise is resolved
          console.log(res);
})        .catch((error) => {
          console.log(error);     // .catch method is used when promise is rejected.
})