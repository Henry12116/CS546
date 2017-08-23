/*
I pledge my honor that I have abided by the Stevens Honor System.
- Henry Thomas
*/

var exports = module.exports = {};

var todoList = [];

var makeAToDo = function (author, taskTitle, taskDescription, note, status) {
    if (!author) throw "Must include an author";
    if (!taskTitle) throw "Must include a title";

    return {
        id: todoList.length,
        author: author,
        taskTitle: taskTitle,
        taskDescription: taskDescription,
        note: [],
        status: 'open'
    };
}

exports.getToDoStuff = function () {
    return todoList.filter(function (entry) {
        return entry.status === "open";
    });
}

exports.getDoneStuff = function () {
    return todoList.filter(function (entry) {
        return entry.status === "completed";
    });
};

exports.getAllEntries = function () {
    // return a copy of the array
    return todoList.slice(0);
};

exports.getToDoEntry = function (id) {
    if (typeof id === "string") id = parseInt(id);
    
    if (id !== 0 && !id) throw "Must provide ID";
    if (id < 0 || id > todoList.length) throw "An entry with the ID of " + id + " could not be found";
    
    var entry = todoList.filter(function (entry) {
        return entry.id === id;
    }).shift();

    if (!entry) throw "Could not find todo entry";

    return entry;
};

exports.addEntry = function (author, taskTitle, taskDescription) {
    if (!author || !taskTitle || !taskDescription) throw "You must provide valid information in the request body to create an entry.";
    
    var entry = makeAToDo(author, taskTitle, taskDescription, [], 'open');

    todoList.push(entry);

    return entry;
}

exports.updateEntry = function (id, taskTitle, taskDescription, status) {
    if (typeof id === "string") id = parseInt(id);
    if (!taskTitle) throw "Must include a title";
    if (id < 0 || id > todoList.length) throw "An entry with the ID of " + id + " could not be found";
    if (status !== "completed") throw "You must provide valid information in the request body to create an entry.";

    var entry = exports.getToDoEntry(id);
    entry.taskTitle = taskTitle;
    entry.taskDescription = taskDescription;
    entry.status = status;

    return entry;
};


exports.addNotes = function (id, note) {
    if (typeof note != "string" || note.length < 1) throw "You must provide valid information in the request body to create an entry.";
    if (typeof id === "string") id = parseInt(id);
    if (id < 0 || id > todoList.length) throw "An entry with the ID of " + id + " could not be found";

    var entry = exports.getToDoEntry(id);
    entry.note += [note];

    return entry;
};


exports.deleteEntry = function (id) {
    if (typeof id === "string") id = parseInt(id);
    if (id < 0 || id > todoList.length) throw "An entry with the ID of " + id + " could not be found";
    
    var entry = exports.getToDoEntry(id);
    var indexOfEntry = todoList.indexOf(entry);

    // remove the question
    todoList.splice(indexOfEntry, 1);
    
    return entry;
}


// Let's pre-seed with some data
var firstToDo = exports.addEntry("Phil Barresi", "Buy More Coffee", "The current amount of coffee sux", ["Whole foods doesnt roast in store", "Starbucks is no bueno", "another note"], "open");

var secondToDo = exports.addEntry("Henry Thomas", "Finish this assignment", "You have to finish this assignment by the 3rd of march", ["todoentries.js is almost done", "server.js needs to be completed!"], "open");

var thirdToDo = exports.addEntry("Tenry Hhomas", "Finish this assignment", "You have to finish this assignment by the 3rd of march", ["todoentries.js is almost done", "server.js needs to be completed!"], "completed");