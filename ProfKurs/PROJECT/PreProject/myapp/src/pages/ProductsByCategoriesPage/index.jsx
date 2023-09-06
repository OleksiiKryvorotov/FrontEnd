import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductsByCategory } from '../../requests/products_req'
import ProductsContainer from '../../components/ProductsContainer'
import { useParams } from 'react-router-dom'

export default function ProductsByCategoriesPage() {

  const { category } = useParams()

  const dispatch = useDispatch()

  useEffect(() => dispatch(getProductsByCategory(category)), [])

  const products_by_categiry_state = useSelector(state => state.productsByCategory)

  return (
    <div>
        <ProductsContainer products = {products_by_categiry_state} category_show=
        {false}
        />
    </div>
  )
}
