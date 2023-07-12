import React from 'react'
import s from './index.module.css'
import { Link } from 'react-router-dom'

export default function ProductItem({ id, title, price, images }) {

    const product_route = `/products/${id}`
  return (
    <Link to={product_route}>
    <div className={s.item}>
        <img src={images[0]} alt={title} />
        <p>{ title }</p>
        <p>{ price }$</p>
    </div>
    </Link>
  )
}

