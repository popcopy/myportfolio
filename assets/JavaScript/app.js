$(document).ready(function () {

  var topics = ["Homer Simpson", "Cleveland Brown", "Mickey Mouse", "Beavis and Butthead", "Charlie Brown", "Ren and Stimpy", "Fred Flintstone", "Eric Cartman", "SpongeBob SquarePants", "Superman", "Bender", "dog boy", "Betty boop", "Snoopy", "Samurai Jack"];

  //  creates array buttons
  function renderButtons() {
    $("#cartoon-button").empty();

    for (var i = 0; i < topics.length; i++) {
      //create all the buttons on the top of the page 
      var a = $("<button>");
      a.addClass("styling");
      a.attr("data-name", topics[i]);
      a.text(topics[i]);
      $("#cartoon-button").append(a);
    }
  }
  renderButtons();

  //on button click     vv .CSS styling vv
  $(document).on("click", ".styling", function () {

    //new variable will log the text data from each button
    var goofBalls = $(this).html();

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + goofBalls + "&api_key=dc6zaTOxFJmzC&limit=10";

    // AJAX
    $.ajax({
      url: queryURL,
      method: "GET"
    }).done(function (response) {

      var results = response.data;
      //empties the div before adding more gifs
      $("#gif-view").empty();
      for (var c = 0; c < results.length; c++) {
        // var imageDiv = $("<div>");
        var imageView = results[c].images.fixed_height.url;
        var still = results[c].images.fixed_height_still.url;
        // console.log(imageView);  

        var gifImage = $("<img>").attr("src", still).attr("data-animate", imageView).attr("data-still", still);
        gifImage.attr("data-state", "still");
        $("#gif-view").prepend(gifImage);
        gifImage.on("click", playGif);

        // // ratings for each gIF
        // var rating = results[c].rating;

        // var displayRated= $("<p>").text("Rating: " + rating);
        // $("#gif-view").prepend(displayRated);
      } // end for loop

    }); // done response

    // stop and animate gifs
    function playGif() {
      var state = $(this).attr("data-state");
      if (state == "still") {
        $(this).attr("src", $(this).data("animate"));
        $(this).attr("data-state", "animate");
      } else {
        $(this).attr("src", $(this).data("still"));
        $(this).attr("data-state", "still");
      }

    } //end of on click function

  }); //end of document on click 

  //adding new button to array
  $(document).on("click", "#add-character", function () {
    if ($("#cartoon-input").val().trim() == '') {
      alert("Input can not be left blank");
    }
    else {
      var movies = $("#cartoon-input").val().trim();
      topics.push(movies);
      $("#cartoon-input").val("");
      renderButtons();
      return false;

    }

  });


}); // end click function
