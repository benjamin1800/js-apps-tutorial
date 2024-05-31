const form = document.getElementById("add-form");
const library = document.querySelector("#book-container");

let read = false;
const myLibrary = [];

form.addEventListener("submit", (event) => {
  event.preventDefault();
  addBookToLibrary();
  form.reset();
  displayBooks();
});

function Books(id, title, author, pages) {
  const bookObj = { id, title, author, pages };
  return bookObj;
}

function addBookToLibrary() {
  const title = document.getElementById("name").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const id = myLibrary.length + 1;

  const addedBook = Books(id, title, author, pages);
  myLibrary.push(addedBook);
}

function displayBooks() {
  library.innerHTML = "";
  for (let i = 0; i < myLibrary.length; i++) {
    const book = myLibrary[i];
    bookTemplate(book.id, book.title, book.author, book.pages);
  }
}

function bookTemplate(id, title, author, pages) {
  const template = `
  <div> Book Title: ${title}</div>
  <div> Book Author: ${author}</div>
  <div> Book Pages: ${pages}</div>
  
  <div>
  <button class="remove-btn" book-id="${id}">Remove</button>
  </div>
 `;
  library.innerHTML = template;
}

library.addEventListener("click", (event) => {
  if (event.target.classList.contains("remove-btn")) {
    const bookId = event.target.getAttribute("book-id");
    removeBook(bookId);
  }
});

function removeBook(id) {
  const bookIndex = myLibrary.findIndex((book) => book.id === parseInt(id));
  myLibrary.splice(bookIndex, 1);
  displayBooks();
}
