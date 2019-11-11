// CRUD = create read update delete

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

// const id = new ObjectID()
// console.log(id.id.length)
//console.log(id.getTimestamp())

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => { // The original URL was depracated so it has to be inserted manually
    if(error) {
        return console.log('error to connect')
    }

    const db = client.db(databaseName) // use the desired DB

    // db.collection('users').updateOne({
    //     _id: new ObjectID("5dc96cdfa94c3939b8456eef")
    // }, {
    //     $inc: {
    //         age: 1
    //     }
    // }).then(result => {
    //     console.log(result)
    // }).catch(error => {
    //     console.log(error)
    // })

    db.collection('tasks').updateMany({
        completed: false
    },
    {
        $set: {
            completed: true
        }
    }).then(result => {
        console.log(result.modifiedCount)
    }).catch(error => {
        console.log(eroror)
    })
}) 