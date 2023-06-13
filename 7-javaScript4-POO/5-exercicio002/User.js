const Post = require("./Post")

class User{
  constructor(name){
    this.name = name
    this.posts = []
  }

  writePost(title, description){
    const post = new Post(title, description, this)
    this.posts.push(post)
    return post
  }
}

module.exports = User