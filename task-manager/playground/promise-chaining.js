require('../src/db/mongoose')
const User = require('../src/models/user')

User.findByIdAndUpdate('5dca65367421b82f8c4f0cbb', { age: 1 }).then(user => {
    console.log(user)
    return User.countDocuments({ age: 1 })
}).then(result => {
    console.log(result)
}).catch(e => {
    console.log(e)
})