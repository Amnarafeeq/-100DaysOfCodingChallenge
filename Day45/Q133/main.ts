// Write a JavaScript object and convert it into a JSON string.
const javascriptObject = {
    name: "Flavia",
    age: 25,
    country: "USA"
}
// JSON.stringify  is used to convert JS objects into JSON string 

function javascriptObjectToJson(){
    return JSON.stringify(javascriptObject)
}
console.log(javascriptObjectToJson());
