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

    // db.collection('users').findOne({
    //     _id: new ObjectID("5dc96b4cd05b384420807e2d")
    // }, (error, user) => {
    //     if(error) {
    //         return console.log('Unable to fetch')
    //     }

    //     console.log(user)
    // })

    // db.collection('users').find({
    //     age: 27
    // }).toArray((error, users) => {
    //     console.log(users)
    // })

    // db.collection('users').find({
    //     age: 27
    // }).count((error, count) => {
    //     console.log(count)
    // })

    db.collection('tasks').findOne({
        _id: new ObjectID("5dc96e679dfe6c27ac9e742e")
    }, (error, task) => {
        console.log(task)
    })

    db.collection('tasks').find({
        completed: false
    }).toArray((error, tasks) => {
        console.log(tasks)
    })
}) 