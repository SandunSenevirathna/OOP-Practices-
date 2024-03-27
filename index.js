class Book {
    constructor(title, author, isbn, copies) {
      this.title = title;
      this.author = author;
      this.isbn = isbn;
      this.copies = copies;
    }
  }
  
  class Library {
    constructor() {
      this.books = [];
    }
  
    addBook(book) {
      this.books.push(book);
     // console.log(`Added book {${book}}`)
    }
  
    removeBook(isbn) {
      this.books = this.books.filter(book => book.isbn !== isbn);
    }
  
    displayBooks() {
      console.log("============ Display Library Books =========");
      this.books.forEach(book => {
        console.log(` • ${book.title} by ${book.author} - ISBN: ${book.isbn}, Copies Available: ${book.copies}`);
      });
    }
  
    borrowBook(isbn) {
      const book = this.books.find(book => book.isbn === isbn);
      if (book && book.copies > 0) {
        book.copies--;
        console.log(`You have borrowed ${book.title}.`);
      } else {
        console.log("Book not available for borrowing.");
      }
    }
  
    returnBook(isbn) {
      const book = this.books.find(book => book.isbn === isbn);
      if (book) {
        book.copies++;
        console.log(`You have returned ${book.title}.`);
      } else {
        console.log("Invalid book ISBN.");
      }
    }
  }
  

  const library = new Library();
  
  const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", "001", 5);
  const book2 = new Book("To Kill a Mockingbird", "Harper Lee", "002", 3);
  
  library.addBook(book1);
  library.addBook(book2);
  
  library.displayBooks();
  
  library.borrowBook("9780743273565");
  library.borrowBook("9780061120084");// Try to borrow more copies than available
  
  library.returnBook("9780743273565");
  

  