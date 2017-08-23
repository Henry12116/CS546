// We first require our express package
var express = require('express');
var bodyParser = require('body-parser');
var movieData = require('./data.js');

// We create our express isntance:
var app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.json()); // for parsing application/json

// If you'll notice, there's not a single database call in the server file!

// This middleware will activate for every request we make to 
// any path starting with /assets;
// it will check the 'static' folder for matching files 
app.use('/assets', express.static('static'));

// Get the best movies
app.get("/api/movies/best", function (request, response) {
    movieData.getPopularMovies().then(function (popularMovies) {
        response.render("partials/movieList.ejs", {
            pageTitle: "Popular Movies",
            movieItems: popularMovies
        });
    });
});

// Gets a movie to delete
app.get("/api/movies/delete/:id", function (request, response) {
    movieData.deleteMovie(request.params.id).then(function (deletedMovie) {
        response.json(deletedMovie);
    }, function (errorMessage) {
        response.status(500).json({
            error: errorMessage
        });
    });
});


// Increases a movies rating
app.get("/api/movies/upvote/:id", function (request, response) {
    movieData.getMovie(request.params.id).then(function (movie) {
        movieData.updateMovie(request.params.id, movie.title, movie.rating + 1).then(function (updatedMovie) {
            response.json(updatedMovie);
        });
    }, function (errorMessage) {
        response.status(500).json({
            error: errorMessage
        });
    });

});

// Decreases a movies rating
app.get("/api/movies/downvote/:id", function (request, response) {
    movieData.getMovie(request.params.id).then(function (movie) {
        movieData.updateMovie(request.params.id, movie.title, movie.rating - 1).then(function (updatedMovie) {
            response.json(updatedMovie);
        });
    }, function (errorMessage) {
        response.status(500).json({
            error: errorMessage
        });
    });

});

// Gets a single movie
app.get("/api/movies/:id", function (request, response) {
    movieData.getMovie(request.params.id).then(function (movie) {
        response.json(movie);
    }, function (errorMessage) {
        response.status(500).json({
            error: errorMessage
        });
    });
});

// Get all of the movies
app.get("/api/movies", function (request, response) {
    movieData.getAllMovies().then(function (movies) {
        response.render("partials/movieList.ejs", {
            pageTitle: "All Movies",
            movieItems: movies
        });
    });
});

// Create a new movie
app.post("/api/movies", function (request, response) {
    movieData.createMovie(request.body.title, request.body.rating).then(function (movie) {
        response.json(movie);
    }, function (errorMessage) {
        response.status(500).json({
            error: errorMessage
        });
    });
});

// Update a single movie 
app.put("/api/movies/:id", function (request, response) {
    movieData.updateMovie(request.params.id, request.body.title, request.body.rating).then(function (movie) {
        response.json(movie);
    }, function (errorMessage) {
        response.status(500).json({
            error: errorMessage
        });
    });
});

//Deletes a movie
app.delete("/api/movies/:id", function (request, response) {
    movieData.deleteMovie(request.params.id).then(function (status) {
        response.json({
            success: status
        });
    }, function (errorMessage) {
        response.status(500).json({
            error: errorMessage
        });
    });
});

app.get("/", function (request, response) {
    // We have to pass a second parameter to specify the root directory
    // __dirname is a global variable representing the file directory you are currently in
    movieData.getAllMovies().then(function (allMovies) {
        response.render("pages/home.ejs", {
            pageTitle: "Movies and Ratings",
            movieItems: allMovies
        });
    });
});

// We can now navigate to localhost:3000
app.listen(3000, function () {
    console.log('Your server is now listening on port 3000! Navigate to http://localhost:3000 to access it');
});
