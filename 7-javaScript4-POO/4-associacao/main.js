const Address = require('./Address')
const Person = require('./Person')

const addr = new Address("Tiradentes confidente",400,"Almirante Gaspar","Gatolandia", 'CF')
const kaio = new Person('Kaio', addr)

console.log(kaio)
console.log(kaio.address.fullAdrress())