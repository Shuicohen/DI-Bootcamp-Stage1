interface Book {
    title: string;
    author: string;
    isbn: string;
    publishedYear: number;
    genre?: string;
}

class Library {
    private books: Book[] = [];

    addBook(book: Book): void {
        this.books.push(book);
    }

    getBookDetails(isbn: string): Book | undefined {
        return this.books.find(book => book.isbn === isbn);
    }
}

class DigitalLibrary extends Library {
    readonly website: string;

    constructor(website: string) {
        super();
        this.website = website;
    }

    listBooks(): string[] {
        return this.getAllBooks().map((book) => book.title);
    }

    private getAllBooks(): Book[] {
        const bookList: Book[] = [];
        for(let i = 0; i < 10; i++) {
            const bookDetails = this.getBookDetails(`isbn-${i}`);
            if(bookDetails) {
                bookList.push(bookDetails);
            }
        }
        return bookList;
    }
}

const myDigitalLibrary = new DigitalLibrary('https://mydigitallibrary.com');

myDigitalLibrary.addBook({ title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', isbn: '123', publishedYear: 1925 });
myDigitalLibrary.addBook({ title: '1984', author: 'George Orwell', isbn: '456', publishedYear: 1949, genre: 'Dystopian' });
myDigitalLibrary.addBook({ title: 'To Kill a Mockingbird', author: 'Harper Lee', isbn: '789', publishedYear: 1960 });

const bookDetails = myDigitalLibrary.getBookDetails('456');
if (bookDetails) {
  console.log('Book Details:', JSON.stringify(bookDetails, null, 2));
}

console.log('Book Titles:', myDigitalLibrary.listBooks());