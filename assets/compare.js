document.addEventListener("DOMContentLoaded", function () {
    let movieEl = document.getElementById('movie-rating');
    let bookEl = document.getElementById('book-rating');
    let mRating;
    let bRating;
    var observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
            if (mutation.target.getAttribute('id') === 'movie-rating') {
                mRating = parseInt(mutation.target.getAttribute('data-rating'));
            } else if (mutation.target.getAttribute('id') === 'book-rating') {
                bRating = parseInt(mutation.target.getAttribute('data-rating'));
            }
            let compareText = document.getElementById('rating');
            // compareText.setAttribute('class', 'subtitle');
            compareText.textContent = 'This movie was rated ';
            let difference = Math.abs(mRating - bRating);
            if (mRating > bRating) {
                compareText.append(difference + " points higher than the book");
            } else if (mRating < bRating) {
                compareText.append(difference + " points lower than the book");
            } else if (bRating === mRating) {
                compareText.append("the same as the book");
            }
        });
    });

    observer.observe(movieEl, {
        attributes: true
    });
    observer.observe(bookEl, {
        attributes: true
    });

});