// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that
//  modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to
//   see that the list has actually been modified.

const magiciansNames: string[] = ["Harry Houdini", "David Blaine", "Criss Angel"]
function showMagicians(magicians:string[]){
    magiciansNames.forEach((magiciansNames) => {
        console.log(magiciansNames);
    })
}
function makeGreat(magicians:string[]){
    for(let i = 0; i < magicians.length; i++ ){
        magiciansNames[i] = " The Great " + magicians[i]
    }
}
makeGreat(magiciansNames);
showMagicians(magiciansNames);