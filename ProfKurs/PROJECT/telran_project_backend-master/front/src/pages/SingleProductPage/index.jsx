import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSingleProduct } from '../../requests/products_req'
import { useParams } from 'react-router-dom'

export default function SingleProductPage() {

  const { id } = useParams()

  const dispatch = useDispatch()

  useEffect(() => dispatch(getSingleProduct(id)), [])

  const single_product_state = useSelector(state => state.singleProduct)

  // console.log(single_product_state);

  const  [{title, price, discont_price, description,  image}] = single_product_state

  return (
    <div>
       <img src={`http://localhost:3333${image}`} alt={title} />
      <div>
        <p>{title}</p>
        <p>Description: {description}</p>
        <p>Price: {price}$</p>  
        <p>Discount: {discont_price}</p>      
       
      </div>
    </div>
  )
}
