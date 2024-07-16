// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads 
// I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with
//  a different message.
function makeShirt(size, text) {
    if (size === void 0) { size = "medium"; }
    if (text === void 0) { text = "I love Typescript"; }
    console.log("Make a ".concat(size, " shirt with the message: ").concat(text, " "));
}
makeShirt();
makeShirt("small", "Amna");
makeShirt("large", "I want to be a web developer.");
