var MongoClient = require('mongodb').MongoClient,
    runStartup = require("./startup.js"),
    settings = require('./config.js'),
    Guid = require('Guid');

var fullMongoUrl = settings.mongoConfig.serverUrl + settings.mongoConfig.database;

var exports = module.exports = {};

MongoClient.connect(fullMongoUrl)
    .then(function(db) { 
        return db.createCollection("logs");
    }).then(function (logsCollection) {
        
        //Returns all logs found in our collection
        exports.allLogs = function() {
            return logsCollection.find().toArray();
        }
        
        //Creates a new log entry
        exports.newLog = function(path, method, cookies, time) {
            if (!path)  return Promise.reject("Error: Invalid request path.");
            if (!method)  return Promise.reject("Error: Invalid request method");
            if (!cookies)  return Promise.reject("Error: Invalid cookie.");
            if (!time)  return Promise.reject("Error: Invalid timestamp.");

            var log = logsCollection.insertOne({ _id: Guid.create().toString(), 
                requestPath: path, requestMethod: method, 
                cookies: cookies, timestamp: time
                }).then(function(newLog) {
                    console.log(newLog);
                    return newLog;
                    });
            return log;
            }
    });