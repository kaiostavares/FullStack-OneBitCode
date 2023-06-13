class Product{
  constructor(name, description, price){
    this.name = name
    this.description = description
    this.price = price
    this.inStock = 0 
  }

  addToStock(quantitie){
    this.inStock += quantitie
  }

  calculateDiscount(percentage){
    return this.price * ((100 - percentage)/100)
  }
}

const product1 = new Product("Iphone", "Technology Product", 4000)
console.log(product1)
product1.addToStock(300)
console.log(product1)
const newprice = product1.calculateDiscount(30)
console.log(newprice)