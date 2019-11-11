// CRUD = create read update delete

const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => { // The original URL was depracated so it has to be inserted manually
    if(error) {
        return console.log('error to connect')
    }

    const db = client.db(databaseName) // use the desired DB

    // collection = table
    // db.collection('users').insertOne({
    //     name: 'Ron',
    //     age: 23
    // }, (error, result) => {
    //     if(error) {
    //         return console.log('Unable to insert uesr')
    //     }

    //     console.log(result.ops)  
    // })

    // db.collection('users').insertMany([
    //     {
    //         name: 'Jen',
    //         age: 28
    //     },
    //     {
    //         name: 'Gunther',
    //         age: 27
    //     }
    // ], (error, result) => {
    //     if(error) {
    //         return console.log('Unable to insert documents!')
    //     }
        
    //     console.log(result.ops)
    // })

    db.collection('tasks').insertMany([
        {
            description: 'Clean the house',
            completed: true
        },
        {
            description: 'Renew inspection',
            completed: false
        },
        {
            description: 'Pot plants',
            completed: false
        },
    ], (error, result) => {
        if(error) {
            console.log('error insert docs')
        }
        console.log(result.ops)
    })
}) 