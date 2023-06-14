class Account{
  #password
  #balance = 0
  constructor(user){
    this.email = user.email
    this.#password = user.password
  }

  getBalance(email, password){
    if(this.#authentificate(email, password)){
      return this.#balance
    } else {
      return null
    }
  }

  #authentificate(email, password){
    return this.email === email && this.#password === password
  }

  setBalance(newBalance){
    this.#balance = newBalance
  }
}


const user = {
  email: "kaio@email.com",
  password: "12345678"
}

const myAccount = new Account(user)
console.log(myAccount.setBalance(30))
console.log(myAccount.getBalance("kaio@email.com", "12345678"))
console.log(myAccount.getBalance("user@email.com", "000000"))