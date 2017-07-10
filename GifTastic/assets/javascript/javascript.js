   
   //Array of nature words
    var topics = ["Fire", "Water", "Ice", "rainbow"];

   //Create a button for each nature word
   $("#natureButtons").empty();

   for (i = 0; i < topics.length; i++) { 
    var b = $("<button>");
    b.addClass("natural");
    b.attr("data-name", topics[i]);
    b.text(topics[i]);
    $("#natureButtons").append(b);
	}
	
	//API Key
    var apiKey = "46bafe89ff3a4d47bf9a382d6a0e1005"

    //API URL
    var queryURL = "http://api.giphy.com/v1/gifs/search";

    //Function that passes parameters through ajax call to giphy
    //nction searchGiphy(natureWord, rated, number) {
    $.ajax({
      url: queryURL,
      method: 'GET',
      data: {q: "fire", rating: "g", limit: 10, api_key: apiKey}
    }).done(function(response) {
      console.log(response);

    //loops through the response data and displays gifs
     for(var i = 0; i < response.data.length; i++){
       var imageUrl = response.data[i].images.fixed_height.url; 
       var natureImages = $('<img>');         

       natureImages.attr('src', imageUrl);
       natureImages.attr('alt', 'Nature Image');

       $("#nature").prepend(natureImages);
    }
    });

	//archGiphy("Fire", "g", 10);