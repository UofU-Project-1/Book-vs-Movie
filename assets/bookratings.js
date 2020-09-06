// when populating fields, on the book-rating element, set an attribute of data-rating with a value equal to the 100-point scale rating of the book (it'll be used in the compare.js file to compare the ratings)
// document.addEventListener("DOMContentLoaded", function () {
document.getElementById("search-btn").addEventListener("click", getBookTitle);
function getBookTitle() {
    let search = encodeURI(document.getElementById("search-movie-title").value);
    let apiKey = "eqWNq7n8qMzK8VbeMadoyg";
    let bookURL = "https://cors-anywhere.herokuapp.com/https://www.goodreads.com/search/index.xml?key=" + apiKey + "&q=" + search + "&p=1";
    $.ajax({
        url: bookURL,
        type: "GET"
    }).then(function (xml) {
        if (xml.getElementsByTagName('total-results')[0].textContent == 0) {
            document.getElementById('searchType').textContent = 'Book/Movie';
            document.getElementById('error-modal').setAttribute('class', 'modal is-active');
        } else {
            var topResult = xml.getElementsByTagName('work')[0];
            var title = topResult.getElementsByTagName('title')[0].textContent;
            var author = topResult.getElementsByTagName('name')[0].textContent;
            var year = topResult.getElementsByTagName('original_publication_year')[0].textContent;
            var rating = parseInt(topResult.getElementsByTagName('average_rating')[0].textContent);
            rating = rating * 20;
            var cover = topResult.getElementsByTagName('image_url')[0].textContent;
            var altText = "cover for " + title;
            document.getElementById("book-title").textContent = title;
            document.getElementById("book-author").textContent = "Author: " + author;
            document.getElementById("book-year").textContent = "Publication Year: " + year;
            document.getElementById("book-rating").textContent = "Rating: " + rating;
            document.getElementById("book-rating").setAttribute('data-rating', rating);
            document.getElementById("book-cover").setAttribute("src", cover);
            document.getElementById("book-cover").setAttribute("alt", altText);

        }
    });
};
// });
