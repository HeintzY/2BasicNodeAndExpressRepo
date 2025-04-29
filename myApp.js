let express = require('express');
let app = express();

// Meet the Node console
// Modify the myApp.js file to log "Hello World" to the console.
console.log("Hello World");

// Start a Working Express Server
// Use the app.get() method to serve the string "Hello Express" to GET requests matching the / (root) path. Be sure that your code works by looking at the logs.
// app.get("/", function (req, res) {
//     res.send('Hello Express');
// });


// Serve an HTML File
//Send the /views/index.html file as a response to GET requests to the / path. If you view your live app, you should see a big HTML heading (and a form that we will use later…), with no style applied.
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/views/index.html");
});































module.exports = app;
