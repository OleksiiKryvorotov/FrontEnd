import React from 'react'
import s from './style.module.css'

export default function ProductCard({ title, image, price}) {
  return (
    <div className={s.card}>
        <img src={`http://localhost:3333${image}`} alt={title} />
        <p>{ title }</p>  
        <p>{ price }$</p>     
    </div>
  )
}
