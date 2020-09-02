console.log("This script is working")
document.getElementById("search-btn").addEventListener("click", getMovieTitle);

imdbID = ''
let movieRating = ''
function getMovieTitle() {
    let search = document.getElementById("search-movie-title").value
    console.log("This is what was searched " + search)
    let apikey = 'ffe37ecb'
    let endpoint = 'http://www.omdbapi.com/?apikey='+apikey+'&s='+search
    $.ajax({
        url: endpoint,
        success: "GET" }).then(function(response) {
            console.log(response)
            document.getElementById("movie-title").textContent= response.Search[0].Title;
            let imdbID = document.getElementById("movie-director").textContent= response.Search[0].imdbID;
            console.log("This is the IMDB ID " + imdbID)
            let imdbEndpoint = 'http://www.omdbapi.com/?apikey='+apikey+'&i='+imdbID;
            searchIMDB(imdbEndpoint)

        });
        //let imdbEndpoint = 'http://www.omdbapi.com/?apikey='+apikey'&i='+imdbID;
        //searchIMDB(imdbEndpoint)
    


};
function searchIMDB(imdbEndpoint) {
    $.ajax({
        url: imdbEndpoint,
        success: "GET" }).then(function(response) {
            console.log(response)
            document.getElementById("movie-director").textContent= "Director: " + response.Director
            document.getElementById("movie-year").textContent= "Release Date: " + response.Year
            document.getElementById("movie-rating").textContent= "Rating: " + response.imdbRating * 10
            let movieRating = response.imdbRating * 10
            //document.getElementById("movie-title").textContent= response.Search[0].Title;
            //let imdbID = document.getElementById("movie-director").textContent= response.Search[0].imdbID;
            


        });
};
