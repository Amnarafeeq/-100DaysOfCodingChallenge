// Create a function that assigns a grade (A, B, C, D, F) based on a student's score.
function assignsStudentsGrades(score:number):string {
    if (score >= 90){
        return "A Grade"
    } else if (score >= 80){
        return "B Grade"
    } else if (score >= 70){
        return "C Grade"
    } else if (score >= 60){
        return "D Grade"
    } else {
        return "F"
    }
}
console.log(assignsStudentsGrades(97));
console.log(assignsStudentsGrades(83));
console.log(assignsStudentsGrades(70));
console.log(assignsStudentsGrades(66));
console.log(assignsStudentsGrades(58));



