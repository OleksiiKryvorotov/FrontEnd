import { useState } from 'react';
import './App.css';
import BooksContainer from './components/BooksContainer';
import { books_data } from './data/books_data';
import AddBookForm from './components/AddBookForm';

function App() {

  const [ books, setBooks ] = useState(books_data);

  const delete_book = (id) => setBooks(books.filter(el => el.id !== id));

  const add_book = book_item => setBooks([...books, book_item])

  return ( 
    <div> 
      <AddBookForm add_book={add_book} />         
           <BooksContainer books={books} delete_book={delete_book} />
    </div>
  );
}

export default App;
