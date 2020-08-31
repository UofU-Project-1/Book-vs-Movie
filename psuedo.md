# Page and Film

- [project requirements](#project-requirements)
    - [application](#application)
    - [presentation](#presentation)
- [user story](#user-story)
- [html](#html)
- [issues](#issues)
- [resources](#resources-apis)
- [extra functionality](#extra-functionality)

## Project Requirements
### Application
- [ ] must use at least two server-side APIs
    - [ ] use at least one new third-party API
- [ ] must use a CSS framework other than Bootstrap
- [ ] must be interactive (accept and respond to user input)
- [ ] must have a polished UI
- [ ] must meed goo quality coding standards
- [ ] does not use alerts, confirms or prompts (look into modals)
- [ ] must be deployed to github pages
### Presentation
- [ ] elevator pitch: a one minute description of your application
- [ ] concept: what is your user story? what was your motivation for development?
- [ ] process: what were the technologies used? How were tasks and roles broken down and assigned? What challenges did you encounter? What were your successes?
- [ ] demo: show your stuff!
- [ ] directions for future development
- [ ] links to the deployed application and the github repository

## User story
**WHEN** I search for a book,
**THEN** I get info for the book and see a movie with the same title (that is most likely based on it)

## HTML
- header
- search bar
    - option 1: book priority
        - info
        - related movie
    - option 2: movie priority
        - info
        - related book
- footer

## Issues
**Elements**
- make search bar
- make div to display search result info
    - title
    - author/screenwriter
    - cover/poster
    - rating
- make div to hold related movie/book
    - title
    - screenwriter/author
    - poster/cover
    - rating
- make modal to display for searches with no results
**Styling**
- CSS framework other than Bootstrap
**Functionality**
- get input from search bar
- append input to API URL, initiate AJAX call
    - show modal for searches that don't return result
- return relevant info from AJAX
- populate elements with info

## Resources (APIs)
Books
- https://www.goodreads.com/search/index.xml?key=(apiKey)&q=(searchString)
- returns search results, each contains title, author, publish year, rating, cover image URL
Movies
- Search
    - http://www.omdbapi.com/?apikey=(apikey)&s=(searchstring)
    - returns search results, each contains title, year, **imdbID**, media type, poster URL
- specifics
    - http://www.omdbapi.com/?apikey=(apikey)&i=(imdbID)
    - returns only one result based on imdbID, contains title, year, rated, release date, runtime, genre, director, writers, actors, plot, poster URL, ratings from various sources

## Extra functionality
Recommendations
- https://tastedive.com/api/similar?k=(apikey)&limit=(numberofresults)&q=(searchType):(searchTerm)
    - searchType: book, movie, show, author
    - searchTerm: title, name