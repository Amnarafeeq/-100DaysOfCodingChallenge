//  Enhanced Laptop Object: Construct an object for a laptop including properties make, model, year,
//  and a method describe() that logs a sentence about the laptop.


let laptop = {
    make: "Dell",
    model: "XPS 234",
    year:  "2024",
    describe: function(){
       console.log(`This is the info about my laptop. I have ${this.make} laptop this model is ${this.model} and the year is ${this.year}`);
    }
}
laptop.describe()