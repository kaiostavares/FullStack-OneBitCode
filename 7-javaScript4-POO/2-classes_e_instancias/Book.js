class Book{
  constructor(title){
    this.title = title
    this.published = false
  }

  publish(){this.published = true}
}

const Eragon = new Book("Eragon")
const Eldest = new Book("Eldest")

Eragon.publish()

console.log(Eragon)
console.log(Eldest)

console.log(Eragon instanceof Book)