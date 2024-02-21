"use strict";
// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
function createcar(manufacturer, model, ...extras) {
    let car = {
        manufacturer: manufacturer,
        model: model
    };
    extras.forEach(([key, value]) => {
        car[key] = value;
    });
    return car;
}
let myCar = createcar("Ferrari", "Daytona SP3", ["Color", "Blue"], ["Year", 2024]);
console.log(myCar);
