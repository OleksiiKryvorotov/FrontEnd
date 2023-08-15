import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from '../ProductCard'

export default function ProductsContainer() {

  const products_state = useSelector(state => state.products)

  return (
    <div>
      {
        products_state.map(el => <ProductCard key={el.id} {...el} />)
      }
    </div>
  )
}
