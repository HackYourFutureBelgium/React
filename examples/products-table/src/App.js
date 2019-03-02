import React, { Component } from 'react';

const BOOKS_PER_PAGE = 10;

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { books: [], isLoading: true, sortKey: 'bookTitle', page: 0 };
  }

  async componentDidMount() {
    const res = await fetch('/books.json');
    const books = await res.json();
    this.setState({ books, isLoading: false });
  }

  onSortByKey(sortKey) {
    this.setState({ sortKey });
  }

  onPrevPage() {
    let page = this.state.page - 1;
    if (page < 0) {
      page = 0;
    }
    this.setState({ page });
  }

  onNextPage() {
    let page = this.state.page + 1;
    if (this.state.books.length > page * BOOKS_PER_PAGE) {
      this.setState({ page });
    }
  }

  render() {
    const { books, isLoading, sortKey, page } = this.state;
    const sortedBooks = Array.from(books).sort((bookA, bookB) => {
      const a = bookA[sortKey];
      const b = bookB[sortKey];
      if (typeof a === 'number') {
        return a - b;
      } else if (typeof a === 'string') {
        return a.localeCompare(b);
      } else {
        throw new Error(`Don't know how to sort ${sortKey}`);
      }
    });
    const offset = page * BOOKS_PER_PAGE;
    const pagedBooks = sortedBooks.slice(offset, offset + BOOKS_PER_PAGE);
    const bookElements = pagedBooks.map(this.renderBookRow);
    return (
      <div className="app">
        <div className="container">
        <h1>Products Table</h1>
        { isLoading && <p className="text-muted">Loading...</p>  }
        <table className="table">
          <thead><tr>
            <th onClick={this.onSortByKey.bind(this, 'bookTitle')}>Title</th>
            <th onClick={this.onSortByKey.bind(this, 'authorName')}>Author</th>
            <th>Release Date</th>
            <th>ISBN</th>
            <th onClick={this.onSortByKey.bind(this, 'price')}>Price</th>
          </tr></thead>
          <tbody>
            { bookElements }
          </tbody>
        </table>
        Page: { page + 1 }
        <button onClick={this.onPrevPage.bind(this)}>Previous</button>
        <button onClick={this.onNextPage.bind(this)}>Next</button>
        </div>
      </div>
    );
  }

  renderBookRow(book) {
    return (
      <tr key={ book.id }>
        <td>{ book.bookTitle }</td>
        <td>{ book.authorName }</td>
        <td>{ book.releaseDate }</td>
        <td>{ book.isbn }</td>
        <td>{ book.price }</td>
      </tr>
    );
  }
}

export default App;
