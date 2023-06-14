import React from 'react'
import s from './index.module.css'

export default function BookItem({id, title, author, page_num, rating, delete_book }) { 
  
 const item_styles = {
  backgroundColor: page_num > 500 ?'Lightgreen' : 'Lightblue'
 }

  return (
    <div
        className={s.book_item}
        style={item_styles}>

          <span          
           className={s.cross}
           onClick={() => delete_book(id)}
            >
               X
          </span>
        <p>Title: { title }</p>
        <p>Author: { author }</p>
        <p>Pages: { page_num }</p>       
        <p className={s.rating}> Rating: { rating }</p>
    </div>
  )
}
