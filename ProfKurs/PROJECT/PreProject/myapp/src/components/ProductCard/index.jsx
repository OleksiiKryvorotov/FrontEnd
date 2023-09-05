import React from 'react'
import s from './style.module.css'
import { Link } from 'react-router-dom'

export default function ProductCard({id, title, price, image }) {
  return (
    <Link to={`/products/${id}`}>
    <div className={s.card}>
        <img src={image} alt={title} />
        <p>{ title }</p>
        <p>{ price }$</p>
    </div>
   </Link>
  )
}
