//Mark Mirtchouk
//CS 546 WS
//I pledge my honor that I have abided by the Stevens Honor System
// We first require our express package
var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var logData = require('./data.js');

// We create our express isntance:
var app = express();

app.use(cookieParser());
app.use(bodyParser.json()); // for parsing application/json

//New Code:
app.use("/api", function(request, response, next) {
    // If we had a user system, we could check to see if we could access /admin
    var now = new Date();
    var a=logData.createlog(request.path,request.method,request.cookies,now.toString())
    console.log("My log created!");
    next();
});

// Get the cookies
app.get("/api/cookies/addCookie", function(request, response) {
  if (!request.query.key || !request.query.value) { 
    response.status(500).send("You must provide both a key and a value");
    return;
  } 
  response.cookie(request.query.key,request.query.value);
  response.status(200).send("This succeeded");
});

app.get("/admin*", function(request, response) {
    response.status(200).send("Oh my! You're in the admin panel!");
})

// We can now navigate to localhost:3000
app.listen(3000, function() {
    console.log('Your server is now listening on port 3000! Navigate to http://localhost:3000 to access it');
});
