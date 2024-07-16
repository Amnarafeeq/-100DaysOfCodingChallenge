// Finding the Position of a Substring: Write a function that locates the first occurrence of the word "code" 
// within any given string and returns its position.

function positionOfSubstring(str:string):number{
    return str.indexOf("code")
}
let result:number = positionOfSubstring("I am learning how to write your thoughts into code.")
console.log(result);
