// console.log("This script is working")
document.getElementById("search-btn").addEventListener("click", getMovieTitle);

imdbID = ''
let movieRating = ''
function getMovieTitle() {
    let search = encodeURI(document.getElementById("search-movie-title").value);
    // console.log("This is what was searched " + search)
    let apikey = 'ffe37ecb'
    let endpoint = 'https://www.omdbapi.com/?apikey=' + apikey + '&s=' + search
    // console.log(endpoint);
    $.ajax({
        url: endpoint,
        success: "GET"
    }).then(function (response) {
        // console.log(response)
        if (response.Search) {
            document.getElementById("movie-title").textContent = response.Search[0].Title;
            let imdbID = document.getElementById("movie-director").textContent = response.Search[0].imdbID;
            // console.log("This is the IMDB ID " + imdbID)
            let imdbEndpoint = 'https://www.omdbapi.com/?apikey=' + apikey + '&i=' + imdbID;
            searchIMDB(imdbEndpoint)
        } else {
            document.getElementById('searchType').textContent = 'Movie';
            document.getElementById('error-modal').setAttribute('class', 'modal is-active');
        }

    });
    //let imdbEndpoint = 'http://www.omdbapi.com/?apikey='+apikey'&i='+imdbID;
    //searchIMDB(imdbEndpoint)



};

function searchIMDB(imdbEndpoint) {
    $.ajax({
        url: imdbEndpoint,
        success: "GET"
    }).then(function (response) {
        document.getElementById("movie-director").textContent = "Director: " + response.Director
        document.getElementById("movie-year").textContent = "Release Date: " + response.Year
        document.getElementById("movie-rating").textContent = "Rating: " + response.imdbRating * 10
        movieRating = response.imdbRating * 10
        document.getElementById("movie-rating").setAttribute('data-rating', movieRating);
        let poster = response.Poster;
        let altText = "Poster for " + response.Title;
        document.getElementById('movie-poster').setAttribute('src', poster);
        document.getElementById('movie-poster').setAttribute('alt', altText);

        //document.getElementById("movie-title").textContent= response.Search[0].Title;
        //let imdbID = document.getElementById("movie-director").textContent= response.Search[0].imdbID;



    });
};

function closeModal() {
    document.getElementById('error-modal').setAttribute('class', 'modal')
}
