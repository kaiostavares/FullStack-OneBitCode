const App = require("./App");

App.addUser("kaio@email.com", "Kaio Tavares")
App.addUser("pigme@email.com", "Carla Pigmeu")
App.addUser("tauynd@email.com", "Tauynd Julia")
App.addUser("kaio@email.com", "Kaio Muty")
App.deposit("kaio@email.com", 100)

App.transfer("kaio@email.com", "pigme@email.com", 50)

App.takeLoan("tauynd@email.com", 2000, 3)

console.log(App.findUser("kaio@email.com"))
console.log(App.findUser("kaio@email.com").account)
console.log(App.findUser("kaio@email.com").account.transfers)
console.log(App.findUser("pigme@email.com"))
console.log(App.findUser("pigme@email.com").account)
console.log(App.findUser("tauynd@email.com"))
console.log(App.findUser("tauynd@email.com").account)
console.log(App.findUser("tauynd@email.com").account.loans[0].installment)