let express = require('express');
let app = express();
require('dotenv').config();

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
// app.get("/json", function (req, res) {
//     res.json({ "message": "Hello json" });
// });


// Use the .env File
// Create a .env file in the root of your project directory, and store the variable MESSAGE_STYLE=uppercase in it.
// Then, in the /json GET route handler you created in the last challenge access process.env.MESSAGE_STYLE and transform the response object's message to uppercase if the variable equals uppercase. The response object should either be {"message": "Hello json"} or {"message": "HELLO JSON"}, depending on the MESSAGE_STYLE value. Note that you must read the value of process.env.MESSAGE_STYLE inside the route handler, not outside of it, due to the way our tests run.
app.get("/json", function (req, res) {
    if (process.env.MESSAGE_STYLE === "uppercase") {
        res.json({ "message": "HELLO JSON" });
    }
    else {
        res.json({ "message": "Hello json" });
    }
});














module.exports = app;
