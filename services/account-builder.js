const { AccountDto } = require("../dto/account-dto")

class AccountBuilder {
  constructor(user) {
    this.account = new AccountDto(user)
  }

  addVisa() {
    this.account.visaCards = this.account.visaCards.push('34234324234234234')
  }

  addMasterCard(number) {
    this.account.mastercardCards = this.account.mastercardCards.push(number)
  }

  block() {
    this.account.isBlocked = true
  }

  getAccount() {
    return { ...this.account }
  }
}

module.exports = {
  AccountBuilder
}
