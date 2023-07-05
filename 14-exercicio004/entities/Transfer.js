module.exports = class Transfer{
    constructor(userSender, userRecipient, value){
        this.userSender = userSender
        this.userRecipient = userRecipient
        this.value = value
        this.date = Date()
    }
}