import React from 'react'

export default function BookItem({id, title, author, page_num, rating, delete_book }) {    
  return (
    <div onClick={() => delete_book(id)}>
        <p>Title: { title }</p>
        <p>Author: { author }</p>
        <p>Pages: { page_num }</p>
        <p>Rating: { rating }</p>
    </div>
  )
}
