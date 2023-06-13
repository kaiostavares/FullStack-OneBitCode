function Book(title, pages, tags, author){
  this.title = title
  this.pages = pages
  this.tags=tags
  this.author = author
  this.published = false
  this.inStock = 0
  this.addOnStock = (quantities)=>{this.inStock += quantities}
  this.save = ()=>{console.log("Salvando no banco de dados")}
}

const name = "Lord of the flies"
const tags = ["Romance", "Alegoria", "Ficção juvenil"]

const lord_of_the_flies = new Book(name,224, tags, "William Golding")
console.log(lord_of_the_flies)