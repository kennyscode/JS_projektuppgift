function searchSong(song) {
    let key = "lägg in en key här";
    var cattractionBox = document.getElementsByClassName("ArtistInfoBox");
    if (cattractionBox.length > 0) {
        Array.from(document.getElementsByClassName("ArtistInfoBox")).forEach(
            function(element, index, array) {
                element.remove();
            }
        );
    }


        // skall vi göra något sånt här grabbar????

    fetch('spotify api skall vara här' + song + '&appid=' + key + '')
      .then(function(response) {
          if (response.ok) {
              return response.json();
          } else if (response.status === 400 || response.status === 404) {
              alert(city + " Ingen låt hittades.")
          } else if (response.status === 500) {
              alert("Försök igen.")
          } else {
              alert("Försök igen.")
          }
      })
      .then(function(song) {
          if (document.getElementById("SongBox").checked) {
              DisplaySong(song)
          } else if (document.getElementById("ArtistBox").checked) {
              getAttraction(artist)
          } else {
              DisplaySong(song)
              getAttraction(artist)
          }
      })
      .catch(function(error) {
          console.log(error.message);
      });
}