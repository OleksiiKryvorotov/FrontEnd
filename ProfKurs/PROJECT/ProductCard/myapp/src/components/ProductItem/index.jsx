import React from 'react'
import s from './style.module.css'
import { useDispatch } from 'react-redux'
import { addToCartAction } from '../../store/reducers/cartReducer';

export default function ProductItem({ id, title, price }) {

  const dispatch = useDispatch();

  return (
    <div className={s.product}>
      <p>{title}</p>
      <p>{price}$</p>
      <div 
        onClick={() => dispatch(addToCartAction({ id, title, price }))}
      >
        Add to cart
      </div>
    </div>
  )
}
