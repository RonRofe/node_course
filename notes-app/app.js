const chalk = require('chalk')
const getNotes = require('./notes')

console.log(getNotes())

console.log(chalk.green.bgRed.bold.underline.inverse("Success!"))
