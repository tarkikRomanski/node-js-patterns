const { List } = require("immutable");

class AccountDto {
  constructor(user, visaCards = [], mastercardCards = [], isBlocked = false) {
    this.user = user
    this.visaCards = new List(visaCards)
    this.mastercardCards = new List(mastercardCards)
    this.isBlocked = isBlocked
  }
}

module.exports = {
  AccountDto
}
