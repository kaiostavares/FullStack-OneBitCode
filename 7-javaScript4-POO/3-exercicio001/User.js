class User {
  constructor(fullName, email, password){
    this.fullName = fullName
    this.email = email
    this.password = password
  }

  login(email, password){
    if(this.email == email && this.password==password){
      console.log("Login Aprovado")
    } else {console.log("login não sucedido")}
  }
}

const user1 = new User("Kaio", "kaiosandek@gmail.com", 1234)

user1.login("kaiosandek@gmail.com", "1234")