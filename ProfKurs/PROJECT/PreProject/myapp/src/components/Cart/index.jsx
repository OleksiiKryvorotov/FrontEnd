import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartItem from '../CartItem'
import s from './style.module.css'
import { clearCartAction } from '../../store/reducers/cartReducer'

export default function Cart() {

    const cart_state = useSelector(state => state.cart)

    console.log(cart_state);


    const dispatch = useDispatch()

    const total = cart_state.reduce((acc,  {price, count}) => acc + price * count, 0)

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
          <p>Total: {total}$</p>
    </div>
  )
}
