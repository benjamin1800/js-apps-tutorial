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

function Books(title, author, pages) {
  const bookObj = { title, author, pages };
  return bookObj;
}

function addBookToLibrary() {
  const title = document.getElementById("name").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;

  const addedBook = Books(title, author, pages);
  myLibrary.push(addedBook);
}

function displayBooks() {
  for (let i = 0; i < myLibrary.length; i++) {
    const book = myLibrary[i];
    bookTemplate(book.title, book.author, book.pages);
  }
}

function bookTemplate(title, author, pages) {
  const template = `
  <div> Book Title: ${title}</div>
  <div> Book Author: ${author}</div>
  <div> Book Pages: ${pages}</div>
 `;
  library.innerHTML = template;
}
