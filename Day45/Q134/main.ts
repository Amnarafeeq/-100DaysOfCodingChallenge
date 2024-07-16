// Take a JSON string and parse it into a JavaScript object.

const jsonString = `{
    "name": "Flavia",
    "age": 25,
    "country": "USA"
}`
 // JSON.parse used to convert json string to real javascript object
 
function jsonToJavascriptObjects(){
    return JSON.parse(jsonString)
}

console.log(jsonToJavascriptObjects());
