// Explain the use of the Promise.all() method with an example.

const promise1 = new Promise((resolve, reject) => {
     resolve("Promise 1 has resolved.")
})
const promise2 = new Promise((resolve, reject) => {
    resolve("Promise 2 has resolved.")
})
const promise3 = new Promise((resolve, reject) => {
    resolve("Promise 3 has resolved.")
})

Promise.all([promise1,promise2,promise3]).then((res) => {    // Promise.all is used to handle all promises to resolve and output will be        
    console.log(res);                                        // in an array
    
})