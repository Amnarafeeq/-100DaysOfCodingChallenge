// Explain how this behaves differently in arrow functions compared to traditional functions.

const traditionalFunction = {
    property: "value",
    access: function() {
        console.log(this.property);
    },
}
traditionalFunction.access()

const arrowFunction = {
    property: "value",
    access: ( ) => {
        console.log(this.property);  // the handling of this is different in arrow function there are no binding of this
                                  // arrow function do not bind their own this, instead, they inherit the one from the parent scope  
    }
}
