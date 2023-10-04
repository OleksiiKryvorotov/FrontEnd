import React from 'react'
import { useSelector } from 'react-redux'
import ProductsContainer from '../../components/ProductsContainer'

export default function MainPage() {
// РАндом!!!!! ----------------------------------
  const all_products = useSelector(state => state.allProducts)

  const get_random_products = () => {
   const shuffle_products = [...all_products].sort(() => Math.random() - 0.5)
   return shuffle_products.slice(0, 4)
  }

  const random_products = get_random_products() 

  return (    
    <div>
      <p>Four random products</p>

      <ProductsContainer products={random_products}
      category_show={false} />     
    </div>
  )
}
