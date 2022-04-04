const express = require('express')
const fileSystem = require('./file-system')

const app = express()
const port = 3000

app.set('views', './views')
app.set('view engine', 'pug')

app.get('/', async (req, res) => {
  fileSystem()

  return res.render('index' , {})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
