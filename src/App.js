import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'

import ListBooks from './components/ListBooks'
import Search from './components/Search'
import './App.css'

class BooksApp extends Component {
  state = {
    books: []
  }

  componentDidMount() {
    this.getAllBooks()
  }

  getAllBooks = () => {
    BooksAPI.getAll().then((books) => {
        this.setState({ books });
    })
  }

  changeBookShelf = (event, book) => {
      const shelf = event.target.value
      BooksAPI.update(book, shelf)
          .then(() => this.getAllBooks())
  }

  render() {
    // console.log(this.state.books)
    return (
      <div className="app">
        { /* Main Page */ }
        <Route exact path="/" render={() => (
            <ListBooks books={this.state.books} onChangeBookShelf={this.changeBookShelf}/>
        )}/>

        { /* Search Page */ }
        <Route path="/search" render={( {history} ) => (
            <Search/>
        )}/>
      </div>
    )
  }
}

export default BooksApp
