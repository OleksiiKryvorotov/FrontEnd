import React from 'react'
import ProductCard from '../ProductCard'
import s from './style.module.css'


export default function ProductsContainer({ products, category_show }) {
    return (
      <div className={s.container}>
          {
            products.map(el => <ProductCard key={el.id} {...el} category_show={category_show} />)
          }
      </div>
    )  
}
