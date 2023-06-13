class Comment{
  constructor(userName,comment){
    this.createdAt = new Date()
    this.userName = userName
    this.comments = comment
  }
}

module.exports = Comment