import React from 'react'
import s from './style.module.css'
import { Link } from 'react-router-dom';

export default function CategoryCard({ id, title }) { 

  return (
    <Link to={`/categories/${id}`}>
      <div className={s.category_card}>
      { title }
      </div>
    </Link>
  )
}
