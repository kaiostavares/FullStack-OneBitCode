class Wallet{
  #amount
  #username

  //Ex: No banco da caretira nao aceita casa decimal
  constructor(){
    this.#amount = 100.99 * 100 // 10099
  }

  //Mostrar pra o usuario o dinheiro com as casas
  get amount(){
    return this.#amount / 100 //100.99
  }

  set username(newUsername){
    if(typeof newUsername === 'string'){
      this.#username = newUsername
    } else {console.log('usernamen must be a string')}
  }

  get username(){
    return this.#username
  }
}

const myWallet = new Wallet()

console.log(myWallet.amount)

myWallet.username = 'Kaio'
console.log(myWallet.username)

myWallet.username = true