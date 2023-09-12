import React from 'react'
import { useSelector } from 'react-redux'
import ProductsContainer from '../../components/ProductsContainer'

export default function AllProductsPage() {

  const all_products_state = useSelector(state => state.allProducts)
  // console.log(all_products_state);

  return (
    <div>
      <ProductsContainer products={all_products_state} // category_show={true}  
      />
    </div>
  )
}

