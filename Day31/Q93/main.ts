// Find the index of "Banana" in an array of fruits and replace it with "Mango".

function replaceBananaWithMango(array:string[]):void{
     const index = array.indexOf("Banana")
     array[index] = "Mango"; 
}
let fruitsNames:string[] = ["Apple", "Banana", "Orange"]
replaceBananaWithMango(fruitsNames)
console.log(fruitsNames);
