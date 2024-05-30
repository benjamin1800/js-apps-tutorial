const form = document.getElementById('add-form');
const library = document.querySelector('#book-container');

let read = false;
const myLibrary = [];

form.addEventListener('submit', (event)=> {
    event.preventDefault();
    addBookToLibrary();
    form.reset();  
    displayBooks();
})

function Books(title, author, pages) {
    this.name = name;
    this.author = author;
    this.pages = pages;
}

function addBookToLibrary() {
    const title = document.getElementById('name').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;

    const addedBook = new Books(title, author, pages);
    myLibrary.push(addedBook);
}

function displayBooks() {
        library.innerHTML = '';
        myLibrary.forEach((book, index)=> {
        const div = document.createElement('div');
        div.className = 'card';
    ;

        div.innerHTML = 
        `
        <div class="card-body">
            <h5 class="card-title">${book.name}</h5>
            <p class="card-subtitle mb-2 text-body-secondary"><strong>Author:</strong> ${book.author}</p>
            <p class="card-text"><strong>Page(s):</strong> ${book.pages}</p>
            <button class="btn btn-danger" onclick="remove(${index})">Remove</button>
            <div class="btn-group" role="group" aria-label="Basic checkbox toggle button group">
                <label class="btn btn-outline-success" for="${book.title}">Read</label>
            </div>
        </div>
        `
        library.appendChild(div);
    })
}

function remove(index) {
    myLibrary.splice(index, 1);
    displayBooks()
}