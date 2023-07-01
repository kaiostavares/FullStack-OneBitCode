class Reservation{
  constructor(guests, room, days){
    this.guests = guests
    this.romm = room
    this.days = days
    this.total = days * Reservation.baseeFee
    //Assumindo que todas as reservas tenham a mesma taxa
  }

  static baseeFee = 150

  static showBaseFee(){
    console.log(`Base fee is ${Reservation.baseeFee}`)
  }

  static get premiumFee(){
    return Reservation.baseeFee * 1.5
  }
}

Reservation.showBaseFee()

const r1 = new Reservation(3, "103", 6)
console.log(r1)
Reservation.baseeFee = 200

console.log(`Premium fee is ${Reservation.premiumFee}`)