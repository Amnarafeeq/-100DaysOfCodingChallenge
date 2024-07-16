// Discuss the significance of the await reserved word in asynchronous JavaScript.

function myPromise(): Promise<string> {
  return new Promise((resolve, reject) => {
    const myNumber: number = 90;
    if (myNumber >= 88) {
      resolve("You are passed");
    } else { 
      reject("You are failed");
    }
  });
}
async function checkResult() {   
  try {
    const result = await myPromise();  // The 'await' keyword pauses the execution until the Promise settles, and then resumes 
    console.log(result);               // with the resolved value. It allows to asynchronous, promise-based behavior to be 
  } catch (error) {                    // written in a cleaner way.
    console.log(error);
  }}
checkResult();
