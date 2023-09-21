import React, { useEffect } from 'react'
import ProductsContainer from '../../components/ProductsContainer'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../../requests/products_req'

export default function AllSales() {

    const allProducts = useSelector(state => state.allProducts)
    const dispatch = useDispatch()
  
    useEffect(() => dispatch(getAllProducts),[dispatch])
  
    const allSalesProducts = allProducts.filter(el => el.discont_price)
  
    console.log(allSalesProducts);
  
    return (
      <div>
        <ProductsContainer products={allSalesProducts} productsStyle={true}/>
      </div>
    )
  }
