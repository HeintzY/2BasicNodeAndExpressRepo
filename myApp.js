let express = require('express');
let app = express();

// Meet the Node console
// Modify the myApp.js file to log "Hello World" to the console.
console.log("Hello World");

// Start a Working Express Server
// Use the app.get() method to serve the string "Hello Express" to GET requests matching the / (root) path. Be sure that your code works by looking at the logs.
app.get("/", function (req, res) {
    res.send('Hello Express');
});



































module.exports = app;
