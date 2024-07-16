"use strict";
// Explain how this behaves differently in arrow functions compared to traditional functions.
const traditionalFunction = {
    property: "value",
    access: function () {
        console.log(this.property);
    },
    arrowFunction: function () {
        console.log(this.property);
    }
};
traditionalFunction.access();
