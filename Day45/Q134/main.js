// Take a JSON string and parse it into a JavaScript object.
var jsonString = "{\n    \"name\": \"Flavia\",\n    \"age\": 25,\n    \"country\": \"USA\"\n}";
// const jsonToJavascriptObjects = JSON.parse(jsonString)
// console.log(jsonToJavascriptObjects);
function jsonToJavascriptObjects() {
    return JSON.parse(jsonString);
}
console.log(jsonToJavascriptObjects());
