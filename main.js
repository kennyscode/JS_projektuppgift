function searchMovie(movieName) {
    let key = "6d425fc4";
    var cattractionBox = document.getElementsByClassName("MovieInfoBox");
    if (cattractionBox.length > 0) {
        Array.from(document.getElementsByClassName("MovieInfoBox")).forEach(
            function(element, index, array) {
                element.remove();
            }
        );
    }

    
    fetch('http://www.omdbapi.com/?apikey=' + key + '&t=' + movieName)
        .then(function(response) {
            if (response.ok) {
                return response.json();
            } else if (response.status === 400 || response.status === 404) {
                alert(city + " Ingen film hittades.")
            } else if (response.status === 500) {
                alert("Försök igen.")
            } else {
                alert("Försök igen.")
            }
        })
        .then(function(movie) {
            DisplayMovie(movie)
        })
        .catch(function(error) {
            console.log(error.message);
        });
}


function DisplayMovie(movie) {
    document.getElementById("movieCard").style.display = null;
    var title = document.getElementById("movieTitle");
    title.innerHTML = movie.Title;
    var desc = document.getElementById("movieDescription");
    desc.innerHTML = movie.Plot;
    var img = document.getElementById("moviePoster");
    img.src = movie.Poster;
    
}

