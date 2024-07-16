// Describe how asynchronous callbacks differ from synchronous code execution.

console.log("Before synchronous operation");        // First it will execute 

    for(let i = 1; i<= 10; i++){                    // then it will 
        console.log(i);                 // synchronous code execute in sequence if in this scenario the long code block the  below code                                              
    }

console.log("After synchronous operation "); // This code depends on the above code 

console.log("Before asynchronous operation");    // First it will execute

setTimeout(() => {
    console.log("Asynchronous operation");       // This is asynchronous code it will execute at last without blocking the below code
}, 2000);

console.log("After asynchronous operation");   // This code is not depend on the above code
