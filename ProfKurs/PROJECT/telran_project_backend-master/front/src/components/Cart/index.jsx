import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartItem from '../CartItem'
import s from './style.module.css'
import { clearCartAction } from '../../store/reducers/cartReducer'

export default function Cart() {

    const cart_state = useSelector(state => state.cart)

    const dispatch = useDispatch()

    const total = cart_state.reduce((acc,  {price, discont_price, count}) => {
    const totalPrice = discont_price ? discont_price : price    
      return acc + totalPrice * count} , 0)

  return (
    <div>
        {/* <p>Cart:</p> */}
        <div>
        {
            cart_state.map(el => <CartItem key={el.id} {...el} />)
        }
        </div>
        <div className={s.clear_btn}
        onClick={() => dispatch(clearCartAction())}
        >
          Clear cart
          </div>
          <p>Total: {total.toFixed(2)}$</p>
    </div>
  )
}
