document.addEventListener("DOMContentLoaded", function() {
    let movieEl = document.getElementById('movie-rating');
    let bookEl = document.getElementById('book-rating');
    var observer = new MutationObserver (function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'attributes') {
                // fetch and compare the two values
                let mRating = parseInt(movieEl.getAttribute('data-rating'));
                let bRating = parseInt(bookEl.getAttribute('data-rating'));
                let compareEl = document.createElement('div');
                let compareText = document.createElement('p');
                compareText.setAttribute('class', 'subtitle');
                compareText.textContent = 'This movie was rated '
                if (mRating > bRating) {
                    compareText.append((mRating - bRating) + " points higher than the book");
                } else if (mRating < bRating) {
                    compareText.append((bRating - mRating) + " points lower than the book");    
                } else if (bRating === mRating) {
                    compareText.append("the same as the book");
                }
                compareEl.appendChild(compareText);
                // need an element with id compare on html to add this to
                document.getElementById('compare').appendChild(compareEl);
            };
        });
    });
    observer.observe(movieEl, {
        attributes: true
    });
});