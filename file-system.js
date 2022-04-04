const fs = require('fs')

module.exports = () => {
  // fs.mkdirSync('files')


  // fs.writeFileSync('./files/example.txt', 'Hello world, I`m here 2')

  // const text = fs.readFileSync('./files/example.txt')

  // fs.cpSync('./files/example.txt', './newExample.txt')

  fs.renameSync('./example.txt', './files/example.txt')

  // console.log(text.toString())
}
