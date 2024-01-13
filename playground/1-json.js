const fs = require('fs')

// const book = {
//   title: 'War and Peace',
//   author: 'Leo Tolstoy'
// }

// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('1-json.json', bookJSON)

// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)
// console.log(data.title)

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
let data = JSON.parse(dataJSON)
data = {...data, name: "Kendall", age: 32}
const newStringData = JSON.stringify(data)
fs.writeFileSync('1-json.json', newStringData)

