import React from 'react'
import s from './style.module.css'
import { Link } from 'react-router-dom'

export default function ProductCard({id, title, price, image, category, category_show }) {
  return (
   <div className={s.card_item}>
    <Link to={`/products/${id}`}>
      <div className={s.card}>
        <img src={image} alt={title} />
        <p>{ title }</p>
        <p>{ price }$</p>
        {
          category_show
          ? <p>Category: { category }</p>
          : ''
      }
      </div>
    </Link>
    <div className={s.add_btn}>Add to cart</div>
   </div>
  )
}