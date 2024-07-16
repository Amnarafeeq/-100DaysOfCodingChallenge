// Create a function inside an object that returns the object's own name property using the this keyword.

const car = {
    name: "Mercedes",
    modal: 2020,
    color: "Black",
    accessName: function() {
        return this.name
    }
}
console.log(car.accessName());
