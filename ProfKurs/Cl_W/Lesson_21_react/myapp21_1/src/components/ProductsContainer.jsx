import React from 'react'
import { products } from '../data/products_data'
import Product from './Product'

export default function ProductsContainer() {
  return (
    <div>
      <p>Products:</p>
      <div>
        {
          products.map(el => <Product key={el.id} {...el} />)
        }
      </div>
    </div>
  )
}
