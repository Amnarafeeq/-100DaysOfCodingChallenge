// Making a Student Template: Create a blueprint for student information, including their name, age, and the 
// classes they're taking, and then fill in this blueprint with an example student.

interface studentInfo {
    name:string,
    age: number,
    class: string[]
}

let studentsInformation: studentInfo = {
    name: "Aiza",
    age: 22,
    class: ["Typescript", "Next.js"]
}

console.log(studentsInformation);
