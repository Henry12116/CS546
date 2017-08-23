//Mark Mirtchouk
//CS 546 WS
//I pledge my honor that I have abided by the Stevens Honor System
var MongoClient = require('mongodb').MongoClient,
    runStartup = require("./startup.js"),
    settings = require('./config.js'),
    Guid = require('Guid');

var fullMongoUrl = settings.mongoConfig.serverUrl + settings.mongoConfig.database;
var exports = module.exports = {};

//runStartup().then(function(allMovies) {
//    console.log("After the setup has been complete, we have the following movies:");
//    console.log(allMovies);
//});

MongoClient.connect(fullMongoUrl)
    .then(function(db) { 
        return db.createCollection("logs");
    }).then(function (logCollection) {

        exports.getAlllogs = function() {
            return logCollection.find().toArray();
        }

        exports.createlog = function(requestPath, requestMethod,cookies,timestamp) {
            if (!requestPath)  return Promise.reject("You must provide a requestPath");
            if (!requestMethod)  return Promise.reject("You must provide a requestMethod");
            if (!cookies)  return Promise.reject("You must provide a cookie");
            if (!timestamp)  return Promise.reject("You must provide a timestamp");

            var a= logCollection.insertOne({ _id: Guid.create().toString(), 
                requestPath: requestPath, requestMethod: requestMethod, 
                cookies:cookies, timestamp:timestamp
                }).then(function(newLog) {
                    console.log(newLog);
                    return newLog;
                    });
            return a;
            }
    });




