  function deleteMovie(id) {
      var requestConfig = {
          method: "GET",
          url: "/api/movies/delete/" + id,
          contentType: 'application/json',
      }
      $.ajax(requestConfig).then(function (responseMessage) {
          noRefresh();
      });
  }


  function upVote(id) {
      var requestConfig = {
          method: "GET",
          url: "/api/movies/upvote/" + id,
          contentType: 'application/json',
      }
      $.ajax(requestConfig).then(function (responseMessage) {
          noRefresh();
      });
  }


  function downVote(id) {
      var requestConfig = {
          method: "GET",
          url: "/api/movies/downvote/" + id,
          contentType: 'application/json',
      }
      $.ajax(requestConfig).then(function (responseMessage) {
          noRefresh();
      });
  }

  //Prevents refresh, used for no reload technique

  function noRefresh() {
      location.reload(false);
  }

  (function ($) {
      // Let's start writing AJAX calls!

      var myNewTaskForm = $("#new-item-form"),
          myNewTaskForm2 = $("#new-item-form2"),
          myNewTaskForm3 = $("#new-item-form3"),
          newNameInput = $("#title"),
          newDecriptionArea = $("#rating");

      myNewTaskForm.submit(function (event) {
          event.preventDefault();
          var newContent = $("#main");
          var requestConfig = {
              method: "GET",
              url: "/api/movies/",
              contentType: 'application/json',
              data: JSON.stringify({
                  pageTitle: "Load all movies",
              })
          };
          $.ajax(requestConfig).then(function (responseMessage) {
              console.log(responseMessage);
              newContent.html((responseMessage));
          });

      });

      myNewTaskForm2.submit(function (event) {
          event.preventDefault();
          var newContent = $("#main");
          var requestConfig = {
              method: "GET",
              url: "/api/movies/best",
              contentType: 'application/json',
              data: JSON.stringify({
                  pageTitle: "Load popular movies",
              })
          };
          $.ajax(requestConfig).then(function (responseMessage) {
              newContent.html(responseMessage);
          });

      });

      myNewTaskForm3.submit(function (event) {
          event.preventDefault();
          var movieName = newNameInput.val();
          var movieRating = newDecriptionArea.val();
          var newContent = $("#main");

          if (movieName && movieRating) {
              var requestConfig = {
                  method: "POST",
                  url: "/api/movies",
                  contentType: 'application/json',
                  data: JSON.stringify({
                      title: movieName,
                      rating: movieRating,
                  })
              };
              $.ajax(requestConfig).then(function (responseMessage) {
                  noRefresh();
              });
          }
      });
  })(window.jQuery);
