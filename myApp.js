let express = require('express');
let app = express();
require('dotenv').config(); //*6

//7:
// Implement a Root-Level Request Logger Middleware
// Build a simple logger. For every request, it should log to the console a string taking the following format: method path - ip. An example would look like this: GET /json - ::ffff:127.0.0.1. Note that there is a space between method and path and that the dash separating path and ip is surrounded by a space on both sides. You can get the request method (http verb), the relative route path, and the caller’s ip from the request object using req.method, req.path and req.ip. Remember to call next() when you are done, or your server will be stuck forever. Be sure to have the ‘Logs’ opened, and see what happens when some request arrives.
app.use(function (req, res, next) {
    console.log(req.method + " " + req.path + " - " + req.ip);
    next();
});




//1:
// Meet the Node console
// Modify the myApp.js file to log "Hello World" to the console.
console.log("Hello World");

//2:
// Start a Working Express Server
// Use the app.get() method to serve the string "Hello Express" to GET requests matching the / (root) path. Be sure that your code works by looking at the logs.
// app.get("/", function (req, res) {
//     res.send('Hello Express');
// });

//3:
// Serve an HTML File
//Send the /views/index.html file as a response to GET requests to the / path. If you view your live app, you should see a big HTML heading (and a form that we will use later…), with no style applied.
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/views/index.html");
});


//4:
// Serve Static Assets
//Mount the express.static() middleware to the path /public with app.use(). The absolute path to the assets folder is __dirname + /public.
app.use("/public", express.static(__dirname + "/public"));

//5:
// Serve JSON on a Specific Route
// Serve the object {"message": "Hello json"} as a response, in JSON format, to GET requests to the /json route. Then point your browser to your-app-url/json, you should see the message on the screen.
// app.get("/json", function (req, res) {
//     res.json({ "message": "Hello json" });
// });

//6:
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
