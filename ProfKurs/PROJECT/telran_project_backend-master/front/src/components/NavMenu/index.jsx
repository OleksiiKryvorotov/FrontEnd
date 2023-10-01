import React from 'react'
import { Link } from 'react-router-dom'
import s from './style.module.css'
import logoImage from '../../Media/image 1.png'
import bag from '../../Media/Vector.png'
import { selectCartItemCount } from '../../store/reducers/cartReducer'
import { useSelector } from 'react-redux'

export default function NavMenu() {

// useSelector для получения количества товаров из корзины:  
const itemCount = useSelector(selectCartItemCount);
//----------------------------------

  return (
    <div className={s.nav_menu}>  
     <img src={logoImage} alt="logo"/>   
      <Link className={s.catalog} to='/categories'>Catalog</Link>
      <Link to='/'>Main Page</Link>      
      <Link to='/products'>All Products</Link>
      <Link to='/sales'>All sales</Link>
      <Link to='/cart'><img src={bag} alt="vector"/>
      <span className={s.cart_item_count}>{itemCount}</span>
       </Link>       
    </div>
  )
}
