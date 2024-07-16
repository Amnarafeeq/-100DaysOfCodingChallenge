// Write a function that returns the current date in the format "DD-MM-YYYY

function currentDate():string{
    let date: Date = new Date()
    return date.toLocaleDateString()
}
console.log("Current date is :",currentDate());
