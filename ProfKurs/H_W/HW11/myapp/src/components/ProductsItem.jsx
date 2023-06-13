import React from 'react'

export default function ProductsItem({id, title, price, country, address, delete_product }) {
  return (
    <div>
        <button onClick={() => delete_product(id)}>X</button>
        <p>Title: {title}</p>
        <p>Price: {price}</p>
        <p>Country: {country}</p>
        <p>Address: {address.city} {address.street}</p>
        
    </div>
  )
}
