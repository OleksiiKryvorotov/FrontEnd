import React from 'react'
import BookItem from '../BookItem'
import s from './index.module.css'

export default function BooksContainer({ books, delete_book }) {
  return (    
      <div className={s.book_container}>
            {
              books.map(el => <BookItem key={el.id} {...el} delete_book={delete_book} />)
            }        
      </div>    
  )
}
