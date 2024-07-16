// Explain how the this keyword changes its value when used inside a nested function within a method.

const myName = {
    name: "Amna",
    outerProperty: function() {
        console.log(this.name);
    const innerProperty = () => {
        console.log(this.name);
    }    
    innerProperty()
    }
}
myName.outerProperty()
