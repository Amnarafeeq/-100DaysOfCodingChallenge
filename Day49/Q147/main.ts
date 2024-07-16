// Function that uses a callback pattern, including error handling
function userLogin(
    callback: (error: Error | null, userEmail: string, userPassword:number) => void
  ): void {
    // Simulating an error condition
    const error = new Error("Incorrect email or Password.");
    const userEmail = "amna12@gmail.com";
    const userPassword = 12346;
    // Simulate fetching data with a chance of error
    if (userEmail === "amna12@gmail.com" && userPassword === 12346) {
      callback(null, userEmail,userPassword); // No error, data is fetched successfully
    } else {
      callback(error,userEmail,userPassword); // Passes error to the callback
    }
  }
  
  // Using the fetchData function with error handling in the callback

  userLogin((error, userEmail,userPassword) => {
    if (error) {
      console.error(error.message); // Handles the error
    } else {
      console.log(userEmail,userPassword); // Processes the data
    }
  });
  // Demonstrates a callback pattern where errors are handled gracefully.