// Write a JavaScript object and convert it into a JSON string.
var javascriptObject = {
    name: "Flavia",
    age: 25,
    country: "USA"
};
// JSON.stringify  is used to convert JS objects into JSON string 
// const javascriptObjectToJson = JSON.stringify(javascriptObject)
// console.log(javascriptObjectToJson);
function javascriptObjectToJson() {
    return JSON.stringify(javascriptObject);
}
console.log(javascriptObjectToJson());
