import React from 'react'

export default function ProductCard({ title, price, image }) {
  return (
    <div>
        <img src={image} alt={title} />
        <p>{ title }</p>
        <p>{ price }$</p>.
    </div>
  )
}
