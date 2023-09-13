import React from 'react'
import s from './index.module.css'
import { useDispatch } from 'react-redux'
import { addToCartAction } from '../../store/reducers/cartReducer'

export default function SingleProductItem({ single_product }) {

  const { id, title, price, description, image, discont_price } = single_product

  const dispatch = useDispatch()

  const saleCalculation = (price, discont_price) => {
    if(discont_price === null){
      return 0
    } 
    return Math.floor((price - discont_price) / price * 100)
  }

  const sale = saleCalculation(price, discont_price)
  
  const addToCart = () => {
    dispatch(addToCartAction(single_product))
  }

  return (
    <div className={s.product_container}>
      <p className={s.title}>{title}</p>
      <div className={s.container}>
        <div className={s.square}>
          <img className={s.image} src={`http://localhost:3333${image}`} alt="" />
      </div>
      <div className={s.right_side}>
        {discont_price === null ? (
          <div className={s.prices}>
            <p>{price}$</p>
          </div>
        ) : (
          <div className={s.discount_price}>
            <p>{discont_price}$</p>
            <p>{price}$</p>
            <p>-{sale}%</p>
          </div>
          
        )}
        <div className={s.button} onClick={addToCart}>To cart</div>
        <div className={s.description}>
        <p>Description:</p>
        <p>{description}</p>
        </div>
      </div>
      </div>
    </div>
  )
}
