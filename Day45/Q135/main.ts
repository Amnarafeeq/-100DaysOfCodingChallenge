// Explain how you can format a JSON string with proper indentation for readability.

const javascriptObject = {
    name: "Flavia",
    age: 25,
    country: "USA"
}
function formatAJsonString(){
    return JSON.stringify(javascriptObject,null,6) // The '6' specifies the number of spaces to use as white space
}                                                  // without using whitespace the json string will align in one line
console.log(formatAJsonString());
