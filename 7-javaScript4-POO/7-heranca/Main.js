const Apartment = require("./Apartment");
const House = require("./House");
const Property = require("./Property");

const land = new Property(200,50000)
const someHouse = new House(120,200000)

console.log(land)
console.log(someHouse)
console.log(someHouse instanceof Property)

const apt = new Apartment("311",100,240000)

console.log(apt)
console.log(apt.getPricePerSquareMeter())
console.log(apt.getFloor())