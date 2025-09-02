/* 
🎩 Project: A Tiny Library Utility

Concept: You’ll create a few small utility functions for a "Mini Library System" and then write tests for them with Jest.

Functions to Implement:

(1) addBook(library, book)
- Adds a book (object with title, author, year) to a library array.
- Returns the updated library.

(2) findBook(library, title)
- Searches for a book by its title.
- Returns the book object if found, or null if not.

(3) removeBook(library, title)
- Removes a book by its title.
- Returns the updated library.

(4) countBooksByAuthor(library, author)
- Counts how many books in the library belong to a given author.

Jest Tests to Write:
- Adding a book increases library length.
- Finding an existing book returns the correct object.
- Finding a non-existent book returns null.
- Removing a book shortens the library and removes the correct one.
- Counting books by an author gives the right number.

*/

let libraryArr = [
    {title: "Hello", author:"World"},
    {title: "Foo", author: "Bar"}
];

function addBook(library, book){
    library.push(book);
    return library;
}


function findBook(library, title) {
    const found = library.find(book => book.title === title);
    return found || null;
}

function removeBook(library, title){
    let foundIdx = null;
    let found = library.find((book, i) => {
        foundIdx = i;
        return book.title === title
    });

    if (!found) return;
    
    while (foundIdx != libraryArr.length - 1) {
        [libraryArr[foundIdx], libraryArr[foundIdx + 1]] =  [libraryArr[foundIdx + 1], libraryArr[foundIdx]]
        foundIdx++;
    }

    library.pop();
}



function countBooksByAuthor(library, author){
    const booksByAuthorArr = library.filter(book => book.author === author);
    return booksByAuthorArr.length;
}


export default {
    addBook,
    findBook,
    removeBook,
    countBooksByAuthor
}