import React, {Component} from 'react'
import PropTypes from 'prop-types'

class BookShelf extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        title: PropTypes.string.isRequired,
        handleBookChange: PropTypes.func.isRequired
    }

    render() {
        const { books, title, handleBookChange } = this.props
        // console.log(title + " - " + books)
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                    { books.map((book) => {
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

export default BookShelf