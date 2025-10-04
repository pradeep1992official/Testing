const express = require("express");
const app = express();
const port = 3000;

app.use(express.json()); //Middleware

//Mock database
let books = [
  {
    id: 1,
    title: "Book 1",
    author: "Author 1",
  },
  {
    id: 2,
    title: "Book 2",
    author: "Author 2",
  },
  {
    id: 3,
    title: "Book 3",
    author: "Author 3",
  },
  {
    id: 4,
    title: "Book 4",
    author: "Author 4",
  },
  {
    id: 5,
    title: "Book 5",
    author: "Author 5",
  }
];

//GET Request
app.get("/books", (req, res) => {
  res.json(books);
});

//GET request with ID
app.get("/books/:id", (req, res) => {
  const bookID = parseInt(req.params.id);
  const book = books.find((book) => book.id === bookID);
  if (!book) {
    res.status(404).json({ error: "Book Not found" });
  } else {
    res.json(book);
  }
});

//POST
app.post("/books", (req, res) => {
  const newBook = req.body;
  newBook.id = books.length + 1;
  books.push(newBook);
  res.status(201).json(books);
});


//PUT to modify the records
app.put("/books/:id", (req,res) => {
  const bookID = parseInt(req.params.id);
  const updatedBook = req.body;
  const bookIndex = books.findIndex((book) => book.id === bookID);
  
  if(bookIndex === -1) {
    res.status(404).json("Book not found");
  }
  else {
    books[bookIndex] = {...books[bookIndex], ...updatedBook}; 
    res.json(books[bookIndex]);
  }
});

app.delete ("/books/:id", (req,res) => {
  const bookID = parseInt(req.params.id);
  const bookIndex = books.findIndex((book) => book.id === bookID);
  if(bookIndex===-1) {
    res.status(404).json("Book not found");
  }
  else { 
    const deletedBooks =books.splice(bookIndex, 1);
    res.json(deletedBooks[0]);
  }
})

//Server Start
app.listen(port, () => {
  console.log(`The server is running in the server : ${port}`);
});
