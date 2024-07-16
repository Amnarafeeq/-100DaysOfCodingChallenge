// Write a function to remove the last element from an array and return the removed element.

function removeElement(array:string[]):string | undefined{
    return array.pop()
}
let favFruits:string[] = ["Mango", "Strawberry", "Apple"]
console.log(favFruits);                         // Before remove array element
console.log(removeElement(favFruits));          // Removed element 
console.log(favFruits);                         // After removed array   
