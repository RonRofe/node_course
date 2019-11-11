// path of root folder of the current file
__dirname

// root path of the file + the file name
__filename

// --------------- Manipulate path

// Usage
const path = require('path')

// Manipulate path
console.log(path.join(__dirname, '../public'))
