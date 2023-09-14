import React from 'react'
import s from './style.module.css'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCartAction } from '../../store/reducers/cartReducer'

export default function ProductCard({ id, title, image, price, discont_price, category, category_show}) {

  const dispatch = useDispatch()

  return (
    <div className={s.card_item}>
      <Link to={`/products/${id}`}>
        <div className={s.card}>
          <img src={`http://localhost:3333${image}`} alt={title} />
          <p>{ title }</p>  
          <p>{ price }$</p>
          <p>Discount: { discont_price }$</p>  
          {/* {
          category_show 
          ? <p>Category: {category}</p> 
          : ''
      }   */
         }      
        </div>
      </Link> 
      <div
       className={s.add_btn}
       onClick={() => dispatch(addToCartAction({ id, title, image, price, discont_price }))}
       >
        Add to Cart
        </div> 
    </div>
    
  )
}
