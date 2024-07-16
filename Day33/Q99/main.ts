// Generate a date object representing your next birthday and log it to the console

function getNextBirthday(month: number, day: number): Date {
    const today:Date = new Date();
    const year:number = today.getFullYear();
    const birthday: Date = new Date(year, month - 1, day); 
    if (birthday < today) {

        birthday.setFullYear(year + 1);
    }
    return birthday;
}
const nextBirthday:Date = getNextBirthday(4, 28); 
console.log("\n My next birthday will be on:", nextBirthday.toLocaleDateString());