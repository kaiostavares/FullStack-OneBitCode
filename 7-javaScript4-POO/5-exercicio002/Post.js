const Comment = require('./Comment')

class Post{
  constructor(title, description, author){
    this.createdAt = new Date()
    this.author = author
    this.title = title
    this.description = description
    this.cooments = []

  }

  newComment(userName, comment){
    this.cooments.push(new Comment(userName, comment))
  }
}

module.exports = Post