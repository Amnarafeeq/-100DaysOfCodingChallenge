// Create a JavaScript snippet that calculates and logs how many days are left until New Year.

function daysUntilNewYear(): number{
    const today: Date = new Date();
    const newYear:Date = new Date(today.getFullYear() + 1, 0, 1);
    const diffInMilliSec:number = newYear.getTime() - today.getTime();
    const date:number = Math.ceil(diffInMilliSec / (1000 * 60 * 60 *24))
    return date
}
console.log(daysUntilNewYear()+' '+ "days are left in New Year's event.");
