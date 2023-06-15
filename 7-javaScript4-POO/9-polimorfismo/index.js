class Vehicle{
  move(){
    console.log("O veiculo está se movendo...")
  }
}

class Car extends Vehicle{
  move(){
    console.log("O carro está andando...")
  }
}

class Ship extends Vehicle{
  move(){
    console.log("O navio está navegando")
  }
}

class Aircraft extends Vehicle{
  move(speed){
    console.log(`A aeronave está voando a ${speed} km/h`)
  }
}

const mustang = new Car()
const blackPearl = new Ship()
const boing = new Aircraft()

mustang.move()
blackPearl.move()
boing.move(32)

function start(vehicle) {
  console.log("Iniciando um veículo...")
  vehicle.move() // pode ser qualquer subclass de Vehicle
}

start(mustang)
start(blackPearl)
start(boing)