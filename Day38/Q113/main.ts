//  Write a function that checks if a Map contains a key for "Canada" and logs the capital if it exists

const countriesNames:Map<string,string> = new Map()
countriesNames.set("Pakistan","Islamabad")
countriesNames.set("France","Paris")
countriesNames.set("Japan", "Tokyo")
console.log(countriesNames);

function logCapitalOfCanada(countriesNames:Map<string,string>){
  if (countriesNames.has("Canada")){
    return `The Capital of "Canada" is ${countriesNames.get("Canada")}`
  }else{
    return `The country "Canada doesn't exist.`
  }
}
console.log(logCapitalOfCanada(countriesNames));
