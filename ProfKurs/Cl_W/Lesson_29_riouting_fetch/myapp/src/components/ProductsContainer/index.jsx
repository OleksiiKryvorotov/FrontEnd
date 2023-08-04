import React, { useEffect, useState } from 'react'
import { getAllProducts} from '../../requests/products_req'
import ProductItem from '../ProductItem'

export default function ProductsContainer() {

    const [ products, setProducts] = useState([])

    useEffect(() => getAllProducts(setProducts), [])    

  return (
    <div>
        {
            products.map(el => <ProductItem key={el.id} {...el} />) 
        }
       
    </div>
  )
}
