import React, { Component } from "react";
import "./App.css";

const BOOKS_PER_PAGE = 10;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [],
      page: 0,
      sortKey: "id"
    };

    this.changeSortKey = this.changeSortKey.bind(this);
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.changeCurrentPage = this.changeCurrentPage.bind(this);
  }

  isLastPage(page) {
    const maxPage = Math.ceil(this.state.books.length / BOOKS_PER_PAGE);
    return page + 1 === maxPage;
  }

  isFirstPage(page) {
    return page === 0;
  }

  nextPage() {
    if (!this.isLastPage(this.state.page)) {
      const nextPage = this.state.page + 1;
      this.changeCurrentPage(nextPage);
    } // else => do nothing
  }

  previousPage() {
    if (!this.isFirstPage(this.state.page)) {
      const previousPage = this.state.page - 1;
      this.changeCurrentPage(previousPage);
    } // else => do nothing
  }

  changeCurrentPage(newPage) {
    if (newPage === this.state.page) {
      return;
    }
    console.log("changeCurrentPage: " + newPage);
    this.setState({
      page: newPage
    });
  }

  renderPagination() {
    const currentPage = this.state.page;
    const firtPageButtonClasses = this.isFirstPage(currentPage)
      ? "page-item disabled"
      : "page-item";
    const lastPageButtonClasses = this.isLastPage(currentPage)
      ? "page-item disabled"
      : "page-item";
    return (
      <nav aria-label="...">
        <ul className="pagination">
          <li className={firtPageButtonClasses}>
            <button className="page-link" onClick={this.previousPage}>
              Previous
            </button>
          </li>
          <li className={lastPageButtonClasses}>
            <button className="page-link" onClick={this.nextPage}>
              Next
            </button>
          </li>
        </ul>
      </nav>
    );
  }

  changeSortKey(newSortKey) {
    if (newSortKey === this.state.sortKey) {
      return;
    }
    console.log("changeSortKey: " + newSortKey);
    this.setState({
      sortKey: newSortKey
    });
  }

  componentDidMount() {
    fetch("/books.json")
      .then(response => response.json())
      .then(books => {
        console.log("componentDidMount: books.length = " + books.length);
        console.log("books: ", books);

        this.setState({
          books: books
        });
      })
      .catch(error => console.error(error));
  }

  generateBookTable() {
    const sortKey = this.state.sortKey;
    const sortedBooks = Array.from(this.state.books).sort((bookA, bookB) => {
      const a = bookA[sortKey];
      const b = bookB[sortKey];
      if (sortKey === "releaseDate") {
        return Date.parse(a) - Date.parse(b);
      } else if (typeof a === "string") {
        return a.localeCompare(b);
      } else {
        return a - b;
      }
    });

    const page = this.state.page;
    const pageFirstBookIx = page * BOOKS_PER_PAGE;
    const pageLastBookIx = pageFirstBookIx + BOOKS_PER_PAGE;
    const bookPage = sortedBooks.slice(pageFirstBookIx, pageLastBookIx);
    return bookPage.map(
      ({ id, authorName, bookTitle, isbn, price, releaseDate }) => {
        return (
          <tr key={id}>
            <th scope="row">{id}</th>
            <td>{authorName}</td>
            <td>{bookTitle}</td>
            <td>{price}</td>
            <td>{isbn}</td>
            <td>{releaseDate}</td>
          </tr>
        );
      }
    );
  }

  render() {
    return (
      <div className="App">
        <div className="table table-hover table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th onClick={e => this.changeSortKey("id")} scope="col">
                  #id
                </th>
                <th onClick={e => this.changeSortKey("authorName")} scope="col">
                  Author
                </th>
                <th onClick={e => this.changeSortKey("bookTitle")} scope="col">
                  Title
                </th>
                <th onClick={e => this.changeSortKey("price")} scope="col">
                  Price
                </th>
                <th onClick={e => this.changeSortKey("isbn")} scope="col">
                  ISBN
                </th>
                <th
                  onClick={e => this.changeSortKey("releaseDate")}
                  scope="col"
                >
                  Release Date
                </th>
              </tr>
            </thead>
            <tbody>{this.generateBookTable()}</tbody>
          </table>
          {this.renderPagination()}
        </div>
      </div>
    );
  }
}

export default App;
