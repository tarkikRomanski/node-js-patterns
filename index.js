const express = require('express')
const fetcherFactory = require('./services/fetcher-strategy/fetcher-factory')
const { fetcherState } = require('./config')
const {AccountBuilder} = require("./services/account-builder");
const {AccountDto} = require("./dto/account-dto");

const app = express()
const port = 3000

const fetcher = fetcherFactory.get(fetcherState)

app.set('views', './views')
app.set('view engine', 'pug')

app.get('/', async (req, res) => {
  const result = await fetcher.get('books')

  const accountBuilder = new AccountBuilder('user@gmail.com')
  accountBuilder.addVisa()
  accountBuilder.addMasterCard('asdasdsadasdasd')
  accountBuilder.addMasterCard('123434234324234')
  accountBuilder.block()

  const account = accountBuilder.getAccount()

  accountBuilder.addMasterCard('123434234324234')

  console.log(account)

  return res.render('index' , {})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
