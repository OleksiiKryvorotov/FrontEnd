import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSingleProduct } from '../../requests/products_req'
import { useParams } from 'react-router-dom'

export default function SingleProductPage() {

  const { id } = useParams()

  const dispatch = useDispatch()

  useEffect(() => dispatch(getSingleProduct(id)), [])

  const single_product_state = useSelector(state => state.singleProduct)

  const { title, price, description, category, image, rating } = single_product_state

  return (
    <div>
      <img src={image} alt={title} />
      <div>
        <p>{title}</p>
        <p>Description: {description}</p>
        <p>Price: {price}$</p>
        <p>Rating: ? </p>
        <p>{category}</p>
      </div>
    </div>
  )
}
