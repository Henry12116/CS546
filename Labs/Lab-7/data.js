var MongoClient = require('mongodb').MongoClient,
    settings = require('./config.js'),
    Guid = require('Guid');

var fullMongoUrl = settings.mongoConfig.serverUrl + settings.mongoConfig.database;
var exports = module.exports = {};

MongoClient.connect(fullMongoUrl)
    .then(function(db) {
        var myCollection = db.collection("comments");

        // setup your body
        exports.createComment = function(comment) {
            if (!comment) Promise.reject("You must provide a comment");
        // you may return Promise.reject("error message"); if there is an error, such as a comment not being provided;
	    // this will result in a rejected promise immediately being returned
            // return a promise that resolves the new comment
            return myCollection.insertOne({ _id: Guid.create().toString(), comment: comment}).then(function(newDoc) {
                return newDoc.insertedId;
            });
        };

        exports.getAllComments = function() {
            // write the body here
            // return a promise that resolves to all the comments in your collection.
            return myCollection.find().toArray();
        }
    });
