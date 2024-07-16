// In default we can change the function name for example.
// During exporting the name of function was 'logMessage' 
// and after export name is 'showMessage'
// default module's name will be outside the brackets
//  and named modules will be inside the brackets.
// We can also change the name of named modules by
//  using "as"keyword. For example 'askName' as 'tellName'.

import showMessage, { askName as tellName } from 
"./export-main";

console.log("From default:", showMessage("Hello! How are you?"));
console.log("From named:", tellName);
