import React from 'react'
import s from './index.module.css'
import { Link } from 'react-router-dom'

export default function ProductItem({id,images, title, price }) {
  return (
    <Link to={`/products/${id}`}>
    <div className={s.item}>
      <img src={images[0]} alt={title} />
      <p>{ title }</p>
      <p>{ price }$</p>
    </div>
    </Link>
  )
}
