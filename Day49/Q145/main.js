// Create a function that accepts a callback and invokes it with some arguments.
function callBackFunction(cb, num1, num2) {
    cb(num1, num2);
}
var sumNumbers = function (num3, num4) {
    console.log(num3 + num4);
};
callBackFunction(sumNumbers, 67, 4);
