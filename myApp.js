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



// Serve Static Assets
//Mount the express.static() middleware to the path /public with app.use(). The absolute path to the assets folder is __dirname + /public.
app.use("/public", express.static(__dirname + "/public"));


// Serve JSON on a Specific Route
// Serve the object {"message": "Hello json"} as a response, in JSON format, to GET requests to the /json route. Then point your browser to your-app-url/json, you should see the message on the screen.
app.get("/json", function (req, res) {
    res.json({ "message": "Hello json" });
});




















module.exports = app;
