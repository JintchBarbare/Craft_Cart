
const books = [
    { id: "b1", title: "The Sea", genre: "novel", pages: 210 },
    { id: "b2", title: "The Road", genre: "novel", pages: 180 },
    { id: "b3", title: "Poems", genre: "poems", pages: 64 }
];

const shelf = document.querySelector("#shelf");
const status = document.querySelector("#status");
const genreFilter = document.querySelector("#genre-filter");

function renderBooks() {
    shelf.innerHTML = "";

    const selectedGenre = genreFilter.value;

    const filteredBooks = books.filter(book =>
        selectedGenre === "all" || book.genre === selectedGenre
    );

    filteredBooks.forEach(book => {
        const div = document.createElement("div");

        const title = document.createElement("h3");
        title.textContent = book.title;

        const button = document.createElement("button");
        button.textContent = "ვკითხულობ";

        button.addEventListener("click", () => {
            localStorage.setItem("l18-reading", book.id);
            status.textContent = book.title;
        });

        div.append(title, button);
        shelf.appendChild(div);
    });
}

// Restore last reading book
const savedBookId = localStorage.getItem("l18-reading");

const savedBook = books.find(book => book.id === savedBookId);

if (savedBook) {
    status.textContent = savedBook.title;
}

// Restore genre
const savedGenre = sessionStorage.getItem("l18-genre");

if (savedGenre) {
    genreFilter.value = savedGenre;
}

// Save selected genre
genreFilter.addEventListener("change", () => {
    sessionStorage.setItem("l18-genre", genreFilter.value);
    renderBooks();
});

// Initial display
renderBooks();
