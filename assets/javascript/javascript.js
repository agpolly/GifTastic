  
   //Array of nature words
  var topics = ["Fire", "Water", "Ice", "rainbow", "ocean", "lava", "mountains", "clouds", "snow", "flowers"]

   //Create a button for each nature word
   function addButton() {

   $("#natureButtons").empty();

   for (i = 0; i < topics.length; i++) { 
    var b = $("<button>");
    b.addClass("natural");
    b.attr("data-name", topics[i]);
    b.text(topics[i]);
    $("#natureButtons").append(b);
    b.on("click", searchGiphy);
	}
	};

	//add a new button based on user input
	$("#addNature").on("click", function(event) {
    event.preventDefault();
    var newWord = $("nature-input").val().trim();
    $("nature-input").val("");
    topics.push(newWord);
    addButton();
	});

	//API Key
    var apiKey = "46bafe89ff3a4d47bf9a382d6a0e1005";

    //Function that performs an ajax call to giphy using user input
    function searchGiphy() {

    var natureWord = $(this).text();

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + natureWord + "&api_key=dc6zaTOxFJmzC&limit=10";
    $.ajax({
      url: queryURL,
      method: 'GET',
    }).done(function(response) {
      console.log(response.data);

      var searchResults = response.data;

    //loops through the response data and displays gifs
     for(var i = 0; i < searchResults.length; i++) {

       var natureImages = $('<img>');   

       natureImages.attr("src", searchResults[i].images.fixed_height.url);

       $("#nature").html(natureImages);
    }
    });
	}

	addButton();

	//Things that need fixed:
	//create new button function not working
	//only one gif is displayed- need to incorporate limit parameter to display 10
	//need to add rating for each image
	//need to animate/unanimate the gifs with click event
	//need to style buttons