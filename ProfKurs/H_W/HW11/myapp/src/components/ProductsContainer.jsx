import React from 'react'
import ProductsItem from './ProductsItem'

export default function ProductsContainer({ products, delete_product}) {
  return (
    <div>
        {
            products.map(el => <ProductsItem key={el.id} {...el} delete_product={delete_product} />)
        }
    </div>
  )
}
