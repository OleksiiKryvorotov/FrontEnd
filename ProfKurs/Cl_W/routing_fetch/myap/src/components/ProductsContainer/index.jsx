import React, { useState, useEffect } from 'react'
import { getAllProducts } from '../../requests/products_req'
import ProductItem from '../ProductItem';
import s from './index.module.css'

export default function ProductsContainer() {

  const [ products, setProducts ] = useState([]);

  useEffect(() => getAllProducts(setProducts), []);

  console.log(products);

  return (
    <div className={s.container}>
        {
            products.map(el => <ProductItem key={el.id} {...el} />)
        }
    </div>
  )
}
