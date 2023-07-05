const App = require("../13-js-bookstore/App")
const Deposit = require("./entities/Deposit")
const Loan = require("./entities/Loan")
const Transfer = require("./entities/Transfer")
const User = require("./entities/User")

module.exports = class App{
  static #users = []

  static findUser(email){
    const user = this.#users.find(user=> user.email === email)
    return user ?? null
  }

  static addUser(email, fullname){
    const userExist = App.findUser(email)
    if(!userExist){
      this.#users.push(new User(email, fullname))
    }
  }

  static deposit(email, value){
    const user = App.findUser(email)
    if(user){
      const newDeposit = new Deposit(value)
      user.account.addDeposit(newDeposit)
    }
  }

  static transfer(userSenderEmail, userRecipientEmail, value){
    const userSender = App.findUser(userSenderEmail)
    const userRecipient = App.findUser(userRecipientEmail)
    if(userSender && userRecipient){
      const newtransfer = new Transfer(userSender, userRecipient, value)
      userSender.account.addTransfer(newtransfer)
      userRecipient.account.addTransfer(newtransfer)
    }
  }

  static takeLoan(email, value, installments){
    const user = App.findUser(email)
    if(user){
      const newLoan = new Loan(value, installments)
      user.account.addLoan(newLoan)
    }
  }

  static changeLoanFee(newFeePercentage){
    Loan.fee(newFeePercentage)
  }
}