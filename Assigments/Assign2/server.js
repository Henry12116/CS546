/*
I pledge my honor that I have abided by the Stevens Honor System.
- Henry Thomas
*/

// We first require our express package
var express = require('express');
var bodyParser = require('body-parser');
var toDoEntries = require('./toDoEntries.js')

// This package exports the function to create an express instance:
var app = express();

// This is called 'adding middleware', or things that will help parse your request
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({
    extended: true
})); // for parsing application/x-www-form-urlencoded

// This middleware will activate for every request we make to 
// any path starting with /assets;
// it will check the 'static' folder for matching files 
app.use('/assets', express.static('static'));

// check for hidden input with the tag _method
// browser sometimes cannot submit a PUT or DELETE request,
// so we can use middleware to change it before it hits our routes!
// I have programatically injected some code that will add a hidden input called _method
app.use(function (req, res, next) {
    if (req.body && req.body._method) {
        console.log(req.body);
        req.method = req.body._method;
        delete req.body._method;
    }

    // let the next middleware run:
    next();
});

// Setup your routes here!
app.get("/api/todo", function (request, response) {
    // This will redirect to a different route; the user will end up at /questions automatically
    var listOfEntries = toDoEntries.getAllEntries();

    response.json({
        status: "success",
        result: listOfEntries
    });
});

app.get("/api/todo/open", function (request, response) {
    // This will redirect to a different route; the user will end up at /questions automatically
    var listOfEntries = toDoEntries.getToDoStuff();

    response.json({
        status: "success",
        result: listOfEntries
    });
});

app.get("/api/todo/completed", function (request, response) {
    // This will redirect to a different route; the user will end up at /questions automatically
    var listOfEntries = toDoEntries.getDoneStuff();

    response.json({
        status: "success",
        result: listOfEntries
    });
});

app.get("/api/todo/:id", function (request, response) {
    try {
        var foundEntry = toDoEntries.getToDoEntry(request.params.id);
        // we caught an exception! Let's show an error page!
        response.json({
            status: "success",
            result: foundEntry
        });
    } catch (message) {
        // we caught an exception! Let's show an error page!
        response.status(500).json({
            status: "error",
            message: message
        });
    }
});

// Make a new entry
app.post("/api/todo", function (request, response) {
    console.log("POSTING REQUEST WITH BODY OF:");
    console.log(request.body.author);
    try {
        var entry = toDoEntries.addEntry(request.body.author, request.body.taskTitle, request.body.taskDescription);
        response.json({
            status: "success",
            result: entry
        });
    } catch (message) {
        // we caught an exception! Let's show an error page!
        response.status(500).json({
            errorType: "Issue creating todo entry!",
            errorMessage: message
        });
    }
});

// Add notes
app.post("/api/todo/:id/notes", function (request, response) {
    console.log("PUTTING REQUEST WITH BODY OF:");
    console.log(request.body);
    try {
        var entry = toDoEntries.addNotes(request.params.id, request.body.note);
        response.json({
            status: "success",
            entry: entry
        });
    } catch (message) {
        // we caught an exception! Let's show an error page!
        response.status(500).json({
            errorType: "Cannot edit todo entry!",
            errorMessage: message
        });
    }
});

// Update the status of a todo entry
app.put("/api/todo/:id", function (request, response) {
    console.log("PUTTING REQUEST WITH BODY OF:");
    console.log(request.body);

    try {
        var entry = toDoEntries.updateEntry(request.params.id, request.body.taskTitle, request.body.taskDescription, request.body.status);
        // we caught an exception! Let's show an error page!
        console.log(entry);
        response.json({
            status: "success",
            entry: entry,
        });
    } catch (message) {
        // we caught an exception! Let's show an error page!
        response.status(500).json({
            errorType: "Issue changing status!",
            errorMessage: message
        });
    }
});

app.delete("/api/todo/:id", function (request, response) {
    try {
        var entry = toDoEntries.deleteEntry(request.params.id);
        response.json({
            status: "The following todo entry was removed:",
            entry: entry
        });
    } catch (message) {
        response.status(500).json({
            errorType: "Issue deleting entry!",
            errorMessage: message
        });
    }

});

app.get("/", function (request, response) {
    // We have to pass a second parameter to specify the root directory
    // __dirname is a global variable representing the file directory you are currently in
    response.sendFile("./pages/index.html", {
        root: __dirname
    });
});

// We can now navigate to localhost:3000
app.listen(3000, function () {
    console.log('Your server is now listening on port 3000! Navigate to http://localhost:3000 to access it');
});
