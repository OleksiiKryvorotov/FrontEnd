import React from 'react'
import { getSingleProducts } from '../../requests/products_req'
import { useParams } from 'react-router-dom'

export default function SingleProductPage() {

  const { id } = useParams()
  console.log(id);

  getSingleProducts(id)

  return (
    <div>SingleProductPage</div>
  )
}
