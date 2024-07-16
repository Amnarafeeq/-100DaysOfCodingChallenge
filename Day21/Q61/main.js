"use strict";
// Making Enums for Vehicles: Let's create categories for vehicles like cars, trucks, and motorcycles using enums,
//  and show one example.
var vehicles;
(function (vehicles) {
    vehicles[vehicles["cars"] = 0] = "cars";
    vehicles[vehicles["trucks"] = 1] = "trucks";
    vehicles[vehicles["motorcycles"] = 2] = "motorcycles";
})(vehicles || (vehicles = {}));
console.log(vehicles.motorcycles);
