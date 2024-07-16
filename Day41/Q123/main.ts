// This function iterates through a string and logs each character until it finds a vowel
 function iteratesThroughString(str:string){
    let vowel:string = "AEIOUaeiou"
    for (let char of str){
        if (vowel.includes(char)){
           console.log(`Found vowel ${char}`);
           break;
        }
        console.log(char);
    }
 }
 iteratesThroughString ("Amna")
 console.log("------------------------");
 iteratesThroughString("wynphv")