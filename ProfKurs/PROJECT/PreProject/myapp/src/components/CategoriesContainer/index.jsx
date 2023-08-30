import React from 'react'
// import s from './index.module.css'
import { useSelector } from 'react-redux'
import CategoryCard from '../CategoryCard'

export default function CategoriesContainer() {

    const categories_state = useSelector(state => state.categories);
  
    return (
      <div>
        {
          categories_state.map(el => <CategoryCard key={el} category={el} />)
        }
      </div>
    )
  }
