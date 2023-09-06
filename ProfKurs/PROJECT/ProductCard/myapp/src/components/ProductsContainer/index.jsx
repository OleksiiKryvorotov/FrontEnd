import React from 'react'
import { useSelector } from 'react-redux'
import ProductItem from '../ProductItem';

export default function ProductsContainer() {

  const products_state = useSelector(state => state.products);

  return (
    <div>
      {
        products_state.map(el => <ProductItem key={el.id} {...el} />)
      }
    </div>
  )
}
