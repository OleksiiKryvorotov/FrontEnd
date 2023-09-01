import React from 'react'

export default function ProductCard({ title, image}) {
  return (
    <div>
        <img src={image} alt={title} />
        <p>{ title }</p>       
    </div>
  )
}
