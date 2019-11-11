// Official website
// Expressjs.com

// Local npm module installation
// npm (i)nstall express@latest

//  Usage
const express = require('express')

// Working function
const app = express()

// Respond to HTTP request
app.get('', (req, res) => {
    res.send('Body') // Seding plain text
    res.send('<h1>Hello HTML</h1>') // Sending HTML code
    res.send({ // Sending JSON
        string: 'Hello text',
        number: 3432432
    })
    // Catch request query string
    req.query.key // key = name of the query key
})

// Respond to unlimited number of urls
app.get('*', (req, res) => { // another example: 'folder/*' to detect all the urls after "folder" has insterted
    res.send('...')
})

// Using a static directroy to present on pages
app.use(express.static(DIRECTORY_PATH)) // DIRECTORY PATH = path to the directory to fetch the files and URLs






// ----------- Using a dynamic director yto present on pages
// Installation: npm (i)nstall hbs(@latest)
// After then, a "views" folder needs to be created on the root folder
// Within there, open HTML files with .hbs extentions

// Usage
const hbs = require('')
app.set('view engine', 'hbs')
app.set('views', DIRECTORY_PATH) // * If desire to change the "views" directory to a costum one
hbs.registerPartials(PARTIALS_PATH) // * If desire to define "Partials" inside the views file for HEADER, FOOTER...
// Example: Directory- templates { views, partials }

// Respond to HTTP request

app.get('', (req, res) => {
    res.render('index', { // name of the .hbs file
        key: 'content' // inject dynamic data
    })
})

// Inside the target file:
// <h1>{{key}}</h1>       -- Inject data
// {{>file name}}           -- Inject partial

// In order to serve the HBS files, need to run command: nodemon (/node) src/app.js -e js,hbs







// Define port to listen to
app.listen(3000, () => {

})