var tbFilms = ["Abraham Lincoln: Vampire Hunter", "Alice in Wonderand", "Batman", "Beetlejuice", "Big Fish", "Charlie and the Chocolate Factory", "The Corpse Bride", "Dark Shadows", "Edward Scissorhands", "Frankenweenie", "Mars Attacks", "The Nightmare Before Christmas", "Sleepy Hollow", "Sweeney Todd", "9", "Mrs. Peregrine's Home for Peculiar Children"]

function renderButtons() {
	
	$("#setButs").empty();
	
	for (var i = 0; i < tbFilms.length; i++) {
		
		var button = $("<button>");
		
		button.text(tbFilms[i]);
		
		$("#setButs").append(button);
	} 
}

	$("#addFilm").on("click", function(event) {

        event.preventDefault();

        var film = $("#filmInput").val().trim();
       
        tbFilms.push(film);

        $("#filmInput").val("");

        renderButtons();
      });

      renderButtons();

      $("button").on("click", function() {
      
      var filmName = $(this).text();
      
      console.log(filmName);
      
      var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=291492d0455c4054a8fdfc81c2dad351&q=" +
        filmName + "&limit=10&offset=0&rating=G&lang=en";

      $.ajax({
          url: queryURL,
          method: "GET"
        })
        
        .done(function(response) {
          
          console.log(queryURL);

          console.log(response);
          
          var results = response.data;

          for (var i = 0; i < results.length; i++) {

            var filmDiv = $("<div class='displayDiv'>");

            var p = $("<p>").text("Rating: " + results[i].rating);

            var filmImage = $("<img>");
            
            filmImage.attr("src", results[i].images.fixed_height.url);

            filmDiv.append(p);
            filmDiv.append(filmImage);

            $("#timbFilms").prepend(filmDiv);
          }
        });
    });