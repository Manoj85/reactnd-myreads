import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import BookShelf from './BookShelf'

class ListBooks extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired
    }

    state = {
        currentlyReading: [],
        wantToRead: [],
        read: []
    }

    componentDidMount() {
        // console.log(books)
        /*
        const currentlyReading = books.filter(book => book.shelf === 'currentlyReading')
        const wantToRead = books.filter(book => book.shelf === 'wantToRead')
        const read = books.filter(book => book.shelf === 'read')
        */
        // this.setState({ currentlyReading, wantToRead, read })
    }

    render() {
        const { books } = this.props
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <BookShelf title="Currently Reading" books={books.filter(book => book.shelf === 'currentlyReading')}/>
                        <BookShelf title="Want To Read" books={books.filter(book => book.shelf === 'wantToRead')}/>
                        <BookShelf title="Read" books={books.filter(book => book.shelf === 'read')}/>
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