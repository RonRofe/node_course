const validator = require('validator')
const getNotes = require('./notes')

console.log(getNotes())

console.log(validator.isEmail('rapitec.co.il'))
console.log(validator.isURL('https/rapitec.co.il'))