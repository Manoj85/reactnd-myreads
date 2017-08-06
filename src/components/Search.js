import React, {Component} from 'react'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

// Import APIs
import * as BooksAPI from '../BooksAPI'


class Search extends Component {

    static propTypes = {
        handleBookChange: PropTypes.func.isRequired
    }

    state = {
        query: '',
        books: []
    }

    updateQuery = (query) => {
        this.setState({ query })
        this.handleBookSearch(query)
    }

    clearQuery = () => {
        this.setState({ query: '', books: []})
    }

    handleBookSearch = (query) => {
        if(query !== '') {
            this.updateQuery(query)
            BooksAPI.search(query, 20)
                    .then(books => !books.error ? this.setState({ books }): console.log(books.error))
        } else {
            this.clearQuery(query)
        }

    }

    render() {
        const { handleBookChange } = this.props
        const { query, books } = this.state;
        let bookSearchResult

        if (query) {
            const match = new RegExp(escapeRegExp(query), 'i')
            bookSearchResult = books.filter(book => match.test(book.title))
        } else {
            bookSearchResult = books
        }
        bookSearchResult.sort(sortBy('title'))


        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/" className="close-search">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input
                            type="text"
                            placeholder="Search by title or author"
                            value={query}
                            onChange={(event) => this.handleBookSearch(event.target.value)}
                        />
                    </div>
                </div>
                <div className="search-books-results">

                    {bookSearchResult.length !== 0 && (
                        <div className="showing-books">
                            <span>Now showing {bookSearchResult.length} of {books.length}</span>
                            <button onClick={this.clearQuery}>Show all</button>
                        </div>
                    )}
                    <ol className="books-grid">
                        { bookSearchResult.map((book) => {
                            return (
                                <li key={book.id}>
                                    <div className="book">
                                        <div className="book-top">
                                            <div className="book-cover" style={ book && book.imageLinks && book.imageLinks.thumbnail && { backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                                            <div className="book-shelf-changer">
                                                <select defaultValue={book.shelf} onChange={(event) => handleBookChange(event, book)}>
                                                    <option value="none" disabled>Move to...</option>
                                                    <option value="currentlyReading">Currently Reading</option>
                                                    <option value="wantToRead">Want to Read</option>
                                                    <option value="read">Read</option>
                                                    <option value="none">None</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="book-title">{book.title}</div>
                                        <div className="book-authors">{book.authors}</div>
                                    </div>
                                </li>
                            )

                        })
                        }
                    </ol>
                </div>
            </div>
        )
    }

}

export default Search