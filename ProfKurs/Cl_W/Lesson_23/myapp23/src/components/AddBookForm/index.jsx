import React from 'react'
import s from './index.module.css'

export default function AddBookForm({ add_book }) {

    const handleSubmit = e => {
        e.preventDefault();
        const { title, author, page_num } = e.target;
        const new_book = {
          id: Date.now(),
          title: title.value,
          author: author.value,
          page_num: page_num.value,
          rating: 0        
        }
        add_book(new_book);
        e.target.reset()
      }
  return (
    <form onSubmit={handleSubmit} className = {s.add_form}>
      <input type='text' placeholder='Title' name='title' />
      <input type='text' placeholder='Author' name='author' />
      <input type='text' placeholder='Page number' name='page_num' />      
      <button>Add book</button>
    </form>
  )
}
