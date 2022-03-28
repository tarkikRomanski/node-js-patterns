const express = require('express')
const fetcherFactory = require('./services/fetcher-strategy/fetcher-factory')
const { fetcherState } = require('./config')

const app = express()
const port = 3000

const fetcher = fetcherFactory.get(fetcherState)

app.set('views', './views')
app.set('view engine', 'pug')

app.get('/', async (req, res) => {
  const result = await fetcher.get('books')

  console.log(result)

  return res.render('index' , {})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
