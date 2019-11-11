// Installing MongoDB through the shell

// MONGO_DB_DIRECTORY_PATH/bin/mongod.exe --dbpath=MONGO_DB_STORAGE_DIRECTORY_PATH=mongodb-data
// Exampe: C:\Users\ronr\Desktop\mongodb/bin/mongod.exe --dbpath=C:\Users\ronr\Desktop\mongodb-data

// Installing in node_modules
// npm (i)nstall mongodb(@latest)

// Usage
const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
const ObjectID = mongodb.ObjectID

//          or --
const { MongoClient, ObjectID } = require('mongodb')

// Connecting to the DB
const connectionURL = 'mongodb://127.0.01:27017' // path
const databaseName = 'name-of-db' // name of db

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => { // The original URL was depracated so it has to be inserted manually
    if(error) {
        return console.log('error to connect')
    }

    const db = client.db(databaseName) // use the desired DB

    // ------------ Insert object into collection

    // collection = table
    db.collection('users').insertOne({
        key: 'value'
    }, (error, result) => { // callback
        if(error) {
            return console.log('error to insert user')
        }
        console.log(error.ops) // printing the object inserted
    })

    // ------------ Insert many objects into collection

    // collection = table
    db.collection('users').insertMany([
        {
            key1: 'value1',
            key2: 123
        },
        {
            key1: 'value2',
            key2: 123
        }
    ], (error, result) => { // callback
        if(error) {
            return console.log('Unable to insert documents!')
        }
        console.log(result.ops)
    })
}) 
