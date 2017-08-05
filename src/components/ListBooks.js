import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import BookShelf from './BookShelf'

class ListBooks extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        onChangeBookShelf: PropTypes.func.isRequired
    }

    render() {
        const { books, onChangeBookShelf } = this.props
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <BookShelf title="Currently Reading" onChangeBookShelf={onChangeBookShelf} books={books.filter(book => book.shelf === 'currentlyReading')}/>
                        <BookShelf title="Want To Read" onChangeBookShelf={onChangeBookShelf} books={books.filter(book => book.shelf === 'wantToRead')}/>
                        <BookShelf title="Read" onChangeBookShelf={onChangeBookShelf} books={books.filter(book => book.shelf === 'read')}/>
                    </div>
                </div>
                <div className="open-search">
                    <Link
                        to="/search"
                        className="add-contact"
                    >Add a book</Link>
                </div>
            </div>
        )
    }

}

export default ListBooks