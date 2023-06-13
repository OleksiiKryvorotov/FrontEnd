import React from 'react'
import BookItem from './BookItem'

export default function BooksContainer({ books, delete_book }) {
  return (
    <div>
        <div>
            {
              books.map(el => <BookItem key={el.id} {...el} delete_book={delete_book} />)
            }        
        </div>
    </div>
  )
}
