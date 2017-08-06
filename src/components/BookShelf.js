import React, {Component} from 'react'
import PropTypes from 'prop-types'

import Book from './Book'

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
                            <Book key={book.id} book={book} handleBookChange={handleBookChange} />
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